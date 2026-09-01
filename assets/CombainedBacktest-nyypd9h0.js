import{r as h,j as e,P as q}from"./index-D-gWZDeH.js";import{C as U}from"./react-apexcharts.min-DP4VV9U6.js";import{P as Y}from"./PageBreadCrumb-D0QDQGSV.js";import{S as D}from"./StatusToast-D3KdFOLo.js";import"./index-Chjiymov.js";const I="https://scanner.finedgealgo.com/scanner".replace(/\/+$/,""),O=[{value:"nifty_50",label:"NIFTY 50"},{value:"nifty_100",label:"NIFTY 100"},{value:"nifty_200",label:"NIFTY 200"},{value:"nifty_500",label:"NIFTY 500"}],W=[{value:"weekly",label:"Weekly"},{value:"bi-weekly",label:"Bi-Weekly"},{value:"monthly",label:"Monthly"},{value:"bi-monthly",label:"Bi-Monthly"},{value:"quarterly",label:"Quarterly"}],G=[{value:"next_day",label:"Next Day"},{value:"previous_day",label:"Previous Day"}],H=[{value:"equal_weight",label:"Equal Weight"}],J=[{value:"supertrend_1_2_5",label:"SUPERTREND 1,2.5"}],X=[{value:"half_portfolio",label:"Half Portfolio"},{value:"go_cash",label:"Go Cash"}],K=[{value:"gold_bees",label:"Gold Bees"}],Q=[{key:"invested_capital",label:"Investment Capital",icon:"money"},{key:"final_capital",label:"Current Capital",icon:"money"},{key:"idle_cash",label:"Idle Cash",icon:"money"},{key:"total_return",label:"Total Return",icon:"money",suffix:"%"},{key:"win_rate_percent",label:"Win Rate(%)",icon:"trending_up",suffix:"%"},{key:"avg_winners_roi_percent",label:"Avg. Winners ROI(%)",icon:"bar_chart",suffix:"%"},{key:"avg_losers_roi_percent",label:"Avg. Losers ROI(%)",icon:"bar_chart",suffix:"%"},{key:"max_drawdown",label:"Max. DD(%)",icon:"bar_chart",suffix:"%"},{key:"gagr",label:"CAGR(%)",icon:"money",suffix:"%"},{key:"avg_trades_per_year",label:"Avg. trade per year",icon:"bar_chart"},{key:"risk_reward",label:"Risk To Reward",icon:"money"},{key:"biggest_winner_roi_percent",label:"Biggest Winner ROI(%)",icon:"money",suffix:"%"},{key:"biggest_loser_roi_percent",label:"Biggest Loser ROI(%)",icon:"money",suffix:"%"}];function P(){return new Date().toISOString().slice(0,10)}function E(n){return{strategy_name:`Strategy ${n+1}`,start_date:"2019-01-01",end_date:P(),regime_filter_status:!0,regime_filter:"supertrend_1_2_5",regime_filter_action:"go_cash",regime_filter_indexes:"nifty_500",uncorrelated_asset_status:!0,uncorrelated_asset_type:"gold_bees",uncorrelated_asset_allocation:"100",starting_capital:"300000",indexes:["nifty_50"],stock_price_min:"0",stock_price_max:"0",entry_rank:"12",exit_rank:"25",rebalance_frequency:"monthly",rebalance_date:"10",alternative_rebalance_day:"next_day",position_sizing:"equal_weight",formula:"((70% * 6 Month Volatility) + (20% * 3 Month Performance) + (10% * 1 Year Performance)) / 3 Month Volatility"}}function g(n,l=0){const r=Number(n);return Number.isFinite(r)?r:l}function y(n){return`₹${n.toLocaleString("en-IN",{maximumFractionDigits:2,minimumFractionDigits:2})}`}function Z(n){return n==="trending_up"?"trending":n==="bar_chart"?"chart":"money"}function ee(n){return{stock_price_min:Number(n.stock_price_min||0),stock_price_max:Number(n.stock_price_max||0),sectors:[],indexes:n.indexes,formula:n.formula,starting_capital:Number(n.starting_capital||0),entry_rank:Number(n.entry_rank||0),exit_rank:Number(n.exit_rank||0),rebalance_frequency:n.rebalance_frequency,rebalance_date:String(n.rebalance_date||10),alternative_rebalance_day:n.alternative_rebalance_day,position_sizing:n.position_sizing,strategy_name:n.strategy_name,start_date:n.start_date,end_date:n.end_date,regime_filter_status:n.regime_filter_status,regime_filter:n.regime_filter,regime_filter_action:n.regime_filter_action,regime_filter_indexes:n.regime_filter_indexes,uncorrelated_asset_status:n.uncorrelated_asset_status,uncorrelated_asset_type:n.uncorrelated_asset_type,uncorrelated_asset_allocation:Number(n.uncorrelated_asset_allocation||0),min_price:Number(n.stock_price_min||0)===0?null:Number(n.stock_price_min||0),max_price:Number(n.stock_price_max||0)===0?null:Number(n.stock_price_max||0)}}function ae(n){return{index_name:n.indexes,sectors:[],min_price:Number(n.stock_price_min||0)===0?null:Number(n.stock_price_min||0),max_price:Number(n.stock_price_max||0)===0?null:Number(n.stock_price_max||0),top_n:Number(n.entry_rank||0),total_capital:Number(n.starting_capital||0),score_date:P(),formula:n.formula}}function j(n,l){return g(n==null?void 0:n[l],0)}function te(n){const l=n.reduce((c,p)=>c+j(p.result.metrics,"invested_capital"),0),r=n.reduce((c,p)=>c+j(p.result.metrics,"final_capital"),0),o=n.reduce((c,p)=>c+j(p.result.metrics,"idle_cash"),0),u=l>0?(r-l)/l*100:0,d=c=>n.length?n.reduce((p,s)=>p+j(s.result.metrics,c),0)/n.length:0,x=c=>n.length?Math.max(...n.map(p=>j(p.result.metrics,c))):0,v=c=>n.length?Math.min(...n.map(p=>j(p.result.metrics,c))):0;return{invested_capital:l,final_capital:r,idle_cash:o,total_return:u,win_rate_percent:d("win_rate_percent"),avg_winners_roi_percent:d("avg_winners_roi_percent"),avg_losers_roi_percent:d("avg_losers_roi_percent"),max_drawdown:x("max_drawdown"),gagr:d("gagr"),avg_trades_per_year:n.reduce((c,p)=>c+j(p.result.metrics,"avg_trades_per_year"),0),risk_reward:d("risk_reward"),biggest_winner_roi_percent:x("biggest_winner_roi_percent"),biggest_loser_roi_percent:v("biggest_loser_roi_percent")}}function ne(n){const l=new Map;return n.forEach(r=>{(r.result.equity_curve_json||[]).forEach(o=>{const u=l.get(o.date)||{date:o.date,portfolio:0,index:0};u.portfolio+=g(o.portfolio,0),u.index+=g(o.index,0),l.set(o.date,u)})}),[...l.values()].sort((r,o)=>r.date.localeCompare(o.date))}function ie(n){const l=new Map;return(n||[]).forEach(r=>{const o=String(r.month||"").slice(0,4)||"Unknown";l.set(o,[...l.get(o)||[],r])}),[...l.entries()].map(([r,o])=>({year:r,items:o}))}function R(n){return(n||[]).map((l,r)=>{const o=String(l.month_name||l.month||l.label||`Month ${r+1}`),u=String(l.year||l.end_date||l.start_date||"").slice(0,4)||"Unknown",d=g(l.portfolio_start_value??l.start_value??l.Start_Value,0),x=g(l.portfolio_end_value??l.end_value??l.End_Value,0),v=g(l.pnl_rupee??l.MonthPnL??x-d,x-d),c=g(l.portfolio_roi??l.Monthly_ROI_Pct??l.roi_pct,0);return{monthLabel:o,year:u,startValue:d,endValue:x,pnl:v,roi:c}})}function le(n){const l=new Map;return n.forEach(r=>{R(r.result.monthly_final_json).forEach(o=>{const u=`${o.year}-${o.monthLabel}`,d=l.get(u)||{...o,startValue:0,endValue:0,pnl:0,roi:0};d.startValue+=o.startValue,d.endValue+=o.endValue,d.pnl+=o.pnl,l.set(u,d)})}),[...l.values()].map(r=>({...r,roi:r.startValue>0?r.pnl/r.startValue*100:0}))}function re({open:n}){return e.jsx("svg",{viewBox:"0 0 20 20",fill:"none","aria-hidden":"true",children:e.jsx("path",{d:"M6 8l4 4 4-4",stroke:"currentColor",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round"})})}function oe({label:n,options:l,value:r,onChange:o}){const[u,d]=h.useState(!1),x=l.filter(s=>r.includes(s.value)).map(s=>s.label),v=x.length?`${x.slice(0,2).join(", ")}${x.length>2?` +${x.length-2}`:""}`:"Select Index",c=l.length>0&&r.length===l.length,p=s=>{o(r.includes(s)?r.filter(S=>S!==s):[...r,s])};return e.jsxs("div",{className:`combined-multi ${u?"open":""}`,children:[e.jsx("label",{children:n}),e.jsxs("button",{type:"button",className:"combined-multi-trigger",onClick:()=>d(s=>!s),children:[e.jsx("span",{children:v}),e.jsx(re,{open:u})]}),u?e.jsxs("div",{className:"combined-multi-panel",children:[e.jsxs("label",{className:`combined-multi-option sticky ${c?"selected":""}`,children:[e.jsx("input",{type:"checkbox",checked:c,onChange:()=>o(c?[]:l.map(s=>s.value))}),e.jsx("span",{children:"Select All"})]}),e.jsx("div",{className:"combined-multi-list",children:l.map(s=>e.jsxs("label",{className:`combined-multi-option ${r.includes(s.value)?"selected":""}`,children:[e.jsx("input",{type:"checkbox",checked:r.includes(s.value),onChange:()=>p(s.value)}),e.jsx("span",{children:s.label})]},s.value))})]}):null]})}function ue(){const[n,l]=h.useState([E(0)]),[r,o]=h.useState("strategy-1"),[u,d]=h.useState(null),[x,v]=h.useState(!1),[c,p]=h.useState(null),[s,S]=h.useState([]),N=(t,i)=>{d({id:Date.now(),variant:t,message:i})},m=(t,i,a)=>{l(_=>_.map((f,V)=>V===t?{...f,[i]:a}:f))},z=()=>{l(t=>[...t,E(t.length)])},C=h.useMemo(()=>{var t;return s.length<2?null:{strategyLabel:"Combained",result:{metrics:te(s),monthly_roi:((t=s[0])==null?void 0:t.result.monthly_roi)||[],equity_curve_json:ne(s),monthly_final_json:le(s).map(i=>({year:i.year,month_name:i.monthLabel,portfolio_start_value:i.startValue,portfolio_end_value:i.endValue,pnl_rupee:i.pnl,portfolio_roi:i.roi}))}}},[s]),k=h.useMemo(()=>{const t=s.map((i,a)=>({key:`strategy-${a+1}`,label:`Strategy ${a+1}`,data:i}));return C?[...t,{key:"combined",label:"Combained",data:C}]:t},[C,s]),b=h.useMemo(()=>{var t,i;return((t=k.find(a=>a.key===r))==null?void 0:t.data)??((i=k[0])==null?void 0:i.data)??null},[r,k]),T=h.useMemo(()=>b!=null&&b.result.metrics?Q.map(t=>{var f;const i=(f=b.result.metrics)==null?void 0:f[t.key],a=Number(i),_=Number.isFinite(a)?`${a.toFixed(t.suffix?2:0)}${t.suffix||""}`:`${i??"--"}${t.suffix||""}`;return{...t,value:_}}):[],[b]),$=h.useMemo(()=>ie(b==null?void 0:b.result.monthly_roi),[b]),w=h.useMemo(()=>R(b==null?void 0:b.result.monthly_final_json),[b]),M=h.useMemo(()=>w.reduce((t,i)=>(t[i.year]=t[i.year]||[],t[i.year].push(i),t),{}),[w]),L=h.useMemo(()=>({chart:{height:350,type:"area",toolbar:{show:!0,tools:{download:!0,zoom:!1,pan:!1,reset:!1}},zoom:{enabled:!1},background:"transparent"},dataLabels:{enabled:!1},stroke:{curve:"smooth",width:2},colors:["#2ecc71","#f39c12"],xaxis:{type:"datetime",categories:((b==null?void 0:b.result.equity_curve_json)||[]).map(t=>new Date(t.date).toISOString()),labels:{format:"MMM yy",style:{colors:"#555",fontSize:"12px"}}},yaxis:{labels:{formatter:t=>`₹${Number(t).toLocaleString("en-IN")}`,style:{colors:"#555",fontSize:"12px"}}},tooltip:{shared:!0,x:{format:"dd MMM yyyy"},theme:"light"},legend:{position:"top",horizontalAlign:"right",fontSize:"13px",labels:{colors:"#333"}},grid:{borderColor:"rgba(0,0,0,0.05)"},fill:{type:"gradient",gradient:{shadeIntensity:1,opacityFrom:.4,opacityTo:.08,stops:[0,90,100]}}}),[b]),B=h.useMemo(()=>{const t=(b==null?void 0:b.result.equity_curve_json)||[];return[{name:"Momentum Portfolio",data:t.map(i=>g(i.portfolio))},{name:"Nifty Index",data:t.map(i=>g(i.index))}]},[b]),A=async t=>{p(t),d(null);try{const i=await fetch(`${I}/eod_scoring`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(ae(n[t]))}),a=await i.json().catch(()=>({}));if(!i.ok)throw new Error((a==null?void 0:a.detail)||"Unable to fetch score.");N("success",`Strategy ${t+1} score fetched successfully.`)}catch(i){N("error",i instanceof Error?i.message:"Unable to fetch score.")}finally{p(null)}},F=async()=>{v(!0),d(null);try{const t=await Promise.all(n.map(async(i,a)=>{const _=await fetch(`${I}/run_backtest`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(ee(i))}),f=await _.json().catch(()=>({}));if(!_.ok)throw new Error((f==null?void 0:f.detail)||`Unable to fetch backtest for Strategy ${a+1}.`);return{strategyLabel:`Strategy ${a+1}`,result:f}}));S(t),o("strategy-1"),N("success","Combined backtest fetched successfully.")}catch(t){N("error",t instanceof Error?t.message:"Unable to fetch combined backtest.")}finally{v(!1)}};return e.jsxs(e.Fragment,{children:[e.jsx(q,{title:"Scanner | Combained Backtest",description:"Sigma combined backtest page"}),e.jsxs("div",{className:"combined-backtest-page",children:[e.jsx("style",{children:se}),e.jsx(Y,{pageTitle:"Combained Backtest"}),e.jsx(D,{toast:u,onClose:()=>d(null)}),e.jsxs("div",{className:"combined-shell",children:[e.jsxs("section",{className:"combined-strategy-stack",children:[e.jsxs("div",{className:"combined-strategy-stack-head",children:[e.jsxs("div",{children:[e.jsx("h2",{children:"Strategy Builder"}),e.jsx("p",{children:"`Scanner Backtest` page same feature-oda dynamic strategy sections."})]}),e.jsx("button",{type:"button",className:"combined-add-btn",onClick:z,children:"Add Strategy"})]}),n.map((t,i)=>e.jsxs("div",{className:"combined-strategy-block",children:[e.jsxs("div",{className:"combined-strategy-label",children:["Strategy ",i+1]}),e.jsxs("div",{className:"combined-two-col",children:[e.jsxs("section",{className:"combined-card",children:[e.jsx("div",{className:"combined-card-head",children:e.jsx("h2",{children:"Form Horizontal"})}),e.jsxs("div",{className:"combined-grid",children:[e.jsxs("div",{className:"combined-field",children:[e.jsx("label",{children:"Starting Capital*"}),e.jsx("input",{value:t.starting_capital,onChange:a=>m(i,"starting_capital",a.target.value)})]}),e.jsx(oe,{label:"Index*",options:O,value:t.indexes,onChange:a=>m(i,"indexes",a)}),e.jsxs("div",{className:"combined-field",children:[e.jsx("label",{children:"Min value*"}),e.jsx("input",{value:t.stock_price_min,onChange:a=>m(i,"stock_price_min",a.target.value)})]}),e.jsxs("div",{className:"combined-field",children:[e.jsx("label",{children:"Max value*"}),e.jsx("input",{value:t.stock_price_max,onChange:a=>m(i,"stock_price_max",a.target.value)})]}),e.jsxs("div",{className:"combined-field",children:[e.jsx("label",{children:"No.of stocks in Portfolio*"}),e.jsx("input",{value:t.entry_rank,onChange:a=>m(i,"entry_rank",a.target.value)})]}),e.jsxs("div",{className:"combined-field",children:[e.jsx("label",{children:"Exit Rank*"}),e.jsx("input",{value:t.exit_rank,onChange:a=>m(i,"exit_rank",a.target.value)})]}),e.jsxs("div",{className:"combined-field",children:[e.jsx("label",{children:"Rebalance Frequency*"}),e.jsx("select",{value:t.rebalance_frequency,onChange:a=>m(i,"rebalance_frequency",a.target.value),children:W.map(a=>e.jsx("option",{value:a.value,children:a.label},a.value))})]}),e.jsxs("div",{className:"combined-field",children:[e.jsx("label",{children:"Rebalance Date*"}),e.jsx("input",{value:t.rebalance_date,onChange:a=>m(i,"rebalance_date",a.target.value)})]}),e.jsxs("div",{className:"combined-field",children:[e.jsx("label",{children:"Alternative Rebalance Day*"}),e.jsx("select",{value:t.alternative_rebalance_day,onChange:a=>m(i,"alternative_rebalance_day",a.target.value),children:G.map(a=>e.jsx("option",{value:a.value,children:a.label},a.value))})]}),e.jsxs("div",{className:"combined-field",children:[e.jsx("label",{children:"Position Sizing*"}),e.jsx("select",{value:t.position_sizing,onChange:a=>m(i,"position_sizing",a.target.value),children:H.map(a=>e.jsx("option",{value:a.value,children:a.label},a.value))})]}),e.jsxs("div",{className:"combined-field full",children:[e.jsx("label",{children:"Scoring Console"}),e.jsx("textarea",{rows:4,value:t.formula,onChange:a=>m(i,"formula",a.target.value)})]}),e.jsxs("div",{className:"combined-actions full",children:[e.jsx("button",{type:"button",className:"ghost",children:"Cancel"}),e.jsx("button",{type:"button",className:"primary",onClick:()=>A(i),disabled:c===i||x,children:c===i?"Scoring...":"Score"}),e.jsx("button",{type:"button",className:"primary",onClick:()=>F(),disabled:x,children:x?"Loading...":"Backtest"})]})]})]}),e.jsxs("section",{className:"combined-card",children:[e.jsx("div",{className:"combined-card-head",children:e.jsx("h2",{children:"Form Horizontal"})}),e.jsxs("div",{className:"combined-grid",children:[e.jsxs("div",{className:"combined-field wide",children:[e.jsx("label",{children:"Strategy Name*"}),e.jsx("input",{value:t.strategy_name,onChange:a=>m(i,"strategy_name",a.target.value)})]}),e.jsxs("div",{className:"combined-field",children:[e.jsx("label",{children:"Start date*"}),e.jsx("input",{type:"date",value:t.start_date,onChange:a=>m(i,"start_date",a.target.value)})]}),e.jsxs("div",{className:"combined-field",children:[e.jsx("label",{children:"End date*"}),e.jsx("input",{type:"date",value:t.end_date,onChange:a=>m(i,"end_date",a.target.value)})]}),e.jsxs("div",{className:"combined-toggle-row full",children:[e.jsx("button",{type:"button",className:`combined-toggle ${t.regime_filter_status?"active":""}`,onClick:()=>m(i,"regime_filter_status",!t.regime_filter_status),children:e.jsx("span",{})}),e.jsx("span",{children:"Regime Filter Status"})]}),e.jsxs("div",{className:"combined-field",children:[e.jsx("label",{children:"Regime Filter*"}),e.jsx("select",{value:t.regime_filter,onChange:a=>m(i,"regime_filter",a.target.value),children:J.map(a=>e.jsx("option",{value:a.value,children:a.label},a.value))})]}),e.jsxs("div",{className:"combined-field",children:[e.jsx("label",{children:"Regime Filter Action*"}),e.jsx("select",{value:t.regime_filter_action,onChange:a=>m(i,"regime_filter_action",a.target.value),children:X.map(a=>e.jsx("option",{value:a.value,children:a.label},a.value))})]}),e.jsxs("div",{className:"combined-field",children:[e.jsx("label",{children:"Index*"}),e.jsx("select",{value:t.regime_filter_indexes,onChange:a=>m(i,"regime_filter_indexes",a.target.value),children:O.map(a=>e.jsx("option",{value:a.value,children:a.label},a.value))})]}),e.jsxs("div",{className:"combined-toggle-row full",children:[e.jsx("button",{type:"button",className:`combined-toggle ${t.uncorrelated_asset_status?"active":""}`,onClick:()=>m(i,"uncorrelated_asset_status",!t.uncorrelated_asset_status),children:e.jsx("span",{})}),e.jsx("span",{children:"Invest in Uncorrelated Asset"})]}),e.jsxs("div",{className:"combined-field",children:[e.jsx("label",{children:"Asset Type*"}),e.jsx("select",{value:t.uncorrelated_asset_type,onChange:a=>m(i,"uncorrelated_asset_type",a.target.value),children:K.map(a=>e.jsx("option",{value:a.value,children:a.label},a.value))})]}),e.jsxs("div",{className:"combined-field",children:[e.jsx("label",{children:"Allocation (%)*"}),e.jsx("input",{value:t.uncorrelated_asset_allocation,onChange:a=>m(i,"uncorrelated_asset_allocation",a.target.value)})]})]})]})]})]},`strategy-${i}`))]}),k.length?e.jsxs("section",{className:"combined-card",children:[e.jsx("div",{className:"combined-card-head",children:e.jsxs("div",{children:[e.jsx("h2",{children:"Analyse Report"}),e.jsx("p",{children:"Backtest API result and report sections."})]})}),e.jsx("div",{className:"combined-tabs",children:k.map(t=>e.jsx("button",{type:"button",className:`combined-tab ${r===t.key?"active":""}`,onClick:()=>o(t.key),children:t.label},t.key))}),e.jsx("div",{className:"combined-metrics-grid",children:T.map(t=>e.jsxs("article",{className:`combined-metric-card ${Z(t.icon)}`,children:[e.jsx("span",{className:"combined-metric-label",children:t.label}),e.jsx("strong",{children:t.value})]},t.key))}),e.jsxs("div",{className:"combined-breakups",children:[e.jsxs("div",{className:"combined-breakup-card",children:[e.jsx("h3",{children:"📊 Monthly Breakup (Realized Profit%)"}),e.jsx("div",{className:"combined-table-wrap",children:e.jsxs("table",{className:"combined-breakup-table",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Year"}),e.jsx("th",{children:"Month"}),e.jsx("th",{children:"ROI%"}),e.jsx("th",{children:"CC"}),e.jsx("th",{children:"OP"}),e.jsx("th",{children:"P"})]})}),e.jsx("tbody",{children:$.flatMap(t=>t.items.map((i,a)=>e.jsxs("tr",{children:[e.jsx("td",{className:"year-cell",children:t.year}),e.jsx("td",{children:String(i.month||"").slice(5)}),e.jsxs("td",{className:g(i.Monthly_ROI_Pct)>=0?"positive":"negative",children:[g(i.Monthly_ROI_Pct).toFixed(2),"%"]}),e.jsx("td",{children:y(g(i.Capital_Base))}),e.jsx("td",{children:y(g(i.CumBeforeMonth))}),e.jsx("td",{className:g(i.MonthPnL)>=0?"positive":"negative",children:y(g(i.MonthPnL))})]},`${t.year}-${i.month}-${a}`)))})]})})]}),e.jsxs("div",{className:"combined-chart-card",children:[e.jsx("div",{className:"combined-chart-head",children:"Equity Curve"}),e.jsx(U,{options:L,series:B,type:"area",height:350})]})]}),Object.keys(M).length?e.jsxs("section",{className:"combined-report-section",children:[e.jsx("div",{className:"combined-report-title",children:"📅 Monthly Portfolio Report"}),Object.entries(M).map(([t,i])=>e.jsxs("div",{className:"combined-year-block",children:[e.jsx("div",{className:"combined-year-head",children:t}),e.jsx("div",{className:"combined-table-wrap",children:e.jsxs("table",{className:"combined-year-table",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"R.No"}),e.jsx("th",{children:"Month"}),e.jsx("th",{children:"Start Value"}),e.jsx("th",{children:"End Value"}),e.jsx("th",{children:"P/L"}),e.jsx("th",{children:"ROI%"})]})}),e.jsx("tbody",{children:i.map((a,_)=>e.jsxs("tr",{children:[e.jsx("td",{children:_+1}),e.jsx("td",{children:a.monthLabel}),e.jsx("td",{children:y(a.startValue)}),e.jsx("td",{children:y(a.endValue)}),e.jsx("td",{className:a.pnl>=0?"positive":"negative",children:y(a.pnl)}),e.jsxs("td",{className:a.roi>=0?"positive":"negative",children:[a.roi.toFixed(2),"%"]})]},`${t}-${a.monthLabel}-${_}`))})]})})]},t))]}):null]}):null]})]})]})}const se=`
.combined-backtest-page {
  min-height: 100vh;
  padding: 24px;
  background: #f4f6fb;
}

.combined-shell {
  display: grid;
  gap: 22px;
}

.combined-card {
  background: #fff;
  border-radius: 14px;
  border: 1px solid #dde4f0;
  box-shadow: 0 8px 26px rgba(15, 23, 42, 0.06);
  overflow: hidden;
}

.combined-strategy-stack {
  display: grid;
  gap: 18px;
}

.combined-strategy-stack-head {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
}

.combined-strategy-stack-head h2 {
  margin: 0;
  font-size: 24px;
  font-weight: 800;
  color: #23314f;
}

.combined-strategy-stack-head p {
  margin: 6px 0 0;
  color: #64748b;
  font-size: 13px;
}

.combined-add-btn {
  border: 0;
  border-radius: 999px;
  padding: 12px 22px;
  background: #2563eb;
  color: #fff;
  font-size: 14px;
  font-weight: 700;
  cursor: pointer;
  box-shadow: 0 10px 20px rgba(37, 99, 235, 0.18);
}

.combined-strategy-block {
  display: grid;
  gap: 10px;
}

.combined-strategy-label {
  color: #23314f;
  font-size: 18px;
  font-weight: 800;
  padding: 0 2px;
}

.combined-card-head {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 18px 20px 0;
}

.combined-card-head h2 {
  margin: 0;
  font-size: 20px;
  font-weight: 700;
  color: #23314f;
}

.combined-card-head p {
  margin: 6px 0 0;
  color: #6b7280;
  font-size: 13px;
}

.combined-two-col {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 20px;
}

.combined-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 16px;
  padding: 18px 20px 22px;
}

.combined-field,
.combined-multi {
  display: grid;
  gap: 8px;
}

.combined-field.wide,
.combined-field.full,
.combined-toggle-row.full,
.combined-actions.full {
  grid-column: 1 / -1;
}

.combined-field label,
.combined-multi label {
  font-size: 13px;
  font-weight: 700;
  color: #334155;
}

.combined-field input,
.combined-field select,
.combined-field textarea,
.combined-multi-trigger {
  width: 100%;
  border: 1px solid #c7d2e3;
  border-radius: 8px;
  background: #fff;
  color: #1f2937;
  font-size: 14px;
  padding: 12px 14px;
  outline: none;
  transition: border-color 0.18s ease, box-shadow 0.18s ease;
}

.combined-field input:focus,
.combined-field select:focus,
.combined-field textarea:focus,
.combined-multi-trigger:focus {
  border-color: #2563eb;
  box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.12);
}

.combined-field textarea {
  min-height: 110px;
  resize: vertical;
}

.combined-toggle-row {
  display: flex;
  align-items: center;
  gap: 12px;
  padding-top: 4px;
}

.combined-toggle-row span {
  font-weight: 600;
  color: #243b53;
}

.combined-toggle {
  position: relative;
  width: 54px;
  height: 30px;
  border: 0;
  border-radius: 999px;
  background: #cbd5e1;
  cursor: pointer;
  transition: background 0.2s ease;
}

.combined-toggle span {
  position: absolute;
  top: 3px;
  left: 3px;
  width: 24px;
  height: 24px;
  border-radius: 999px;
  background: #fff;
  transition: transform 0.2s ease;
}

.combined-toggle.active {
  background: #2563eb;
}

.combined-toggle.active span {
  transform: translateX(24px);
}

.combined-actions {
  display: flex;
  justify-content: flex-end;
  gap: 12px;
  padding-top: 4px;
}

.combined-actions button {
  border: 0;
  border-radius: 999px;
  padding: 12px 24px;
  font-size: 14px;
  font-weight: 700;
  cursor: pointer;
}

.combined-actions .ghost {
  background: transparent;
  color: #64748b;
}

.combined-actions .primary {
  background: #2563eb;
  color: #fff;
  box-shadow: 0 10px 20px rgba(37, 99, 235, 0.18);
}

.combined-actions button:disabled,
.combined-add-btn:disabled {
  opacity: 0.65;
  cursor: not-allowed;
}

.combined-multi {
  position: relative;
}

.combined-multi-trigger {
  display: flex;
  align-items: center;
  justify-content: space-between;
  text-align: left;
  cursor: pointer;
  gap: 12px;
}

.combined-multi-trigger svg {
  width: 18px;
  height: 18px;
  color: #2563eb;
  transition: transform 0.18s ease;
}

.combined-multi.open .combined-multi-trigger svg {
  transform: rotate(180deg);
}

.combined-multi-panel {
  position: absolute;
  top: calc(100% + 6px);
  left: 0;
  right: 0;
  z-index: 20;
  border-radius: 10px;
  border: 1px solid #d7dfeb;
  background: #fbf9f9;
  box-shadow: 0 14px 34px rgba(15, 23, 42, 0.14);
  overflow: hidden;
}

.combined-multi-option {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 10px 14px;
  background: #fbf9f9;
  font-size: 14px;
  font-weight: 600;
  color: #1f2937;
}

.combined-multi-option.selected {
  background: #e6f0fc;
}

.combined-multi-option:hover {
  background: #fbf9f9;
}

.combined-multi-option.selected:hover {
  background: #e6f0fc;
}

.combined-multi-option.sticky {
  position: sticky;
  top: 0;
  z-index: 1;
}

.combined-multi-option input {
  width: 16px;
  height: 16px;
  accent-color: #2563eb;
}

.combined-multi-list {
  max-height: 220px;
  overflow: auto;
}

.combined-tabs {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  padding: 18px 20px 0;
}

.combined-tab {
  border: 1px solid #d6dfec;
  background: #f8fafc;
  color: #475569;
  border-radius: 999px;
  padding: 10px 18px;
  font-size: 13px;
  font-weight: 700;
  cursor: pointer;
}

.combined-tab.active {
  background: #2563eb;
  color: #fff;
  border-color: #2563eb;
}

.combined-metrics-grid {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 16px;
  padding: 20px;
}

.combined-metric-card {
  background: #fcfcfc;
  border: 1px solid #edf1f7;
  border-radius: 12px;
  padding: 18px 20px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.08);
}

.combined-metric-card strong {
  display: block;
  margin-top: 10px;
  font-size: 24px;
  line-height: 1.1;
  color: #111827;
}

.combined-metric-label {
  display: block;
  font-size: 14px;
  font-weight: 700;
  color: #574a4a;
}

.combined-metric-card.money { border-left: 4px solid #5e73db; }
.combined-metric-card.trending { border-left: 4px solid #2ab673; }
.combined-metric-card.chart { border-left: 4px solid #d57ac7; }

.combined-breakups {
  display: grid;
  grid-template-columns: 1.15fr 1fr;
  gap: 20px;
  padding: 0 20px 20px;
}

.combined-breakup-card h3,
.combined-report-title {
  margin: 0 0 14px;
  color: #d57ac7;
  font-size: 20px;
  font-weight: 800;
}

.combined-chart-head {
  margin-bottom: 10px;
  color: #22344b;
  font-size: 18px;
  font-weight: 700;
}

.combined-report-section {
  padding: 0 20px 20px;
}

.combined-table-wrap {
  overflow-x: auto;
}

.combined-breakup-table,
.combined-year-table {
  width: 100%;
  border-collapse: collapse;
  text-align: center;
}

.combined-breakup-table th {
  background: #009c3b;
  color: #fff;
  padding: 8px 5px;
  font-size: 13px;
}

.combined-breakup-table td,
.combined-year-table td {
  border-bottom: 1px solid #e5e7eb;
  padding: 8px 6px;
}

.combined-report-title {
  background: #d57ac7;
  color: #fff;
  padding: 10px 14px;
  border-radius: 10px;
  margin: 0 0 10px;
}

.combined-year-head {
  background: #0b69c7;
  color: #fff;
  font-weight: 700;
  padding: 8px 14px;
  font-size: 15px;
  border-radius: 6px 6px 0 0;
  margin-top: 12px;
}

.combined-year-table th {
  background: #1761ae;
  color: #fff;
  padding: 8px;
  font-size: 13px;
}

.year-cell {
  font-weight: 700;
  color: #1f2937;
}

.positive {
  color: #009c3b;
  font-weight: 700;
}

.negative {
  color: #e53935;
  font-weight: 700;
}

@media (max-width: 1200px) {
  .combined-two-col,
  .combined-breakups,
  .combined-metrics-grid {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 768px) {
  .combined-backtest-page {
    padding: 16px;
  }

  .combined-strategy-stack-head {
    flex-direction: column;
    align-items: flex-start;
  }

  .combined-grid {
    grid-template-columns: 1fr;
  }

  .combined-actions {
    justify-content: stretch;
    flex-wrap: wrap;
  }

  .combined-actions button,
  .combined-add-btn {
    width: 100%;
  }
}
`;export{ue as default};
