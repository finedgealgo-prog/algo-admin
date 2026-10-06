import{h as Dt,r as b,j as e,P as Et,M as Ft}from"./index-sj9FnZxq.js";import{C as st}from"./react-apexcharts.min-DdA-lGo9.js";import{P as Mt}from"./PageBreadCrumb-CdpiIDK9.js";import{S as It}from"./StatusToast-B1eeL0Yu.js";import"./index-Chjiymov.js";const te="https://scanner.finedgealgo.com/scanner".replace(/\/+$/,""),$t="https://algo.finedgealgo.com/algo".replace(/\/+$/,""),Pt="69dcf52711877c164638d2a7",X=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],Ce="((70% * 6 Month Volatility) + (20% * 3 Month Performance) + (10% * 1 Year Performance)) / 3 Month Volatility",S={stock_price_min:"0",stock_price_max:"0",sectors:[],indexes:["nifty_50"],formula:Ce,starting_capital:"300000",entry_rank:"12",exit_rank:"25",rebalance_frequency:"monthly",rebalance_date:"10",alternative_rebalance_day:"next_day",position_sizing:"equal_weight",strategy_name:"test",start_date:"2019-01-01",end_date:xe(),regime_filter_status:!0,regime_filter:"supertrend_1_2_5",regime_filter_action:"go_cash",regime_filter_indexes:"nifty_500",uncorrelated_asset_status:!0,uncorrelated_asset_type:"gold_bees",uncorrelated_asset_allocation:"100",score_model:"current",stoploss_status:!1,stoploss_percent:"0",stoploss_rebalance_timing:"same_day",reuse_leftover_cash:!1},Tt=[{value:"weekly",label:"Weekly"},{value:"bi-weekly",label:"Bi-Weekly"},{value:"monthly",label:"Monthly"},{value:"bi-monthly",label:"Bi-Monthly"},{value:"quarterly",label:"Quarterly"}],Lt=[{value:"next_day",label:"Next Day"},{value:"previous_day",label:"Previous Day"}],zt=[{value:"same_day",label:"Same Day"},{value:"next_day",label:"Next Day"}],Ot=[{value:"equal_weight",label:"Equal Weight"}],At=[{value:"supertrend_1_2_5",label:"SUPERTREND 1,2.5"}],Bt=[{value:"half_portfolio",label:"Half Portfolio"},{value:"go_cash",label:"Go Cash"}],qt=[{value:"gold_bees",label:"Gold Bees"}];function xe(){return new Date().toISOString().slice(0,10)}function Vt(n,t){return n.replace(/(^|[{}])\s*([^@{}][^{]*)\{/g,(i,r,l)=>{const o=l.split(",").map(c=>c.trim()).filter(Boolean).map(c=>c.startsWith(t)?c:`${t} ${c}`).join(", ");return o?`${r}
  ${o} {`:i})}function M(n){const t=Number(n);return(Number.isFinite(t)?t:0).toLocaleString("en-IN",{maximumFractionDigits:2,minimumFractionDigits:2})}function fe(n){const t=Number(n);return(Number.isFinite(t)?Math.round(t):0).toLocaleString("en-IN")}function V(n){const t=Number(n);return Number.isFinite(t)?t.toFixed(2):"0.00"}function Ut(n){return(n||[]).map(t=>({label:String((t==null?void 0:t.label)??(t==null?void 0:t.value)??"").replace(/_/g," ").replace(/\b\w/g,i=>i.toUpperCase()),value:String((t==null?void 0:t.value)??"")}))}function Wt(n){return(n||[]).map(t=>({label:String((t==null?void 0:t.industry_name)??(t==null?void 0:t.label)??(t==null?void 0:t.value)??""),value:String((t==null?void 0:t.industry_name)??(t==null?void 0:t.value)??(t==null?void 0:t.label)??"")}))}function Re(n){if(Array.isArray(n))return n.map(t=>String(t??"").trim()).filter(Boolean);if(typeof n=="string"){const t=n.trim();return t?[t]:[]}return[]}function rt(n,t){if(typeof n=="string"){const i=n.trim();if(/^\d{4}-\d{2}-\d{2}$/.test(i))return i;if(i.length>=10&&/^\d{4}-\d{2}-\d{2}/.test(i))return i.slice(0,10);const r=new Date(i);if(!Number.isNaN(r.getTime()))return r.toISOString().slice(0,10)}return t}function Yt(n){const t=Re(n.alternative_rebalance_days)[0]||(typeof n.alternative_rebalance_day=="string"?n.alternative_rebalance_day:"")||S.alternative_rebalance_day;return{stock_price_min:String(n.stock_price_min??S.stock_price_min),stock_price_max:String(n.stock_price_max??S.stock_price_max),sectors:Re(n.sectors),indexes:Re(n.indexes),formula:String(n.formula??S.formula),starting_capital:String(n.starting_capital??S.starting_capital),entry_rank:String(n.entry_rank??S.entry_rank),exit_rank:String(n.exit_rank??S.exit_rank),rebalance_frequency:String(n.rebalance_frequency??S.rebalance_frequency),rebalance_date:String(n.rebalance_date??S.rebalance_date),alternative_rebalance_day:t,position_sizing:String(n.position_sizing??S.position_sizing),strategy_name:String(n.strategy_name??S.strategy_name),start_date:rt(n.start_date,S.start_date),end_date:rt(n.end_date,S.end_date),regime_filter_status:typeof n.regime_filter_status=="boolean"?n.regime_filter_status:S.regime_filter_status,regime_filter:String(n.regime_filter??S.regime_filter),regime_filter_action:String(n.regime_filter_action??S.regime_filter_action),regime_filter_indexes:String(n.regime_filter_indexes??S.regime_filter_indexes),uncorrelated_asset_status:typeof n.uncorrelated_asset_status=="boolean"?n.uncorrelated_asset_status:S.uncorrelated_asset_status,uncorrelated_asset_type:String(n.uncorrelated_asset_type??S.uncorrelated_asset_type),uncorrelated_asset_allocation:String(n.uncorrelated_asset_allocation??S.uncorrelated_asset_allocation),score_model:String(n.score_model??S.score_model),stoploss_status:typeof n.stoploss_status=="boolean"?n.stoploss_status:S.stoploss_status,stoploss_percent:String(n.stoploss_percent??S.stoploss_percent),stoploss_rebalance_timing:String(n.stoploss_rebalance_timing??S.stoploss_rebalance_timing),reuse_leftover_cash:typeof n.reuse_leftover_cash=="boolean"?n.reuse_leftover_cash:S.reuse_leftover_cash}}function Gt(n){return{index_name:n.indexes,sectors:n.sectors,min_price:null,max_price:null,top_n:Number(n.entry_rank||0),total_capital:Number(n.starting_capital||0),score_date:xe(),formula:n.formula||Ce,score_model:n.score_model||"current",reuse_leftover_cash:n.reuse_leftover_cash}}function Ht(n){return{stock_price_min:Number(n.stock_price_min||0),stock_price_max:Number(n.stock_price_max||0),sectors:n.sectors,indexes:n.indexes,formula:n.formula||Ce,starting_capital:Number(n.starting_capital||0),entry_rank:Number(n.entry_rank||0),exit_rank:Number(n.exit_rank||0),rebalance_frequency:n.rebalance_frequency,rebalance_date:String(n.rebalance_date||10),alternative_rebalance_day:n.alternative_rebalance_day,position_sizing:n.position_sizing,strategy_name:n.strategy_name,start_date:n.start_date,end_date:n.end_date,regime_filter_status:n.regime_filter_status,regime_filter:n.regime_filter,regime_filter_action:n.regime_filter_action,regime_filter_indexes:n.regime_filter_indexes,uncorrelated_asset_status:n.uncorrelated_asset_status,uncorrelated_asset_type:n.uncorrelated_asset_type,uncorrelated_asset_allocation:Number(n.uncorrelated_asset_allocation||0),min_price:Number(n.stock_price_min||0)===0?null:Number(n.stock_price_min||0),max_price:Number(n.stock_price_max||0)===0?null:Number(n.stock_price_max||0),score_model:n.score_model||"current",stoploss_status:n.stoploss_status,stoploss_percent:Number(n.stoploss_percent||0),stoploss_rebalance_timing:n.stoploss_rebalance_timing,reuse_leftover_cash:n.reuse_leftover_cash}}function Jt(n,t,i,r=!1){const l=t/i;let o=0;const c=[];let d=0;const p=[...n].sort((_,x)=>(Number(_.rank??_.Rank)||0)-(Number(x.rank??x.Rank)||0)).slice(0,i).map((_,x)=>{const s=Number(_.last_price||0),u=s>0?Math.floor(l/s):0,w=u*s;return o+=w,u===0?(c.push(x),d+=l):d+=l-w,{..._,rank:Number(_.rank??_.Rank??0),universe:String(_.universe||""),symbol:String(_.symbol||""),sector:String(_.sector||""),last_price:parseFloat(s.toFixed(2)),score:parseFloat(Number(_.score||0).toFixed(6)),qty:u,amount:parseFloat(w.toFixed(2)),Investment:parseFloat(l.toFixed(2)),kite_token:_.kite_token??_.token??"",dhan_token:_.dhan_token??""}});if(r)for(const _ of c){if(d<=0)break;const x=p[_],s=Number(x.last_price||0);if(s<=0)continue;const u=Math.floor(d/s);if(u>0){const w=u*s;o+=w,d-=w,x.qty=u,x.amount=parseFloat(w.toFixed(2))}}const j={total_capital:t,used_capital:parseFloat(o.toFixed(2)),remaining_capital:parseFloat((t-o).toFixed(2))};return{portfolio:p,summary:j}}function Qt(n){return(n||[]).map(t=>({rank:Number(t.rank??t.Rank??0),universe:String(t.universe||""),symbol:String(t.symbol||""),sector:String(t.sector||""),last_price:parseFloat(Number(t.last_price||0).toFixed(2)),score:parseFloat(Number(t.score||0).toFixed(6)),kite_token:t.kite_token??t.token??"",dhan_token:t.dhan_token??""}))}function Xt(n){return n==null||n===""?"--":typeof n=="number"?Number.isInteger(n)?fe(n):M(n).replace(/\.00$/,""):String(n)}function it({title:n,subtitle:t,rows:i,columns:r,action:l}){const o=b.useDeferredValue(i),[c,d]=b.useState(""),[p,j]=b.useState(15),[_,x]=b.useState(0),s=b.useMemo(()=>{const N=c.trim().toLowerCase();return N?o.filter(I=>Object.values(I).some($=>String($??"").toLowerCase().includes(N))):o},[o,c]),u=Math.max(1,Math.ceil(s.length/p)),w=Math.min(_,u-1),T=w*p,A=s.slice(T,T+p);return b.useEffect(()=>{x(0)},[c,p,i.length]),e.jsxs("section",{className:"eod-card",children:[e.jsxs("div",{className:"eod-section-header",children:[e.jsx("h4",{children:n}),e.jsx("span",{children:t})]}),e.jsxs("div",{className:"eod-section-body",children:[e.jsxs("div",{className:"eod-toolbar",children:[e.jsxs("div",{className:"eod-toolbar-left",children:[e.jsxs("span",{className:"eod-toolbar-badge",children:[s.length," rows"]}),e.jsx("input",{className:"eod-input",style:{width:"240px"},value:c,onChange:N=>d(N.target.value),placeholder:"Search symbol, sector, universe..."})]}),l?e.jsx("div",{className:"eod-toolbar-right",children:l}):null]}),e.jsx("div",{className:"eod-table-wrap",children:s.length===0?e.jsx("div",{className:"eod-empty",children:"No rows available for the current filters."}):e.jsx("div",{className:"eod-table-scroll",children:e.jsxs("table",{className:"eod-table",children:[e.jsx("thead",{children:e.jsx("tr",{children:r.map(N=>e.jsx("th",{className:N.align==="right"?"right":N.align==="center"?"center":"",children:e.jsx("button",{type:"button",children:N.label})},String(N.key)))})}),e.jsx("tbody",{children:A.map((N,I)=>e.jsx("tr",{className:`${I%2===1?"striped ":""}hoverable`,children:r.map($=>e.jsx("td",{className:$.align==="right"?"right":$.align==="center"?"center":"",children:$.render?$.render(N):Xt(N[$.key])},String($.key)))},I))})]})})}),s.length>0?e.jsxs("div",{className:"eod-pagination",children:[e.jsxs("div",{className:"eod-pagination-info",children:["Showing ",Math.min(T+1,s.length)," to ",Math.min(T+p,s.length)," of ",s.length," rows"]}),e.jsxs("div",{className:"eod-pagination-controls",children:[e.jsx("select",{className:"eod-select",style:{width:"92px",minWidth:"92px"},value:p,onChange:N=>j(Number(N.target.value)),children:[5,10,15,50,100].map(N=>e.jsxs("option",{value:N,children:[N,"/page"]},N))}),e.jsx("button",{type:"button",className:"eod-mini-btn",disabled:w===0,onClick:()=>x(N=>Math.max(0,N-1)),children:"Prev"}),e.jsxs("span",{className:"eod-pagination-info",children:["Page ",w+1," / ",u]}),e.jsx("button",{type:"button",className:"eod-mini-btn",disabled:w>=u-1,onClick:()=>x(N=>Math.min(u-1,N+1)),children:"Next"})]})]}):null]})]})}function Kt(n){const t={};return(n||[]).forEach(i=>{const r=String(i.end_date||""),l=r?new Date(`${r}T00:00:00`):null;if(!l||Number.isNaN(l.getTime()))return;const o=String(l.getFullYear()),c=String(l.getMonth()+1).padStart(2,"0");t[`${o}-${c}`]=i}),t}function Zt(n,t,i){const r={},l={},o=[],c=Kt(t);return(n||[]).forEach(d=>{const p=String(d.month||"").split("-");if(p.length!==2)return;const j=p[0],_=Number(p[1]);if(r[j]||(r[j]={},l[j]={},o.push(j)),r[j][_]=Number(d.Monthly_ROI_Pct||0),d.Start_Value!=null||d.End_Value!=null){const x=Number(d.Start_Value??0),s=Number(d.End_Value??0);l[j][_]={cc:x,op:x-i,pnl:s-x}}else if(d.Capital_Base!=null)l[j][_]={cc:Number(d.Capital_Base??0),op:Number(d.CumBeforeMonth??0),pnl:Number(d.MonthPnL??0)};else{const x=String(_).padStart(2,"0"),s=c[`${j}-${x}`];if(s){const u=Number(s.portfolio_start_value??0),w=Number(s.pnl_rupee??0);l[j][_]={cc:u,op:u-i,pnl:w}}}}),o.sort((d,p)=>Number(d)-Number(p)),{dataMap:r,detailMap:l,years:o}}function ea(n){const t={};return(n||[]).forEach(i=>{const r=String(i.end_date||""),l=r?new Date(`${r}T00:00:00`):null;if(!l||Number.isNaN(l.getTime()))return;const o=`${X[l.getMonth()]} ${l.getFullYear()}`;t[o]||(t[o]=[]),t[o].push(i)}),t}function ta(n){const t={};return(n||[]).forEach(i=>{const r=new Date(`${String(i.end_date||"")}T00:00:00`);if(Number.isNaN(r.getTime()))return;const l=String(r.getFullYear());t[l]||(t[l]=[]),t[l].push({...i,monthName:X[r.getMonth()],monthIndex:r.getMonth()})}),Object.keys(t).forEach(i=>t[i].sort((r,l)=>r.monthIndex-l.monthIndex)),t}function ot(n,t,i){return Object.prototype.hasOwnProperty.call(n[t]||{},i+1)}function aa(n,t){var P;const i=n||[],r=1e3,l=i.map(f=>Number(f.portfolio||0)),o=l.find(f=>f>0)??Math.max(t,1),c=i.map(f=>Number(f.index||0)),d=c.find(f=>f>0)??1,p=(P=i[0])!=null&&P.date?new Date(`${i[0].date}T00:00:00`):null,j=f=>{if(!f||Number.isNaN(f.getTime()))return"--";const E=f.getDate(),R=E%10===1&&E%100!==11?"st":E%10===2&&E%100!==12?"nd":E%10===3&&E%100!==13?"rd":"th";return`${E}${R} ${f.toLocaleString("en-US",{month:"short"})} ${f.getFullYear()}`},_=l.map(f=>parseFloat(f.toFixed(2))),x=c.map(f=>parseFloat((f/d*t).toFixed(2))),s=l.map(f=>parseFloat((f/o*r).toFixed(2))),u=c.map(f=>parseFloat((f/d*r).toFixed(2))),w=i.map((f,E)=>({x:f.date,y:s[E]})),T=i.map((f,E)=>({x:f.date,y:u[E]})),A=[...s,...u].filter(f=>Number.isFinite(f)&&f>0),N=A.length?Math.min(...A):r,I=A.length?Math.max(...A):r,$={chart:{height:350,type:"area",background:"transparent",toolbar:{show:!0,tools:{download:!0,zoom:!0,pan:!0,reset:!0}},zoom:{enabled:!0},animations:{enabled:!1}},dataLabels:{enabled:!1},stroke:{curve:"smooth",width:[2,2]},colors:["#2b67c7","#8b5cf6"],series:[{name:"Portfolio",data:w},{name:"Nifty 500",data:T}],xaxis:{type:"datetime",labels:{datetimeUTC:!1,style:{colors:"#555",fontSize:"11px"}},axisBorder:{show:!1},axisTicks:{show:!1}},yaxis:{labels:{formatter:f=>f>=1e3?`${(f/1e3).toFixed(f>=2e3?0:1)}k`:Number(f).toFixed(0),style:{colors:"#555",fontSize:"11px"}},min:Math.floor(N*.97),max:Math.ceil(I*1.05)},annotations:{yaxis:[{y:r,borderColor:"#888",borderWidth:1.5,strokeDashArray:5,label:{text:`Base NAV ${r}`,borderColor:"#888",position:"left",offsetX:12,style:{color:"#555",fontSize:"11px",background:"#f5f5f5"}}}]},tooltip:{shared:!0,intersect:!1,x:{format:"dd MMM yyyy"},custom:({dataPointIndex:f})=>{const E=s[f]??r,R=u[f]??r,U=_[f]??t,ae=x[f]??t,J=(E/r-1)*100,se=(R/r-1)*100,O=E-r,re=R-r;return`
          <div style="min-width:230px;padding:14px 16px;background:#fff;border:1px solid #e5e7eb;border-radius:14px;box-shadow:0 12px 32px rgba(15,23,42,0.12);">
            <div style="display:flex;align-items:center;gap:10px;color:#1f2937;font-size:13px;font-weight:700;">
              <span style="display:inline-block;width:12px;height:12px;background:#2b67c7;border-radius:2px;"></span>
              Combined NAV: ${E.toFixed(2)}
            </div>
            <div style="display:flex;align-items:center;gap:10px;color:#1f2937;font-size:13px;font-weight:700;margin-top:10px;">
              <span style="display:inline-block;width:12px;height:12px;background:#8b5cf6;border-radius:2px;"></span>
              Nifty 500: ${R.toFixed(2)}
            </div>
            <div style="height:1px;background:#e5e7eb;margin:14px 0;"></div>
            <div style="color:#4b5563;font-size:12px;margin-bottom:10px;">Since ${j(p)}</div>
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
        `}},legend:{position:"top",horizontalAlign:"right",fontSize:"13px",labels:{colors:"#333"},markers:{size:8}},fill:{type:"gradient",gradient:{type:"vertical",shadeIntensity:0,colorStops:[[{offset:0,color:"#2ecc71",opacity:.4},{offset:100,color:"#2ecc71",opacity:.02}],[{offset:0,color:"#f39c12",opacity:.25},{offset:100,color:"#f39c12",opacity:.02}]]}},grid:{borderColor:"#e9ecef",strokeDashArray:4},title:{text:"Portfolio performance",align:"left",style:{color:"#2a2a2a",fontWeight:"bold",fontSize:"16px"}}};return{options:$,series:$.series||[]}}function na(n,t){const i=n||[],r=i.map(c=>Number(c.index||0)),l=r.find(c=>c>0)??1,o=r.map(c=>parseFloat((c/l*t).toFixed(2)));return i.map((c,d)=>{var T;const p=Number(c.portfolio||0),j=d>0?Number(((T=i[d-1])==null?void 0:T.portfolio)||0):p,_=p-j,x=j>0?_/j*100:0,s=o[d]||0,u=d>0?o[d-1]||0:s,w=s-u;return{date:String(c.date||"--"),portfolio_value:parseFloat(p.toFixed(2)),daily_pnl:parseFloat(_.toFixed(2)),daily_roi:parseFloat(x.toFixed(4)),index_value:parseFloat(s.toFixed(2)),index_daily_pnl:parseFloat(w.toFixed(2))}})}function ct(n){return String(n??"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&apos;")}function sa(n){if(n==null||n==="")return'<Cell><Data ss:Type="String"></Data></Cell>';const t=typeof n=="number"?n:Number(n);return!(typeof n=="string"&&/^\d{4}-\d{2}-\d{2}(T.*)?$/.test(n))&&Number.isFinite(t)&&String(n).trim()!==""?`<Cell><Data ss:Type="Number">${t}</Data></Cell>`:`<Cell><Data ss:Type="String">${ct(n)}</Data></Cell>`}function z(n,t){const i=t.map(r=>`<Row>${r.map(o=>sa(o)).join("")}</Row>`).join("");return`<Worksheet ss:Name="${ct(n)}"><Table>${i}</Table></Worksheet>`}function ne(n,t){if(!n.length)return[[]];const i=new Set;n.forEach(o=>Object.keys(o).forEach(c=>i.add(c)));const l=[...i];return[l,...n.map(o=>l.map(c=>o[c]??""))]}function _e(n){if(n instanceof Date&&!Number.isNaN(n.getTime()))return n.toISOString().slice(0,10);if(typeof n=="string"){const t=n.trim();return/^\d{4}-\d{2}-\d{2}(T.*)?$/.test(t)?t.slice(0,10):t||"--"}return typeof n=="number"&&Number.isFinite(n)?n:n??"--"}function ra(n){return[["Stock","Buy Date","Buy_price","Exit Date","Exit_Price","No.OfShares","ROI"],...n.map(t=>[t.symbol??t.stock??t.ticker??"--",_e(t.buy_date??t.entry_date??t.start_date),t.buy_price??t.entry_price??t.price??"--",_e(t.sell_date??t.exit_date??t.end_date),t.sell_price??t.exit_price??t.close_price??"--",t.qty??t.no_of_shares??t.quantity??t.shares??"--",t.roi??t.roi_percent??t.return_pct??t.pnl_pct??"--"])]}function he(n){const t=_e(n);if(typeof t!="string")return"";const i=t.match(/^(\d{4})-(\d{2})/);return i?`${i[1]}-${i[2]}`:""}function ia(n){const t=n.closed_trades_json||n.trade_history||[],i=n.monthly_final_json||[],r=n.monthly_equity_json||[],l=n.monthly_closed_json||[],o=new Map;r.forEach(d=>{const p=String(d.Month||he(d.date)||"").trim();p&&o.set(p,{...o.get(p)||{},equity:d})}),i.forEach(d=>{const p=String(d.month||he(d.end_date)||"").trim();p&&o.set(p,{...o.get(p)||{},final:d})}),l.forEach(d=>{const p=String(d.Month||d.month||he(d.date)||"").trim();p&&o.set(p,{...o.get(p)||{},closed:d})}),t.forEach(d=>{const p=he(d.sell_date??d.exit_date??d.end_date);if(!p)return;const j=o.get(p)||{},_=Array.isArray(j.trades)?j.trades:[];o.set(p,{...j,trades:[..._,d]})});const c=[...o.keys()].sort();return[["Year","Month","Date","No.of Rebalanced Stock","Unrealized ROI%","No.of Winners","No. of Lossers","Top Winner ROI%","Top Losser ROI%","Avg. Winners ROI%","Avg. Lossers ROI%","Risk to Reward"],...c.map(d=>{const p=o.get(d)||{},j=Array.isArray(p.trades)?p.trades:[],_=j.map(R=>Number(R.roi??R.roi_percent??R.return_pct??R.pnl_pct)).filter(R=>Number.isFinite(R)),x=_.filter(R=>R>0),s=_.filter(R=>R<0),u=x.length?x.reduce((R,U)=>R+U,0)/x.length:"",w=s.length?s.reduce((R,U)=>R+U,0)/s.length:"",T=x.length?Math.max(...x):"",A=s.length?Math.min(...s):"",N=typeof u=="number"&&typeof w=="number"&&w!==0?u/Math.abs(w):"",I=p.equity||{},$=p.final||{},P=p.closed||{},[f="",E=""]=d.split("-");return[f,E?Number(E):"",_e(I.date??$.end_date??`${d}-01`),j.length||Number(P.rebalanced_stock_count??P.no_of_rebalanced_stock??P.rebalanced_count??0),I.unrealized_return_pct??$.portfolio_roi??P.closed_roi_pct??"",x.length,s.length,T,A,u,w,N]})]}function oa(n){const i=[["Signal Date","Day","Signal","Trade Date","Action","Symbol","Qty","Price","Rank"]];for(const r of n){const l=r.signal==="Sell"?r.sell_date??r.signal_date:r.buy_date??r.signal_date,o=r.signal_day??"";if(r.signal==="Sell"){for(const c of r.stocks_sold??[])i.push([r.signal_date,o,"Sell",l,c.action??"SELL_SIGNAL",c.symbol,c.qty,c.price,c.rank??""]);for(const c of r.stocks_skipped??[])i.push([r.signal_date,o,"Sell",l,"SKIPPED_NO_PRICE",c.symbol,"","",""]);r.gold_bought&&i.push([r.signal_date,o,"Sell",r.gold_bought.date??l,"BUY_GOLDBEES","gold_bees",r.gold_bought.qty,r.gold_bought.price,""])}else{r.gold_sold&&i.push([r.signal_date,o,"Buy",r.gold_sold.date??l,"SELL_GOLDBEES","gold_bees",r.gold_sold.qty,r.gold_sold.price,""]);for(const c of r.stocks_bought??[])i.push([r.signal_date,o,"Buy",l,c.action??"BUY_REENTER",c.symbol,c.qty,c.price,c.rank??""])}}return i}function la(n){const i=[["Date","Day","Action","Symbol","Qty","Price","Rank","Buy Price","Loss %"]];for(const r of n)i.push([r.date,r.day??"",r.action,r.symbol,r.qty,r.price,r.rank??"",r.buy_price??"",r.loss_percent??""]);return i}function ca(n){const t={...n.metrics||{}},l=(n.closed_trades_json||n.trade_history||[]).map(o=>Number(o.roi??o.roi_percent??o.return_pct??o.pnl_pct)).filter(o=>Number.isFinite(o)).filter(o=>Math.abs(o)>1e-9);return t.total_trades==null&&(t.total_trades=l.length),t.no_of_winners==null&&(t.no_of_winners=l.filter(o=>o>0).length),t.no_of_losers==null&&(t.no_of_losers=l.filter(o=>o<0).length),t}function da(n){const t={total_trades:"Total Trade",no_of_winners:"No.Of Winners",no_of_losers:"No.Of Losers",win_rate_percent:"Win Rate(%)",avg_winners_roi_percent:"Avg. Winners ROI(%)",avg_losers_roi_percent:"Avg. Losers ROI(%)",biggest_winner_roi_percent:"Biggest Winner ROI(%)",biggest_loser_roi_percent:"Biggest Loser ROI(%)",risk_reward:"Risk To Reward",max_drawdown:"Max. DD(%)",gagr:"CAGR(%)",avg_trades_per_year:"Avg. trade per year",kurtosis_monthly_roi:"kurtosis(MonthlyROI)",kurtosis_trade_roi:"kurtosis(TradeROI)",std:"STD",calmar_ratio:"Calmar Ratio",invested_capital:"Invested Capital",final_capital:"Current Capital",idle_cash:"Idle Cash",total_return:"Total Return(%)"};return t[n]?t[n]:n.replace(/_/g," ").replace(/\b\w/g,i=>i.toUpperCase())}function pa(n){const t=new Date(`${n}T00:00:00`);if(Number.isNaN(t.getTime()))return n;const i=new Date(t),r=i.getDay(),l=r===0?-6:1-r;return i.setDate(i.getDate()+l),i.toISOString().slice(0,10)}function ua(n){let t=0;return(n||[]).map(i=>{const r=Number(i.portfolio||0);t=Math.max(t,r);const l=t>0?(r-t)/t*100:0,o=r-t;return{date:String(i.date||""),drawdown_pct:parseFloat(l.toFixed(4)),peak_value:t,bottom_value:r,drawdown_rupee:parseFloat(o.toFixed(2))}})}function lt(n){const t=new Map;return(n||[]).forEach(i=>{const r=pa(String(i.date||"")),l=t.get(r);(!l||Number(i.drawdown_pct||0)<Number(l.drawdown_pct||0))&&t.set(r,{...i,date:r})}),Array.from(t.values()).sort((i,r)=>String(i.date).localeCompare(String(r.date)))}function ga(n,t){const i=n||[],r=i.map(c=>({x:c.date,y:parseFloat(Number(c.drawdown_pct).toFixed(4))})),l=i.reduce((c,d)=>Math.min(c,Number(d.drawdown_pct)),0),o={chart:{height:250,type:"area",background:"transparent",toolbar:{show:!0,tools:{download:!0,zoom:!0,pan:!0,reset:!0}},zoom:{enabled:!0},animations:{enabled:!1}},dataLabels:{enabled:!1},stroke:{curve:"smooth",width:2},colors:["#e74c3c"],series:[{name:"Drawdown (%)",data:r}],xaxis:{type:"datetime",labels:{datetimeUTC:!1,style:{colors:"#555",fontSize:"11px"}},axisBorder:{show:!1},axisTicks:{show:!1}},yaxis:{labels:{formatter:c=>`${Number(c).toFixed(2)}%`,style:{colors:"#555",fontSize:"11px"}},min:l*1.05,max:0},tooltip:{shared:!1,x:{format:"dd MMM yyyy"},y:{formatter:c=>`${Number(c).toFixed(2)}%`}},fill:{type:"gradient",gradient:{shadeIntensity:1,opacityFrom:.35,opacityTo:.08,stops:[0,90,100]}},title:{text:`${t} Drawdown Curve`,align:"left",style:{color:"#b42318",fontWeight:"bold",fontSize:"16px"}}};return{options:o,series:o.series||[]}}function ma({label:n,options:t,value:i,onChange:r}){const[l,o]=b.useState(!1),c=b.useRef(null),d=b.useMemo(()=>t.map(u=>u.value),[t]),p=b.useMemo(()=>t.filter(u=>i.includes(u.value)).map(u=>u.label),[t,i]),j=t.length>0&&i.length===t.length;b.useEffect(()=>{const u=w=>{c.current&&!c.current.contains(w.target)&&o(!1)};return document.addEventListener("mousedown",u),()=>document.removeEventListener("mousedown",u)},[]);const _=u=>{if(i.includes(u)){r(i.filter(w=>w!==u));return}r([...i,u])},x=()=>{r(j?[]:d)},s=p.length?p.length<=2?p.join(", "):`${p.slice(0,2).join(", ")} +${p.length-2}`:`Select ${n}`;return e.jsxs("div",{className:`scanner-field scanner-eod-multi-field ${l?"scanner-eod-multi-field-open":""}`,ref:c,children:[e.jsxs("label",{children:[n,"*"]}),e.jsxs("button",{type:"button",className:"scanner-eod-multi-trigger",onClick:()=>o(u=>!u),children:[e.jsx("span",{className:p.length?"":"scanner-eod-multi-placeholder",children:s}),e.jsx("span",{className:`scanner-eod-multi-caret ${l?"open":""}`,children:"▾"})]}),l?e.jsxs("div",{className:"scanner-eod-multi-panel",children:[e.jsxs("label",{className:"scanner-eod-multi-option scanner-eod-multi-option-sticky",children:[e.jsx("input",{type:"checkbox",checked:j,onChange:x}),e.jsx("span",{children:"Select All"})]}),e.jsx("div",{className:"scanner-eod-multi-list",children:t.map(u=>e.jsxs("label",{className:`scanner-eod-multi-option ${i.includes(u.value)?"selected":""}`,children:[e.jsx("input",{type:"checkbox",checked:i.includes(u.value),onChange:()=>_(u.value)}),e.jsx("span",{children:u.label})]},u.value))})]}):null]})}const ba=Vt(`
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
`,".scanner-backtest-page");function va(){var Ve,Ue,We,Ye,Ge,He,Je,Qe,Xe,Ke,Ze,et,tt;const{strategyId:n=""}=Dt(),[t,i]=b.useState(S),[r,l]=b.useState([]),[,o]=b.useState([]),[c,d]=b.useState(!1),[p,j]=b.useState(!1),[_,x]=b.useState(null),[s,u]=b.useState(null),[w,T]=b.useState([]),[A,N]=b.useState([]),[I,$]=b.useState(null),[P,f]=b.useState(!1),[E,R]=b.useState(!1),[U,ae]=b.useState(""),[J,se]=b.useState([{value:"__new__",label:"Add New Portfolio"}]),[O,re]=b.useState("__new__"),[ye,ve]=b.useState(""),[De,Ee]=b.useState(!1),[de,Fe]=b.useState([{value:"paper_trade",label:"Virtual (Paper Trade)",brokerType:"paper",isLoggedIn:!0}]),[ie,ke]=b.useState("paper_trade"),[Me,Ie]=b.useState(!1),[B,je]=b.useState("local"),[K,Ne]=b.useState("weekly");function $e(a,g,h){x({id:Date.now(),message:g,variant:a,title:h})}function pe(a){$e("success",a)}function W(a){$e("error",a)}b.useEffect(()=>{(async()=>{try{const[g,h]=await Promise.all([fetch(`${te}/indexes`),fetch(`${te}/sectors`)]),[y,m]=await Promise.all([g.json(),h.json()]);if(g.ok){const k=Array.isArray(y)?y:(y==null?void 0:y.items)||[];l(Ut(k))}if(h.ok){const k=Array.isArray(m)?m:(m==null?void 0:m.items)||[];o(Wt(k))}}catch{}})()},[]),b.useEffect(()=>{if(!n)return;let a=!0;return(async()=>{try{x(null);const h=await fetch(`${te}/portfolio_settings/${encodeURIComponent(n)}`),y=await h.json().catch(()=>({}));if(!h.ok)throw new Error((y==null?void 0:y.detail)||"Unable to load portfolio settings.");if(!a)return;i(Yt(y)),u(null),T([]),N([]),$(null),R(!1),ae(""),oe()}catch(h){if(!a)return;W(h instanceof Error?h.message:"Unable to load portfolio settings.")}})().catch(()=>{}),()=>{a=!1}},[n]),b.useEffect(()=>{let a=!0;if(!E)return()=>{a=!1};const g=async()=>{try{Ee(!0);const y=await fetch(`${te}/get_portfolio`),m=await y.json().catch(()=>[]);if(!y.ok)throw new Error("Failed to load portfolios.");if(!a)return;const v=(Array.isArray(m)?m:Array.isArray(m==null?void 0:m.items)?m.items:[]).map(D=>{const ue=String((D==null?void 0:D._id)||"").trim(),ge=String((D==null?void 0:D.name)||"").trim();return ue&&ge?{value:ue,label:ge}:null}).filter(D=>!!D),L=Array.from(new Map(v.map(D=>[D.value,D])).values());se([{value:"__new__",label:"Add New Portfolio"},...L])}catch{if(!a)return;se([{value:"__new__",label:"Add New Portfolio"}])}finally{a&&Ee(!1)}},h=async()=>{try{Ie(!0);const y=await fetch(`${$t}/broker-configurations?broker_type=live`),m=await y.json().catch(()=>({}));if(!y.ok)throw new Error("Failed to load brokers.");if(!a)return;const k=(Array.isArray(m==null?void 0:m.records)?m.records:[]).filter(v=>String((v==null?void 0:v.user_id)||"")===Pt).map(v=>{const L=String((v==null?void 0:v.name)||(v==null?void 0:v.broker_name)||"Broker").trim(),D=!!(v!=null&&v.is_logged_in)&&!(v!=null&&v.session_expired);return{value:String((v==null?void 0:v._id)||""),label:`${L} (${D?"Logged In":"Not Logged In"})`,brokerType:"live",isLoggedIn:D}}).filter(v=>v.value);Fe([{value:"paper_trade",label:"Virtual (Paper Trade)",brokerType:"paper",isLoggedIn:!0},...k])}catch{if(!a)return;Fe([{value:"paper_trade",label:"Virtual (Paper Trade)",brokerType:"paper",isLoggedIn:!0}])}finally{a&&Ie(!1)}};return g(),h(),()=>{a=!1}},[E]),b.useEffect(()=>{if(O!=="__new__"){const a=J.find(g=>g.value===O);ve((a==null?void 0:a.label)||"")}},[J,O]),b.useEffect(()=>{de.some(a=>a.value===ie)||ke("paper_trade")},[de,ie]);const Y=b.useMemo(()=>Zt(s==null?void 0:s.monthly_roi,s==null?void 0:s.monthly_final_json,Number(t.starting_capital||0)),[s==null?void 0:s.monthly_roi,s==null?void 0:s.monthly_final_json,t.starting_capital]),Pe=b.useMemo(()=>ea(s==null?void 0:s.weekly_json),[s==null?void 0:s.weekly_json]),we=b.useMemo(()=>ta(s==null?void 0:s.monthly_final_json),[s==null?void 0:s.monthly_final_json]),Te=b.useMemo(()=>aa(s==null?void 0:s.equity_curve_json,Number(t.starting_capital||0)),[s==null?void 0:s.equity_curve_json,t.starting_capital]),Le=b.useMemo(()=>na(s==null?void 0:s.equity_curve_json,Number(t.starting_capital||0)),[s==null?void 0:s.equity_curve_json,t.starting_capital]),Z=b.useMemo(()=>ua(s==null?void 0:s.equity_curve_json),[s==null?void 0:s.equity_curve_json]),ee=b.useMemo(()=>(s==null?void 0:s.daily_drawdown_json)||[],[s==null?void 0:s.daily_drawdown_json]),ze=b.useMemo(()=>lt(Z),[Z]),Oe=b.useMemo(()=>lt(ee),[ee]),G=b.useMemo(()=>Z.length?Z.reduce((a,g)=>Number(g.drawdown_pct||0)<Number(a.drawdown_pct||0)?g:a):null,[Z]),H=b.useMemo(()=>ee.length?ee.reduce((a,g)=>Number(g.drawdown_pct||0)<Number(a.drawdown_pct||0)?g:a):null,[ee]),Se=b.useMemo(()=>ga(B==="local"?K==="daily"?Z:ze:K==="daily"?ee:Oe,`${B==="local"?"Local":"Backend"} ${K==="daily"?"Daily":"Weekly"}`),[ee,Oe,B,K,Z,ze]),C=(a,g)=>{i(h=>({...h,[a]:g}))},dt=()=>{i(S),x(null),u(null),T([]),N([]),$(null),R(!1),ae(""),oe(),je("local"),Ne("weekly")},pt=[{key:"invested_capital",label:"Investment Capital"},{key:"final_capital",label:"Current Capital"},{key:"idle_cash",label:"Idle Cash"},{key:"total_return",label:"Total Return",suffix:"%"},{key:"win_rate_percent",label:"Win Rate(%)",suffix:"%"},{key:"avg_winners_roi_percent",label:"Avg. Winners ROI(%)",suffix:"%"},{key:"avg_losers_roi_percent",label:"Avg. Losers ROI(%)",suffix:"%"},{key:"max_drawdown",label:"Max. DD(%)",suffix:"%"},{key:"gagr",label:"CAGR(%)",suffix:"%"},{key:"avg_trades_per_year",label:"Avg. trade per year"},{key:"risk_reward",label:"Risk To Reward"},{key:"biggest_winner_roi_percent",label:"Biggest Winner ROI(%)",suffix:"%"},{key:"biggest_loser_roi_percent",label:"Biggest Loser ROI(%)",suffix:"%"}],ut=[{key:"rank",label:"Rank",align:"center"},{key:"universe",label:"Universe"},{key:"symbol",label:"Symbol"},{key:"sector",label:"Sector"},{key:"last_price",label:"Last Price",align:"right",render:a=>M(a.last_price)},{key:"score",label:"Score",align:"right",render:a=>Number(a.score).toFixed(6)},{key:"qty",label:"Qty",align:"right"},{key:"amount",label:"Amount",align:"right",render:a=>M(a.amount)}],gt=[{key:"rank",label:"Rank",align:"center"},{key:"universe",label:"Universe"},{key:"symbol",label:"Symbol"},{key:"sector",label:"Sector"},{key:"last_price",label:"Last Price",align:"right",render:a=>M(a.last_price)},{key:"score",label:"Score",align:"right",render:a=>Number(a.score).toFixed(6)}],mt=async()=>{d(!0),x(null);try{const a=await fetch(`${te}/eod_scoring`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(Gt(t))}),g=await a.json().catch(()=>({}));if(!a.ok)throw new Error((g==null?void 0:g.detail)||"Unable to fetch score.");const h=g.stocks_scored||[];T(Qt(h));const y=Number(t.starting_capital||0),m=Number(t.entry_rank||0);if(h.length>0&&y>0&&m>0){const{portfolio:k,summary:v}=Jt(h,y,m,t.reuse_leftover_cash);N(k),$(v)}else N([]),$(null);pe("Score fetched successfully.")}catch(a){W(a instanceof Error?a.message:"Unable to fetch score.")}finally{d(!1)}},oe=()=>{re("__new__"),ve(""),ke("paper_trade")},bt=()=>{if(!t.strategy_name.trim()){W("Strategy Name is required.");return}x(null),ae(t.strategy_name),oe(),R(!0)},Ae=()=>{P||(R(!1),oe())},Be=e.jsxs(e.Fragment,{children:[A.length>0?e.jsx("div",{className:"scanner-col-12",children:e.jsxs("section",{className:"eod-card",children:[e.jsxs("div",{className:"eod-section-header",children:[e.jsx("h4",{children:"CAPITAL SUMMARY"}),e.jsx("span",{children:"Equal allocation overview"})]}),e.jsx("div",{className:"eod-section-body",children:e.jsxs("div",{className:"eod-summary-grid",children:[e.jsxs("div",{className:"eod-summary-card",children:[e.jsx("span",{children:"Capital"}),e.jsx("strong",{children:M((I==null?void 0:I.total_capital)||0)})]}),e.jsxs("div",{className:"eod-summary-card",children:[e.jsx("span",{children:"Used"}),e.jsx("strong",{children:M((I==null?void 0:I.used_capital)||0)})]}),e.jsxs("div",{className:"eod-summary-card",children:[e.jsx("span",{children:"Remaining"}),e.jsx("strong",{children:M((I==null?void 0:I.remaining_capital)||0)})]})]})})]})}):null,A.length>0?e.jsx("div",{className:"scanner-col-12",children:e.jsx(it,{title:"EOD INVESTMENT RESULT",subtitle:"Portfolio-ready picks",rows:A,columns:ut,action:e.jsx("div",{className:"eod-invest-btn",children:e.jsx("button",{type:"button",onClick:bt,disabled:P,children:P?"Investing...":"Invest Now"})})})}):null,w.length>0?e.jsx("div",{className:"scanner-col-12",children:e.jsx(it,{title:"EOD SCORE RESULT",subtitle:"Raw score engine output",rows:w,columns:gt})}):null]}),qe=async()=>{const a=J.find(k=>k.value===O),g=O==="__new__"?ye.trim():String((a==null?void 0:a.label)||"").trim(),h=O==="__new__"?"":String((a==null?void 0:a.value)||"").trim(),y=U.trim(),m=de.find(k=>k.value===ie);if(!g){W("Portfolio Name is required.");return}if(!y){W("Strategy Name is required.");return}if(!m){W("Broker is required.");return}f(!0),x(null);try{const v={portfolio_settings:{...t,strategy_name:y,portfolio_name:g,portfolio_id:h,starting_capital:Number(t.starting_capital||0),rebalance_date:String(t.rebalance_date||10),uncorrelated_asset_allocation:Number(t.uncorrelated_asset_allocation||0),entry_rank:Number(t.entry_rank||0),exit_rank:Number(t.exit_rank||0),score_date:xe(),broker:m.brokerType==="live"?m.value:"",broker_id:m.brokerType==="live"?m.value:"",broker_type:m.brokerType,broker_name:m.label},invest_stock_data:A},L=await fetch(`${te}/save_portfolio`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(v)}),D=await L.json().catch(()=>({}));if(!L.ok)throw new Error((D==null?void 0:D.detail)||"Unable to invest.");D.status==="success"&&(pe("Invested successfully."),R(!1),oe())}catch(k){W(k instanceof Error?k.message:"Unable to invest.")}finally{f(!1)}},ht=async()=>{j(!0),x(null);try{const a=await fetch(`${te}/run_backtest`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(Ht(t))}),g=await a.json().catch(()=>({}));if(!a.ok)throw new Error((g==null?void 0:g.detail)||"Unable to fetch backtest.");u(g),pe("Backtest fetched successfully.")}catch(a){u(null),W(a instanceof Error?a.message:"Unable to fetch backtest.")}finally{j(!1)}},ft=()=>{if(!s){W("Run backtest first to download the report.");return}const a=[["Strategy Name",t.strategy_name],["Starting Capital",t.starting_capital],["Universe",t.indexes.join(", ")],["No Of Stocks in Portfolio",t.entry_rank],["Exit Rank",t.exit_rank],["Min Price",t.stock_price_min],["Max Price",t.stock_price_max],["Rebalance Frequency",t.rebalance_frequency],["Rebalance Date",t.rebalance_date],["Alternate Rebalance Day",t.alternative_rebalance_day],["Start Date",t.start_date],["End Date",t.end_date],["Regime Filter",t.regime_filter],["Regime Filter Action",t.regime_filter_action],["Regime Filter Index",t.regime_filter_indexes],["Asset Type",t.uncorrelated_asset_type],["Asset Alloc",t.uncorrelated_asset_allocation],["Position Sizing",t.position_sizing],["Formula",t.formula]],g=ca(s),h=["invested_capital","final_capital","idle_cash","total_trades","no_of_winners","no_of_losers","win_rate_percent","avg_winners_roi_percent","avg_losers_roi_percent","biggest_winner_roi_percent","biggest_loser_roi_percent","risk_reward","max_drawdown","gagr","kurtosis_monthly_roi","kurtosis_trade_roi","std","avg_trades_per_year","calmar_ratio"],y=Object.entries(g||{}),m=[...h.filter(F=>y.some(([ce])=>ce===F)),...y.map(([F])=>F).filter(F=>!h.includes(F))],k=[["Metrics","Score"],["Start Date",t.start_date],["End date",t.end_date],...m.map(F=>[da(F),(g==null?void 0:g[F])??"--"])],v=[["Year","Month","Day","PNL(INR)","Invest Value(INR)","ROI%","ROI_DD%","Cummulative Profit"],...Object.entries(we).flatMap(([F,ce])=>ce.map(Q=>{const me=String(Q.end_date||""),q=new Date(`${me}T00:00:00`);return[F,q&&!Number.isNaN(q.getTime())?q.getMonth()+1:"",q&&!Number.isNaN(q.getTime())?q.getDate():"",Number(Q.pnl_rupee||0),Number(Q.portfolio_start_value||0),Number(Q.portfolio_roi||0),Number(Q.drawdown_pct||0),Number(Q.portfolio_end_value||0)]}))],L=s.trade_history||[],D=s.closed_trades_json||L,ue=ra(D),ge=[["Year",...X,"Total"],...Y.years.map(F=>{const ce=X.map((me,q)=>{var be;return ot(Y.dataMap,F,q)?`${V(((be=Y.dataMap[F])==null?void 0:be[q+1])||0)}%`:"-"}),Q=X.reduce((me,q,be)=>{var nt;return me+Number(((nt=Y.dataMap[F])==null?void 0:nt[be+1])||0)},0);return[F,...ce,`${V(Q)}%`]})],xt=ia(s),_t=[["Date","Portfolio Value","Daily PnL","Daily ROI","Index Value","Index Daily PnL"],...Le.map(F=>[F.date,F.portfolio_value,F.daily_pnl,F.daily_roi,F.index_value,F.index_daily_pnl])],yt=ne(s.equity_details||[]),vt=ne(s.weekly_json||[]),kt=ne(s.monthly_final_json||[]),jt=ne(s.yearly_final_json||[]),Nt=ne(s.daily_drawdown_json||[]),wt=oa(s.regime_events||[]),St=la(s.stoploss_events||[]),Rt=`<?xml version="1.0"?>
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
 ${z("Performance Metrics",k)}
 ${z("Monthly Report",v)}
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
</Workbook>`,Ct=new Blob([Rt],{type:"application/vnd.ms-excel;charset=utf-8;"}),at=URL.createObjectURL(Ct),le=document.createElement("a");le.href=at,le.download=`${t.strategy_name||"scanner-backtest-report"}.xls`,document.body.appendChild(le),le.click(),document.body.removeChild(le),URL.revokeObjectURL(at),pe("Backtest report downloaded successfully.")};return e.jsxs(e.Fragment,{children:[e.jsx(Et,{title:"FinEdge Scanner | Backtest",description:"Sigma backtest page clone in React"}),e.jsx("style",{children:ba}),e.jsx(It,{toast:_,onClose:()=>x(null)}),e.jsxs("div",{className:"scanner-backtest-page",children:[e.jsx(Mt,{pageTitle:"Backtest"}),e.jsxs("div",{className:"scanner-grid",children:[e.jsx("div",{className:"scanner-col-6",children:e.jsx("section",{className:"scanner-card",children:e.jsxs("div",{className:"scanner-card-body",children:[e.jsx("h3",{className:"scanner-card-title",children:"Form Horizontal"}),e.jsxs("div",{className:"scanner-form-grid",children:[e.jsxs("div",{className:"scanner-field",children:[e.jsx("label",{children:"Starting Capital*"}),e.jsx("input",{className:"scanner-input",value:t.starting_capital,onChange:a=>C("starting_capital",a.target.value)})]}),e.jsx(ma,{label:"Index",options:r,value:t.indexes,onChange:a=>C("indexes",a)}),e.jsxs("div",{className:"scanner-field",children:[e.jsx("label",{children:"Min value*"}),e.jsx("input",{className:"scanner-input",value:t.stock_price_min,onChange:a=>C("stock_price_min",a.target.value)})]}),e.jsxs("div",{className:"scanner-field",children:[e.jsx("label",{children:"Max value*"}),e.jsx("input",{className:"scanner-input",value:t.stock_price_max,onChange:a=>C("stock_price_max",a.target.value)})]}),e.jsxs("div",{className:"scanner-field",children:[e.jsx("label",{children:"No.of stocks in Portfolio*"}),e.jsx("input",{className:"scanner-input",value:t.entry_rank,onChange:a=>C("entry_rank",a.target.value)})]}),e.jsxs("div",{className:"scanner-field",children:[e.jsx("label",{children:"Exit Rank*"}),e.jsx("input",{className:"scanner-input",value:t.exit_rank,onChange:a=>C("exit_rank",a.target.value)})]}),e.jsxs("div",{className:"scanner-switch-row",children:[e.jsx("button",{type:"button",className:`scanner-switch ${t.stoploss_status?"active":""}`,onClick:()=>C("stoploss_status",!t.stoploss_status)}),e.jsx("span",{className:"scanner-switch-label",children:"Stop Loss Status"})]}),e.jsxs("div",{className:"scanner-switch-row",children:[e.jsx("button",{type:"button",className:`scanner-switch ${t.reuse_leftover_cash?"active":""}`,onClick:()=>C("reuse_leftover_cash",!t.reuse_leftover_cash)}),e.jsx("span",{className:"scanner-switch-label",children:"Reuse Cash"})]}),e.jsxs("div",{className:"scanner-field",children:[e.jsx("label",{children:"Stop Loss %*"}),e.jsx("input",{className:"scanner-input",value:t.stoploss_percent,onChange:a=>C("stoploss_percent",a.target.value),disabled:!t.stoploss_status})]}),e.jsxs("div",{className:"scanner-field",children:[e.jsx("label",{children:"Stop Loss Rebalance Timing*"}),e.jsx("select",{className:"scanner-select",value:t.stoploss_rebalance_timing,onChange:a=>C("stoploss_rebalance_timing",a.target.value),disabled:!t.stoploss_status,children:zt.map(a=>e.jsx("option",{value:a.value,children:a.label},a.value))})]}),e.jsxs("div",{className:"scanner-field",children:[e.jsx("label",{children:"Rebalance Frequency*"}),e.jsx("select",{className:"scanner-select",value:t.rebalance_frequency,onChange:a=>C("rebalance_frequency",a.target.value),children:Tt.map(a=>e.jsx("option",{value:a.value,children:a.label},a.value))})]}),e.jsxs("div",{className:"scanner-field",children:[e.jsx("label",{children:"Rebalance Date*"}),e.jsx("input",{className:"scanner-input",value:t.rebalance_date,onChange:a=>C("rebalance_date",a.target.value)})]}),e.jsxs("div",{className:"scanner-field",children:[e.jsx("label",{children:"Alternative Rebalance Day*"}),e.jsx("select",{className:"scanner-select",value:t.alternative_rebalance_day,onChange:a=>C("alternative_rebalance_day",a.target.value),children:Lt.map(a=>e.jsx("option",{value:a.value,children:a.label},a.value))})]}),e.jsxs("div",{className:"scanner-field",children:[e.jsx("label",{children:"Position Sizing*"}),e.jsx("select",{className:"scanner-select",value:t.position_sizing,onChange:a=>C("position_sizing",a.target.value),children:Ot.map(a=>e.jsx("option",{value:a.value,children:a.label},a.value))})]}),e.jsxs("div",{className:"scanner-field",children:[e.jsx("label",{children:"EOD Score Model"}),e.jsxs("select",{className:"scanner-select",value:t.score_model,onChange:a=>C("score_model",a.target.value),children:[e.jsx("option",{value:"current",children:"Current EOD Score"}),e.jsx("option",{value:"old",children:"Old EOD Score"})]})]}),e.jsxs("div",{className:"scanner-field full",children:[e.jsx("label",{children:"Scoring Console"}),e.jsx("textarea",{className:"scanner-textarea",value:t.formula,onChange:a=>C("formula",a.target.value)})]}),e.jsxs("div",{className:"scanner-actions",children:[e.jsx("button",{type:"button",className:"scanner-btn",onClick:dt,children:"Cancel"}),e.jsx("button",{type:"button",className:"scanner-btn primary",onClick:mt,disabled:c,children:c?"Scoring...":"Score"}),e.jsx("button",{type:"button",className:"scanner-btn primary",onClick:ht,disabled:p,children:p?"Loading...":"Backtest"})]})]})]})})}),e.jsx("div",{className:"scanner-col-6",children:e.jsx("section",{className:"scanner-card",children:e.jsxs("div",{className:"scanner-card-body",children:[e.jsx("h3",{className:"scanner-card-title",children:"Form Horizontal"}),e.jsxs("div",{className:"scanner-form-grid",children:[e.jsxs("div",{className:"scanner-field wide",children:[e.jsx("label",{children:"Strategy Name*"}),e.jsx("input",{className:"scanner-input",value:t.strategy_name,onChange:a=>C("strategy_name",a.target.value)})]}),e.jsxs("div",{className:"scanner-field",children:[e.jsx("label",{children:"Start date*"}),e.jsx("input",{className:"scanner-input",type:"date",value:t.start_date,onChange:a=>C("start_date",a.target.value)})]}),e.jsxs("div",{className:"scanner-field",children:[e.jsx("label",{children:"End date*"}),e.jsx("input",{className:"scanner-input",type:"date",value:t.end_date,onChange:a=>C("end_date",a.target.value)})]}),e.jsxs("div",{className:"scanner-switch-row",children:[e.jsx("button",{type:"button",className:`scanner-switch ${t.regime_filter_status?"active":""}`,onClick:()=>C("regime_filter_status",!t.regime_filter_status)}),e.jsx("span",{className:"scanner-switch-label",children:"Regime Filter Status"})]}),e.jsxs("div",{className:"scanner-field",children:[e.jsx("label",{children:"Regime Filter*"}),e.jsx("select",{className:"scanner-select",value:t.regime_filter,onChange:a=>C("regime_filter",a.target.value),children:At.map(a=>e.jsx("option",{value:a.value,children:a.label},a.value))})]}),e.jsxs("div",{className:"scanner-field",children:[e.jsx("label",{children:"Regime Filter Action*"}),e.jsx("select",{className:"scanner-select",value:t.regime_filter_action,onChange:a=>C("regime_filter_action",a.target.value),children:Bt.map(a=>e.jsx("option",{value:a.value,children:a.label},a.value))})]}),e.jsxs("div",{className:"scanner-field",children:[e.jsx("label",{children:"Index*"}),e.jsx("select",{className:"scanner-select",value:t.regime_filter_indexes,onChange:a=>C("regime_filter_indexes",a.target.value),children:r.map(a=>e.jsx("option",{value:a.value,children:a.label},a.value))})]}),e.jsxs("div",{className:"scanner-switch-row",children:[e.jsx("button",{type:"button",className:`scanner-switch ${t.uncorrelated_asset_status?"active":""}`,onClick:()=>C("uncorrelated_asset_status",!t.uncorrelated_asset_status)}),e.jsx("span",{className:"scanner-switch-label",children:"Invest in Uncorrelated Asset"})]}),e.jsxs("div",{className:"scanner-field",children:[e.jsx("label",{children:"Asset Type*"}),e.jsx("select",{className:"scanner-select",value:t.uncorrelated_asset_type,onChange:a=>C("uncorrelated_asset_type",a.target.value),children:qt.map(a=>e.jsx("option",{value:a.value,children:a.label},a.value))})]}),e.jsxs("div",{className:"scanner-field",children:[e.jsx("label",{children:"Allocation (%)*"}),e.jsx("input",{className:"scanner-input",value:t.uncorrelated_asset_allocation,onChange:a=>C("uncorrelated_asset_allocation",a.target.value)})]})]})]})})}),s?e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"scanner-col-12",children:[e.jsx("div",{className:"scanner-report-actions",children:e.jsx("button",{type:"button",className:"scanner-report-download",onClick:ft,children:"Download Report"})}),e.jsxs("div",{className:"scanner-metrics-grid",children:[pt.map(a=>{var g,h;return e.jsxs("div",{className:"scanner-metric-card",children:[e.jsxs("div",{className:"scanner-metric-label",children:[e.jsx("span",{className:"scanner-metric-label-icon",children:"₹"}),e.jsx("span",{children:a.label})]}),e.jsx("div",{className:"scanner-metric-value",children:a.key==="max_drawdown"?`${V(Math.abs(Number(B==="local"?(G==null?void 0:G.drawdown_pct)??0:((g=s.metrics)==null?void 0:g.max_drawdown)??(H==null?void 0:H.drawdown_pct)??0)))}${a.suffix||""}`:`${((h=s.metrics)==null?void 0:h[a.key])??"--"}${a.suffix||""}`}),a.key==="max_drawdown"&&(B==="local"?G!=null&&G.date:H!=null&&H.date)?e.jsxs("div",{className:"scanner-metric-note",children:["Date: ",String(B==="local"?G==null?void 0:G.date:H==null?void 0:H.date)]}):null]},a.key)}),e.jsxs("div",{className:"scanner-big-card",children:[e.jsxs("div",{className:"scanner-big-card-head",children:[e.jsx("span",{className:"scanner-big-card-icon",children:"▥"}),e.jsxs("span",{children:["Biggest Winner Stats - ",String(((Ve=s.metrics)==null?void 0:Ve.biggest_winner_stock)??"--")]})]}),e.jsxs("div",{className:"scanner-big-card-stats",children:[e.jsxs("h4",{children:["Buy Price - ",String(((Ue=s.metrics)==null?void 0:Ue.biggest_winner_holding_buy_price)??"--")," | Sell Price ",String(((We=s.metrics)==null?void 0:We.biggest_winner_holding_sell_price)??"--")]}),e.jsxs("h4",{children:[String(((Ye=s.metrics)==null?void 0:Ye.biggest_winner_holding_start_date)??"--")," to ",String(((Ge=s.metrics)==null?void 0:Ge.biggest_winner_holding_end_date)??"--")," (",String(((He=s.metrics)==null?void 0:He.biggest_winner_holding_days)??"--")," days)"]})]})]}),e.jsxs("div",{className:"scanner-big-card",children:[e.jsxs("div",{className:"scanner-big-card-head",children:[e.jsx("span",{className:"scanner-big-card-icon",children:"▥"}),e.jsxs("span",{children:["Biggest Loser Stats - ",String(((Je=s.metrics)==null?void 0:Je.biggest_loser_stock)??"--")]})]}),e.jsxs("div",{className:"scanner-big-card-stats",children:[e.jsxs("h4",{children:["Buy Price - ",String(((Qe=s.metrics)==null?void 0:Qe.biggest_loser_holding_buy_price)??"--")," | Sell Price ",String(((Xe=s.metrics)==null?void 0:Xe.biggest_loser_holding_sell_price)??"--")]}),e.jsxs("h4",{children:[String(((Ke=s.metrics)==null?void 0:Ke.biggest_loser_holding_start_date)??"--")," to ",String(((Ze=s.metrics)==null?void 0:Ze.biggest_loser_holding_end_date)??"--")," (",String(((et=s.metrics)==null?void 0:et.biggest_loser_holding_days)??"--")," days)"]})]})]})]})]}),e.jsx("div",{className:"scanner-col-12",children:e.jsxs("section",{className:"scanner-section",children:[e.jsx("h3",{className:"scanner-section-title",children:"Monthly Breakup (Realized Profit%)"}),e.jsx("div",{className:"scanner-table-wrap",children:e.jsxs("table",{className:"scanner-table",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Year"}),X.map(a=>e.jsx("th",{children:a},a)),e.jsx("th",{children:"Total"})]})}),e.jsx("tbody",{children:Y.years.map(a=>{const g=X.reduce((h,y,m)=>{var k;return h+Number(((k=Y.dataMap[a])==null?void 0:k[m+1])||0)},0);return e.jsxs("tr",{children:[e.jsx("td",{className:"year-cell",children:a}),X.map((h,y)=>{var L,D;const m=ot(Y.dataMap,a,y),k=Number(((L=Y.dataMap[a])==null?void 0:L[y+1])||0),v=(D=Y.detailMap[a])==null?void 0:D[y+1];return e.jsx("td",{className:"scanner-month-cell",children:m?e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:`scanner-month-roi ${k>=0?"positive":"negative"}`,children:[V(k),"%"]}),m&&v?e.jsxs("div",{className:"scanner-month-meta",children:[e.jsxs("div",{children:[e.jsx("span",{children:"CC:"})," ₹",fe(v.cc)]}),e.jsxs("div",{children:[e.jsx("span",{children:"OP:"})," ₹",fe(v.op)]}),e.jsxs("div",{className:v.pnl>=0?"positive":"negative",children:[e.jsx("span",{children:"P:"})," ₹",fe(v.pnl)]})]}):null]}):e.jsx("span",{className:"scanner-month-empty",children:"-"})},`${a}-${h}`)}),e.jsxs("td",{className:g>=0?"positive":"negative",children:[V(g),"%"]})]},a)})})]})})]})}),e.jsx("div",{className:"scanner-col-12",children:e.jsxs("section",{className:"scanner-section scanner-section-chart",children:[e.jsxs("div",{className:"scanner-drawdown-tabs",children:[e.jsx("button",{type:"button",className:`scanner-drawdown-tab ${B==="local"?"active":""}`,onClick:()=>je("local"),children:"Local Compute"}),e.jsx("button",{type:"button",className:`scanner-drawdown-tab ${B==="daily"?"active":""}`,onClick:()=>je("daily"),children:"Daily Compute"})]}),e.jsx(st,{options:Te.options,series:Te.series,type:"area",height:350})]})}),e.jsx("div",{className:"scanner-col-12",children:e.jsxs("section",{className:"scanner-section scanner-section-chart",children:[e.jsxs("div",{className:"scanner-drawdown-tabs",children:[e.jsx("button",{type:"button",className:`scanner-drawdown-tab ${K==="weekly"?"active":""}`,onClick:()=>Ne("weekly"),children:"Weekly Drawdown"}),e.jsx("button",{type:"button",className:`scanner-drawdown-tab ${K==="daily"?"active":""}`,onClick:()=>Ne("daily"),children:"Daily Drawdown"})]}),Se.series.length?e.jsx(st,{options:Se.options,series:Se.series,type:"area",height:250}):e.jsxs("p",{className:"scanner-empty",children:["No ",B==="local"?"local":"backend"," ",K," drawdown data available."]})]})}),Be,B==="daily"?e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"scanner-col-12",children:e.jsxs("section",{className:"scanner-section",children:[e.jsx("h3",{className:"scanner-section-title",children:"Weekly Breakup"}),Object.keys(Pe).length?Object.entries(Pe).map(([a,g])=>e.jsxs("div",{className:"scanner-month-group",children:[e.jsx("div",{className:"scanner-month-header",children:a}),e.jsx("div",{className:"scanner-table-wrap",children:e.jsxs("table",{className:"scanner-weekly-table",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Week"}),e.jsx("th",{children:"Start Date"}),e.jsx("th",{children:"End Date"}),e.jsx("th",{children:"PnL (Rs)"}),e.jsx("th",{children:"ROI (%)"}),e.jsx("th",{children:"Start Value"}),e.jsx("th",{children:"End Value"})]})}),e.jsx("tbody",{children:g.map((h,y)=>{const m=Number(h.pnl_rupee||0),k=Number(h.portfolio_roi||0);return e.jsxs("tr",{children:[e.jsx("td",{children:String(h.week||"--")}),e.jsx("td",{children:String(h.start_date||"--")}),e.jsx("td",{children:String(h.end_date||"--")}),e.jsx("td",{className:m>=0?"positive":"negative",children:M(m)}),e.jsx("td",{className:k>=0?"positive":"negative",children:V(k)}),e.jsx("td",{children:M(h.portfolio_start_value||0)}),e.jsx("td",{children:M(h.portfolio_end_value||0)})]},`${a}-${y}`)})})]})})]},a)):e.jsx("p",{className:"scanner-empty",children:"No weekly breakup data available."})]})}),e.jsx("div",{className:"scanner-col-12",children:e.jsxs("section",{className:"scanner-section",children:[e.jsx("h3",{className:"scanner-section-title",children:"Monthly Final Breakup"}),Object.keys(we).length?Object.entries(we).map(([a,g])=>{const h=g.reduce((m,k)=>m+Number(k.pnl_rupee||0),0),y=g.reduce((m,k)=>m+Number(k.portfolio_roi||0),0);return e.jsxs("div",{className:"scanner-month-group",children:[e.jsx("div",{className:"scanner-month-header",children:a}),e.jsx("div",{className:"scanner-table-wrap",children:e.jsxs("table",{className:"scanner-weekly-table",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Month"}),e.jsx("th",{children:"Start Date"}),e.jsx("th",{children:"End Date"}),e.jsx("th",{children:"PnL (Rs)"}),e.jsx("th",{children:"ROI (%)"}),e.jsx("th",{children:"Start Value"}),e.jsx("th",{children:"End Value"})]})}),e.jsxs("tbody",{children:[g.map((m,k)=>{const v=Number(m.pnl_rupee||0),L=Number(m.portfolio_roi||0);return e.jsxs("tr",{children:[e.jsx("td",{children:m.monthName}),e.jsx("td",{children:String(m.start_date||"--")}),e.jsx("td",{children:String(m.end_date||"--")}),e.jsx("td",{className:v>=0?"positive":"negative",children:M(v)}),e.jsx("td",{className:L>=0?"positive":"negative",children:V(L)}),e.jsx("td",{children:M(m.portfolio_start_value||0)}),e.jsx("td",{children:M(m.portfolio_end_value||0)})]},`${a}-${k}`)}),e.jsxs("tr",{children:[e.jsx("td",{className:"year-cell",children:"Total"}),e.jsx("td",{colSpan:2,children:"-"}),e.jsx("td",{className:h>=0?"positive":"negative",children:M(h)}),e.jsx("td",{className:y>=0?"positive":"negative",children:V(y)}),e.jsx("td",{colSpan:2,children:"-"})]})]})]})})]},a)}):e.jsx("p",{className:"scanner-empty",children:"No monthly final data available."})]})}),e.jsx("div",{className:"scanner-col-12",children:e.jsxs("section",{className:"scanner-section",children:[e.jsx("h3",{className:"scanner-section-title",children:"Year Report"}),e.jsx("div",{className:"scanner-table-wrap",children:e.jsxs("table",{className:"scanner-year-table",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Year"}),e.jsx("th",{children:"Start Date"}),e.jsx("th",{children:"End Date"}),e.jsx("th",{children:"PnL (Rs)"}),e.jsx("th",{children:"ROI (%)"}),e.jsx("th",{children:"Start Value"}),e.jsx("th",{children:"End Value"})]})}),e.jsx("tbody",{children:(s.yearly_final_json||[]).map((a,g)=>{const h=Number(a.pnl_rupee||0),y=Number(a.portfolio_roi||0);return e.jsxs("tr",{children:[e.jsx("td",{className:"year-cell",children:String(a.year||"--")}),e.jsx("td",{children:String(a.start_date||"--")}),e.jsx("td",{children:String(a.end_date||"--")}),e.jsx("td",{className:h>=0?"positive":"negative",children:M(h)}),e.jsx("td",{className:y>=0?"positive":"negative",children:V(y)}),e.jsx("td",{children:M(a.portfolio_start_value||0)}),e.jsx("td",{children:M(a.portfolio_end_value||0)})]},`year-${g}`)})})]})})]})})]}):e.jsx("div",{className:"scanner-col-12",children:e.jsxs("section",{className:"scanner-section",children:[e.jsx("h3",{className:"scanner-section-title",children:"Local Daily Report"}),e.jsx("div",{className:"scanner-table-wrap",children:e.jsxs("table",{className:"scanner-year-table",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Date"}),e.jsx("th",{children:"Portfolio Value"}),e.jsx("th",{children:"Daily PnL (Rs)"}),e.jsx("th",{children:"Daily ROI (%)"}),e.jsx("th",{children:"Index Value"}),e.jsx("th",{children:"Index Daily PnL (Rs)"})]})}),e.jsx("tbody",{children:Le.map((a,g)=>e.jsxs("tr",{children:[e.jsx("td",{children:a.date}),e.jsx("td",{children:M(a.portfolio_value)}),e.jsx("td",{className:a.daily_pnl>=0?"positive":"negative",children:M(a.daily_pnl)}),e.jsx("td",{className:a.daily_roi>=0?"positive":"negative",children:V(a.daily_roi)}),e.jsx("td",{children:M(a.index_value)}),e.jsx("td",{className:a.index_daily_pnl>=0?"positive":"negative",children:M(a.index_daily_pnl)})]},`daily-${g}`))})]})})]})})]}):null,s?null:Be]})]}),e.jsxs(Ft,{isOpen:E,onClose:Ae,className:"m-4 w-full max-w-[560px] overflow-hidden p-0",children:[e.jsxs("div",{className:"border-b border-[#dbeffd] bg-[#eef7ff] px-5 py-4",children:[e.jsx("h4",{className:"m-0 text-base font-bold text-[#111827]",children:"Invest Strategy"}),e.jsxs("p",{className:"m-0 mt-1 text-xs text-[#5f6f82]",children:["Portfolio will be created at prices for ",e.jsx("strong",{className:"text-[#111827]",children:xe()})]})]}),e.jsxs("div",{className:"bg-white px-5 py-5",children:[e.jsxs("div",{className:"mb-4",children:[e.jsx("label",{className:"mb-1.5 block text-[13px] font-semibold text-[#1f2937]",children:"Portfolio"}),e.jsx("select",{className:"w-full rounded-[7px] border border-[#90d1ff] bg-white px-3 py-2.5 text-sm text-[#111827] outline-none",value:O,onChange:a=>re(a.target.value),disabled:De,children:J.map(a=>e.jsx("option",{value:a.value,children:a.label},a.value))}),De?e.jsx("p",{className:"mt-1.5 text-xs text-[#64748b]",children:"Loading portfolios..."}):null]}),O==="__new__"?e.jsxs("div",{className:"mb-4",children:[e.jsx("label",{className:"mb-1.5 block text-[13px] font-semibold text-[#1f2937]",children:"Portfolio Name"}),e.jsx("input",{type:"text",className:"w-full rounded-[7px] border border-[#90d1ff] bg-white px-3 py-2.5 text-sm text-[#111827] outline-none",placeholder:"Enter portfolio name",value:ye,onChange:a=>ve(a.target.value),disabled:P,autoFocus:!0})]}):null,e.jsxs("div",{className:"mb-4",children:[e.jsx("label",{className:"mb-1.5 block text-[13px] font-semibold text-[#1f2937]",children:"Strategy Name"}),e.jsx("input",{type:"text",className:"w-full rounded-[7px] border border-[#90d1ff] bg-white px-3 py-2.5 text-sm text-[#111827] outline-none",placeholder:"Enter strategy name",value:U,onChange:a=>ae(a.target.value),onKeyDown:a=>{a.key==="Enter"&&qe()},disabled:P,autoFocus:O!=="__new__"})]}),e.jsxs("div",{className:"mb-1",children:[e.jsx("label",{className:"mb-1.5 block text-[13px] font-semibold text-[#1f2937]",children:"Broker"}),e.jsx("select",{className:"w-full rounded-[7px] border border-[#90d1ff] bg-white px-3 py-2.5 text-sm text-[#111827] outline-none",value:ie,onChange:a=>ke(a.target.value),disabled:Me,children:de.map(a=>e.jsx("option",{value:a.value,children:a.label},a.value))}),Me?e.jsx("p",{className:"mt-1.5 text-xs text-[#64748b]",children:"Loading broker list..."}):null]}),e.jsxs("div",{className:"mt-5 flex justify-end gap-3",children:[e.jsx("button",{type:"button",className:"min-w-[82px] rounded border border-[#d5d5d5] px-5 py-2.5 text-sm font-medium text-[#555]",onClick:Ae,disabled:P,children:"Cancel"}),e.jsx("button",{type:"button",className:"min-w-[120px] rounded bg-[#4db0ca] px-5 py-2.5 text-sm font-semibold text-white disabled:cursor-not-allowed disabled:opacity-70",onClick:qe,disabled:P||!(O==="__new__"?ye.trim():String(((tt=J.find(a=>a.value===O))==null?void 0:tt.label)||"").trim())||!U.trim()||!ie,children:P?"Investing...":"Invest Now"})]})]})]})]})}export{va as default};
