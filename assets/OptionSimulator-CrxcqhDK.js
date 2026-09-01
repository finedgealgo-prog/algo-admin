import{r as m,j as e}from"./index-Cl6ZtIcp.js";const re=104,Y=8,P=re+Y,de=pe(`
  * { box-sizing: border-box; margin: 0; padding: 0; }
  .os-page { min-height: 100vh; background: #f8f9fa; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; }
  .os-main { display: flex; gap: 20px; align-items: flex-start; }

  /* ── Panel shell ── */
  .oc-panel { width: 500px; flex-shrink: 0; background: #fff; border-radius: 8px; border: 1px solid #e5e7eb; box-shadow: 0 2px 10px rgba(0,0,0,.08); overflow: hidden; display: flex; flex-direction: column; }

  /* ── Panel header ── */
  .oc-header { display: flex; align-items: center; justify-content: space-between; padding: 8px 10px; border-bottom: 1px solid #D9D9D9; font-size: 13px; }
  .oc-header-left { color: #6b7280; font-size: 12px; }
  .oc-title { font-weight: 700; font-size: 13px; color: #333; }
  .oc-expiry-label { font-size: 11px; font-weight: 400; opacity: 0.8; color: #333; margin-left: 2px; }
  .oc-hide-btn { color: #38bdf8; font-size: 12px; background: none; border: none; cursor: pointer; display: inline-flex; align-items: center; gap: 3px; }

  /* ── Expiry carousel ── */
  .expiry__viewer { width: 100%; min-height: 56px; border-bottom: 1px solid #D9D9D9; display: flex; align-items: center; gap: 8px; padding: 4px 8px; }
  .expiry-carousel__viewport { flex: 1; overflow: hidden; }
  .expiry-carousel__track { display: flex; align-items: flex-start; gap: 8px; transition: transform 0.25s ease; will-change: transform; }
  .expiry_button { text-align: center; flex: 0 0 104px; width: 104px; padding: 4px 0; cursor: pointer; }
  .expiry_button button { width: 100%; padding: 4px 8px; color: #646464; background: #F4F4F4; border-radius: 2px; border: 0; font-size: 12px; cursor: pointer; font-family: inherit; text-transform: uppercase; }
  .expiry_button .expiry_indicator { margin-top: 2px; color: #646464; font-size: 10px; }
  .selected__oc__expiry button { color: #4DA1C7 !important; background-color: #DDF8FF !important; }
  .expiry-carousel__arrow { flex: 0 0 24px; width: 24px; height: 24px; display: inline-flex; align-items: center; justify-content: center; padding: 0; border: 0; background: transparent; color: #565656; font-size: 28px; line-height: 1; cursor: pointer; }
  .expiry-carousel__arrow:disabled { opacity: 0.2; cursor: default; }

  /* ── Filter/meta rows ── */
  .oc_filter { padding: 4px 10px; min-height: 36px; display: flex; align-items: center; justify-content: space-between; border-bottom: 1px solid #f1f5f9; font-size: 13px; color: #646464; }
  .oc_filter > div { display: flex; align-items: center; min-width: 110px; }
  .oc_filter > div:last-child { justify-content: flex-end; }

  /* ATM radio group */
  .squar__off__type { display: flex; align-items: center; gap: 8px; }
  .checkbox-container { display: flex; align-items: center; gap: 4px; cursor: pointer; font-size: 12px; }
  .checkbox-label { display: flex; align-items: center; }
  .checkbox-custom.radio__type { width: 12px; height: 12px; border-radius: 50%; border: 1.5px solid #94a3b8; background: #fff; display: inline-block; flex-shrink: 0; transition: all .15s; }
  .radio__active .checkbox-custom.radio__type { border-color: #2563eb; background: #2563eb; box-shadow: inset 0 0 0 2px #fff; }
  .checkbox__title { font-size: 12px; color: #646464; }

  /* Total OI strip */
  .total_oi { display: flex; align-items: center; justify-content: center; font-size: 13px; color: #646464; gap: 4px; }
  .total_call_oi { min-width: 48px; text-align: right; font-size: 11px; color: #000; }
  .total_put_oi { min-width: 50px; text-align: left; font-size: 11px; color: #000; }
  .total_call_oi span, .total_put_oi span { color: #34A66D; font-size: 10px; padding-left: 2px; }
  .oi-progress { width: 14px; height: 5px; margin: 0 3px; border-radius: 2px; overflow: hidden; background: #e2e8f0; }
  .oi-progress-call { background: #FBE2E2; width: 100%; height: 100%; }
  .oi-progress-put { background: #CDF1DF; width: 100%; height: 100%; }

  /* ── Table ── */
  .oc-custom-table { width: 100%; overflow-x: auto; overflow-y: auto; max-height: 520px; font-size: 13px; }
  .oc-custom-table table { min-width: 460px; width: 100%; border-collapse: collapse; table-layout: fixed; }
  .oc-custom-table thead tr { position: sticky; top: 0; z-index: 2; background: #f1f5f9; }
  .oc-custom-table th { padding: 8px 10px; font-weight: 600; font-size: 12px; color: #475569; border-bottom: 2px solid #e2e8f0; letter-spacing: 0.03em; }
  .oc-call-head { text-align: right; color: #16a34a !important; width: 25%; }
  .oc-call-oi-head { text-align: right; color: #ef4444 !important; width: 12%; font-size: 11px; }
  .oc-iv-head { text-align: center; color: #7c3aed !important; width: 10%; font-size: 11px; }
  .oc-strike-head { text-align: center; width: 16%; color: #1e293b !important; }
  .oc-put-oi-head { text-align: left; color: #22c55e !important; width: 12%; font-size: 11px; }
  .oc-put-head { text-align: left; color: #dc2626 !important; width: 25%; }
  .oc-head-delta { font-weight: 400; opacity: 0.7; font-size: 11px; }

  /* Row cells */
  .oc-row td { padding: 5px 8px; border-bottom: 1px solid #f1f5f9; vertical-align: middle; }
  .oc-row:hover .oc-strike, .oc-row:hover .oc-ltp { font-weight: 600; }

  .oc-call { text-align: right; }
  .oc-put { text-align: left; }
  .oc-iv { text-align: center; padding: 4px 4px !important; }
  .oc-iv-value { font-size: 11px; font-weight: 200; color: #1e293b; white-space: nowrap; }
  .oc-strike { text-align: center; font-weight: 300; font-size: 13px; color: #334155; background: #f8fafc; }
  .oc-ltp { font-weight: 300; color: #1e293b; margin-right: 3px; }
  .oc-delta { font-size: 11px; color: #64748b; }
  .oc-empty { color: #94a3b8; }

  /* ATM row */
  .oc-row.oc-atm td { background: #EBFBFF !important; }
  .oc-row.oc-atm .oc-strike { background: #c7f2ff !important; font-weight: 300; }

  /* ITM highlights */
  .oc-row.oc-call-itm .oc-call { background: #fefce8 !important; }
  .oc-row.oc-put-itm .oc-put { background: #fefce8 !important; }

  /* OI cells */
  .oc-call-oi { text-align: right; padding: 4px 6px !important; }
  .oc-put-oi { text-align: left; padding: 4px 6px !important; }
  .oc-oi-value { font-size: 11px; font-weight: 600; line-height: 1.4; white-space: nowrap; opacity: 0.6; }
  .oc-oi-call { color: #ef4444; }
  .oc-oi-put { color: #22c55e; }
  .oc-oi-bar-wrap { height: 3px; background: #e2e8f0; border-radius: 2px; margin-top: 3px; overflow: hidden; opacity: 0.4; }
  .oc-call-oi .oc-oi-bar-wrap { display: flex; justify-content: flex-end; }
  .oc-oi-bar { height: 100%; border-radius: 2px; transition: width 0.3s; }
  .oc-oi-bar-call { background: #ef4444; }
  .oc-oi-bar-put { background: #22c55e; }

  /* B/S buttons — hidden by default, show on row hover or when active */
  .oc-actions { display: none; align-items: center; gap: 3px; }
  .oc-row:hover .oc-actions { display: inline-flex; }
  .oc-actions.has-active { display: inline-flex !important; }
  .oc-custom-table .action_button button { background: #fff; color: #999; border: 1px solid #ccc; font-size: 11px; padding: 1px 5px; border-radius: 2px; cursor: pointer; font-family: inherit; line-height: 1.5; }
  .oc-custom-table .buy_button:hover { color: #03B760 !important; border-color: #03B760 !important; }
  .oc-custom-table .sell_button:hover { color: #EF6161 !important; border-color: #EF6161 !important; }
  .oc-custom-table .buy_button.oc-btn-active { background: #03B760 !important; color: #fff !important; border-color: #03B760 !important; }
  .oc-custom-table .sell_button.oc-btn-active { background: #EF6161 !important; color: #fff !important; border-color: #EF6161 !important; }

  /* Call cell: B/S on LEFT, ltp/delta on RIGHT */
  .oc-call .oc-cell-inner { display: flex; align-items: center; justify-content: flex-end; gap: 4px; white-space: nowrap; width: 100%; }
  .oc-call .oc-actions { margin-right: auto; }

  /* Put cell: ltp/delta on LEFT, B/S on RIGHT */
  .oc-put .oc-cell-inner { display: flex; align-items: center; justify-content: flex-start; gap: 4px; white-space: nowrap; width: 100%; }
  .oc-put .oc-actions { margin-left: auto; }

  /* ── Right panel ── */
  .os-right-panel { flex: 1; min-width: 0; background: #fff; border-radius: 8px; border: 1px solid #e5e7eb; box-shadow: 0 2px 10px rgba(0,0,0,.08); padding: 24px; min-height: 400px; display: flex; align-items: center; justify-content: center; color: #94a3b8; font-size: 14px; }

  @media (max-width: 900px) {
    .os-main { flex-direction: column; }
    .oc-panel { width: 100%; }
  }
`,".os-page");function pe(c,l){return c.replace(/(^|[{}])\s*([^@{}][^{]*)\{/g,(n,x,f)=>{const g=f.split(",").map(d=>d.trim()).filter(Boolean).map(d=>d.startsWith(l)?d:`${l} ${d}`).join(", ");return g?`${x}
  ${g} {`:n})}function J(c){const l=new Date(c),n=String(l.getUTCDate()).padStart(2,"0"),f=["JAN","FEB","MAR","APR","MAY","JUN","JUL","AUG","SEP","OCT","NOV","DEC"][l.getUTCMonth()],g=String(l.getUTCFullYear()).slice(2);return`${n} ${f} '${g}`}function xe(c,l){const n=new Date(c).getTime()-new Date(l.toDateString()).getTime();return Math.max(0,Math.ceil(n/864e5))}function he(c,l,n){const x=xe(c,new Date);return l===0?`CW: ${x} DTE`:l===1?`NW: ${x} DTE`:(()=>{const g=new Date(c),d=new Date(c);return d.setUTCDate(d.getUTCDate()+7),d.getUTCMonth()!==g.getUTCMonth()})()?`CM: ${x} DTE`:`${x} DTE`}function S(c){return c>=1e7?`${(c/1e7).toFixed(1).replace(/\.0$/,"")}Cr`:c>=1e5?`${(c/1e5).toFixed(1).replace(/\.0$/,"")}L`:c>=1e3?`${(c/1e3).toFixed(1).replace(/\.0$/,"")}K`:c.toString()}function ue(){var B,R,U;const[c,l]=m.useState([]),[n,x]=m.useState(""),[f,g]=m.useState(0),[d,K]=m.useState(null),[X,Q]=m.useState("Spot"),[C,M]=m.useState(0),[Z,ee]=m.useState([]),D=m.useRef(null);m.useEffect(()=>{fetch("/js/option-chain.json").then(t=>t.json()).then(t=>{var o,i;l(t);const a=[...new Set(t.map(s=>s.expiry))].sort()[0]||"";x(a),(o=t[0])!=null&&o.spot_price&&g(t[0].spot_price),(i=t[0])!=null&&i.timestamp&&K(new Date(t[0].timestamp))}).catch(()=>{})},[]);const z=[...new Set(c.map(t=>t.expiry))].sort(),u=new Map;c.filter(t=>t.expiry===n).forEach(t=>{u.has(t.strike)||u.set(t.strike,{});const a=u.get(t.strike);t.type==="CE"?a.call=t:a.put=t});const b=[...u.keys()].sort((t,a)=>t-a),$=b.length?b.reduce((t,a)=>Math.abs(a-f)<Math.abs(t-f)?a:t):0,p=u.get($),E=(((B=p==null?void 0:p.call)==null?void 0:B.close)||0)+(((R=p==null?void 0:p.put)==null?void 0:R.close)||0),O=(()=>{var a,o;const t=[(a=p==null?void 0:p.call)==null?void 0:a.iv,(o=p==null?void 0:p.put)==null?void 0:o.iv].filter(i=>typeof i=="number"&&i>0);return t.length?t.reduce((i,s)=>i+s,0)/t.length:0})();let j=0,F=0,w=0,_=0;b.forEach(t=>{var i,s,h,r;const a=((s=(i=u.get(t))==null?void 0:i.call)==null?void 0:s.oi)||0,o=((r=(h=u.get(t))==null?void 0:h.put)==null?void 0:r.oi)||0;j+=a,F+=o,a>w&&(w=a),o>_&&(_=o)});const te=j>0?F/j:0,oe=b.reduce((t,a)=>{const o=b.reduce((i,s)=>{var r,y;const h=u.get(s);return i+(((r=h.call)==null?void 0:r.oi)||0)*Math.max(0,s-a)+(((y=h.put)==null?void 0:y.oi)||0)*Math.max(0,a-s)},0);return o<t.loss?{strike:a,loss:o}:t},{strike:b[0]||0,loss:1/0}).strike,ie=((U=D.current)==null?void 0:U.clientWidth)||400,ae=z.length*P-Y,A=Math.max(0,ae-ie);function v(t,a,o){return Z.some(i=>i.expiry===n&&i.strike===t&&i.optionType===a&&i.type===o)}function N(t,a,o,i){ee(s=>{const h=s.findIndex(r=>r.expiry===n&&r.strike===t&&r.optionType===a&&r.type===o);return h>=0?s.filter((r,y)=>y!==h):[...s,{expiry:n,strike:t,optionType:a,type:o,premium:i,quantity:1}]})}return e.jsxs("div",{className:"os-page",style:{margin:"-24px",padding:"24px"},children:[e.jsx("style",{children:de}),e.jsxs("div",{className:"os-main",children:[e.jsxs("div",{className:"oc-panel",children:[e.jsxs("div",{className:"oc-header",children:[e.jsx("span",{className:"oc-header-left",children:"🗂 Add ons ▼"}),e.jsxs("span",{className:"oc-title",children:["Option Chain",e.jsx("span",{className:"oc-expiry-label",children:n?` (${J(n)})`:""}),d&&e.jsx("span",{className:"oc-market-time",children:d.toLocaleTimeString("en-IN",{hour:"2-digit",minute:"2-digit"})})]}),e.jsx("button",{className:"oc-hide-btn",type:"button",children:"⟪ Hide"})]}),e.jsxs("div",{className:"expiry__viewer expiry-carousel",children:[e.jsx("button",{type:"button",className:"expiry-carousel__arrow",disabled:C<=0,onClick:()=>M(t=>Math.max(0,t-P)),children:"‹"}),e.jsx("div",{className:"expiry-carousel__viewport",ref:D,children:e.jsx("div",{className:"expiry-carousel__track",style:{transform:`translateX(-${C}px)`},children:z.map((t,a)=>{const o=he(t,a);return e.jsxs("div",{className:`expiry_button${t===n?" selected__oc__expiry":""}`,onClick:()=>x(t),children:[e.jsx("button",{type:"button",children:J(t)}),e.jsxs("div",{className:"expiry_indicator",children:["(",o,")"]})]},t)})})}),e.jsx("button",{type:"button",className:"expiry-carousel__arrow",disabled:C>=A,onClick:()=>M(t=>Math.min(A,t+P)),children:"›"})]}),e.jsxs("div",{className:"oc_filter",children:[e.jsxs("div",{children:["ATM IV: ",e.jsx("span",{style:{color:"#464646",fontWeight:500},children:O>0?(O*100).toFixed(0):"—"})]}),e.jsxs("div",{children:[e.jsx("span",{style:{marginRight:6},children:"ATM:"}),e.jsx("div",{className:"squar__off__type",children:["Spot","Fut","SynthFut"].map(t=>e.jsxs("label",{className:`checkbox-container${X===t?" radio__active":""}`,onClick:()=>Q(t),children:[e.jsx("div",{className:"checkbox-label",children:e.jsx("span",{className:"checkbox-custom radio__type"})}),e.jsx("div",{className:"checkbox__title",children:t==="SynthFut"?"Synth Fut":t})]},t))})]}),e.jsxs("div",{children:["Straddle Prem: ",e.jsx("span",{style:{color:"#464646",fontWeight:500},children:E>0?E.toFixed(2):"—"})]})]}),e.jsxs("div",{className:"oc_filter",children:[e.jsxs("div",{children:["PCR: ",e.jsx("span",{style:{color:"#464646",fontWeight:500},children:te.toFixed(2)})]}),e.jsxs("div",{className:"total_oi",children:[e.jsx("div",{className:"total_call_oi",children:S(j)}),e.jsx("div",{className:"oi-progress",children:e.jsx("div",{className:"oi-progress-call"})}),e.jsx("span",{children:"OI"}),e.jsx("div",{className:"oi-progress",children:e.jsx("div",{className:"oi-progress-put"})}),e.jsx("div",{className:"total_put_oi",children:S(F)})]}),e.jsxs("div",{children:["Max Pain: ",e.jsx("span",{style:{color:"#464646",fontWeight:500},children:oe||"—"})]})]}),e.jsx("div",{className:"oc-custom-table",children:e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsxs("th",{className:"oc-call-head",children:["Call LTP ",e.jsx("span",{className:"oc-head-delta",children:"(Δ)"})]}),e.jsx("th",{className:"oc-call-oi-head",children:"Call OI"}),e.jsx("th",{className:"oc-iv-head",children:"IV"}),e.jsx("th",{className:"oc-strike-head",children:"Strike"}),e.jsx("th",{className:"oc-put-oi-head",children:"Put OI"}),e.jsxs("th",{className:"oc-put-head",children:["Put LTP ",e.jsx("span",{className:"oc-head-delta",children:"(Δ)"})]})]})}),e.jsx("tbody",{children:b.map(t=>{const a=u.get(t),{call:o,put:i}=a,s=t===$,h=t<f,r=t>f,y=(o==null?void 0:o.oi)||0,W=(i==null?void 0:i.oi)||0,ce=w>0?(y/w*100).toFixed(1):"0",se=_>0?(W/_*100).toFixed(1):"0",T=(o==null?void 0:o.iv)||0,I=(i==null?void 0:i.iv)||0,L=T&&I?(T+I)/2:T||I,H=v(t,"Call","Buy"),V=v(t,"Call","Sell"),G=v(t,"Put","Buy"),q=v(t,"Put","Sell"),ne=H||V,le=G||q;let k="oc-row";return s?k+=" oc-atm":h?k+=" oc-call-itm":r&&(k+=" oc-put-itm"),e.jsxs("tr",{className:k,children:[e.jsx("td",{className:"oc-call",children:e.jsxs("div",{className:"oc-cell-inner",children:[e.jsxs("div",{className:`oc-actions action_button${ne?" has-active":""}`,children:[e.jsx("button",{type:"button",className:`buy_button${H?" oc-btn-active":""}`,onClick:()=>N(t,"Call","Buy",(o==null?void 0:o.close)||0),children:"B"}),e.jsx("button",{type:"button",className:`sell_button${V?" oc-btn-active":""}`,onClick:()=>N(t,"Call","Sell",(o==null?void 0:o.close)||0),children:"S"})]}),o?e.jsxs(e.Fragment,{children:[e.jsx("span",{className:"oc-ltp",children:o.close.toFixed(2)}),e.jsxs("span",{className:"oc-delta",children:["(",o.delta!=null?o.delta.toFixed(2):"—",")"]})]}):e.jsx("span",{className:"oc-empty",children:"—"})]})}),e.jsxs("td",{className:"oc-call-oi",children:[e.jsx("div",{className:"oc-oi-value oc-oi-call",children:S(y)}),e.jsx("div",{className:"oc-oi-bar-wrap",children:e.jsx("div",{className:"oc-oi-bar oc-oi-bar-call",style:{width:`${ce}%`}})})]}),e.jsx("td",{className:"oc-iv",children:L?e.jsxs("span",{className:"oc-iv-value",children:[(L*100).toFixed(2),"%"]}):e.jsx("span",{className:"oc-empty",children:"—"})}),e.jsx("td",{className:"oc-strike",children:t}),e.jsxs("td",{className:"oc-put-oi",children:[e.jsx("div",{className:"oc-oi-value oc-oi-put",children:S(W)}),e.jsx("div",{className:"oc-oi-bar-wrap",children:e.jsx("div",{className:"oc-oi-bar oc-oi-bar-put",style:{width:`${se}%`}})})]}),e.jsx("td",{className:"oc-put",children:e.jsxs("div",{className:"oc-cell-inner",children:[i?e.jsxs(e.Fragment,{children:[e.jsx("span",{className:"oc-ltp",children:i.close.toFixed(2)}),e.jsxs("span",{className:"oc-delta",children:["(",i.delta!=null?i.delta.toFixed(2):"—",")"]})]}):e.jsx("span",{className:"oc-empty",children:"—"}),e.jsxs("div",{className:`oc-actions action_button${le?" has-active":""}`,children:[e.jsx("button",{type:"button",className:`buy_button${G?" oc-btn-active":""}`,onClick:()=>N(t,"Put","Buy",(i==null?void 0:i.close)||0),children:"B"}),e.jsx("button",{type:"button",className:`sell_button${q?" oc-btn-active":""}`,onClick:()=>N(t,"Put","Sell",(i==null?void 0:i.close)||0),children:"S"})]})]})})]},t)})})]})})]}),e.jsx("div",{className:"os-right-panel",children:e.jsx("p",{children:"Payoff chart coming soon…"})})]})]})}export{ue as default};
