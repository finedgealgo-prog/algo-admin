import{r as j,j as e,P as ee}from"./index-D-gWZDeH.js";import{C as G}from"./react-apexcharts.min-DP4VV9U6.js";import{P as te}from"./PageBreadCrumb-D0QDQGSV.js";import{S as ae}from"./StatusToast-D3KdFOLo.js";import"./index-Chjiymov.js";const Q="https://scanner.finedgealgo.com/scanner".replace(/\/+$/,""),V=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],Z=[{key:"invested_capital",label:"Investment Capital"},{key:"final_capital",label:"Current Capital"},{key:"total_return",label:"Total Return",suffix:"%"},{key:"win_rate_percent",label:"Win Rate(%)",suffix:"%"},{key:"avg_winners_roi_percent",label:"Avg. Winners ROI(%)",suffix:"%"},{key:"avg_losers_roi_percent",label:"Avg. Losers ROI(%)",suffix:"%"},{key:"max_drawdown",label:"Max. DD(%)",suffix:"%"},{key:"gagr",label:"CAGR(%)",suffix:"%"},{key:"avg_trades_per_year",label:"Avg. trade per year"},{key:"risk_reward",label:"Risk To Reward"},{key:"biggest_winner_roi_percent",label:"Biggest Winner ROI(%)",suffix:"%"},{key:"biggest_loser_roi_percent",label:"Biggest Loser ROI(%)",suffix:"%"}];function se(t,s){return t.replace(/(^|[{}])\s*([^@{}][^{]*)\{/g,(a,i,r)=>{const p=r.split(",").map(o=>o.trim()).filter(Boolean).map(o=>o.startsWith(s)?o:`${s} ${o}`).join(", ");return p?`${i}
  ${p} {`:a})}function z(t){const s=Number(t);return(Number.isFinite(s)?s:0).toLocaleString("en-IN",{maximumFractionDigits:2,minimumFractionDigits:2})}function B(t){const s=Number(t);return Number.isFinite(s)?s.toFixed(2):"0.00"}function U(t){const s=Number(t);return(Number.isFinite(s)?Math.round(s):0).toLocaleString("en-IN")}function ne(t,s){var k;const a=t||[],i=1e3,r=a.map(d=>Number(d.portfolio||0)),p=r.find(d=>d>0)??Math.max(s,1),o=a.map(d=>Number(d.index||0)),m=o.find(d=>d>0)??1,h=(k=a[0])!=null&&k.date?new Date(`${a[0].date}T00:00:00`):null,g=d=>{if(!d||Number.isNaN(d.getTime()))return"--";const u=d.getDate(),S=u%10===1&&u%100!==11?"st":u%10===2&&u%100!==12?"nd":u%10===3&&u%100!==13?"rd":"th";return`${u}${S} ${d.toLocaleString("en-US",{month:"short"})} ${d.getFullYear()}`},M=r.map(d=>parseFloat(d.toFixed(2))),y=o.map(d=>parseFloat((d/m*s).toFixed(2))),_=r.map(d=>parseFloat((d/p*i).toFixed(2))),v=o.map(d=>parseFloat((d/m*i).toFixed(2))),N=a.map((d,u)=>({x:d.date,y:_[u]})),I=a.map((d,u)=>({x:d.date,y:v[u]})),D=[..._,...v].filter(d=>Number.isFinite(d)&&d>0),L=D.length?Math.min(...D):i,E=D.length?Math.max(...D):i,c={chart:{height:350,type:"area",background:"transparent",toolbar:{show:!0,tools:{download:!0,zoom:!0,pan:!0,reset:!0}},zoom:{enabled:!0},animations:{enabled:!1}},dataLabels:{enabled:!1},stroke:{curve:"smooth",width:[2,2]},colors:["#2b67c7","#8b5cf6"],series:[{name:"Portfolio",data:N},{name:"Nifty 500",data:I}],xaxis:{type:"datetime",labels:{datetimeUTC:!1,style:{colors:"#555",fontSize:"11px"}},axisBorder:{show:!1},axisTicks:{show:!1}},yaxis:{labels:{formatter:d=>d>=1e3?`${(d/1e3).toFixed(d>=2e3?0:1)}k`:Number(d).toFixed(0),style:{colors:"#555",fontSize:"11px"}},min:Math.floor(L*.97),max:Math.ceil(E*1.05)},annotations:{yaxis:[{y:i,borderColor:"#888",borderWidth:1.5,strokeDashArray:5,label:{text:`Base NAV ${i}`,borderColor:"#888",position:"left",offsetX:12,style:{color:"#555",fontSize:"11px",background:"#f5f5f5"}}}]},fill:{type:"gradient",gradient:{type:"vertical",shadeIntensity:0,colorStops:[[{offset:0,color:"#2ecc71",opacity:.4},{offset:100,color:"#2ecc71",opacity:.02}],[{offset:0,color:"#f39c12",opacity:.25},{offset:100,color:"#f39c12",opacity:.02}]]}},grid:{borderColor:"#e9ecef",strokeDashArray:4},legend:{position:"top",horizontalAlign:"right",fontSize:"13px",labels:{colors:"#333"},markers:{size:8}},title:{text:"Portfolio performance",align:"left",style:{color:"#2a2a2a",fontWeight:"bold",fontSize:"16px"}},tooltip:{shared:!0,intersect:!1,x:{format:"dd MMM yyyy"},custom:({dataPointIndex:d})=>{const u=_[d]??i,S=v[d]??i,$=M[d]??s,F=y[d]??s,P=(u/i-1)*100,n=(S/i-1)*100,l=u-i,x=S-i;return`
          <div style="min-width:230px;padding:14px 16px;background:#fff;border:1px solid #e5e7eb;border-radius:14px;box-shadow:0 12px 32px rgba(15,23,42,0.12);">
            <div style="display:flex;align-items:center;gap:10px;color:#1f2937;font-size:13px;font-weight:700;">
              <span style="display:inline-block;width:12px;height:12px;background:#2b67c7;border-radius:2px;"></span>
              Combined NAV: ${u.toFixed(2)}
            </div>
            <div style="display:flex;align-items:center;gap:10px;color:#1f2937;font-size:13px;font-weight:700;margin-top:10px;">
              <span style="display:inline-block;width:12px;height:12px;background:#8b5cf6;border-radius:2px;"></span>
              Nifty 500: ${S.toFixed(2)}
            </div>
            <div style="height:1px;background:#e5e7eb;margin:14px 0;"></div>
            <div style="color:#4b5563;font-size:12px;margin-bottom:10px;">Since ${g(h)}</div>
            <div style="color:#4b5563;font-size:12px;margin-bottom:6px;">
              Portfolio Current Capital: <span style="color:#111827;font-weight:700;">₹${$.toLocaleString("en-IN",{maximumFractionDigits:2,minimumFractionDigits:2})}</span>
            </div>
            <div style="color:#4b5563;font-size:12px;margin-bottom:10px;">
              Nifty 500 Current Capital: <span style="color:#111827;font-weight:700;">₹${F.toLocaleString("en-IN",{maximumFractionDigits:2,minimumFractionDigits:2})}</span>
            </div>
            <div style="color:#4b5563;font-size:12px;margin-bottom:6px;">
              Portfolio: <span style="color:${P>=0?"#10b981":"#ef4444"};font-weight:700;">${P.toFixed(2)}%</span>
            </div>
            <div style="color:#4b5563;font-size:12px;">
              Nifty 500: <span style="color:${n>=0?"#10b981":"#ef4444"};font-weight:700;">${n.toFixed(2)}%</span>
            </div>
            <div style="height:1px;background:#e5e7eb;margin:14px 0;"></div>
            <div style="color:#4b5563;font-size:12px;margin-bottom:6px;">
              Portfolio Cumulative PnL: <span style="color:${l>=0?"#10b981":"#ef4444"};font-weight:700;">₹${l.toLocaleString("en-IN",{maximumFractionDigits:2,minimumFractionDigits:2})}</span>
            </div>
            <div style="color:#4b5563;font-size:12px;">
              Nifty 500 Cumulative PnL: <span style="color:${x>=0?"#10b981":"#ef4444"};font-weight:700;">₹${x.toLocaleString("en-IN",{maximumFractionDigits:2,minimumFractionDigits:2})}</span>
            </div>
          </div>
        `}}};return{options:c,series:c.series||[]}}function re(t){let s=0;return t.map(a=>{s=Math.max(s,Number(a.portfolio||0));const i=Number(a.portfolio||0),r=s>0?(i-s)/s*100:0;return{date:a.date,drawdown_pct:Number(r.toFixed(4)),peak_value:s,bottom_value:i,drawdown_rupee:Number((i-s).toFixed(2))}})}function ie(t){const s=new Date(`${t}T00:00:00`);if(Number.isNaN(s.getTime()))return t;const a=new Date(s),i=a.getDay(),r=i===0?-6:1-i;return a.setDate(a.getDate()+r),a.toISOString().slice(0,10)}function X(t){const s=new Map;return t.forEach(a=>{const i=ie(a.date),r=s.get(i);(!r||Number(a.drawdown_pct||0)<Number(r.drawdown_pct||0))&&s.set(i,{...a,date:i})}),Array.from(s.values()).sort((a,i)=>a.date.localeCompare(i.date))}function le(t){const s={};return(t||[]).forEach(a=>{const i=String(a.end_date||""),r=i?new Date(`${i}T00:00:00`):null;if(!r||Number.isNaN(r.getTime()))return;const p=`${V[r.getMonth()]} ${r.getFullYear()}`;s[p]||(s[p]=[]),s[p].push(a)}),s}function oe(t,s){const a=t||[],i=a.map(o=>({x:o.date,y:parseFloat(Number(o.drawdown_pct).toFixed(4))})),r=a.reduce((o,m)=>Math.min(o,Number(m.drawdown_pct)),0),p={chart:{height:250,type:"area",background:"transparent",toolbar:{show:!0,tools:{download:!0,zoom:!0,pan:!0,reset:!0}},zoom:{enabled:!0},animations:{enabled:!1}},dataLabels:{enabled:!1},stroke:{curve:"smooth",width:2},colors:["#e74c3c"],series:[{name:"Drawdown (%)",data:i}],xaxis:{type:"datetime",labels:{datetimeUTC:!1,style:{colors:"#555",fontSize:"11px"}},axisBorder:{show:!1},axisTicks:{show:!1}},yaxis:{labels:{formatter:o=>`${Number(o).toFixed(2)}%`,style:{colors:"#555",fontSize:"11px"}},min:r*1.05,max:0},tooltip:{shared:!1,x:{format:"dd MMM yyyy"},y:{formatter:o=>`${Number(o).toFixed(2)}%`}},fill:{type:"gradient",gradient:{shadeIntensity:1,opacityFrom:.35,opacityTo:.08,stops:[0,90,100]}},title:{text:s,align:"left",style:{color:"#b42318",fontWeight:"bold",fontSize:"16px"}}};return{options:p,series:p.series||[]}}function ce(t){const s=Number(t.form.starting_capital||0),a=new Map;t.monthlyBreakupRows.forEach(p=>a.set(p.year,p));const i=new Map;return t.monthlyFinalRows.forEach(p=>{var v;const o=String(p.end_date||""),m=String(p.month||(o?o.slice(0,7):"")).trim();if(!m||!/^\d{4}-\d{2}$/.test(m))return;const[h,g]=m.split("-"),M=Number(g);i.has(h)||i.set(h,new Map);const y=Number(p.portfolio_start_value||0),_=Number(p.pnl_rupee||p.portfolio_return||0);(v=i.get(h))==null||v.set(M,{cc:y,op:y-s,pnl:_})}),Array.from(a.keys()).sort((p,o)=>Number(p)-Number(o)).map(p=>{const o=a.get(p),m=Array.from({length:12},(M,y)=>{var I;const _=y+1,v=o==null?void 0:o.values[y],N=(I=i.get(p))==null?void 0:I.get(_);return!v||v.positive==null?{roi:"-",positive:null}:{roi:v.value,positive:v.positive,cc:N==null?void 0:N.cc,op:N==null?void 0:N.op,pnl:N==null?void 0:N.pnl,breakdown:v.breakdown}}),h=(o==null?void 0:o.total)||"-",g=Number(String(h).replace("%","")||0);return{year:p,cells:m,total:h,totalPositive:h==="-"?null:g>=0}})}async function de(t){try{const s=new FormData;s.append("file",t);const a=await fetch(`${Q}/parse_file_input`,{method:"POST",body:s});if(!a.ok)return{inputs:null,error:await a.json().then(o=>(o==null?void 0:o.detail)||"").catch(()=>"")||`Server error ${a.status}`};const i=await a.json(),r=(i==null?void 0:i.inputs)??{};return{inputs:{strategy_name:String(r.strategy_name??""),starting_capital:String(r.starting_capital??""),indexes:Array.isArray(r.indexes)?r.indexes.map(String):[],entry_rank:String(r.entry_rank??""),exit_rank:String(r.exit_rank??""),stock_price_min:r.stock_price_min!=null?String(r.stock_price_min):"0",stock_price_max:r.stock_price_max!=null?String(r.stock_price_max):"0",rebalance_frequency:String(r.rebalance_frequency??""),rebalance_date:String(r.rebalance_date??""),alternative_rebalance_day:String(r.alternative_rebalance_day??""),start_date:String(r.start_date??""),end_date:String(r.end_date??""),regime_filter:String(r.regime_filter??""),regime_filter_action:String(r.regime_filter_action??""),regime_filter_indexes:String(r.regime_filter_indexes??""),uncorrelated_asset_type:String(r.uncorrelated_asset_type??""),uncorrelated_asset_allocation:String(r.uncorrelated_asset_allocation??""),position_sizing:String(r.position_sizing??""),formula:String(r.formula??"")},error:null}}catch{return{inputs:null,error:"Failed to read file."}}}function pe(t,s,a){const i={},r={},p=[],o={};return(s||[]).forEach(m=>{const h=String(m.end_date||""),g=h?new Date(`${h}T00:00:00`):null;if(!g||Number.isNaN(g.getTime()))return;const M=String(g.getFullYear()),y=String(g.getMonth()+1).padStart(2,"0");o[`${M}-${y}`]=m}),(t||[]).forEach(m=>{const h=String(m.month||"").split("-");if(h.length!==2)return;const g=h[0],M=Number(h[1]);if(i[g]||(i[g]={},r[g]={},p.push(g)),i[g][M]=Number(m.Monthly_ROI_Pct||0),m.Start_Value!=null||m.End_Value!=null){const y=Number(m.Start_Value??0),_=Number(m.End_Value??0);r[g][M]={cc:y,op:y-a,pnl:_-y}}else if(m.Capital_Base!=null)r[g][M]={cc:Number(m.Capital_Base??0),op:Number(m.CumBeforeMonth??0),pnl:Number(m.MonthPnL??0)};else{const y=String(M).padStart(2,"0"),_=o[`${g}-${y}`];if(_){const v=Number(_.portfolio_start_value??0),N=Number(_.pnl_rupee??0);r[g][M]={cc:v,op:v-a,pnl:N}}}}),p.sort((m,h)=>Number(m)-Number(h)),{dataMap:i,detailMap:r,years:p}}function me(t,s=t.strategyName){var i;const a=new Map;return(i=t.monthly_roi)!=null&&i.length?(t.monthly_roi.forEach(r=>{var g;const[p,o]=String(r.month||"").split("-"),m=Number(o),h=Number(r.Monthly_ROI_Pct);!p||!Number.isFinite(m)||!Number.isFinite(h)||(a.has(p)||a.set(p,new Map),(g=a.get(p))==null||g.set(m,{name:s,value:`${h.toFixed(2)}%`,positive:h>=0}))}),a):(t.monthlyBreakupRows.forEach(r=>{const p=new Map;r.values.forEach((o,m)=>{const h=Number(String(o.value||"").replace("%","").trim());!Number.isFinite(h)||o.value==="-"||p.set(m+1,{name:s,value:String(o.value),positive:h>=0})}),p.size&&a.set(r.year,p)}),a)}function ue(t){const s=new Map;return t.forEach((a,i)=>{me(a,`Strategy #${i+1}`).forEach((p,o)=>{s.has(o)||s.set(o,new Map),p.forEach((m,h)=>{var M,y;const g=((M=s.get(o))==null?void 0:M.get(h))||[];(y=s.get(o))==null||y.set(h,[...g,m])})})}),s}function J(t,s){return t!=null&&t.length?t.map(a=>{const i=s.findIndex(r=>r.strategyName===a.name);return{...a,name:i>=0?`Strategy #${i+1}`:a.name}}):t}function A(t,s){if(!(s!=null&&s.length))return null;const a=t.currentTarget.getBoundingClientRect();return{x:Math.min(Math.max(a.left+a.width/2,120),window.innerWidth-120),y:a.bottom,breakdown:s}}function he(t,s=""){if(t==null||t==="")return"--";const a=String(t);return!s||a.endsWith(s)?a:`${a}${s}`}function xe(t){const s=Number(t.replace(/[,%₹]/g,"").trim());return Number.isFinite(s)?s>=0:!0}function ge(t){const s=new Map;return Z.forEach(a=>{const i=t.map((r,p)=>{const o=he(r.metrics[a.key],a.suffix);return{name:`Strategy #${p+1}`,value:o,positive:xe(o)}});i.length&&s.set(a.key,i)}),s}function H(t,s){const a=s==="winner"?"biggest_winner":"biggest_loser";return t.map((i,r)=>{const p=String(i.metrics[`${a}_stock`]??"--"),o=String(i.metrics[`${a}_holding_buy_price`]??"--"),m=String(i.metrics[`${a}_holding_sell_price`]??"--"),h=String(i.metrics[`${a}_holding_start_date`]??"--"),g=String(i.metrics[`${a}_holding_end_date`]??"--"),M=String(i.metrics[`${a}_holding_days`]??"--");return{name:`Strategy #${r+1}`,value:`${p} | Buy ${o} | Sell ${m} | ${h} to ${g} (${M} days)`,positive:s==="winner"}})}function K({report:t,siblingReports:s=[]}){const[a,i]=j.useState("local"),[r,p]=j.useState("weekly"),[o,m]=j.useState(null),h=Number(t.form.starting_capital||0),g=j.useMemo(()=>ue(s),[s]),M=j.useMemo(()=>ge(s),[s]),y=j.useMemo(()=>H(s,"winner"),[s]),_=j.useMemo(()=>H(s,"loser"),[s]),v=j.useMemo(()=>t.equity_curve_json&&t.equity_curve_json.length>0?t.equity_curve_json:t.localDailyRows.map(n=>({date:n.date,portfolio:n.portfolio_value,index:n.index_value})),[t.equity_curve_json,t.localDailyRows]),N=j.useMemo(()=>t.monthly_roi&&t.monthly_roi.length>0?pe(t.monthly_roi,t.monthlyFinalRows,h):null,[t.monthly_roi,t.monthlyFinalRows,h]),I=j.useMemo(()=>{const n=new Map;return t.monthlyBreakupRows.forEach(l=>{const x=new Map;l.values.forEach((b,f)=>{const w=J(b.breakdown,s);w!=null&&w.length&&x.set(f+1,w)}),x.size&&n.set(l.year,x)}),N?N.years.map(l=>{const x=Array.from({length:12},(f,w)=>{var O,W,q,Y;const C=w+1,T=(O=N.dataMap[l])==null?void 0:O[C],R=(W=N.detailMap[l])==null?void 0:W[C];return T==null?{roi:"-",positive:null}:{roi:`${Number(T).toFixed(2)}%`,positive:T>=0,cc:R==null?void 0:R.cc,op:R==null?void 0:R.op,pnl:R==null?void 0:R.pnl,breakdown:((q=n.get(l))==null?void 0:q.get(C))||((Y=g.get(l))==null?void 0:Y.get(C))}}),b=x.reduce((f,w)=>{const C=Number(String(w.roi).replace("%",""));return f+(Number.isFinite(C)&&w.roi!=="-"?C:0)},0);return{year:l,cells:x,total:`${b.toFixed(2)}%`,totalPositive:b>=0}}):ce(t).map(l=>({...l,cells:l.cells.map((x,b)=>{var f;return{...x,breakdown:J(x.breakdown,s)||((f=g.get(l.year))==null?void 0:f.get(b+1))}})}))},[g,N,t,s]),D=j.useMemo(()=>re(v),[v]),L=j.useMemo(()=>X(D),[D]),E=t.dailyDrawdownRows,c=j.useMemo(()=>X(t.dailyDrawdownRows),[t.dailyDrawdownRows]),k=a==="local"?r==="daily"?D:L:r==="daily"?E:c,d=j.useMemo(()=>oe(k,`${a==="local"?"Local":"Backend"} ${r==="daily"?"Daily":"Weekly"} Drawdown Curve`),[a,k,r]),u=j.useMemo(()=>ne(v,h),[v,h]),S=j.useMemo(()=>D.reduce((n,l)=>!n||l.drawdown_pct<n.drawdown_pct?l:n,null),[D]),$=j.useMemo(()=>E.reduce((n,l)=>!n||l.drawdown_pct<n.drawdown_pct?l:n,null),[E]),F=j.useMemo(()=>le(t.weeklyRows),[t.weeklyRows]),P=j.useMemo(()=>{const n={};return t.monthlyFinalRows.forEach(l=>{const x=String(l.end_date||""),b=new Date(`${x}T00:00:00`);if(Number.isNaN(b.getTime()))return;const f=String(b.getFullYear());n[f]||(n[f]=[]),n[f].push({...l,monthName:V[b.getMonth()],monthIndex:b.getMonth()})}),Object.keys(n).forEach(l=>n[l].sort((x,b)=>x.monthIndex-b.monthIndex)),n},[t.monthlyFinalRows]);return e.jsxs("section",{className:"multi-report-card",onMouseLeave:()=>m(null),children:[o&&e.jsx("div",{className:"breakup-tooltip-fixed",style:{top:o.y+12,left:o.x},children:o.breakdown.map((n,l)=>e.jsxs("div",{className:"breakup-tooltip-row",children:[e.jsx("span",{className:"breakup-tooltip-name",children:n.name}),e.jsx("span",{className:n.positive?"positive":"negative",children:n.value})]},l))}),e.jsxs("div",{className:"multi-report-head",children:[e.jsxs("div",{children:[e.jsx("h2",{children:t.strategyName}),e.jsx("p",{children:t.fileName})]}),e.jsx("span",{className:"multi-report-badge",children:t.form.indexes.join(", ")||"Uploaded Strategy"})]}),e.jsxs("div",{className:"scanner-metrics-grid",children:[Z.map(n=>{const l=M.get(n.key);return e.jsxs("div",{className:"scanner-metric-card",children:[e.jsxs("div",{className:"scanner-metric-label",children:[e.jsx("span",{className:"scanner-metric-label-icon",children:"₹"}),e.jsx("span",{children:n.label})]}),e.jsx("div",{className:"scanner-metric-value",children:e.jsx("span",{className:l!=null&&l.length?"scanner-metric-value-text has-breakdown":"scanner-metric-value-text",onMouseEnter:l!=null&&l.length?x=>{m(A(x,l))}:void 0,onMouseLeave:l!=null&&l.length?()=>m(null):void 0,children:n.key==="max_drawdown"?`${B(Math.abs(Number(a==="local"?(S==null?void 0:S.drawdown_pct)??0:t.metrics.max_drawdown??($==null?void 0:$.drawdown_pct)??0)))}${n.suffix||""}`:`${t.metrics[n.key]??"--"}${n.suffix||""}`})}),n.key==="max_drawdown"&&(a==="local"?S!=null&&S.date:$!=null&&$.date)?e.jsxs("div",{className:"scanner-metric-note",children:["Date: ",String(a==="local"?S==null?void 0:S.date:$==null?void 0:$.date)]}):null]},n.key)}),e.jsxs("div",{className:`scanner-big-card${y.length?" has-breakdown":""}`,onMouseEnter:y.length?n=>{m(A(n,y))}:void 0,onMouseLeave:y.length?()=>m(null):void 0,children:[e.jsxs("div",{className:"scanner-big-card-head",children:[e.jsx("span",{className:"scanner-big-card-icon",children:"▥"}),e.jsxs("span",{children:["Biggest Winner Stats - ",String(t.metrics.biggest_winner_stock??"--")]})]}),e.jsxs("div",{className:"scanner-big-card-stats",children:[e.jsxs("h4",{children:["Buy Price - ",String(t.metrics.biggest_winner_holding_buy_price??"--")," | Sell Price ",String(t.metrics.biggest_winner_holding_sell_price??"--")]}),e.jsxs("h4",{children:[String(t.metrics.biggest_winner_holding_start_date??"--")," to ",String(t.metrics.biggest_winner_holding_end_date??"--")," (",String(t.metrics.biggest_winner_holding_days??"--")," days)"]})]})]}),e.jsxs("div",{className:`scanner-big-card${_.length?" has-breakdown":""}`,onMouseEnter:_.length?n=>{m(A(n,_))}:void 0,onMouseLeave:_.length?()=>m(null):void 0,children:[e.jsxs("div",{className:"scanner-big-card-head",children:[e.jsx("span",{className:"scanner-big-card-icon",children:"▥"}),e.jsxs("span",{children:["Biggest Loser Stats - ",String(t.metrics.biggest_loser_stock??"--")]})]}),e.jsxs("div",{className:"scanner-big-card-stats",children:[e.jsxs("h4",{children:["Buy Price - ",String(t.metrics.biggest_loser_holding_buy_price??"--")," | Sell Price ",String(t.metrics.biggest_loser_holding_sell_price??"--")]}),e.jsxs("h4",{children:[String(t.metrics.biggest_loser_holding_start_date??"--")," to ",String(t.metrics.biggest_loser_holding_end_date??"--")," (",String(t.metrics.biggest_loser_holding_days??"--")," days)"]})]})]})]}),e.jsxs("section",{className:"scanner-section",children:[e.jsx("h3",{className:"scanner-section-title",children:"Monthly Breakup (Realized Profit%)"}),e.jsx("div",{className:"scanner-table-wrap",children:e.jsxs("table",{className:"scanner-table",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Year"}),V.map(n=>e.jsx("th",{children:n},n)),e.jsx("th",{children:"Total"})]})}),e.jsx("tbody",{children:I.map(n=>e.jsxs("tr",{children:[e.jsx("td",{className:"year-cell",children:n.year}),n.cells.map((l,x)=>{var b,f,w;return e.jsx("td",{className:`scanner-breakup-cell${(b=l.breakdown)!=null&&b.length?" has-breakdown":""}`,children:l.roi==="-"?e.jsx("span",{className:"scanner-breakup-empty",children:"-"}):e.jsxs(e.Fragment,{children:[e.jsx("span",{className:`scanner-breakup-hover ${l.positive==null?"scanner-breakup-roi":l.positive?"positive scanner-breakup-roi":"negative scanner-breakup-roi"}`,onMouseEnter:(f=l.breakdown)!=null&&f.length?C=>{m(A(C,l.breakdown))}:void 0,onMouseLeave:(w=l.breakdown)!=null&&w.length?()=>m(null):void 0,children:l.roi}),l.cc!=null?e.jsxs("div",{className:"scanner-breakup-meta",children:[e.jsx("span",{children:"CC:"})," ₹",U(l.cc)]}):null,l.op!=null?e.jsxs("div",{className:"scanner-breakup-meta",children:[e.jsx("span",{children:"OP:"})," ₹",U(l.op)]}):null,l.pnl!=null?e.jsxs("div",{className:`scanner-breakup-meta ${l.pnl>=0?"positive":"negative"}`,children:[e.jsx("span",{children:"P:"})," ₹",U(l.pnl)]}):null]})},`${n.year}-${x}`)}),e.jsx("td",{className:n.totalPositive==null?"":n.totalPositive?"positive":"negative",children:n.total})]},n.year))})]})})]}),e.jsxs("section",{className:"scanner-section scanner-section-chart",children:[e.jsxs("div",{className:"scanner-drawdown-tabs",children:[e.jsx("button",{type:"button",className:`scanner-drawdown-tab ${a==="local"?"active":""}`,onClick:()=>i("local"),children:"Local Compute"}),e.jsx("button",{type:"button",className:`scanner-drawdown-tab ${a==="daily"?"active":""}`,onClick:()=>i("daily"),children:"Daily Compute"})]}),e.jsx(G,{options:u.options,series:u.series,type:"area",height:350})]}),e.jsxs("section",{className:"scanner-section scanner-section-chart",children:[e.jsxs("div",{className:"scanner-drawdown-tabs",children:[e.jsx("button",{type:"button",className:`scanner-drawdown-tab ${r==="weekly"?"active":""}`,onClick:()=>p("weekly"),children:"Weekly Drawdown"}),e.jsx("button",{type:"button",className:`scanner-drawdown-tab ${r==="daily"?"active":""}`,onClick:()=>p("daily"),children:"Daily Drawdown"})]}),d.series.length?e.jsx(G,{options:d.options,series:d.series,type:"area",height:250}):e.jsx("p",{className:"scanner-empty",children:"No drawdown data available."})]}),a==="daily"?e.jsxs(e.Fragment,{children:[e.jsxs("section",{className:"scanner-section",children:[e.jsx("h3",{className:"scanner-section-title",children:"Weekly Breakup"}),Object.keys(F).length?Object.entries(F).map(([n,l])=>e.jsxs("div",{className:"scanner-month-group",children:[e.jsx("div",{className:"scanner-month-header",children:n}),e.jsx("div",{className:"scanner-table-wrap",children:e.jsxs("table",{className:"scanner-weekly-table",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Week"}),e.jsx("th",{children:"Start Date"}),e.jsx("th",{children:"End Date"}),e.jsx("th",{children:"PnL (Rs)"}),e.jsx("th",{children:"ROI (%)"}),e.jsx("th",{children:"Start Value"}),e.jsx("th",{children:"End Value"})]})}),e.jsx("tbody",{children:l.map((x,b)=>{const f=Number(x.pnl_rupee||0),w=Number(x.portfolio_roi||0);return e.jsxs("tr",{children:[e.jsx("td",{children:String(x.week||"--")}),e.jsx("td",{children:String(x.start_date||"--")}),e.jsx("td",{children:String(x.end_date||"--")}),e.jsx("td",{className:f>=0?"positive":"negative",children:z(f)}),e.jsx("td",{className:w>=0?"positive":"negative",children:B(w)}),e.jsx("td",{children:z(x.portfolio_start_value||0)}),e.jsx("td",{children:z(x.portfolio_end_value||0)})]},`${n}-${b}`)})})]})})]},n)):e.jsx("p",{className:"scanner-empty",children:"No weekly breakup data available."})]}),e.jsxs("section",{className:"scanner-section",children:[e.jsx("h3",{className:"scanner-section-title",children:"Monthly Final Breakup"}),Object.entries(P).map(([n,l])=>{const x=l.reduce((f,w)=>f+Number(w.pnl_rupee||0),0),b=l.reduce((f,w)=>f+Number(w.portfolio_roi||0),0);return e.jsxs("div",{className:"scanner-month-group",children:[e.jsx("div",{className:"scanner-month-header",children:n}),e.jsx("div",{className:"scanner-table-wrap",children:e.jsxs("table",{className:"scanner-weekly-table",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Month"}),e.jsx("th",{children:"Start Date"}),e.jsx("th",{children:"End Date"}),e.jsx("th",{children:"PnL (Rs)"}),e.jsx("th",{children:"ROI (%)"}),e.jsx("th",{children:"Start Value"}),e.jsx("th",{children:"End Value"})]})}),e.jsxs("tbody",{children:[l.map((f,w)=>{const C=Number(f.pnl_rupee||0),T=Number(f.portfolio_roi||0);return e.jsxs("tr",{children:[e.jsx("td",{children:f.monthName}),e.jsx("td",{children:String(f.start_date||"--")}),e.jsx("td",{children:String(f.end_date||"--")}),e.jsx("td",{className:C>=0?"positive":"negative",children:z(C)}),e.jsx("td",{className:T>=0?"positive":"negative",children:B(T)}),e.jsx("td",{children:z(f.portfolio_start_value||0)}),e.jsx("td",{children:z(f.portfolio_end_value||0)})]},`${n}-${w}`)}),e.jsxs("tr",{children:[e.jsx("td",{className:"year-cell",children:"Total"}),e.jsx("td",{colSpan:2,children:"-"}),e.jsx("td",{className:x>=0?"positive":"negative",children:z(x)}),e.jsx("td",{className:b>=0?"positive":"negative",children:B(b)}),e.jsx("td",{colSpan:2,children:"-"})]})]})]})})]},n)})]}),e.jsxs("section",{className:"scanner-section",children:[e.jsx("h3",{className:"scanner-section-title",children:"Year Report"}),e.jsx("div",{className:"scanner-table-wrap",children:e.jsxs("table",{className:"scanner-year-table",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Year"}),e.jsx("th",{children:"Start Date"}),e.jsx("th",{children:"End Date"}),e.jsx("th",{children:"PnL (Rs)"}),e.jsx("th",{children:"ROI (%)"}),e.jsx("th",{children:"Start Value"}),e.jsx("th",{children:"End Value"})]})}),e.jsx("tbody",{children:t.yearlyRows.map((n,l)=>{const x=Number(n.pnl_rupee||0),b=Number(n.portfolio_roi||0);return e.jsxs("tr",{children:[e.jsx("td",{className:"year-cell",children:String(n.year||n.Year||"--")}),e.jsx("td",{children:String(n.start_date||"--")}),e.jsx("td",{children:String(n.end_date||"--")}),e.jsx("td",{className:x>=0?"positive":"negative",children:z(x)}),e.jsx("td",{className:b>=0?"positive":"negative",children:B(b)}),e.jsx("td",{children:z(n.portfolio_start_value||0)}),e.jsx("td",{children:z(n.portfolio_end_value||0)})]},`year-${l}`)})})]})})]})]}):e.jsxs("section",{className:"scanner-section",children:[e.jsx("h3",{className:"scanner-section-title",children:"Local Daily Report"}),e.jsx("div",{className:"scanner-table-wrap",children:e.jsxs("table",{className:"scanner-year-table",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Date"}),e.jsx("th",{children:"Portfolio Value"}),e.jsx("th",{children:"Daily PnL (Rs)"}),e.jsx("th",{children:"Daily ROI (%)"}),e.jsx("th",{children:"Index Value"}),e.jsx("th",{children:"Index Daily PnL (Rs)"})]})}),e.jsx("tbody",{children:t.localDailyRows.map((n,l)=>e.jsxs("tr",{children:[e.jsx("td",{children:n.date}),e.jsx("td",{children:z(n.portfolio_value)}),e.jsx("td",{className:n.daily_pnl>=0?"positive":"negative",children:z(n.daily_pnl)}),e.jsx("td",{className:n.daily_roi>=0?"positive":"negative",children:B(n.daily_roi)}),e.jsx("td",{children:z(n.index_value)}),e.jsx("td",{className:n.index_daily_pnl>=0?"positive":"negative",children:z(n.index_daily_pnl)})]},`daily-${l}`))})]})})]})]})}const fe=se(`
  .multi-strategy-page {
    padding: 24px;
    background: linear-gradient(180deg, #f6f8fc 0%, #eef4ff 100%);
    min-height: 100vh;
  }

  .multi-upload-shell,
  .multi-report-card,
  .scanner-section {
    border: 1px solid #d6e1ee;
    border-radius: 24px;
    background: #fff;
    box-shadow: 0 18px 40px rgba(15, 23, 42, 0.07);
  }

  .multi-upload-shell {
    padding: 26px 28px 30px;
    margin-bottom: 24px;
  }

  .multi-upload-title {
    display: flex;
    align-items: center;
    gap: 14px;
    margin-bottom: 10px;
  }

  .multi-upload-title i {
    width: 5px;
    height: 30px;
    border-radius: 999px;
    background: #16a34a;
    display: inline-block;
  }

  .multi-upload-title h2 {
    margin: 0;
    font-size: 2rem;
    color: #10233b;
    font-weight: 800;
  }

  .multi-upload-subtitle {
    margin: 0 0 20px;
    color: #64748b;
    font-size: 1rem;
  }

  .multi-strategy-card {
    border: 1px solid #dbe5f0;
    border-radius: 18px;
    padding: 18px;
    margin-bottom: 18px;
    background: #fcfdff;
  }

  .multi-strategy-top {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 12px;
    margin-bottom: 14px;
  }

  .multi-strategy-top strong {
    color: #16a34a;
    font-size: 1rem;
    letter-spacing: 0.04em;
  }

  .multi-icon-btn {
    border: 0;
    background: transparent;
    color: #ef4444;
    font-size: 1.2rem;
    cursor: pointer;
  }

  .multi-form-grid {
    display: grid;
    grid-template-columns: repeat(12, minmax(0, 1fr));
    gap: 18px;
  }

  .multi-field {
    grid-column: span 6;
  }

  .multi-field label {
    display: block;
    margin-bottom: 8px;
    font-size: 0.92rem;
    font-weight: 700;
    color: #1e293b;
  }

  .multi-input,
  .multi-file {
    width: 100%;
    border: 1px solid #cad7e6;
    border-radius: 14px;
    background: #fff;
    color: #0f172a;
    padding: 13px 15px;
    font-size: 0.95rem;
    outline: none;
  }

  .multi-actions {
    display: flex;
    gap: 12px;
    flex-wrap: wrap;
    margin-top: 10px;
  }

  .multi-btn {
    border: 0;
    border-radius: 12px;
    padding: 12px 18px;
    font-size: 0.95rem;
    font-weight: 700;
    cursor: pointer;
  }

  .multi-btn.add {
    background: #16a34a;
    color: #fff;
  }

  .multi-btn.submit {
    background: #0f6adf;
    color: #fff;
  }

  .multi-btn:disabled {
    opacity: 0.55;
    cursor: not-allowed;
  }

  .multi-mode-tabs {
    display: flex;
    gap: 10px;
    margin-bottom: 20px;
  }

  .multi-mode-tab {
    border: 1px solid #cbd8e7;
    border-radius: 999px;
    background: #fff;
    color: #47627f;
    padding: 10px 20px;
    font-size: 0.9rem;
    font-weight: 700;
    cursor: pointer;
  }

  .multi-mode-tab.active {
    background: #0f6adf;
    border-color: #0f6adf;
    color: #fff;
  }

  .multi-guidelines {
    margin-top: 24px;
    border: 1px solid #bed5ff;
    background: #eef5ff;
    border-radius: 18px;
    padding: 18px 20px;
    color: #315ea4;
  }

  .multi-guidelines h4 {
    margin: 0 0 10px;
    font-size: 1rem;
    font-weight: 800;
  }

  .multi-guidelines ul {
    margin: 0;
    padding-left: 20px;
    display: grid;
    gap: 8px;
  }

  .multi-reports {
    display: grid;
    gap: 24px;
  }

  .multi-section-header {
    display: flex;
    align-items: center;
    gap: 12px;
    padding: 14px 20px;
    border-radius: 14px;
    font-size: 1rem;
    font-weight: 800;
  }

  .multi-section-header--combined {
    background: linear-gradient(135deg, #0f6adf 0%, #1d8bff 100%);
    color: #fff;
    box-shadow: 0 8px 24px rgba(15, 106, 223, 0.25);
  }

  .multi-section-header--individual {
    background: linear-gradient(135deg, #16a34a 0%, #22c55e 100%);
    color: #fff;
    box-shadow: 0 8px 24px rgba(22, 163, 74, 0.2);
  }

  .multi-section-icon {
    font-size: 1.2rem;
  }

  .multi-section-badge {
    margin-left: auto;
    background: rgba(255, 255, 255, 0.22);
    border-radius: 999px;
    padding: 4px 14px;
    font-size: 0.8rem;
    font-weight: 700;
  }

  .multi-tabs-bar {
    display: flex;
    gap: 6px;
    flex-wrap: wrap;
    margin-bottom: 20px;
    border-bottom: 2px solid #e2e8f0;
    padding-bottom: 0;
  }

  .multi-tab-btn {
    padding: 10px 20px;
    border: none;
    background: none;
    cursor: pointer;
    font-size: 0.875rem;
    font-weight: 600;
    color: #64748b;
    border-bottom: 3px solid transparent;
    margin-bottom: -2px;
    border-radius: 8px 8px 0 0;
    transition: color 0.15s, border-color 0.15s, background 0.15s;
  }

  .multi-tab-btn:hover {
    color: #1e40af;
    background: #f0f6ff;
  }

  .multi-tab-btn.active {
    color: #1d4ed8;
    border-bottom-color: #1d4ed8;
    background: #eff6ff;
  }

  .multi-tab-btn.combined-tab.active {
    color: #0f6adf;
    border-bottom-color: #0f6adf;
    background: #eff6ff;
  }

  .multi-report-card {
    padding: 24px;
  }

  .multi-report-head {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 16px;
    margin-bottom: 18px;
  }

  .multi-report-head h2 {
    margin: 0;
    font-size: 1.45rem;
    color: #0f172a;
    font-weight: 800;
  }

  .multi-report-head p {
    margin: 6px 0 0;
    color: #64748b;
  }

  .multi-report-badge {
    border-radius: 999px;
    background: #e8f0ff;
    color: #0f6adf;
    padding: 9px 14px;
    font-size: 0.83rem;
    font-weight: 800;
  }

  .scanner-metrics-grid {
    display: grid;
    grid-template-columns: repeat(12, minmax(0, 1fr));
    gap: 16px;
    margin-bottom: 24px;
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

  .scanner-metric-value-text.has-breakdown,
  .scanner-big-card.has-breakdown {
    cursor: pointer;
  }

  .scanner-metric-value-text {
    display: inline-block;
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
    margin-top: 28px;
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
    margin-top: 0;
    border-radius: 16px;
    background: #fff;
    padding: 20px;
    border: 1px solid #e6edf8;
    box-shadow: 0 10px 26px rgba(15, 23, 42, 0.05);
    margin-bottom: 24px;
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

  .scanner-section-title::before {
    content: "📊";
    font-size: 1.2rem;
  }

  .scanner-section-chart {
    padding-top: 16px;
  }

  .scanner-table-wrap {
    overflow-x: auto;
  }

  .scanner-table,
  .scanner-year-table {
    width: 100%;
    min-width: 1280px;
    border-collapse: collapse;
    background: #fff;
  }

  .scanner-table {
    text-align: center;
    font-size: 14px;
  }

  .scanner-table th,
  .scanner-table td,
  .scanner-year-table th,
  .scanner-year-table td {
    border-bottom: 1px solid #e9eff7;
    padding: 10px 8px;
    text-align: center;
    font-size: 14px;
    white-space: nowrap;
  }

  .scanner-table th {
    background: #009c3b;
    color: #ffffff;
    font-weight: 700;
  }

  .scanner-year-table th {
    background: #1761ae;
    color: #fff;
    font-weight: 700;
  }

  .scanner-table td {
    color: #333;
    vertical-align: middle;
  }

  .scanner-table td.positive,
  .scanner-year-table td.positive {
    color: #009c3b;
    font-weight: 700;
  }

  .scanner-table td.negative,
  .scanner-year-table td.negative {
    color: #e53935;
    font-weight: 700;
  }

  .scanner-month-cell,
  .scanner-breakup-cell {
    min-width: 110px;
    text-align: center !important;
    vertical-align: middle;
    white-space: normal !important;
    position: relative;
  }

  .breakup-tooltip-fixed {
    position: fixed;
    z-index: 9999;
    transform: translateX(-50%);
    background: #ffffff;
    color: #111827;
    border: 1px solid #e5e7eb;
    border-radius: 8px;
    padding: 8px 12px;
    min-width: 180px;
    max-width: min(720px, calc(100vw - 32px));
    box-shadow: 0 10px 28px rgba(15, 23, 42, 0.16);
    white-space: normal;
    font-size: 0.8rem;
    pointer-events: none;
  }

  .breakup-tooltip-row {
    display: flex;
    justify-content: space-between;
    gap: 12px;
    padding: 3px 0;
    border-bottom: 1px solid #eef2f7;
    align-items: flex-start;
  }

  .breakup-tooltip-row:last-child {
    border-bottom: none;
  }

  .breakup-tooltip-name {
    color: #111827;
    max-width: 120px;
    flex: 0 0 92px;
    overflow: hidden;
    text-overflow: ellipsis;
    font-weight: 600;
  }

  .breakup-tooltip-row span:last-child {
    text-align: right;
    word-break: break-word;
  }

  .scanner-month-roi,
  .scanner-breakup-roi {
    font-size: 0.95rem;
    font-weight: 800;
    line-height: 1.2;
    margin-bottom: 4px;
  }

  .scanner-breakup-hover {
    display: inline-block;
    cursor: pointer;
  }

  .scanner-month-meta,
  .scanner-breakup-meta {
    display: grid;
    gap: 2px;
    color: #111827;
    font-size: 0.8rem;
    font-weight: 600;
    line-height: 1.25;
  }

  .scanner-month-meta span,
  .scanner-breakup-meta span {
    font-weight: 700;
    color: #111827;
  }

  .scanner-month-empty,
  .scanner-breakup-empty {
    color: #6b7280;
    font-size: 0.95rem;
    font-weight: 700;
  }

  .scanner-weekly-table {
    width: 100%;
    border-collapse: collapse;
    background: #fff;
    margin-top: 6px;
    font-size: 13px;
  }

  .scanner-weekly-table th,
  .scanner-weekly-table td {
    border: 1px solid #ddd;
    padding: 6px 8px;
    text-align: center;
    white-space: nowrap;
  }

  .scanner-weekly-table th {
    background: #1761ae;
    color: #fff;
    font-weight: 700;
  }

  .year-cell {
    font-weight: 700;
    font-size: 1.05rem;
    color: #1f2937;
  }

  .scanner-month-group + .scanner-month-group {
    margin-top: 16px;
  }

  .scanner-month-header {
    width: 100%;
    background: #0077cc;
    color: #fff;
    padding: 8px 15px;
    font-weight: 700;
    font-size: 15px;
    margin-top: 18px;
    margin-bottom: 0;
    border-radius: 4px;
  }

  .scanner-drawdown-tabs {
    display: flex;
    gap: 10px;
    margin-bottom: 18px;
    flex-wrap: wrap;
  }

  .scanner-drawdown-tab {
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

  .scanner-drawdown-tab.active {
    background: linear-gradient(135deg, #0f6adf 0%, #1d8bff 100%);
    border-color: #0f6adf;
    color: #fff;
    box-shadow: 0 10px 20px rgba(15, 106, 223, 0.2);
  }

  .positive {
    color: #009c3b;
    font-weight: 600;
  }

  .negative {
    color: #e53935;
    font-weight: 600;
  }

  .year-cell {
    font-weight: 800;
    color: #10233b;
  }

  .scanner-empty {
    margin: 0;
    color: #64748b;
    text-align: center;
    padding: 28px 0;
  }

  @media (max-width: 1280px) {
    .scanner-metric-card,
    .scanner-big-card {
      grid-column: span 12;
    }
  }

  .multi-parsed-inputs {
    margin-top: 12px;
    display: flex;
    flex-direction: column;
    gap: 8px;
  }

  .multi-parsed-grid-2 {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 8px;
  }

  .multi-parsed-grid-3 {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 8px;
  }

  .multi-parsed-card {
    background: #f0f6ff;
    border: 1px solid #c2d6f5;
    border-radius: 8px;
    padding: 10px 14px;
    display: flex;
    flex-direction: column;
    gap: 4px;
  }

  .multi-parsed-formula-card {
    background: #f0f6ff;
  }

  .multi-parsed-section-title {
    font-size: 11px;
    font-weight: 800;
    letter-spacing: 0.06em;
    text-transform: uppercase;
    color: #1761ae;
    margin-bottom: 6px;
    border-bottom: 1px solid #c2d6f5;
    padding-bottom: 4px;
  }

  .multi-parsed-row {
    display: flex;
    align-items: baseline;
    gap: 6px;
    font-size: 12.5px;
    line-height: 1.45;
  }

  .multi-parsed-label {
    min-width: 100px;
    color: #5a7aa8;
    font-weight: 600;
    flex-shrink: 0;
    font-size: 12px;
  }

  .multi-parsed-value {
    color: #1a2d47;
    font-weight: 700;
    word-break: break-word;
    font-size: 12.5px;
  }

  .multi-parsed-formula {
    background: #1e2d3d;
    color: #e2f0ff;
    border-radius: 6px;
    padding: 10px 14px;
    font-size: 12px;
    line-height: 1.6;
    white-space: pre-wrap;
    word-break: break-word;
    margin: 0;
    font-family: "Courier New", Courier, monospace;
  }

  .multi-parse-error {
    margin-top: 8px;
    background: #fff0f0;
    border: 1px solid #f5c2c2;
    border-radius: 6px;
    padding: 8px 12px;
    color: #c0392b;
    font-size: 13px;
    font-weight: 600;
  }

  @media (max-width: 768px) {
    .multi-strategy-page {
      padding: 16px;
    }

    .multi-field {
      grid-column: span 12;
    }

    .multi-report-head,
    .multi-strategy-top,
    .scanner-big-card-stats {
      display: block;
    }

    .scanner-big-card-stats h4:last-child {
      text-align: left;
      margin-top: 8px;
    }
  }
`,".multi-strategy-page");function we(){const[t,s]=j.useState("rerun"),[a,i]=j.useState([{id:crypto.randomUUID(),strategyName:"Strategy 1",file:null}]),[r,p]=j.useState([]),[o,m]=j.useState(null),[h,g]=j.useState(!1),[M,y]=j.useState(null),[_,v]=j.useState("combined");function N(c,k,d){y({id:Date.now(),variant:c,message:k,title:d})}function I(c,k){i(d=>d.map(u=>u.id===c?{...u,...k}:u))}function D(){i(c=>[...c,{id:crypto.randomUUID(),strategyName:`Strategy ${c.length+1}`,file:null}])}function L(c){i(k=>k.length===1?k:k.filter(d=>d.id!==c))}async function E(){var k,d;const c=a.map(u=>u.strategyName.trim()).filter(Boolean);if(c.length!==a.length){N("error","Every strategy must have a name.");return}if(new Set(c.map(u=>u.toLowerCase())).size!==c.length){N("error","Each strategy name must be unique.");return}if(a.some(u=>!u.file)){N("error","Upload the backtest report file for every strategy.");return}g(!0);try{const u=new FormData;a.forEach(b=>{b.file&&(u.append("files",b.file),u.append("strategy_names",b.strategyName.trim()))});const $=await fetch(`${Q}/${t==="rerun"?"rerun_backtest_from_files":"multi_strategy_reports"}`,{method:"POST",body:u}),F=await $.json().catch(()=>({}));if(!$.ok)throw new Error(F.detail||"Unable to process uploaded strategy files.");const P=(F.reports||[]).map((b,f)=>{var w;return{...b,id:b.id||((w=a[f])==null?void 0:w.id)||`parsed-${f+1}`}}),n=F.combined_report?{...F.combined_report,id:F.combined_report.id||"combined-report"}:null;p(P),m(n),v(n?"combined":((k=P[0])==null?void 0:k.id)||"combined");const l=Number(F.strategy_count||((d=F.reports)==null?void 0:d.length)||0),x=Number(F.processing_ms||0);N("success",`${l} strategy report${l===1?"":"s"} processed in ${(x/1e3).toFixed(2)}s.${l>1?" Combined result also prepared.":""}`)}catch(u){N("error",u instanceof Error?u.message:"Unable to parse uploaded files.")}finally{g(!1)}}return e.jsxs(e.Fragment,{children:[e.jsx(ee,{title:"FinEdge Scanner | Multi Strategy",description:"Upload exported backtest reports and view analysis."}),e.jsx("style",{children:fe}),e.jsx(ae,{toast:M,onClose:()=>y(null)}),e.jsxs("div",{className:"multi-strategy-page",children:[e.jsx(te,{pageTitle:"Multi Strategy"}),e.jsxs("section",{className:"multi-upload-shell",children:[e.jsxs("div",{className:"multi-upload-title",children:[e.jsx("i",{}),e.jsx("h2",{children:"Upload Strategies"})]}),e.jsx("p",{className:"multi-upload-subtitle",children:"Add and manage multiple trading strategies with Excel file uploads."}),e.jsxs("div",{className:"multi-mode-tabs",children:[e.jsx("button",{type:"button",className:`multi-mode-tab ${t==="rerun"?"active":""}`,onClick:()=>s("rerun"),children:"Re-run Backtest"}),e.jsx("button",{type:"button",className:`multi-mode-tab ${t==="parse"?"active":""}`,onClick:()=>s("parse"),children:"Parse Uploaded Results"})]}),a.map((c,k)=>e.jsxs("div",{className:"multi-strategy-card",children:[e.jsxs("div",{className:"multi-strategy-top",children:[e.jsxs("strong",{children:["STRATEGY #",k+1]}),e.jsx("button",{type:"button",className:"multi-icon-btn",onClick:()=>L(c.id),"aria-label":`Remove strategy ${k+1}`,children:"🗑"})]}),e.jsxs("div",{className:"multi-form-grid",children:[e.jsxs("div",{className:"multi-field",children:[e.jsx("label",{children:"Strategy Name *"}),e.jsx("input",{className:"multi-input",value:c.strategyName,onChange:d=>I(c.id,{strategyName:d.target.value}),placeholder:`Strategy ${k+1}`})]}),e.jsxs("div",{className:"multi-field",children:[e.jsx("label",{children:"Upload Excel File *"}),e.jsx("input",{className:"multi-file",type:"file",accept:".xls,.xml,application/vnd.ms-excel,text/xml,application/xml",onChange:async d=>{var F;const u=((F=d.target.files)==null?void 0:F[0])||null;if(!u){I(c.id,{file:null,parsedInputs:null,parseError:null});return}I(c.id,{file:u,parsedInputs:null,parseError:null});const{inputs:S,error:$}=await de(u);I(c.id,{parsedInputs:S,parseError:$,strategyName:S!=null&&S.strategy_name&&c.strategyName===`Strategy ${k+1}`?S.strategy_name:c.strategyName})}})]})]}),c.parseError?e.jsx("div",{className:"multi-parse-error",children:c.parseError}):c.parsedInputs?e.jsxs("div",{className:"multi-parsed-inputs",children:[e.jsxs("div",{className:"multi-parsed-grid-2",children:[e.jsxs("div",{className:"multi-parsed-card",children:[e.jsx("div",{className:"multi-parsed-section-title",children:"Strategy Info"}),e.jsxs("div",{className:"multi-parsed-row",children:[e.jsx("span",{className:"multi-parsed-label",children:"Strategy Name"}),e.jsx("span",{className:"multi-parsed-value",children:c.parsedInputs.strategy_name||"--"})]}),e.jsxs("div",{className:"multi-parsed-row",children:[e.jsx("span",{className:"multi-parsed-label",children:"Start Date"}),e.jsx("span",{className:"multi-parsed-value",children:c.parsedInputs.start_date||"--"})]}),e.jsxs("div",{className:"multi-parsed-row",children:[e.jsx("span",{className:"multi-parsed-label",children:"End Date"}),e.jsx("span",{className:"multi-parsed-value",children:c.parsedInputs.end_date||"--"})]}),e.jsxs("div",{className:"multi-parsed-row",children:[e.jsx("span",{className:"multi-parsed-label",children:"Starting Capital"}),e.jsxs("span",{className:"multi-parsed-value",children:["₹",Number(c.parsedInputs.starting_capital||0).toLocaleString("en-IN")]})]})]}),e.jsxs("div",{className:"multi-parsed-card",children:[e.jsx("div",{className:"multi-parsed-section-title",children:"Universe & Portfolio"}),e.jsxs("div",{className:"multi-parsed-row",children:[e.jsx("span",{className:"multi-parsed-label",children:"Universe"}),e.jsx("span",{className:"multi-parsed-value",children:c.parsedInputs.indexes.join(", ")||"--"})]}),e.jsxs("div",{className:"multi-parsed-row",children:[e.jsx("span",{className:"multi-parsed-label",children:"No. of Stocks"}),e.jsx("span",{className:"multi-parsed-value",children:c.parsedInputs.entry_rank||"--"})]}),e.jsxs("div",{className:"multi-parsed-row",children:[e.jsx("span",{className:"multi-parsed-label",children:"Exit Rank"}),e.jsx("span",{className:"multi-parsed-value",children:c.parsedInputs.exit_rank||"--"})]}),e.jsxs("div",{className:"multi-parsed-row",children:[e.jsx("span",{className:"multi-parsed-label",children:"Min Value"}),e.jsx("span",{className:"multi-parsed-value",children:c.parsedInputs.stock_price_min||"0"})]}),e.jsxs("div",{className:"multi-parsed-row",children:[e.jsx("span",{className:"multi-parsed-label",children:"Max Value"}),e.jsx("span",{className:"multi-parsed-value",children:c.parsedInputs.stock_price_max||"0"})]})]})]}),e.jsxs("div",{className:"multi-parsed-grid-3",children:[e.jsxs("div",{className:"multi-parsed-card",children:[e.jsx("div",{className:"multi-parsed-section-title",children:"Rebalance"}),e.jsxs("div",{className:"multi-parsed-row",children:[e.jsx("span",{className:"multi-parsed-label",children:"Frequency"}),e.jsx("span",{className:"multi-parsed-value",children:c.parsedInputs.rebalance_frequency||"--"})]}),e.jsxs("div",{className:"multi-parsed-row",children:[e.jsx("span",{className:"multi-parsed-label",children:"Rebalance Date"}),e.jsx("span",{className:"multi-parsed-value",children:c.parsedInputs.rebalance_date||"--"})]}),e.jsxs("div",{className:"multi-parsed-row",children:[e.jsx("span",{className:"multi-parsed-label",children:"Alt. Day"}),e.jsx("span",{className:"multi-parsed-value",children:c.parsedInputs.alternative_rebalance_day||"--"})]}),e.jsxs("div",{className:"multi-parsed-row",children:[e.jsx("span",{className:"multi-parsed-label",children:"Position Sizing"}),e.jsx("span",{className:"multi-parsed-value",children:c.parsedInputs.position_sizing||"--"})]})]}),e.jsxs("div",{className:"multi-parsed-card",children:[e.jsx("div",{className:"multi-parsed-section-title",children:"Regime Filter"}),e.jsxs("div",{className:"multi-parsed-row",children:[e.jsx("span",{className:"multi-parsed-label",children:"Filter"}),e.jsx("span",{className:"multi-parsed-value",children:c.parsedInputs.regime_filter||"--"})]}),e.jsxs("div",{className:"multi-parsed-row",children:[e.jsx("span",{className:"multi-parsed-label",children:"Action"}),e.jsx("span",{className:"multi-parsed-value",children:c.parsedInputs.regime_filter_action||"--"})]}),e.jsxs("div",{className:"multi-parsed-row",children:[e.jsx("span",{className:"multi-parsed-label",children:"Filter Index"}),e.jsx("span",{className:"multi-parsed-value",children:c.parsedInputs.regime_filter_indexes||"--"})]})]}),e.jsxs("div",{className:"multi-parsed-card",children:[e.jsx("div",{className:"multi-parsed-section-title",children:"Uncorrelated Asset"}),e.jsxs("div",{className:"multi-parsed-row",children:[e.jsx("span",{className:"multi-parsed-label",children:"Asset Type"}),e.jsx("span",{className:"multi-parsed-value",children:c.parsedInputs.uncorrelated_asset_type||"--"})]}),e.jsxs("div",{className:"multi-parsed-row",children:[e.jsx("span",{className:"multi-parsed-label",children:"Allocation"}),e.jsxs("span",{className:"multi-parsed-value",children:[c.parsedInputs.uncorrelated_asset_allocation||"--","%"]})]})]})]}),c.parsedInputs.formula?e.jsxs("div",{className:"multi-parsed-card multi-parsed-formula-card",children:[e.jsx("div",{className:"multi-parsed-section-title",children:"Scoring Formula"}),e.jsx("pre",{className:"multi-parsed-formula",children:c.parsedInputs.formula})]}):null]}):null]},c.id)),e.jsxs("div",{className:"multi-actions",children:[e.jsx("button",{type:"button",className:"multi-btn add",onClick:D,children:"+ Add to Upload a Strategy"}),e.jsx("button",{type:"button",className:"multi-btn submit",onClick:E,disabled:h,children:h?"Submitting...":"Submit Strategies"})]}),e.jsxs("div",{className:"multi-guidelines",children:[e.jsx("h4",{children:t==="rerun"?"Re-run Backtest Mode:":"Parse Uploaded Results Mode:"}),e.jsx("ul",{children:t==="rerun"?e.jsxs(e.Fragment,{children:[e.jsx("li",{children:"Upload the exported backtest Excel file (.xls) from the backtest page."}),e.jsxs("li",{children:["The backend will read the ",e.jsx("strong",{children:"Inputs"})," sheet and re-run the backtest from scratch using the same configuration."]}),e.jsx("li",{children:"Results are freshly computed — no frontend calculation."}),e.jsx("li",{children:"Multiple files: a combined strategy result will also be generated."})]}):e.jsxs(e.Fragment,{children:[e.jsx("li",{children:"Use the backtest report file downloaded from the backtest page."}),e.jsx("li",{children:"Uploaded file results will be parsed and displayed as-is."}),e.jsx("li",{children:"Each strategy must have a unique name."}),e.jsx("li",{children:"One file per strategy card."})]})})]})]}),o||r.length?e.jsxs("div",{className:"multi-reports",children:[e.jsxs("div",{className:"multi-tabs-bar",children:[o&&e.jsx("button",{type:"button",className:`multi-tab-btn combined-tab${_==="combined"?" active":""}`,onClick:()=>v("combined"),children:"Multi Strategy Result"}),r.map((c,k)=>e.jsxs("button",{type:"button",className:`multi-tab-btn${_===c.id?" active":""}`,onClick:()=>v(c.id),children:["Strategy #",k+1]},c.id))]}),_==="combined"&&o&&e.jsx(K,{report:o,siblingReports:r}),r.map(c=>_===c.id?e.jsx(K,{report:c},c.id):null)]}):null]})]})}export{we as default};
