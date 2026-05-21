import calendar
from datetime import datetime, timezone
from typing import Any

from pymongo import MongoClient, UpdateOne
from pymongo.errors import BulkWriteError
from kiteconnect import KiteConnect

MONGO_URI = "mongodb://localhost:27017/"
DB_NAME = "stock_data"
KITE_MARKET_CONFIG_ID = "69e18416c3d234dc8c90e6ca"

COLLECTION_STOCKS = "scanner_stocks_list"
COLLECTION_INDEX_STOCKS = "scanner_index_stocks"
COLLECTION_STOCK_HISTORICAL = "scanner_stock_historical_data"
COLLECTION_INDEX_HISTORICAL = "scanner_index_historical_data"

KITE_QUOTE_BATCH_SIZE = 500
DB_BULK_BATCH_SIZE = 1000

INDEX_MASTER = {
    "gold_bees": {"exchange": "NSE", "tradingsymbol": "GOLDBEES-EQ", "symbol": "GOLDBEES"},
    "nifty_50": {"exchange": "NSE", "tradingsymbol": "NIFTY 50", "symbol": "NIFTY"},
    "nifty_100": {"exchange": "NSE", "tradingsymbol": "NIFTY 100", "symbol": "NIFTY100"},
    "nifty_200": {"exchange": "NSE", "tradingsymbol": "NIFTY 200", "symbol": "NIFTY200"},
    "nifty_500": {"exchange": "NSE", "tradingsymbol": "NIFTY 500", "symbol": "NIFTY500"},
    "nifty_next_50": {"exchange": "NSE", "tradingsymbol": "NIFTY NEXT 50", "symbol": "NIFTYNXT50"},
    "nifty_midcap_100": {"exchange": "NSE", "tradingsymbol": "NIFTY MIDCAP 100", "symbol": "NIFTYMIDCAP100"},
    "nifty_midcap_50": {"exchange": "NSE", "tradingsymbol": "NIFTY MIDCAP 50", "symbol": "NIFTYMIDCAP50"},
    "nifty_smallcap_50": {"exchange": "NSE", "tradingsymbol": "NIFTY SMLCAP 100", "symbol": "NIFTYSMLCAP100"},
    "nifty_bank": {"exchange": "NSE", "tradingsymbol": "NIFTY BANK", "symbol": "BANKNIFTY"},
    "nifty_fin_service": {"exchange": "NSE", "tradingsymbol": "NIFTY FIN SERVICE", "symbol": "FINNIFTY"},
    "nifty_mid_select": {"exchange": "NSE", "tradingsymbol": "NIFTY MID SELECT", "symbol": "MIDCPNIFTY"},
    "sensex": {"exchange": "BSE", "tradingsymbol": "SENSEX", "symbol": "SENSEX"},
}


def chunkify(items: list[str], size: int):
    for i in range(0, len(items), size):
        yield items[i:i + size]


client = MongoClient(MONGO_URI)
db = client[DB_NAME]
stocks_col = db[COLLECTION_STOCKS]
index_stocks_col = db[COLLECTION_INDEX_STOCKS]
stock_historical_col = db[COLLECTION_STOCK_HISTORICAL]
index_historical_col = db[COLLECTION_INDEX_HISTORICAL]
kite_cfg_col = db["kite_market_config"]


try:
    stock_historical_col.create_index(
        [("h_symbol_token", 1), ("ch_timestamp", 1)],
        unique=True,
        background=True,
        partialFilterExpression={"h_symbol_token": {"$exists": True, "$ne": None}},
    )
    index_historical_col.create_index(
        [("i_symbol", 1), ("ih_timestamp", 1)],
        unique=True,
        background=True,
        partialFilterExpression={"i_symbol": {"$exists": True, "$ne": None}},
    )
    print("✅ Ensured historical indexes.")
except Exception as exc:
    print("⚠️ Index creation warning:", exc)


def load_kite_client() -> KiteConnect:
    cfg = kite_cfg_col.find_one({"_id": KITE_MARKET_CONFIG_ID}, {"api_key": 1, "access_token": 1}) or {}
    api_key = str(cfg.get("api_key") or "").strip()
    access_token = str(cfg.get("access_token") or "").strip()
    if not api_key:
        raise ValueError("Kite api key not configured in kite_market_config.")
    if not access_token:
        raise ValueError("Kite access token not configured in kite_market_config.")

    kite = KiteConnect(api_key=api_key)
    kite.set_access_token(access_token)
    return kite


