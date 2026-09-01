import{h as mi,s as bi,r as i,C as gi,q as Jn,j as e,M as yi}from"./index-Cl6ZtIcp.js";import{C as rr,r as vi}from"./chart-qJUTAp75.js";import{c as ji}from"./spanMargin-BBcebR2q.js";rr.register(...vi);const Kn="https://algo.finedgealgo.com/algo".replace(/\/+$/,""),ki="https://simulator.finedgealgo.com/simulator".replace(/\/+$/,""),Me=`${ki}/paper-trade`,ct="__create_new_portfolio__",er=["NIFTY","BANKNIFTY","FINNIFTY","SENSEX","MIDCPNIFTY"],wi=[{v:0,l:"Off"},{v:5,l:"5 Sec"},{v:10,l:"10 Sec"},{v:15,l:"15 Sec"},{v:30,l:"30 Sec"},{v:60,l:"60 Sec"}],pt={NIFTY:65,BANKNIFTY:30,FINNIFTY:60,SENSEX:20,MIDCPNIFTY:120},ao=104,ir=8,tr=ao+ir;function ws(u){return u?u>=1e7?(u/1e7).toFixed(1)+"Cr":u>=1e5?(u/1e5).toFixed(1)+"L":Math.round(u/1e3)+"K":"—"}function ae(u){return String(u).padStart(2,"0")}function $t(u){return`${u.getFullYear()}-${ae(u.getMonth()+1)}-${ae(u.getDate())}T${ae(u.getHours())}:${ae(u.getMinutes())}:${ae(u.getSeconds())}`}function Ni(u){return`${u.getFullYear()}-${ae(u.getMonth()+1)}-${ae(u.getDate())} ${ae(u.getHours())}:${ae(u.getMinutes())}:${ae(u.getSeconds())}`}function sr(u){const m=new Date(u);for(m.setHours(15,30,0,0),m.setDate(m.getDate()-1);m.getDay()===0||m.getDay()===6;)m.setDate(m.getDate()-1);return m}function ar(u){const m=new Date(u),b=m.getDay(),S=m.getHours()*60+m.getMinutes(),w=9*60+15,E=15*60+30;return b===0||b===6||S<w?sr(m):(S>E&&m.setHours(15,30,0,0),m)}function Ft(u=new Date){return ar(u).getTime()}function _s(u){const m=1/(1+.2316419*Math.abs(u)),b=.3989423*Math.exp(-u*u/2),S=b*m*(.3193815+m*(-.3565638+m*(1.781478+m*(-1.821256+m*1.330274))));return u>0?1-S:S}function lo(u,m,b,S,w){if(b<=1e-6||w<=0)return Math.max(0,u-m);const E=(Math.log(u/m)+(S+.5*w*w)*b)/(w*Math.sqrt(b));return u*_s(E)-m*Math.exp(-.05*b)*_s(E-w*Math.sqrt(b))}function co(u,m,b,S,w){if(b<=1e-6||w<=0)return Math.max(0,m-u);const E=(Math.log(u/m)+(S+.5*w*w)*b)/(w*Math.sqrt(b)),$=E-w*Math.sqrt(b);return m*Math.exp(-.05*b)*_s(-$)-u*_s(-E)}function io(u,m,b,S,w,E){if(u<=0||S<1/(365*24*60))return null;let $=.001,ut=5;for(let ft=0;ft<60;ft++){const ke=($+ut)/2,A=E==="CE"?lo(m,b,S,w,ke):co(m,b,S,w,ke);if(Math.abs(A-u)<.01)return ke;A<u?$=ke:ut=ke}return($+ut)/2}function Ns(u,m,b,S){return u.map(w=>{var E;return((E=m?b[w]:S[w])==null?void 0:E.oi)??0})}function Si(u,m){const b=m.findIndex(S=>S===u);return b===0?"CURRENT_WEEK":b===1?"NEXT_WEEK":u?"CUSTOM":"CURRENT_WEEK"}function _i(u){return(Array.isArray(u)?u:Array.isArray(u==null?void 0:u.portfolios)?u.portfolios:Array.isArray(u==null?void 0:u.data)?u.data:[]).map(b=>{if(typeof b=="string"){const $=b.trim();return $?{label:$,value:$}:null}if(!b||typeof b!="object")return null;const S=b,w=String(S.portfolio_name??S.name??S.title??S._id??"").trim();return w?{label:String(S.portfolio_name??S.name??w).trim()||w,value:w}:null}).filter(b=>!!b)}function Oe(u,m,b){return`${u}|${m}|${b}`}function dt(u,m){return u?String(m||"").trim()===String(u.expiry||"").trim():!1}function Ss(u=[]){const m=Array.from(new Set(u.map(b=>String((b==null?void 0:b.expiry)||"").trim()).filter(Boolean)));return m.length<=1?m[0]||"":m.sort((b,S)=>{const w=new Date(b).getTime(),E=new Date(S).getTime();return Number.isNaN(w)||Number.isNaN(E)?b.localeCompare(S):E-w})[0]}function Ci(u,m){return u.replace(/(^|[{}])\s*([^@{}][^{]*)\{/g,(b,S,w)=>{const E=w.split(",").map($=>$.trim()).filter(Boolean).map($=>$.startsWith(m)?$:`${m} ${$}`).join(", ");return E?`${S}
  ${E} {`:b})}const Pi=`
* { box-sizing:border-box; margin:0; padding:0; }
.sl-page { min-height:100vh; background:#f8f9fa; font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,'Helvetica Neue',Arial,sans-serif; }
.main-container { display:flex; flex-wrap:wrap; gap:20px; align-items:flex-start; }
.left-panel-tabs { display:flex; border-bottom:1px solid #e5e7eb; background:#fff; flex-shrink:0; }
.left-panel-tab { flex:1; text-align:center; padding:11px 16px; font-size:13px; font-weight:500; color:#6b7280; cursor:pointer; border:none; border-bottom:2px solid transparent; background:none; font-family:inherit; transition:color .15s,border-color .15s; }
.left-panel-tab.active { color:#5cb4a9; border-bottom-color:#5cb4a9; background:#f5fafa; }
.left-panel-tab:hover:not(.active) { color:#374151; background:#f9fafb; }
.option-chain-panel { width:760px; min-width:min(760px,100%); flex:0 0 auto; background:#fff; border-radius:8px; border:1px solid #e5e7eb; box-shadow:0 2px 10px rgba(0,0,0,.08); overflow:hidden; display:flex; flex-direction:column; height:calc(100vh - 154px); }
.oc-header { display:flex; align-items:center; justify-content:space-between; padding:8px 10px; border-bottom:1px solid #D9D9D9; font-size:13px; }
.oc-header-left { color:#6b7280; font-size:12px; cursor:pointer; }
.oc-title { font-weight:700; font-size:13px; color:#333; }
.oc-expiry-label { font-size:11px; font-weight:400; opacity:0.8; color:#333; margin-left:2px; }
.oc-hide-btn { color:#72beb5; font-size:12px; background:none; border:none; cursor:pointer; display:inline-flex; align-items:center; gap:3px; }
.expiry__viewer { width:100%; min-height:56px; border-bottom:1px solid #D9D9D9; display:flex; align-items:center; gap:8px; padding:4px 8px; }
.expiry-carousel__viewport { flex:1; overflow:hidden; }
.expiry-carousel__track { display:flex; align-items:flex-start; gap:8px; transition:transform 0.25s ease; will-change:transform; }
.expiry_button { text-align:center; flex:0 0 104px; width:104px; padding:4px 0; cursor:pointer; }
.expiry_button button { width:100%; padding:4px 8px; color:#646464; background:#F4F4F4; border-radius:2px; border:0; font-size:12px; cursor:pointer; font-family:inherit; text-transform:uppercase; }
.expiry_button .expiry_indicator { margin-top:2px; color:#646464; font-size:10px; }
.selected__oc__expiry button { color:#5fb5ab !important; background-color:#e8f4f3 !important; }
.expiry-carousel__arrow { flex:0 0 24px; width:24px; height:24px; display:inline-flex; align-items:center; justify-content:center; padding:0; border:0; background:transparent; color:#565656; font-size:28px; line-height:1; cursor:pointer; }
.expiry-carousel__arrow:disabled { opacity:0.2; cursor:default; }
.oc_filter { padding:4px 10px; min-height:36px; display:flex; align-items:center; justify-content:space-between; border-bottom:1px solid #f1f9f8; font-size:13px; color:#646464; }
.oc_filter > div { display:flex; align-items:center; min-width:110px; }
.oc_filter > div:last-child { justify-content:flex-end; }
.squar__off__type { display:flex; align-items:center; gap:8px; }
.atm-radio-label { display:flex; align-items:center; gap:4px; cursor:pointer; font-size:12px; }
.atm-radio-dot { width:12px; height:12px; border-radius:50%; border:1.5px solid #94a3b8; background:#fff; display:inline-block; flex-shrink:0; transition:all .15s; }
.atm-radio-active .atm-radio-dot { border-color:#5cb4a9; background:#5cb4a9; box-shadow:inset 0 0 0 2px #fff; }
.atm-radio-title { font-size:12px; color:#646464; }
.total_oi { display:flex; align-items:center; justify-content:center; font-size:13px; color:#646464; gap:4px; }
.total_call_oi { min-width:48px; text-align:right; font-size:11px; color:#000; }
.total_put_oi { min-width:50px; text-align:left; font-size:11px; color:#000; }
.oi-progress { width:14px; height:5px; margin:0 3px; border-radius:2px; overflow:hidden; background:#e1f1ef; }
.oi-progress-call { background:#FBE2E2; width:100%; height:100%; }
.oi-progress-put { background:#CDF1DF; width:100%; height:100%; }
.oc-custom-table { width:100%; overflow-x:auto; overflow-y:auto; flex:1; font-size:13px; }
.oc-custom-table table { min-width:460px; width:100%; border-collapse:collapse; table-layout:fixed; }
.oc-custom-table thead tr { position:sticky; top:0; z-index:2; background:#f1f9f8; }
.oc-custom-table th { padding:8px 10px; font-weight:600; font-size:12px; color:#475569; border-bottom:2px solid #e1f1ef; letter-spacing:0.03em; }
.oc-call-head { text-align:right; color:#16a34a !important; width:25%; }
.oc-call-oi-head { text-align:right; color:#ef4444 !important; width:12%; font-size:11px; }
.oc-iv-head { text-align:center; color:#7c3aed !important; width:10%; font-size:11px; }
.oc-strike-head { text-align:center; width:16%; color:#1c3d39 !important; }
.oc-put-oi-head { text-align:left; color:#22c55e !important; width:12%; font-size:11px; }
.oc-put-head { text-align:left; color:#dc2626 !important; width:25%; }
.oc-head-delta { font-weight:400; opacity:0.7; font-size:11px; }
.oc-row td { padding:5px 8px; border-bottom:1px solid #f1f9f8; vertical-align:middle; }
.oc-row:hover .oc-strike-td, .oc-row:hover .oc-ltp { font-weight:600; }
.oc-call-td { text-align:right; }
.oc-put-td { text-align:left; }
.oc-iv-td { text-align:center; padding:4px !important; }
.oc-iv-value { font-size:11px; font-weight:200; color:#1c3d39; white-space:nowrap; }
.oc-strike-td { text-align:center; font-weight:300; font-size:13px; color:#334155; background:#f8fcfb; }
.oc-ltp { font-weight:300; color:#1c3d39; margin-right:3px; }
.oc-delta { font-size:11px; color:#64748b; }
.oc-empty { color:#94a3b8; }
.oc-row.oc-atm td { background:#f1f9f8 !important; }
.oc-row.oc-atm .oc-strike-td { background:#d9edeb !important; font-weight:600; }
.oc-row.oc-call-itm .oc-call-td { background:#fefce8 !important; }
.oc-row.oc-put-itm .oc-put-td { background:#fefce8 !important; }
.oc-call-oi-td { text-align:right; padding:4px 6px !important; }
.oc-put-oi-td { text-align:left; padding:4px 6px !important; }
.oc-oi-value { font-size:11px; font-weight:600; line-height:1.4; white-space:nowrap; opacity:0.6; }
.oc-oi-call { color:#ef4444; }
.oc-oi-put { color:#22c55e; }
.oc-oi-bar-wrap { height:3px; background:#e1f1ef; border-radius:2px; margin-top:3px; overflow:hidden; opacity:0.4; }
.oc-call-oi-td .oc-oi-bar-wrap { display:flex; justify-content:flex-end; }
.oc-oi-bar { height:100%; border-radius:2px; transition:width 0.3s; }
.oc-oi-bar-call { background:#ef4444; }
.oc-oi-bar-put { background:#22c55e; }
.oc-actions { display:none; align-items:center; gap:3px; }
.oc-row:hover .oc-actions { display:inline-flex; }
.oc-actions.has-active { display:inline-flex !important; }
.oc-btn-wrap { position:relative; display:inline-flex; }
.oc-action-popover {
  position:absolute;
  top:calc(100% + 6px);
  right:0;
  min-width:104px;
  background:linear-gradient(180deg,#ffffff 0%,#fafdfc 100%);
  border:1px solid rgba(148,163,184,.28);
  border-radius:10px;
  box-shadow:0 14px 30px rgba(15,23,42,.16);
  padding:6px;
  display:flex;
  flex-direction:column;
  gap:4px;
  z-index:20;
  backdrop-filter:blur(10px);
}
.oc-action-popover::before {
  content:"";
  position:absolute;
  top:-6px;
  right:12px;
  width:10px;
  height:10px;
  background:#fff;
  border-left:1px solid #dbefec;
  border-top:1px solid #dbefec;
  transform:rotate(45deg);
}
.oc-action-popover.oc-action-popover-right {
  left:0;
  right:auto;
}
.oc-action-popover.oc-action-popover-right::before {
  left:12px;
  right:auto;
}
.oc-action-popover button {
  width:100%;
  border:0;
  background:#fff;
  color:#334155;
  text-align:left;
  padding:7px 9px;
  border-radius:8px;
  font-size:11px;
  font-weight:700;
  cursor:pointer;
  font-family:inherit;
  display:flex;
  align-items:center;
  gap:7px;
  box-shadow:inset 0 0 0 1px rgba(226,232,240,.9);
  transition:transform .12s ease, box-shadow .12s ease, background .12s ease;
}
.oc-action-popover button:hover {
  transform:translateY(-1px);
  box-shadow:0 6px 14px rgba(15,23,42,.10), inset 0 0 0 1px rgba(191,219,254,.95);
}
.oc-action-popover .menu-icon {
  width:18px;
  height:18px;
  border-radius:999px;
  display:inline-flex;
  align-items:center;
  justify-content:center;
  font-size:12px;
  font-weight:800;
  flex-shrink:0;
}
.oc-action-popover .add-option {
  color:#166534;
}
.oc-action-popover .add-option .menu-icon {
  background:#dcfce7;
  color:#16a34a;
}
.oc-action-popover .remove-option {
  color:#dc2626;
}
.oc-action-popover .remove-option .menu-icon {
  background:#fee2e2;
  color:#dc2626;
}
.oc-pos-count { position:absolute; top:-5px; right:-5px; min-width:14px; height:14px; border-radius:50%; font-size:9px; font-weight:700; display:flex; align-items:center; justify-content:center; line-height:1; padding:0 2px; pointer-events:none; z-index:5; }
.oc-pos-count.buy { background:#03b760; border:1px solid #fff; color:#fff; }
.oc-pos-count.sell { background:#ef6161; border:1px solid #fff; color:#fff; }
.oc-custom-table .action_button button { background:#fff; color:#999; border:1px solid #ccc; font-size:11px; padding:1px 5px; border-radius:2px; cursor:pointer; font-family:inherit; line-height:1.5; }
.oc-custom-table .buy_button:hover { color:#03B760 !important; border-color:#03B760 !important; }
.oc-custom-table .sell_button:hover { color:#EF6161 !important; border-color:#EF6161 !important; }
.oc-custom-table .buy_button.oc-btn-active { background:#03B760 !important; color:#fff !important; border-color:#03B760 !important; }
.oc-custom-table .sell_button.oc-btn-active { background:#EF6161 !important; color:#fff !important; border-color:#EF6161 !important; }
.oc-call-td .oc-cell-inner { display:flex; align-items:center; justify-content:flex-end; gap:4px; white-space:nowrap; width:100%; }
.oc-call-td .oc-actions { margin-right:auto; }
.oc-put-td .oc-cell-inner { display:flex; align-items:center; justify-content:flex-start; gap:4px; white-space:nowrap; width:100%; }
.oc-put-td .oc-actions { margin-left:auto; }
.chart-section { flex:1 1 420px; min-width:420px; background:#fff; border-radius:8px; box-shadow:0 2px 10px rgba(0,0,0,.08); overflow:hidden; }
.simulator-card { overflow:hidden; border:1px solid #e5e7eb; border-radius:8px; background:#fff; height:calc(100vh - 154px); display:flex; flex-direction:column; position:relative; }
.pt-page.pt-embed .chart-section { overflow: visible; }
.pt-page.pt-embed .simulator-card { height: auto; overflow: visible; }
.pt-page.pt-embed .chart-body-wrap { flex: 0 0 auto !important; overflow: visible; }
.table-tabs-container { border-bottom:1px solid #e5e7eb; overflow-x:auto; flex-shrink:0; }
.table-tabs { list-style:none; display:flex; align-items:center; min-width:max-content; }
.table-tabs li { border-right:1px solid #e5e7eb; }
.table-tabs .nav-link-sim { display:block; padding:10px 14px; font-size:13px; color:#5f6b7a; white-space:nowrap; text-decoration:none; cursor:pointer; }
.table-tabs .nav-link-sim.active { color:#51aea3; background:#fff; }
.chart-expiry-select {
  height: 32px;
  min-width: 148px;
  border: 1px solid #d5ece9;
  border-radius: 6px;
  padding: 0 10px;
  font-size: 12px;
  color: #334155;
  background: #fff;
  outline: none;
  cursor: pointer;
  margin: 0;
}
.chart-expiry-select:focus {
  border-color: #51aea3;
  box-shadow: 0 0 0 3px rgba(49, 144, 206, 0.12);
}
.chart-overlay-controls {
  position: absolute;
  top: 0px;
  left: 110px;
  z-index: 14;
  display: flex;
  align-items: center;
  gap: 8px;
}
.chart-overlay-label {
  font-size: 12px;
  font-weight: 500;
  color: #5f6b7a;
  white-space: nowrap;
}
.time-on-print { padding:10px 14px; font-size:12px; color:#6b7280; white-space:nowrap; }
.simulator-stats { display:grid; grid-template-columns:repeat(8,minmax(110px,1fr)); border-bottom:1px solid #e5e7eb; flex-shrink:0; }
.simulator-stats > div { padding:10px 12px; min-width:0; border-right:1px solid #f1f9f8; }
.simulator-stats > div > div:first-child { font-size:13px; color:#5f6b7a; margin-bottom:2px; }
.sim-stat-value { font-size:12px; font-weight:700; color:#464646; white-space:nowrap; }
.breakeven-small { min-width:180px; }
.breakevan-box { font-size:12px; font-weight:700; color:#464646; }
.metrics-sub { font-size:11px; margin-left:4px; }
.chart-wrapper { position:relative; height:440px; margin-bottom:4px; flex-shrink:0; overflow:visible; }
.chart-wrapper canvas { display:block; width:100% !important; height:100% !important; }
.spot-line { position:absolute; width:1px; pointer-events:none; z-index:10; top:0; }
.spot-line.profit { background:#16a34a; }
.spot-line.loss { background:#dc2626; }
.spot-line::before { content:''; position:absolute; top:0; left:-3px; width:7px; height:7px; border-radius:50%; border:2px solid #fff; }
.spot-line.profit::before { background:#16a34a; }
.spot-line.loss::before { background:#dc2626; }
.spot-price-label { position:absolute; background:#fff; color:#334155; padding:6px 10px; border-radius:4px; font-size:12px; font-weight:600; white-space:nowrap; pointer-events:none; z-index:12; transform:translateX(-50%); box-shadow:0 1px 4px rgba(15,23,42,.12); border:1px solid #cbd5e1; top:0; display:inline-flex; align-items:center; gap:4px; line-height:1.2; }
.spot-price-label-title { font-size:12px; font-weight:600; color:#5f6b7a; }
.spot-price-label-value { font-size:12px; font-weight:700; color:#5f6b7a; }
.floating-pnl { position:absolute; color:#fff; padding:5px 14px; border-radius:20px; font-size:12px; font-weight:600; pointer-events:none; z-index:20; white-space:nowrap; display:flex; align-items:center; gap:5px; bottom:32px; transform:translateX(-50%); }
.floating-pnl.profit-bg { background:#15803d; }
.floating-pnl.loss-bg { background:#b91c1c; }
.payoff-chart-tooltip {
  position: absolute;
  min-width: 188px;
  max-width: 216px;
  padding: 10px 12px;
  border-radius: 8px;
  background: rgba(12, 15, 19, 0.70);
  color: #fff;
  box-shadow: 0 12px 28px rgba(15, 23, 42, 0.24);
  pointer-events: none;
  z-index: 30;
  opacity: 0;
  transform: translate(-50%, calc(-100% - 14px));
  transition: opacity 0.12s ease;
  backdrop-filter: blur(4px);
}
.payoff-chart-tooltip.is-visible { opacity: 1; }
.payoff-chart-tooltip::after {
  content: "";
  position: absolute;
  left: 50%;
  top: 100%;
  transform: translateX(-50%);
  border-left: 7px solid transparent;
  border-right: 7px solid transparent;
  border-top: 7px solid rgba(31, 41, 55, 0.68);
}
.payoff-chart-tooltip-header {
  display: flex;
  align-items: baseline;
  justify-content: center;
  gap: 4px;
  text-align: center;
  margin-bottom: 8px;
}
.payoff-chart-tooltip-header-label {
  font-size: 10px;
  color: #98a2b3;
  font-weight: 500;
}
.payoff-chart-tooltip-header-value {
  font-size: 12px;
  color: #d0d5dd;
  font-weight: 600;
}
.payoff-chart-tooltip-pnl {
  display: flex;
  align-items: baseline;
  justify-content: center;
  gap: 5px;
  margin-bottom: 8px;
}
.payoff-chart-tooltip-pnl-value {
  font-size: 18px;
  line-height: 1;
  font-weight: 700;
  letter-spacing: -0.02em;
}
.payoff-chart-tooltip-pnl-meta {
  font-size: 11px;
  line-height: 1;
  font-weight: 600;
}
.payoff-chart-tooltip-divider {
  height: 1px;
  background: rgba(255, 255, 255, 0.16);
  margin: 8px 0;
}
.payoff-chart-tooltip-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
}
.payoff-chart-tooltip-row + .payoff-chart-tooltip-row { margin-top: 6px; }
.payoff-chart-tooltip-row-label {
  width: 88px;
  min-width: 88px;
  font-size: 11px;
  line-height: 1.25;
  color: #98a2b3;
  font-weight: 500;
}
.payoff-chart-tooltip-row-label strong {
  display: block;
  font-size: 11px;
  font-weight: 500;
  color: #98a2b3;
}
.payoff-chart-tooltip-row-label strong.is-white { color: #ffffff; }
.payoff-chart-tooltip-row-label span {
  display: block;
  margin-top: 1px;
  font-size: 12px;
  color: #d0d5dd;
}
.payoff-chart-tooltip-row-label span.is-white { color: #ffffff; }
.payoff-chart-tooltip-row-value {
  font-size: 14px;
  line-height: 1.1;
  font-weight: 700;
  white-space: nowrap;
}
.payoff-chart-tooltip-row-meta {
  font-size: 10px;
  line-height: 1.1;
  font-weight: 600;
  white-space: nowrap;
}
.payoff-chart-tooltip-value-wrap {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  gap: 4px;
  margin-left: auto;
  text-align: right;
  min-width: 0;
  max-width: 110px;
  white-space: nowrap;
}
.payoff-chart-tooltip-positive { color: #34d399; }
.payoff-chart-tooltip-negative { color: #f97066; }
.payoff-chart-tooltip-neutral { color: #e5e7eb; }
.payoff-bottom { text-align:center; font-size:13px; font-weight:600; color:#374151; padding:6px 0 2px; letter-spacing:.3px; flex-shrink:0; }
.pos-section { flex:1; display:flex; flex-direction:column; overflow:hidden; border-top:1px solid #e5e7eb; }
.pos-tabs { display:flex; align-items:center; border-bottom:1px solid #e5e7eb; background:#fff; padding:0 12px; flex-shrink:0; }
.pos-tab { padding:10px 12px; font-size:13px; color:#6b7280; cursor:pointer; border-bottom:2px solid transparent; white-space:nowrap; background:none; border-top:none; border-left:none; border-right:none; font-family:inherit; }
.pos-tab.active { color:#73beb5; border-bottom-color:#73beb5; font-weight:500; }
.pos-tab-right { margin-left:auto; font-size:12px; color:#6b7280; }
.position_table { overflow-x:auto; overflow-y:auto; flex:1; }
.position_table table { width:100%; min-width:700px; table-layout:fixed; border-collapse:collapse; }
.position_table .sticky-top { position:sticky; top:0; z-index:2; }
.position_table th { padding:5px 4px; color:#9B9B9B; background:#fff !important; font-size:12px; font-weight:500; white-space:nowrap; text-align:left; }
.action_button_group { display:flex; align-items:center; gap:6px; justify-content:flex-start; }
.pos-select-wrap { display:flex; align-items:center; justify-content:center; width:16px; min-width:16px; flex:0 0 16px; }
.pos-select-input {
  position: absolute;
  opacity: 0;
  pointer-events: none;
}
.pos-select-box {
  width: 14px;
  height: 14px;
  border: 1px solid #9db2c7;
  border-radius: 2px;
  background: #fff;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}
.pos-select-box::after {
  content: "";
  width: 7px;
  height: 4px;
  border-left: 1.5px solid transparent;
  border-bottom: 1.5px solid transparent;
  transform: rotate(-45deg) translate(0, -1px);
}
.pos-select-input:checked + .pos-select-box {
  border-color: #96cec7;
  background: #f8fcfb;
}
.pos-select-input:checked + .pos-select-box::after {
  border-left-color: #7dc2ba;
  border-bottom-color: #7dc2ba;
}
.pos-first-col-head,
.pos-first-col-cell {
  padding: 0 0 0 10px !important;
}
.pt-buy-btn { width:18px; height:18px; background:#fff; color:#03B760; border:1px solid #03B760; border-radius:4px; font-size:12px; display:flex; align-items:center; justify-content:center; flex-shrink:0; font-weight:600; transition:0.2s; cursor:pointer; padding:0; }
.pt-buy-btn:not(:disabled):hover { background:#03B760; color:#fff; }
.pt-sell-btn { width:18px; height:18px; background:#fff; color:#EF6161; border:1px solid #EF6161; border-radius:4px; font-size:12px; display:flex; align-items:center; justify-content:center; flex-shrink:0; font-weight:600; transition:0.2s; cursor:pointer; padding:0; }
.pt-sell-btn:not(:disabled):hover { background:#EF6161; color:#fff; }
.pt-buy-btn:disabled, .pt-sell-btn:disabled { cursor:default; opacity:0.6; }
.parent_position td { padding:4px; font-size:12px; color:#333; border-bottom:1px solid #f4f4f4; vertical-align:middle; }
.parent_position:not(.exited__SL):not(.exited__TP):hover td { background:#f7f8f9 !important; }
.parent_position.exited__profit,
.parent_position.exited__profit td { background:#f0fdf4 !important; }
.parent_position.exited__loss,
.parent_position.exited__loss td { background:#fef2f2 !important; }
.position__strike { display:flex; align-items:center; gap:2px; user-select:none; white-space:nowrap; }
.call-btn-pt { font-size:11px; font-weight:600; color:#16a34a; }
.put-btn-pt { font-size:11px; font-weight:600; color:#ef4444; }
.sign_btn { width:14px; height:16px; font-size:11px; color:#555; background:#F4F4F4; border:0; border-radius:2px; display:inline-flex; align-items:center; justify-content:center; cursor:pointer; opacity:0; transition:opacity 0.2s; padding:0; line-height:1; }
.parent_position:hover .sign_btn { opacity:1; }
.position__expiry { white-space:nowrap; text-align:center; font-size:12px; }
.sim-input { width:55px; height:20px; border:1px solid transparent; border-radius:2px; text-align:center; outline:0; font-size:12px; background:transparent; transition:border-color .2s,background .2s; }
.sim-input:hover,.sim-input:focus { border-color:#C4C4C4; background:#fff; }
.lot-input { width:32px !important; }
.simulator_green_text { color:#03B760 !important; }
.simulator_red_text { color:#EF6161 !important; }
.expiry_indicator { font-size:11px; }
.simulator_position_button { display:flex; align-items:center; gap:4px; }
.pos-exit-btn,.pos-del-btn { background:none; border:none; cursor:pointer; padding:2px; border-radius:3px; display:inline-flex; align-items:center; justify-content:center; line-height:1; }
.pos-action-icon { width:16px; height:16px; display:block; }
.pos-exit-btn.exited .pos-action-icon { width:16px; height:16px; }
.pos-del-btn { color:#ef4444; }
.pos-del-btn:hover { background:#fef2f2; }
.pos-del-icon { width:16px; height:16px; display:block; color:currentColor; }
.lot_select_space { font-size:11px; border:1px solid #d1d5db; border-radius:2px; padding:1px 2px; background:#fff; max-width:40px; }
.position_table tr.table_footer { position:sticky; bottom:0; z-index:1; box-shadow:0 -2px 6px rgba(154,154,154,.15); }
.position_table tr.table_footer th { height:38px; background:rgba(255,255,255,.97) !important; padding:4px; font-size:12px; color:#333; font-weight:400; }
.simulator_group_input { display:inline-flex; align-items:center; border:1px solid #d1d5db; border-radius:3px; overflow:hidden; }
.sign_button { width:18px; height:22px; background:#f3f4f6; border:none; font-size:13px; cursor:pointer; display:inline-flex; align-items:center; justify-content:center; padding:0; color:#374151; }
.sign_button:disabled { opacity:0.3; cursor:not-allowed; }
.mult_input { width:28px; height:22px; border:none; text-align:center; font-size:12px; outline:none; background:#fff; }
.btn-outline-xs { padding:2px 8px; font-size:12px; border:1px solid #73beb5; border-radius:3px; background:#fff; color:#73beb5; cursor:pointer; white-space:nowrap; }
.btn-outline-xs:hover { background:#f4faf9; }
.pos-exit-all { font-size:12px; color:#ef4444; cursor:pointer; }
.pos-clear-all { font-size:12px; color:#6b7280; cursor:pointer; margin-left:6px; }
.pos-empty { padding:20px; text-align:center; color:#94a3b8; font-size:13px; }
.sl-config-btn { position:absolute; top:10px; right:100px; padding:5px 11px; background:#418c83; color:#fff; border:none; border-radius:5px; font-size:12px; font-weight:600; cursor:pointer; z-index:14; display:flex; align-items:center; gap:5px; box-shadow:0 1px 4px rgba(0,0,0,.18); }
.sl-config-btn.active { background:#dc2626; }
.sl-hover-line, .sl-marker-line { position:absolute; top:0; width:0; pointer-events:none; z-index:15; }
.sl-hover-line { border-left:2px dashed #f59e0b; }
.sl-marker-line { border-left:2px solid #f59e0b; }
.sl-marker-upper { border-left:2px solid #16a34a !important; }
.sl-marker-lower { border-left:2px solid #dc2626 !important; }
.sl-marker-label { position:absolute; top:12px; white-space:nowrap; font-size:11px; font-weight:700; padding:4px 8px; border-radius:5px; line-height:1.5; pointer-events:none; }
.sl-label-upper { left:5px; background:#16a34a; color:#fff; }
.sl-label-lower { right:5px; left:auto; background:#dc2626; color:#fff; text-align:right; }
.sl-lbl-price { display:block; font-size:12px; font-weight:800; }
.sl-lbl-dist { display:block; font-size:10px; font-weight:600; opacity:.92; }
.sl-shade-region { position:absolute; top:0; pointer-events:none; z-index:8; }
.sl-config-panel { position:fixed; width:270px; background:#fff; border:1px solid #e5e7eb; border-radius:10px; box-shadow:0 8px 32px rgba(0,0,0,.18); z-index:30; font-size:13px; overflow:hidden; user-select:none; }
.sl-panel-header { background:#35736b; cursor:grab; color:#fff; padding:10px 14px; display:flex; align-items:center; justify-content:space-between; }
.sl-panel-title { font-weight:700; font-size:13px; }
.sl-panel-close { background:none; border:none; color:#fff; font-size:18px; cursor:pointer; line-height:1; padding:0; }
.sl-panel-body { padding:12px 14px; display:flex; flex-direction:column; gap:10px; }
.sl-instruction { font-size:11px; color:#6b7280; background:#f5fafa; border:1px solid #cfe8e5; border-radius:5px; padding:6px 9px; text-align:center; }
.sl-panel-row { display:flex; flex-direction:column; gap:4px; }
.sl-panel-row label { font-size:11px; color:#6b7280; font-weight:600; text-transform:uppercase; letter-spacing:.4px; }
.sl-condition-row { display:flex; gap:6px; }
.sl-condition-row select, .sl-condition-row input { padding:6px 8px; border:1px solid #d1d5db; border-radius:5px; font-size:13px; background:#f9fafb; }
.sl-condition-row select { flex:0 0 110px; }
.sl-condition-row input { flex:1; font-weight:600; }
.sl-spot-value { font-weight:700; color:#35736b; font-size:14px; }
.sl-diff-row { display:flex; gap:8px; }
.sl-diff-row span { flex:1; text-align:center; padding:4px 0; background:#f3f4f6; border-radius:4px; font-size:12px; font-weight:600; color:#374151; }
.sl-pnl-box { background:#fff1f2; border:1px solid #fecaca; border-radius:6px; padding:8px 10px; }
.sl-pnl-box.profit { background:#f0fdf4; border-color:#bbf7d0; }
.sl-pnl-label { font-size:10px; color:#9ca3af; font-weight:600; text-transform:uppercase; }
.sl-pnl-value { font-size:18px; font-weight:800; color:#dc2626; margin-top:2px; }
.sl-pnl-value.profit { color:#16a34a; }
.sl-panel-actions { display:flex; gap:8px; }
.sl-cancel-btn, .sl-save-btn, .sl-alert-btn { flex:1; padding:7px; border-radius:5px; font-size:13px; font-weight:600; cursor:pointer; }
.sl-cancel-btn { border:1px solid #d1d5db; background:#fff; color:#374151; }
.sl-save-btn { border:none; background:#418c83; color:#fff; }
.sl-save-btn:disabled { background:#b4dcd7; cursor:not-allowed; }
.sl-alert-btn { border:none; background:#f59e0b; color:#fff; }
.sl-alert-btn:hover { background:#d97706; }
/* ── Alert Orders — bottom sheet (fixed, right column only) ── */
.alert-bottom-sheet {
  position: fixed; bottom: 0; right: 0; height: 300px;
  background: #fff; border-top: 2px solid #35736b;
  box-shadow: 0 -6px 28px rgba(0,0,0,.18);
  font-size: 13px; display: flex; flex-direction: column;
  transform: translateY(100%); transition: transform .28s cubic-bezier(.4,0,.2,1);
  user-select: none; z-index: 1100;
}
.alert-bottom-sheet.open { transform: translateY(0); }
.alert-sheet-drag-bar {
  width: 40px; height: 4px; border-radius: 2px; background: rgba(255,255,255,.45);
  margin: 0 auto;
}
.alert-panel-header {
  background: #35736b; color: #fff; padding: 8px 16px 6px;
  display: flex; align-items: center; justify-content: space-between; flex-shrink: 0;
  gap: 12px;
}
.alert-panel-title { font-weight:700; font-size:13px; display:flex; align-items:center; gap:6px; }
.alert-panel-subtitle { font-size:11px; font-weight:400; opacity:0.75; margin-left:4px; }
.alert-panel-close { background:none; border:none; color:#fff; font-size:18px; cursor:pointer; line-height:1; padding:0; flex-shrink:0; }
.alert-panel-body { padding:10px 16px; display:flex; flex-direction:column; gap:8px; overflow-y:auto; flex:1; }
.alert-oc-hint { background:#f4faf9; border:1px solid #d3eae8; border-radius:6px; padding:7px 10px; font-size:11px; color:#418c83; display:flex; align-items:flex-start; gap:6px; line-height:1.4; }
.alert-section-label { font-size:11px; font-weight:600; color:#6b7280; text-transform:uppercase; letter-spacing:.04em; }
.alert-pos-table { width:100%; border-collapse:collapse; font-size:12px; }
.alert-pos-table th { font-size:10px; font-weight:600; color:#94a3b8; text-transform:uppercase; letter-spacing:.03em; padding:3px 5px; border-bottom:2px solid #e1f1ef; text-align:left; white-space:nowrap; }
.alert-pos-table td { padding:4px 5px; border-bottom:1px solid #f1f9f8; color:#334155; vertical-align:middle; white-space:nowrap; }
.alert-side-b { background:#dcfce7; color:#15803d; border-radius:3px; font-size:10px; font-weight:700; padding:1px 5px; display:inline-block; }
.alert-side-s { background:#fee2e2; color:#dc2626; border-radius:3px; font-size:10px; font-weight:700; padding:1px 5px; display:inline-block; }
.alert-new-badge { background:#f4faf9; color:#4ea79d; border-radius:3px; font-size:9px; font-weight:700; padding:1px 4px; display:inline-block; }
.alert-exit-badge { background:#f0fdf4; color:#15803d; border-radius:3px; font-size:9px; font-weight:700; padding:1px 4px; display:inline-block; }
.alert-panel-footer { padding:8px 16px; border-top:1px solid #e6f4f2; display:flex; gap:8px; justify-content:space-between; align-items:center; background:#f8fcfb; flex-shrink:0; }
.alert-footer-left { display:flex; gap:8px; }
.alert-footer-right { display:flex; gap:8px; }
.alert-footer-btn { padding:6px 16px; border-radius:5px; font-size:12px; font-weight:600; cursor:pointer; }
.alert-footer-cancel { border:1px solid #d1d5db; background:#fff; color:#374151; }
.alert-footer-instant { border:none; background:#16a34a; color:#fff; }
.alert-footer-instant:hover { background:#15803d; }
.alert-footer-save { border:none; background:#418c83; color:#fff; }
.alert-footer-save:disabled { background:#b4dcd7; cursor:not-allowed; }
.sl-saved-bar { display:flex; align-items:center; gap:8px; background:#fff7ed; border:1px solid #fed7aa; border-radius:6px; padding:5px 10px; font-size:12px; font-weight:600; color:#92400e; margin-top:4px; flex-wrap:wrap; }
.sl-saved-edit, .sl-remove-link { color:#4ea79d; cursor:pointer; text-decoration:underline; font-weight:700; background:none; border:none; padding:0; font:inherit; }
.sl-config-link { color:#4ea79d; cursor:pointer; text-decoration:underline; font-weight:700; background:none; border:none; padding:0; font:inherit; }
.sl-config-preview {
  margin-top: 8px;
  border: 1px solid #dbefec;
  border-radius: 8px;
  background: #fff;
  overflow: hidden;
  height: 680px;
  display: flex;
  flex-direction: column;
}
.sl-config-preview .position_table {
  flex: 1;
  min-height: 0;
  overflow: auto;
}
.sl-config-preview-title {
  padding: 8px 12px;
  border-bottom: 1px solid #e6f4f2;
  background: #fafdfc;
  color: #2c6059;
  font-size: 13px;
  font-weight: 700;
}
.sl-saved-edit { margin-left:auto; }
`,Mi=".pt-page",or=Ci(Pi,Mi),nr=`
.pt-cfg-bar { display:flex; align-items:stretch; background:#fff; border-bottom:1px solid #dbefec; min-height:46px; font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif; }
.pt-cfg-left { display:flex; align-items:center; gap:8px; padding:6px 14px; border-right:1px solid #dbefec; flex-shrink:0; position:relative; }
.pt-cfg-inst-btn { display:flex; align-items:center; gap:5px; padding:4px 12px; border:1px solid #cbd5e1; border-radius:5px; background:#fff; font-size:13px; font-weight:700; cursor:pointer; color:#1c3d39; min-width:115px; text-transform:uppercase; }
.pt-cfg-inst-menu { position:absolute; top:calc(100% + 4px); left:14px; background:#fff; border:1px solid #e1f1ef; border-radius:6px; box-shadow:0 4px 20px rgba(0,0,0,.12); z-index:400; min-width:144px; padding:4px 0; list-style:none; }
.pt-cfg-inst-menu li { padding:8px 16px; cursor:pointer; font-size:13px; text-transform:capitalize; color:#334155; }
.pt-cfg-inst-menu li:hover,.pt-cfg-inst-menu li.sel { background:#f4faf9; color:#5cb4a9; font-weight:600; }
.pt-cfg-compact { display:flex; align-items:center; flex:1; }
.pt-cfg-center { display:flex; align-items:center; gap:10px; flex:1; padding:0 14px; }
.pt-cfg-goback { padding:4px 12px; border:1px solid #cbd5e1; border-radius:4px; background:#fff; font-size:12px; cursor:pointer; color:#374151; }
.pt-cfg-datelbl { font-size:13px; font-weight:600; color:#1c3d39; }
.pt-cfg-timelbl { font-size:13px; color:#64748b; font-variant-numeric:tabular-nums; }
.pt-cfg-refsel { border:1px solid #e1f1ef; border-radius:4px; padding:3px 6px; font-size:12px; background:#f8fcfb; cursor:pointer; color:#475569; }
.pt-cfg-countdown { font-size:11px; color:#f59e0b; font-weight:700; padding:1px 7px; background:#fef3c7; border-radius:10px; border:1px solid #fbbf24; }
.pt-cfg-right { display:flex; align-items:center; gap:8px; padding:0 14px; border-left:1px solid #dbefec; }
.pt-cfg-broker-hint { font-size:11px; color:#94a3b8; white-space:nowrap; }
.pt-cfg-connect { padding:4px 12px; border:1px solid #73beb5; border-radius:4px; background:#f4faf9; color:#5cb4a9; font-size:12px; font-weight:600; cursor:pointer; }
.pt-cfg-snap { padding:4px 8px; border:1px solid #e1f1ef; border-radius:4px; background:#fff; cursor:pointer; font-size:14px; }
.pt-cfg-radio { font-size:12px; color:#475569; display:flex; align-items:center; gap:4px; cursor:pointer; }
.pt-cfg-radio.on { color:#5cb4a9; font-weight:600; }
.pt-tcp-bar { background:#f8fcfb; border-bottom:2px solid #dbefec; overflow-x:auto; font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif; }
.pt-tcp-row { display:flex; flex-direction:row; align-items:stretch; flex-wrap:nowrap; min-height:58px; }
.pt-tcp-card { display:flex; flex-direction:column; justify-content:center; gap:3px; padding:6px 12px; border-right:1px solid #dbefec; flex-shrink:0; }
.pt-tcp-card:last-child { border-right:none; }
.pt-tcp-hdr { display:flex; align-items:center; gap:5px; }
.pt-tcp-t { font-size:10px; font-weight:700; color:#64748b; text-transform:uppercase; letter-spacing:.6px; white-space:nowrap; }
.pt-tcp-body { display:flex; flex-direction:row; align-items:center; gap:4px; flex-wrap:nowrap; }
.pt-tcp-sel { border:1px solid #cbd5e1; border-radius:4px; padding:3px 6px; font-size:12px; color:#1c3d39; background:#fff; cursor:pointer; height:26px; outline:none; }
.pt-tcp-sel:disabled { background:#f1f9f8; color:#94a3b8; cursor:not-allowed; border-color:#e1f1ef; }
.pt-tcp-num { border:1px solid #cbd5e1; border-radius:4px; padding:3px 4px; font-size:12px; color:#1c3d39; background:#fff; height:26px; width:58px; outline:none; text-align:center; }
.pt-tcp-num:disabled { background:#f1f9f8; color:#94a3b8; }
.pt-tcp-time { border:1px solid #cbd5e1; border-radius:4px; padding:3px 5px; font-size:12px; color:#1c3d39; background:#fff; height:26px; outline:none; }
.pt-tcp-time:disabled { background:#f1f9f8; color:#94a3b8; }
.pt-tcp-xy { font-size:10px; font-weight:800; color:#94a3b8; margin:0 1px; }
.pt-pause-btn { height:26px; padding:0 10px; border-radius:4px; border:none; font-size:11px; font-weight:700; cursor:pointer; background:#73beb5; color:#fff; }
.pt-pause-btn.on { background:#22c55e; }
.pt-tog { position:relative; display:inline-block; width:32px; height:17px; flex-shrink:0; cursor:pointer; margin:0; }
.pt-tog input { opacity:0; width:0; height:0; position:absolute; }
.pt-tog-track { position:absolute; inset:0; background:#cbd5e1; border-radius:17px; transition:background .2s; }
.pt-tog-track::before { content:''; position:absolute; width:11px; height:11px; left:3px; top:3px; background:#fff; border-radius:50%; transition:transform .2s; box-shadow:0 1px 3px rgba(0,0,0,.2); }
.pt-tog.on .pt-tog-track { background:#73beb5; }
.pt-tog.on .pt-tog-track::before { transform:translateX(15px); }
/* ── Basket order modal (global — rendered outside .pt-page) ── */
.basket-overlay { position:fixed; inset:0; background:rgba(0,0,0,.5); z-index:2000; display:flex; align-items:center; justify-content:center; padding:16px; }
.basket-modal { background:#f3f4f6; border-radius:10px; width:780px; max-width:100%; max-height:90vh; display:flex; flex-direction:column; overflow:hidden; box-shadow:0 20px 60px rgba(0,0,0,.3); }
.basket-header { background:#fff; padding:14px 20px; border-bottom:1px solid #e5e7eb; display:flex; align-items:center; justify-content:space-between; }
.basket-header-title { font-size:16px; font-weight:700; color:#111; }
.basket-header-close { background:none; border:none; font-size:22px; cursor:pointer; color:#6b7280; line-height:1; }
.basket-body { overflow-y:auto; flex:1; padding:12px 16px; display:flex; flex-direction:column; gap:12px; }
.basket-card { background:#fff; border-radius:8px; border:1px solid #e5e7eb; overflow:hidden; }
.basket-card-header { padding:10px 14px; display:flex; align-items:center; gap:10px; border-bottom:1px solid #f1f9f8; }
.basket-card-num { font-size:10px; font-weight:700; color:#6b7280; background:#f1f9f8; padding:2px 7px; border-radius:3px; letter-spacing:.04em; }
.basket-buy-badge { background:#5cb4a9; color:#fff; font-size:10px; font-weight:800; padding:2px 8px; border-radius:3px; }
.basket-sell-badge { background:#dc2626; color:#fff; font-size:10px; font-weight:800; padding:2px 8px; border-radius:3px; }
.basket-card-title { font-size:13px; font-weight:700; color:#111; }
.basket-card-body { padding:10px 14px; display:grid; grid-template-columns:1fr 1fr; gap:12px; }
.basket-md-grid { display:grid; grid-template-columns:repeat(3,1fr); gap:6px 12px; }
.basket-md-item { font-size:11px; color:#6b7280; }
.basket-md-item strong { display:block; font-size:13px; font-weight:600; color:#111; margin-top:1px; }
.basket-price-box { display:flex; align-items:center; gap:8px; }
.basket-ltp-big { font-size:22px; font-weight:800; color:#111; }
.basket-ltp-label { font-size:11px; color:#6b7280; }
.basket-card-footer { padding:8px 14px; border-top:1px solid #f1f9f8; display:flex; align-items:center; gap:16px; flex-wrap:wrap; }
.basket-price-input { border:1px solid #d1d5db; border-radius:5px; padding:4px 8px; font-size:13px; width:90px; }
.basket-qty-input { border:1px solid #d1d5db; border-radius:5px; padding:4px 8px; font-size:13px; width:70px; }
.basket-cancel-btn { margin-left:auto; background:none; border:1px solid #d1d5db; border-radius:5px; padding:4px 12px; font-size:12px; font-weight:600; cursor:pointer; color:#374151; }
.basket-place-btn { background:#5cb4a9; color:#fff; border:none; border-radius:5px; padding:4px 14px; font-size:12px; font-weight:700; cursor:pointer; }
.basket-place-btn:disabled { background:#b4dcd7; cursor:not-allowed; }
.basket-sell-place-btn { background:#dc2626; }
.basket-footer { background:#fff; padding:12px 20px; border-top:1px solid #e5e7eb; display:flex; align-items:center; gap:16px; flex-wrap:wrap; }
.basket-margin-item { font-size:11px; color:#6b7280; }
.basket-margin-item strong { display:block; font-size:14px; font-weight:700; color:#111; }
.basket-place-all-btn { margin-left:auto; background:#5cb4a9; color:#fff; border:none; border-radius:6px; padding:8px 18px; font-size:13px; font-weight:700; cursor:pointer; display:flex; align-items:center; gap:6px; }
.basket-place-all-btn:disabled { background:#b4dcd7; cursor:not-allowed; }
.basket-order-status { font-size:11px; padding:2px 6px; border-radius:3px; }
.basket-status-ok { background:#dcfce7; color:#15803d; }
.basket-status-err { background:#fee2e2; color:#dc2626; }
`;function Ot({checked:u,onChange:m}){return e.jsxs("label",{className:`pt-tog${u?" on":""}`,children:[e.jsx("input",{type:"checkbox",checked:u,onChange:b=>m(b.target.checked)}),e.jsx("span",{className:"pt-tog-track"})]})}function zi({embeddedStrategyId:u,embeddedStrategyData:m=null,forcedEmbedMode:b=!1,useExternalLiveChain:S=!1,externalLiveChain:w=null,onStrategyMetadataChanged:E,onExpiryChange:$}={}){const{strategyId:ut=""}=mi(),ft=bi(),ke=new URLSearchParams(ft.search),A=u||ut||ke.get("strategyId")||ke.get("strategy_id")||"",F=b||ke.get("embed")==="1"||ft.pathname.startsWith("/embed/"),Z=!F,po=F?0:30,G=S,Qe=i.useRef(null),Rt=i.useRef(!1),xt=i.useRef(null),Ze=i.useRef({portfolioName:"",strategyName:""}),Bt=i.useRef(0),ht=i.useRef(null),uo=i.useRef(0),fo=i.useRef(0),xo=i.useRef(0),ho=i.useRef(""),mo=i.useRef(0),At=i.useRef(!0),mt=i.useRef(""),bo=i.useRef({}),go=i.useRef(0),yo=i.useRef([]),vo=i.useRef(void 0),[_,Re]=i.useState("NIFTY"),[lr,bt]=i.useState(!1),[gt,cr]=i.useState("index"),[Be,pr]=i.useState([]),[dr,jo]=i.useState(!1),[Ae,ur]=i.useState(po),[ko,yt]=i.useState(po),[ue,fr]=i.useState(new Date),Cs=i.useRef(null),De=i.useRef(null),[Dt,wo]=i.useState(1),[Ps,No]=i.useState("manual"),[So,_o]=i.useState(!1),[Vt,Co]=i.useState(!1),[Po,Mo]=i.useState("points"),[Eo,To]=i.useState(0),[Ut,Lo]=i.useState(!1),[zo,Io]=i.useState("points"),[$o,Fo]=i.useState(0),[vt,Oo]=i.useState(!1),[Ro,Bo]=i.useState("points"),[Ao,Do]=i.useState(0),[Vo,Uo]=i.useState(0),[jt,qo]=i.useState(!1),[qt,Ho]=i.useState("delta"),[Ms,Wo]=i.useState(""),[Yo,Xo]=i.useState("ATM"),[Ht,Qo]=i.useState(!1),[Zo,Go]=i.useState("09:15"),[Jo,Ko]=i.useState("15:30"),[p,Wt]=i.useState(null),[xr,Ee]=i.useState(!1),[en,Ge]=i.useState(null),[J,Te]=i.useState(""),[tn,sn]=i.useState(null),[Es,Yt]=i.useState(0),[hr,mr]=i.useState("Spot"),[Xt,Ts]=i.useState("OptionChain"),Ls=i.useRef(null),zs=i.useRef(null),Ve=i.useRef(null),on=i.useRef(""),[T,le]=i.useState([]),[Qt,Is]=i.useState([]),[Je,Zt]=i.useState(""),$s=i.useRef(null),V=i.useRef(null),Ue=i.useRef([]),Gt=i.useRef([]),Jt=i.useRef([]),Kt=i.useRef(null),kt=i.useRef(null),wt=i.useRef({active:!1,offsetX:0,offsetY:0}),Fs=i.useRef(null),[br,gr]=i.useState(0),[yr,es]=i.useState(!1),[nn,Nt]=i.useState([]),[ts,rn]=i.useState(!1),[j,vr]=i.useState(null),[ss,Os]=i.useState(0),[K,Ke]=i.useState(!1),[ee,an]=i.useState("<="),[St,_t]=i.useState(null),[de,Ct]=i.useState(null),[U,Rs]=i.useState(null),[W,Bs]=i.useState(null),[et,As]=i.useState(!1),[O,ve]=i.useState([]),[we,os]=i.useState(!1),[Ds,jr]=i.useState({left:null,top:null}),[ns,ln]=i.useState("Positions"),[rs,Vs]=i.useState(1),[kr,is]=i.useState(!1),[as,wr]=i.useState("create"),[Nr,Us]=i.useState([]),[Pt,tt]=i.useState(""),[qs,Hs]=i.useState(""),[cn,Mt]=i.useState(""),[ls,pn]=i.useState(!1),[Ne,dn]=i.useState(!1),[un,Le]=i.useState(null),[Ws,Et]=i.useState(null),[fe,cs]=i.useState({}),[Tt,Ys]=i.useState({}),[Y,Lt]=i.useState(()=>Ft()),[Sr,fn]=i.useState(0),[xn,Xs]=i.useState(0),[Se,te]=i.useState(null),ps=i.useMemo(()=>Array.from(new Set(T.filter(t=>!t.exited).map(t=>String(t.token||"").trim()).filter(Boolean))).sort(),[T]),hn=ps.join("|");i.useEffect(()=>{Is(t=>{const s=T.map(r=>r.id),o=t.filter(r=>s.includes(r)),n=s.filter(r=>!o.includes(r));return[...o,...n]})},[T]),i.useEffect(()=>{Qe.current=null,Rt.current=!1,xt.current=null,mt.current="",te(null),le([]),Wt(null),Ge(null),Te(""),cs({}),Zt(""),At.current=!0},[A]);function mn(t){var c,l,f,x,d,y,N,z,I,P,C,g,h,k,M,D,se;const s=t.config??{},o=typeof s.sl_upper=="number"?s.sl_upper:null,n=typeof s.sl_lower=="number"?s.sl_lower:null,r=String(t.portfolio_name||""),a=String(t.strategy_name||"");Ze.current={portfolioName:r,strategyName:a},tt(r),Mt(a),wo(Number(s.lots||1)),No(s.trading_mode||"manual"),Co(!!((c=s.stopLoss)!=null&&c.enabled)),Mo(((l=s.stopLoss)==null?void 0:l.unit)||"points"),To(Number(((f=s.stopLoss)==null?void 0:f.value)||0)),Lo(!!((x=s.target)!=null&&x.enabled)),Io(((d=s.target)==null?void 0:d.unit)||"points"),Fo(Number(((y=s.target)==null?void 0:y.value)||0)),Oo(!!((N=s.trailingStop)!=null&&N.enabled)),Bo(((z=s.trailingStop)==null?void 0:z.unit)||"points"),Do(Number(((I=s.trailingStop)==null?void 0:I.x)||0)),Uo(Number(((P=s.trailingStop)==null?void 0:P.y)||0)),Qo(!!((C=s.timeControl)!=null&&C.enabled)),Go(((g=s.timeControl)==null?void 0:g.entryTime)||"09:15"),Ko(((h=s.timeControl)==null?void 0:h.exitTime)||"15:30"),qo(!!((k=s.strikeType)!=null&&k.enabled)),Ho(((M=s.strikeType)==null?void 0:M.mode)||"delta"),Wo(typeof((D=s.strikeType)==null?void 0:D.value)=="number"?s.strikeType.value:0),Xo(((se=s.strikeType)==null?void 0:se.strike)||"ATM"),Rs(o!=null?{condition:">=",price:Number(o)}:null),Bs(n!=null?{condition:"<=",price:Number(n)}:null),Ts("Positions"),ln("Positions")}i.useEffect(()=>{["pt-tcp-css","pt-scoped-css"].forEach(o=>{var n;return(n=document.getElementById(o))==null?void 0:n.remove()});const t=document.createElement("style");t.id="pt-tcp-css",t.textContent=nr,document.head.appendChild(t);const s=document.createElement("style");return s.id="pt-scoped-css",s.textContent=or,document.head.appendChild(s),()=>{var o,n;(o=document.getElementById("pt-tcp-css"))==null||o.remove(),(n=document.getElementById("pt-scoped-css"))==null||n.remove()}},[]),i.useEffect(()=>{if(F)return;const t=setInterval(()=>fr(new Date),1e3);return()=>clearInterval(t)},[F]);const Qs=i.useRef(!1),bn=i.useCallback(()=>{Qs.current||(Qs.current=!0,jo(!0),fetch(`${gi}/fno-stocks`).then(t=>t.json()).then(t=>{t.ok&&Array.isArray(t.stocks)&&pr(t.stocks)}).catch(()=>{Qs.current=!1}).finally(()=>jo(!1)))},[]),_r=i.useCallback(t=>{cr(t),bt(!1),t==="index"?Re(er[0]):(bn(),Re(s=>Be.length>0?Be[0].symbol:s))},[Be,bn]);i.useEffect(()=>{gt==="stock"&&Be.length>0&&Re(Be[0].symbol)},[Be,gt]),i.useEffect(()=>{const t=s=>{Cs.current&&!Cs.current.contains(s.target)&&bt(!1)};return document.addEventListener("mousedown",t),()=>document.removeEventListener("mousedown",t)},[]),i.useEffect(()=>{const t=s=>{const o=s.target;o!=null&&o.closest(".oc-btn-wrap")||te(null)};return document.addEventListener("mousedown",t),()=>document.removeEventListener("mousedown",t)},[]),i.useEffect(()=>{te(null)},[J]),i.useEffect(()=>{on.current=J},[J]),i.useEffect(()=>{if(!G||!w)return;const t=String(w.expiry||"").trim();mt.current&&mt.current!==t||(Wt(w),Te(t),sn(new Date),Lt(Ft()),Ge(null),Ee(!1))},[w,G]);const he=i.useCallback(async t=>{const s=G&&t?t:Z?t??on.current:"";if(G){if(!s)return;mt.current=s}const o=`${Jn}/live-greeks-chain/${_}${s?`?expiry=${encodeURIComponent(s)}`:""}`;if(xt.current===o)return;const n=Bt.current+1;Bt.current=n,xt.current=o;try{const r=await fetch(o);if(!r.ok)throw new Error(`HTTP ${r.status}`);const a=await r.json();if(n!==Bt.current)return;Wt(a),!s&&a.expiry&&Te(a.expiry),sn(new Date),Lt(Ft()),Ge(null)}catch(r){if(n!==Bt.current)return;Ge(r.message)}finally{xt.current===o&&(xt.current=null),Ee(!1)}},[_,Z]);i.useEffect(()=>{if(G){Ee(!1),Ge(null),Yt(0);return}Ee(!0),Wt(null),Te(""),Ge(null),Yt(0);const t=Qe.current,s=Ss((t==null?void 0:t.positions)||[]);if(Z&&t&&String(t.instrument||"").toUpperCase()===_&&s){Te(s),he(s);return}he("")},[he,_,Z]),i.useEffect(()=>{if(!A||Rt.current)return;if(m&&String(m._id||"")===A){Qe.current=m,fn(n=>n+1),mn(m);const s=String(m.instrument||"NIFTY").toUpperCase(),o=Ss(m.positions||[]);Z&&o&&Te(o),s===_?G||(Ee(!0),he(Z?o:"")):Re(s);return}let t=!0;return(async()=>{try{const s=await fetch(`${Me}/strategies/${encodeURIComponent(A)}`),o=await s.json().catch(()=>null);if(!t||!s.ok||(o==null?void 0:o.status)==="error"||!(o!=null&&o.strategy))return;Qe.current=o.strategy,fn(a=>a+1),mn(o.strategy);const n=String(o.strategy.instrument||"NIFTY").toUpperCase(),r=Ss(o.strategy.positions||[]);Z&&r&&Te(r),n===_?G||(Ee(!0),he(Z?r:"")):Re(n)}catch{}})(),()=>{t=!1}},[m,G,he,A,_,Z]),i.useEffect(()=>{if(G){Ve.current&&clearInterval(Ve.current),De.current&&clearInterval(De.current),yt(0);return}if(Ve.current&&clearInterval(Ve.current),De.current&&clearInterval(De.current),Ae===0){yt(0);return}return yt(Ae),Ve.current=setInterval(()=>{he(),wn().catch(()=>{}),yt(Ae)},Ae*1e3),De.current=setInterval(()=>yt(t=>Math.max(0,t-1)),1e3),()=>{Ve.current&&clearInterval(Ve.current),De.current&&clearInterval(De.current)}},[he,Ae,hn]),i.useEffect(()=>{if(!F||G)return;const t=s=>{var o;((o=s.data)==null?void 0:o.type)==="portfolio-paper-trade-refresh"&&(Ee(!0),he())};return window.addEventListener("message",t),()=>window.removeEventListener("message",t)},[G,he,F]),i.useEffect(()=>{if(!zs.current||!Ls.current)return;const t=Ls.current,s=zs.current;t.scrollTo({top:Math.max(0,s.offsetTop-t.clientHeight/2+s.offsetHeight/2),behavior:"smooth"})},[p]);const ds=p?Array.from(new Set([...p.chain.CE.map(t=>t.strike),...p.chain.PE.map(t=>t.strike)])).sort((t,s)=>t-s):[],q=p?Object.fromEntries(p.chain.CE.map(t=>[t.strike,t])):{},H=p?Object.fromEntries(p.chain.PE.map(t=>[t.strike,t])):{},Cr=we?[...T,...O]:T,Zs=Array.from(new Set(Cr.map(t=>t.expiry).filter(t=>t&&t!==(p==null?void 0:p.expiry)))).sort(),Pr=Zs.join("|"),v=(p==null?void 0:p.spot_price)??0,us=ds.length&&v?ds.reduce((t,s)=>Math.abs(s-v)<Math.abs(t-v)?s:t,ds[0]):0,gn=p?Math.max(0,...p.chain.CE.map(t=>t.oi)):0,yn=p?Math.max(0,...p.chain.PE.map(t=>t.oi)):0,Gs=p?p.chain.CE.reduce((t,s)=>t+s.oi,0):0,vn=p?p.chain.PE.reduce((t,s)=>t+s.oi,0):0,Mr=Gs>0?(vn/Gs).toFixed(2):"—",me=q[us],qe=H[us],Er=(me==null?void 0:me.iv)!=null?me.iv.toFixed(0):"—",Tr=me!=null&&me.ltp&&(qe!=null&&qe.ltp)?(me.ltp+qe.ltp).toFixed(2):"—",Lr=us||"—",Js=(p==null?void 0:p.lot_size)??pt[_]??75,jn=i.useMemo(()=>{const t=(p==null?void 0:p.expiries)??[],s=new Date;return s.setHours(0,0,0,0),t.filter(o=>{const n=(o||"").slice(0,10);if(!/^\d{4}-\d{2}-\d{2}$/.test(n))return!0;const r=new Date(n+"T00:00:00");return r.setHours(0,0,0,0),r>=s})},[p==null?void 0:p.expiries]),kn=Math.max(0,jn.length*(ao+ir)-ao*3);function zt(t,s,o){const n=(p==null?void 0:p.expiry)??J,r=ar(ue),a=s==="CE"?q[t]:H[t],c=(a==null?void 0:a.iv)??(s==="CE"?me==null?void 0:me.iv:qe==null?void 0:qe.iv)??15,l={id:`${Date.now()}-${Math.random()}`,side:o,lots:Dt*rs,qty:Dt*rs*Js,date:Ni(r),entryTime:$t(r),strike:t,optionType:s,expiry:n,token:(a==null?void 0:a.token)??"",entry:(a==null?void 0:a.ltp)??0,ltp:(a==null?void 0:a.ltp)??0,delta:(a==null?void 0:a.delta)??0,entryIv:c,entryVix:(p==null?void 0:p.india_vix)??0};if(et||we){ve(f=>[...f,{...l,id:`reverse-${l.id}`}]);return}Lt(r.getTime()),le(f=>[...f,l])}function fs(t,s,o){const n=(p==null?void 0:p.expiry)??J;(et||we?ve:le)(a=>{const c=a.findIndex(l=>!l.exited&&l.strike===t&&l.optionType===s&&l.side===o&&l.expiry===n);return c===-1?a:a.filter((l,f)=>f!==c)})}function zr(t){le(s=>s.map(o=>o.id===t?{...o,side:o.side==="B"?"S":"B"}:o))}function xs(t,s,o,n){if(!n){te(null),zt(t,s,o);return}te(r=>r&&r.strike===t&&r.type===s&&r.side===o?null:{strike:t,type:s,side:o})}i.useEffect(()=>{if(!p||!T.length)return;const t=p.expiry;le(s=>s.map(o=>{if(o.exited)return o;const n=o.optionType==="CE"?q[o.strike]:H[o.strike];return!n||o.expiry!==t?o:n?{...o,token:o.token||n.token,ltp:n.ltp,delta:n.delta}:o}))},[p,Z]),i.useEffect(()=>{if(!Z&&!G){cs({});return}if(!Zs.length){cs({});return}let t=!0;return(async()=>{const s=await Promise.all(Zs.map(async n=>{try{const r=await fetch(`${Jn}/live-greeks-chain/${_}?expiry=${encodeURIComponent(n)}`),a=await r.json().catch(()=>null);return!r.ok||!(a!=null&&a.chain)?null:{expiry:n,data:a}}catch{return null}}));if(!t)return;const o={};s.forEach(n=>{n&&(n.data.chain.CE.forEach(r=>{o[Oe(n.expiry,r.strike,"CE")]={ltp:r.ltp,delta:r.delta,iv:r.iv}}),n.data.chain.PE.forEach(r=>{o[Oe(n.expiry,r.strike,"PE")]={ltp:r.ltp,delta:r.delta,iv:r.iv}}))}),cs(o),Lt(Ft())})(),()=>{t=!1}},[_,p==null?void 0:p.expiry,Pr,Z]),i.useEffect(()=>{!T.length||!Object.keys(fe).length||le(t=>t.map(s=>{if(s.exited||p&&s.expiry===p.expiry)return s;const o=fe[Oe(s.expiry,s.strike,s.optionType)];return o?{...s,ltp:o.ltp,delta:o.delta,entryIv:o.iv||s.entryIv}:s}))},[fe,p]);async function wn(t=ps){if(!t.length){Ys({});return}try{const s=await fetch(`${Me}/quotes?tokens=${encodeURIComponent(t.join(","))}`),o=await s.json().catch(()=>null);if(!s.ok||(o==null?void 0:o.status)==="error")return;const n={};Object.entries((o==null?void 0:o.quotes)||{}).forEach(([r,a])=>{n[String(r).trim()]=Number((a==null?void 0:a.ltp)||0)}),Ys(n),Lt(Ft())}catch{}}i.useEffect(()=>{if(!ps.length){Ys({});return}wn(ps).catch(()=>{})},[hn]),i.useEffect(()=>{const t=Qe.current;if(!t||Rt.current||String(t.instrument||"").toUpperCase()!==_)return;const s=Ss(t.positions||[]);if(!G&&(!p||Z&&s&&p.expiry!==s))return;const o=(t.positions||[]).map((n,r)=>{const a=String(n.option_type||"").toLowerCase(),c=a==="call"||a==="ce"?"CE":"PE",l=String(n.type||"").toLowerCase()==="buy"?"B":"S",f=Number(n.strike||0),x=String(n.expiry||(p==null?void 0:p.expiry)||""),d=dt(p,x)?c==="CE"?q[f]:H[f]:void 0,y=Number(n.quantity||0),N=Number(n.lots||1),z=Number(n.lot_size||(p==null?void 0:p.lot_size)||pt[_]||75);return{id:`${t._id}-${r}`,side:l,lots:N,qty:y||N*z,date:String(n.entry_time||"").replace("T"," ").slice(0,19)||`${ue.getFullYear()}-${ae(ue.getMonth()+1)}-${ae(ue.getDate())} ${ae(ue.getHours())}:${ae(ue.getMinutes())}:${ae(ue.getSeconds())}`,entryTime:String(n.entry_time||$t(ue)),strike:f,optionType:c,expiry:x,token:String(n.token||(d==null?void 0:d.token)||""),entry:Number(n.entry_price||0),ltp:(d==null?void 0:d.ltp)??Number(n.current_ltp||n.entry_price||0),delta:(d==null?void 0:d.delta)??0,entryIv:(d==null?void 0:d.iv)??15,entryVix:(p==null?void 0:p.india_vix)??0,exited:!!n.exited,exitPrice:n.exit_price??null,exitTime:n.exit_time??null}});le(o),Rt.current=!0,Qe.current=null},[p,G,Sr,_,Z]);function Nn(t){if(t.exited&&typeof t.exitPrice=="number")return t.exitPrice;const s=v||0;if(s<=0)return t.ltp;const o=new Date(t.expiry);o.setUTCHours(10,0,0,0);const n=Math.max(1/(365*24*60),(o.getTime()-Y)/(1e3*60*60*24*365)),r=.05;let a;const c=dt(p,t.expiry)?t.optionType==="CE"?q[t.strike]:H[t.strike]:fe[Oe(t.expiry,t.strike,t.optionType)],l=typeof(c==null?void 0:c.ltp)=="number"?c.ltp:0,f=typeof(c==null?void 0:c.iv)=="number"?c.iv:0;return l>0?a=io(l,s,t.strike,n,r,t.optionType)??(f>0?f/100:t.entryIv/100):t.ltp>0?a=io(t.ltp,s,t.strike,n,r,t.optionType)??(t.entryIv>0?t.entryIv/100:.15):a=t.entryIv>0?t.entryIv/100:.15,a=Math.max(.01,a),t.optionType==="CE"?lo(s,t.strike,n,r,a):co(s,t.strike,n,r,a)}function be(t){if(t.exited&&typeof t.exitPrice=="number")return t.exitPrice;const s=String(t.token||"").trim(),o=s?Tt[s]:void 0;if(typeof o=="number"&&o>0)return o;if(dt(p,t.expiry)){const r=t.optionType==="CE"?q[t.strike]:H[t.strike];if(r)return r.ltp}const n=fe[Oe(t.expiry,t.strike,t.optionType)];return n?n.ltp:Nn(t)}function st(t,s){return(t.side==="S"?t.entry-s:s-t.entry)*t.qty}function Ir(t){const s=String(t.token||"").trim(),o=s?Tt[s]:void 0;if(typeof o=="number"&&o>0){if(dt(p,t.expiry)){const c=t.optionType==="CE"?q[t.strike]:H[t.strike];if(c)return{ltp:o,delta:c.delta}}const a=fe[Oe(t.expiry,t.strike,t.optionType)];return a?{ltp:o,delta:a.delta}:{ltp:o,delta:t.delta}}if(dt(p,t.expiry)){const a=t.optionType==="CE"?q[t.strike]:H[t.strike];if(a)return{ltp:a.ltp,delta:a.delta}}const n=fe[Oe(t.expiry,t.strike,t.optionType)];return n?{ltp:n.ltp,delta:n.delta}:{ltp:Nn({...t,exited:!1,exitPrice:null}),delta:t.delta}}function $r(t){const s=$t(new Date);le(o=>o.map((n,r)=>{if(r!==t||n.exited)return n;const a=Number(be(n).toFixed(2));return{...n,exited:!0,exitPrice:a,exitTime:s,ltp:a,delta:0}}))}function Fr(t){le(s=>s.map((o,n)=>{if(n!==t||!o.exited)return o;const r=Ir(o);return{...o,exited:!1,exitPrice:null,exitTime:null,ltp:Number(r.ltp.toFixed(2)),delta:Number(r.delta.toFixed(2))}}))}function Or(){const t=$t(new Date);le(s=>s.map(o=>{if(o.exited)return o;const n=Number(be(o).toFixed(2));return{...o,exited:!0,exitPrice:n,exitTime:t,ltp:n,delta:0}}))}function Ks(t,s){le(o=>o.map(n=>{if(n.id!==t)return n;const r=Math.max(1,Number.isFinite(s)?Math.floor(s):1),a=Math.max(1,Math.round((Number(n.qty||0)||r)/Math.max(1,Number(n.lots||1))));return{...n,lots:r,qty:r*a}}))}function ot(t,s){ve(o=>o.map(n=>{if(n.id!==t)return n;const r=Math.max(1,Number.isFinite(s)?Math.floor(s):1),a=Math.max(1,Math.round((Number(n.qty||0)||r)/Math.max(1,Number(n.lots||1))));return{...n,lots:r,qty:r*a}}))}function Rr(){ve(T.filter(t=>!t.exited).map(t=>({...t,id:`reverse-${t.id}`,side:t.side==="S"?"B":"S"}))),As(!0)}function Br(){As(!1),ve([]),te(null)}function Ar(){try{Nt(O.map(t=>({price:Number((be(t)||t.ltp||t.entry||0).toFixed(2)),qty:t.qty}))),es(!0)}catch(t){console.error("[openBasketModal] error:",t),es(!0)}}async function Sn(t){rn(!0);const s=t??O.map((o,n)=>n);try{const o=s.map(c=>{const l=O[c],f=nn[c];return{side:l.side,instrument:_,strike:l.strike,option_type:l.optionType,expiry:l.expiry,qty:f.qty,order_type:"LIMIT",price:f.price}}),a=(await(await fetch(`${Me}/basket-order`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({orders:o})})).json()).results||[];Nt(c=>c.map((l,f)=>{const x=s.indexOf(f);if(x<0)return l;const d=a[x];return{...l,status:d==null?void 0:d.status,error:d==null?void 0:d.error}}))}catch(o){console.warn("[Basket] error:",o)}finally{rn(!1)}}i.useLayoutEffect(()=>{if(!we||!Fs.current)return;const t=()=>{const s=Fs.current.getBoundingClientRect();gr(s.left)};return t(),window.addEventListener("resize",t),()=>window.removeEventListener("resize",t)},[we]);async function Dr(){if(A&&ee)try{const s=new URLSearchParams({strategy_id:A,status:"1"}),n=await(await fetch(`${Me}/adjustments?${s}`)).json();if(n.status==="success"&&Array.isArray(n.adjustments)){const r=n.adjustments.find(a=>a.trigger_condition===ee);if(r&&Array.isArray(r.positions)&&r.positions.length>0){const a=r.positions.map((c,l)=>({id:`alert-restored-${r._id}-${l}`,side:String(c.side||"B").toUpperCase(),lots:c.lots||1,qty:c.qty||(c.lots||1)*((p==null?void 0:p.lot_size)??pt[_]??75),date:new Date().toISOString().slice(0,10),entryTime:"",strike:c.strike,optionType:String(c.option_type||"CE").toUpperCase(),expiry:c.expiry||"",token:null,entry:c.entry_price??0,ltp:c.entry_price??0,delta:0,entryIv:0,entryVix:0,exited:!1,exitPrice:null,exitTime:null,_alertType:c.tag==="EXIT"?"exit":"new",_adjustmentId:r._id}));ve(a),os(!0);return}}}catch(s){console.warn("[Alert] failed to load existing adjustment:",s)}const t=T.filter(s=>!s.exited).map(s=>({...s,id:`alert-exit-${s.id}`,side:s.side==="B"?"S":"B",entry:s.ltp,_alertType:"exit"}));ve(t),os(!0)}function _n(){os(!1),ve([]),te(null)}async function Vr(){var t;try{const s=O.map(n=>({side:n.side,lots:n.lots,qty:n.qty,strike:n.strike,option_type:n.optionType,expiry:n.expiry,entry_price:n.entry,tag:n._alertType==="exit"?"EXIT":"NEW"})),o=(t=O[0])==null?void 0:t._adjustmentId;if(o){const r=await(await fetch(`${Me}/adjustments/${o}`,{method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify({positions:s,trigger_price:de??null,trigger_condition:ee})})).json();r.status!=="success"&&console.warn("[Alert] update failed:",r.message)}else{const n={strategy_id:A||null,portfolio_name:Ze.current.portfolioName||null,instrument:_,trigger_condition:ee,trigger_price:de??null,spot_price_at_save:v||null,positions:s},a=await(await fetch(`${Me}/adjustments`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)})).json();a.status!=="success"&&console.warn("[Alert] save failed:",a.message)}}catch(s){console.warn("[Alert] save error:",s)}}const Cn=i.useMemo(()=>new Set(Qt),[Qt]),ze=i.useMemo(()=>{const t=T.filter(r=>Cn.has(r.id));if(!we)return t;const s=new Map;O.filter(r=>r._alertType==="exit").forEach(r=>{const a=String(r.id).replace(/^alert-exit-/,"");if(a!==String(r.id))s.set(a,r.entry);else{const c=r.side==="B"?"S":"B";t.forEach(l=>{l.strike===r.strike&&l.optionType===r.optionType&&l.expiry===r.expiry&&l.side===c&&s.set(l.id,r.entry)})}});const o=t.map(r=>{const a=s.get(r.id);return a===void 0?r:{...r,exited:!0,exitPrice:a,delta:0}}),n=O.filter(r=>!r.exited&&r._alertType!=="exit");return[...o,...n]},[T,Cn,we,O]),L=i.useDeferredValue(ze);yo.current=L,go.current=v,bo.current=Tt,vo.current=p==null?void 0:p.lot_size;const Ur=L.filter(t=>!t.exited).map(t=>`${t.expiry}|${t.strike}|${t.optionType}|${t.side}|${t.qty}`).sort().join(","),_e=i.useMemo(()=>ze.reduce((t,s)=>{const o=be(s);return t+st(s,o)},0),[ze,Tt,p,fe,v,Y]),qr=i.useMemo(()=>L.reduce((t,s)=>{const o=be(s);return t+st(s,o)},0),[L,Tt,p,fe,v,Y]),Pn=i.useMemo(()=>ze.reduce((t,s)=>t+s.delta*s.lots*(s.side==="S"?-1:1),0),[ze]),Mn=i.useMemo(()=>ze.reduce((t,s)=>t+(s.side==="S"?s.entry:-s.entry)*s.qty,0),[ze]);function Ce(t){const s=new Date(t);return isNaN(s.getTime())?t:s.toLocaleDateString("en-IN",{day:"2-digit",month:"short",year:"2-digit"})}function hs(t){const s=new Date(t);return s.setUTCHours(10,0,0,0),s.getTime()}const He=i.useMemo(()=>Array.from(new Set(L.filter(t=>!t.exited).map(t=>t.expiry).filter(Boolean))).sort(),[L]),En=He[0]||J||"",je=Je||En,Hr=i.useMemo(()=>He.map(t=>({value:t,label:Ce(t)})),[He]),ce=je?hs(je):Y,nt=je?Ce(je):"—";i.useEffect(()=>{if(!He.length){Je&&Zt("");return}(!Je||!He.includes(Je))&&Zt(He[0])},[Je,He]);function Tn(t){const s=dt(p,t.expiry)?t.optionType==="CE"?q[t.strike]:H[t.strike]:fe[Oe(t.expiry,t.strike,t.optionType)];return typeof(s==null?void 0:s.iv)=="number"&&s.iv>0?s.iv/100:t.entryIv>0?t.entryIv/100:.15}function X(t,s=!0,o=v||(r=>(r=L[0])==null?void 0:r.strike)()||0,n){const l=L.filter(x=>!x.exited).reduce((x,d)=>{const y=hs(d.expiry);return y<x?y:x},1/0),f=typeof n=="number"?n:s?l:Y;return L.reduce((x,d)=>{const y=Math.max(1,Number(d.qty||0)||Math.max(1,Number(d.lots||1))*((p==null?void 0:p.lot_size)??pt[_]??65));if(d.exited){const h=d.exitPrice??d.ltp??0;return x+st(d,h)}const N=hs(d.expiry),z=Math.max(1/(365*24*60),(N-Y)/(1e3*60*60*24*365));let I;N<=f?I=1e-6:I=Math.max(1e-6,(N-f)/(1e3*60*60*24*365));const P=be(d);if(!s&&f===Y&&Math.abs(t-o)<.5)return x+st(d,P);let C=Math.max(.01,Tn(d));if(o>0&&z>1e-5&&P>0){const h=io(P,o,d.strike,z,.05,d.optionType);typeof h=="number"&&Number.isFinite(h)&&(C=Math.max(.01,h))}const g=d.optionType==="CE"?lo(t,d.strike,I,.05,C):co(t,d.strike,I,.05,C);return x+(d.side==="S"?d.entry-g:g-d.entry)*y},0)}function Wr(t=v||(o=>(o=L[0])==null?void 0:o.strike)()||0,s=ce){if(!L.length)return[];const n=L.map(x=>x.strike),r=Math.max(1,Math.min(...n)*.8),a=Math.max(r+1,Math.max(...n)*1.2),c=50,l=[];let f=X(r,!0,t,s);for(let x=r+c;x<=a;x+=c){const d=X(x,!0,t,s);if(f*d<0){let y=x-c,N=x,z=f;for(let I=0;I<20;I++){const P=(y+N)/2,C=X(P,!0,t,s);if(Math.abs(C)<.5){y=N=P;break}C*z<0?N=P:(y=P,z=C)}l.push(Math.round((y+N)/2))}else d===0&&f!==0&&l.push(Math.round(x));f=d}return l}function Yr(t=v||(r=>(r=L[0])==null?void 0:r.strike)()||0,s=L.filter(a=>!a.exited),o=je||Array.from(new Set(s.map(a=>a.expiry).filter(Boolean))).sort()[0]||J||"",n=ce){if(!s.length||t<=0||!o)return 0;const a=n||hs(o),c=Math.max(.001,(a-Y)/(1e3*60*60*24*365)),l=Math.max(.01,s.reduce((C,g)=>C+Tn(g),0)/s.length),f=.05,x=s.map(C=>C.strike),d=Math.max(1,Math.min(...x)*.75),y=Math.max(d+1,Math.max(...x)*1.25),N=240,z=(y-d)/N;let I=0,P=0;for(let C=0;C<=N;C+=1){const g=d+C*z;if(g<=0)continue;const h=(Math.log(g/t)-(f-.5*l*l)*c)/(l*Math.sqrt(c)),M=1/(g*l*Math.sqrt(c))*.3989423*Math.exp(-.5*h*h)*z;P+=M,X(g,!0,t,n)>=0&&(I+=M)}return P>0?I/P*100:0}i.useEffect(()=>{const t=yo.current.filter(l=>!l.exited),s=go.current;if(!t.length||!s){Xs(0);return}const o=vo.current??pt[_]??65,n=bo.current,r=t.map(l=>({underlying:_,instrument_type:l.optionType,expiry:l.expiry,strike:l.strike,transaction_type:l.side==="S"?"SELL":"BUY",quantity:Math.max(1,Math.round((Number(l.qty)||0)/o)),lot_size:o,ltp:Math.max(0,(l.token?n[l.token]??l.ltp:l.ltp)||l.entry||0),spot:s})),a=()=>{const l=ji(r),f=Number(l.net_margin||l.total_margin||0);Xs(f>0?f:0)};if(!Kn){a();return}const c=new AbortController;return fetch(`${Kn}/margin/calculate`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({product:"NRML",broker:"kite",use_broker_api:!0,legs:r}),signal:c.signal}).then(l=>{if(!l.ok)throw new Error("margin_api");return l.json()}).then(l=>{if(c.signal.aborted)return;const f=Number((l==null?void 0:l.net_margin)??(l==null?void 0:l.total_margin)??0);if(f>0){Xs(f);return}a()}).catch(()=>{c.signal.aborted||a()}),()=>c.abort()},[_,Ur]);const Xr=i.useMemo(()=>{var It;const t=v||((It=L[0])==null?void 0:It.strike)||0,s=L.filter(oe=>!oe.exited),o=xn,n=L.filter(oe=>!oe.exited),r=new Set(n.map(oe=>oe.expiry).filter(Boolean)),a=r.size===1?Array.from(r)[0]:"",c=r.size<=1&&(!je||!a||je===a);let l=0,f=0,x=!1,d=!1;if(c){let ge=L.filter(B=>B.exited).reduce((B,Q)=>{const ye=Q.exitPrice??Q.ltp??0;return B+st(Q,ye)},0),pe=0;const ne={};n.forEach(B=>{const Q=Math.max(1,Number(B.qty||0)||Math.max(1,Number(B.lots||1))*((p==null?void 0:p.lot_size)??pt[_]??75)),ye=B.side==="B"?1:-1,Fe=Number(B.strike),ks=Number(B.entry)||0;B.optionType==="CE"?(ge+=-ks*Q*ye,ne[Fe]=(ne[Fe]||0)+Q*ye):(ge+=(Fe-ks)*Q*ye,pe+=-Q*ye,ne[Fe]=(ne[Fe]||0)+Q*ye)});const Pe=Object.keys(ne).map(Number).sort((B,Q)=>B-Q),re=[ge];let Ye=0;Pe.forEach(B=>{const Q=ge+pe*(B-Ye);re.push(Q),ge=Q,pe+=ne[B],Ye=B});const R=re.length?Math.max(...re):0,Xe=re.length?Math.min(...re):0;l=R>0?Math.floor(R):0,f=Xe<0?Math.floor(Xe):0,x=pe>.1,d=pe<-.1}else{const oe=L.map(R=>R.strike),ge=Math.max(1,Math.min(Math.min(...oe)*.8,t*.9)),pe=Math.max(ge+5,Math.max(Math.max(...oe)*1.2,t*1.1)),ne=[];for(let R=ge;R<=pe;R+=5)ne.push(R);oe.forEach(R=>{R>ge&&R<pe&&ne.push(R)}),ne.sort((R,Xe)=>R-Xe);const Pe=ne.map(R=>X(R,!0,t,ce)),re=Pe.length?Math.max(...Pe):0,Ye=Pe.length?Math.min(...Pe):0;l=re>0?Math.floor(re):0,f=Ye<0?Math.floor(Ye):0}const y=o>0?o:null,N=y?l/y*100:0,z=y?f/y*100:0,I=Wr(t,ce),P=Yr(t,s,je,ce),C=s.map(oe=>oe.strike),g=C.length?Math.max(...C):t,h=C.length?Math.min(...C):t,k=X(Math.max(1,g*2),!0,t,ce),M=X(Math.max(1,g*3),!0,t,ce),D=X(Math.max(1,h*.5),!0,t,ce),se=X(Math.max(1,h*.1),!0,t,ce),it=s.length>0&&(x||M-k>1),We=s.length>0&&(d||M-k<-1||se-D<-1),at=!it&&!We&&l>0&&f<0?Math.abs(f)/l:0,js=it&&f<0?"∞:1":We&&l>0?"1:∞":l>0&&f<0?`1:${at.toFixed(at>=10?0:1)}`:"—";return{summarySpotPrice:t,estimatedMargin:o,maxProfitValue:l,maxLossValue:f,maxProfitPct:N,maxLossPct:z,breakevenPoints:I,popValue:P,isUnlimitedProfit:it,isUnlimitedLoss:We,rrLabel:js}},[je,ce,L,p,q,fe,xn,H,J,v]),{summarySpotPrice:ms,estimatedMargin:rt,maxProfitValue:Qr,maxLossValue:Zr,maxProfitPct:Gr,maxLossPct:Jr,breakevenPoints:Ln,popValue:Kr,isUnlimitedProfit:ei,isUnlimitedLoss:ti,rrLabel:si}=Xr;uo.current=v||0,fo.current=ms||0,xo.current=Y,ho.current=je||En,mo.current=rt>0?rt:0;const oi=rt>0?qr/rt*100:0;function eo(t){kt.current=t,vr(s=>s&&s.top===t.top&&s.bottom===t.bottom&&s.left===t.left&&s.right===t.right?s:t)}const ni=et?e.jsxs("div",{className:"sl-config-preview",children:[e.jsx("div",{className:"sl-config-preview-title",children:"Reverse Positions Preview"}),e.jsx("div",{className:"position_table",children:e.jsxs("table",{style:{width:"100%",minWidth:700,tableLayout:"fixed"},children:[e.jsxs("colgroup",{children:[e.jsx("col",{style:{width:72}}),e.jsx("col",{style:{width:72}}),e.jsx("col",{style:{width:"5%"}}),e.jsx("col",{style:{width:78}}),e.jsx("col",{style:{width:80}}),e.jsx("col",{style:{width:"8%"}}),e.jsx("col",{style:{width:"6%"}}),e.jsx("col",{style:{width:90}})]}),e.jsx("thead",{children:e.jsxs("tr",{className:"sticky-top",children:[e.jsx("th",{className:"pos-first-col-head",style:{width:72},children:e.jsxs("div",{className:"action_button_group",children:[e.jsxs("label",{className:"pos-select-wrap",children:[e.jsx("input",{type:"checkbox",className:"pos-select-input",checked:!0,readOnly:!0}),e.jsx("span",{className:"pos-select-box"})]}),e.jsx("span",{style:{width:18,display:"inline-block"}})]})}),e.jsx("th",{children:"Lots"}),e.jsx("th",{children:"Qty"}),e.jsx("th",{children:"Strike ◇"}),e.jsx("th",{children:"Expiry"}),e.jsx("th",{children:"LTP/Exit"}),e.jsx("th",{children:"Delta"}),e.jsx("th",{children:"Lots Exit ◇"})]})}),e.jsx("tbody",{children:O.length===0?e.jsx("tr",{children:e.jsx("td",{colSpan:8,className:"pos-empty",children:"No open positions available for reverse config preview."})}):O.map(t=>{const s=be(t);return e.jsxs("tr",{className:"parent_position",children:[e.jsx("td",{className:"pos-first-col-cell",children:e.jsxs("div",{className:"action_button_group",children:[e.jsxs("label",{className:"pos-select-wrap",children:[e.jsx("input",{type:"checkbox",className:"pos-select-input",checked:!0,readOnly:!0}),e.jsx("span",{className:"pos-select-box"})]}),e.jsx("span",{className:t.side==="B"?"pt-buy-btn":"pt-sell-btn",children:t.side})]})}),e.jsx("td",{children:e.jsxs("div",{className:"simulator_position_input position__strike",children:[e.jsx("button",{className:"sign_btn",onClick:()=>ot(t.id,t.lots-1),children:"−"}),e.jsx("input",{type:"number",className:"sim-input lot-input",value:t.lots,min:1,onChange:o=>{const n=Math.max(1,parseInt(o.target.value||"1",10)||1);ot(t.id,n)}}),e.jsx("button",{className:"sign_btn",onClick:()=>ot(t.id,t.lots+1),children:"+"})]})}),e.jsx("td",{children:t.qty}),e.jsx("td",{children:e.jsxs("div",{className:"position__strike",children:[e.jsx("span",{children:t.strike}),e.jsx("span",{className:t.optionType==="CE"?"call-btn-pt":"put-btn-pt",children:t.optionType})]})}),e.jsx("td",{children:e.jsx("div",{className:"position__expiry",children:Ce(t.expiry)})}),e.jsx("td",{children:e.jsx("input",{type:"number",step:"any",className:"sim-input",value:s.toFixed(2),readOnly:!0})}),e.jsx("td",{style:{textAlign:"center"},children:t.delta.toFixed(2)}),e.jsx("td",{children:e.jsx("div",{className:"simulator_position_button",children:e.jsx("select",{className:"lot_select_space",value:t.lots,disabled:!0,children:Array.from({length:t.lots},(o,n)=>n+1).map(o=>e.jsx("option",{value:o,children:o},o))})})})]},`reverse-${t.id}`)})})]})})]}):null;i.useEffect(()=>{const t=$s.current;if(!t)return;const s=t.getContext("2d");if(!s)return;ht.current&&clearTimeout(ht.current);const o=At.current&&A?120:0;return ht.current=setTimeout(()=>{const n=v||24e3,r=Math.max(F?800:1e3,n*(F?.045:.06)),a=F?10:5,c=[];for(let h=Math.floor((n-r)/a)*a;h<=n+r;h+=a)c.push(h);const l=Number((v||n).toFixed(2));c.some(h=>Math.abs(h-l)<.01)||(c.push(l),c.sort((h,k)=>h-k)),Ue.current=c;const f=v||n,x=c.map(h=>X(h,!0,f,ce)),d=c.map(h=>X(h,!1,f,Y)),y=Ns(c,!1,q,H),N=Ns(c,!0,q,H);Jt.current=y,Gt.current=N;const z=Math.max(...x,...d,0),I=Math.min(...x,...d,0),P=Math.max(Math.abs(z),Math.abs(I))||1e3,C=Math.max(...y,...N,0),g=Math.ceil(C*1.2/5e3)*5e3||5e3;if(V.current&&V.current.canvas===t){const h=V.current;h.data.labels=c,h.data.datasets[0].data=y,h.data.datasets[1].data=N,h.data.datasets[2].data=x,h.data.datasets[2].label=nt!=="—"?`${nt} Expiry Payoff`:"Expiry Payoff",h.data.datasets[3].data=d,h.data.datasets[3].label="Today Payoff",h.options.scales.yPnL.min=-P,h.options.scales.yPnL.max=P,h.options.scales.yOI.min=-g,h.options.scales.yOI.max=g,h.update("none"),Os(X(v||n,!1,f,Y)),requestAnimationFrame(()=>{var M;const k=(M=V.current)==null?void 0:M.chartArea;if(k){const D={top:k.top,bottom:k.bottom,left:k.left,right:k.right};eo(D)}}),At.current=!1;return}V.current&&(V.current.destroy(),V.current=null),V.current=new rr(s,{type:"bar",data:{labels:c,datasets:[{type:"bar",label:"Put OI",data:y,backgroundColor:"rgba(16,185,129,0.7)",borderWidth:0,yAxisID:"yOI",order:4,barThickness:F?4:5},{type:"bar",label:"Call OI",data:N,backgroundColor:"rgba(239,68,68,0.7)",borderWidth:0,yAxisID:"yOI",order:3,barThickness:F?4:5},{type:"line",label:"Expiry Payoff",data:x,borderColor:"rgba(16,185,129,1)",borderWidth:2.5,pointRadius:0,pointHoverRadius:5,fill:{target:"origin",above:"rgba(16,185,129,0.15)",below:"#fff3f4"},segment:{borderColor:h=>{const k=h.p0.parsed.y,M=h.p1.parsed.y;return k>=0&&M>=0?"rgba(16,185,129,1)":k<0&&M<0?"#c85a5a":(k+M)/2>=0?"rgba(16,185,129,1)":"#c85a5a"}},tension:.1,yAxisID:"yPnL",order:2},{type:"line",label:"Today Payoff",data:d,borderColor:"#499d93",borderWidth:2.5,pointRadius:0,pointHoverRadius:5,fill:!1,tension:.1,yAxisID:"yPnL",order:1}]},options:{responsive:!0,maintainAspectRatio:!1,interaction:{mode:"index",intersect:!1},plugins:{legend:{display:!1},tooltip:{enabled:!1,external:h=>{var Un,qn,Hn,Wn,Yn,Xn,Qn,Zn,Gn;const{chart:k,tooltip:M}=h,D=ai(Kt.current);if(!D)return;if(!M||M.opacity===0||!((Un=M.dataPoints)!=null&&Un.length)){D.classList.remove("is-visible"),D.style.opacity="0";return}const se=Number(((qn=M.dataPoints[0])==null?void 0:qn.label)??0),it=uo.current||fo.current||se,We=Number(((Yn=(Hn=k.data.datasets[3])==null?void 0:Hn.data)==null?void 0:Yn[(Wn=M.dataPoints[0])==null?void 0:Wn.dataIndex])??0),at=Number(((Zn=(Xn=k.data.datasets[2])==null?void 0:Xn.data)==null?void 0:Zn[(Qn=M.dataPoints[0])==null?void 0:Qn.dataIndex])??0),js=mo.current,It=to(We),oe=to(at),ge=ho.current,pe=Ue.current,ne=pe.length>0?pe.reduce((ie,lt,hi)=>Math.abs(lt-se)<Math.abs(pe[ie]-se)?hi:ie,0):-1,Pe=pe.map((ie,lt)=>lt).filter(ie=>(Gt.current[ie]??0)>0||(Jt.current[ie]??0)>0),re=ne>=0&&Pe.length>0?Pe.reduce((ie,lt)=>Math.abs(lt-ne)<Math.abs(ie-ne)?lt:ie):-1,Ye=re>=0?pe[re]??Math.round(se):Math.round(se),R=re>=0?Gt.current[re]??0:0,Xe=re>=0?Jt.current[re]??0:0,B=ie=>ie>=1e7?(ie/1e7).toFixed(2)+" Cr":ie>=1e5?(ie/1e5).toFixed(2)+" L":ie.toLocaleString("en-IN"),Q=R>0||Xe>0?`
                <div class="payoff-chart-tooltip-divider"></div>
                <div class="payoff-chart-tooltip-row">
                  <span class="payoff-chart-tooltip-row-label" style="color:#9ca3af;">Strike</span>
                  <span class="payoff-chart-tooltip-row-value" style="color:#f9fafb;font-weight:600;">${Ye.toLocaleString("en-IN")}</span>
                </div>
                <div class="payoff-chart-tooltip-row">
                  <span class="payoff-chart-tooltip-row-label" style="color:#8fcbc4;">Call OI</span>
                  <span class="payoff-chart-tooltip-row-value" style="color:#8fcbc4;font-weight:600;">${B(R)}</span>
                </div>
                <div class="payoff-chart-tooltip-row">
                  <span class="payoff-chart-tooltip-row-label" style="color:#f87171;">Put OI</span>
                  <span class="payoff-chart-tooltip-row-value" style="color:#f87171;font-weight:600;">${B(Xe)}</span>
                </div>`:"";D.innerHTML=`
                <div class="payoff-chart-tooltip-header">
                  <span class="payoff-chart-tooltip-header-label">When price is at</span>
                  <span class="payoff-chart-tooltip-header-value">${_}</span>
                </div>
                <div class="payoff-chart-tooltip-pnl">
                  <span class="payoff-chart-tooltip-pnl-value payoff-chart-tooltip-neutral">${se.toLocaleString("en-IN",{maximumFractionDigits:0})}</span>
                  <span class="payoff-chart-tooltip-pnl-meta ${to(se-it)}">${ii(se,it)}</span>
                </div>
                <div class="payoff-chart-tooltip-divider"></div>
                <div class="payoff-chart-tooltip-row">
                  <span class="payoff-chart-tooltip-row-label"><strong>Expected P&amp;L on</strong><span class="is-white">${Fn(xo.current)}</span></span>
                  <span class="payoff-chart-tooltip-value-wrap">
                    <span class="payoff-chart-tooltip-row-value ${It}">${In(We,0)}</span>
                    <span class="payoff-chart-tooltip-row-meta ${It}">(${$n(We,js)})</span>
                  </span>
                </div>
                <div class="payoff-chart-tooltip-row">
                  <span class="payoff-chart-tooltip-row-label"><strong class="is-white">Expiry date</strong><span class="is-white">${Fn(ge)}</span></span>
                  <span class="payoff-chart-tooltip-value-wrap">
                    <span class="payoff-chart-tooltip-row-value ${oe}">${In(at,0)}</span>
                    <span class="payoff-chart-tooltip-row-meta ${oe}">(${$n(at,js)})</span>
                  </span>
                </div>
                ${Q}
              `;const ye=(Gn=Kt.current)==null?void 0:Gn.getBoundingClientRect(),Fe=k.canvas.getBoundingClientRect();if(!ye)return;const ks=M.caretX+(Fe.left-ye.left),xi=M.caretY+(Fe.top-ye.top);D.style.left=`${ks}px`,D.style.top=`${xi}px`,D.style.opacity="1",D.classList.add("is-visible")}}},scales:{x:{offset:!0,grid:{display:!0,color:"rgba(0,0,0,0.05)"},ticks:{callback(h){const k=Number(this.getLabelForValue(h));return k%100===0?k:""},color:"#6b7280",font:{size:11}},border:{display:!1}},yPnL:{type:"linear",position:"left",min:-P,max:P,title:{display:!0,text:"Profit / Loss",color:"#6b7280",font:{size:12,weight:500}},grid:{display:!0,color:h=>h.tick.value===0?"rgba(0,0,0,0.3)":"rgba(0,0,0,0.05)",lineWidth:h=>h.tick.value===0?2:1},ticks:{callback:h=>Number(h).toLocaleString(),color:"#6b7280",font:{size:11}},border:{display:!1}},yOI:{type:"linear",position:"right",min:-g,max:g,title:{display:!0,text:"Open Interest",color:"#6b7280",font:{size:12,weight:500}},grid:{display:!1},ticks:{callback:h=>{const k=Math.abs(Number(h));return k?k>=1e4?`${(k/1e4).toFixed(0)}Cr`:k.toLocaleString():"0"},color:"#6b7280",font:{size:11}},border:{display:!1}}}}}),Os(X(v||n,!1,f,Y)),requestAnimationFrame(()=>{var k,M,D;(k=V.current)==null||k.resize(),(M=V.current)==null||M.update("none");const h=(D=V.current)==null?void 0:D.chartArea;if(h){const se={top:h.top,bottom:h.bottom,left:h.left,right:h.right};eo(se)}}),At.current=!1},o),()=>{ht.current&&clearTimeout(ht.current)}},[nt,ce,L,A,F,v,Z,Y]),i.useEffect(()=>{const t=V.current,s=Ue.current;if(!t||!s.length)return;const o=v||s[Math.floor(s.length/2)]||0,n=s.map(f=>X(f,!0,o,ce)),r=s.map(f=>X(f,!1,o,Y)),a=Math.max(...n,...r,0),c=Math.min(...n,...r,0),l=Math.max(Math.abs(a),Math.abs(c))||1e3;t.data.datasets[2].data=n,t.data.datasets[2].label=nt!=="—"?`${nt} Expiry Payoff`:"Expiry Payoff",t.data.datasets[3].data=r,t.data.datasets[3].label="Today Payoff",t.options.scales.yPnL.min=-l,t.options.scales.yPnL.max=l,t.update("none"),Os(X(v||o,!1,o,Y))},[p,q,nt,ce,L,fe,H,J,v,Y]),i.useEffect(()=>{const t=V.current,s=Ue.current;if(!t||!s.length)return;const o=Ns(s,!1,q,H),n=Ns(s,!0,q,H);Jt.current=o,Gt.current=n;const r=Math.max(...o,...n,0),a=Math.ceil(r*1.2/5e3)*5e3||5e3;t.data.datasets[0].data=o,t.data.datasets[1].data=n,t.options.scales.yOI.min=-a,t.options.scales.yOI.max=a,t.update("none")},[p,J]),i.useEffect(()=>{const t=Kt.current;if(!t||typeof ResizeObserver>"u")return;const s=new ResizeObserver(()=>{var n,r,a;(n=V.current)==null||n.resize(),(r=V.current)==null||r.update("none");const o=(a=V.current)==null?void 0:a.chartArea;if(o){const c={top:o.top,bottom:o.bottom,left:o.left,right:o.right};eo(c)}});return s.observe(t),()=>s.disconnect()},[]),i.useEffect(()=>{if(!K)return;const t=ee===">="?U:W;Ct((t==null?void 0:t.price)??null)},[ee,K,W,U]),i.useEffect(()=>{const t=$s.current;if(!t)return;const s=r=>{if(!K)return;const a=kt.current;if(!a)return;const c=t.getBoundingClientRect(),l=r.clientX-c.left;if(l<a.left||l>a.right){_t(null);return}_t(zn(l))},o=r=>{if(!K)return;const a=kt.current;if(!a)return;const c=t.getBoundingClientRect(),l=r.clientX-c.left;l<a.left||l>a.right||Ct(zn(l))},n=()=>{K&&_t(null)};return t.addEventListener("mousemove",s),t.addEventListener("click",o),t.addEventListener("mouseleave",n),()=>{t.removeEventListener("mousemove",s),t.removeEventListener("click",o),t.removeEventListener("mouseleave",n)}},[K]);const ri=[...Array.from({length:30},(t,s)=>`OTM${30-s}`),"ATM",...Array.from({length:30},(t,s)=>`ITM${s+1}`)];function xe(t){const s=kt.current,o=Ue.current;if(!s||!o.length)return null;let n=-1,r=1/0;return o.forEach((a,c)=>{const l=Math.abs(a-t);l<r&&(r=l,n=c)}),n<0?null:s.left+n/(o.length-1)*(s.right-s.left)}function zn(t){const s=kt.current,o=Ue.current;if(!s||!o.length)return null;const n=Math.max(0,Math.min(1,(t-s.left)/(s.right-s.left)));return o[Math.round(n*(o.length-1))]??null}function Ie(t,s=0){return`${t<0?"-":""}₹${Math.abs(t).toLocaleString("en-IN",{maximumFractionDigits:s})}`}function In(t,s=0){return`${t>0?"+":t<0?"-":""}${Math.abs(t).toLocaleString("en-IN",{minimumFractionDigits:s,maximumFractionDigits:s})}`}function $n(t,s){if(!Number.isFinite(s)||s<=0)return"0.0%";const o=t/s*100;return`${o>0?"+":o<0?"-":""}${Math.abs(o).toFixed(1)}%`}function ii(t,s){if(!s)return"0.00% (0)";const o=t-s,n=o/s*100,r=o>0?"+":o<0?"-":"";return`${r}${Math.abs(n).toFixed(2)}% (${r}${Math.round(Math.abs(o))})`}function to(t){return t>0?"payoff-chart-tooltip-positive":t<0?"payoff-chart-tooltip-negative":"payoff-chart-tooltip-neutral"}function Fn(t){const s=t instanceof Date?t:new Date(t);return Number.isNaN(s.getTime())?"—":s.toLocaleDateString("en-IN",{weekday:"short",day:"2-digit",month:"short"})}function ai(t){if(!t)return null;let s=t.querySelector(".payoff-chart-tooltip");return s||(s=document.createElement("div"),s.className="payoff-chart-tooltip",t.appendChild(s),s)}function On(t){t==="upper"?Rs(null):Bs(null)}function Rn(t){const s=Math.round(t-v),o=(t-v)/(v||1)*100;return e.jsxs(e.Fragment,{children:[e.jsxs("span",{className:"sl-lbl-price",children:["₹",t.toLocaleString("en-IN")]}),e.jsxs("span",{className:"sl-lbl-dist",children:[s>=0?"+":"",s," pts (",o>=0?"+":"",o.toFixed(2),"%)"]})]})}const bs=xe(v),li=bs!=null&&j!=null&&v>0,so=ss<0,gs=Pt===ct,Bn=!!A,ci=T.length>0&&Qt.length===T.length,$e=de??St,oo=K?de??St:null,ys=oo==null?null:xe(oo);function no(t){var a;const s=Ue.current,o=V.current;if(!s.length||!o)return 0;let n=-1,r=1/0;return s.forEach((c,l)=>{const f=Math.abs(c-t);f<r&&(r=f,n=l)}),n<0?0:((a=o.data.datasets[2])==null?void 0:a.data[n])??0}const vs=$e==null?null:no($e),An=vs!=null&&vs>=0;async function Dn(t="create"){if(wr(t),is(!0),Le(null),Hs(""),t==="update"&&Mt(Ze.current.strategyName),!T.length){Us([{label:"+ Create New Portfolio",value:ct}]),t==="create"&&tt(ct),Le("Add at least one position before saving.");return}pn(!0);try{const s=await fetch(`${Me}/portfolios`),o=await s.json().catch(()=>null);if(!s.ok)throw new Error(String((o==null?void 0:o.detail)||"Failed to load portfolios"));const n=[{label:"+ Create New Portfolio",value:ct},..._i(o)];Us(n),tt(r=>{var a;if(t==="update"){const c=Ze.current.portfolioName;if(c&&n.some(l=>l.value===c))return c}return r&&n.some(c=>c.value===r)?r:((a=n[1])==null?void 0:a.value)??n[0].value})}catch(s){Us([{label:"+ Create New Portfolio",value:ct}]),tt(ct),Le(s instanceof Error?s.message:"Failed to load portfolios")}finally{pn(!1)}}function ro(){Ne||(is(!1),Le(null))}function pi(){const t=gs?qs.trim():Pt,s=cn.trim();return t?Pt?s?T.length?{resolvedPortfolioName:t,trimmedStrategyName:s}:{error:"No positions available to save."}:{error:"Please enter a strategy name."}:{error:"Please select a portfolio."}:{error:gs?"Please enter a portfolio name.":"Please select a portfolio."}}function di(t,s){return{portfolio_name:t,strategy_name:s,instrument:_.toLowerCase(),spot_price:Number(v||0),config:{stopLoss:{enabled:Vt,unit:Po,value:Number(Eo)||0},target:{enabled:Ut,unit:zo,value:Number($o)||0},trailingStop:{enabled:vt,unit:Ro,x:Number(Ao)||0,y:Number(Vo)||0},timeControl:{enabled:Ht,entryTime:Zo,exitTime:Jo},lots:Dt,trading_mode:Ps,reentry_interval:0,expiryType:Si(J,(p==null?void 0:p.expiries)??[]),strikeType:{enabled:jt,mode:qt,value:typeof Ms=="number"?Ms:0,strike:Yo},sl_upper:U&&Number(U.price)||null,sl_lower:W&&Number(W.price)||null},positions:T.map(o=>{const n=be(o),r=(o.side==="S"?o.entry-n:n-o.entry)*o.qty,a=o.entry>0?Math.abs(r/(o.entry*o.qty))*100:0,c=!!o.exited;return{type:o.side==="S"?"Sell":"Buy",option_type:o.optionType==="CE"?"Call":"Put",strike:o.strike,expiry:o.expiry,token:String(o.token||""),entry_price:Number(o.entry.toFixed(2)),entry_time:o.entryTime||o.date.replace(" ","T"),lots:o.lots,lot_size:Js,quantity:o.qty,exited:c,exit_price:c?o.exitPrice??Number(n.toFixed(2)):null,exit_time:c?o.exitTime??$t(ue):null,pnl:c?Number(r.toFixed(2)):null,pnl_pct:c?Number(a.toFixed(2)):null}})}}async function Vn(t){const s=pi();if("error"in s){const a=s.error;return t==="create"?Le(a??null):Et({type:"error",message:a??""}),!1}if(t==="update"&&!A)return Et({type:"error",message:"Strategy ID is missing in the URL."}),!1;const o=di(s.resolvedPortfolioName,s.trimmedStrategyName),n=Ze.current,r=t==="update"&&(n.portfolioName!==s.resolvedPortfolioName||n.strategyName!==s.trimmedStrategyName);dn(!0),Le(null),Et(null);try{const a=t==="update"?`${Me}/strategies/${encodeURIComponent(A)}`:`${Me}/strategies`,c=await fetch(a,{method:t==="update"?"PUT":"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(o)}),l=await c.json().catch(()=>null);if(!c.ok||(l==null?void 0:l.status)==="error")throw new Error(String((l==null?void 0:l.detail)||(l==null?void 0:l.message)||`Failed to ${t} strategy`));return t==="create"?(is(!1),Hs(""),Mt(""),Le(null)):(Ze.current={portfolioName:s.resolvedPortfolioName,strategyName:s.trimmedStrategyName},tt(s.resolvedPortfolioName),Mt(s.trimmedStrategyName),is(!1),Et({type:"success",message:"Strategy updated successfully."}),r&&A&&(E==null||E({strategyId:A,previousPortfolioName:n.portfolioName,nextPortfolioName:s.resolvedPortfolioName,previousStrategyName:n.strategyName,nextStrategyName:s.trimmedStrategyName}))),!0}catch(a){const c=a instanceof Error?a.message:`Failed to ${t} strategy`;return t==="create"?Le(c):Et({type:"error",message:c}),!1}finally{dn(!1)}}async function ui(){await Vn("create")}async function fi(){await Vn("update")}return e.jsxs(e.Fragment,{children:[e.jsx("style",{children:nr}),e.jsx("style",{children:or}),!F&&e.jsxs("div",{className:"pt-cfg-bar",style:{margin:"0 -24px"},children:[e.jsxs("div",{className:"pt-cfg-left",ref:Cs,children:[e.jsxs("button",{className:"pt-cfg-inst-btn",onClick:()=>bt(t=>!t),children:[_,e.jsx("svg",{width:"9",height:"6",viewBox:"0 0 10 6",fill:"none",children:e.jsx("path",{d:"M1 1l4 4 4-4",stroke:"#64748b",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})})]}),lr&&e.jsx("ul",{className:"pt-cfg-inst-menu",style:{maxHeight:280,overflowY:"auto"},children:gt==="index"?er.map(t=>e.jsx("li",{className:t===_?"sel":"",onClick:()=>{Re(t),bt(!1)},children:t},t)):dr?e.jsx("li",{style:{color:"#94a3b8"},children:"Loading..."}):Be.map(t=>e.jsxs("li",{className:t.symbol===_?"sel":"",onClick:()=>{Re(t.symbol),bt(!1)},children:[t.symbol," ",e.jsxs("span",{style:{fontSize:11,color:"#94a3b8"},children:["(",t.lot_size,")"]})]},t.symbol))}),e.jsx("div",{style:{display:"flex",gap:6},children:["index","stock"].map(t=>e.jsxs("label",{className:`pt-cfg-radio${gt===t?" on":""}`,children:[e.jsx("input",{type:"radio",name:"pt-itype",checked:gt===t,onChange:()=>_r(t),style:{marginRight:3}}),t==="index"?"Index":"Stock"]},t))})]}),e.jsxs("div",{className:"pt-cfg-compact",children:[e.jsxs("div",{className:"pt-cfg-center",children:[e.jsx("button",{className:"pt-cfg-goback",children:"↩ Go Back"}),e.jsx("span",{className:"pt-cfg-datelbl",children:ue.toLocaleDateString("en-IN",{weekday:"short",day:"2-digit",month:"short",year:"numeric"})}),e.jsx("span",{className:"pt-cfg-timelbl",children:ue.toLocaleTimeString("en-IN",{hour:"2-digit",minute:"2-digit",second:"2-digit",hour12:!1})}),e.jsx("select",{className:"pt-cfg-refsel",value:Ae,onChange:t=>ur(Number(t.target.value)),children:wi.map(t=>e.jsx("option",{value:t.v,children:t.l},t.v))}),Ae>0&&ko>0&&e.jsxs("span",{className:"pt-cfg-countdown",children:["↻ ",ko,"s"]}),tn&&e.jsxs("span",{style:{fontSize:10,color:"#94a3b8",marginLeft:4},children:["Updated: ",tn.toLocaleTimeString()]})]}),e.jsxs("div",{className:"pt-cfg-right",children:[e.jsx("span",{className:"pt-cfg-broker-hint",children:"For Live Zerodha / Upstox Trading"}),e.jsx("button",{className:"pt-cfg-connect",children:"Connect Broker ▼"}),e.jsx("button",{className:"pt-cfg-snap",title:"Snapshot",children:"📷"})]})]})]}),e.jsx("div",{className:"pt-tcp-bar",style:{margin:F?"0":"0 -24px"},children:e.jsxs("div",{className:"pt-tcp-row",children:[e.jsxs("div",{className:"pt-tcp-card",children:[e.jsx("span",{className:"pt-tcp-t",children:"Lots"}),e.jsx("div",{className:"pt-tcp-body",children:e.jsx("select",{className:"pt-tcp-sel",style:{width:80},value:Dt,onChange:t=>wo(Number(t.target.value)),children:Array.from({length:50},(t,s)=>s+1).map(t=>e.jsxs("option",{value:t,children:[t," ",t===1?"Lot":"Lots"]},t))})})]}),e.jsxs("div",{className:"pt-tcp-card",children:[e.jsx("span",{className:"pt-tcp-t",children:"Trading Mode"}),e.jsxs("div",{className:"pt-tcp-body",children:[e.jsxs("select",{className:"pt-tcp-sel",style:{minWidth:158},value:Ps,onChange:t=>{No(t.target.value),_o(!1)},children:[e.jsx("option",{value:"manual",children:"Manual Trade"}),e.jsx("option",{value:"semi_auto",children:"Semi Automatic Trade"}),e.jsx("option",{value:"auto",children:"Automatic Trade"})]}),Ps==="semi_auto"&&e.jsx("button",{className:`pt-pause-btn${So?" on":""}`,onClick:()=>_o(t=>!t),children:So?"Continue":"Pause"})]})]}),e.jsxs("div",{className:"pt-tcp-card",children:[e.jsxs("div",{className:"pt-tcp-hdr",children:[e.jsx(Ot,{checked:Vt,onChange:Co}),e.jsx("span",{className:"pt-tcp-t",children:"Stop Loss"})]}),e.jsxs("div",{className:"pt-tcp-body",children:[e.jsxs("select",{className:"pt-tcp-sel",style:{minWidth:96},disabled:!Vt,value:Po,onChange:t=>Mo(t.target.value),children:[e.jsx("option",{value:"points",children:"Points"}),e.jsx("option",{value:"pct",children:"Percentage"})]}),e.jsx("input",{type:"number",className:"pt-tcp-num",disabled:!Vt,value:Eo,min:0,onChange:t=>To(Number(t.target.value))})]})]}),e.jsxs("div",{className:"pt-tcp-card",children:[e.jsxs("div",{className:"pt-tcp-hdr",children:[e.jsx(Ot,{checked:Ut,onChange:Lo}),e.jsx("span",{className:"pt-tcp-t",children:"Target"})]}),e.jsxs("div",{className:"pt-tcp-body",children:[e.jsxs("select",{className:"pt-tcp-sel",style:{minWidth:96},disabled:!Ut,value:zo,onChange:t=>Io(t.target.value),children:[e.jsx("option",{value:"points",children:"Points"}),e.jsx("option",{value:"pct",children:"Percentage"})]}),e.jsx("input",{type:"number",className:"pt-tcp-num",disabled:!Ut,value:$o,min:0,onChange:t=>Fo(Number(t.target.value))})]})]}),e.jsxs("div",{className:"pt-tcp-card",children:[e.jsxs("div",{className:"pt-tcp-hdr",children:[e.jsx(Ot,{checked:vt,onChange:Oo}),e.jsx("span",{className:"pt-tcp-t",children:"Trail SL"})]}),e.jsxs("div",{className:"pt-tcp-body",children:[e.jsxs("select",{className:"pt-tcp-sel",style:{width:76},disabled:!vt,value:Ro,onChange:t=>Bo(t.target.value),children:[e.jsx("option",{value:"points",children:"Points"}),e.jsx("option",{value:"pct",children:"Pct"})]}),e.jsx("span",{className:"pt-tcp-xy",children:"X"}),e.jsx("input",{type:"number",className:"pt-tcp-num",disabled:!vt,value:Ao,min:0,onChange:t=>Do(Number(t.target.value))}),e.jsx("span",{className:"pt-tcp-xy",children:"Y"}),e.jsx("input",{type:"number",className:"pt-tcp-num",disabled:!vt,value:Vo,min:0,onChange:t=>Uo(Number(t.target.value))})]})]}),e.jsxs("div",{className:"pt-tcp-card",children:[e.jsxs("div",{className:"pt-tcp-hdr",children:[e.jsx(Ot,{checked:jt,onChange:qo}),e.jsx("span",{className:"pt-tcp-t",children:"Hedge Strike Type"})]}),e.jsxs("div",{className:"pt-tcp-body",children:[e.jsxs("select",{className:"pt-tcp-sel",style:{minWidth:134},disabled:!jt,value:qt,onChange:t=>Ho(t.target.value),children:[e.jsx("option",{value:"delta",children:"Delta"}),e.jsx("option",{value:"closest_premium",children:"Closest Premium"}),e.jsx("option",{value:"strike",children:"Strike"})]}),qt!=="strike"?e.jsx("input",{type:"number",className:"pt-tcp-num",style:{width:68},disabled:!jt,placeholder:qt==="delta"?"Delta":"Premium",value:Ms,min:0,step:.01,onChange:t=>Wo(t.target.value===""?"":Number(t.target.value))}):e.jsx("select",{className:"pt-tcp-sel",style:{minWidth:100},disabled:!jt,value:Yo,onChange:t=>Xo(t.target.value),children:ri.map(t=>e.jsx("option",{value:t,children:t.replace(/^OTM(\d+)$/,"OTM $1").replace(/^ITM(\d+)$/,"ITM $1")},t))})]})]}),e.jsxs("div",{className:"pt-tcp-card",children:[e.jsxs("div",{className:"pt-tcp-hdr",children:[e.jsx(Ot,{checked:Ht,onChange:Qo}),e.jsx("span",{className:"pt-tcp-t",children:"Hedge Time Control"})]}),e.jsxs("div",{className:"pt-tcp-body",children:[e.jsx("span",{style:{fontSize:10,fontWeight:700,color:"#64748b"},children:"Entry"}),e.jsx("input",{type:"time",className:"pt-tcp-time",disabled:!Ht,value:Zo,onChange:t=>Go(t.target.value)}),e.jsx("span",{style:{fontSize:10,fontWeight:700,color:"#64748b",marginLeft:4},children:"Exit"}),e.jsx("input",{type:"time",className:"pt-tcp-time",disabled:!Ht,value:Jo,onChange:t=>Ko(t.target.value)})]})]})]})}),e.jsx("div",{className:`pt-page${F?" pt-embed":""}`,style:{padding:F?"20px 12px 0":"20px 0 0"},children:e.jsxs("div",{className:"main-container",children:[e.jsxs("div",{className:"option-chain-panel",children:[e.jsxs("div",{className:"left-panel-tabs",children:[e.jsx("button",{type:"button",className:`left-panel-tab${Xt==="Positions"?" active":""}`,onClick:()=>Ts("Positions"),children:"Positions"}),e.jsx("button",{type:"button",className:`left-panel-tab${Xt==="OptionChain"?" active":""}`,onClick:()=>Ts("OptionChain"),children:"Option Chain"})]}),Xt==="OptionChain"&&e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"oc-header",children:[e.jsx("span",{className:"oc-header-left",children:"🗂 Add ons ▼"}),e.jsxs("span",{className:"oc-title",children:["Option Chain",e.jsx("span",{className:"oc-expiry-label",children:J?` (${Ce(J)})`:""}),xr&&e.jsx("span",{style:{fontSize:11,color:"#94a3b8",marginLeft:8},children:"↻"})]}),e.jsx("button",{className:"oc-hide-btn",type:"button",children:"⟪ Hide"})]}),e.jsxs("div",{className:"expiry__viewer",children:[e.jsx("button",{type:"button",className:"expiry-carousel__arrow",disabled:Es<=0,onClick:()=>Yt(t=>Math.max(0,t-tr)),children:"‹"}),e.jsx("div",{className:"expiry-carousel__viewport",children:e.jsx("div",{className:"expiry-carousel__track",style:{transform:`translateX(-${Es}px)`},children:jn.map((t,s)=>e.jsxs("div",{className:`expiry_button${t===J?" selected__oc__expiry":""}`,onClick:()=>{var o;G&&((o=p==null?void 0:p.expiries)==null?void 0:o[0])===t&&(mt.current=""),Te(t),Ee(!0),he(t),$==null||$(_,t)},children:[e.jsx("button",{type:"button",children:Ce(t).toUpperCase()}),e.jsx("div",{className:"expiry_indicator",children:s===0?"(CW)":s===1?"(NW)":""})]},t))})}),e.jsx("button",{type:"button",className:"expiry-carousel__arrow",disabled:Es>=kn,onClick:()=>Yt(t=>Math.min(kn,t+tr)),children:"›"})]}),e.jsxs("div",{className:"oc_filter",children:[e.jsxs("div",{children:["ATM IV: ",e.jsx("span",{style:{color:"#464646",fontWeight:500},children:Er})]}),e.jsxs("div",{children:[e.jsx("span",{style:{marginRight:6},children:"ATM:"}),e.jsx("div",{className:"squar__off__type",children:["Spot","Fut","SynthFut"].map(t=>e.jsxs("label",{className:`atm-radio-label${hr===t?" atm-radio-active":""}`,onClick:()=>mr(t),children:[e.jsx("span",{className:"atm-radio-dot"}),e.jsx("span",{className:"atm-radio-title",children:t==="SynthFut"?"Synth Fut":t})]},t))})]}),e.jsxs("div",{children:["Straddle Prem: ",e.jsx("span",{style:{color:"#464646",fontWeight:500},children:Tr})]})]}),e.jsxs("div",{className:"oc_filter",children:[e.jsxs("div",{children:["PCR: ",e.jsx("span",{style:{color:"#464646",fontWeight:500},children:Mr})]}),e.jsxs("div",{className:"total_oi",children:[e.jsx("div",{className:"total_call_oi",children:ws(Gs)}),e.jsx("div",{className:"oi-progress",children:e.jsx("div",{className:"oi-progress-call"})}),e.jsx("span",{children:"OI"}),e.jsx("div",{className:"oi-progress",children:e.jsx("div",{className:"oi-progress-put"})}),e.jsx("div",{className:"total_put_oi",children:ws(vn)})]}),e.jsxs("div",{children:["Max Pain: ",e.jsx("span",{style:{color:"#464646",fontWeight:500},children:Lr})]})]}),en&&e.jsxs("div",{style:{padding:"8px 12px",color:"#ef4444",fontSize:12},children:["⚠ ",en]}),e.jsx("div",{className:"oc-custom-table",ref:Ls,children:e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsxs("th",{className:"oc-call-head",children:["Call LTP ",e.jsx("span",{className:"oc-head-delta",children:"(Δ)"})]}),e.jsx("th",{className:"oc-call-oi-head",children:"Call OI"}),e.jsx("th",{className:"oc-iv-head",children:"IV"}),e.jsx("th",{className:"oc-strike-head",children:"Strike"}),e.jsx("th",{className:"oc-put-oi-head",children:"Put OI"}),e.jsxs("th",{className:"oc-put-head",children:["Put LTP ",e.jsx("span",{className:"oc-head-delta",children:"(Δ)"})]})]})}),e.jsx("tbody",{children:ds.map(t=>{const s=q[t],o=H[t],n=t===us,r=t<v,a=t>v,c=s!=null&&s.iv&&(o!=null&&o.iv)?(s.iv+o.iv)/2:(s==null?void 0:s.iv)||(o==null?void 0:o.iv)||0,l=`${gn>0&&(s!=null&&s.oi)?(s.oi/gn*100).toFixed(1):0}%`,f=`${yn>0&&(o!=null&&o.oi)?(o.oi/yn*100).toFixed(1):0}%`,x=et||we?O:T,d=(g,h,k)=>!g.exited&&g.strike===t&&g.optionType===h&&g.side===k&&g.expiry===J,y=x.some(g=>d(g,"CE","B")),N=x.some(g=>d(g,"CE","S")),z=x.some(g=>d(g,"PE","B")),I=x.some(g=>d(g,"PE","S")),P=(g,h)=>(Se==null?void 0:Se.strike)===t&&(Se==null?void 0:Se.type)===g&&(Se==null?void 0:Se.side)===h;let C="oc-row";return n?C+=" oc-atm":r?C+=" oc-call-itm":a&&(C+=" oc-put-itm"),e.jsxs("tr",{className:C,ref:n?zs:void 0,children:[e.jsx("td",{className:"oc-call-td",children:e.jsxs("div",{className:"oc-cell-inner",children:[e.jsxs("div",{className:`oc-actions action_button${y||N?" has-active":""}`,children:[e.jsxs("span",{className:"oc-btn-wrap",children:[e.jsx("button",{type:"button",className:`buy_button${y?" oc-btn-active":""}`,onClick:()=>xs(t,"CE","B",y),children:"B"}),y&&e.jsx("span",{className:"oc-pos-count buy",children:x.filter(g=>d(g,"CE","B")).length}),P("CE","B")&&e.jsxs("div",{className:"oc-action-popover oc-action-popover-right",children:[e.jsxs("button",{type:"button",className:"add-option",onClick:()=>{zt(t,"CE","B"),te(null)},children:[e.jsx("span",{className:"menu-icon",children:"+"}),e.jsx("span",{children:"Add"})]}),e.jsxs("button",{type:"button",className:"remove-option",onClick:()=>{fs(t,"CE","B"),te(null)},children:[e.jsx("span",{className:"menu-icon",children:"-"}),e.jsx("span",{children:"Remove"})]})]})]}),e.jsxs("span",{className:"oc-btn-wrap",children:[e.jsx("button",{type:"button",className:`sell_button${N?" oc-btn-active":""}`,onClick:()=>xs(t,"CE","S",N),children:"S"}),N&&e.jsx("span",{className:"oc-pos-count sell",children:x.filter(g=>d(g,"CE","S")).length}),P("CE","S")&&e.jsxs("div",{className:"oc-action-popover oc-action-popover-right",children:[e.jsxs("button",{type:"button",className:"add-option",onClick:()=>{zt(t,"CE","S"),te(null)},children:[e.jsx("span",{className:"menu-icon",children:"+"}),e.jsx("span",{children:"Add"})]}),e.jsxs("button",{type:"button",className:"remove-option",onClick:()=>{fs(t,"CE","S"),te(null)},children:[e.jsx("span",{className:"menu-icon",children:"-"}),e.jsx("span",{children:"Remove"})]})]})]})]}),s?e.jsxs(e.Fragment,{children:[e.jsx("span",{className:"oc-ltp",children:s.ltp.toFixed(2)}),e.jsxs("span",{className:"oc-delta",children:["(",s.delta.toFixed(2),")"]})]}):e.jsx("span",{className:"oc-empty",children:"—"})]})}),e.jsxs("td",{className:"oc-call-oi-td",children:[e.jsx("div",{className:"oc-oi-value oc-oi-call",children:ws((s==null?void 0:s.oi)??0)}),e.jsx("div",{className:"oc-oi-bar-wrap",children:e.jsx("div",{className:"oc-oi-bar oc-oi-bar-call",style:{width:l}})})]}),e.jsx("td",{className:"oc-iv-td",children:c?e.jsxs("span",{className:"oc-iv-value",children:[c.toFixed(2),"%"]}):e.jsx("span",{className:"oc-empty",children:"—"})}),e.jsx("td",{className:"oc-strike-td",children:t}),e.jsxs("td",{className:"oc-put-oi-td",children:[e.jsx("div",{className:"oc-oi-value oc-oi-put",children:ws((o==null?void 0:o.oi)??0)}),e.jsx("div",{className:"oc-oi-bar-wrap",children:e.jsx("div",{className:"oc-oi-bar oc-oi-bar-put",style:{width:f}})})]}),e.jsx("td",{className:"oc-put-td",children:e.jsxs("div",{className:"oc-cell-inner",children:[o?e.jsxs(e.Fragment,{children:[e.jsx("span",{className:"oc-ltp",children:o.ltp.toFixed(2)}),e.jsxs("span",{className:"oc-delta",children:["(",o.delta.toFixed(2),")"]})]}):e.jsx("span",{className:"oc-empty",children:"—"}),e.jsxs("div",{className:`oc-actions action_button${z||I?" has-active":""}`,children:[e.jsxs("span",{className:"oc-btn-wrap",children:[e.jsx("button",{type:"button",className:`buy_button${z?" oc-btn-active":""}`,onClick:()=>xs(t,"PE","B",z),children:"B"}),z&&e.jsx("span",{className:"oc-pos-count buy",children:x.filter(g=>d(g,"PE","B")).length}),P("PE","B")&&e.jsxs("div",{className:"oc-action-popover",children:[e.jsxs("button",{type:"button",className:"add-option",onClick:()=>{zt(t,"PE","B"),te(null)},children:[e.jsx("span",{className:"menu-icon",children:"+"}),e.jsx("span",{children:"Add"})]}),e.jsxs("button",{type:"button",className:"remove-option",onClick:()=>{fs(t,"PE","B"),te(null)},children:[e.jsx("span",{className:"menu-icon",children:"-"}),e.jsx("span",{children:"Remove"})]})]})]}),e.jsxs("span",{className:"oc-btn-wrap",children:[e.jsx("button",{type:"button",className:`sell_button${I?" oc-btn-active":""}`,onClick:()=>xs(t,"PE","S",I),children:"S"}),I&&e.jsx("span",{className:"oc-pos-count sell",children:x.filter(g=>d(g,"PE","S")).length}),P("PE","S")&&e.jsxs("div",{className:"oc-action-popover",children:[e.jsxs("button",{type:"button",className:"add-option",onClick:()=>{zt(t,"PE","S"),te(null)},children:[e.jsx("span",{className:"menu-icon",children:"+"}),e.jsx("span",{children:"Add"})]}),e.jsxs("button",{type:"button",className:"remove-option",onClick:()=>{fs(t,"PE","S"),te(null)},children:[e.jsx("span",{className:"menu-icon",children:"-"}),e.jsx("span",{children:"Remove"})]})]})]})]})]})})]},t)})})]})})]}),Xt==="Positions"&&e.jsxs("div",{style:{flex:1,display:"flex",flexDirection:"column",overflowY:"hidden",overflowX:"auto"},children:[e.jsxs("div",{className:"pos-tabs",children:[["Positions","Greeks","TargetPnL"].map(t=>e.jsx("button",{type:"button",className:`pos-tab${ns===t?" active":""}`,onClick:()=>ln(t),children:t==="TargetPnL"?"Target P&L (blue line)":t},t)),e.jsx("div",{className:"pos-tab-right",children:"Add Notes  |  Add ons ▾"})]}),ns==="Positions"&&e.jsx("div",{className:"position_table",children:e.jsxs("table",{style:{width:"100%",minWidth:700,tableLayout:"fixed"},children:[e.jsxs("colgroup",{children:[e.jsx("col",{style:{width:72}}),e.jsx("col",{style:{width:72}}),e.jsx("col",{style:{width:"5%"}}),e.jsx("col",{style:{width:90}}),e.jsx("col",{style:{width:78}}),e.jsx("col",{style:{width:80}}),e.jsx("col",{style:{width:"8%"}}),e.jsx("col",{style:{width:"8%"}}),e.jsx("col",{style:{width:"6%"}}),e.jsx("col",{style:{width:"13%"}}),e.jsx("col",{style:{width:105}})]}),e.jsx("thead",{children:e.jsxs("tr",{className:"sticky-top",children:[e.jsx("th",{className:"pos-first-col-head",style:{width:72},children:e.jsxs("div",{className:"action_button_group",children:[e.jsxs("label",{className:"pos-select-wrap",children:[e.jsx("input",{type:"checkbox",className:"pos-select-input",checked:ci,onChange:t=>Is(t.target.checked?T.map(s=>s.id):[])}),e.jsx("span",{className:"pos-select-box"})]}),e.jsx("span",{style:{width:18,display:"inline-block"}})]})}),e.jsx("th",{children:"Lots"}),e.jsx("th",{children:"Qty"}),e.jsx("th",{children:"Date ↕"}),e.jsx("th",{children:"Strike ◇"}),e.jsx("th",{children:"Expiry"}),e.jsx("th",{children:"Entry"}),e.jsx("th",{children:"LTP/Exit"}),e.jsx("th",{children:"Delta"}),e.jsx("th",{children:"P&L"}),e.jsx("th",{children:"Lots Exit ◇"})]})}),e.jsx("tbody",{children:T.length===0?e.jsx("tr",{children:e.jsx("td",{colSpan:11,className:"pos-empty",children:"No positions — click B or S on the option chain to add."})}):T.map((t,s)=>{const o=be(t),n=st(t,o),r=t.entry>0?Math.abs(n/(t.entry*t.qty))*100:0,a=n>=0?"simulator_green_text":"simulator_red_text",c=t.exited?n>=0?"parent_position exited__profit":"parent_position exited__loss":"parent_position",l=t.exited?"pos-exit-btn exited":"pos-exit-btn";return e.jsxs("tr",{className:c,children:[e.jsx("td",{className:"pos-first-col-cell",children:e.jsxs("div",{className:"action_button_group",children:[e.jsxs("label",{className:"pos-select-wrap",children:[e.jsx("input",{type:"checkbox",className:"pos-select-input",checked:Qt.includes(t.id),onChange:f=>Is(x=>f.target.checked?x.includes(t.id)?x:[...x,t.id]:x.filter(d=>d!==t.id))}),e.jsx("span",{className:"pos-select-box"})]}),e.jsx("button",{className:t.side==="B"?"pt-buy-btn":"pt-sell-btn",disabled:t.exited,onClick:()=>zr(t.id),title:t.side==="B"?"Switch to Sell":"Switch to Buy",children:t.side})]})}),e.jsx("td",{children:e.jsxs("div",{className:"simulator_position_input position__strike",children:[e.jsx("button",{className:"sign_btn",disabled:t.exited,onClick:()=>Ks(t.id,t.lots-1),children:"−"}),e.jsx("input",{type:"number",className:"sim-input lot-input",value:t.lots,min:1,disabled:t.exited,onChange:f=>{const x=Math.max(1,parseInt(f.target.value)||1);Ks(t.id,x)}}),e.jsx("button",{className:"sign_btn",disabled:t.exited,onClick:()=>Ks(t.id,t.lots+1),children:"+"})]})}),e.jsx("td",{children:t.qty}),e.jsx("td",{children:e.jsx("div",{style:{display:"flex",flexDirection:"column"},children:e.jsx("span",{children:t.date})})}),e.jsx("td",{children:e.jsxs("div",{className:"position__strike",children:[e.jsx("span",{children:t.strike}),e.jsx("span",{className:t.optionType==="CE"?"call-btn-pt":"put-btn-pt",children:t.optionType})]})}),e.jsx("td",{children:e.jsx("div",{className:"position__expiry",children:Ce(t.expiry)})}),e.jsx("td",{children:e.jsx("input",{type:"number",step:"any",className:"sim-input",defaultValue:t.entry.toFixed(2),disabled:t.exited,onBlur:f=>le(x=>x.map((d,y)=>y===s?{...d,entry:parseFloat(f.target.value)||d.entry}:d))})}),e.jsx("td",{children:e.jsx("input",{type:"number",step:"any",className:"sim-input",value:o.toFixed(2),readOnly:!0})}),e.jsx("td",{style:{textAlign:"center"},children:t.exited?"0.00":t.delta.toFixed(2)}),e.jsx("td",{className:a,children:e.jsxs("div",{style:{whiteSpace:"nowrap"},children:[e.jsxs("span",{children:[n<0?"-":"","₹",Math.abs(n).toLocaleString("en-IN",{minimumFractionDigits:2,maximumFractionDigits:2})]}),e.jsxs("span",{className:`expiry_indicator ${a}`,children:[" (",r.toFixed(0),"%)"]})]})}),e.jsx("td",{children:e.jsxs("div",{className:"simulator_position_button",children:[e.jsx("select",{className:"lot_select_space",disabled:t.exited,children:Array.from({length:t.lots},(f,x)=>x+1).map(f=>e.jsx("option",{value:f,children:f},f))}),e.jsx("button",{type:"button",className:l,title:t.exited?"Reopen":"Exit",onClick:()=>t.exited?Fr(s):$r(s),children:e.jsx("img",{src:t.exited?"/images/algo/re_open.svg":"/images/algo/exit.svg",alt:t.exited?"Reopen":"Exit",className:"pos-action-icon"})}),e.jsx("button",{type:"button",className:"pos-del-btn",title:"Delete",onClick:()=>le(f=>f.filter((x,d)=>d!==s)),children:e.jsx("svg",{className:"pos-del-icon",viewBox:"0 0 20 20",fill:"none","aria-hidden":"true",children:e.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M6.54142 3.7915C6.54142 2.54886 7.54878 1.5415 8.79142 1.5415H11.2081C12.4507 1.5415 13.4581 2.54886 13.4581 3.7915V4.0415H15.6252H16.666C17.0802 4.0415 17.416 4.37729 17.416 4.7915C17.416 5.20572 17.0802 5.5415 16.666 5.5415H16.3752V8.24638V13.2464V16.2082C16.3752 17.4508 15.3678 18.4582 14.1252 18.4582H5.87516C4.63252 18.4582 3.62516 17.4508 3.62516 16.2082V13.2464V8.24638V5.5415H3.3335C2.91928 5.5415 2.5835 5.20572 2.5835 4.7915C2.5835 4.37729 2.91928 4.0415 3.3335 4.0415H4.37516H6.54142V3.7915ZM14.8752 13.2464V8.24638V5.5415H13.4581H12.7081H7.29142H6.54142H5.12516V8.24638V13.2464V16.2082C5.12516 16.6224 5.46095 16.9582 5.87516 16.9582H14.1252C14.5394 16.9582 14.8752 16.6224 14.8752 16.2082V13.2464ZM8.04142 4.0415H11.9581V3.7915C11.9581 3.37729 11.6223 3.0415 11.2081 3.0415H8.79142C8.37721 3.0415 8.04142 3.37729 8.04142 3.7915V4.0415ZM8.3335 7.99984C8.74771 7.99984 9.0835 8.33562 9.0835 8.74984V13.7498C9.0835 14.1641 8.74771 14.4998 8.3335 14.4998C7.91928 14.4998 7.5835 14.1641 7.5835 13.7498V8.74984C7.5835 8.33562 7.91928 7.99984 8.3335 7.99984ZM12.4168 8.74984C12.4168 8.33562 12.081 7.99984 11.6668 7.99984C11.2526 7.99984 10.9168 8.33562 10.9168 8.74984V13.7498C10.9168 14.1641 11.2526 14.4998 11.6668 14.4998C12.081 14.4998 12.4168 14.1641 12.4168 13.7498V8.74984Z",fill:"currentColor"})})})]})})]},t.id)})}),e.jsx("tfoot",{children:e.jsxs("tr",{className:"table_footer",children:[e.jsx("th",{colSpan:8,style:{textAlign:"left"},children:e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:6,flexWrap:"wrap"},children:[e.jsx("span",{style:{marginLeft:4},children:"Multiplier:"}),e.jsxs("div",{className:"simulator_group_input",children:[e.jsx("button",{type:"button",className:"sign_button",disabled:rs<=1,onClick:()=>Vs(t=>Math.max(1,t-1)),children:"−"}),e.jsx("input",{className:"mult_input",type:"number",value:rs,min:1,onChange:t=>Vs(Math.max(1,parseInt(t.target.value)||1))}),e.jsx("button",{type:"button",className:"sign_button",onClick:()=>Vs(t=>t+1),children:"+"})]}),e.jsxs("span",{style:{color:"#6b7280",marginLeft:4},children:["Lot Size: ",Js]}),e.jsx("button",{type:"button",className:"btn-outline-xs",style:{marginLeft:4},children:"Add Alert"}),!Bn&&e.jsx("button",{type:"button",className:"btn-outline-xs",onClick:()=>Dn("create"),children:"Save"}),Bn&&e.jsx("button",{type:"button",className:"btn-outline-xs",onClick:()=>Dn("update"),disabled:Ne,children:"Update"}),e.jsx("button",{type:"button",className:"btn-outline-xs",children:"Share"}),Ws&&e.jsx("span",{style:{color:Ws.type==="error"?"#dc2626":"#16a34a",marginLeft:4},children:Ws.message})]})}),e.jsx("th",{style:{textAlign:"center",color:Pn>=0?"#03B760":"#EF6161"},children:Pn.toFixed(2)}),e.jsxs("th",{className:_e>=0?"simulator_green_text":"simulator_red_text",children:[_e<0?"-":"","₹",Math.abs(_e).toLocaleString("en-IN",{minimumFractionDigits:2,maximumFractionDigits:2})]}),e.jsx("th",{children:e.jsxs("div",{className:"simulator_position_button",children:[e.jsx("a",{className:"pos-exit-all",style:{cursor:"pointer"},onClick:Or,children:"Exit"}),e.jsx("a",{className:"pos-clear-all",style:{cursor:"pointer"},onClick:()=>le([]),children:"Clear"})]})})]})})]})}),ns!=="Positions"&&e.jsx("div",{style:{padding:24,textAlign:"center",color:"#94a3b8",fontSize:13},children:ns==="Greeks"?"Greeks view coming soon…":"Target P&L chart coming soon…"})]})]}),e.jsxs("div",{className:"chart-section",style:F?{overflow:"visible"}:void 0,children:[e.jsxs("div",{className:"simulator-card",ref:Fs,style:F?{height:"auto",overflow:"visible"}:void 0,children:[e.jsx("div",{className:"table-tabs-container",children:e.jsxs("ul",{className:"table-tabs",children:[e.jsx("li",{children:e.jsx("a",{className:"nav-link-sim active",children:"Payoff Chart"})}),e.jsx("li",{children:e.jsx("a",{className:"nav-link-sim",children:"MTM 📈"})}),e.jsx("li",{children:e.jsx("a",{className:"nav-link-sim",children:"Strategy 📈"})}),e.jsx("li",{children:e.jsx("a",{className:"nav-link-sim",children:"OI 📈"})}),e.jsx("li",{style:{marginLeft:"auto",borderRight:"none"}}),e.jsx("li",{children:e.jsx("div",{className:"time-on-print",children:ue.toLocaleString("en-US",{weekday:"short",month:"short",day:"numeric",year:"numeric",hour:"2-digit",minute:"2-digit",second:"2-digit",hour12:!1})})})]})}),e.jsxs("div",{className:"simulator-stats",children:[e.jsxs("div",{children:[e.jsx("div",{children:"Est. Margin:"}),e.jsx("div",{className:"sim-stat-value",children:rt>0?Ie(rt,0):"—"})]}),e.jsxs("div",{children:[e.jsx("div",{children:"P&L:"}),e.jsxs("div",{className:_e>=0?"sim-stat-value simulator_green_text":"sim-stat-value simulator_red_text",children:[e.jsx("span",{children:Ie(_e,2)}),e.jsxs("span",{className:`metrics-sub ${_e>=0?"simulator_green_text":"simulator_red_text"}`,children:["(",oi.toFixed(2),"%)"]})]})]}),e.jsxs("div",{children:[e.jsx("div",{children:"Max Profit:"}),e.jsx("div",{className:"sim-stat-value simulator_green_text",children:ei?e.jsx("span",{children:"Unlimited"}):e.jsxs(e.Fragment,{children:[e.jsx("span",{children:Ie(Qr,2)}),e.jsxs("span",{className:"metrics-sub simulator_green_text",children:["(",Gr.toFixed(2),"%)"]})]})})]}),e.jsxs("div",{children:[e.jsx("div",{children:"Max Loss:"}),e.jsx("div",{className:"sim-stat-value simulator_red_text",children:ti?e.jsx("span",{children:"Unlimited"}):e.jsxs(e.Fragment,{children:[e.jsx("span",{children:Ie(Zr,2)}),e.jsxs("span",{className:"metrics-sub simulator_red_text",children:["(",Jr.toFixed(2),"%)"]})]})})]}),e.jsxs("div",{children:[e.jsx("div",{children:"R:R"}),e.jsx("div",{className:"sim-stat-value",children:si})]}),e.jsxs("div",{children:[e.jsx("div",{children:"POP:"}),e.jsxs("div",{className:"sim-stat-value",children:[Kr.toFixed(2),"%"]})]}),e.jsxs("div",{children:[e.jsx("div",{children:"Net Credit:"}),e.jsx("div",{className:Mn>=0?"sim-stat-value simulator_green_text":"sim-stat-value simulator_red_text",children:Ie(Mn,2)})]}),e.jsxs("div",{className:"breakeven-small",children:[e.jsx("div",{children:"Breakevens:"}),e.jsx("div",{className:"breakevan-box",children:Ln.length?Ln.map(t=>{const s=ms>0?Math.abs((t-ms)/ms*100).toFixed(1):"0.0";return`${t} (${s}%)`}).join(" - "):"—"})]})]}),e.jsxs("div",{className:"chart-body-wrap",style:F?{padding:"16px 20px 0",display:"flex",flexDirection:"column",overflow:"visible"}:{padding:"16px 20px 0",flex:1,display:"flex",flexDirection:"column"},children:[e.jsxs("div",{className:"chart-wrapper",ref:Kt,children:[e.jsx("canvas",{ref:$s}),e.jsxs("div",{className:"chart-overlay-controls",children:[e.jsx("span",{className:"chart-overlay-label",children:"Payoff On:"}),e.jsx("select",{className:"chart-expiry-select",value:Je,onChange:t=>Zt(t.target.value),title:"Payoff expiry",children:Hr.map(t=>e.jsx("option",{value:t.value,children:t.label},t.value))})]}),e.jsx("button",{className:`sl-config-btn${K?" active":""}`,onClick:()=>{if(K)Ke(!1),_t(null),Ct(null);else{const t=!U&&W?">=":"<=",s=t===">="?U:W;an(t),Ct((s==null?void 0:s.price)??null),_t(null),Ke(!0)}},children:K?"✕ Cancel":"⚡ Stoploss"}),K&&j&&St!=null&&xe(St)!=null&&e.jsx("div",{className:"sl-hover-line",style:{display:"block",height:j.bottom-j.top,left:xe(St),top:j.top}}),K&&j&&oo!=null&&ys!=null&&e.jsxs(e.Fragment,{children:[de!=null&&e.jsx("div",{className:"sl-marker-line",style:{display:"block",height:j.bottom-j.top,left:xe(de),top:j.top}}),e.jsx("div",{className:"sl-shade-region",style:{display:"block",left:ee==="<="?j.left:ys,top:j.top,width:ee==="<="?ys-j.left:j.right-ys,height:j.bottom-j.top,background:ee===">="?"rgba(22,163,74,.10)":"rgba(220,38,38,.10)"}})]}),j&&U&&xe(U.price)!=null&&(!K||ee!==">=")&&e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"sl-marker-line sl-marker-upper",style:{display:"block",height:j.bottom-j.top,left:xe(U.price),top:j.top},children:e.jsx("div",{className:"sl-marker-label sl-label-upper",children:Rn(U.price)})}),e.jsx("div",{className:"sl-shade-region",style:{display:"block",background:"rgba(22,163,74,.10)",left:xe(U.price),top:j.top,width:j.right-xe(U.price),height:j.bottom-j.top}})]}),j&&W&&xe(W.price)!=null&&(!K||ee!=="<=")&&e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"sl-marker-line sl-marker-lower",style:{display:"block",height:j.bottom-j.top,left:xe(W.price),top:j.top},children:e.jsx("div",{className:"sl-marker-label sl-label-lower",children:Rn(W.price)})}),e.jsx("div",{className:"sl-shade-region",style:{display:"block",background:"rgba(220,38,38,.10)",left:j.left,top:j.top,width:xe(W.price)-j.left,height:j.bottom-j.top}})]}),K&&e.jsxs("div",{className:"sl-config-panel",style:{display:"block",left:Ds.left??void 0,right:Ds.left==null?20:"auto",top:Ds.top??80},children:[e.jsxs("div",{className:"sl-panel-header",onMouseDown:t=>{const s=t.currentTarget.parentElement.getBoundingClientRect();wt.current={active:!0,offsetX:t.clientX-s.left,offsetY:t.clientY-s.top};const o=r=>{wt.current.active&&jr({left:Math.max(0,r.clientX-wt.current.offsetX),top:Math.max(0,r.clientY-wt.current.offsetY)})},n=()=>{wt.current.active=!1,document.removeEventListener("mousemove",o),document.removeEventListener("mouseup",n)};document.addEventListener("mousemove",o),document.addEventListener("mouseup",n)},children:[e.jsx("span",{className:"sl-panel-title",children:"⚡ Configure Stoploss"}),e.jsx("button",{className:"sl-panel-close",onClick:()=>Ke(!1),children:"×"})]}),e.jsxs("div",{className:"sl-panel-body",children:[e.jsx("div",{className:"sl-instruction",children:de==null?"Click on the chart to place stoploss level":"Price set. Adjust or save."}),e.jsxs("div",{className:"sl-panel-row",children:[e.jsxs("label",{children:["Trigger when ",_," goes"]}),e.jsxs("div",{className:"sl-condition-row",children:[e.jsxs("select",{value:ee,onChange:t=>an(t.target.value),children:[e.jsx("option",{value:"<=",children:"Below ≤"}),e.jsx("option",{value:">=",children:"Above ≥"})]}),e.jsx("input",{type:"number",placeholder:"Price",step:50,value:de??"",onChange:t=>Ct(t.target.value?Number(t.target.value):null)})]})]}),e.jsxs("div",{className:"sl-panel-row",children:[e.jsx("label",{children:"Current Spot"}),e.jsxs("span",{className:"sl-spot-value",children:["₹",v.toLocaleString("en-IN",{maximumFractionDigits:2})]})]}),e.jsx("div",{className:"sl-panel-row",children:e.jsxs("div",{className:"sl-diff-row",children:[e.jsx("span",{children:$e==null?"— pts":`${$e-v>=0?"+":""}${Math.round($e-v)} pts`}),e.jsx("span",{children:$e==null?"—%":`${($e-v)/(v||1)*100>=0?"+":""}${(($e-v)/(v||1)*100).toFixed(2)}%`})]})}),e.jsxs("div",{className:`sl-pnl-box${An?" profit":""}`,children:[e.jsx("div",{className:"sl-pnl-label",children:"Approx P&L at exit"}),e.jsx("div",{className:`sl-pnl-value${An?" profit":""}`,children:vs==null?"—":Ie(vs)})]}),e.jsxs("div",{className:"sl-panel-actions",children:[e.jsx("button",{className:"sl-cancel-btn",onClick:()=>Ke(!1),children:"Cancel"}),e.jsx("button",{className:"sl-alert-btn",onClick:()=>{Dr()},children:"🔔 Alert"}),e.jsx("button",{className:"sl-save-btn",disabled:de==null,onClick:()=>{if(de==null)return;const t={condition:ee,price:de};ee===">="?Rs(t):Bs(t),Ke(!1)},children:"Save"})]})]})]}),li&&j&&e.jsxs(e.Fragment,{children:[e.jsx("div",{className:`spot-line${so?" loss":" profit"}`,style:{left:bs,top:j.top,height:j.bottom-j.top}}),e.jsxs("div",{className:"spot-price-label",style:{left:bs,top:-20},children:[e.jsx("span",{className:"spot-price-label-title",children:"Current price:"}),e.jsx("span",{className:"spot-price-label-value",children:v.toLocaleString("en-IN",{minimumFractionDigits:2})})]}),T.length>0&&(()=>{const t=ss>=0?"+":"",s=so?"Projected loss (Today)":"Projected profit (Today)",o=ze.reduce((r,a)=>r+a.entry*a.qty,0)||1,n=(ss/o*100).toFixed(3);return e.jsxs("div",{className:`floating-pnl${so?" loss-bg":" profit-bg"}`,style:{left:bs},children:[e.jsxs("span",{children:[s,": ",t,ss.toFixed(2)," (",t,n,"%)"]}),e.jsx("span",{style:{opacity:.75},children:"ⓘ"})]})})()]})]}),(U||W)&&e.jsx(e.Fragment,{children:e.jsxs("div",{className:"sl-saved-bar",children:[e.jsx("span",{children:"SL:"}),U&&e.jsxs("span",{children:["Above ≥ ₹",U.price.toLocaleString("en-IN")," ",e.jsxs("span",{children:["(",Ie(no(U.price)),")"]})," ",e.jsx("button",{className:"sl-remove-link",onClick:()=>On("upper"),children:"remove"})]}),U&&W&&e.jsx("span",{children:"|"}),W&&e.jsxs("span",{children:["Below ≤ ₹",W.price.toLocaleString("en-IN")," ",e.jsxs("span",{children:["(",Ie(no(W.price)),")"]})," ",e.jsx("button",{className:"sl-remove-link",onClick:()=>On("lower"),children:"remove"})]}),e.jsx("button",{className:"sl-config-link",onClick:()=>{et?Br():Rr()},children:et?"Close Config":"Config"}),e.jsx("button",{className:"sl-saved-edit",onClick:()=>Ke(!0),children:"Edit"})]})}),e.jsxs("div",{className:"payoff-bottom",children:["P&L at spot: ",e.jsxs("span",{style:{color:_e>=0?"#10b981":"#ef4444",fontWeight:800},children:[_e<0?"-":"","₹",Math.abs(_e).toLocaleString("en-IN",{minimumFractionDigits:2})]})]})]})]}),ni,e.jsxs("div",{className:`alert-bottom-sheet${we?" open":""}`,style:{left:br},children:[e.jsxs("div",{className:"alert-panel-header",children:[e.jsx("div",{className:"alert-sheet-drag-bar"}),e.jsxs("div",{className:"alert-panel-title",children:[e.jsx("span",{children:"🔔"}),e.jsx("span",{children:"Alert Orders"}),de!=null&&e.jsxs("span",{className:"alert-panel-subtitle",children:["— ",_," ",ee==="<="?"≤":"≥"," ",de.toLocaleString("en-IN")]})]}),e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:10},children:[e.jsx("span",{style:{fontSize:11,color:"rgba(255,255,255,.6)"},children:"Option Chain tab-ல strike click பண்ணா add ஆகும்"}),e.jsx("button",{className:"alert-panel-close",onClick:_n,children:"×"})]})]}),e.jsx("div",{className:"alert-panel-body",children:e.jsx("div",{className:"position_table",style:{flex:1},children:e.jsxs("table",{style:{width:"100%",minWidth:520,tableLayout:"fixed",borderCollapse:"collapse"},children:[e.jsxs("colgroup",{children:[e.jsx("col",{style:{width:60}}),e.jsx("col",{style:{width:72}}),e.jsx("col",{style:{width:"5%"}}),e.jsx("col",{style:{width:88}}),e.jsx("col",{style:{width:72}}),e.jsx("col",{style:{width:70}}),e.jsx("col",{style:{width:70}}),e.jsx("col",{style:{width:56}})]}),e.jsx("thead",{children:e.jsxs("tr",{className:"sticky-top",children:[e.jsx("th",{className:"pos-first-col-head",style:{width:60},children:e.jsxs("div",{className:"action_button_group",children:[e.jsx("span",{style:{width:16,display:"inline-block"}}),e.jsx("span",{style:{width:18,display:"inline-block"}})]})}),e.jsx("th",{children:"Lots"}),e.jsx("th",{children:"Qty"}),e.jsx("th",{children:"Strike ◇"}),e.jsx("th",{children:"Expiry"}),e.jsx("th",{children:"LTP"}),e.jsx("th",{children:"Tag"}),e.jsx("th",{})]})}),e.jsx("tbody",{children:O.length===0?e.jsx("tr",{children:e.jsx("td",{colSpan:8,className:"pos-empty",children:"No orders — add from Option Chain ↗"})}):O.map(t=>{const s=be(t),o=t._alertType==="exit";return e.jsxs("tr",{className:"parent_position",children:[e.jsx("td",{className:"pos-first-col-cell",children:e.jsx("div",{className:"action_button_group",children:e.jsx("button",{className:t.side==="B"?"pt-buy-btn":"pt-sell-btn",onClick:()=>ve(n=>n.map(r=>r.id===t.id?{...r,side:r.side==="B"?"S":"B"}:r)),title:t.side==="B"?"Switch to Sell":"Switch to Buy",children:t.side})})}),e.jsx("td",{children:e.jsxs("div",{className:"simulator_position_input position__strike",children:[e.jsx("button",{className:"sign_btn",onClick:()=>ot(t.id,Math.max(1,t.lots-1)),children:"−"}),e.jsx("input",{type:"number",className:"sim-input lot-input",value:t.lots,min:1,onChange:n=>ot(t.id,Math.max(1,parseInt(n.target.value||"1",10)||1))}),e.jsx("button",{className:"sign_btn",onClick:()=>ot(t.id,t.lots+1),children:"+"})]})}),e.jsx("td",{children:t.qty}),e.jsx("td",{children:e.jsxs("div",{className:"position__strike",children:[e.jsx("span",{children:t.strike}),e.jsx("span",{className:t.optionType==="CE"?"call-btn-pt":"put-btn-pt",children:t.optionType})]})}),e.jsx("td",{children:e.jsx("div",{className:"position__expiry",children:Ce(t.expiry)})}),e.jsx("td",{children:e.jsx("input",{type:"number",step:"any",className:"sim-input",value:s.toFixed(2),readOnly:!0})}),e.jsx("td",{children:o?e.jsx("span",{className:"alert-exit-badge",children:"EXIT"}):e.jsx("span",{className:"alert-new-badge",children:"NEW"})}),e.jsx("td",{children:e.jsx("button",{type:"button",className:"pos-del-btn",title:"Remove",onClick:()=>ve(n=>n.filter(r=>r.id!==t.id)),children:e.jsx("svg",{className:"pos-del-icon",viewBox:"0 0 20 20",fill:"none","aria-hidden":"true",children:e.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z",fill:"currentColor"})})})})]},t.id)})})]})})}),e.jsxs("div",{className:"alert-panel-footer",children:[e.jsx("div",{className:"alert-footer-left",children:e.jsx("button",{className:"alert-footer-btn alert-footer-instant",disabled:O.length===0,onClick:Ar,children:"⚡ Instant Order"})}),e.jsxs("div",{className:"alert-footer-right",children:[e.jsx("button",{className:"alert-footer-btn alert-footer-cancel",onClick:_n,children:"Close"}),e.jsx("button",{className:"alert-footer-btn alert-footer-save",disabled:O.length===0,onClick:()=>{Vr(),As(!0),os(!1)},children:"Save Alert Orders"})]})]})]})]})]})}),e.jsxs(yi,{isOpen:kr,onClose:ro,className:"m-4 max-w-[460px] overflow-hidden p-0",showCloseButton:!1,children:[e.jsx("div",{className:"bg-[#61b6ac] px-6 py-4 text-white",children:e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx("h3",{className:"text-[28px] font-semibold leading-none",children:as==="update"?"Update Strategy":"Save Portfolio"}),e.jsx("button",{type:"button",className:"text-[28px] leading-none text-white/90 hover:text-white",onClick:ro,disabled:Ne,children:"×"})]})}),e.jsxs("div",{className:"bg-white px-6 py-7",children:[e.jsxs("div",{className:"space-y-5",children:[e.jsxs("div",{children:[e.jsx("label",{className:"mb-2 block text-sm font-medium text-[#444]",children:"Select Portfolio:"}),e.jsxs("select",{className:"h-[42px] w-full rounded border border-[#d5d5d5] px-4 text-sm text-[#222] outline-none",value:Pt,onChange:t=>tt(t.target.value),disabled:ls||Ne,children:[ls&&e.jsx("option",{value:"",children:"Loading portfolios..."}),!ls&&Nr.map(t=>e.jsx("option",{value:t.value,children:t.label},t.value))]})]}),gs&&e.jsxs("div",{children:[e.jsx("label",{className:"mb-2 block text-sm font-medium text-[#444]",children:"Portfolio Name:"}),e.jsx("input",{type:"text",className:"h-[42px] w-full rounded border border-[#d5d5d5] px-4 text-sm text-[#222] outline-none",placeholder:"Enter portfolio name...",value:qs,onChange:t=>Hs(t.target.value),disabled:Ne})]}),e.jsxs("div",{children:[e.jsx("label",{className:"mb-2 block text-sm font-medium text-[#444]",children:"Strategy Name:"}),e.jsx("input",{type:"text",className:"h-[42px] w-full rounded border border-[#d5d5d5] px-4 text-sm text-[#222] outline-none",placeholder:"Enter strategy name...",value:cn,onChange:t=>Mt(t.target.value),disabled:Ne})]}),un&&e.jsx("div",{className:"rounded border border-[#f2b8b5] bg-[#fff4f3] px-3 py-2 text-sm text-[#bb3d36]",children:un})]}),e.jsxs("div",{className:"mt-9 flex justify-end gap-3",children:[e.jsx("button",{type:"button",className:"min-w-[82px] rounded border border-[#d5d5d5] px-5 py-2.5 text-sm font-medium text-[#555]",onClick:ro,disabled:Ne,children:"Cancel"}),e.jsx("button",{type:"button",className:"min-w-[72px] rounded bg-[#61b6ac] px-5 py-2.5 text-sm font-semibold text-white disabled:cursor-not-allowed disabled:opacity-70",onClick:as==="update"?fi:ui,disabled:ls||Ne||!Pt||gs&&!qs.trim(),children:Ne?as==="update"?"Updating...":"Saving...":as==="update"?"Update":"Save"})]})]})]}),yr&&e.jsx("div",{className:"basket-overlay",onClick:t=>{t.target===t.currentTarget&&es(!1)},children:e.jsxs("div",{className:"basket-modal",children:[e.jsxs("div",{className:"basket-header",children:[e.jsxs("span",{className:"basket-header-title",children:["⚡ Instant Order — ",O.length," order",O.length!==1?"s":""]}),e.jsx("button",{className:"basket-header-close",onClick:()=>es(!1),children:"×"})]}),e.jsx("div",{className:"basket-body",children:O.map((t,s)=>{const o=t.optionType==="CE"?q[t.strike]:H[t.strike],n=Number((be(t)||t.ltp||0).toFixed(2)),r=(o==null?void 0:o.oi)??0,a=(o==null?void 0:o.iv)??0,c=nn[s]??{price:n,qty:t.qty},l=t.side==="B",f=`${_} ${t.strike} ${t.optionType} ${Ce(t.expiry)}`;return e.jsxs("div",{className:"basket-card",children:[e.jsxs("div",{className:"basket-card-header",children:[e.jsxs("span",{className:"basket-card-num",children:["ORDER ",s+1]}),e.jsx("span",{className:l?"basket-buy-badge":"basket-sell-badge",children:l?"BUY":"SELL"}),e.jsx("span",{className:"basket-card-title",children:f}),c.status&&e.jsx("span",{className:`basket-order-status ${c.status==="success"?"basket-status-ok":"basket-status-err"}`,children:c.status==="success"?"✓ Placed":`✗ ${c.error||"Failed"}`})]}),e.jsxs("div",{className:"basket-card-body",children:[e.jsxs("div",{className:"basket-md-grid",children:[e.jsxs("div",{className:"basket-md-item",children:["Last Price",e.jsxs("strong",{children:["₹",n.toLocaleString("en-IN",{minimumFractionDigits:2})]})]}),e.jsxs("div",{className:"basket-md-item",children:["OI",e.jsx("strong",{children:r>0?(r/1e3).toFixed(1)+"K":"—"})]}),e.jsxs("div",{className:"basket-md-item",children:["IV",e.jsx("strong",{children:a>0?a.toFixed(1)+"%":"—"})]}),e.jsxs("div",{className:"basket-md-item",children:["Strike",e.jsx("strong",{children:t.strike})]}),e.jsxs("div",{className:"basket-md-item",children:["Expiry",e.jsx("strong",{children:Ce(t.expiry)})]}),e.jsxs("div",{className:"basket-md-item",children:["Qty",e.jsx("strong",{children:t.qty})]})]}),e.jsxs("div",{className:"basket-price-box",style:{flexDirection:"column",alignItems:"flex-start",gap:4},children:[e.jsx("span",{className:"basket-ltp-label",children:"Current LTP"}),e.jsxs("span",{className:"basket-ltp-big ",style:{color:l?"#5cb4a9":"#dc2626"},children:["₹",n.toLocaleString("en-IN",{minimumFractionDigits:2})]}),e.jsxs("span",{style:{fontSize:11,color:"#6b7280"},children:[t.lots," lot",t.lots!==1?"s":""," × ",Math.round(t.qty/t.lots)," = ",t.qty]})]})]}),e.jsxs("div",{className:"basket-card-footer",children:[e.jsx("span",{style:{fontSize:12,color:"#6b7280",fontWeight:600},children:"LIMIT"}),e.jsx("span",{style:{fontSize:12,color:"#6b7280"},children:"Price:"}),e.jsx("input",{type:"number",step:"0.05",className:"basket-price-input",value:c.price,onChange:x=>Nt(d=>d.map((y,N)=>N===s?{...y,price:parseFloat(x.target.value)||0}:y))}),e.jsx("span",{style:{fontSize:12,color:"#6b7280"},children:"Qty:"}),e.jsx("input",{type:"number",min:1,className:"basket-qty-input",value:c.qty,onChange:x=>Nt(d=>d.map((y,N)=>N===s?{...y,qty:parseInt(x.target.value)||t.qty}:y))}),e.jsx("button",{className:"basket-cancel-btn",onClick:()=>Nt(x=>x.map((d,y)=>y===s?{...d,status:"cancelled"}:d)),children:"Cancel"}),e.jsx("button",{className:`basket-place-btn${l?"":" basket-sell-place-btn"}`,disabled:ts||c.status==="success",onClick:()=>Sn([s]),children:ts?"…":"Place Order"})]})]},t.id)})}),e.jsxs("div",{className:"basket-footer",children:[e.jsxs("div",{className:"basket-margin-item",children:["Margin Needed",e.jsx("strong",{children:"—"})]}),e.jsxs("div",{className:"basket-margin-item",children:["Margin Available",e.jsx("strong",{children:"—"})]}),e.jsx("button",{className:"basket-place-all-btn",disabled:ts,onClick:()=>void Sn(),children:ts?"Placing…":"Place All at Limit"})]})]})})]})}export{zi as default};
