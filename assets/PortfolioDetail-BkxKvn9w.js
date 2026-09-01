import{h as qe,r as u,j as e,P as Ue,L as He}from"./index-Cl6ZtIcp.js";import{C as Be}from"./react-apexcharts.min-CkHC8ZZX.js";import{S as Ge}from"./StatusToast-DSsE9FNG.js";import"./index-Chjiymov.js";const q="https://scanner.finedgealgo.com/scanner".replace(/\/+$/,""),Ye=[{value:20,label:"20 Sec"},{value:30,label:"30 Sec"},{value:60,label:"60 Sec"}],Qe=[5,10,15,50,100],Pe="__custom_update_investments__",We={rowSelectable:!0,hideRowSelectionCheckbox:!1,multiSelectable:!0,showToolbar:!0,columnHideable:!0,columnSortable:!0,columnPinnable:!0,rowHover:!0,rowStriped:!0,showPaginator:!0,loadingStatus:!1,columnResizable:!1};function Je(r,s){return r.replace(/(^|[{}])\s*([^@{}][^{]*)\{/g,(n,g,i)=>{const x=i.split(",").map(f=>f.trim()).filter(Boolean).map(f=>f.startsWith(s)?f:`${s} ${f}`).join(", ");return x?`${g}
  ${x} {`:n})}function a(r,s=0){const n=Number(r);return Number.isFinite(n)?n:s}function z(r){return`₹ ${a(r).toLocaleString("en-IN",{minimumFractionDigits:2,maximumFractionDigits:2})}`}function V(r){return`${a(r).toFixed(2)}%`}function K(r){return Math.round(a(r)).toLocaleString("en-IN")}function se(r){if(!r)return"N/A";const s=new Date(String(r));return Number.isNaN(s.getTime())?String(r):new Intl.DateTimeFormat("en-IN",{dateStyle:"medium",timeStyle:"short"}).format(s)}function Xe(r){if(!r)return"";const s=new Date(String(r));return Number.isNaN(s.getTime())?"":s.toISOString().slice(0,10)}const be=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];function Ze(r,s){const n={},g={},i=[];return(r||[]).forEach(x=>{const f=String(x.month||"").split("-");if(f.length!==2)return;const j=f[0],m=Number(f[1]);n[j]||(n[j]={},g[j]={},i.push(j)),n[j][m]=a(x.Monthly_ROI_Pct);const h=a(x.Start_Value),b=a(x.End_Value);g[j][m]={cc:h,op:h-s,pnl:b-h}}),i.sort((x,f)=>Number(x)-Number(f)),{dataMap:n,detailMap:g,years:i}}function Ke(r){const s=r.map(h=>a(h.cumulative_pnl)),n=r.map((h,b)=>({x:h.date,y:s[b]})),i=(s[s.length-1]??0)>=0?"#10b981":"#ef4444",x=s.length?Math.min(...s,0):0,f=s.length?Math.max(...s,0):0,j=Math.max((f-x)*.1,1),m={chart:{height:380,type:"area",background:"transparent",toolbar:{show:!0,tools:{download:!0,zoom:!0,pan:!0,reset:!0}},zoom:{enabled:!0},animations:{enabled:!1}},dataLabels:{enabled:!1},stroke:{curve:"smooth",width:2},colors:[i],series:[{name:"Cumulative P&L",data:n}],xaxis:{type:"datetime",labels:{datetimeUTC:!1,style:{colors:"#555",fontSize:"11px"}},axisBorder:{show:!1},axisTicks:{show:!1}},yaxis:{labels:{formatter:h=>`₹${Number(h).toLocaleString("en-IN",{maximumFractionDigits:0})}`,style:{colors:"#555",fontSize:"11px"}},min:Math.floor(x-j),max:Math.ceil(f+j)},annotations:{yaxis:[{y:0,borderColor:"#888",borderWidth:1.5,strokeDashArray:5,label:{text:"Break-even",borderColor:"#888",position:"left",offsetX:12,style:{color:"#555",fontSize:"11px",background:"#f5f5f5"}}}]},fill:{type:"gradient",gradient:{type:"vertical",shadeIntensity:0,colorStops:[[{offset:0,color:i,opacity:.35},{offset:100,color:i,opacity:.02}]]}},grid:{borderColor:"#e9ecef",strokeDashArray:4},legend:{show:!1},title:{text:"Daily P&L",align:"left",style:{color:"#2a2a2a",fontWeight:"bold",fontSize:"16px"}},tooltip:{shared:!0,intersect:!1,x:{format:"dd MMM yyyy"},custom:({dataPointIndex:h})=>{const b=s[h]??0;return`
          <div style="min-width:200px;padding:14px 16px;background:#fff;border:1px solid #e5e7eb;border-radius:14px;box-shadow:0 12px 32px rgba(15,23,42,0.12);">
            <div style="color:#4b5563;font-size:12px;margin-bottom:6px;">
              Cumulative P&amp;L: <span style="color:${b>=0?"#10b981":"#ef4444"};font-weight:700;">₹${b.toLocaleString("en-IN",{maximumFractionDigits:2,minimumFractionDigits:2})}</span>
            </div>
          </div>
        `}}};return{options:m,series:m.series||[]}}function et(r){if(Array.isArray(r)){const n=r.map(g=>String(g??"").trim()).filter(Boolean);return n.length?n.join(", "):"N/A"}return String(r??"").trim()||"N/A"}function de(r){return a(r.position_qty??r.qty??r.quantity)}function Re(r,s){const n=s==="dhan"?r.dhan_token??r.kite_token??r.token??r.tokens??r.instrument_token??r.exchange_token:r.kite_token??r.token??r.tokens??r.instrument_token??r.exchange_token;return String(n??"").trim()}function ze(r){return a(r.exited_qty??r.exit_qty??r.position_qty??r.qty??r.quantity)}function tt(r){return r.exit_overall_pnl_amount!==void 0&&r.exit_overall_pnl_amount!==null?a(r.exit_overall_pnl_amount):a(r.overall_pnl_amount)}function nt(r){const s=a(r.entry_price),n=ze(r);return s*n}function Ce(r,s){if(!s)return!1;const n=new Date(r).toDateString(),g=new Date(String(s)).toDateString();return n===g}function ce(r){return a(r.rank??r.Rank,Number.MAX_SAFE_INTEGER)}function rt(r,s,n,g){const i={totalHoldings:s.length,currentInvestment:0,currentValue:0,totalReturnsValue:0,totalReturnsPercent:0,dayReturnsValue:0,dayReturnsPercent:0,realizedReturnsValue:0,realizedReturnsPercent:0,unrealizedReturnsValue:0,unrealizedReturnsPercent:0};s.forEach(b=>{const C=a(b.entry_price),_=de(b),P=a(b.ltp,C),T=a(b.yesterday_close,P),S=Ce(g,b.entry_date)?(P-C)*_:(P-T)*_;i.currentInvestment+=C*_,i.currentValue+=P*_,i.dayReturnsValue+=S});const x=i.currentValue-i.currentInvestment;i.dayReturnsPercent=i.currentValue>0?i.dayReturnsValue/i.currentValue*100:0;let f=0,j=0;n.forEach(b=>{f+=tt(b),j+=nt(b)});const m=a(r==null?void 0:r.starting_capital,1e6);i.realizedReturnsValue=f,i.realizedReturnsPercent=m>0?f/m*100:0,i.totalReturnsValue=x+f;const h=i.currentInvestment+j;return i.totalReturnsPercent=h>0?i.totalReturnsValue/h*100:0,i.unrealizedReturnsValue=a(r==null?void 0:r.unrealized_returns_value,x),i.unrealizedReturnsPercent=h>0?i.unrealizedReturnsValue/h*100:0,i}function at(r,s){const n=Array.isArray(r.investments)?r.investments:[];let g=0,i=0,x=0,f=0;const j=n.map(_=>{if(a(_.position_status,1)!==1)return _;const P=a(_.entry_price),T=de(_),U=Re(_,r.broker),S=a(s[U],a(_.ltp,P)),A=a(_.yesterday_close,S),H=(S-P)*T,I=P>0?(S-P)/P*100:0,d=(S-A)*T,Y=A>0?(S-A)/A*100:0;return g+=P*T,i+=S*T,x+=d,f+=H,!U||!Number.isFinite(S)||S<=0?_:{..._,ltp:Number(S.toFixed(2)),overall_pnl_amount:Number(H.toFixed(2)),overall_pnl_percent:Number(I.toFixed(2)),today_pnl:Number(d.toFixed(2)),today_change:Number(Y.toFixed(2))}}),h=a(r.realized_returns_value??r.realized_returns)+f,b=i>0?x/i*100:0,C=g>0?h/g*100:0;return{...r,investments:j,current_investment:Number(g.toFixed(2)),investment_value:Number(g.toFixed(2)),current_value:Number(i.toFixed(2)),day_returns:Number(x.toFixed(2)),day_returns_value:Number(x.toFixed(2)),day_returns_percent:Number(b.toFixed(2)),unrealized_returns:Number(f.toFixed(2)),unrealized_returns_value:Number(f.toFixed(2)),returns:Number(h.toFixed(2)),total_returns_value:Number(h.toFixed(2)),return_pct:Number(C.toFixed(2)),returns_percent:Number(C.toFixed(2)),total_returns_percent:Number(C.toFixed(2))}}function te(r){return r==null?"":typeof r=="string"?r:typeof r=="number"||typeof r=="boolean"?String(r):JSON.stringify(r)}function ot(r,s){const n=Number(r),g=Number(s);return Number.isFinite(n)&&Number.isFinite(g)?n-g:te(r).localeCompare(te(s),void 0,{sensitivity:"base",numeric:!0})}function ge(r){return Object.values(r).map(s=>te(s)).join("|")}function le({title:r,rows:s,columns:n,searchPlaceholder:g}){const[i,x]=u.useState(We),[f,j]=u.useState(""),[m,h]=u.useState(null),[b,C]=u.useState(15),[_,P]=u.useState(0),[T,U]=u.useState([]),[S,A]=u.useState(()=>n.map(o=>o.key)),H=u.useDeferredValue(f),I=u.useMemo(()=>{const o=H.trim().toLowerCase();return o?s.filter(c=>n.some(w=>w.searchable===!1?!1:te(c[w.key]).toLowerCase().includes(o))):s},[n,H,s]),d=u.useMemo(()=>{if(!m||!i.columnSortable)return I;const o=[...I];return o.sort((c,w)=>{const R=ot(c[m.key],w[m.key]);return m.direction==="asc"?R:-R}),o},[I,m]),Y=i.showPaginator?Math.max(1,Math.ceil(d.length/b)):1,X=Math.min(_,Y-1),D=i.showPaginator?X*b:0,L=i.showPaginator?d.slice(D,D+b):d,ee=L.length>0&&L.every(o=>T.includes(ge(o))),B=n.filter(o=>S.includes(o.key));u.useEffect(()=>{A(o=>{const c=n.map(E=>E.key),w=c.filter(E=>o.includes(E)),R=c.filter(E=>!w.includes(E));return[...w,...R]})},[n]),u.useEffect(()=>{P(0)},[H,b]);const ne=o=>{i.columnSortable&&h(c=>!c||c.key!==o?{key:o,direction:"asc"}:c.direction==="asc"?{key:o,direction:"desc"}:null)},$=o=>{i.rowSelectable&&U(c=>{const w=c.includes(o);return i.multiSelectable?w?c.filter(R=>R!==o):[...c,o]:w?[]:[o]})},re=()=>{if(!i.rowSelectable)return;const o=L.map(c=>ge(c));U(c=>{if(ee)return c.filter(R=>!o.includes(R));const w=new Set(i.multiSelectable?c:[]);return o.forEach(R=>w.add(R)),Array.from(w)})},Q=o=>{A(c=>c.includes(o)?c.length===1?c:c.filter(w=>w!==o):[...c,o])};return e.jsxs("section",{className:"scanner-portfolio-table-card",children:[e.jsxs("div",{className:"eod-section-header",children:[e.jsx("h4",{children:r}),e.jsxs("span",{children:[s.length," rows"]})]}),e.jsxs("div",{className:"eod-section-body",children:[e.jsxs("div",{className:"eod-option-row",children:[e.jsxs("label",{className:"eod-check",children:[e.jsx("input",{type:"checkbox",checked:i.rowSelectable,onChange:o=>x(c=>({...c,rowSelectable:o.target.checked}))})," Row Selectable"]}),e.jsxs("label",{className:"eod-check",children:[e.jsx("input",{type:"checkbox",checked:i.hideRowSelectionCheckbox,onChange:o=>x(c=>({...c,hideRowSelectionCheckbox:o.target.checked}))})," Hide checkbox"]}),e.jsxs("span",{className:"eod-radio-group",children:[e.jsxs("label",{className:"eod-radio",children:[e.jsx("input",{type:"radio",checked:!i.multiSelectable,onChange:()=>x(o=>({...o,multiSelectable:!1}))})," Single Selectable"]}),e.jsxs("label",{className:"eod-radio",children:[e.jsx("input",{type:"radio",checked:i.multiSelectable,onChange:()=>x(o=>({...o,multiSelectable:!0}))})," Multiple Selectable"]})]}),e.jsxs("label",{className:"eod-check",children:[e.jsx("input",{type:"checkbox",checked:i.showToolbar,onChange:o=>x(c=>({...c,showToolbar:o.target.checked}))})," Show Toolbar"]}),e.jsxs("label",{className:"eod-check",children:[e.jsx("input",{type:"checkbox",checked:i.columnHideable,onChange:o=>x(c=>({...c,columnHideable:o.target.checked}))})," Column Hiding"]}),e.jsxs("label",{className:"eod-check",children:[e.jsx("input",{type:"checkbox",checked:i.columnSortable,onChange:o=>x(c=>({...c,columnSortable:o.target.checked}))})," Column Sorting"]}),e.jsxs("label",{className:"eod-check",children:[e.jsx("input",{type:"checkbox",checked:i.columnPinnable,onChange:o=>x(c=>({...c,columnPinnable:o.target.checked}))})," Column Pinning"]}),e.jsxs("label",{className:"eod-check",children:[e.jsx("input",{type:"checkbox",checked:i.rowHover,onChange:o=>x(c=>({...c,rowHover:o.target.checked}))})," Hover"]}),e.jsxs("label",{className:"eod-check",children:[e.jsx("input",{type:"checkbox",checked:i.rowStriped,onChange:o=>x(c=>({...c,rowStriped:o.target.checked}))})," Striped"]}),e.jsxs("label",{className:"eod-check",children:[e.jsx("input",{type:"checkbox",checked:i.showPaginator,onChange:o=>x(c=>({...c,showPaginator:o.target.checked}))})," Show Paginator"]}),e.jsxs("label",{className:"eod-check",children:[e.jsx("input",{type:"checkbox",checked:i.loadingStatus,onChange:o=>x(c=>({...c,loadingStatus:o.target.checked}))})," Loading Status"]}),e.jsxs("label",{className:"eod-check",children:[e.jsx("input",{type:"checkbox",checked:i.columnResizable,onChange:o=>x(c=>({...c,columnResizable:o.target.checked}))})," Column Resizable"]})]}),i.showToolbar?e.jsxs("div",{className:"eod-toolbar",children:[e.jsxs("div",{className:"eod-toolbar-left",children:[e.jsxs("span",{className:"eod-toolbar-badge",children:[s.length," rows"]}),e.jsx("input",{className:"eod-input",value:f,onChange:o=>j(o.target.value),placeholder:g})]}),e.jsx("div",{className:"eod-toolbar-right",children:i.columnHideable?e.jsx("div",{className:"eod-pill-wrap",children:n.map(o=>e.jsx("button",{type:"button",className:`eod-pill ${S.includes(o.key)?"active":""}`,onClick:()=>Q(o.key),children:o.label},o.key))}):null})]}):null,e.jsxs("div",{className:"eod-table-wrap",children:[i.loadingStatus?e.jsxs("div",{className:"eod-loading",children:[e.jsx("span",{className:"eod-spinner"}),"Loading rows..."]}):null,I.length===0?e.jsx("div",{className:"eod-empty",children:"No rows available for the current filters."}):e.jsx("div",{className:"eod-table-scroll",children:e.jsxs("table",{className:"eod-table",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[i.rowSelectable&&!i.hideRowSelectionCheckbox?e.jsx("th",{className:"eod-selection-col center",children:e.jsx("input",{type:"checkbox",checked:ee,onChange:re})}):null,B.map(o=>e.jsx("th",{className:o.align==="right"?"right":o.align==="center"?"center":"",children:e.jsxs("button",{type:"button",onClick:()=>ne(o.key),children:[o.label,(m==null?void 0:m.key)===o.key?m.direction==="asc"?"↑":"↓":i.columnSortable?"↕":""]})},o.key))]})}),e.jsx("tbody",{children:L.map((o,c)=>{const w=ge(o),R=T.includes(w);return e.jsxs("tr",{className:[i.rowStriped&&c%2===1?"striped":"",i.rowHover?"hoverable":"",R?"selected":""].join(" "),onClick:()=>{i.rowSelectable&&i.hideRowSelectionCheckbox&&$(w)},children:[i.rowSelectable&&!i.hideRowSelectionCheckbox?e.jsx("td",{className:"center",children:e.jsx("input",{type:"checkbox",checked:R,onChange:()=>$(w)})}):null,B.map(E=>e.jsx("td",{className:E.align==="right"?"right":E.align==="center"?"center":"",children:E.formatter?E.formatter(o,D+c):te(o[E.key]??"—")},E.key))]},w)})})]})})]}),i.showPaginator&&I.length>0?e.jsxs("div",{className:"eod-pagination",children:[e.jsxs("div",{className:"eod-pagination-info",children:["Showing ",Math.min(D+1,I.length)," to ",Math.min(D+b,I.length)," of ",I.length," rows"]}),e.jsxs("div",{className:"eod-pagination-controls",children:[e.jsx("select",{className:"eod-select",style:{width:"92px",minWidth:"92px"},value:b,onChange:o=>C(Number(o.target.value)),children:Qe.map(o=>e.jsxs("option",{value:o,children:[o,"/page"]},o))}),e.jsx("button",{type:"button",className:"eod-mini-btn",disabled:X===0,onClick:()=>P(o=>Math.max(0,o-1)),children:"Prev"}),e.jsxs("span",{className:"eod-pagination-info",children:["Page ",X+1," / ",Y]}),e.jsx("button",{type:"button",className:"eod-mini-btn",disabled:X>=Y-1,onClick:()=>P(o=>Math.min(Y-1,o+1)),children:"Next"})]})]}):null]})]})}function it(r,s){const n=a(r==null?void 0:r.current_value),g=Math.max(1,a(r==null?void 0:r.entry_rank,0)),i=g>0?n/g:0;let x=0;const f=[...s].sort((m,h)=>ce(m)-ce(h)).slice(0,g).map(m=>{const h=a(m.last_price),b=h>0?Math.floor(i/h):0,C=b*h;return x+=C,{Investment:Number(i.toFixed(2)),last_price:Number(h.toFixed(2)),qty:b,rank:ce(m),universe:String(m.universe??""),sector:String(m.sector??""),score:Number(a(m.score).toFixed(6)),symbol:String(m.symbol??""),amount:Number(C.toFixed(2)),perf_1M:Number(a(m.perf_1M).toFixed(6)),perf_3M:Number(a(m.perf_3M).toFixed(6)),perf_6M:Number(a(m.perf_6M).toFixed(6)),perf_1Y:Number(a(m.perf_1Y).toFixed(6)),vol_1M:Number(a(m.vol_1M).toFixed(6)),vol_3M:Number(a(m.vol_3M).toFixed(6)),vol_6M:Number(a(m.vol_6M).toFixed(6)),vol_1Y:Number(a(m.vol_1Y).toFixed(6))}}),j={total_capital:n,used_capital:Number(x.toFixed(2)),remaining_capital:Number((n-x).toFixed(2))};return{suggestions:f,summary:j}}function st(){return e.jsx("span",{className:"scanner-portfolio-detail-spinner","aria-hidden":"true"})}function J({value:r,fallback:s="Live"}){if(!Number.isFinite(r))return e.jsx("span",{className:"summary-badge neutral",children:s});const n=Number(r),g=n>0?"positive":n<0?"negative":"neutral",i=n>0?"↑":n<0?"↓":"•",x=n>0?`+${V(n)}`:V(n);return e.jsxs("span",{className:`summary-badge ${g}`,children:[e.jsx("span",{className:"summary-badge-arrow","aria-hidden":"true",children:i}),x]})}function xt({combined:r=!1}){var ye,_e,ve,je,ke,we;const{strategyId:s=""}=qe(),[n,g]=u.useState(null),[i,x]=u.useState(!0),[f,j]=u.useState(""),[m,h]=u.useState(null),[b,C]=u.useState(null),[_,P]=u.useState(null),[T,U]=u.useState(!1),[S,A]=u.useState(!1),[H,I]=u.useState(!1),[d,Y]=u.useState(null),[X,D]=u.useState(!1),[L,ee]=u.useState([]),[B,ne]=u.useState([]),[$,re]=u.useState(null),[Q,o]=u.useState(20),[c,w]=u.useState(20),[R,E]=u.useState(()=>new Date);function pe(t){h({id:Date.now(),message:t,variant:"success"})}async function ue(t){try{t!=null&&t.silent||x(!0),j("");const p=r?`${q}/live_prices/combained_strategy/${encodeURIComponent(s)}`:`${q}/live_prices/strategy/${encodeURIComponent(s)}`,y=r?`${q}/combainedDetailPortfolio/${encodeURIComponent(s)}`:`${q}/detailPortfolio/${encodeURIComponent(s)}`;let v,l;try{if(v=await fetch(p),l=await v.json().catch(()=>({})),!v.ok)throw new Error(l&&typeof l=="object"&&("detail"in l||"message"in l)?String(l.detail||l.message):"Live portfolio endpoint unavailable.")}catch{if(v=await fetch(y),l=await v.json().catch(()=>({})),!v.ok)throw new Error(l&&typeof l=="object"&&("detail"in l||"message"in l)?String(l.detail||l.message):"Unable to load portfolio detail.")}g(l&&typeof l=="object"?l:null)}catch(p){j(p instanceof Error?p.message:"Unable to load portfolio detail.")}finally{t!=null&&t.silent||x(!1)}}u.useEffect(()=>{const t=window.setInterval(()=>{E(new Date)},1e3);return()=>window.clearInterval(t)},[]),u.useEffect(()=>{if(!s){j("Portfolio id is missing."),x(!1);return}ue().catch(()=>{})},[r,s]);const ae=u.useMemo(()=>(n==null?void 0:n.investments)??[],[n]),W=u.useMemo(()=>ae.filter(t=>a(t.position_status,1)===1),[ae]),oe=u.useMemo(()=>ae.filter(t=>{const p=a(t.position_status,1);return p===2?!0:p===1?!!(t.primary_exit_date||t.secondary_exit_date):!1}),[ae]),Ee=u.useMemo(()=>W.some(t=>{const p=String(t.symbol??"").trim().toUpperCase();return p==="GOLDBEES"||p==="GOLDBEES"}),[W]),xe=u.useMemo(()=>{var t;return(t=d==null?void 0:d.equity_curve)!=null&&t.length?Ke(d.equity_curve):null},[d]),Z=u.useMemo(()=>Ze(d==null?void 0:d.monthly_breakup,a(d==null?void 0:d.starting_capital)),[d]),Ie=u.useMemo(()=>{const t=d==null?void 0:d.metrics;return[{key:"invested_capital",label:"Investment Capital",value:z(t==null?void 0:t.invested_capital)},{key:"current_capital",label:"Current Capital",value:z(t==null?void 0:t.current_capital)},{key:"total_return_percent",label:"Total Return(%)",value:V(t==null?void 0:t.total_return_percent)},{key:"win_rate_percent",label:"Win Rate(%)",value:V(t==null?void 0:t.win_rate_percent)},{key:"avg_winners_roi_percent",label:"Avg. Winners ROI(%)",value:V(t==null?void 0:t.avg_winners_roi_percent)},{key:"avg_losers_roi_percent",label:"Avg. Losers ROI(%)",value:V(t==null?void 0:t.avg_losers_roi_percent)},{key:"max_drawdown_percent",label:"Max. DD(%)",value:V(t==null?void 0:t.max_drawdown_percent),note:t!=null&&t.max_drawdown_date?`Date: ${t.max_drawdown_date}`:void 0},{key:"cagr_percent",label:"CAGR(%)",value:V(t==null?void 0:t.cagr_percent)},{key:"avg_trades_per_year",label:"Avg. trade per year",value:a(t==null?void 0:t.avg_trades_per_year).toFixed(2)},{key:"risk_reward",label:"Risk To Reward",value:(t==null?void 0:t.risk_reward)!=null?a(t.risk_reward).toFixed(3):"--"},{key:"biggest_winner_roi_percent",label:"Biggest Winner ROI(%)",value:t!=null&&t.biggest_winner?V(t.biggest_winner.roi_percent):"--"},{key:"biggest_loser_roi_percent",label:"Biggest Loser ROI(%)",value:t!=null&&t.biggest_loser?V(t.biggest_loser.roi_percent):"--"}]},[d]),me=u.useMemo(()=>Array.from(new Set(W.map(t=>Re(t,n==null?void 0:n.broker)).filter(Boolean))),[W,n==null?void 0:n.broker]),fe=u.useMemo(()=>me.join(","),[me]);u.useEffect(()=>{if(!fe){w(0);return}let t=!0;const p=async()=>{try{const l=await fetch(`${q}/quotes?tokens=${encodeURIComponent(me.join(","))}`),N=await l.json().catch(()=>null);if(!t||!l.ok||(N==null?void 0:N.status)==="error")return;const O={};if(Object.entries((N==null?void 0:N.quotes)||{}).forEach(([F,G])=>{const M=a(G==null?void 0:G.ltp,0);M>0&&(O[String(F).trim()]=M)}),!Object.keys(O).length)return;g(F=>F&&at(F,O))}catch{}};p().catch(()=>{}),w(Q);const y=window.setInterval(()=>{p().catch(()=>{}),w(Q)},Q*1e3),v=window.setInterval(()=>{w(l=>Math.max(0,l-1))},1e3);return()=>{t=!1,window.clearInterval(y),window.clearInterval(v)}},[fe,Q]);const k=u.useMemo(()=>rt(n,W,oe,R),[n,W,oe,R]),Fe=u.useMemo(()=>W.map((t,p)=>{const y=Ce(R,t.entry_date),v=a(y?t.overall_pnl_amount:t.today_pnl),l=a(y?t.overall_pnl_percent:t.today_change),N=a(t.overall_pnl_amount);return{row_rank:`${p+1}${t.indentification?` - ${String(t.indentification)}`:""}`,symbol_qty:`${String(t.symbol??"N/A")} - ${K(de(t))}`,company_name:String(t.company_name??"N/A"),entry_date:se(t.entry_date),entry_price:a(t.entry_price).toFixed(2),ltp:a(t.ltp).toFixed(2),day_pnl:`${v.toFixed(2)} (${l.toFixed(2)}%)`,total_pnl:`${a(t.overall_pnl_amount).toFixed(2)} (${a(t.overall_pnl_percent).toFixed(2)}%)`,qty_date:Xe(R),dayPnlPositive:v>0,dayPnlNegative:v<0,totalPnlPositive:N>0,totalPnlNegative:N<0}}),[W,R]),he=u.useMemo(()=>oe.map(t=>{const p=a(t.overall_pnl_amount);return{symbol_qty:`${String(t.symbol??"N/A")} - ${K(de(t))}`,exit_type:t.secondary_exit_date?"Primary":"Secondary",company_name:String(t.company_name??"N/A"),entry_date:se(t.entry_date),entry_price:a(t.entry_price).toFixed(2),exit_price:a(t.exit_price).toFixed(2),exit_date:se(t.exit_date),exited_qty:K(ze(t)),pnl_text:`${a(t.overall_pnl_amount).toFixed(2)} (${a(t.overall_pnl_percent).toFixed(2)}%)`,pnlPositive:p>0,pnlNegative:p<0}}),[oe]),Me=u.useMemo(()=>B.map(t=>({rank:t.rank,universe:t.universe,symbol:t.symbol,sector:t.sector,last_price:t.last_price.toFixed(2),score:t.score.toFixed(6),qty:String(t.qty),amount:z(t.amount),allocation:z(t.Investment)})),[B]),Te=u.useMemo(()=>L.map(t=>({rank:String(ce(t)),universe:String(t.universe??""),symbol:String(t.symbol??""),sector:String(t.sector??""),last_price:a(t.last_price).toFixed(2),score:a(t.score).toFixed(6)})),[L]),Ae=(n==null?void 0:n.strategy_name)||(n==null?void 0:n.portfolio_name)||"Portfolio Detail";async function $e(t,p){try{A(!0);const y=await fetch(`${q}/${t}/${encodeURIComponent(s)}`),v=await y.json().catch(()=>({}));if(!y.ok)throw new Error(v&&(v.detail||v.message)||"Action failed.");return pe(p(v)),await ue({silent:!0}),v}catch(y){return j(y instanceof Error?y.message:"Action failed."),{}}finally{A(!1)}}function ie(t,p,y,v){C({title:t,message:p,endpoint:y,successMessage:v})}async function Ve(){if(!b)return;const t=b;if(C(null),t.endpoint===Pe){await De();return}const p=await $e(t.endpoint,t.successMessage);if((t.endpoint==="prtfolio/rebalance"||t.endpoint==="prtfolio/combained_rebalance")&&(Array.isArray(p.exited_stocks)||Array.isArray(p.insert_status))){const y=(p.exited_stocks??[]).map(l=>({symbol:l.symbol,entry_price:a(l.entry_price),exit_price:a(l.exit_price),exit_qty:a(l.exit_qty),entry_value:a(l.entry_amount),exit_value:a(l.exit_value),realized_profit:a(l.pnl)})),v=(p.insert_status??[]).map(l=>({symbol:l.symbol,rank:a(l.rank),sector:l.sector??"",entry_price:a(l.entry_price),qty:a(l.qty),investment_amount:a(l.investment_amount),score:a(l.score)}));P({total_realized_profit:Number(p.total_realized_profit)||y.reduce((l,N)=>l+N.realized_profit,0),exit_stock_value:Number(p.exit_stock_value)||y.reduce((l,N)=>l+a(N.exit_value),0),remaining_capital_after:Number(p.remaining_capital_after??0),new_buy_amount:Number(p.new_buy_amount)||v.reduce((l,N)=>l+a(N.investment_amount),0),exited_stocks:y,new_stocks:v})}}async function Le(){var t,p,y,v,l;if(n)try{U(!0),j("");const N=String(n.formula_1??"").trim().length>0,O={index_name:n.strategy_index??((t=n.portfolio)==null?void 0:t.indexes)??[],sectors:n.sector??((p=n.portfolio)==null?void 0:p.sectors)??[],min_price:null,max_price:null,top_n:a(n.entry_rank,0),total_capital:a(n.current_value,0),score_date:new Date().toISOString().split("T")[0],formula:n.formula??"",score_model:n.score_model??String(((y=n.portfolio)==null?void 0:y.score_model)??"current"),...N?{index_name_1:n.strategy_index??((v=n.portfolio)==null?void 0:v.indexes)??[],sectors_1:n.sector??((l=n.portfolio)==null?void 0:l.sectors)??[],min_price_1:null,max_price_1:null,top_n_1:a(n.entry_rank_1,a(n.entry_rank,0)),total_capital_1:a(n.current_value,0),score_date_1:new Date().toISOString().split("T")[0],formula_1:n.formula_1??n.formula??""}:{}},F=N?`${q}/eod_scoring_combained`:`${q}/eod_scoring`,G=await fetch(F,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(O)}),M=await G.json().catch(()=>({}));if(!G.ok)throw new Error(M&&(M.detail||M.message)||"Unable to fetch score.");const Ne=Array.isArray(M==null?void 0:M.stocks_scored)?M.stocks_scored:[],Se=it(n,Ne);ee(Ne),ne(Se.suggestions),re(Se.summary),pe("Score fetched successfully.")}catch(N){j(N instanceof Error?N.message:"Unable to fetch score.")}finally{U(!1)}}async function Oe(){if(s)try{I(!0),j("");const t=await fetch(`${q}/portfolioTrend/${encodeURIComponent(s)}`),p=await t.json().catch(()=>({}));if(!t.ok)throw new Error(p&&(p.detail||p.message)||"Unable to load portfolio trend.");Y(p),D(!0)}catch(t){j(t instanceof Error?t.message:"Unable to load portfolio trend.")}finally{I(!1)}}async function De(){try{if(!L.length)throw new Error("Please fetch score before updating investments.");if(!B.length)throw new Error("No investment suggestions available to update.");A(!0);const t={portfolio_strategy_id:s,invest_stock_data:B,score_data:L,total_capital:a(n==null?void 0:n.current_value,0),top_n:a(n==null?void 0:n.entry_rank,0)},p=await fetch(`${q}/update_portfolio`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}),y=await p.json().catch(()=>({}));if(!p.ok)throw new Error(y&&(y.detail||y.message)||"Unable to update investments.");pe(`Investments updated successfully (${Number((y==null?void 0:y.inserted_investments)||0)} rows).`),await ue({silent:!0}),ee([]),ne([]),re(null)}catch(t){j(t instanceof Error?t.message:"Unable to update investments.")}finally{A(!1)}}return e.jsxs(e.Fragment,{children:[e.jsx(Ue,{title:"Scanner Portfolio Detail",description:"Sigma scanner portfolio detail"}),e.jsxs("div",{className:"scanner-portfolio-detail-page",children:[e.jsx("style",{children:Je(lt,".scanner-portfolio-detail-page")}),e.jsxs("div",{className:"scanner-portfolio-detail-page-header",children:[e.jsxs("div",{className:"scanner-portfolio-detail-page-header-main",children:[e.jsx("h2",{className:"scanner-portfolio-detail-page-title",children:"Portfolio Detail"}),e.jsxs("div",{className:"scanner-portfolio-detail-refresh-bar",children:[e.jsx("span",{className:"scanner-portfolio-detail-now",children:se(R)}),Q>0?e.jsxs("span",{className:"scanner-portfolio-detail-countdown",children:["Update in 00:",String(c).padStart(2,"0")]}):null,e.jsx("select",{className:"scanner-portfolio-detail-refresh-select",value:Q,onChange:t=>{const p=Number(t.target.value)||20;o(p),w(p)},children:Ye.map(t=>e.jsx("option",{value:t.value,children:t.label},t.value))})]})]}),e.jsx("nav",{className:"scanner-portfolio-detail-breadcrumb",children:e.jsxs("ol",{children:[e.jsx("li",{children:e.jsx(He,{to:"/",children:"Home"})}),e.jsx("li",{"aria-hidden":"true",children:"/"}),e.jsx("li",{children:"Portfolio Detail"})]})})]}),e.jsxs("div",{className:"scanner-portfolio-detail-shell",children:[e.jsxs("section",{className:"scanner-portfolio-detail-topbar",children:[e.jsx("div",{className:"scanner-portfolio-detail-heading-wrap",children:e.jsxs("div",{className:"scanner-portfolio-detail-title-block",children:[e.jsx("span",{className:"scanner-portfolio-detail-kicker",children:"Live Portfolio"}),e.jsx("h1",{children:Ae})]})}),e.jsx("div",{className:"scanner-portfolio-detail-actions",children:Ee?e.jsx("button",{type:"button",className:"action-btn action-btn-danger",onClick:()=>ie("Exit Gold","Are you sure you want to exit the current Gold investment?","prtfolio/exit_goldbees",t=>`Gold Exited Successfully. Exited count: ${a(t.exited_count)}. New buy count: ${a(t.new_buy_count)}.`),disabled:S||!n,children:"Exit Gold"}):e.jsxs(e.Fragment,{children:[e.jsx("button",{type:"button",className:"action-btn",onClick:Le,disabled:T||!n,children:T?"Scoring...":"Score"}),e.jsx("button",{type:"button",className:"action-btn",onClick:Oe,disabled:H||!n,children:H?"Loading...":"Portfolio Trend"}),e.jsx("button",{type:"button",className:"action-btn",onClick:()=>ie("Rebalance Portfolio","Are you sure you want to rebalance this portfolio now?",r?"prtfolio/combained_rebalance":"prtfolio/rebalance",t=>`Portfolio Rebalanced Successfully. Exited count: ${a(t.exited_count)}. New buy count: ${a(t.new_buy_count)}.`),disabled:S||!n,children:e.jsxs("span",{className:"action-btn-content",children:[e.jsx("i",{className:"fa fa-retweet","aria-hidden":"true"}),e.jsx("span",{children:S?"Working...":"Rebalance"})]})}),e.jsx("button",{type:"button",className:"action-btn",onClick:()=>ie("Gold Investment","Are you sure you want to move this portfolio into Gold investment?","prtfolio/invest_goldbees",t=>`Gold Invested Successfully. Exited count: ${a(t.exited_count)}. New buy count: ${a(t.new_buy_count)}.`),disabled:S||!n,children:"Gold Investment"})]})})]}),e.jsx(Ge,{toast:m,onClose:()=>h(null)}),b?e.jsx("div",{className:"scanner-portfolio-detail-modal-backdrop",role:"presentation",onClick:()=>C(null),children:e.jsxs("div",{className:"scanner-portfolio-detail-modal",role:"dialog","aria-modal":"true","aria-labelledby":"scanner-confirm-title",onClick:t=>t.stopPropagation(),children:[e.jsx("h3",{id:"scanner-confirm-title",children:b.title}),e.jsx("p",{children:b.message}),e.jsxs("div",{className:"scanner-portfolio-detail-modal-actions",children:[e.jsx("button",{type:"button",className:"scanner-portfolio-detail-modal-btn secondary",onClick:()=>C(null),children:"Cancel"}),e.jsx("button",{type:"button",className:"scanner-portfolio-detail-modal-btn primary",onClick:()=>Ve(),disabled:S,children:S?"Processing...":"Proceed"})]})]})}):null,_?e.jsx("div",{className:"scanner-portfolio-detail-modal-backdrop",role:"presentation",onClick:()=>P(null),children:e.jsxs("div",{className:"rb-result-modal",role:"dialog","aria-modal":"true",onClick:t=>t.stopPropagation(),children:[e.jsxs("div",{className:"rb-result-header",children:[e.jsx("h3",{children:"Rebalance Summary"}),e.jsx("button",{type:"button",className:"rb-result-close",onClick:()=>P(null),children:"✕"})]}),e.jsxs("div",{className:"rb-result-metrics",children:[e.jsxs("div",{className:"rb-metric",children:[e.jsx("span",{children:"Realized Profit"}),e.jsxs("strong",{className:_.total_realized_profit>=0?"positive":"negative",children:[_.total_realized_profit>=0?"+":"",z(_.total_realized_profit)]})]}),e.jsxs("div",{className:"rb-metric",children:[e.jsx("span",{children:"Realized Amount"}),e.jsx("strong",{children:z(_.exit_stock_value)})]}),e.jsxs("div",{className:"rb-metric",children:[e.jsx("span",{children:"New Buy Amount"}),e.jsx("strong",{children:z(_.new_buy_amount)})]}),e.jsxs("div",{className:"rb-metric",children:[e.jsx("span",{children:"Remaining Capital"}),e.jsx("strong",{children:z(_.remaining_capital_after)})]})]}),e.jsxs("div",{className:"rb-result-columns",children:[e.jsxs("div",{className:"rb-col",children:[e.jsxs("div",{className:"rb-col-title exit",children:["Exit Stocks (",_.exited_stocks.length,")"]}),_.exited_stocks.length===0?e.jsx("p",{className:"rb-empty",children:"No stocks exited"}):e.jsxs("table",{className:"rb-table",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Symbol"}),e.jsx("th",{children:"Qty"}),e.jsx("th",{children:"Entry"}),e.jsx("th",{children:"Entry Amt"}),e.jsx("th",{children:"Exit"}),e.jsx("th",{children:"Exit Amt"}),e.jsx("th",{children:"P&L"})]})}),e.jsx("tbody",{children:_.exited_stocks.map(t=>{const p=a(t.entry_value)||Math.round(a(t.entry_price)*a(t.exit_qty));return e.jsxs("tr",{children:[e.jsx("td",{className:"sym",children:t.symbol}),e.jsx("td",{children:t.exit_qty}),e.jsx("td",{children:a(t.entry_price).toFixed(2)}),e.jsx("td",{children:Math.round(p).toLocaleString("en-IN")}),e.jsx("td",{children:a(t.exit_price).toFixed(2)}),e.jsx("td",{children:Math.round(a(t.exit_value)).toLocaleString("en-IN")}),e.jsxs("td",{className:t.realized_profit>=0?"positive":"negative",children:[t.realized_profit>=0?"+":"",Math.round(t.realized_profit).toLocaleString("en-IN")]})]},t.symbol)})})]})]}),e.jsxs("div",{className:"rb-col",children:[e.jsxs("div",{className:"rb-col-title buy",children:["New Buy (",_.new_stocks.length,")"]}),_.new_stocks.length===0?e.jsx("p",{className:"rb-empty",children:"No new stocks added"}):e.jsxs("table",{className:"rb-table",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"#"}),e.jsx("th",{children:"Symbol"}),e.jsx("th",{children:"Price"}),e.jsx("th",{children:"Qty"}),e.jsx("th",{children:"Amount"})]})}),e.jsx("tbody",{children:_.new_stocks.map(t=>e.jsxs("tr",{children:[e.jsx("td",{children:t.rank}),e.jsx("td",{className:"sym",children:t.symbol}),e.jsx("td",{children:a(t.entry_price).toFixed(2)}),e.jsx("td",{children:t.qty}),e.jsx("td",{children:Math.round(t.investment_amount).toLocaleString("en-IN")})]},t.symbol))})]})]})]}),e.jsx("div",{className:"rb-result-footer",children:e.jsx("button",{type:"button",className:"scanner-portfolio-detail-modal-btn primary",onClick:()=>P(null),children:"Close"})})]})}):null,X?e.jsx("div",{className:"scanner-portfolio-detail-modal-backdrop",role:"presentation",onClick:()=>D(!1),children:e.jsxs("div",{className:"rb-result-modal trend-modal",role:"dialog","aria-modal":"true",onClick:t=>t.stopPropagation(),children:[e.jsxs("div",{className:"rb-result-header",children:[e.jsxs("h3",{children:["Portfolio Trend",d!=null&&d.portfolio_name?` — ${d.portfolio_name}`:""]}),e.jsx("button",{type:"button",className:"rb-result-close",onClick:()=>D(!1),children:"✕"})]}),xe?e.jsxs("div",{className:"trend-body",children:[e.jsxs("div",{className:"scanner-metrics-grid",children:[Ie.map(t=>e.jsxs("div",{className:"scanner-metric-card",children:[e.jsxs("div",{className:"scanner-metric-label",children:[e.jsx("span",{className:"scanner-metric-label-icon",children:"₹"}),e.jsx("span",{children:t.label})]}),e.jsx("div",{className:"scanner-metric-value",children:t.value}),t.note?e.jsx("div",{className:"scanner-metric-note",children:t.note}):null]},t.key)),e.jsxs("div",{className:"scanner-big-card",children:[e.jsxs("div",{className:"scanner-big-card-head",children:[e.jsx("span",{className:"scanner-big-card-icon",children:"▥"}),e.jsxs("span",{children:["Biggest Winner Stats",(ye=d==null?void 0:d.metrics)!=null&&ye.biggest_winner?` - ${d.metrics.biggest_winner.symbol}`:""]})]}),(_e=d==null?void 0:d.metrics)!=null&&_e.biggest_winner?e.jsxs("div",{className:"scanner-big-card-stats",children:[e.jsxs("h4",{children:["Buy Price - ",a(d.metrics.biggest_winner.buy_price).toFixed(2)," | Sell Price ",a(d.metrics.biggest_winner.sell_price).toFixed(2)]}),e.jsxs("h4",{children:[d.metrics.biggest_winner.start_date," to ",d.metrics.biggest_winner.end_date," (",d.metrics.biggest_winner.holding_days," days)"]})]}):e.jsx("p",{className:"rb-empty",children:"No winning closed positions yet."})]}),e.jsxs("div",{className:"scanner-big-card",children:[e.jsxs("div",{className:"scanner-big-card-head",children:[e.jsx("span",{className:"scanner-big-card-icon",children:"▥"}),e.jsxs("span",{children:["Biggest Loser Stats",(ve=d==null?void 0:d.metrics)!=null&&ve.biggest_loser?` - ${d.metrics.biggest_loser.symbol}`:""]})]}),(je=d==null?void 0:d.metrics)!=null&&je.biggest_loser?e.jsxs("div",{className:"scanner-big-card-stats",children:[e.jsxs("h4",{children:["Buy Price - ",a(d.metrics.biggest_loser.buy_price).toFixed(2)," | Sell Price ",a(d.metrics.biggest_loser.sell_price).toFixed(2)]}),e.jsxs("h4",{children:[d.metrics.biggest_loser.start_date," to ",d.metrics.biggest_loser.end_date," (",d.metrics.biggest_loser.holding_days," days)"]})]}):e.jsx("p",{className:"rb-empty",children:"No losing closed positions yet."})]})]}),Z.years.length?e.jsxs("section",{className:"scanner-section",children:[e.jsx("h3",{className:"scanner-section-title",children:"Monthly Breakup (Realized Profit%)"}),e.jsx("div",{className:"scanner-table-wrap",children:e.jsxs("table",{className:"scanner-table",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Year"}),be.map(t=>e.jsx("th",{children:t},t)),e.jsx("th",{children:"Total"})]})}),e.jsx("tbody",{children:Z.years.map(t=>{const y=(be.reduce((v,l,N)=>{var O;return v*(1+a((O=Z.dataMap[t])==null?void 0:O[N+1])/100)},1)-1)*100;return e.jsxs("tr",{children:[e.jsx("td",{className:"year-cell",children:t}),be.map((v,l)=>{var G,M;const N=Object.prototype.hasOwnProperty.call(Z.dataMap[t]||{},l+1),O=a((G=Z.dataMap[t])==null?void 0:G[l+1]),F=(M=Z.detailMap[t])==null?void 0:M[l+1];return e.jsx("td",{className:"scanner-month-cell",children:N?e.jsxs(e.Fragment,{children:[e.jsx("div",{className:`scanner-month-roi ${O>=0?"positive":"negative"}`,children:V(O)}),F?e.jsxs("div",{className:"scanner-month-meta",children:[e.jsxs("div",{children:[e.jsx("span",{children:"CC:"})," ₹",K(F.cc)]}),e.jsxs("div",{children:[e.jsx("span",{children:"OP:"})," ₹",K(F.op)]}),e.jsxs("div",{className:F.pnl>=0?"positive":"negative",children:[e.jsx("span",{children:"P:"})," ₹",K(F.pnl)]})]}):null]}):e.jsx("span",{className:"scanner-month-empty",children:"-"})},`${t}-${v}`)}),e.jsx("td",{className:y>=0?"positive":"negative",children:V(y)})]},t)})})]})})]}):null,e.jsx("div",{className:"trend-chart-wrap",children:e.jsx(Be,{options:xe.options,series:xe.series,type:"area",height:380})})]}):e.jsx("p",{className:"rb-empty",children:"No trend data available for this portfolio."}),e.jsx("div",{className:"rb-result-footer",children:e.jsx("button",{type:"button",className:"scanner-portfolio-detail-modal-btn primary",onClick:()=>D(!1),children:"Close"})})]})}):null,f?e.jsx("div",{className:"scanner-portfolio-detail-error",children:f}):null,i?e.jsxs("div",{className:"scanner-portfolio-detail-loading",children:[e.jsx(st,{}),e.jsx("p",{children:"Loading portfolio detail…"})]}):n?e.jsxs(e.Fragment,{children:[e.jsxs("section",{className:"scanner-portfolio-settings",children:[e.jsx("div",{className:"scanner-portfolio-section-head full",children:e.jsxs("div",{children:[e.jsx("span",{className:"scanner-portfolio-section-kicker",children:"Configuration"}),e.jsx("h3",{children:"Portfolio Setup"})]})}),e.jsxs("div",{children:[e.jsx("strong",{children:"Capital"}),e.jsx("span",{children:a(n.starting_capital)})]}),e.jsxs("div",{children:[e.jsx("strong",{children:"Universe"}),e.jsx("span",{children:et(n.strategy_index??((ke=n.portfolio)==null?void 0:ke.indexes))})]}),e.jsxs("div",{children:[e.jsx("strong",{children:"Rebalance Frequency"}),e.jsx("span",{children:String(n.rebalance_date??"")})]}),e.jsxs("div",{children:[e.jsx("strong",{children:"Rebalance Date"}),e.jsx("span",{children:String(n.rebalance_frequency??"")})]}),e.jsxs("div",{children:[e.jsx("strong",{children:"No of Stocks"}),e.jsx("span",{children:a(n.entry_rank)})]}),e.jsxs("div",{children:[e.jsx("strong",{children:"Exit Rank"}),e.jsx("span",{children:a(n.exit_rank)})]}),e.jsxs("div",{children:[e.jsx("strong",{children:"Score Model"}),e.jsx("span",{children:n.score_model||String(((we=n.portfolio)==null?void 0:we.score_model)??"current")})]}),e.jsxs("div",{className:"full",children:[e.jsx("strong",{children:"Formula"}),e.jsx("span",{children:n.formula||"N/A"})]})]}),e.jsxs("section",{className:"scanner-portfolio-summary-section",children:[e.jsx("div",{className:"scanner-portfolio-section-head",children:e.jsxs("div",{children:[e.jsx("span",{className:"scanner-portfolio-section-kicker",children:"Overview"}),e.jsx("h3",{children:"Portfolio Metrics"})]})}),e.jsxs("div",{className:"scanner-portfolio-summary-grid",children:[e.jsxs("article",{className:"summary-card",children:[e.jsx("h6",{children:"Current Investment"}),e.jsxs("div",{className:"summary-card-value-row",children:[e.jsx("h3",{children:z(n.current_investment??k.currentInvestment)}),e.jsx(J,{fallback:"Live"})]})]}),e.jsxs("article",{className:"summary-card",children:[e.jsx("h6",{children:"Current Value"}),e.jsxs("div",{className:"summary-card-value-row",children:[e.jsx("h3",{children:z(n.current_value??k.currentValue)}),e.jsx(J,{value:k.totalReturnsPercent})]})]}),e.jsxs("article",{className:`summary-card ${k.totalReturnsValue>0?"positive":k.totalReturnsValue<0?"negative":""}`,children:[e.jsx("h6",{children:"Total Returns"}),e.jsxs("div",{className:"summary-card-value-row",children:[e.jsx("h3",{className:k.totalReturnsValue>0?"positive":k.totalReturnsValue<0?"negative":"",children:z(k.totalReturnsValue)}),e.jsx(J,{value:k.totalReturnsPercent})]})]}),e.jsxs("article",{className:"summary-card",children:[e.jsx("h6",{children:"Total Holdings"}),e.jsxs("div",{className:"summary-card-value-row",children:[e.jsx("h3",{children:k.totalHoldings}),e.jsx(J,{fallback:"Active"})]})]}),e.jsxs("article",{className:"summary-card",children:[e.jsx("h6",{children:"Idle Cash"}),e.jsxs("div",{className:"summary-card-value-row",children:[e.jsx("h3",{children:z(a(n.idle_cash))}),e.jsx(J,{fallback:"Uninvested"})]})]}),e.jsxs("article",{className:`summary-card ${k.dayReturnsValue>0?"positive":k.dayReturnsValue<0?"negative":""}`,children:[e.jsx("h6",{children:"Day Returns"}),e.jsxs("div",{className:"summary-card-value-row",children:[e.jsx("h3",{className:k.dayReturnsValue>0?"positive":k.dayReturnsValue<0?"negative":"",children:z(k.dayReturnsValue)}),e.jsx(J,{value:k.dayReturnsPercent})]})]}),e.jsxs("article",{className:`summary-card ${k.unrealizedReturnsValue>0?"positive":k.unrealizedReturnsValue<0?"negative":""}`,children:[e.jsx("h6",{children:"Un-Realized Returns"}),e.jsxs("div",{className:"summary-card-value-row",children:[e.jsx("h3",{className:k.unrealizedReturnsValue>0?"positive":k.unrealizedReturnsValue<0?"negative":"",children:z(n.unrealized_returns_value??k.unrealizedReturnsValue)}),e.jsx(J,{value:k.unrealizedReturnsPercent})]})]}),e.jsxs("article",{className:`summary-card ${k.realizedReturnsValue>0?"positive":k.realizedReturnsValue<0?"negative":""}`,children:[e.jsx("h6",{children:"Realized Returns"}),e.jsxs("div",{className:"summary-card-value-row",children:[e.jsx("h3",{className:k.realizedReturnsValue>0?"positive":k.realizedReturnsValue<0?"negative":"",children:z(k.realizedReturnsValue)}),e.jsx(J,{value:k.realizedReturnsPercent})]})]})]})]}),e.jsx(le,{title:"Active Holdings",rows:Fe,searchPlaceholder:"Search symbol, company, entry date...",columns:[{key:"row_rank",label:"Rank"},{key:"symbol_qty",label:"Symbol"},{key:"company_name",label:"Company"},{key:"entry_date",label:"Entry Date"},{key:"entry_price",label:"Entry",align:"right"},{key:"ltp",label:"LTP",align:"right"},{key:"day_pnl",label:"Day P&L",align:"right",formatter:t=>e.jsx("span",{className:t.dayPnlPositive?"positive":t.dayPnlNegative?"negative":"",children:t.day_pnl})},{key:"total_pnl",label:"Total P&L",align:"right",formatter:t=>e.jsx("span",{className:t.totalPnlPositive?"positive":t.totalPnlNegative?"negative":"",children:t.total_pnl})},{key:"qty_date",label:"Qty",align:"right"}]}),he.length?e.jsx(le,{title:"Exited Holdings",rows:he,searchPlaceholder:"Search symbol, company, exit date...",columns:[{key:"symbol_qty",label:"Symbol"},{key:"exit_type",label:"Exit Type"},{key:"company_name",label:"Company"},{key:"entry_date",label:"Entry Date"},{key:"entry_price",label:"Entry Price"},{key:"exit_date",label:"Exit Date"},{key:"exit_price",label:"Exit Price"},{key:"exited_qty",label:"Exited Qty"},{key:"pnl_text",label:"P&L",formatter:t=>e.jsx("span",{className:t.pnlPositive?"positive":t.pnlNegative?"negative":"",children:t.pnl_text})}]}):null,B.length?e.jsxs("section",{className:"scanner-portfolio-table-card",children:[e.jsx("div",{className:"eod-result-title",children:"EOD INVESTMENT RESULT"}),e.jsxs("div",{className:"eod-summary-grid",children:[e.jsxs("div",{className:"eod-summary-card",children:[e.jsx("strong",{children:"Capital:"})," ",z(($==null?void 0:$.total_capital)||0)]}),e.jsxs("div",{className:"eod-summary-card",children:[e.jsx("strong",{children:"Used:"})," ",z(($==null?void 0:$.used_capital)||0)]}),e.jsxs("div",{className:"eod-summary-card",children:[e.jsx("strong",{children:"Remaining:"})," ",z(($==null?void 0:$.remaining_capital)||0)]})]}),e.jsx(le,{title:"EOD Investment Result",rows:Me,searchPlaceholder:"Search symbol, sector, universe...",columns:[{key:"rank",label:"Rank"},{key:"universe",label:"Index"},{key:"symbol",label:"Symbol"},{key:"sector",label:"Sector"},{key:"last_price",label:"Last Price"},{key:"score",label:"Score"},{key:"qty",label:"Qty"},{key:"amount",label:"Amount"},{key:"allocation",label:"Allocation"}]}),e.jsx("button",{type:"button",className:"action-btn update-btn",onClick:()=>ie("Update Investments","Are you sure you want to update this portfolio with the current score-based investments?",Pe,()=>""),disabled:S||!L.length||!B.length,children:"Update Investments"})]}):null,L.length?e.jsxs("section",{className:"scanner-portfolio-table-card",children:[e.jsx("div",{className:"table-subtitle",children:"EOD Score Rows"}),e.jsx(le,{title:"EOD Score Rows",rows:Te,searchPlaceholder:"Search symbol, sector, universe...",columns:[{key:"rank",label:"Rank"},{key:"universe",label:"Index"},{key:"symbol",label:"Symbol"},{key:"sector",label:"Sector"},{key:"last_price",label:"Last Price"},{key:"score",label:"Score"}]})]}):null]}):e.jsxs("div",{className:"scanner-portfolio-detail-empty",children:[e.jsx("h3",{children:"Portfolio detail unavailable"}),e.jsx("p",{children:"Current portfolio data load ஆகவில்லை."})]})]})]})]})}const lt=`
.scanner-portfolio-detail-page {
  position: relative;
  min-height: 100%;
  background: linear-gradient(180deg, #f5f9fd 0%, #eef4fb 45%, #eaf1fb 100%);
  color: #16233b;
  font-feature-settings: "tnum" 1, "cv11" 1;
}

.scanner-portfolio-detail-page-header {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 16px;
  margin-bottom: 18px;
  padding: 10px 4px 0;
}

.scanner-portfolio-detail-page-header-main {
  display: flex;
  align-items: center;
  gap: 18px;
  flex-wrap: wrap;
}

.scanner-portfolio-detail-page-title {
  margin: 0;
  font-size: 21px;
  font-weight: 700;
  letter-spacing: -0.01em;
  line-height: 1.2;
  color: #0b2340;
}

.scanner-portfolio-detail-breadcrumb ol {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  margin: 0;
  padding: 6px 12px;
  border-radius: 999px;
  background: #fff;
  border: 1px solid #e3ecf6;
  list-style: none;
  color: #64748b;
  font-size: 13px;
  box-shadow: 0 1px 2px rgba(16, 24, 40, 0.04);
}

.scanner-portfolio-detail-breadcrumb a {
  color: #1284d0;
  font-weight: 600;
  text-decoration: none;
}

.scanner-portfolio-detail-breadcrumb a:hover {
  text-decoration: underline;
}

.scanner-portfolio-detail-shell {
  display: grid;
  gap: 18px;
}

.scanner-portfolio-detail-modal-backdrop {
  position: fixed;
  inset: 0;
  z-index: 1250;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
  background: rgba(9, 20, 39, 0.45);
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
}

.scanner-portfolio-detail-modal {
  width: min(440px, calc(100vw - 32px));
  background: #fff;
  border: 1px solid #e3ecf6;
  border-radius: 20px;
  box-shadow: 0 24px 70px rgba(11, 35, 64, 0.28);
  padding: 30px 30px 26px;
  animation: scannerConfirmPopIn 0.2s ease-out;
}

.scanner-portfolio-detail-modal h3 {
  margin: 0 0 10px;
  font-size: 19px;
  font-weight: 800;
  color: #0b2340;
}

.scanner-portfolio-detail-modal p {
  margin: 0 0 22px;
  font-size: 14px;
  line-height: 1.6;
  color: #5b6b82;
}

.scanner-portfolio-detail-modal-actions {
  display: flex;
  justify-content: flex-end;
  gap: 10px;
}

.scanner-portfolio-detail-modal-btn {
  border-radius: 10px;
  padding: 10px 20px;
  font-size: 14px;
  font-weight: 700;
  cursor: pointer;
  transition: background 0.15s ease, opacity 0.15s ease, transform 0.15s ease, box-shadow 0.15s ease;
}

.scanner-portfolio-detail-modal-btn.secondary {
  border: 1px solid #dde7f2;
  background: #fff;
  color: #33455c;
}

.scanner-portfolio-detail-modal-btn.secondary:hover {
  background: #f5f9fd;
  border-color: #c7d7ea;
}

.scanner-portfolio-detail-modal-btn.primary {
  border: 1px solid #1284d0;
  background: linear-gradient(135deg, #2896d7 0%, #0e6fb0 100%);
  color: #fff;
  box-shadow: 0 8px 18px -6px rgba(18, 132, 208, 0.55);
}

.scanner-portfolio-detail-modal-btn.primary:hover:not(:disabled) {
  background: linear-gradient(135deg, #2896d7 0%, #0b4f7d 100%);
  transform: translateY(-1px);
  box-shadow: 0 10px 22px -6px rgba(18, 132, 208, 0.6);
}

.scanner-portfolio-detail-modal-btn:disabled {
  opacity: 0.6;
  cursor: wait;
}

.scanner-portfolio-detail-topbar,
.scanner-portfolio-settings,
.scanner-portfolio-table-card,
.scanner-portfolio-summary-section,
.scanner-portfolio-detail-loading,
.scanner-portfolio-detail-empty,
.scanner-portfolio-detail-error {
  background: #fff;
  border: 1px solid #e6edf5;
  border-radius: 18px;
  box-shadow: 0 1px 2px rgba(16, 24, 40, 0.04), 0 10px 30px -14px rgba(11, 65, 133, 0.16);
}

.scanner-portfolio-detail-topbar {
  position: relative;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 16px;
  padding: 18px 20px 18px 24px;
  background: #fff;
  overflow: hidden;
}

.scanner-portfolio-detail-topbar::before {
  content: "";
  position: absolute;
  inset: 0 auto 0 0;
  width: 5px;
  background: linear-gradient(180deg, #2896d7 0%, #1284d0 55%, #0b4f7d 100%);
}

.scanner-portfolio-detail-topbar h1 {
  margin: 0;
  font-size: 19px;
  font-weight: 700;
  letter-spacing: -0.01em;
  line-height: 1.2;
  color: #0b2340;
}

.scanner-portfolio-detail-heading-wrap {
  display: flex;
  align-items: center;
  gap: 18px;
  flex-wrap: wrap;
}

.scanner-portfolio-detail-title-block {
  display: grid;
  gap: 7px;
}

.scanner-portfolio-detail-kicker,
.scanner-portfolio-section-kicker {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  width: fit-content;
  padding: 3px 10px 3px 8px;
  border-radius: 999px;
  background: #e8f4fb;
  font-size: 10.5px;
  font-weight: 800;
  letter-spacing: 0.07em;
  text-transform: uppercase;
  color: #0e6aa6;
}

.scanner-portfolio-detail-kicker::before {
  content: "";
  width: 6px;
  height: 6px;
  border-radius: 999px;
  background: #22c55e;
  box-shadow: 0 0 0 3px rgba(34, 197, 94, 0.18);
}

.scanner-portfolio-detail-refresh-bar {
  display: flex;
  align-items: center;
  gap: 10px;
  flex-wrap: wrap;
}

.scanner-portfolio-detail-now {
  font-size: 12px;
  font-weight: 500;
  color: #33455c;
}

.scanner-portfolio-detail-countdown {
  display: inline-flex;
  align-items: center;
  gap: 4px;
  min-height: 24px;
  padding: 0 10px;
  border-radius: 999px;
  background: #fef3c7;
  border: 1px solid #fde3a4;
  color: #b45309;
  font-size: 11px;
  font-weight: 700;
}

.scanner-portfolio-detail-refresh-select {
  height: 30px;
  border: 1px solid #dde7f2;
  border-radius: 8px;
  padding: 0 8px;
  font-size: 12px;
  font-weight: 600;
  color: #16233b;
  background: #fff;
  outline: none;
  cursor: pointer;
  transition: border-color 0.15s ease;
}

.scanner-portfolio-detail-refresh-select:hover {
  border-color: #90d1ff;
}

.scanner-portfolio-detail-back {
  border: 0;
  background: transparent;
  color: #1284d0;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  padding: 0;
}

.scanner-portfolio-detail-actions {
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-end;
  gap: 10px;
}

.action-btn {
  min-height: 36px;
  border: 1px solid #1284d0;
  border-radius: 9px;
  padding: 6px 16px;
  background: linear-gradient(135deg, #2896d7 0%, #0e6fb0 100%);
  color: #fff;
  font-size: 12.5px;
  font-weight: 700;
  letter-spacing: 0.01em;
  cursor: pointer;
  min-width: 108px;
  box-shadow: 0 6px 16px -6px rgba(18, 132, 208, 0.55);
  transition: transform 0.18s ease, opacity 0.18s ease, background 0.18s ease, border-color 0.18s ease, box-shadow 0.18s ease;
}

.action-btn-content {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
}

.action-btn:hover:not(:disabled) {
  transform: translateY(-1px);
  background: linear-gradient(135deg, #2896d7 0%, #0b4f7d 100%);
  box-shadow: 0 10px 22px -6px rgba(18, 132, 208, 0.6);
}

.action-btn:disabled {
  opacity: 0.6;
  cursor: wait;
  box-shadow: none;
}

.action-btn-danger {
  background: linear-gradient(135deg, #ef4444 0%, #b91c1c 100%);
  border-color: #dc2626;
  box-shadow: 0 6px 16px -6px rgba(220, 38, 38, 0.55);
}

.action-btn-danger:hover:not(:disabled) {
  background: linear-gradient(135deg, #ef4444 0%, #991b1b 100%);
  box-shadow: 0 10px 22px -6px rgba(220, 38, 38, 0.6);
}

.update-btn {
  margin-top: 16px;
}

.scanner-portfolio-detail-error {
  padding: 14px 16px;
  font-size: 14px;
}

.scanner-portfolio-detail-error {
  color: #b91c1c;
  background: #fef2f2;
  border-color: #f7c7c4;
}

.scanner-portfolio-settings {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 14px;
  padding: 18px 20px 22px;
}

.scanner-portfolio-settings div {
  display: grid;
  gap: 5px;
  padding: 12px 14px;
  border-radius: 12px;
  background: #f7fafd;
  border: 1px solid #eef2f8;
  transition: border-color 0.15s ease, background 0.15s ease;
}

.scanner-portfolio-settings div:hover {
  border-color: #cfe3f5;
  background: #f2f8fd;
}

.scanner-portfolio-settings div.full {
  grid-column: span 2;
}

.scanner-portfolio-settings strong {
  color: #8493a8;
  font-size: 10.5px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.scanner-portfolio-settings span {
  color: #1c2b40;
  font-size: 13.5px;
  font-weight: 600;
  line-height: 1.45;
  word-break: break-word;
}

.scanner-portfolio-section-head {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  padding: 18px 20px 4px;
  margin-bottom: 4px;
}

.scanner-portfolio-section-head h3 {
  margin: 4px 0 0;
  font-size: 17px;
  font-weight: 700;
  letter-spacing: -0.01em;
  line-height: 1.2;
  color: #0b2340;
}

.scanner-portfolio-settings div.scanner-portfolio-section-head {
  grid-column: 1 / -1;
  padding: 0;
  margin-bottom: 6px;
  background: transparent;
  border: 0;
}

.scanner-portfolio-settings div.scanner-portfolio-section-head:hover {
  background: transparent;
}

.scanner-portfolio-summary-grid {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 16px;
}

.scanner-portfolio-summary-section {
  padding: 4px 20px 22px;
}

.summary-card {
  position: relative;
  display: grid;
  gap: 12px;
  background: #fff;
  border: 1px solid #e9eff6;
  border-radius: 14px;
  padding: 18px 18px 16px;
  min-height: 112px;
  overflow: hidden;
  box-shadow: 0 1px 2px rgba(16, 24, 40, 0.03), 0 8px 20px -12px rgba(11, 65, 133, 0.14);
  transition: transform 0.18s ease, box-shadow 0.18s ease, border-color 0.18s ease;
}

.summary-card::before {
  content: "";
  position: absolute;
  inset: 0 0 auto 0;
  height: 3px;
  background: linear-gradient(90deg, #47a7df, #1284d0);
}

.summary-card:hover {
  transform: translateY(-2px);
  border-color: #d8e7f6;
  box-shadow: 0 12px 26px -14px rgba(11, 65, 133, 0.28);
}

.summary-card.positive::before {
  background: linear-gradient(90deg, #34d399, #16a34a);
}

.summary-card.negative::before {
  background: linear-gradient(90deg, #fb7185, #e11d48);
}

.summary-card h6 {
  margin: 0;
  font-size: 11px;
  font-weight: 600;
  color: #7788a0;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.summary-card h3 {
  margin: 0;
  font-size: 20px;
  font-weight: 700;
  letter-spacing: -0.01em;
  color: #0b2340;
}

.summary-card-value-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
}

.summary-badge {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
  min-height: 24px;
  padding: 0 10px;
  border-radius: 999px;
  font-size: 11px;
  font-weight: 800;
  white-space: nowrap;
}

.summary-badge-arrow {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 14px;
  height: 14px;
  font-size: 13px;
  line-height: 1;
}

.summary-badge.positive {
  background: #ecfdf5;
  border: 1px solid #bbf0d5;
  color: #16a34a !important;
}

.summary-badge.negative {
  background: #fff1f2;
  border: 1px solid #fecdd3;
  color: #ef4444 !important;
}

.summary-badge.neutral {
  background: #f7fafd;
  color: #7788a0 !important;
  border: 1px solid #e9eff6;
}

@keyframes scannerConfirmPopIn {
  from {
    opacity: 0;
    transform: translateY(8px) scale(0.98);
  }
  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}

.scanner-portfolio-table-card {
  padding: 18px 20px 20px;
  overflow: hidden;
}

.scanner-portfolio-table-card h4 {
  margin: 0 0 14px;
  font-size: 16px;
  font-weight: 700;
  letter-spacing: -0.01em;
  color: #0b2340;
}

.eod-section-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  margin-bottom: 14px;
}

.eod-section-header h4 {
  margin: 0;
  font-size: 16px;
  font-weight: 700;
  letter-spacing: -0.01em;
  color: #0b2340;
}

.eod-section-header span {
  font-size: 12px;
  font-weight: 700;
  padding: 4px 10px;
  border-radius: 999px;
  background: #f7fafd;
  border: 1px solid #eef2f8;
  color: #66788f;
}

.eod-section-body {
  display: grid;
  gap: 14px;
}

.eod-option-row {
  display: flex;
  flex-wrap: wrap;
  gap: 10px 16px;
  align-items: center;
  color: #7788a0;
  font-size: 12px;
  font-weight: 600;
  padding: 10px 14px;
  border-radius: 12px;
  background: #f7fafd;
  border: 1px dashed #e5edf6;
}

.eod-check,
.eod-radio {
  display: inline-flex;
  align-items: center;
  gap: 6px;
}

.eod-radio-group {
  display: inline-flex;
  align-items: center;
  gap: 12px;
  flex-wrap: wrap;
}

.eod-toolbar {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 14px;
  margin-bottom: 14px;
  flex-wrap: wrap;
}

.eod-toolbar-left,
.eod-toolbar-right {
  display: flex;
  align-items: center;
  gap: 12px;
  flex-wrap: wrap;
}

.eod-toolbar-badge {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 38px;
  padding: 0 16px;
  border-radius: 999px;
  background: linear-gradient(135deg, #e8f4fb, #dcedfa);
  border: 1px solid #cfe3f5;
  color: #0e6aa6;
  font-size: 13px;
  font-weight: 800;
}

.eod-input,
.eod-select {
  min-height: 38px;
  border: 1px solid #dde7f2;
  border-radius: 10px;
  background: #fff;
  color: #16233b;
  font-size: 13.5px;
  padding: 0 14px;
  transition: border-color 0.15s ease, box-shadow 0.15s ease;
}

.eod-input:focus,
.eod-select:focus {
  outline: none;
  border-color: #47a7df;
  box-shadow: 0 0 0 3px rgba(71, 167, 223, 0.18);
}

.eod-input {
  width: 260px;
}

.eod-pill-wrap {
  display: flex;
  align-items: center;
  gap: 8px;
  flex-wrap: wrap;
}

.eod-pill {
  border: 1px solid #dde7f2;
  background: #fff;
  color: #33506f;
  border-radius: 999px;
  padding: 7px 14px;
  font-size: 12.5px;
  font-weight: 700;
  cursor: pointer;
  transition: transform 0.15s ease, background 0.15s ease, border-color 0.15s ease, box-shadow 0.15s ease;
}

.eod-pill:hover {
  border-color: #90d1ff;
  transform: translateY(-1px);
}

.eod-pill.active {
  background: linear-gradient(135deg, #2896d7, #0e6fb0);
  border-color: #1284d0;
  color: #fff;
  box-shadow: 0 6px 14px -6px rgba(18, 132, 208, 0.55);
}

.table-subtitle,
.eod-result-title {
  padding: 11px 14px;
  border-radius: 12px;
  text-align: center;
  font-weight: 800;
}

.table-subtitle {
  background: #f7fafd;
  color: #16233b;
  border: 1px solid #eef2f8;
  margin-bottom: 14px;
}

.eod-result-title {
  background: linear-gradient(135deg, #2896d7, #0e6fb0);
  color: #fff;
  margin-bottom: 16px;
  box-shadow: 0 6px 16px -8px rgba(18, 132, 208, 0.5);
}

.eod-table-wrap,
.table-wrap {
  border: 1px solid #e6edf5;
  border-radius: 14px;
  overflow: hidden;
  position: relative;
  background: #fff;
}

.eod-table-scroll,
.table-wrap {
  overflow-x: auto;
}

.eod-table,
.holdings-table {
  width: 100%;
  min-width: 980px;
  border-collapse: separate;
  border-spacing: 0;
}

.eod-table thead th,
.holdings-table thead th {
  position: sticky;
  top: 0;
  z-index: 1;
  background: linear-gradient(180deg, #f8fbfe 0%, #eef4fb 100%);
  border-bottom: 1px solid #e1ecf7;
  color: #4a5b73;
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  padding: 12px 14px;
  white-space: nowrap;
  text-align: left;
}

.eod-table thead th button,
.holdings-table thead th button {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  border: 0;
  background: transparent;
  color: inherit;
  font: inherit;
  cursor: pointer;
  padding: 0;
}

.eod-table tbody td,
.holdings-table tbody td {
  border-bottom: 1px solid #f1f5f9;
  padding: 11px 14px;
  font-size: 13px;
  color: #1f2c40;
  vertical-align: middle;
  white-space: nowrap;
}

.eod-table tbody tr:last-child td,
.holdings-table tbody tr:last-child td {
  border-bottom: 0;
}

.eod-table tbody tr.striped,
.holdings-table tbody tr.striped {
  background: #f9fbfd;
}

.eod-table tbody tr.hoverable,
.holdings-table tbody tr.hoverable {
  transition: background 0.12s ease;
}

.eod-table tbody tr.hoverable:hover,
.holdings-table tbody tr.hoverable:hover {
  background: #eef6fd;
}

.eod-table tbody tr.selected,
.holdings-table tbody tr.selected {
  background: #e4f1fc;
}

.eod-table .right,
.holdings-table .right {
  text-align: right;
}

.eod-table .center,
.holdings-table .center {
  text-align: center;
}

.empty-note {
  color: #6b7280;
  padding: 8px 0;
}

.eod-empty {
  padding: 44px 20px;
  text-align: center;
  color: #7788a0;
  font-size: 0.94rem;
  font-weight: 600;
}

.eod-pagination {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 12px;
  margin-top: 14px;
  flex-wrap: wrap;
}

.eod-pagination-info {
  color: #7788a0;
  font-size: 12px;
  font-weight: 600;
}

.eod-pagination-controls {
  display: flex;
  align-items: center;
  gap: 8px;
  flex-wrap: wrap;
}

.eod-mini-btn {
  border: 1px solid #dde7f2;
  background: #fff;
  color: #16233b;
  border-radius: 999px;
  padding: 8px 14px;
  font-size: 12px;
  font-weight: 700;
  cursor: pointer;
  transition: background 0.15s ease, border-color 0.15s ease, color 0.15s ease;
}

.eod-mini-btn:hover:not(:disabled) {
  background: #1284d0;
  border-color: #1284d0;
  color: #fff;
}

.eod-mini-btn:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.eod-loading {
  position: absolute;
  inset: 0;
  background: rgba(255, 255, 255, 0.78);
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  z-index: 2;
  color: #1284d0;
  font-size: 0.95rem;
  font-weight: 700;
  backdrop-filter: blur(4px);
}

.eod-spinner {
  width: 18px;
  height: 18px;
  border-radius: 999px;
  border: 2px solid rgba(18, 132, 208, 0.2);
  border-top-color: #1284d0;
  animation: eod-spin 0.8s linear infinite;
}

@keyframes eod-spin {
  to { transform: rotate(360deg); }
}

.eod-summary-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 12px;
  margin-bottom: 16px;
}

.eod-summary-card {
  text-align: center;
  background: #f7fafd;
  padding: 14px 10px;
  color: #0b2340;
  border: 1px solid #eef2f8;
  border-radius: 12px;
  font-weight: 800;
}

.positive {
  color: #16a34a !important;
}

.negative {
  color: #e11d48 !important;
}

.scanner-portfolio-detail-loading,
.scanner-portfolio-detail-empty {
  display: grid;
  place-items: center;
  gap: 10px;
  padding: 46px 20px;
  text-align: center;
}

.scanner-portfolio-detail-spinner {
  width: 28px;
  height: 28px;
  border: 3px solid rgba(18, 132, 208, 0.2);
  border-top-color: #1284d0;
  border-radius: 999px;
  animation: scanner-portfolio-detail-spin 0.9s linear infinite;
}

@keyframes scanner-portfolio-detail-spin {
  to {
    transform: rotate(360deg);
  }
}

@media (max-width: 1280px) {
  .scanner-portfolio-summary-grid {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }

  .scanner-portfolio-settings {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media (max-width: 820px) {
  .scanner-portfolio-detail-page-header {
    flex-direction: column;
    align-items: flex-start;
    margin-bottom: 18px;
  }

  .scanner-portfolio-detail-page-header-main {
    align-items: flex-start;
    flex-direction: column;
    gap: 10px;
  }

  .scanner-portfolio-detail-topbar {
    flex-direction: column;
  }

  .scanner-portfolio-detail-heading-wrap {
    align-items: flex-start;
    flex-direction: column;
    gap: 10px;
  }

  .scanner-portfolio-detail-refresh-bar {
    width: 100%;
  }

  .scanner-portfolio-detail-actions {
    justify-content: flex-start;
  }

  .scanner-portfolio-summary-grid,
  .eod-summary-grid,
  .scanner-portfolio-settings {
    grid-template-columns: 1fr;
  }

  .eod-toolbar {
    flex-direction: column;
    align-items: stretch;
  }

  .eod-option-row {
    flex-direction: column;
    align-items: flex-start;
  }

  .eod-toolbar-left,
  .eod-toolbar-right {
    width: 100%;
  }

  .eod-input {
    width: 100%;
  }

  .summary-card h3 {
    font-size: 21px;
  }

  .scanner-portfolio-settings div.full {
    grid-column: auto;
  }

  .scanner-portfolio-detail-topbar h1 {
    font-size: 22px;
  }

  .rb-result-columns {
    flex-direction: column;
  }

  .rb-col {
    min-width: 0;
  }
}

.rb-result-modal {
  width: min(1200px, calc(100vw - 32px));
  max-height: calc(100vh - 60px);
  overflow-y: auto;
  background: #fff;
  border: 1px solid #e6edf5;
  border-radius: 20px;
  box-shadow: 0 24px 70px rgba(11, 35, 64, 0.3);
  display: flex;
  flex-direction: column;
  animation: scannerConfirmPopIn 0.2s ease-out;
}

.rb-result-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 18px 24px 16px;
  border-bottom: 1px solid #e6edf5;
  background: linear-gradient(135deg, #eef6fd, #f7fbff);
  border-radius: 20px 20px 0 0;
}

.rb-result-header h3 {
  margin: 0;
  font-size: 17px;
  font-weight: 800;
  color: #0b2340;
}

.rb-result-close {
  border: 1px solid #dde7f2;
  background: #fff;
  color: #1284d0;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  font-size: 13px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background 0.15s ease, color 0.15s ease;
}

.rb-result-close:hover {
  background: #1284d0;
  color: #fff;
}

.rb-result-metrics {
  display: flex;
  gap: 0;
  border-bottom: 1px solid #e6edf5;
  background: #fff;
}

.trend-chart-wrap {
  padding: 16px 20px 20px;
}

.trend-body {
  padding: 16px 20px 4px;
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.trend-body .trend-chart-wrap {
  padding: 0;
}

.scanner-metrics-grid {
  display: grid;
  grid-template-columns: repeat(12, minmax(0, 1fr));
  gap: 16px;
}

.scanner-metric-card {
  grid-column: span 3;
  border: 1px solid #e5e7eb;
  border-radius: 14px;
  background: #fcfcfc;
  padding: 14px 16px;
}

.scanner-metric-label {
  display: flex;
  align-items: center;
  gap: 10px;
  color: #574a4a;
  font-size: 0.86rem;
}

.scanner-metric-label-icon {
  width: 18px;
  height: 18px;
  border-radius: 999px;
  background: #dbeafe;
  color: #1d4ed8;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: 0.72rem;
  font-weight: 700;
}

.scanner-metric-value {
  margin-top: 12px;
  color: #111827;
  font-size: 1.4rem;
  font-weight: 700;
}

.scanner-metric-note {
  margin-top: 6px;
  color: #6b7280;
  font-size: 0.78rem;
  font-weight: 600;
}

.scanner-big-card {
  grid-column: span 6;
  border: 1px solid #e6edf8;
  border-radius: 16px;
  background: #ffffff;
  padding: 16px 16px 18px;
  box-shadow: 0 8px 20px rgba(15, 23, 42, 0.05);
}

.scanner-big-card-head {
  display: flex;
  align-items: center;
  gap: 10px;
  color: #374151;
  font-size: 0.98rem;
  font-weight: 700;
}

.scanner-big-card-icon {
  width: 20px;
  height: 20px;
  border-radius: 4px;
  border: 1px solid #a78bfa;
  color: #7c3aed;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: 0.76rem;
  background: #f5f3ff;
  flex: 0 0 auto;
}

.scanner-big-card-stats {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 18px;
  align-items: center;
  margin-top: 16px;
}

.scanner-big-card-stats h4 {
  margin: 0;
  color: #3f3f46;
  font-size: 1rem;
  font-weight: 700;
  line-height: 1.35;
}

.scanner-big-card-stats h4:last-child {
  text-align: right;
}

.scanner-section {
  border-radius: 16px;
  background: #fff;
  padding: 20px;
  border: 1px solid #e6edf8;
  box-shadow: 0 10px 26px rgba(15, 23, 42, 0.05);
}

.scanner-section-title {
  display: flex;
  align-items: center;
  gap: 10px;
  margin: 0 0 16px;
  color: #1e7e34;
  font-size: 0.98rem;
  font-weight: 800;
}

.scanner-table-wrap {
  overflow-x: auto;
}

.scanner-table {
  width: 100%;
  border-collapse: collapse;
  text-align: center;
  font-size: 14px;
  min-width: 1280px;
}

.scanner-table th {
  background: #009c3b;
  color: #fff;
  padding: 10px 8px;
  font-weight: 700;
}

.scanner-table td {
  padding: 10px 8px;
  border-bottom: 1px solid #e5e7eb;
  color: #333;
  vertical-align: middle;
}

.scanner-table .year-cell {
  font-weight: 700;
  font-size: 1.05rem;
  color: #1f2937;
}

.scanner-month-cell {
  min-width: 110px;
}

.scanner-month-roi {
  font-size: 0.95rem;
  font-weight: 800;
  line-height: 1.2;
  margin-bottom: 4px;
}

.scanner-month-meta {
  display: grid;
  gap: 2px;
  font-size: 0.8rem;
  line-height: 1.25;
  color: #111827;
}

.scanner-month-meta span {
  font-weight: 700;
  color: #111827;
}

.scanner-month-empty {
  color: #6b7280;
  font-size: 0.95rem;
}

@media (max-width: 720px) {
  .scanner-metric-card,
  .scanner-big-card {
    grid-column: span 12;
  }
}

.rb-metric {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 4px;
  padding: 16px 20px;
  border-right: 1px solid #e6edf5;
}

.rb-metric:last-child {
  border-right: 0;
}

.rb-metric span {
  font-size: 11.5px;
  color: #7788a0;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.04em;
}

.rb-metric strong {
  font-size: 19px;
  font-weight: 800;
  letter-spacing: -0.01em;
  color: #0b2340;
}

.rb-result-columns {
  display: flex;
  gap: 0;
  flex: 1;
}

.rb-col {
  flex: 1;
  min-width: 0;
  padding: 16px 18px;
  border-right: 1px solid #e6edf5;
}

.rb-col:last-child {
  border-right: 0;
}

.rb-col-title {
  font-size: 11.5px;
  font-weight: 800;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  padding: 5px 10px;
  border-radius: 999px;
  display: inline-block;
  margin-bottom: 12px;
}

.rb-col-title.exit {
  background: #fff1f2;
  color: #dc2626;
}

.rb-col-title.buy {
  background: #ecfdf5;
  color: #16a34a;
}

.rb-empty {
  font-size: 13px;
  color: #94a3b8;
  padding: 8px 0;
  margin: 0;
}

.rb-table {
  width: 100%;
  border-collapse: collapse;
  font-size: 13px;
}

.rb-table th {
  text-align: left;
  padding: 8px 10px;
  font-size: 10.5px;
  font-weight: 700;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  color: #7788a0;
  border-bottom: 1px solid #e6edf5;
  white-space: nowrap;
  background: #f7fafd;
}

.rb-table td {
  padding: 8px 10px;
  color: #1f2c40;
  border-bottom: 1px solid #f1f5f9;
  white-space: nowrap;
}

.rb-table tbody tr:hover td {
  background: #f7fafd;
}

.rb-table td.sym {
  font-weight: 700;
  color: #0b2340;
}

.rb-table .positive { color: #16a34a; font-weight: 700; }
.rb-table .negative { color: #e11d48; font-weight: 700; }

.rb-result-footer {
  padding: 14px 24px;
  display: flex;
  justify-content: flex-end;
  border-top: 1px solid #dbeffd;
}
`;export{xt as default};