def build_stock_instruments() -> tuple[list[str], dict[str, dict[str, Any]]]:
    rows = list(
        stocks_col.find(
            {"exchange": "NSE"},
            {
                "_id": 0,
                "symbol": 1,
                "tradingsymbol": 1,
                "kite_token": 1,
                "token": 1,
                "instrument_token": 1,
                "exchange_token": 1,
                "series": 1,
            },
        )
    )
    instruments: list[str] = []
    meta_map: dict[str, dict[str, Any]] = {}

    for row in rows:
        trading_symbol = str(row.get("tradingsymbol") or row.get("symbol") or "").strip().upper()
        if not trading_symbol:
            continue
        instrument = f"NSE:{trading_symbol}"
        instruments.append(instrument)
        meta_map[instrument] = row

    return instruments, meta_map


def build_index_instruments() -> tuple[list[str], dict[str, dict[str, Any]]]:
    rows = list(
        index_stocks_col.find(
            {},
            {"_id": 0, "filter_symbol": 1, "name": 1, "symbol": 1, "tradingsymbol": 1, "kite_token": 1},
        )
    )
    instruments: list[str] = []
    meta_map: dict[str, dict[str, Any]] = {}
    seen: set[str] = set()

    for row in rows:
        filter_symbol = str(row.get("filter_symbol") or "").strip().lower()
        master = INDEX_MASTER.get(filter_symbol)
        if not master:
            continue
        exchange = str(row.get("exchange") or master["exchange"]).strip().upper()
        trading_symbol = str(row.get("tradingsymbol") or master["tradingsymbol"]).strip()
        if not trading_symbol:
            continue
        instrument = f"{exchange}:{trading_symbol}"
        if instrument in seen:
            continue
        seen.add(instrument)
        instruments.append(instrument)
        meta_map[instrument] = {
            **row,
            "symbol": row.get("symbol") or master["symbol"],
            "tradingsymbol": trading_symbol,
            "exchange": exchange,
            "normalized_symbol": filter_symbol,
        }

    return instruments, meta_map


def fetch_quotes(kite: KiteConnect, instruments: list[str]) -> dict[str, Any]:
    if not instruments:
        return {}

    all_quotes: dict[str, Any] = {}
    total_batches = (len(instruments) + KITE_QUOTE_BATCH_SIZE - 1) // KITE_QUOTE_BATCH_SIZE

    for idx, batch in enumerate(chunkify(instruments, KITE_QUOTE_BATCH_SIZE), start=1):
        print(f"📦 Quote batch {idx}/{total_batches} ({len(batch)} instruments)", flush=True)
        quote_map = kite.quote(batch) or {}
        all_quotes.update(quote_map)

    return all_quotes


def _quote_timestamp(payload: dict[str, Any]) -> datetime:
    dt = payload.get("timestamp") or payload.get("last_trade_time") or datetime.now(timezone.utc)
    if isinstance(dt, datetime):
        return dt
    return datetime.now(timezone.utc)


def transform_stock_quote(instrument: str, payload: dict[str, Any], meta: dict[str, Any]) -> dict[str, Any]:
    dt = _quote_timestamp(payload)
    ohlc = payload.get("ohlc") or {}
    symbol = str(meta.get("symbol") or instrument.split(":", 1)[-1]).strip().upper()
    token = str(
        meta.get("kite_token")
        or meta.get("token")
        or meta.get("instrument_token")
        or payload.get("instrument_token")
        or ""
    ).strip()
    return {
        "h_symbol": symbol,
        "ch_timestamp": dt.strftime("%Y-%m-%d"),
        "ch_series": str(meta.get("series") or "EQ").strip() or "EQ",
        "ch_opening_price": ohlc.get("open"),
        "ch_high_price": ohlc.get("high"),
        "ch_low_price": ohlc.get("low"),
        "ch_closing_price": payload.get("last_price"),
        "ch_previous_cls_price": ohlc.get("close"),
        "ch_last_traded_price": payload.get("last_price"),
        "ch_tot_traded_val": payload.get("volume"),
        "ch_52week_high_price": payload.get("ohlc", {}).get("high"),
        "ch_52week_low_price": payload.get("ohlc", {}).get("low"),
        "ch_unix_timestamp": calendar.timegm(dt.utctimetuple()),
        "ch_utc_timestamp": dt.astimezone(timezone.utc).strftime("%Y-%m-%dT%H:%M:%SZ"),
        "h_symbol_token": token,
    }


