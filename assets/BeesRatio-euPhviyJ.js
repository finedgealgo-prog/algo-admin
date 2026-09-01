import{r as h,j as e,P as C}from"./index-D-gWZDeH.js";import{C as L}from"./react-apexcharts.min-DP4VV9U6.js";import{P as A}from"./PageBreadCrumb-D0QDQGSV.js";import"./index-Chjiymov.js";const I="https://scanner.finedgealgo.com/scanner".replace(/\/+$/,""),B=[{value:"weekly",label:"Weekly"},{value:"bi-weekly",label:"Bi-Weekly"},{value:"monthly",label:"Monthly"},{value:"bi-monthly",label:"Bi-Monthly"}],T=[{value:"next_day",label:"Next Day"},{value:"current_day",label:"Current Day"}],$=["invested_capital","final_capital","total_return","gagr","max_drawdown","total_trades","win_rate_percent","risk_reward","avg_trades_per_year","total_switches","final_holding"],M={invested_capital:"Invested Capital",final_capital:"Final Capital",total_return:"Total Return",gagr:"CAGR",max_drawdown:"Max Drawdown",total_trades:"Total Trades",no_of_winners:"No. Of Winners",no_of_losers:"No. Of Losers",win_rate_percent:"Win Rate",avg_winners_roi_percent:"Avg. Winners ROI",avg_losers_roi_percent:"Avg. Losers ROI",risk_reward:"Risk To Reward",avg_trades_per_year:"Avg. Trades / Year",total_switches:"Total Switches",final_holding:"Final Holding"},O=new Set(["invested_capital","final_capital"]),F=new Set(["total_return","gagr","max_drawdown","win_rate_percent","avg_winners_roi_percent","avg_losers_roi_percent"]),q=new Set(["total_trades","avg_trades_per_year","total_switches","risk_reward"]);function z(t,r){return r==null||r===""?"--":t==="final_holding"?String(r).toUpperCase():O.has(t)?`₹${Number(r).toLocaleString("en-IN")}`:F.has(t)?`${Number(r)}%`:(q.has(t),String(r))}function S(t){const r=t.getFullYear(),m=String(t.getMonth()+1).padStart(2,"0"),d=String(t.getDate()).padStart(2,"0");return`${r}-${m}-${d}`}function P(){const t=new Date,r=new Date(t);return r.setFullYear(r.getFullYear()-1),{selectIndex:"",targetIndex:"GOLDBEES",ratio:"",investmentCapital:"1000000",rebalanceFrequency:"monthly",rebalanceDate:"1",alternativeRebalanceDay:"next_day",startDate:S(r),endDate:S(t)}}function W(t){const r=new Set;return t.map(d=>({label:String(d.label||d.value||"").trim(),value:String(d.value||d.label||"").trim()})).filter(d=>d.label&&d.value).filter(d=>/bees/i.test(d.label)||/bees/i.test(d.value)).filter(d=>{const n=d.value.toLowerCase();return r.has(n)?!1:(r.add(n),!0)}).sort((d,n)=>d.label.localeCompare(n.label))}function U(t){const r=t.map(n=>n.date),m={chart:{height:340,type:"area",background:"transparent",toolbar:{show:!0,tools:{download:!0,zoom:!0,pan:!0,reset:!0}},zoom:{enabled:!0},animations:{enabled:!1}},dataLabels:{enabled:!1},stroke:{curve:"smooth",width:[2,2]},colors:["#1284d0","#8b5cf6"],fill:{type:"gradient",gradient:{shadeIntensity:1,opacityFrom:.35,opacityTo:.02,stops:[0,90,100]}},xaxis:{type:"datetime",categories:r,labels:{datetimeUTC:!1}},yaxis:{labels:{formatter:n=>`₹${Math.round(n).toLocaleString("en-IN")}`}},tooltip:{x:{format:"dd MMM yyyy"},y:{formatter:n=>`₹${Math.round(n).toLocaleString("en-IN")}`}},legend:{position:"top"},grid:{borderColor:"#e5edf5"}},d=[{name:"Strategy",data:t.map(n=>n.portfolio)},{name:"Buy & Hold Index",data:t.map(n=>n.index)}];return{options:m,series:d}}const Y=`
  * { box-sizing: border-box; }

  .eod-page {
    min-height: 100vh;
    padding: 24px;
    background: #f6fbff;
    color: #162235;
  }

  .eod-shell {
    display: grid;
    gap: 16px;
    border-radius: 14px;
    background: #f6fbff;
    padding: 4px 0 12px;
  }

  .eod-card {
    border: 1px solid #90d1ff;
    border-radius: 14px;
    background: #ffffff;
    box-shadow: 0 4px 14px rgba(15, 23, 42, 0.08);
    overflow: hidden;
  }

  .eod-form-card {
    padding: 18px 18px 16px;
    overflow: visible;
  }

  .eod-topbar {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 16px;
    margin-bottom: 18px;
  }

  .eod-title-wrap h3 {
    margin: 0;
    font-size: 1.35rem;
    font-weight: 700;
    letter-spacing: -0.02em;
    color: #111827;
  }

  .eod-title-wrap p {
    margin: 6px 0 0;
    color: #5f6f82;
    font-size: 0.92rem;
  }

  .eod-chip {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    padding: 9px 14px;
    border-radius: 7px;
    border: 1px solid #90d1ff;
    background: #eef7ff;
    color: #1f2937;
    font-size: 0.82rem;
    font-weight: 700;
  }

  .eod-grid {
    display: grid;
    grid-template-columns: repeat(15, minmax(0, 1fr));
    gap: 14px;
    overflow: visible;
  }

  .eod-field {
    grid-column: span 3;
    min-width: 0;
  }

  .eod-field.eod-wide {
    grid-column: span 3;
  }

  .eod-field.eod-half {
    grid-column: span 3;
  }

  .eod-field.eod-small {
    grid-column: span 3;
  }

  .eod-field.eod-medium {
    grid-column: span 2;
  }

  .eod-field.eod-action {
    grid-column: span 3;
    align-self: end;
  }

  .eod-field label {
    display: block;
    margin: 0 0 8px;
    font-size: 0.83rem;
    font-weight: 700;
    color: #22344b;
  }

  .eod-required::after {
    content: "*";
    color: #2563eb;
    margin-left: 2px;
  }

  .eod-input,
  .eod-select {
    width: 100%;
    border: 1px solid #90d1ff;
    border-radius: 7px;
    background: #ffffff;
    color: #111827;
    padding: 10px 12px;
    font-size: 0.95rem;
    outline: none;
    transition: border-color .2s ease, box-shadow .2s ease, background .2s ease;
  }

  .eod-input:focus,
  .eod-select:focus {
    border-color: #69bbe8;
    box-shadow: 0 0 0 3px rgba(105, 187, 232, 0.18);
  }

  .eod-helper {
    margin-top: 4px;
    color: #73839a;
    font-size: 0.8rem;
  }

  .eod-actions {
    display: flex;
    justify-content: flex-end;
    margin-top: 0;
    height: 100%;
  }

  .eod-btn {
    border: 0;
    border-radius: 8px;
    padding: 10px 18px;
    font-size: 0.92rem;
    font-weight: 700;
    cursor: pointer;
    transition: transform .18s ease, box-shadow .18s ease, opacity .18s ease;
  }

  .eod-btn-primary {
    width: 100%;
    min-height: 42px;
    background: #1284d0;
    color: #ffffff;
    box-shadow: 0 10px 22px rgba(18, 132, 208, 0.22);
  }

  .eod-btn-primary:hover {
    background: #0f75ba;
  }

  .eod-btn:disabled {
    opacity: 0.7;
    cursor: not-allowed;
    box-shadow: none;
  }

  .eod-error {
    margin-top: 14px;
    border: 1px solid #fecaca;
    border-radius: 10px;
    padding: 10px 12px;
    background: #fff5f5;
    color: #b91c1c;
    font-size: 0.86rem;
  }

  .eod-section-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 12px;
    padding: 16px 18px 0;
  }

  .eod-section-header h4 {
    margin: 0;
    font-size: 1rem;
    font-weight: 700;
    color: #162235;
  }

  .eod-section-header span {
    color: #5f6f82;
    font-size: 0.84rem;
  }

  .eod-section-body {
    padding: 16px 18px 18px;
  }

  .eod-summary-grid {
    display: grid;
    grid-template-columns: repeat(4, minmax(0, 1fr));
    gap: 14px;
  }

  .eod-summary-card {
    border: 1px solid #d7ebff;
    border-radius: 12px;
    background: #f8fbff;
    padding: 14px;
  }

  .eod-summary-card span {
    display: block;
    color: #5f6f82;
    font-size: 0.78rem;
    font-weight: 700;
    margin-bottom: 6px;
  }

  .eod-summary-card strong {
    display: block;
    color: #162235;
    font-size: 0.95rem;
    font-weight: 700;
    word-break: break-word;
  }

  .eod-table-wrap {
    overflow-x: auto;
    border: 1px solid #d7ebff;
    border-radius: 12px;
  }

  .eod-table {
    width: 100%;
    border-collapse: collapse;
    font-size: 0.86rem;
  }

  .eod-table thead th {
    text-align: left;
    padding: 10px 12px;
    background: #eef7ff;
    color: #22344b;
    font-weight: 700;
    white-space: nowrap;
    border-bottom: 1px solid #d7ebff;
  }

  .eod-table tbody td {
    padding: 9px 12px;
    border-bottom: 1px solid #edf4fb;
    white-space: nowrap;
    color: #162235;
  }

  .eod-table tbody tr:last-child td {
    border-bottom: none;
  }

  .eod-table .eod-action-buy {
    color: #0f9d58;
    font-weight: 700;
  }

  .eod-table .eod-action-sell {
    color: #d93025;
    font-weight: 700;
  }

  .eod-empty {
    padding: 18px;
    text-align: center;
    color: #5f6f82;
    font-size: 0.88rem;
  }

  @media (max-width: 1200px) {
    .eod-grid {
      grid-template-columns: repeat(10, minmax(0, 1fr));
    }

    .eod-field,
    .eod-field.eod-wide,
    .eod-field.eod-half,
    .eod-field.eod-small,
    .eod-field.eod-medium,
    .eod-field.eod-action {
      grid-column: span 5;
    }

    .eod-summary-grid {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }
  }

  @media (max-width: 768px) {
    .eod-page {
      padding: 16px;
    }

    .eod-topbar {
      flex-direction: column;
      align-items: flex-start;
    }

    .eod-grid,
    .eod-summary-grid {
      grid-template-columns: 1fr;
    }

    .eod-field,
    .eod-field.eod-wide,
    .eod-field.eod-half,
    .eod-field.eod-small,
    .eod-field.eod-medium,
    .eod-field.eod-action {
      grid-column: span 1;
    }

    .eod-actions {
      justify-content: stretch;
    }

    .eod-btn-primary {
      width: 100%;
    }
  }
`;function Q(){var _,y;const[t,r]=h.useState(()=>P()),[m,d]=h.useState([]),[n,g]=h.useState(!0),[u,x]=h.useState(""),[b,f]=h.useState(!1),[s,j]=h.useState(null);h.useEffect(()=>{let a=!0;return(async()=>{g(!0),x("");try{const o=await fetch(`${I}/indexes`),c=await o.json().catch(()=>({}));if(!o.ok)throw new Error(c&&(c.detail||c.message)||"Unable to load bees indexes.");if(!a)return;const k=Array.isArray(c==null?void 0:c.items)?c.items:Array.isArray(c)?c:[],v=W(k);d(v),r(N=>{var w;return{...N,selectIndex:N.selectIndex||((w=v[0])==null?void 0:w.value)||""}})}catch(o){if(!a)return;d([]),x(o instanceof Error?o.message:"Unable to load bees indexes.")}finally{a&&g(!1)}})(),()=>{a=!1}},[]);const E=h.useMemo(()=>[{label:"GOLDBEES",value:"GOLDBEES"}],[]),D=!!(t.selectIndex&&t.targetIndex&&t.ratio&&t.investmentCapital&&t.rebalanceFrequency&&t.rebalanceDate&&t.alternativeRebalanceDay&&t.startDate&&t.endDate);function l(a,i){r(o=>({...o,[a]:i}))}async function R(a){if(a.preventDefault(),!D){x("All required fields must be filled.");return}if(t.startDate>t.endDate){x("Start date should be earlier than or equal to end date.");return}x(""),f(!0),j(null);try{const i=await fetch(`${I}/bees_ratio_backtest`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({index:t.selectIndex,target_index:t.targetIndex.toLowerCase()==="goldbees"?"gold_bees":t.targetIndex,ratio:Number(t.ratio),starting_capital:Number(t.investmentCapital),rebalance_frequency:t.rebalanceFrequency,rebalance_date:Number(t.rebalanceDate),alternative_rebalance_day:t.alternativeRebalanceDay,start_date:t.startDate,end_date:t.endDate})}),o=await i.json().catch(()=>({}));if(!i.ok)throw new Error(o&&(o.detail||o.message)||"Backtest failed.");j(o)}catch(i){x(i instanceof Error?i.message:"Backtest failed.")}finally{f(!1)}}const p=h.useMemo(()=>s?U(s.equity_curve_json):null,[s]);return e.jsxs(e.Fragment,{children:[e.jsx(C,{title:"FinEdge Scanner | Bees Ratio",description:"Run a two-asset bees ratio rotation backtest in the scanner workspace."}),e.jsx("style",{children:Y}),e.jsxs("div",{className:"eod-page",children:[e.jsx(A,{pageTitle:"Bees Ratio"}),e.jsxs("div",{className:"eod-shell",children:[e.jsxs("section",{className:"eod-card eod-form-card",children:[e.jsxs("div",{className:"eod-topbar",children:[e.jsxs("div",{className:"eod-title-wrap",children:[e.jsx("h3",{children:"finEdge Scanner"}),e.jsx("p",{children:"Bees ratio rotation backtest — switches between index and target index on rebalance dates based on the price ratio."})]}),e.jsx("div",{className:"eod-chip",children:e.jsx("span",{children:n?"Loading bees indexes...":`${m.length} bees index option${m.length===1?"":"s"}`})})]}),e.jsxs("form",{onSubmit:R,children:[e.jsxs("div",{className:"eod-grid",children:[e.jsxs("div",{className:"eod-field eod-small",children:[e.jsx("label",{className:"eod-required",children:"Select Index"}),e.jsxs("select",{className:"eod-input",value:t.selectIndex,onChange:a=>l("selectIndex",a.target.value),disabled:n,children:[e.jsx("option",{value:"",children:"Select Index"}),m.map(a=>e.jsx("option",{value:a.value,children:a.label},a.value))]})]}),e.jsxs("div",{className:"eod-field eod-small",children:[e.jsx("label",{className:"eod-required",children:"Target Index"}),e.jsx("select",{className:"eod-input",value:t.targetIndex,onChange:a=>l("targetIndex",a.target.value),children:E.map(a=>e.jsx("option",{value:a.value,children:a.label},a.value))})]}),e.jsxs("div",{className:"eod-field eod-medium",children:[e.jsx("label",{className:"eod-required",children:"Ratio"}),e.jsx("input",{className:"eod-input",type:"number",step:"0.01",placeholder:"Enter ratio",value:t.ratio,onChange:a=>l("ratio",a.target.value)})]}),e.jsxs("div",{className:"eod-field eod-medium",children:[e.jsx("label",{className:"eod-required",children:"Investment Capital"}),e.jsx("input",{className:"eod-input",type:"number",step:"1000",placeholder:"1000000",value:t.investmentCapital,onChange:a=>l("investmentCapital",a.target.value)})]}),e.jsxs("div",{className:"eod-field eod-small",children:[e.jsx("label",{className:"eod-required",children:"Rebalance Frequency"}),e.jsx("select",{className:"eod-input",value:t.rebalanceFrequency,onChange:a=>l("rebalanceFrequency",a.target.value),children:B.map(a=>e.jsx("option",{value:a.value,children:a.label},a.value))})]}),e.jsxs("div",{className:"eod-field eod-medium",children:[e.jsx("label",{className:"eod-required",children:"Rebalance Date"}),e.jsx("input",{className:"eod-input",type:"number",min:1,max:31,placeholder:"Day of month (1-31) or weekday (1=Mon..5=Fri)",value:t.rebalanceDate,onChange:a=>l("rebalanceDate",a.target.value)}),e.jsx("div",{className:"eod-helper",children:"Monthly/Bi-Monthly: day of month. Weekly/Bi-Weekly: 1=Mon...5=Fri."})]}),e.jsxs("div",{className:"eod-field eod-small",children:[e.jsx("label",{className:"eod-required",children:"Alternative Rebalance Day"}),e.jsx("select",{className:"eod-input",value:t.alternativeRebalanceDay,onChange:a=>l("alternativeRebalanceDay",a.target.value),children:T.map(a=>e.jsx("option",{value:a.value,children:a.label},a.value))})]}),e.jsxs("div",{className:"eod-field eod-medium",children:[e.jsx("label",{className:"eod-required",children:"Start Date"}),e.jsx("input",{className:"eod-input",type:"date",value:t.startDate,onChange:a=>l("startDate",a.target.value)})]}),e.jsxs("div",{className:"eod-field eod-medium",children:[e.jsx("label",{className:"eod-required",children:"End Date"}),e.jsx("input",{className:"eod-input",type:"date",value:t.endDate,onChange:a=>l("endDate",a.target.value)})]}),e.jsxs("div",{className:"eod-field eod-action",children:[e.jsx("label",{children:" "}),e.jsx("div",{className:"eod-actions",children:e.jsx("button",{type:"submit",className:"eod-btn eod-btn-primary",disabled:n||b,children:b?"Running Backtest...":"Run Backtest"})})]})]}),e.jsx("div",{className:"eod-helper",children:"Current scanner API response-la `BEES` match aagura names mattum list pannrom."})]}),u?e.jsx("div",{className:"eod-error",children:u}):null]}),s?e.jsxs(e.Fragment,{children:[e.jsxs("section",{className:"eod-card",children:[e.jsxs("div",{className:"eod-section-header",children:[e.jsx("h4",{children:"BACKTEST RESULTS"}),e.jsxs("span",{children:[t.selectIndex," vs ",t.targetIndex," · ratio threshold ",t.ratio]})]}),e.jsx("div",{className:"eod-section-body",children:e.jsx("div",{className:"eod-summary-grid",children:$.map(a=>e.jsxs("div",{className:"eod-summary-card",children:[e.jsx("span",{children:M[a]??a}),e.jsx("strong",{children:z(a,s.metrics[a])})]},a))})})]}),e.jsxs("section",{className:"eod-card",children:[e.jsxs("div",{className:"eod-section-header",children:[e.jsx("h4",{children:"BIGGEST WINNER / LOSER"}),e.jsx("span",{children:"Round-trip trade with the best and worst ROI"})]}),e.jsx("div",{className:"eod-section-body",children:e.jsxs("div",{className:"eod-summary-grid",children:[e.jsxs("div",{className:"eod-summary-card",children:[e.jsx("span",{children:"Biggest Winner"}),e.jsx("strong",{children:s.metrics.biggest_winner_stock?`${s.metrics.biggest_winner_stock} · +${s.metrics.biggest_winner_roi_percent}%`:"--"})]}),e.jsxs("div",{className:"eod-summary-card",children:[e.jsx("span",{children:"Winner Holding"}),e.jsx("strong",{children:s.metrics.biggest_winner_holding_start_date?`${s.metrics.biggest_winner_holding_start_date} → ${s.metrics.biggest_winner_holding_end_date} (${s.metrics.biggest_winner_holding_days}d)`:"--"})]}),e.jsxs("div",{className:"eod-summary-card",children:[e.jsx("span",{children:"Biggest Loser"}),e.jsx("strong",{children:s.metrics.biggest_loser_stock?`${s.metrics.biggest_loser_stock} · ${s.metrics.biggest_loser_roi_percent}%`:"--"})]}),e.jsxs("div",{className:"eod-summary-card",children:[e.jsx("span",{children:"Loser Holding"}),e.jsx("strong",{children:s.metrics.biggest_loser_holding_start_date?`${s.metrics.biggest_loser_holding_start_date} → ${s.metrics.biggest_loser_holding_end_date} (${s.metrics.biggest_loser_holding_days}d)`:"--"})]})]})})]}),e.jsxs("section",{className:"eod-card",children:[e.jsxs("div",{className:"eod-section-header",children:[e.jsx("h4",{children:"DRAWDOWN DETAIL"}),e.jsx("span",{children:"Largest peak-to-trough decline in the strategy's portfolio value"})]}),e.jsx("div",{className:"eod-section-body",children:e.jsxs("div",{className:"eod-summary-grid",children:[e.jsxs("div",{className:"eod-summary-card",children:[e.jsx("span",{children:"Peak → Bottom"}),e.jsxs("strong",{children:[s.metrics.drawdown_start_date??"--"," → ",s.metrics.drawdown_bottom_date??"--"]})]}),e.jsxs("div",{className:"eod-summary-card",children:[e.jsx("span",{children:"Drop"}),e.jsx("strong",{children:s.metrics.drawdown_drop_amount!==null?`₹${s.metrics.drawdown_drop_amount.toLocaleString("en-IN")} (${s.metrics.drawdown_drop_percent}%)`:"--"})]}),e.jsxs("div",{className:"eod-summary-card",children:[e.jsx("span",{children:"Duration"}),e.jsxs("strong",{children:[s.metrics.drawdown_duration_days," days"]})]}),e.jsxs("div",{className:"eod-summary-card",children:[e.jsx("span",{children:"Recovered By"}),e.jsx("strong",{children:s.metrics.drawdown_recovery_date??"Not yet recovered"})]})]})})]}),e.jsxs("section",{className:"eod-card",children:[e.jsxs("div",{className:"eod-section-header",children:[e.jsx("h4",{children:"RATIO CHECK LOG"}),e.jsxs("span",{children:["Every rebalance date checked · formula: ",t.selectIndex," price ÷ ",t.targetIndex," price"]})]}),e.jsx("div",{className:"eod-section-body",children:s.ratio_checks.length?e.jsx("div",{className:"eod-table-wrap",children:e.jsxs("table",{className:"eod-table",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Date"}),e.jsx("th",{children:`Index (${((_=s.ratio_checks[0])==null?void 0:_.index_symbol)??"index"}) Price`}),e.jsx("th",{children:`Target (${((y=s.ratio_checks[0])==null?void 0:y.target_symbol)??"target"}) Price`}),e.jsx("th",{children:"Ratio = Index ÷ Target"}),e.jsx("th",{children:"Threshold"}),e.jsx("th",{children:"Holding Before"}),e.jsx("th",{children:"Action"})]})}),e.jsx("tbody",{children:s.ratio_checks.map((a,i)=>e.jsxs("tr",{children:[e.jsx("td",{children:a.date}),e.jsxs("td",{children:["₹",a.index_price.toLocaleString("en-IN")]}),e.jsxs("td",{children:["₹",a.target_price.toLocaleString("en-IN")]}),e.jsxs("td",{children:[a.index_price.toLocaleString("en-IN")," ÷ ",a.target_price.toLocaleString("en-IN")," = ",e.jsx("strong",{children:a.ratio})]}),e.jsx("td",{children:a.threshold}),e.jsx("td",{children:a.holding_before}),e.jsx("td",{className:a.action==="NO_ACTION"?"":"eod-action-buy",children:a.action})]},`${a.date}-${i}`))})]})}):e.jsx("div",{className:"eod-empty",children:"No rebalance dates fell inside this date range."})})]}),e.jsxs("section",{className:"eod-card",children:[e.jsxs("div",{className:"eod-section-header",children:[e.jsx("h4",{children:"EQUITY CURVE"}),e.jsxs("span",{children:["Strategy vs Buy & Hold ",t.selectIndex]})]}),e.jsx("div",{className:"eod-section-body",children:p?e.jsx(L,{options:p.options,series:p.series,type:"area",height:340}):null})]}),e.jsxs("section",{className:"eod-card",children:[e.jsxs("div",{className:"eod-section-header",children:[e.jsx("h4",{children:"TRADE LOG"}),e.jsxs("span",{children:[s.trade_history.length," switch event",s.trade_history.length===1?"":"s"]})]}),e.jsx("div",{className:"eod-section-body",children:s.trade_history.length?e.jsx("div",{className:"eod-table-wrap",children:e.jsxs("table",{className:"eod-table",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Date"}),e.jsx("th",{children:"Action"}),e.jsx("th",{children:"Symbol"}),e.jsx("th",{children:"Price"}),e.jsx("th",{children:"Qty"}),e.jsx("th",{children:"Cash After"}),e.jsx("th",{children:"Portfolio Value After"})]})}),e.jsx("tbody",{children:s.trade_history.map((a,i)=>e.jsxs("tr",{children:[e.jsx("td",{children:a.date}),e.jsx("td",{className:a.action==="BUY"?"eod-action-buy":"eod-action-sell",children:a.action}),e.jsx("td",{children:a.symbol}),e.jsxs("td",{children:["₹",a.price.toLocaleString("en-IN")]}),e.jsx("td",{children:a.qty.toLocaleString("en-IN")}),e.jsxs("td",{children:["₹",a.cash_after.toLocaleString("en-IN")]}),e.jsxs("td",{children:["₹",a.portfolio_value_after.toLocaleString("en-IN")]})]},`${a.date}-${a.action}-${a.symbol}-${i}`))})]})}):e.jsx("div",{className:"eod-empty",children:"No switches happened in this date range — the ratio never crossed the threshold on a rebalance date."})})]})]}):null]})]})]})}export{Q as default};
