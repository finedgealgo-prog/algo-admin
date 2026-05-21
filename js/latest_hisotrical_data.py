import time
import pyotp
import calendar
from datetime import datetime, timedelta, timezone
from pymongo import MongoClient
from SmartApi import SmartConnect

# ==============================================================
# CONFIGURATION
# ==============================================================
API_KEY = "G2gHopMT"
CLIENT_CODE = "PKKK1006"
PASSWORD = "0210"
TOTP_KEY = "FHAL7NZ7RUO3YWCWXMIC4AFZ6I"

# 👉 USER INPUT DATE RANGE
FROM_DATE_STR = "2026-03-02"
TO_DATE_STR   = "2026-03-06"

MONGO_URI = "mongodb://localhost:27017/"
DB_NAME = "stock_data"

COLLECTION_STOCKS = "angel_stock_list"
COLLECTION_STOCK_HISTORICAL = "stock_historical_data"
COLLECTION_INDEX_HISTORICAL = "index_historical_data"

EXCHANGE = "NSE"
INTERVAL = "ONE_DAY"
MAX_DAYS = 60
CH_SERIES = "EQ"

# ==============================================================
# IGNORE DATES (NON-TRADING / CUSTOM)
# ==============================================================
IGNORE_DATES = {
    datetime.strptime(d, "%Y-%m-%d").date()
    for d in {
        "2025-01-26",
        "2025-03-29",
        "2025-08-15",
        "2026-01-10",
        "2026-01-11",
        "2026-01-24",
        "2026-01-25",
        "2026-01-26",
        "2026-01-31",
        "2026-02-14",
        "2026-02-15",
    }
}

# ==============================================================
# HARD RATE LIMIT (ANGEL ONE: 3 REQUESTS / SECOND)
# ==============================================================
LAST_API_CALL_TIME = 0.0
API_MIN_INTERVAL = 0.40

def enforce_rate_limit():
    global LAST_API_CALL_TIME
    now = time.time()
    elapsed = now - LAST_API_CALL_TIME
    if elapsed < API_MIN_INTERVAL:
        time.sleep(API_MIN_INTERVAL - elapsed)
    LAST_API_CALL_TIME = time.time()

# ==============================================================
# MONGO SETUP
# ==============================================================
client = MongoClient(MONGO_URI)
db = client[DB_NAME]
stocks_col = db[COLLECTION_STOCKS]
stock_historical_col = db[COLLECTION_STOCK_HISTORICAL]
index_historical_col = db[COLLECTION_INDEX_HISTORICAL]

# ==============================================================
# ANGEL ONE LOGIN
# ==============================================================
def angel_login():
    print("🔐 Logging into Angel One SmartAPI...")
    api = SmartConnect(api_key=API_KEY)
    totp = pyotp.TOTP(TOTP_KEY).now()
    api.generateSession(CLIENT_CODE, PASSWORD, totp)
    api.getfeedToken()
    print("✅ Login successful.")
    return api

smartApi = angel_login()

# ==============================================================
# INDEX SYMBOL NORMALIZATION
# ==============================================================
INDEX_MAP = {
    "GOLDBEES-EQ": "gold_bees",
    "NIFTY50": "nifty_50",
    "NIFTY500": "nifty_500",
    "NIFTYMIDCAP100": "nifty_midcap_100",
    "NIFTY100": "nifty_100",
    "NIFTYNXT50": "nifty_next_50",
    "NIFTYSMLCAP100": "nifty_smallcap_50",
    "NIFTY200": "nifty_200",
    "NIFTY 50": "nifty_50",
    "NIFTY 500": "nifty_500",
    "NIFTY MIDCAP100": "nifty_midcap_100",
    "NIFTY 100": "nifty_100",
    "NIFTY NXT50": "nifty_next_50",
    "NIFTY SMLCAP100": "nifty_smallcap_50",
    "NIFTY 200": "nifty_200"
}

def normalize_index_symbol(symbol: str):
    return INDEX_MAP.get(symbol.upper(), symbol.lower().replace(" ", "_"))

# ==============================================================
# FETCH HISTORICAL DATA
# ==============================================================
def fetch_candles(token: str, from_date: datetime, to_date: datetime):
    params = {
        "exchange": EXCHANGE,
        "symboltoken": str(token),
        "interval": INTERVAL,
        "fromdate": from_date.strftime("%Y-%m-%d 00:00"),
        "todate": to_date.strftime("%Y-%m-%d 00:00")
    }

    try:
        enforce_rate_limit()
        data = smartApi.getCandleData(params)

        if data and data.get("status") and isinstance(data.get("data"), list):
            return data["data"]

        print(f"⚠️ No data for token {token}: {data}")
        return []

    except Exception as e:
        if "Access denied" in str(e):
            print("⏳ Rate limit block detected. Cooling down 5 seconds...")
            time.sleep(5)
        else:
            print(f"❌ Error fetching token {token}: {e}")
        return []