def transform_index_quote(payload: dict[str, Any], meta: dict[str, Any]) -> dict[str, Any]:
    dt = _quote_timestamp(payload)
    ohlc = payload.get("ohlc") or {}
    return {
        "i_symbol": str(meta.get("normalized_symbol") or "").strip(),
        "ih_timestamp": dt.strftime("%Y-%m-%d"),
        "i_open_price": ohlc.get("open"),
        "i_high_price": ohlc.get("high"),
        "i_low_price": ohlc.get("low"),
        "i_last_traded_price": payload.get("last_price"),
        "i_close_price": payload.get("last_price"),
        "i_previous_close": ohlc.get("close"),
        "i_volume": payload.get("volume") or 0,
        "i_ch": payload.get("net_change") or 0.0,
        "i_unix_timestamp": calendar.timegm(dt.utctimetuple()),
    }


def bulk_upsert(target_col, docs: list[dict[str, Any]], key_fields: tuple[str, str], batch_size: int = DB_BULK_BATCH_SIZE) -> int:
    if not docs:
        return 0

    total = 0
    for start in range(0, len(docs), batch_size):
        batch = docs[start:start + batch_size]
        ops = []
        for doc in batch:
            key_value = doc.get(key_fields[0])
            ts_value = doc.get(key_fields[1])
            if not key_value or not ts_value:
                continue
            ops.append(
                UpdateOne(
                    {key_fields[0]: key_value, key_fields[1]: ts_value},
                    {"$set": doc},
                    upsert=True,
                )
            )
        if not ops:
            continue
        try:
            result = target_col.bulk_write(ops, ordered=False)
            total += (result.upserted_count or 0) + (result.modified_count or 0)
            print(
                f"💾 {target_col.name}: matched={result.matched_count} modified={result.modified_count} upserted={result.upserted_count}",
                flush=True,
            )
        except BulkWriteError as exc:
            print(f"⚠️ Bulk write warning for {target_col.name}: {exc.details}", flush=True)
    return total


def run_daily_collector():
    started_at = time_start = datetime.now()
    print(f"\n🕒 Starting fast Kite daily collector — {started_at.strftime('%Y-%m-%d %H:%M:%S')}", flush=True)

    kite = load_kite_client()
    print("✅ Kite client ready.", flush=True)

    stock_instruments, stock_meta = build_stock_instruments()
    index_instruments, index_meta = build_index_instruments()
    print(f"✅ Loaded {len(stock_instruments)} stock instruments from {COLLECTION_STOCKS}", flush=True)
    print(f"✅ Loaded {len(index_instruments)} index instruments from {COLLECTION_INDEX_STOCKS}", flush=True)

    stock_quotes = fetch_quotes(kite, stock_instruments)
    index_quotes = fetch_quotes(kite, index_instruments)

    stock_docs = [
        transform_stock_quote(instrument, payload, stock_meta[instrument])
        for instrument, payload in stock_quotes.items()
        if instrument in stock_meta
    ]
    index_docs = [
        transform_index_quote(payload, index_meta[instrument])
        for instrument, payload in index_quotes.items()
        if instrument in index_meta
    ]

    print(f"✅ Transformed stock docs: {len(stock_docs)}", flush=True)
    print(f"✅ Transformed index docs: {len(index_docs)}", flush=True)

    stock_done = bulk_upsert(stock_historical_col, stock_docs, ("h_symbol_token", "ch_timestamp"))
    index_done = bulk_upsert(index_historical_col, index_docs, ("i_symbol", "ih_timestamp"))

    elapsed = round((datetime.now() - time_start).total_seconds(), 2)
    print(f"🎉 Completed. stock_upserts={stock_done} index_upserts={index_done} elapsed={elapsed}s\n", flush=True)


if __name__ == "__main__":
    run_daily_collector()
