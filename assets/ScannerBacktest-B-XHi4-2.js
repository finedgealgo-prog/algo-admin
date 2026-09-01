import{h as Dt,r as m,j as e,P as Et,M as Ft}from"./index-D8QR5snI.js";import{C as st}from"./react-apexcharts.min-DsWQ7kD_.js";import{P as Mt}from"./PageBreadCrumb-Dtb21Oba.js";import{S as It}from"./StatusToast-CfoW21S0.js";import"./index-Chjiymov.js";const te="https://scanner.finedgealgo.com/scanner".replace(/\/+$/,""),$t="https://algo.finedgealgo.com/algo".replace(/\/+$/,""),Pt="69dcf52711877c164638d2a7",X=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],Ce="((70% * 6 Month Volatility) + (20% * 3 Month Performance) + (10% * 1 Year Performance)) / 3 Month Volatility",w={stock_price_min:"0",stock_price_max:"0",sectors:[],indexes:["nifty_50"],formula:Ce,starting_capital:"300000",entry_rank:"12",exit_rank:"25",rebalance_frequency:"monthly",rebalance_date:"10",alternative_rebalance_day:"next_day",position_sizing:"equal_weight",strategy_name:"test",start_date:"2019-01-01",end_date:xe(),regime_filter_status:!0,regime_filter:"supertrend_1_2_5",regime_filter_action:"go_cash",regime_filter_indexes:"nifty_500",uncorrelated_asset_status:!0,uncorrelated_asset_type:"gold_bees",uncorrelated_asset_allocation:"100",score_model:"current",stoploss_status:!1,stoploss_percent:"0",stoploss_rebalance_timing:"same_day"},Tt=[{value:"weekly",label:"Weekly"},{value:"bi-weekly",label:"Bi-Weekly"},{value:"monthly",label:"Monthly"},{value:"bi-monthly",label:"Bi-Monthly"},{value:"quarterly",label:"Quarterly"}],Lt=[{value:"next_day",label:"Next Day"},{value:"previous_day",label:"Previous Day"}],zt=[{value:"same_day",label:"Same Day"},{value:"next_day",label:"Next Day"}],Ot=[{value:"equal_weight",label:"Equal Weight"}],At=[{value:"supertrend_1_2_5",label:"SUPERTREND 1,2.5"}],Bt=[{value:"half_portfolio",label:"Half Portfolio"},{value:"go_cash",label:"Go Cash"}],qt=[{value:"gold_bees",label:"Gold Bees"}];function xe(){return new Date().toISOString().slice(0,10)}function Vt(n,t){return n.replace(/(^|[{}])\s*([^@{}][^{]*)\{/g,(i,r,l)=>{const o=l.split(",").map(d=>d.trim()).filter(Boolean).map(d=>d.startsWith(t)?d:`${t} ${d}`).join(", ");return o?`${r}
  ${o} {`:i})}function M(n){const t=Number(n);return(Number.isFinite(t)?t:0).toLocaleString("en-IN",{maximumFractionDigits:2,minimumFractionDigits:2})}function fe(n){const t=Number(n);return(Number.isFinite(t)?Math.round(t):0).toLocaleString("en-IN")}function V(n){const t=Number(n);return Number.isFinite(t)?t.toFixed(2):"0.00"}function Ut(n){return(n||[]).map(t=>({label:String((t==null?void 0:t.label)??(t==null?void 0:t.value)??"").replace(/_/g," ").replace(/\b\w/g,i=>i.toUpperCase()),value:String((t==null?void 0:t.value)??"")}))}function Wt(n){return(n||[]).map(t=>({label:String((t==null?void 0:t.industry_name)??(t==null?void 0:t.label)??(t==null?void 0:t.value)??""),value:String((t==null?void 0:t.industry_name)??(t==null?void 0:t.value)??(t==null?void 0:t.label)??"")}))}function Re(n){if(Array.isArray(n))return n.map(t=>String(t??"").trim()).filter(Boolean);if(typeof n=="string"){const t=n.trim();return t?[t]:[]}return[]}function rt(n,t){if(typeof n=="string"){const i=n.trim();if(/^\d{4}-\d{2}-\d{2}$/.test(i))return i;if(i.length>=10&&/^\d{4}-\d{2}-\d{2}/.test(i))return i.slice(0,10);const r=new Date(i);if(!Number.isNaN(r.getTime()))return r.toISOString().slice(0,10)}return t}function Yt(n){const t=Re(n.alternative_rebalance_days)[0]||(typeof n.alternative_rebalance_day=="string"?n.alternative_rebalance_day:"")||w.alternative_rebalance_day;return{stock_price_min:String(n.stock_price_min??w.stock_price_min),stock_price_max:String(n.stock_price_max??w.stock_price_max),sectors:Re(n.sectors),indexes:Re(n.indexes),formula:String(n.formula??w.formula),starting_capital:String(n.starting_capital??w.starting_capital),entry_rank:String(n.entry_rank??w.entry_rank),exit_rank:String(n.exit_rank??w.exit_rank),rebalance_frequency:String(n.rebalance_frequency??w.rebalance_frequency),rebalance_date:String(n.rebalance_date??w.rebalance_date),alternative_rebalance_day:t,position_sizing:String(n.position_sizing??w.position_sizing),strategy_name:String(n.strategy_name??w.strategy_name),start_date:rt(n.start_date,w.start_date),end_date:rt(n.end_date,w.end_date),regime_filter_status:typeof n.regime_filter_status=="boolean"?n.regime_filter_status:w.regime_filter_status,regime_filter:String(n.regime_filter??w.regime_filter),regime_filter_action:String(n.regime_filter_action??w.regime_filter_action),regime_filter_indexes:String(n.regime_filter_indexes??w.regime_filter_indexes),uncorrelated_asset_status:typeof n.uncorrelated_asset_status=="boolean"?n.uncorrelated_asset_status:w.uncorrelated_asset_status,uncorrelated_asset_type:String(n.uncorrelated_asset_type??w.uncorrelated_asset_type),uncorrelated_asset_allocation:String(n.uncorrelated_asset_allocation??w.uncorrelated_asset_allocation),score_model:String(n.score_model??w.score_model),stoploss_status:typeof n.stoploss_status=="boolean"?n.stoploss_status:w.stoploss_status,stoploss_percent:String(n.stoploss_percent??w.stoploss_percent),stoploss_rebalance_timing:String(n.stoploss_rebalance_timing??w.stoploss_rebalance_timing)}}function Gt(n){return{index_name:n.indexes,sectors:n.sectors,min_price:null,max_price:null,top_n:Number(n.entry_rank||0),total_capital:Number(n.starting_capital||0),score_date:xe(),formula:n.formula||Ce,score_model:n.score_model||"current"}}function Ht(n){return{stock_price_min:Number(n.stock_price_min||0),stock_price_max:Number(n.stock_price_max||0),sectors:n.sectors,indexes:n.indexes,formula:n.formula||Ce,starting_capital:Number(n.starting_capital||0),entry_rank:Number(n.entry_rank||0),exit_rank:Number(n.exit_rank||0),rebalance_frequency:n.rebalance_frequency,rebalance_date:String(n.rebalance_date||10),alternative_rebalance_day:n.alternative_rebalance_day,position_sizing:n.position_sizing,strategy_name:n.strategy_name,start_date:n.start_date,end_date:n.end_date,regime_filter_status:n.regime_filter_status,regime_filter:n.regime_filter,regime_filter_action:n.regime_filter_action,regime_filter_indexes:n.regime_filter_indexes,uncorrelated_asset_status:n.uncorrelated_asset_status,uncorrelated_asset_type:n.uncorrelated_asset_type,uncorrelated_asset_allocation:Number(n.uncorrelated_asset_allocation||0),min_price:Number(n.stock_price_min||0)===0?null:Number(n.stock_price_min||0),max_price:Number(n.stock_price_max||0)===0?null:Number(n.stock_price_max||0),score_model:n.score_model||"current",stoploss_status:n.stoploss_status,stoploss_percent:Number(n.stoploss_percent||0),stoploss_rebalance_timing:n.stoploss_rebalance_timing}}function Jt(n,t,i){const r=t/i;let l=0;const o=[...n].sort((c,p)=>(Number(c.rank??c.Rank)||0)-(Number(p.rank??p.Rank)||0)).slice(0,i).map(c=>{const p=Number(c.last_price||0),y=p>0?Math.floor(r/p):0,R=y*p;return l+=R,{...c,rank:Number(c.rank??c.Rank??0),universe:String(c.universe||""),symbol:String(c.symbol||""),sector:String(c.sector||""),last_price:parseFloat(p.toFixed(2)),score:parseFloat(Number(c.score||0).toFixed(6)),qty:y,amount:parseFloat(R.toFixed(2)),Investment:parseFloat(r.toFixed(2)),kite_token:c.kite_token??c.token??"",dhan_token:c.dhan_token??""}}),d={total_capital:t,used_capital:parseFloat(l.toFixed(2)),remaining_capital:parseFloat((t-l).toFixed(2))};return{portfolio:o,summary:d}}function Qt(n){return(n||[]).map(t=>({rank:Number(t.rank??t.Rank??0),universe:String(t.universe||""),symbol:String(t.symbol||""),sector:String(t.sector||""),last_price:parseFloat(Number(t.last_price||0).toFixed(2)),score:parseFloat(Number(t.score||0).toFixed(6)),kite_token:t.kite_token??t.token??"",dhan_token:t.dhan_token??""}))}function Xt(n){return n==null||n===""?"--":typeof n=="number"?Number.isInteger(n)?fe(n):M(n).replace(/\.00$/,""):String(n)}function it({title:n,subtitle:t,rows:i,columns:r,action:l}){const o=m.useDeferredValue(i),[d,c]=m.useState(""),[p,y]=m.useState(15),[R,k]=m.useState(0),s=m.useMemo(()=>{const j=d.trim().toLowerCase();return j?o.filter(I=>Object.values(I).some($=>String($??"").toLowerCase().includes(j))):o},[o,d]),h=Math.max(1,Math.ceil(s.length/p)),D=Math.min(R,h-1),T=D*p,A=s.slice(T,T+p);return m.useEffect(()=>{k(0)},[d,p,i.length]),e.jsxs("section",{className:"eod-card",children:[e.jsxs("div",{className:"eod-section-header",children:[e.jsx("h4",{children:n}),e.jsx("span",{children:t})]}),e.jsxs("div",{className:"eod-section-body",children:[e.jsxs("div",{className:"eod-toolbar",children:[e.jsxs("div",{className:"eod-toolbar-left",children:[e.jsxs("span",{className:"eod-toolbar-badge",children:[s.length," rows"]}),e.jsx("input",{className:"eod-input",style:{width:"240px"},value:d,onChange:j=>c(j.target.value),placeholder:"Search symbol, sector, universe..."})]}),l?e.jsx("div",{className:"eod-toolbar-right",children:l}):null]}),e.jsx("div",{className:"eod-table-wrap",children:s.length===0?e.jsx("div",{className:"eod-empty",children:"No rows available for the current filters."}):e.jsx("div",{className:"eod-table-scroll",children:e.jsxs("table",{className:"eod-table",children:[e.jsx("thead",{children:e.jsx("tr",{children:r.map(j=>e.jsx("th",{className:j.align==="right"?"right":j.align==="center"?"center":"",children:e.jsx("button",{type:"button",children:j.label})},String(j.key)))})}),e.jsx("tbody",{children:A.map((j,I)=>e.jsx("tr",{className:`${I%2===1?"striped ":""}hoverable`,children:r.map($=>e.jsx("td",{className:$.align==="right"?"right":$.align==="center"?"center":"",children:$.render?$.render(j):Xt(j[$.key])},String($.key)))},I))})]})})}),s.length>0?e.jsxs("div",{className:"eod-pagination",children:[e.jsxs("div",{className:"eod-pagination-info",children:["Showing ",Math.min(T+1,s.length)," to ",Math.min(T+p,s.length)," of ",s.length," rows"]}),e.jsxs("div",{className:"eod-pagination-controls",children:[e.jsx("select",{className:"eod-select",style:{width:"92px",minWidth:"92px"},value:p,onChange:j=>y(Number(j.target.value)),children:[5,10,15,50,100].map(j=>e.jsxs("option",{value:j,children:[j,"/page"]},j))}),e.jsx("button",{type:"button",className:"eod-mini-btn",disabled:D===0,onClick:()=>k(j=>Math.max(0,j-1)),children:"Prev"}),e.jsxs("span",{className:"eod-pagination-info",children:["Page ",D+1," / ",h]}),e.jsx("button",{type:"button",className:"eod-mini-btn",disabled:D>=h-1,onClick:()=>k(j=>Math.min(h-1,j+1)),children:"Next"})]})]}):null]})]})}function Kt(n){const t={};return(n||[]).forEach(i=>{const r=String(i.end_date||""),l=r?new Date(`${r}T00:00:00`):null;if(!l||Number.isNaN(l.getTime()))return;const o=String(l.getFullYear()),d=String(l.getMonth()+1).padStart(2,"0");t[`${o}-${d}`]=i}),t}function Zt(n,t,i){const r={},l={},o=[],d=Kt(t);return(n||[]).forEach(c=>{const p=String(c.month||"").split("-");if(p.length!==2)return;const y=p[0],R=Number(p[1]);if(r[y]||(r[y]={},l[y]={},o.push(y)),r[y][R]=Number(c.Monthly_ROI_Pct||0),c.Start_Value!=null||c.End_Value!=null){const k=Number(c.Start_Value??0),s=Number(c.End_Value??0);l[y][R]={cc:k,op:k-i,pnl:s-k}}else if(c.Capital_Base!=null)l[y][R]={cc:Number(c.Capital_Base??0),op:Number(c.CumBeforeMonth??0),pnl:Number(c.MonthPnL??0)};else{const k=String(R).padStart(2,"0"),s=d[`${y}-${k}`];if(s){const h=Number(s.portfolio_start_value??0),D=Number(s.pnl_rupee??0);l[y][R]={cc:h,op:h-i,pnl:D}}}}),o.sort((c,p)=>Number(c)-Number(p)),{dataMap:r,detailMap:l,years:o}}function ea(n){const t={};return(n||[]).forEach(i=>{const r=String(i.end_date||""),l=r?new Date(`${r}T00:00:00`):null;if(!l||Number.isNaN(l.getTime()))return;const o=`${X[l.getMonth()]} ${l.getFullYear()}`;t[o]||(t[o]=[]),t[o].push(i)}),t}function ta(n){const t={};return(n||[]).forEach(i=>{const r=new Date(`${String(i.end_date||"")}T00:00:00`);if(Number.isNaN(r.getTime()))return;const l=String(r.getFullYear());t[l]||(t[l]=[]),t[l].push({...i,monthName:X[r.getMonth()],monthIndex:r.getMonth()})}),Object.keys(t).forEach(i=>t[i].sort((r,l)=>r.monthIndex-l.monthIndex)),t}function ot(n,t,i){return Object.prototype.hasOwnProperty.call(n[t]||{},i+1)}function aa(n,t){var P;const i=n||[],r=1e3,l=i.map(f=>Number(f.portfolio||0)),o=l.find(f=>f>0)??Math.max(t,1),d=i.map(f=>Number(f.index||0)),c=d.find(f=>f>0)??1,p=(P=i[0])!=null&&P.date?new Date(`${i[0].date}T00:00:00`):null,y=f=>{if(!f||Number.isNaN(f.getTime()))return"--";const E=f.getDate(),N=E%10===1&&E%100!==11?"st":E%10===2&&E%100!==12?"nd":E%10===3&&E%100!==13?"rd":"th";return`${E}${N} ${f.toLocaleString("en-US",{month:"short"})} ${f.getFullYear()}`},R=l.map(f=>parseFloat(f.toFixed(2))),k=d.map(f=>parseFloat((f/c*t).toFixed(2))),s=l.map(f=>parseFloat((f/o*r).toFixed(2))),h=d.map(f=>parseFloat((f/c*r).toFixed(2))),D=i.map((f,E)=>({x:f.date,y:s[E]})),T=i.map((f,E)=>({x:f.date,y:h[E]})),A=[...s,...h].filter(f=>Number.isFinite(f)&&f>0),j=A.length?Math.min(...A):r,I=A.length?Math.max(...A):r,$={chart:{height:350,type:"area",background:"transparent",toolbar:{show:!0,tools:{download:!0,zoom:!0,pan:!0,reset:!0}},zoom:{enabled:!0},animations:{enabled:!1}},dataLabels:{enabled:!1},stroke:{curve:"smooth",width:[2,2]},colors:["#2b67c7","#8b5cf6"],series:[{name:"Portfolio",data:D},{name:"Nifty 500",data:T}],xaxis:{type:"datetime",labels:{datetimeUTC:!1,style:{colors:"#555",fontSize:"11px"}},axisBorder:{show:!1},axisTicks:{show:!1}},yaxis:{labels:{formatter:f=>f>=1e3?`${(f/1e3).toFixed(f>=2e3?0:1)}k`:Number(f).toFixed(0),style:{colors:"#555",fontSize:"11px"}},min:Math.floor(j*.97),max:Math.ceil(I*1.05)},annotations:{yaxis:[{y:r,borderColor:"#888",borderWidth:1.5,strokeDashArray:5,label:{text:`Base NAV ${r}`,borderColor:"#888",position:"left",offsetX:12,style:{color:"#555",fontSize:"11px",background:"#f5f5f5"}}}]},tooltip:{shared:!0,intersect:!1,x:{format:"dd MMM yyyy"},custom:({dataPointIndex:f})=>{const E=s[f]??r,N=h[f]??r,U=R[f]??t,ae=k[f]??t,J=(E/r-1)*100,se=(N/r-1)*100,O=E-r,re=N-r;return`
          <div style="min-width:230px;padding:14px 16px;background:#fff;border:1px solid #e5e7eb;border-radius:14px;box-shadow:0 12px 32px rgba(15,23,42,0.12);">
            <div style="display:flex;align-items:center;gap:10px;color:#1f2937;font-size:13px;font-weight:700;">
              <span style="display:inline-block;width:12px;height:12px;background:#2b67c7;border-radius:2px;"></span>
              Combined NAV: ${E.toFixed(2)}
            </div>
            <div style="display:flex;align-items:center;gap:10px;color:#1f2937;font-size:13px;font-weight:700;margin-top:10px;">
              <span style="display:inline-block;width:12px;height:12px;background:#8b5cf6;border-radius:2px;"></span>
              Nifty 500: ${N.toFixed(2)}
            </div>
            <div style="height:1px;background:#e5e7eb;margin:14px 0;"></div>
            <div style="color:#4b5563;font-size:12px;margin-bottom:10px;">Since ${y(p)}</div>
            <div style="color:#4b5563;font-size:12px;margin-bottom:6px;">
              Portfolio Current Capital: <span style="color:#111827;font-weight:700;">₹${U.toLocaleString("en-IN",{maximumFractionDigits:2,minimumFractionDigits:2})}</span>
            </div>
            <div style="color:#4b5563;font-size:12px;margin-bottom:10px;">
              Nifty 500 Current Capital: <span style="color:#111827;font-weight:700;">₹${ae.toLocaleString("en-IN",{maximumFractionDigits:2,minimumFractionDigits:2})}</span>
            </div>
            <div style="color:#4b5563;font-size:12px;margin-bottom:6px;">
              Portfolio: <span style="color:${J>=0?"#10b981":"#ef4444"};font-weight:700;">${J.toFixed(2)}%</span>
            </div>
            <div style="color:#4b5563;font-size:12px;">
              Nifty 500: <span style="color:${se>=0?"#10b981":"#ef4444"};font-weight:700;">${se.toFixed(2)}%</span>
            </div>
            <div style="height:1px;background:#e5e7eb;margin:14px 0;"></div>
            <div style="color:#4b5563;font-size:12px;margin-bottom:6px;">
              Portfolio Cumulative PnL: <span style="color:${O>=0?"#10b981":"#ef4444"};font-weight:700;">₹${O.toLocaleString("en-IN",{maximumFractionDigits:2,minimumFractionDigits:2})}</span>
            </div>
            <div style="color:#4b5563;font-size:12px;">
              Nifty 500 Cumulative PnL: <span style="color:${re>=0?"#10b981":"#ef4444"};font-weight:700;">₹${re.toLocaleString("en-IN",{maximumFractionDigits:2,minimumFractionDigits:2})}</span>
            </div>
          </div>
        `}},legend:{position:"top",horizontalAlign:"right",fontSize:"13px",labels:{colors:"#333"},markers:{size:8}},fill:{type:"gradient",gradient:{type:"vertical",shadeIntensity:0,colorStops:[[{offset:0,color:"#2ecc71",opacity:.4},{offset:100,color:"#2ecc71",opacity:.02}],[{offset:0,color:"#f39c12",opacity:.25},{offset:100,color:"#f39c12",opacity:.02}]]}},grid:{borderColor:"#e9ecef",strokeDashArray:4},title:{text:"Portfolio performance",align:"left",style:{color:"#2a2a2a",fontWeight:"bold",fontSize:"16px"}}};return{options:$,series:$.series||[]}}function na(n,t){const i=n||[],r=i.map(d=>Number(d.index||0)),l=r.find(d=>d>0)??1,o=r.map(d=>parseFloat((d/l*t).toFixed(2)));return i.map((d,c)=>{var T;const p=Number(d.portfolio||0),y=c>0?Number(((T=i[c-1])==null?void 0:T.portfolio)||0):p,R=p-y,k=y>0?R/y*100:0,s=o[c]||0,h=c>0?o[c-1]||0:s,D=s-h;return{date:String(d.date||"--"),portfolio_value:parseFloat(p.toFixed(2)),daily_pnl:parseFloat(R.toFixed(2)),daily_roi:parseFloat(k.toFixed(4)),index_value:parseFloat(s.toFixed(2)),index_daily_pnl:parseFloat(D.toFixed(2))}})}function ct(n){return String(n??"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&apos;")}function sa(n){if(n==null||n==="")return'<Cell><Data ss:Type="String"></Data></Cell>';const t=typeof n=="number"?n:Number(n);return!(typeof n=="string"&&/^\d{4}-\d{2}-\d{2}(T.*)?$/.test(n))&&Number.isFinite(t)&&String(n).trim()!==""?`<Cell><Data ss:Type="Number">${t}</Data></Cell>`:`<Cell><Data ss:Type="String">${ct(n)}</Data></Cell>`}function z(n,t){const i=t.map(r=>`<Row>${r.map(o=>sa(o)).join("")}</Row>`).join("");return`<Worksheet ss:Name="${ct(n)}"><Table>${i}</Table></Worksheet>`}function ne(n,t){if(!n.length)return[[]];const i=new Set;n.forEach(o=>Object.keys(o).forEach(d=>i.add(d)));const l=[...i];return[l,...n.map(o=>l.map(d=>o[d]??""))]}function _e(n){if(n instanceof Date&&!Number.isNaN(n.getTime()))return n.toISOString().slice(0,10);if(typeof n=="string"){const t=n.trim();return/^\d{4}-\d{2}-\d{2}(T.*)?$/.test(t)?t.slice(0,10):t||"--"}return typeof n=="number"&&Number.isFinite(n)?n:n??"--"}function ra(n){return[["Stock","Buy Date","Buy_price","Exit Date","Exit_Price","No.OfShares","ROI"],...n.map(t=>[t.symbol??t.stock??t.ticker??"--",_e(t.buy_date??t.entry_date??t.start_date),t.buy_price??t.entry_price??t.price??"--",_e(t.sell_date??t.exit_date??t.end_date),t.sell_price??t.exit_price??t.close_price??"--",t.qty??t.no_of_shares??t.quantity??t.shares??"--",t.roi??t.roi_percent??t.return_pct??t.pnl_pct??"--"])]}function he(n){const t=_e(n);if(typeof t!="string")return"";const i=t.match(/^(\d{4})-(\d{2})/);return i?`${i[1]}-${i[2]}`:""}function ia(n){const t=n.closed_trades_json||n.trade_history||[],i=n.monthly_final_json||[],r=n.monthly_equity_json||[],l=n.monthly_closed_json||[],o=new Map;r.forEach(c=>{const p=String(c.Month||he(c.date)||"").trim();p&&o.set(p,{...o.get(p)||{},equity:c})}),i.forEach(c=>{const p=String(c.month||he(c.end_date)||"").trim();p&&o.set(p,{...o.get(p)||{},final:c})}),l.forEach(c=>{const p=String(c.Month||c.month||he(c.date)||"").trim();p&&o.set(p,{...o.get(p)||{},closed:c})}),t.forEach(c=>{const p=he(c.sell_date??c.exit_date??c.end_date);if(!p)return;const y=o.get(p)||{},R=Array.isArray(y.trades)?y.trades:[];o.set(p,{...y,trades:[...R,c]})});const d=[...o.keys()].sort();return[["Year","Month","Date","No.of Rebalanced Stock","Unrealized ROI%","No.of Winners","No. of Lossers","Top Winner ROI%","Top Losser ROI%","Avg. Winners ROI%","Avg. Lossers ROI%","Risk to Reward"],...d.map(c=>{const p=o.get(c)||{},y=Array.isArray(p.trades)?p.trades:[],R=y.map(N=>Number(N.roi??N.roi_percent??N.return_pct??N.pnl_pct)).filter(N=>Number.isFinite(N)),k=R.filter(N=>N>0),s=R.filter(N=>N<0),h=k.length?k.reduce((N,U)=>N+U,0)/k.length:"",D=s.length?s.reduce((N,U)=>N+U,0)/s.length:"",T=k.length?Math.max(...k):"",A=s.length?Math.min(...s):"",j=typeof h=="number"&&typeof D=="number"&&D!==0?h/Math.abs(D):"",I=p.equity||{},$=p.final||{},P=p.closed||{},[f="",E=""]=c.split("-");return[f,E?Number(E):"",_e(I.date??$.end_date??`${c}-01`),y.length||Number(P.rebalanced_stock_count??P.no_of_rebalanced_stock??P.rebalanced_count??0),I.unrealized_return_pct??$.portfolio_roi??P.closed_roi_pct??"",k.length,s.length,T,A,h,D,j]})]}function oa(n){const i=[["Signal Date","Day","Signal","Trade Date","Action","Symbol","Qty","Price","Rank"]];for(const r of n){const l=r.signal==="Sell"?r.sell_date??r.signal_date:r.buy_date??r.signal_date,o=r.signal_day??"";if(r.signal==="Sell"){for(const d of r.stocks_sold??[])i.push([r.signal_date,o,"Sell",l,d.action??"SELL_SIGNAL",d.symbol,d.qty,d.price,d.rank??""]);for(const d of r.stocks_skipped??[])i.push([r.signal_date,o,"Sell",l,"SKIPPED_NO_PRICE",d.symbol,"","",""]);r.gold_bought&&i.push([r.signal_date,o,"Sell",r.gold_bought.date??l,"BUY_GOLDBEES","gold_bees",r.gold_bought.qty,r.gold_bought.price,""])}else{r.gold_sold&&i.push([r.signal_date,o,"Buy",r.gold_sold.date??l,"SELL_GOLDBEES","gold_bees",r.gold_sold.qty,r.gold_sold.price,""]);for(const d of r.stocks_bought??[])i.push([r.signal_date,o,"Buy",l,d.action??"BUY_REENTER",d.symbol,d.qty,d.price,d.rank??""])}}return i}function la(n){const i=[["Date","Day","Action","Symbol","Qty","Price","Rank","Buy Price","Loss %"]];for(const r of n)i.push([r.date,r.day??"",r.action,r.symbol,r.qty,r.price,r.rank??"",r.buy_price??"",r.loss_percent??""]);return i}function ca(n){const t={...n.metrics||{}},l=(n.closed_trades_json||n.trade_history||[]).map(o=>Number(o.roi??o.roi_percent??o.return_pct??o.pnl_pct)).filter(o=>Number.isFinite(o)).filter(o=>Math.abs(o)>1e-9);return t.total_trades==null&&(t.total_trades=l.length),t.no_of_winners==null&&(t.no_of_winners=l.filter(o=>o>0).length),t.no_of_losers==null&&(t.no_of_losers=l.filter(o=>o<0).length),t}function da(n){const t={total_trades:"Total Trade",no_of_winners:"No.Of Winners",no_of_losers:"No.Of Losers",win_rate_percent:"Win Rate(%)",avg_winners_roi_percent:"Avg. Winners ROI(%)",avg_losers_roi_percent:"Avg. Losers ROI(%)",biggest_winner_roi_percent:"Biggest Winner ROI(%)",biggest_loser_roi_percent:"Biggest Loser ROI(%)",risk_reward:"Risk To Reward",max_drawdown:"Max. DD(%)",gagr:"CAGR(%)",avg_trades_per_year:"Avg. trade per year",kurtosis_monthly_roi:"kurtosis(MonthlyROI)",kurtosis_trade_roi:"kurtosis(TradeROI)",std:"STD",calmar_ratio:"Calmar Ratio",invested_capital:"Invested Capital",final_capital:"Current Capital",idle_cash:"Idle Cash",total_return:"Total Return(%)"};return t[n]?t[n]:n.replace(/_/g," ").replace(/\b\w/g,i=>i.toUpperCase())}function pa(n){const t=new Date(`${n}T00:00:00`);if(Number.isNaN(t.getTime()))return n;const i=new Date(t),r=i.getDay(),l=r===0?-6:1-r;return i.setDate(i.getDate()+l),i.toISOString().slice(0,10)}function ua(n){let t=0;return(n||[]).map(i=>{const r=Number(i.portfolio||0);t=Math.max(t,r);const l=t>0?(r-t)/t*100:0,o=r-t;return{date:String(i.date||""),drawdown_pct:parseFloat(l.toFixed(4)),peak_value:t,bottom_value:r,drawdown_rupee:parseFloat(o.toFixed(2))}})}function lt(n){const t=new Map;return(n||[]).forEach(i=>{const r=pa(String(i.date||"")),l=t.get(r);(!l||Number(i.drawdown_pct||0)<Number(l.drawdown_pct||0))&&t.set(r,{...i,date:r})}),Array.from(t.values()).sort((i,r)=>String(i.date).localeCompare(String(r.date)))}function ga(n,t){const i=n||[],r=i.map(d=>({x:d.date,y:parseFloat(Number(d.drawdown_pct).toFixed(4))})),l=i.reduce((d,c)=>Math.min(d,Number(c.drawdown_pct)),0),o={chart:{height:250,type:"area",background:"transparent",toolbar:{show:!0,tools:{download:!0,zoom:!0,pan:!0,reset:!0}},zoom:{enabled:!0},animations:{enabled:!1}},dataLabels:{enabled:!1},stroke:{curve:"smooth",width:2},colors:["#e74c3c"],series:[{name:"Drawdown (%)",data:r}],xaxis:{type:"datetime",labels:{datetimeUTC:!1,style:{colors:"#555",fontSize:"11px"}},axisBorder:{show:!1},axisTicks:{show:!1}},yaxis:{labels:{formatter:d=>`${Number(d).toFixed(2)}%`,style:{colors:"#555",fontSize:"11px"}},min:l*1.05,max:0},tooltip:{shared:!1,x:{format:"dd MMM yyyy"},y:{formatter:d=>`${Number(d).toFixed(2)}%`}},fill:{type:"gradient",gradient:{shadeIntensity:1,opacityFrom:.35,opacityTo:.08,stops:[0,90,100]}},title:{text:`${t} Drawdown Curve`,align:"left",style:{color:"#b42318",fontWeight:"bold",fontSize:"16px"}}};return{options:o,series:o.series||[]}}function ma({label:n,options:t,value:i,onChange:r}){const[l,o]=m.useState(!1),d=m.useRef(null),c=m.useMemo(()=>t.map(h=>h.value),[t]),p=m.useMemo(()=>t.filter(h=>i.includes(h.value)).map(h=>h.label),[t,i]),y=t.length>0&&i.length===t.length;m.useEffect(()=>{const h=D=>{d.current&&!d.current.contains(D.target)&&o(!1)};return document.addEventListener("mousedown",h),()=>document.removeEventListener("mousedown",h)},[]);const R=h=>{if(i.includes(h)){r(i.filter(D=>D!==h));return}r([...i,h])},k=()=>{r(y?[]:c)},s=p.length?p.length<=2?p.join(", "):`${p.slice(0,2).join(", ")} +${p.length-2}`:`Select ${n}`;return e.jsxs("div",{className:`scanner-field scanner-eod-multi-field ${l?"scanner-eod-multi-field-open":""}`,ref:d,children:[e.jsxs("label",{children:[n,"*"]}),e.jsxs("button",{type:"button",className:"scanner-eod-multi-trigger",onClick:()=>o(h=>!h),children:[e.jsx("span",{className:p.length?"":"scanner-eod-multi-placeholder",children:s}),e.jsx("span",{className:`scanner-eod-multi-caret ${l?"open":""}`,children:"▾"})]}),l?e.jsxs("div",{className:"scanner-eod-multi-panel",children:[e.jsxs("label",{className:"scanner-eod-multi-option scanner-eod-multi-option-sticky",children:[e.jsx("input",{type:"checkbox",checked:y,onChange:k}),e.jsx("span",{children:"Select All"})]}),e.jsx("div",{className:"scanner-eod-multi-list",children:t.map(h=>e.jsxs("label",{className:`scanner-eod-multi-option ${i.includes(h.value)?"selected":""}`,children:[e.jsx("input",{type:"checkbox",checked:i.includes(h.value),onChange:()=>R(h.value)}),e.jsx("span",{children:h.label})]},h.value))})]}):null]})}const ba=Vt(`
  * { box-sizing: border-box; }

  .scanner-backtest-page {
    min-height: 100vh;
    padding: 24px;
    color: #132238;
  }

  .scanner-backtest-page .scanner-grid {
    display: grid;
    grid-template-columns: repeat(12, minmax(0, 1fr));
    gap: 16px;
  }

  .scanner-backtest-page .scanner-col-6 {
    grid-column: span 6;
    min-width: 0;
  }

  .scanner-backtest-page .scanner-col-12 {
    grid-column: span 12;
  }

  .scanner-backtest-page .scanner-card {
    border: 1px solid #ccd7ea;
    border-radius: 18px;
    background: #ffffff;
    box-shadow: 0 10px 28px rgba(15, 23, 42, 0.05);
    overflow: hidden;
  }

  .scanner-backtest-page .scanner-card-body {
    padding: 18px 18px 16px;
  }

  .scanner-backtest-page .scanner-card-title {
    margin: 0 0 16px;
    font-size: 1rem;
    font-weight: 500;
    color: #111827;
  }

  .scanner-backtest-page .scanner-form-grid {
    display: grid;
    grid-template-columns: repeat(12, minmax(0, 1fr));
    gap: 14px 14px;
  }

  .scanner-backtest-page .scanner-field {
    grid-column: span 6;
    min-width: 0;
  }

  .scanner-backtest-page .scanner-field.full {
    grid-column: span 12;
  }

  .scanner-backtest-page .scanner-field.wide {
    grid-column: span 8;
  }

  .scanner-backtest-page .scanner-field label {
    display: block;
    margin: 0 0 6px;
    font-size: 0.82rem;
    color: #374151;
  }

  .scanner-backtest-page .scanner-input,
  .scanner-backtest-page .scanner-select,
  .scanner-backtest-page .scanner-textarea,
  .scanner-backtest-page .scanner-multi-trigger {
    width: 100%;
    border: 1px solid #9ca3af;
    border-radius: 6px;
    background: #fff;
    color: #111827;
    padding: 14px 14px;
    min-height: 58px;
    font-size: 0.95rem;
    outline: none;
  }

  .scanner-backtest-page .scanner-textarea {
    min-height: 106px;
    resize: vertical;
    line-height: 1.45;
  }

  .scanner-backtest-page .scanner-input:focus,
  .scanner-backtest-page .scanner-select:focus,
  .scanner-backtest-page .scanner-textarea:focus,
  .scanner-backtest-page .scanner-multi-trigger:focus {
    border-color: #2563eb;
    box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.12);
  }

  .scanner-backtest-page .scanner-switch-row {
    grid-column: span 12;
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 8px 0 2px;
  }

  .scanner-backtest-page .scanner-switch {
    width: 54px;
    height: 32px;
    border-radius: 999px;
    border: 0;
    background: #d1d5db;
    position: relative;
    cursor: pointer;
    transition: background .2s ease;
  }

  .scanner-backtest-page .scanner-switch.active {
    background: #1565c0;
  }

  .scanner-backtest-page .scanner-switch::after {
    content: "✓";
    position: absolute;
    top: 4px;
    left: 4px;
    width: 24px;
    height: 24px;
    border-radius: 999px;
    background: #fff;
    color: #1565c0;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 0.9rem;
    font-weight: 700;
    transition: transform .2s ease;
  }

  .scanner-backtest-page .scanner-switch.active::after {
    transform: translateX(22px);
  }

  .scanner-backtest-page .scanner-switch-label {
    font-size: 0.95rem;
    color: #1f2937;
  }

  .scanner-backtest-page .scanner-actions {
    grid-column: span 12;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    gap: 10px;
    margin-top: 4px;
  }

  .scanner-backtest-page .scanner-btn {
    border: 0;
    background: none;
    color: #1565c0;
    font-size: 0.95rem;
    font-weight: 500;
    cursor: pointer;
    padding: 8px 10px;
  }

  .scanner-backtest-page .scanner-btn.primary {
    min-width: 104px;
    border-radius: 999px;
    background: #1565c0;
    color: #fff;
    font-weight: 600;
    padding: 12px 22px;
  }

  .scanner-backtest-page .scanner-btn.primary:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }

  .scanner-backtest-page .scanner-status {
    grid-column: span 12;
    color: #4b5563;
    font-size: 0.86rem;
  }

  .scanner-backtest-page .scanner-error {
    grid-column: span 12;
    padding: 10px 12px;
    border-radius: 10px;
    border: 1px solid #fecdd3;
    background: #fff1f2;
    color: #be123c;
    font-size: 0.88rem;
  }

  .scanner-backtest-page .scanner-eod-multi-field {
    position: relative;
  }

  .scanner-backtest-page .scanner-eod-multi-field-open {
    z-index: 20;
  }

  .scanner-backtest-page .scanner-eod-multi-trigger {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    text-align: left;
    cursor: pointer;
    width: 100%;
    border: 2px solid #1d72dc;
    border-radius: 4px;
    background: #fff;
    color: #162235;
    padding: 13px 16px 12px;
    font-size: 1rem;
    line-height: 1.3;
    box-shadow: none;
    gap: 12px;
  }

  .scanner-backtest-page .scanner-eod-multi-placeholder {
    color: #73839a;
  }

  .scanner-backtest-page .scanner-eod-multi-trigger > span:first-child {
    flex: 1;
    min-width: 0;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    overflow: hidden;
    word-break: break-word;
  }

  .scanner-backtest-page .scanner-eod-multi-caret {
    font-size: 0.9rem;
    color: #1565c0;
    transition: transform .18s ease;
    margin-left: 0;
    flex: 0 0 auto;
    align-self: center;
  }

  .scanner-backtest-page .scanner-eod-multi-caret.open {
    transform: rotate(180deg);
  }

  .scanner-backtest-page .scanner-eod-multi-panel {
    position: absolute;
    top: calc(100% - 1px);
    left: 0;
    right: 0;
    margin-top: 0;
    border: 0;
    border-top: 0;
    border-radius: 0 0 4px 4px;
    background: #fbf9f9;
    box-shadow: 0 8px 16px rgba(15, 23, 42, 0.12);
    overflow: hidden;
    z-index: 8;
  }

  .scanner-backtest-page .scanner-eod-multi-option {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 10px;
    min-height: 40px;
    padding: 8px 16px;
    font-size: 0.95rem;
    font-weight: 500;
    line-height: 1.2;
    color: #162235;
    cursor: pointer;
    background: #fbf9f9;
  }

  .scanner-backtest-page .scanner-eod-multi-panel label.scanner-eod-multi-option {
    display: flex;
    margin: 0;
  }

  .scanner-backtest-page .scanner-eod-multi-option.selected {
    background: #e6f0fc;
  }

  .scanner-backtest-page .scanner-eod-multi-option:hover {
    background: #fbf9f9;
  }

  .scanner-backtest-page .scanner-eod-multi-option.selected:hover {
    background: #e6f0fc;
  }

  .scanner-backtest-page .scanner-eod-multi-option input {
    display: block;
    width: 18px;
    height: 18px;
    margin: 0;
    accent-color: #1565c0;
    cursor: pointer;
    transform: translateY(0);
  }

  .scanner-backtest-page .scanner-eod-multi-option span {
    flex: 1;
    display: inline-block;
    color: #162235;
    line-height: 1.35;
    white-space: normal;
    overflow: visible;
    text-overflow: unset;
  }

  .scanner-backtest-page .scanner-eod-multi-option-sticky {
    position: sticky;
    top: 0;
    z-index: 1;
    background: #fbf9f9;
  }

  .scanner-backtest-page .scanner-eod-multi-list {
    max-height: 270px;
    overflow: auto;
    background: #fbf9f9;
  }

  .scanner-backtest-page .scanner-metrics-grid {
    display: grid;
    grid-template-columns: repeat(12, minmax(0, 1fr));
    gap: 16px;
  }

  .scanner-backtest-page .scanner-metric-card {
    grid-column: span 3;
    border: 1px solid #e5e7eb;
    border-radius: 14px;
    background: #fcfcfc;
    padding: 14px 16px;
  }

  .scanner-backtest-page .scanner-metric-label {
    display: flex;
    align-items: center;
    gap: 10px;
    color: #574a4a;
    font-size: 0.86rem;
  }

  .scanner-backtest-page .scanner-metric-label-icon {
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

  .scanner-backtest-page .scanner-metric-value {
    margin-top: 12px;
    color: #111827;
    font-size: 1.4rem;
    font-weight: 700;
  }

  .scanner-backtest-page .scanner-metric-note {
    margin-top: 6px;
    color: #6b7280;
    font-size: 0.78rem;
    font-weight: 600;
  }

  .scanner-backtest-page .scanner-big-card {
    grid-column: span 6;
    border: 1px solid #e6edf8;
    border-radius: 16px;
    background: #ffffff;
    padding: 16px 16px 18px;
    box-shadow: 0 8px 20px rgba(15, 23, 42, 0.05);
  }

  .scanner-backtest-page .scanner-big-card-head {
    display: flex;
    align-items: center;
    gap: 10px;
    color: #374151;
    font-size: 0.98rem;
    font-weight: 700;
  }

  .scanner-backtest-page .scanner-big-card-icon {
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

  .scanner-backtest-page .scanner-big-card-stats {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 18px;
    align-items: center;
    margin-top: 28px;
  }

  .scanner-backtest-page .scanner-big-card-stats h4 {
    margin: 0;
    color: #3f3f46;
    font-size: 1rem;
    font-weight: 700;
    line-height: 1.35;
  }

  .scanner-backtest-page .scanner-big-card-stats h4:last-child {
    text-align: right;
  }

  .scanner-backtest-page .scanner-report-actions {
    display: flex;
    justify-content: flex-end;
    padding: 0 0 14px;
  }

  .scanner-backtest-page .scanner-report-download {
    border: 0;
    border-radius: 999px;
    padding: 12px 20px;
    background: #2563eb;
    color: #fff;
    font-size: 13px;
    font-weight: 700;
    cursor: pointer;
    box-shadow: 0 10px 20px rgba(37, 99, 235, 0.18);
    transition: transform 0.18s ease, opacity 0.18s ease;
  }

  .scanner-backtest-page .scanner-report-download:hover {
    transform: translateY(-1px);
  }

  .scanner-backtest-page .scanner-report-download:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }

  .scanner-backtest-page .scanner-section {
    margin-top: 20px;
    border-radius: 16px;
    background: #fff;
    padding: 20px;
    border: 1px solid #e6edf8;
    box-shadow: 0 10px 26px rgba(15, 23, 42, 0.05);
  }

  .scanner-backtest-page .scanner-section-title {
    display: flex;
    align-items: center;
    gap: 10px;
    margin: 0 0 16px;
    color: #1e7e34;
    font-size: 0.98rem;
    font-weight: 800;
  }

  .scanner-backtest-page .scanner-section-title::before {
    content: "📊";
    font-size: 1.2rem;
  }

  .scanner-backtest-page .scanner-table-wrap {
    overflow-x: auto;
  }

  .scanner-backtest-page .scanner-table {
    width: 100%;
    border-collapse: collapse;
    text-align: center;
    font-size: 14px;
    min-width: 1280px;
  }

  .scanner-backtest-page .scanner-table th {
    background: #009c3b;
    color: #fff;
    padding: 10px 8px;
    font-weight: 700;
  }

  .scanner-backtest-page .scanner-table td {
    padding: 10px 8px;
    border-bottom: 1px solid #e5e7eb;
    color: #333;
    vertical-align: middle;
  }

  .scanner-backtest-page .scanner-table .year-cell {
    font-weight: 700;
    font-size: 1.05rem;
    color: #1f2937;
  }

  .scanner-backtest-page .scanner-month-cell {
    min-width: 110px;
  }

  .scanner-backtest-page .scanner-month-roi {
    font-size: 0.95rem;
    font-weight: 800;
    line-height: 1.2;
    margin-bottom: 4px;
  }

  .scanner-backtest-page .scanner-month-meta {
    display: grid;
    gap: 2px;
    font-size: 0.8rem;
    line-height: 1.25;
    color: #111827;
  }

  .scanner-backtest-page .scanner-month-meta span {
    font-weight: 700;
    color: #111827;
  }

  .scanner-backtest-page .scanner-month-empty {
    color: #6b7280;
    font-size: 0.95rem;
  }

  .scanner-backtest-page .positive,
  .scanner-backtest-page td.positive,
  .scanner-backtest-page th.positive {
    color: #009c3b;
    font-weight: 600;
  }

  .scanner-backtest-page .negative,
  .scanner-backtest-page td.negative,
  .scanner-backtest-page th.negative {
    color: #e53935;
    font-weight: 600;
  }

  .scanner-backtest-page .scanner-month-group {
    margin-bottom: 18px;
  }

  .scanner-backtest-page .scanner-month-header {
    width: 100%;
    background: #0077cc;
    color: #fff;
    padding: 8px 15px;
    font-weight: 700;
    font-size: 15px;
    margin-top: 18px;
    border-radius: 4px;
  }

  .scanner-backtest-page .scanner-weekly-table,
  .scanner-backtest-page .scanner-year-table {
    width: 100%;
    border-collapse: collapse;
    margin-top: 6px;
    font-size: 13px;
  }

  .scanner-backtest-page .scanner-weekly-table th,
  .scanner-backtest-page .scanner-weekly-table td,
  .scanner-backtest-page .scanner-year-table th,
  .scanner-backtest-page .scanner-year-table td {
    border: 1px solid #ddd;
    padding: 6px;
    text-align: center;
  }

  .scanner-backtest-page .scanner-year-table th {
    background: #1761ae;
    color: #fff;
  }

  .scanner-backtest-page .scanner-section-chart {
    padding: 16px 20px;
  }

  .scanner-backtest-page .scanner-drawdown-tabs {
    display: flex;
    gap: 10px;
    margin-bottom: 14px;
    flex-wrap: wrap;
  }

  .scanner-backtest-page .scanner-drawdown-tab {
    border: 1px solid #c9d6e4;
    background: #fff;
    color: #1d3552;
    border-radius: 999px;
    padding: 9px 16px;
    font-size: 0.88rem;
    font-weight: 700;
    cursor: pointer;
    transition: all 0.2s ease;
  }

  .scanner-backtest-page .scanner-drawdown-tab.active {
    background: linear-gradient(135deg, #0f6adf 0%, #1d8bff 100%);
    border-color: #0f6adf;
    color: #fff;
    box-shadow: 0 10px 20px rgba(15, 106, 223, 0.2);
  }

  .scanner-backtest-page .scanner-empty {
    color: #6b7280;
    font-size: 0.92rem;
  }

  @media (max-width: 1280px) {
    .scanner-backtest-page .scanner-col-6,
    .scanner-backtest-page .scanner-metric-card,
    .scanner-backtest-page .scanner-big-card {
      grid-column: span 12;
    }
  }

  .scanner-backtest-page .eod-card {
    margin-top: 20px;
    border: 1px solid rgba(148, 163, 184, 0.35);
    border-radius: 22px;
    background: rgba(255, 255, 255, 0.92);
    box-shadow: 0 18px 40px rgba(15, 23, 42, 0.08);
    backdrop-filter: blur(12px);
    overflow: hidden;
  }

  .scanner-backtest-page .eod-section-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 12px;
    background: linear-gradient(135deg, #5467cf 0%, #6a7de6 100%);
    color: #fff;
    padding: 14px 18px;
  }

  .scanner-backtest-page .eod-section-header h4 {
    margin: 0;
    font-size: 1rem;
    font-weight: 800;
    letter-spacing: 0.04em;
  }

  .scanner-backtest-page .eod-section-header span {
    font-size: 0.84rem;
    color: rgba(255, 255, 255, 0.88);
  }

  .scanner-backtest-page .eod-section-body {
    padding: 16px 18px 18px;
  }

  .scanner-backtest-page .eod-summary-grid {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 12px;
    margin-bottom: 16px;
  }

  .scanner-backtest-page .eod-summary-card {
    border-radius: 18px;
    border: 1px solid #d7e2ef;
    background: linear-gradient(180deg, #ffffff 0%, #f8fbff 100%);
    padding: 15px 16px;
  }

  .scanner-backtest-page .eod-summary-card span {
    display: block;
    color: #5f6f84;
    font-size: 0.8rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.06em;
  }

  .scanner-backtest-page .eod-summary-card strong {
    display: block;
    margin-top: 8px;
    font-size: 1.06rem;
    color: #10233b;
  }

  .scanner-backtest-page .eod-toolbar {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    gap: 12px;
    margin-bottom: 14px;
  }

  .scanner-backtest-page .eod-toolbar-left,
  .scanner-backtest-page .eod-toolbar-right {
    display: flex;
    align-items: center;
    gap: 10px;
    flex-wrap: wrap;
  }

  .scanner-backtest-page .eod-toolbar-badge {
    padding: 7px 12px;
    border-radius: 999px;
    background: #eaf2ff;
    color: #0f6adf;
    font-size: 0.82rem;
    font-weight: 700;
  }

  .scanner-backtest-page .eod-input,
  .scanner-backtest-page .eod-select {
    width: 100%;
    border: 1px solid #c9d6e4;
    border-radius: 14px;
    background: linear-gradient(180deg, #ffffff 0%, #f9fbff 100%);
    color: #0f172a;
    padding: 12px 14px;
    font-size: 0.95rem;
    outline: none;
  }

  .scanner-backtest-page .eod-table-wrap {
    border: 1px solid #d8e2ef;
    border-radius: 18px;
    overflow: hidden;
    position: relative;
    background: #fff;
  }

  .scanner-backtest-page .eod-table-scroll {
    overflow-x: auto;
  }

  .scanner-backtest-page .eod-table {
    width: 100%;
    border-collapse: separate;
    border-spacing: 0;
    min-width: 980px;
  }

  .scanner-backtest-page .eod-table thead th {
    position: sticky;
    top: 0;
    z-index: 1;
    background: #f3f7fc;
    border-bottom: 1px solid #d9e5f2;
    color: #203149;
    font-size: 0.82rem;
    font-weight: 800;
    text-transform: uppercase;
    letter-spacing: 0.04em;
    padding: 13px 12px;
    white-space: nowrap;
  }

  .scanner-backtest-page .eod-table thead th button {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    border: 0;
    background: transparent;
    color: inherit;
    font: inherit;
    padding: 0;
  }

  .scanner-backtest-page .eod-table tbody td {
    border-bottom: 1px solid #edf2f7;
    padding: 12px;
    font-size: 0.92rem;
    color: #213246;
    vertical-align: middle;
    white-space: nowrap;
  }

  .scanner-backtest-page .eod-table tbody tr:last-child td {
    border-bottom: 0;
  }

  .scanner-backtest-page .eod-table tbody tr.striped {
    background: #fbfdff;
  }

  .scanner-backtest-page .eod-table tbody tr.hoverable:hover {
    background: #eef5ff;
  }

  .scanner-backtest-page .eod-table .right {
    text-align: right;
  }

  .scanner-backtest-page .eod-table .center {
    text-align: center;
  }

  .scanner-backtest-page .eod-pagination {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 12px;
    flex-wrap: wrap;
    margin-top: 14px;
  }

  .scanner-backtest-page .eod-pagination-info {
    color: #5f6f84;
    font-size: 0.86rem;
  }

  .scanner-backtest-page .eod-pagination-controls {
    display: flex;
    align-items: center;
    gap: 8px;
    flex-wrap: wrap;
  }

  .scanner-backtest-page .eod-mini-btn,
  .scanner-backtest-page .eod-invest-btn button {
    border: 1px solid #c8d7eb;
    background: #fff;
    color: #1d3552;
    border-radius: 10px;
    padding: 8px 12px;
    font-size: 0.86rem;
    font-weight: 700;
    cursor: pointer;
  }

  .scanner-backtest-page .eod-invest-btn {
    display: flex;
    justify-content: flex-end;
  }

  .scanner-backtest-page .eod-invest-btn button {
    border: 0;
    background: linear-gradient(135deg, #0f6adf 0%, #1d8bff 100%);
    color: #fff;
    box-shadow: 0 14px 26px rgba(15, 106, 223, 0.24);
    border-radius: 999px;
    padding: 11px 20px;
  }

  .scanner-backtest-page .eod-invest-btn button:disabled {
    opacity: 0.55;
    cursor: not-allowed;
  }

  .scanner-backtest-page .eod-empty {
    padding: 40px 20px;
    text-align: center;
    color: #64748b;
    font-size: 0.94rem;
  }

  @media (max-width: 900px) {
    .scanner-backtest-page {
      padding: 16px;
    }

    .scanner-backtest-page .scanner-field,
    .scanner-backtest-page .scanner-field.full,
    .scanner-backtest-page .scanner-field.wide {
      grid-column: span 12;
    }

    .scanner-backtest-page .scanner-actions {
      justify-content: stretch;
      flex-wrap: wrap;
    }

    .scanner-backtest-page .scanner-big-card-stats {
      grid-template-columns: 1fr;
      gap: 12px;
    }

    .scanner-backtest-page .scanner-big-card-stats h4:last-child {
      text-align: left;
    }

    .scanner-backtest-page .eod-summary-grid {
      grid-template-columns: 1fr;
    }

    .scanner-backtest-page .eod-toolbar {
      align-items: stretch;
    }

    .scanner-backtest-page .eod-toolbar-left,
    .scanner-backtest-page .eod-toolbar-right {
      width: 100%;
    }

    .scanner-backtest-page .eod-invest-btn {
      width: 100%;
    }

    .scanner-backtest-page .eod-invest-btn button {
      width: 100%;
      justify-content: center;
    }
  }
`,".scanner-backtest-page");function va(){var Ve,Ue,We,Ye,Ge,He,Je,Qe,Xe,Ke,Ze,et,tt;const{strategyId:n=""}=Dt(),[t,i]=m.useState(w),[r,l]=m.useState([]),[,o]=m.useState([]),[d,c]=m.useState(!1),[p,y]=m.useState(!1),[R,k]=m.useState(null),[s,h]=m.useState(null),[D,T]=m.useState([]),[A,j]=m.useState([]),[I,$]=m.useState(null),[P,f]=m.useState(!1),[E,N]=m.useState(!1),[U,ae]=m.useState(""),[J,se]=m.useState([{value:"__new__",label:"Add New Portfolio"}]),[O,re]=m.useState("__new__"),[ye,ve]=m.useState(""),[De,Ee]=m.useState(!1),[de,Fe]=m.useState([{value:"paper_trade",label:"Virtual (Paper Trade)",brokerType:"paper",isLoggedIn:!0}]),[ie,ke]=m.useState("paper_trade"),[Me,Ie]=m.useState(!1),[B,je]=m.useState("local"),[K,Ne]=m.useState("weekly");function $e(a,u,b){k({id:Date.now(),message:u,variant:a,title:b})}function pe(a){$e("success",a)}function W(a){$e("error",a)}m.useEffect(()=>{(async()=>{try{const[u,b]=await Promise.all([fetch(`${te}/indexes`),fetch(`${te}/sectors`)]),[x,g]=await Promise.all([u.json(),b.json()]);if(u.ok){const v=Array.isArray(x)?x:(x==null?void 0:x.items)||[];l(Ut(v))}if(b.ok){const v=Array.isArray(g)?g:(g==null?void 0:g.items)||[];o(Wt(v))}}catch{}})()},[]),m.useEffect(()=>{if(!n)return;let a=!0;return(async()=>{try{k(null);const b=await fetch(`${te}/portfolio_settings/${encodeURIComponent(n)}`),x=await b.json().catch(()=>({}));if(!b.ok)throw new Error((x==null?void 0:x.detail)||"Unable to load portfolio settings.");if(!a)return;i(Yt(x)),h(null),T([]),j([]),$(null),N(!1),ae(""),oe()}catch(b){if(!a)return;W(b instanceof Error?b.message:"Unable to load portfolio settings.")}})().catch(()=>{}),()=>{a=!1}},[n]),m.useEffect(()=>{let a=!0;if(!E)return()=>{a=!1};const u=async()=>{try{Ee(!0);const x=await fetch(`${te}/get_portfolio`),g=await x.json().catch(()=>[]);if(!x.ok)throw new Error("Failed to load portfolios.");if(!a)return;const _=(Array.isArray(g)?g:Array.isArray(g==null?void 0:g.items)?g.items:[]).map(C=>{const ue=String((C==null?void 0:C._id)||"").trim(),ge=String((C==null?void 0:C.name)||"").trim();return ue&&ge?{value:ue,label:ge}:null}).filter(C=>!!C),L=Array.from(new Map(_.map(C=>[C.value,C])).values());se([{value:"__new__",label:"Add New Portfolio"},...L])}catch{if(!a)return;se([{value:"__new__",label:"Add New Portfolio"}])}finally{a&&Ee(!1)}},b=async()=>{try{Ie(!0);const x=await fetch(`${$t}/broker-configurations?broker_type=live`),g=await x.json().catch(()=>({}));if(!x.ok)throw new Error("Failed to load brokers.");if(!a)return;const v=(Array.isArray(g==null?void 0:g.records)?g.records:[]).filter(_=>String((_==null?void 0:_.user_id)||"")===Pt).map(_=>{const L=String((_==null?void 0:_.name)||(_==null?void 0:_.broker_name)||"Broker").trim(),C=!!(_!=null&&_.is_logged_in)&&!(_!=null&&_.session_expired);return{value:String((_==null?void 0:_._id)||""),label:`${L} (${C?"Logged In":"Not Logged In"})`,brokerType:"live",isLoggedIn:C}}).filter(_=>_.value);Fe([{value:"paper_trade",label:"Virtual (Paper Trade)",brokerType:"paper",isLoggedIn:!0},...v])}catch{if(!a)return;Fe([{value:"paper_trade",label:"Virtual (Paper Trade)",brokerType:"paper",isLoggedIn:!0}])}finally{a&&Ie(!1)}};return u(),b(),()=>{a=!1}},[E]),m.useEffect(()=>{if(O!=="__new__"){const a=J.find(u=>u.value===O);ve((a==null?void 0:a.label)||"")}},[J,O]),m.useEffect(()=>{de.some(a=>a.value===ie)||ke("paper_trade")},[de,ie]);const Y=m.useMemo(()=>Zt(s==null?void 0:s.monthly_roi,s==null?void 0:s.monthly_final_json,Number(t.starting_capital||0)),[s==null?void 0:s.monthly_roi,s==null?void 0:s.monthly_final_json,t.starting_capital]),Pe=m.useMemo(()=>ea(s==null?void 0:s.weekly_json),[s==null?void 0:s.weekly_json]),we=m.useMemo(()=>ta(s==null?void 0:s.monthly_final_json),[s==null?void 0:s.monthly_final_json]),Te=m.useMemo(()=>aa(s==null?void 0:s.equity_curve_json,Number(t.starting_capital||0)),[s==null?void 0:s.equity_curve_json,t.starting_capital]),Le=m.useMemo(()=>na(s==null?void 0:s.equity_curve_json,Number(t.starting_capital||0)),[s==null?void 0:s.equity_curve_json,t.starting_capital]),Z=m.useMemo(()=>ua(s==null?void 0:s.equity_curve_json),[s==null?void 0:s.equity_curve_json]),ee=m.useMemo(()=>(s==null?void 0:s.daily_drawdown_json)||[],[s==null?void 0:s.daily_drawdown_json]),ze=m.useMemo(()=>lt(Z),[Z]),Oe=m.useMemo(()=>lt(ee),[ee]),G=m.useMemo(()=>Z.length?Z.reduce((a,u)=>Number(u.drawdown_pct||0)<Number(a.drawdown_pct||0)?u:a):null,[Z]),H=m.useMemo(()=>ee.length?ee.reduce((a,u)=>Number(u.drawdown_pct||0)<Number(a.drawdown_pct||0)?u:a):null,[ee]),Se=m.useMemo(()=>ga(B==="local"?K==="daily"?Z:ze:K==="daily"?ee:Oe,`${B==="local"?"Local":"Backend"} ${K==="daily"?"Daily":"Weekly"}`),[ee,Oe,B,K,Z,ze]),S=(a,u)=>{i(b=>({...b,[a]:u}))},dt=()=>{i(w),k(null),h(null),T([]),j([]),$(null),N(!1),ae(""),oe(),je("local"),Ne("weekly")},pt=[{key:"invested_capital",label:"Investment Capital"},{key:"final_capital",label:"Current Capital"},{key:"idle_cash",label:"Idle Cash"},{key:"total_return",label:"Total Return",suffix:"%"},{key:"win_rate_percent",label:"Win Rate(%)",suffix:"%"},{key:"avg_winners_roi_percent",label:"Avg. Winners ROI(%)",suffix:"%"},{key:"avg_losers_roi_percent",label:"Avg. Losers ROI(%)",suffix:"%"},{key:"max_drawdown",label:"Max. DD(%)",suffix:"%"},{key:"gagr",label:"CAGR(%)",suffix:"%"},{key:"avg_trades_per_year",label:"Avg. trade per year"},{key:"risk_reward",label:"Risk To Reward"},{key:"biggest_winner_roi_percent",label:"Biggest Winner ROI(%)",suffix:"%"},{key:"biggest_loser_roi_percent",label:"Biggest Loser ROI(%)",suffix:"%"}],ut=[{key:"rank",label:"Rank",align:"center"},{key:"universe",label:"Universe"},{key:"symbol",label:"Symbol"},{key:"sector",label:"Sector"},{key:"last_price",label:"Last Price",align:"right",render:a=>M(a.last_price)},{key:"score",label:"Score",align:"right",render:a=>Number(a.score).toFixed(6)},{key:"qty",label:"Qty",align:"right"},{key:"amount",label:"Amount",align:"right",render:a=>M(a.amount)}],gt=[{key:"rank",label:"Rank",align:"center"},{key:"universe",label:"Universe"},{key:"symbol",label:"Symbol"},{key:"sector",label:"Sector"},{key:"last_price",label:"Last Price",align:"right",render:a=>M(a.last_price)},{key:"score",label:"Score",align:"right",render:a=>Number(a.score).toFixed(6)}],mt=async()=>{c(!0),k(null);try{const a=await fetch(`${te}/eod_scoring`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(Gt(t))}),u=await a.json().catch(()=>({}));if(!a.ok)throw new Error((u==null?void 0:u.detail)||"Unable to fetch score.");const b=u.stocks_scored||[];T(Qt(b));const x=Number(t.starting_capital||0),g=Number(t.entry_rank||0);if(b.length>0&&x>0&&g>0){const{portfolio:v,summary:_}=Jt(b,x,g);j(v),$(_)}else j([]),$(null);pe("Score fetched successfully.")}catch(a){W(a instanceof Error?a.message:"Unable to fetch score.")}finally{c(!1)}},oe=()=>{re("__new__"),ve(""),ke("paper_trade")},bt=()=>{if(!t.strategy_name.trim()){W("Strategy Name is required.");return}k(null),ae(t.strategy_name),oe(),N(!0)},Ae=()=>{P||(N(!1),oe())},Be=e.jsxs(e.Fragment,{children:[A.length>0?e.jsx("div",{className:"scanner-col-12",children:e.jsxs("section",{className:"eod-card",children:[e.jsxs("div",{className:"eod-section-header",children:[e.jsx("h4",{children:"CAPITAL SUMMARY"}),e.jsx("span",{children:"Equal allocation overview"})]}),e.jsx("div",{className:"eod-section-body",children:e.jsxs("div",{className:"eod-summary-grid",children:[e.jsxs("div",{className:"eod-summary-card",children:[e.jsx("span",{children:"Capital"}),e.jsx("strong",{children:M((I==null?void 0:I.total_capital)||0)})]}),e.jsxs("div",{className:"eod-summary-card",children:[e.jsx("span",{children:"Used"}),e.jsx("strong",{children:M((I==null?void 0:I.used_capital)||0)})]}),e.jsxs("div",{className:"eod-summary-card",children:[e.jsx("span",{children:"Remaining"}),e.jsx("strong",{children:M((I==null?void 0:I.remaining_capital)||0)})]})]})})]})}):null,A.length>0?e.jsx("div",{className:"scanner-col-12",children:e.jsx(it,{title:"EOD INVESTMENT RESULT",subtitle:"Portfolio-ready picks",rows:A,columns:ut,action:e.jsx("div",{className:"eod-invest-btn",children:e.jsx("button",{type:"button",onClick:bt,disabled:P,children:P?"Investing...":"Invest Now"})})})}):null,D.length>0?e.jsx("div",{className:"scanner-col-12",children:e.jsx(it,{title:"EOD SCORE RESULT",subtitle:"Raw score engine output",rows:D,columns:gt})}):null]}),qe=async()=>{const a=J.find(v=>v.value===O),u=O==="__new__"?ye.trim():String((a==null?void 0:a.label)||"").trim(),b=O==="__new__"?"":String((a==null?void 0:a.value)||"").trim(),x=U.trim(),g=de.find(v=>v.value===ie);if(!u){W("Portfolio Name is required.");return}if(!x){W("Strategy Name is required.");return}if(!g){W("Broker is required.");return}f(!0),k(null);try{const _={portfolio_settings:{...t,strategy_name:x,portfolio_name:u,portfolio_id:b,starting_capital:Number(t.starting_capital||0),rebalance_date:String(t.rebalance_date||10),uncorrelated_asset_allocation:Number(t.uncorrelated_asset_allocation||0),entry_rank:Number(t.entry_rank||0),exit_rank:Number(t.exit_rank||0),score_date:xe(),broker:g.brokerType==="live"?g.value:"",broker_id:g.brokerType==="live"?g.value:"",broker_type:g.brokerType,broker_name:g.label},invest_stock_data:A},L=await fetch(`${te}/save_portfolio`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(_)}),C=await L.json().catch(()=>({}));if(!L.ok)throw new Error((C==null?void 0:C.detail)||"Unable to invest.");C.status==="success"&&(pe("Invested successfully."),N(!1),oe())}catch(v){W(v instanceof Error?v.message:"Unable to invest.")}finally{f(!1)}},ht=async()=>{y(!0),k(null);try{const a=await fetch(`${te}/run_backtest`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(Ht(t))}),u=await a.json().catch(()=>({}));if(!a.ok)throw new Error((u==null?void 0:u.detail)||"Unable to fetch backtest.");h(u),pe("Backtest fetched successfully.")}catch(a){h(null),W(a instanceof Error?a.message:"Unable to fetch backtest.")}finally{y(!1)}},ft=()=>{if(!s){W("Run backtest first to download the report.");return}const a=[["Strategy Name",t.strategy_name],["Starting Capital",t.starting_capital],["Universe",t.indexes.join(", ")],["No Of Stocks in Portfolio",t.entry_rank],["Exit Rank",t.exit_rank],["Min Price",t.stock_price_min],["Max Price",t.stock_price_max],["Rebalance Frequency",t.rebalance_frequency],["Rebalance Date",t.rebalance_date],["Alternate Rebalance Day",t.alternative_rebalance_day],["Start Date",t.start_date],["End Date",t.end_date],["Regime Filter",t.regime_filter],["Regime Filter Action",t.regime_filter_action],["Regime Filter Index",t.regime_filter_indexes],["Asset Type",t.uncorrelated_asset_type],["Asset Alloc",t.uncorrelated_asset_allocation],["Position Sizing",t.position_sizing],["Formula",t.formula]],u=ca(s),b=["invested_capital","final_capital","idle_cash","total_trades","no_of_winners","no_of_losers","win_rate_percent","avg_winners_roi_percent","avg_losers_roi_percent","biggest_winner_roi_percent","biggest_loser_roi_percent","risk_reward","max_drawdown","gagr","kurtosis_monthly_roi","kurtosis_trade_roi","std","avg_trades_per_year","calmar_ratio"],x=Object.entries(u||{}),g=[...b.filter(F=>x.some(([ce])=>ce===F)),...x.map(([F])=>F).filter(F=>!b.includes(F))],v=[["Metrics","Score"],["Start Date",t.start_date],["End date",t.end_date],...g.map(F=>[da(F),(u==null?void 0:u[F])??"--"])],_=[["Year","Month","Day","PNL(INR)","Invest Value(INR)","ROI%","ROI_DD%","Cummulative Profit"],...Object.entries(we).flatMap(([F,ce])=>ce.map(Q=>{const me=String(Q.end_date||""),q=new Date(`${me}T00:00:00`);return[F,q&&!Number.isNaN(q.getTime())?q.getMonth()+1:"",q&&!Number.isNaN(q.getTime())?q.getDate():"",Number(Q.pnl_rupee||0),Number(Q.portfolio_start_value||0),Number(Q.portfolio_roi||0),Number(Q.drawdown_pct||0),Number(Q.portfolio_end_value||0)]}))],L=s.trade_history||[],C=s.closed_trades_json||L,ue=ra(C),ge=[["Year",...X,"Total"],...Y.years.map(F=>{const ce=X.map((me,q)=>{var be;return ot(Y.dataMap,F,q)?`${V(((be=Y.dataMap[F])==null?void 0:be[q+1])||0)}%`:"-"}),Q=X.reduce((me,q,be)=>{var nt;return me+Number(((nt=Y.dataMap[F])==null?void 0:nt[be+1])||0)},0);return[F,...ce,`${V(Q)}%`]})],xt=ia(s),_t=[["Date","Portfolio Value","Daily PnL","Daily ROI","Index Value","Index Daily PnL"],...Le.map(F=>[F.date,F.portfolio_value,F.daily_pnl,F.daily_roi,F.index_value,F.index_daily_pnl])],yt=ne(s.equity_details||[]),vt=ne(s.weekly_json||[]),kt=ne(s.monthly_final_json||[]),jt=ne(s.yearly_final_json||[]),Nt=ne(s.daily_drawdown_json||[]),wt=oa(s.regime_events||[]),St=la(s.stoploss_events||[]),Rt=`<?xml version="1.0"?>
<Workbook xmlns="urn:schemas-microsoft-com:office:spreadsheet"
 xmlns:o="urn:schemas-microsoft-com:office:office"
 xmlns:x="urn:schemas-microsoft-com:office:excel"
 xmlns:ss="urn:schemas-microsoft-com:office:spreadsheet"
 xmlns:html="http://www.w3.org/TR/REC-html40">
 <Styles>
  <Style ss:ID="Default" ss:Name="Normal">
   <Alignment ss:Vertical="Bottom"/>
   <Borders/>
   <Font ss:FontName="Calibri" ss:Size="11"/>
   <Interior/>
   <NumberFormat/>
   <Protection/>
  </Style>
 </Styles>
 ${z("Inputs",a)}
 ${z("Performance Metrics",v)}
 ${z("Monthly Report",_)}
 ${z("Trade History",ue)}
 ${z("Trade History Raw",ne(L))}
 ${z("Monthly Breakup",ge)}
 ${z("Monthly Stats",xt)}
 ${z("Local Daily Report",_t)}
 ${z("Equity Details",yt)}
 ${z("Weekly Json",vt)}
 ${z("Monthly Final Json",kt)}
 ${z("Yearly Final Json",jt)}
 ${z("Daily Drawdown",Nt)}
 ${z("Regime Events",wt)}
 ${z("Stop Loss Events",St)}
</Workbook>`,Ct=new Blob([Rt],{type:"application/vnd.ms-excel;charset=utf-8;"}),at=URL.createObjectURL(Ct),le=document.createElement("a");le.href=at,le.download=`${t.strategy_name||"scanner-backtest-report"}.xls`,document.body.appendChild(le),le.click(),document.body.removeChild(le),URL.revokeObjectURL(at),pe("Backtest report downloaded successfully.")};return e.jsxs(e.Fragment,{children:[e.jsx(Et,{title:"FinEdge Scanner | Backtest",description:"Sigma backtest page clone in React"}),e.jsx("style",{children:ba}),e.jsx(It,{toast:R,onClose:()=>k(null)}),e.jsxs("div",{className:"scanner-backtest-page",children:[e.jsx(Mt,{pageTitle:"Backtest"}),e.jsxs("div",{className:"scanner-grid",children:[e.jsx("div",{className:"scanner-col-6",children:e.jsx("section",{className:"scanner-card",children:e.jsxs("div",{className:"scanner-card-body",children:[e.jsx("h3",{className:"scanner-card-title",children:"Form Horizontal"}),e.jsxs("div",{className:"scanner-form-grid",children:[e.jsxs("div",{className:"scanner-field",children:[e.jsx("label",{children:"Starting Capital*"}),e.jsx("input",{className:"scanner-input",value:t.starting_capital,onChange:a=>S("starting_capital",a.target.value)})]}),e.jsx(ma,{label:"Index",options:r,value:t.indexes,onChange:a=>S("indexes",a)}),e.jsxs("div",{className:"scanner-field",children:[e.jsx("label",{children:"Min value*"}),e.jsx("input",{className:"scanner-input",value:t.stock_price_min,onChange:a=>S("stock_price_min",a.target.value)})]}),e.jsxs("div",{className:"scanner-field",children:[e.jsx("label",{children:"Max value*"}),e.jsx("input",{className:"scanner-input",value:t.stock_price_max,onChange:a=>S("stock_price_max",a.target.value)})]}),e.jsxs("div",{className:"scanner-field",children:[e.jsx("label",{children:"No.of stocks in Portfolio*"}),e.jsx("input",{className:"scanner-input",value:t.entry_rank,onChange:a=>S("entry_rank",a.target.value)})]}),e.jsxs("div",{className:"scanner-field",children:[e.jsx("label",{children:"Exit Rank*"}),e.jsx("input",{className:"scanner-input",value:t.exit_rank,onChange:a=>S("exit_rank",a.target.value)})]}),e.jsxs("div",{className:"scanner-switch-row",children:[e.jsx("button",{type:"button",className:`scanner-switch ${t.stoploss_status?"active":""}`,onClick:()=>S("stoploss_status",!t.stoploss_status)}),e.jsx("span",{className:"scanner-switch-label",children:"Stop Loss Status"})]}),e.jsxs("div",{className:"scanner-field",children:[e.jsx("label",{children:"Stop Loss %*"}),e.jsx("input",{className:"scanner-input",value:t.stoploss_percent,onChange:a=>S("stoploss_percent",a.target.value),disabled:!t.stoploss_status})]}),e.jsxs("div",{className:"scanner-field",children:[e.jsx("label",{children:"Stop Loss Rebalance Timing*"}),e.jsx("select",{className:"scanner-select",value:t.stoploss_rebalance_timing,onChange:a=>S("stoploss_rebalance_timing",a.target.value),disabled:!t.stoploss_status,children:zt.map(a=>e.jsx("option",{value:a.value,children:a.label},a.value))})]}),e.jsxs("div",{className:"scanner-field",children:[e.jsx("label",{children:"Rebalance Frequency*"}),e.jsx("select",{className:"scanner-select",value:t.rebalance_frequency,onChange:a=>S("rebalance_frequency",a.target.value),children:Tt.map(a=>e.jsx("option",{value:a.value,children:a.label},a.value))})]}),e.jsxs("div",{className:"scanner-field",children:[e.jsx("label",{children:"Rebalance Date*"}),e.jsx("input",{className:"scanner-input",value:t.rebalance_date,onChange:a=>S("rebalance_date",a.target.value)})]}),e.jsxs("div",{className:"scanner-field",children:[e.jsx("label",{children:"Alternative Rebalance Day*"}),e.jsx("select",{className:"scanner-select",value:t.alternative_rebalance_day,onChange:a=>S("alternative_rebalance_day",a.target.value),children:Lt.map(a=>e.jsx("option",{value:a.value,children:a.label},a.value))})]}),e.jsxs("div",{className:"scanner-field",children:[e.jsx("label",{children:"Position Sizing*"}),e.jsx("select",{className:"scanner-select",value:t.position_sizing,onChange:a=>S("position_sizing",a.target.value),children:Ot.map(a=>e.jsx("option",{value:a.value,children:a.label},a.value))})]}),e.jsxs("div",{className:"scanner-field",children:[e.jsx("label",{children:"EOD Score Model"}),e.jsxs("select",{className:"scanner-select",value:t.score_model,onChange:a=>S("score_model",a.target.value),children:[e.jsx("option",{value:"current",children:"Current EOD Score"}),e.jsx("option",{value:"old",children:"Old EOD Score"})]})]}),e.jsxs("div",{className:"scanner-field full",children:[e.jsx("label",{children:"Scoring Console"}),e.jsx("textarea",{className:"scanner-textarea",value:t.formula,onChange:a=>S("formula",a.target.value)})]}),e.jsxs("div",{className:"scanner-actions",children:[e.jsx("button",{type:"button",className:"scanner-btn",onClick:dt,children:"Cancel"}),e.jsx("button",{type:"button",className:"scanner-btn primary",onClick:mt,disabled:d,children:d?"Scoring...":"Score"}),e.jsx("button",{type:"button",className:"scanner-btn primary",onClick:ht,disabled:p,children:p?"Loading...":"Backtest"})]})]})]})})}),e.jsx("div",{className:"scanner-col-6",children:e.jsx("section",{className:"scanner-card",children:e.jsxs("div",{className:"scanner-card-body",children:[e.jsx("h3",{className:"scanner-card-title",children:"Form Horizontal"}),e.jsxs("div",{className:"scanner-form-grid",children:[e.jsxs("div",{className:"scanner-field wide",children:[e.jsx("label",{children:"Strategy Name*"}),e.jsx("input",{className:"scanner-input",value:t.strategy_name,onChange:a=>S("strategy_name",a.target.value)})]}),e.jsxs("div",{className:"scanner-field",children:[e.jsx("label",{children:"Start date*"}),e.jsx("input",{className:"scanner-input",type:"date",value:t.start_date,onChange:a=>S("start_date",a.target.value)})]}),e.jsxs("div",{className:"scanner-field",children:[e.jsx("label",{children:"End date*"}),e.jsx("input",{className:"scanner-input",type:"date",value:t.end_date,onChange:a=>S("end_date",a.target.value)})]}),e.jsxs("div",{className:"scanner-switch-row",children:[e.jsx("button",{type:"button",className:`scanner-switch ${t.regime_filter_status?"active":""}`,onClick:()=>S("regime_filter_status",!t.regime_filter_status)}),e.jsx("span",{className:"scanner-switch-label",children:"Regime Filter Status"})]}),e.jsxs("div",{className:"scanner-field",children:[e.jsx("label",{children:"Regime Filter*"}),e.jsx("select",{className:"scanner-select",value:t.regime_filter,onChange:a=>S("regime_filter",a.target.value),children:At.map(a=>e.jsx("option",{value:a.value,children:a.label},a.value))})]}),e.jsxs("div",{className:"scanner-field",children:[e.jsx("label",{children:"Regime Filter Action*"}),e.jsx("select",{className:"scanner-select",value:t.regime_filter_action,onChange:a=>S("regime_filter_action",a.target.value),children:Bt.map(a=>e.jsx("option",{value:a.value,children:a.label},a.value))})]}),e.jsxs("div",{className:"scanner-field",children:[e.jsx("label",{children:"Index*"}),e.jsx("select",{className:"scanner-select",value:t.regime_filter_indexes,onChange:a=>S("regime_filter_indexes",a.target.value),children:r.map(a=>e.jsx("option",{value:a.value,children:a.label},a.value))})]}),e.jsxs("div",{className:"scanner-switch-row",children:[e.jsx("button",{type:"button",className:`scanner-switch ${t.uncorrelated_asset_status?"active":""}`,onClick:()=>S("uncorrelated_asset_status",!t.uncorrelated_asset_status)}),e.jsx("span",{className:"scanner-switch-label",children:"Invest in Uncorrelated Asset"})]}),e.jsxs("div",{className:"scanner-field",children:[e.jsx("label",{children:"Asset Type*"}),e.jsx("select",{className:"scanner-select",value:t.uncorrelated_asset_type,onChange:a=>S("uncorrelated_asset_type",a.target.value),children:qt.map(a=>e.jsx("option",{value:a.value,children:a.label},a.value))})]}),e.jsxs("div",{className:"scanner-field",children:[e.jsx("label",{children:"Allocation (%)*"}),e.jsx("input",{className:"scanner-input",value:t.uncorrelated_asset_allocation,onChange:a=>S("uncorrelated_asset_allocation",a.target.value)})]})]})]})})}),s?e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"scanner-col-12",children:[e.jsx("div",{className:"scanner-report-actions",children:e.jsx("button",{type:"button",className:"scanner-report-download",onClick:ft,children:"Download Report"})}),e.jsxs("div",{className:"scanner-metrics-grid",children:[pt.map(a=>{var u,b;return e.jsxs("div",{className:"scanner-metric-card",children:[e.jsxs("div",{className:"scanner-metric-label",children:[e.jsx("span",{className:"scanner-metric-label-icon",children:"₹"}),e.jsx("span",{children:a.label})]}),e.jsx("div",{className:"scanner-metric-value",children:a.key==="max_drawdown"?`${V(Math.abs(Number(B==="local"?(G==null?void 0:G.drawdown_pct)??0:((u=s.metrics)==null?void 0:u.max_drawdown)??(H==null?void 0:H.drawdown_pct)??0)))}${a.suffix||""}`:`${((b=s.metrics)==null?void 0:b[a.key])??"--"}${a.suffix||""}`}),a.key==="max_drawdown"&&(B==="local"?G!=null&&G.date:H!=null&&H.date)?e.jsxs("div",{className:"scanner-metric-note",children:["Date: ",String(B==="local"?G==null?void 0:G.date:H==null?void 0:H.date)]}):null]},a.key)}),e.jsxs("div",{className:"scanner-big-card",children:[e.jsxs("div",{className:"scanner-big-card-head",children:[e.jsx("span",{className:"scanner-big-card-icon",children:"▥"}),e.jsxs("span",{children:["Biggest Winner Stats - ",String(((Ve=s.metrics)==null?void 0:Ve.biggest_winner_stock)??"--")]})]}),e.jsxs("div",{className:"scanner-big-card-stats",children:[e.jsxs("h4",{children:["Buy Price - ",String(((Ue=s.metrics)==null?void 0:Ue.biggest_winner_holding_buy_price)??"--")," | Sell Price ",String(((We=s.metrics)==null?void 0:We.biggest_winner_holding_sell_price)??"--")]}),e.jsxs("h4",{children:[String(((Ye=s.metrics)==null?void 0:Ye.biggest_winner_holding_start_date)??"--")," to ",String(((Ge=s.metrics)==null?void 0:Ge.biggest_winner_holding_end_date)??"--")," (",String(((He=s.metrics)==null?void 0:He.biggest_winner_holding_days)??"--")," days)"]})]})]}),e.jsxs("div",{className:"scanner-big-card",children:[e.jsxs("div",{className:"scanner-big-card-head",children:[e.jsx("span",{className:"scanner-big-card-icon",children:"▥"}),e.jsxs("span",{children:["Biggest Loser Stats - ",String(((Je=s.metrics)==null?void 0:Je.biggest_loser_stock)??"--")]})]}),e.jsxs("div",{className:"scanner-big-card-stats",children:[e.jsxs("h4",{children:["Buy Price - ",String(((Qe=s.metrics)==null?void 0:Qe.biggest_loser_holding_buy_price)??"--")," | Sell Price ",String(((Xe=s.metrics)==null?void 0:Xe.biggest_loser_holding_sell_price)??"--")]}),e.jsxs("h4",{children:[String(((Ke=s.metrics)==null?void 0:Ke.biggest_loser_holding_start_date)??"--")," to ",String(((Ze=s.metrics)==null?void 0:Ze.biggest_loser_holding_end_date)??"--")," (",String(((et=s.metrics)==null?void 0:et.biggest_loser_holding_days)??"--")," days)"]})]})]})]})]}),e.jsx("div",{className:"scanner-col-12",children:e.jsxs("section",{className:"scanner-section",children:[e.jsx("h3",{className:"scanner-section-title",children:"Monthly Breakup (Realized Profit%)"}),e.jsx("div",{className:"scanner-table-wrap",children:e.jsxs("table",{className:"scanner-table",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Year"}),X.map(a=>e.jsx("th",{children:a},a)),e.jsx("th",{children:"Total"})]})}),e.jsx("tbody",{children:Y.years.map(a=>{const u=X.reduce((b,x,g)=>{var v;return b+Number(((v=Y.dataMap[a])==null?void 0:v[g+1])||0)},0);return e.jsxs("tr",{children:[e.jsx("td",{className:"year-cell",children:a}),X.map((b,x)=>{var L,C;const g=ot(Y.dataMap,a,x),v=Number(((L=Y.dataMap[a])==null?void 0:L[x+1])||0),_=(C=Y.detailMap[a])==null?void 0:C[x+1];return e.jsx("td",{className:"scanner-month-cell",children:g?e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:`scanner-month-roi ${v>=0?"positive":"negative"}`,children:[V(v),"%"]}),g&&_?e.jsxs("div",{className:"scanner-month-meta",children:[e.jsxs("div",{children:[e.jsx("span",{children:"CC:"})," ₹",fe(_.cc)]}),e.jsxs("div",{children:[e.jsx("span",{children:"OP:"})," ₹",fe(_.op)]}),e.jsxs("div",{className:_.pnl>=0?"positive":"negative",children:[e.jsx("span",{children:"P:"})," ₹",fe(_.pnl)]})]}):null]}):e.jsx("span",{className:"scanner-month-empty",children:"-"})},`${a}-${b}`)}),e.jsxs("td",{className:u>=0?"positive":"negative",children:[V(u),"%"]})]},a)})})]})})]})}),e.jsx("div",{className:"scanner-col-12",children:e.jsxs("section",{className:"scanner-section scanner-section-chart",children:[e.jsxs("div",{className:"scanner-drawdown-tabs",children:[e.jsx("button",{type:"button",className:`scanner-drawdown-tab ${B==="local"?"active":""}`,onClick:()=>je("local"),children:"Local Compute"}),e.jsx("button",{type:"button",className:`scanner-drawdown-tab ${B==="daily"?"active":""}`,onClick:()=>je("daily"),children:"Daily Compute"})]}),e.jsx(st,{options:Te.options,series:Te.series,type:"area",height:350})]})}),e.jsx("div",{className:"scanner-col-12",children:e.jsxs("section",{className:"scanner-section scanner-section-chart",children:[e.jsxs("div",{className:"scanner-drawdown-tabs",children:[e.jsx("button",{type:"button",className:`scanner-drawdown-tab ${K==="weekly"?"active":""}`,onClick:()=>Ne("weekly"),children:"Weekly Drawdown"}),e.jsx("button",{type:"button",className:`scanner-drawdown-tab ${K==="daily"?"active":""}`,onClick:()=>Ne("daily"),children:"Daily Drawdown"})]}),Se.series.length?e.jsx(st,{options:Se.options,series:Se.series,type:"area",height:250}):e.jsxs("p",{className:"scanner-empty",children:["No ",B==="local"?"local":"backend"," ",K," drawdown data available."]})]})}),Be,B==="daily"?e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"scanner-col-12",children:e.jsxs("section",{className:"scanner-section",children:[e.jsx("h3",{className:"scanner-section-title",children:"Weekly Breakup"}),Object.keys(Pe).length?Object.entries(Pe).map(([a,u])=>e.jsxs("div",{className:"scanner-month-group",children:[e.jsx("div",{className:"scanner-month-header",children:a}),e.jsx("div",{className:"scanner-table-wrap",children:e.jsxs("table",{className:"scanner-weekly-table",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Week"}),e.jsx("th",{children:"Start Date"}),e.jsx("th",{children:"End Date"}),e.jsx("th",{children:"PnL (Rs)"}),e.jsx("th",{children:"ROI (%)"}),e.jsx("th",{children:"Start Value"}),e.jsx("th",{children:"End Value"})]})}),e.jsx("tbody",{children:u.map((b,x)=>{const g=Number(b.pnl_rupee||0),v=Number(b.portfolio_roi||0);return e.jsxs("tr",{children:[e.jsx("td",{children:String(b.week||"--")}),e.jsx("td",{children:String(b.start_date||"--")}),e.jsx("td",{children:String(b.end_date||"--")}),e.jsx("td",{className:g>=0?"positive":"negative",children:M(g)}),e.jsx("td",{className:v>=0?"positive":"negative",children:V(v)}),e.jsx("td",{children:M(b.portfolio_start_value||0)}),e.jsx("td",{children:M(b.portfolio_end_value||0)})]},`${a}-${x}`)})})]})})]},a)):e.jsx("p",{className:"scanner-empty",children:"No weekly breakup data available."})]})}),e.jsx("div",{className:"scanner-col-12",children:e.jsxs("section",{className:"scanner-section",children:[e.jsx("h3",{className:"scanner-section-title",children:"Monthly Final Breakup"}),Object.keys(we).length?Object.entries(we).map(([a,u])=>{const b=u.reduce((g,v)=>g+Number(v.pnl_rupee||0),0),x=u.reduce((g,v)=>g+Number(v.portfolio_roi||0),0);return e.jsxs("div",{className:"scanner-month-group",children:[e.jsx("div",{className:"scanner-month-header",children:a}),e.jsx("div",{className:"scanner-table-wrap",children:e.jsxs("table",{className:"scanner-weekly-table",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Month"}),e.jsx("th",{children:"Start Date"}),e.jsx("th",{children:"End Date"}),e.jsx("th",{children:"PnL (Rs)"}),e.jsx("th",{children:"ROI (%)"}),e.jsx("th",{children:"Start Value"}),e.jsx("th",{children:"End Value"})]})}),e.jsxs("tbody",{children:[u.map((g,v)=>{const _=Number(g.pnl_rupee||0),L=Number(g.portfolio_roi||0);return e.jsxs("tr",{children:[e.jsx("td",{children:g.monthName}),e.jsx("td",{children:String(g.start_date||"--")}),e.jsx("td",{children:String(g.end_date||"--")}),e.jsx("td",{className:_>=0?"positive":"negative",children:M(_)}),e.jsx("td",{className:L>=0?"positive":"negative",children:V(L)}),e.jsx("td",{children:M(g.portfolio_start_value||0)}),e.jsx("td",{children:M(g.portfolio_end_value||0)})]},`${a}-${v}`)}),e.jsxs("tr",{children:[e.jsx("td",{className:"year-cell",children:"Total"}),e.jsx("td",{colSpan:2,children:"-"}),e.jsx("td",{className:b>=0?"positive":"negative",children:M(b)}),e.jsx("td",{className:x>=0?"positive":"negative",children:V(x)}),e.jsx("td",{colSpan:2,children:"-"})]})]})]})})]},a)}):e.jsx("p",{className:"scanner-empty",children:"No monthly final data available."})]})}),e.jsx("div",{className:"scanner-col-12",children:e.jsxs("section",{className:"scanner-section",children:[e.jsx("h3",{className:"scanner-section-title",children:"Year Report"}),e.jsx("div",{className:"scanner-table-wrap",children:e.jsxs("table",{className:"scanner-year-table",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Year"}),e.jsx("th",{children:"Start Date"}),e.jsx("th",{children:"End Date"}),e.jsx("th",{children:"PnL (Rs)"}),e.jsx("th",{children:"ROI (%)"}),e.jsx("th",{children:"Start Value"}),e.jsx("th",{children:"End Value"})]})}),e.jsx("tbody",{children:(s.yearly_final_json||[]).map((a,u)=>{const b=Number(a.pnl_rupee||0),x=Number(a.portfolio_roi||0);return e.jsxs("tr",{children:[e.jsx("td",{className:"year-cell",children:String(a.year||"--")}),e.jsx("td",{children:String(a.start_date||"--")}),e.jsx("td",{children:String(a.end_date||"--")}),e.jsx("td",{className:b>=0?"positive":"negative",children:M(b)}),e.jsx("td",{className:x>=0?"positive":"negative",children:V(x)}),e.jsx("td",{children:M(a.portfolio_start_value||0)}),e.jsx("td",{children:M(a.portfolio_end_value||0)})]},`year-${u}`)})})]})})]})})]}):e.jsx("div",{className:"scanner-col-12",children:e.jsxs("section",{className:"scanner-section",children:[e.jsx("h3",{className:"scanner-section-title",children:"Local Daily Report"}),e.jsx("div",{className:"scanner-table-wrap",children:e.jsxs("table",{className:"scanner-year-table",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Date"}),e.jsx("th",{children:"Portfolio Value"}),e.jsx("th",{children:"Daily PnL (Rs)"}),e.jsx("th",{children:"Daily ROI (%)"}),e.jsx("th",{children:"Index Value"}),e.jsx("th",{children:"Index Daily PnL (Rs)"})]})}),e.jsx("tbody",{children:Le.map((a,u)=>e.jsxs("tr",{children:[e.jsx("td",{children:a.date}),e.jsx("td",{children:M(a.portfolio_value)}),e.jsx("td",{className:a.daily_pnl>=0?"positive":"negative",children:M(a.daily_pnl)}),e.jsx("td",{className:a.daily_roi>=0?"positive":"negative",children:V(a.daily_roi)}),e.jsx("td",{children:M(a.index_value)}),e.jsx("td",{className:a.index_daily_pnl>=0?"positive":"negative",children:M(a.index_daily_pnl)})]},`daily-${u}`))})]})})]})})]}):null,s?null:Be]})]}),e.jsxs(Ft,{isOpen:E,onClose:Ae,className:"m-4 w-full max-w-[560px] overflow-hidden p-0",children:[e.jsxs("div",{className:"border-b border-[#dbeffd] bg-[#eef7ff] px-5 py-4",children:[e.jsx("h4",{className:"m-0 text-base font-bold text-[#111827]",children:"Invest Strategy"}),e.jsxs("p",{className:"m-0 mt-1 text-xs text-[#5f6f82]",children:["Portfolio will be created at prices for ",e.jsx("strong",{className:"text-[#111827]",children:xe()})]})]}),e.jsxs("div",{className:"bg-white px-5 py-5",children:[e.jsxs("div",{className:"mb-4",children:[e.jsx("label",{className:"mb-1.5 block text-[13px] font-semibold text-[#1f2937]",children:"Portfolio"}),e.jsx("select",{className:"w-full rounded-[7px] border border-[#90d1ff] bg-white px-3 py-2.5 text-sm text-[#111827] outline-none",value:O,onChange:a=>re(a.target.value),disabled:De,children:J.map(a=>e.jsx("option",{value:a.value,children:a.label},a.value))}),De?e.jsx("p",{className:"mt-1.5 text-xs text-[#64748b]",children:"Loading portfolios..."}):null]}),O==="__new__"?e.jsxs("div",{className:"mb-4",children:[e.jsx("label",{className:"mb-1.5 block text-[13px] font-semibold text-[#1f2937]",children:"Portfolio Name"}),e.jsx("input",{type:"text",className:"w-full rounded-[7px] border border-[#90d1ff] bg-white px-3 py-2.5 text-sm text-[#111827] outline-none",placeholder:"Enter portfolio name",value:ye,onChange:a=>ve(a.target.value),disabled:P,autoFocus:!0})]}):null,e.jsxs("div",{className:"mb-4",children:[e.jsx("label",{className:"mb-1.5 block text-[13px] font-semibold text-[#1f2937]",children:"Strategy Name"}),e.jsx("input",{type:"text",className:"w-full rounded-[7px] border border-[#90d1ff] bg-white px-3 py-2.5 text-sm text-[#111827] outline-none",placeholder:"Enter strategy name",value:U,onChange:a=>ae(a.target.value),onKeyDown:a=>{a.key==="Enter"&&qe()},disabled:P,autoFocus:O!=="__new__"})]}),e.jsxs("div",{className:"mb-1",children:[e.jsx("label",{className:"mb-1.5 block text-[13px] font-semibold text-[#1f2937]",children:"Broker"}),e.jsx("select",{className:"w-full rounded-[7px] border border-[#90d1ff] bg-white px-3 py-2.5 text-sm text-[#111827] outline-none",value:ie,onChange:a=>ke(a.target.value),disabled:Me,children:de.map(a=>e.jsx("option",{value:a.value,children:a.label},a.value))}),Me?e.jsx("p",{className:"mt-1.5 text-xs text-[#64748b]",children:"Loading broker list..."}):null]}),e.jsxs("div",{className:"mt-5 flex justify-end gap-3",children:[e.jsx("button",{type:"button",className:"min-w-[82px] rounded border border-[#d5d5d5] px-5 py-2.5 text-sm font-medium text-[#555]",onClick:Ae,disabled:P,children:"Cancel"}),e.jsx("button",{type:"button",className:"min-w-[120px] rounded bg-[#4db0ca] px-5 py-2.5 text-sm font-semibold text-white disabled:cursor-not-allowed disabled:opacity-70",onClick:qe,disabled:P||!(O==="__new__"?ye.trim():String(((tt=J.find(a=>a.value===O))==null?void 0:tt.label)||"").trim())||!U.trim()||!ie,children:P?"Investing...":"Invest Now"})]})]})]})]})}export{va as default};