# ==============================================================
# TRANSFORM STOCK DATA
# ==============================================================
def transform_stock_candles(symbol, token, candles):
    out = []

    for c in candles:
        dt = datetime.fromisoformat(c[0].replace("Z", "+05:30"))
        if dt.date() in IGNORE_DATES:
            continue

        out.append({
            "h_symbol": symbol,
            "token": token,
            "ch_timestamp": dt.strftime("%Y-%m-%d"),
            "ch_series": CH_SERIES,
            "ch_opening_price": c[1],
            "ch_high_price": c[2],
            "ch_low_price": c[3],
            "ch_closing_price": c[4],
            "ch_volume": c[5],
            "ch_unix_timestamp": calendar.timegm(dt.utctimetuple()),
            "ch_utc_timestamp": dt.astimezone(timezone.utc).strftime("%Y-%m-%dT%H:%M:%SZ")
        })

    out.sort(key=lambda x: x["ch_timestamp"])

    for i in range(1, len(out)):
        out[i]["ch_previous_cls_price"] = out[i - 1]["ch_closing_price"]

    if out:
        out[0]["ch_previous_cls_price"] = None

    return out

# ==============================================================
# TRANSFORM INDEX DATA
# ==============================================================
def transform_index_candles(symbol, candles):
    out = []
    sym = normalize_index_symbol(symbol)

    for c in candles:
        dt = datetime.fromisoformat(c[0].replace("Z", "+05:30"))
        if dt.date() in IGNORE_DATES:
            continue

        out.append({
            "i_symbol": sym,
            "ih_timestamp": dt.strftime("%Y-%m-%d"),
            "i_open_price": c[1],
            "i_high_price": c[2],
            "i_low_price": c[3],
            "i_close_price": c[4],
            "i_volume": c[5],
            "i_unix_timestamp": calendar.timegm(dt.utctimetuple())
        })

    out.sort(key=lambda x: x["ih_timestamp"])

    for i in range(1, len(out)):
        prev = out[i - 1]["i_close_price"]
        curr = out[i]["i_close_price"]
        out[i]["i_previous_close"] = prev
        out[i]["i_ch"] = round(((curr - prev) / prev) * 100, 2) if prev else 0

    if out:
        out[0]["i_previous_close"] = out[0]["i_close_price"]
        out[0]["i_ch"] = 0.0

    return out

# ==============================================================
# MAIN EXECUTION
# ==============================================================
def run_historical_collector():
    start_date = datetime.strptime(FROM_DATE_STR, "%Y-%m-%d")
    end_date = datetime.strptime(TO_DATE_STR, "%Y-%m-%d")

    print(f"\n📅 Fetching historical data from {start_date.date()} → {end_date.date()}")

    stocks = list(
        stocks_col.find(
            {"exchange": "NSE"},
            {"symbol": 1, "token": 1, "series": 1, "_id": 0}
        )
    )

    for idx, stock in enumerate(stocks, start=1):
        symbol = stock["symbol"]
        token = str(stock["token"])
        series = stock.get("series", "EQ")

        print(f"\n[{idx}/{len(stocks)}] 📈 {symbol} ({series})")

        current_start = start_date

        while current_start <= end_date:
            current_end = min(current_start + timedelta(days=MAX_DAYS), end_date)

            candles = fetch_candles(token, current_start, current_end)

            if candles:
                if series == "index":
                    docs = transform_index_candles(symbol, candles)
                    col = index_historical_col
                else:
                    docs = transform_stock_candles(symbol, token, candles)
                    col = stock_historical_col

                if not docs:
                    print("   ⏭️ All candles ignored")
                else:
                    try:
                        col.insert_many(docs, ordered=False)
                        print(f"   ✅ Inserted {len(docs)} records")
                    except Exception as e:
                        if "E11000" in str(e):
                            print("   ⚙️ Duplicate skipped")
                        else:
                            print("   ⚠️ Mongo error:", e)

            current_start = current_end + timedelta(days=1)

    print("\n🎉 Historical data import completed safely.")

# ==============================================================
# RUN SCRIPT
# ==============================================================
if __name__ == "__main__":
    run_historical_collector()
