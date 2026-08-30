import{r as o,j as e,P as ae}from"./index-Er_BhVY7.js";const Y="https://algo.finedgealgo.com/algo",M={NIFTY:65,BANKNIFTY:30,FINNIFTY:60,MIDCPNIFTY:120,SENSEX:20,BANKEX:30},re=["NIFTY","BANKNIFTY","FINNIFTY","MIDCPNIFTY","SENSEX","BANKEX"],se=[{value:"kite",label:"Zerodha (Kite)"},{value:"flattrade",label:"Flattrade"}],ne=[{value:"NRML",label:"NRML (Overnight)"},{value:"MIS",label:"MIS (Intraday)"}];function ie(){return Math.random().toString(36).slice(2,10)}function f(a){if(!isFinite(a)||isNaN(a))return"₹0";const i=Math.round(a),r=Math.abs(i).toString();let u="";const c=r.slice(-3),p=r.slice(0,-3);return p.length>0?u=p.replace(/\B(?=(\d{2})+(?!\d))/g,",")+","+c:u=c,(i<0?"-₹":"₹")+u}function I(a){const i=typeof a=="number"?a:parseFloat(String(a));return!isFinite(i)||isNaN(i)?"":Number.isInteger(i)?String(Math.trunc(i)):String(i)}function q(a){return!isFinite(a)||isNaN(a)||a<=0?"":Number.isInteger(a)?String(Math.trunc(a)):a.toFixed(2)}function le(a){const i=String(a||"").trim();if(!i)return"";const r=new Date(i);if(Number.isNaN(r.getTime()))return i;const u=["jan","feb","mar","apr","may","jun","jul","aug","sep","oct","nov","dec"];return`${String(r.getDate()).padStart(2,"0")}${u[r.getMonth()]}${r.getFullYear()}`}function oe(a,i){return a.replace(/(^|[{}])\s*([^@{}][^{]*)\{/g,(r,u,c)=>{const p=c.split(",").map(x=>x.trim()).filter(Boolean).map(x=>x.startsWith(i)?x:`${i} ${x}`).join(", ");return p?`${u}
  ${p} {`:r})}const D=oe(`
  * { box-sizing: border-box; }

  .mc-page {
    min-height: 100vh;
    background: #f4f6fa;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
    color: #1a1a2e;
    padding: 24px;
  }

  .mc-header {
    margin-bottom: 20px;
  }

  .mc-title {
    font-size: 20px;
    font-weight: 700;
    color: #1a1a2e;
    margin: 0 0 4px 0;
  }

  .mc-subtitle {
    font-size: 13px;
    color: #64748b;
    margin: 0;
  }

  /* ── Main layout ── */
  .mc-layout {
    display: flex;
    gap: 20px;
    align-items: flex-start;
  }

  /* ── Form panel ── */
  .mc-form-panel {
    flex: 0 0 340px;
    background: #fff;
    border: 1px solid #e2e8f0;
    border-radius: 10px;
    padding: 20px;
    box-shadow: 0 1px 4px rgba(0,0,0,.06);
  }

  .mc-panel-title {
    font-size: 14px;
    font-weight: 600;
    color: #374151;
    margin: 0 0 16px 0;
    padding-bottom: 12px;
    border-bottom: 1px solid #f1f5f9;
  }

  .mc-field {
    margin-bottom: 12px;
  }

  .mc-label {
    display: block;
    font-size: 12px;
    font-weight: 500;
    color: #6b7280;
    margin-bottom: 5px;
    text-transform: uppercase;
    letter-spacing: 0.4px;
  }

  .mc-select, .mc-input {
    width: 100%;
    height: 36px;
    padding: 0 10px;
    border: 1px solid #d1d5db;
    border-radius: 6px;
    font-size: 13px;
    color: #1f2937;
    background: #fff;
    outline: none;
    transition: border-color .15s;
    appearance: none;
    -webkit-appearance: none;
  }

  .mc-select {
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20' fill='%236b7280'%3E%3Cpath fill-rule='evenodd' d='M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z' clip-rule='evenodd'/%3E%3C/svg%3E");
    background-repeat: no-repeat;
    background-position: right 8px center;
    background-size: 16px;
    padding-right: 28px;
    cursor: pointer;
  }

  .mc-select:focus, .mc-input:focus {
    border-color: #3b82f6;
    box-shadow: 0 0 0 3px rgba(59,130,246,.15);
  }

  .mc-input-hint {
    font-size: 11px;
    color: #94a3b8;
    margin-top: 4px;
  }

  /* ── Side radio ── */
  .mc-side-group {
    display: flex;
    gap: 0;
    border: 1px solid #d1d5db;
    border-radius: 6px;
    overflow: hidden;
  }

  .mc-side-btn {
    flex: 1;
    height: 36px;
    border: none;
    background: #fff;
    font-size: 13px;
    font-weight: 500;
    cursor: pointer;
    transition: all .15s;
    color: #6b7280;
  }

  .mc-side-btn:first-child { border-right: 1px solid #d1d5db; }

  .mc-side-btn.buy-active {
    background: #dcfce7;
    color: #16a34a;
  }

  .mc-side-btn.sell-active {
    background: #fee2e2;
    color: #dc2626;
  }

  /* ── Form actions ── */
  .mc-form-actions {
    display: flex;
    gap: 8px;
    margin-top: 16px;
  }

  .mc-btn-add {
    flex: 1;
    height: 38px;
    background: #3b82f6;
    color: #fff;
    border: none;
    border-radius: 6px;
    font-size: 13px;
    font-weight: 600;
    cursor: pointer;
    transition: background .15s;
  }

  .mc-btn-add:hover { background: #2563eb; }

  .mc-btn-reset {
    height: 38px;
    padding: 0 16px;
    background: #fff;
    color: #6b7280;
    border: 1px solid #d1d5db;
    border-radius: 6px;
    font-size: 13px;
    font-weight: 500;
    cursor: pointer;
    transition: all .15s;
  }

  .mc-btn-reset:hover {
    background: #f8fafc;
    border-color: #94a3b8;
    color: #374151;
  }

  /* ── Right column ── */
  .mc-right-col {
    flex: 1;
    min-width: 0;
    display: flex;
    flex-direction: column;
    gap: 16px;
  }

  /* ── Summary box ── */
  .mc-summary-box {
    background: #fff;
    border: 1px solid #e2e8f0;
    border-radius: 10px;
    padding: 20px;
    box-shadow: 0 1px 4px rgba(0,0,0,.06);
  }

  .mc-summary-title {
    font-size: 14px;
    font-weight: 600;
    color: #374151;
    margin: 0 0 16px 0;
    padding-bottom: 12px;
    border-bottom: 1px solid #f1f5f9;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .mc-summary-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 12px;
    margin-bottom: 16px;
  }

  .mc-stat-card {
    background: #f8faff;
    border: 1px solid #dbeafe;
    border-radius: 8px;
    padding: 12px 14px;
  }

  .mc-stat-label {
    font-size: 11px;
    color: #6b7280;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    margin-bottom: 4px;
  }

  .mc-stat-value {
    font-size: 18px;
    font-weight: 700;
    color: #2563eb;
  }

  .mc-stat-card.total {
    background: #eff6ff;
    border-color: #bfdbfe;
    grid-column: span 2;
  }

  .mc-stat-card.total .mc-stat-value {
    font-size: 22px;
    color: #1d4ed8;
  }

  .mc-stat-card.benefit {
    background: #f0fdf4;
    border-color: #bbf7d0;
  }

  .mc-stat-card.benefit .mc-stat-value {
    color: #16a34a;
  }

  .mc-stat-card.net {
    background: #fefce8;
    border-color: #fde68a;
  }

  .mc-stat-card.net .mc-stat-value {
    color: #b45309;
  }

  /* ── Calculate button ── */
  .mc-calc-btn {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 6px;
    height: 38px;
    padding: 0 20px;
    background: #3b82f6;
    color: #fff;
    border: none;
    border-radius: 6px;
    font-size: 13px;
    font-weight: 600;
    cursor: pointer;
    transition: background .15s;
  }

  .mc-calc-btn:hover { background: #2563eb; }

  .mc-calc-btn:disabled {
    background: #93c5fd;
    cursor: not-allowed;
  }

  .mc-calc-btn.loading {
    background: #60a5fa;
    cursor: wait;
  }

  /* ── Table ── */
  .mc-table-panel {
    background: #fff;
    border: 1px solid #e2e8f0;
    border-radius: 10px;
    padding: 20px;
    box-shadow: 0 1px 4px rgba(0,0,0,.06);
    overflow-x: auto;
  }

  .mc-table-title {
    font-size: 14px;
    font-weight: 600;
    color: #374151;
    margin: 0 0 16px 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .mc-legs-table {
    width: 100%;
    border-collapse: collapse;
    font-size: 12.5px;
    min-width: 900px;
  }

  .mc-legs-table th {
    text-align: left;
    padding: 8px 10px;
    background: #f8fafc;
    border-bottom: 2px solid #e2e8f0;
    font-weight: 600;
    font-size: 11px;
    color: #6b7280;
    text-transform: uppercase;
    letter-spacing: 0.4px;
    white-space: nowrap;
  }

  .mc-legs-table td {
    padding: 8px 10px;
    border-bottom: 1px solid #f1f5f9;
    color: #374151;
    vertical-align: middle;
  }

  .mc-legs-table tr:hover td {
    background: #f8fafc;
  }

  .mc-legs-table tr:last-child td {
    border-bottom: none;
  }

  .mc-td-input {
    width: 80px;
    height: 28px;
    padding: 0 7px;
    border: 1px solid #d1d5db;
    border-radius: 5px;
    font-size: 12px;
    color: #1f2937;
    background: #fff;
    outline: none;
  }

  .mc-td-input:focus {
    border-color: #3b82f6;
    box-shadow: 0 0 0 2px rgba(59,130,246,.15);
  }

  .mc-badge {
    display: inline-block;
    padding: 2px 7px;
    border-radius: 4px;
    font-size: 11px;
    font-weight: 600;
    text-transform: uppercase;
  }

  .mc-badge-buy { background: #dcfce7; color: #16a34a; }
  .mc-badge-sell { background: #fee2e2; color: #dc2626; }
  .mc-badge-ce { background: #dbeafe; color: #2563eb; }
  .mc-badge-pe { background: #fce7f3; color: #be185d; }
  .mc-badge-fut { background: #fef9c3; color: #a16207; }

  .mc-remove-btn {
    width: 24px;
    height: 24px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    border: 1px solid #fca5a5;
    border-radius: 4px;
    background: #fff;
    color: #ef4444;
    font-size: 15px;
    cursor: pointer;
    line-height: 1;
    transition: all .15s;
  }

  .mc-remove-btn:hover {
    background: #fee2e2;
    border-color: #ef4444;
  }

  .mc-empty-state {
    text-align: center;
    padding: 32px 16px;
    color: #94a3b8;
    font-size: 13px;
  }

  .mc-empty-icon {
    font-size: 32px;
    margin-bottom: 8px;
  }

  /* ── Error banner ── */
  .mc-error {
    background: #fef2f2;
    border: 1px solid #fca5a5;
    border-radius: 8px;
    padding: 10px 14px;
    font-size: 13px;
    color: #dc2626;
  }

  /* ── Calc bottom row ── */
  .mc-calc-row {
    display: flex;
    align-items: center;
    gap: 12px;
    flex-wrap: wrap;
  }

  .mc-legs-count {
    font-size: 12px;
    color: #94a3b8;
  }

  /* ── Dark mode ── */
  @media (prefers-color-scheme: dark) {
    .mc-page { background: #0f172a; color: #e2e8f0; }
    .mc-title { color: #f1f5f9; }
    .mc-form-panel, .mc-summary-box, .mc-table-panel {
      background: #1e293b;
      border-color: #334155;
    }
    .mc-panel-title, .mc-summary-title, .mc-table-title { color: #e2e8f0; }
    .mc-label { color: #94a3b8; }
    .mc-select, .mc-input {
      background: #0f172a;
      border-color: #334155;
      color: #e2e8f0;
      background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20' fill='%2394a3b8'%3E%3Cpath fill-rule='evenodd' d='M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z' clip-rule='evenodd'/%3E%3C/svg%3E");
    }
    .mc-select:focus, .mc-input:focus {
      border-color: #60a5fa;
      box-shadow: 0 0 0 3px rgba(96,165,250,.15);
    }
    .mc-side-btn { background: #0f172a; color: #94a3b8; border-color: #334155; }
    .mc-side-btn:first-child { border-color: #334155; }
    .mc-stat-card { background: #0f172a; border-color: #334155; }
    .mc-stat-card.total { background: #1e3a5f; border-color: #3b82f6; }
    .mc-stat-card.benefit { background: #0f2a1a; border-color: #166534; }
    .mc-stat-card.net { background: #2a1f0a; border-color: #b45309; }
    .mc-legs-table th { background: #0f172a; border-color: #334155; color: #64748b; }
    .mc-legs-table td { color: #cbd5e1; border-color: #1e293b; }
    .mc-legs-table tr:hover td { background: #0f172a; }
    .mc-td-input { background: #0f172a; border-color: #334155; color: #e2e8f0; }
    .mc-btn-reset { background: #1e293b; border-color: #334155; color: #94a3b8; }
    .mc-btn-reset:hover { background: #0f172a; }
    .mc-remove-btn { background: #1e293b; }
  }

  @media (max-width: 1100px) {
    .mc-layout { flex-direction: column; }
    .mc-form-panel { flex: unset; width: 100%; }
    .mc-summary-grid { grid-template-columns: repeat(3, 1fr); }
    .mc-stat-card.total { grid-column: span 3; }
  }

  @media (max-width: 640px) {
    .mc-page { padding: 12px; }
    .mc-summary-grid { grid-template-columns: 1fr 1fr; }
    .mc-stat-card.total { grid-column: span 2; }
  }
`,".mc-page");function K(){return{underlying:"NIFTY",product:"Options",optionType:"CE",expiry:"",strike:"",spot:"",ltp:"",quantity:"1",side:"SELL"}}function de(){const[a,i]=o.useState(K()),[r,u]=o.useState([]),[c,p]=o.useState(null),[x,L]=o.useState(!1),[_,N]=o.useState(""),[k,W]=o.useState("kite"),[S,H]=o.useState("NRML"),[v,E]=o.useState([]),[w,P]=o.useState(!1),[R,F]=o.useState(""),X=o.useRef(null);o.useEffect(()=>{const t=document.createElement("style");return t.textContent=D,document.head.appendChild(t),X.current=t,()=>{t.remove()}},[]);const y=a.product==="Futures",A=Array.from(new Set(v.map(t=>t.expiry))).sort(),B=Array.from(new Set(v.filter(t=>t.expiry===a.expiry&&t.option_type===a.optionType).map(t=>I(t.strike)).filter(Boolean))).sort((t,l)=>parseFloat(t)-parseFloat(l)),O=o.useCallback(async t=>{const l=String(t||"").trim().toUpperCase();if(!l){E([]),F("");return}P(!0),F("");try{const s=await fetch(`${Y}/get-option-chain/${encodeURIComponent(l)}`);if(!s.ok){const n=await s.json().catch(()=>({}));throw new Error(n.detail||`HTTP ${s.status}`)}const m=await s.json(),g=Array.isArray(m.option_chain)?m.option_chain:[];E(g),i(n=>{const h=Array.from(new Set(g.map(z=>z.expiry))).sort(),j=h.includes(n.expiry)?n.expiry:h[0]||"",d=typeof m.spot_price=="number"&&isFinite(m.spot_price)&&m.spot_price>0?q(m.spot_price):n.spot;return n.expiry===j&&n.spot===d?n:{...n,expiry:j,spot:d}})}catch(s){E([]),F(s instanceof Error?s.message:String(s))}finally{P(!1)}},[]);o.useEffect(()=>{O(a.underlying)},[O,a.underlying]),o.useEffect(()=>{if(y){i(t=>t.strike?{...t,strike:""}:t);return}if(!v.length){i(t=>!t.expiry&&!t.strike&&!t.ltp?t:{...t,expiry:"",strike:"",ltp:""});return}i(t=>{const l=Array.from(new Set(v.map(d=>d.expiry))).sort(),s=l.includes(t.expiry)?t.expiry:l[0]||"",m=v.filter(d=>d.expiry===s&&d.option_type===t.optionType).sort((d,z)=>d.strike-z.strike),g=Array.from(new Set(m.map(d=>I(d.strike)).filter(Boolean))),n=g.includes(t.strike)?t.strike:g[0]||"",h=m.find(d=>I(d.strike)===n),j=h?q(h.ltp):"";return t.expiry===s&&t.strike===n&&t.ltp===j?t:{...t,expiry:s,strike:n,ltp:j}})},[y,v,a.expiry,a.optionType,a.strike]);const b=(t,l)=>{i(s=>({...s,[t]:l}))},Z=()=>{const t={id:ie(),underlying:a.underlying,instrument_type:y?"FUT":a.optionType,expiry:a.expiry.trim().toUpperCase(),strike:y?0:parseFloat(a.strike)||0,lot_size:M[a.underlying]??65,quantity:parseInt(a.quantity)||1,side:a.side,spot:a.spot,ltp:a.ltp};u(l=>[...l,t]),p(null),N("")},Q=()=>{i(K()),N("")},G=t=>{u(l=>l.filter(s=>s.id!==t)),p(null),N("")},U=(t,l,s)=>{u(m=>m.map(g=>g.id===t?{...g,[l]:s}:g)),p(null)},T=o.useRef(!1),C=o.useCallback(async t=>{const l=t??r;if(l.length!==0){L(!0),N("");try{const s={broker:k,product:S,legs:l.map(n=>({underlying:n.underlying,instrument_type:n.instrument_type,expiry:n.expiry,strike:n.strike,transaction_type:n.side,quantity:n.quantity,lot_size:n.lot_size,ltp:parseFloat(String(n.ltp))||0,spot:parseFloat(String(n.spot))||0}))},m=await fetch(`${Y}/margin/calculate`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(s)});if(!m.ok){const n=await m.json().catch(()=>({}));throw new Error(n.detail||`HTTP ${m.status}`)}const g=await m.json();p(g),T.current=!0,u(n=>n.map((h,j)=>{const d=g.legs[j];return d?{...h,iv:d.implied_vol,span:d.span_contribution,exposure:d.exposure_margin,total:d.total_margin}:h}))}catch(s){N(s instanceof Error?s.message:String(s))}finally{L(!1)}}},[r]),J=o.useRef(0);o.useEffect(()=>{if(T.current){T.current=!1;return}if(r.length===0){p(null);return}C(r),J.current=r.length},[r]),o.useEffect(()=>{r.length>0&&C(r)},[k,S]);const V=r.reduce((t,l)=>t+(l.total??0),0),$=c?Math.max(0,V-c.total_margin):0,ee=t=>t==="CE"?e.jsx("span",{className:"mc-badge mc-badge-ce",children:"CE"}):t==="PE"?e.jsx("span",{className:"mc-badge mc-badge-pe",children:"PE"}):e.jsx("span",{className:"mc-badge mc-badge-fut",children:"FUT"}),te=t=>e.jsx("span",{className:`mc-badge ${t==="BUY"?"mc-badge-buy":"mc-badge-sell"}`,children:t});return e.jsxs(e.Fragment,{children:[e.jsx(ae,{title:"Margin Calculator",description:"SPAN Margin Calculator for F&O positions"}),e.jsx("style",{dangerouslySetInnerHTML:{__html:D}}),e.jsxs("div",{className:"mc-page",children:[e.jsxs("div",{className:"mc-header",children:[e.jsx("h1",{className:"mc-title",children:"SPAN Margin Calculator"}),e.jsx("p",{className:"mc-subtitle",children:"NSE SPAN margin — same algorithm for Zerodha (Kite) and Flattrade · NRML identical · MIS varies by broker"})]}),e.jsxs("div",{style:{display:"flex",gap:12,marginBottom:16,flexWrap:"wrap"},children:[e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8},children:[e.jsx("label",{className:"mc-label",style:{margin:0,whiteSpace:"nowrap"},children:"Broker"}),e.jsx("select",{className:"mc-select",style:{width:170},value:k,onChange:t=>{W(t.target.value),p(null)},children:se.map(t=>e.jsx("option",{value:t.value,children:t.label},t.value))})]}),e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8},children:[e.jsx("label",{className:"mc-label",style:{margin:0,whiteSpace:"nowrap"},children:"Product"}),e.jsx("select",{className:"mc-select",style:{width:180},value:S,onChange:t=>{H(t.target.value),p(null)},children:ne.map(t=>e.jsx("option",{value:t.value,children:t.label},t.value))})]}),S==="MIS"&&e.jsxs("div",{style:{display:"flex",alignItems:"center",background:"#fef9c3",border:"1px solid #fde68a",borderRadius:6,padding:"4px 10px",fontSize:12,color:"#92400e",gap:6},children:[e.jsx("span",{children:"⚡"}),e.jsxs("span",{children:["MIS: ~","4–5x"," leverage · intraday only"]})]})]}),e.jsxs("div",{className:"mc-layout",children:[e.jsxs("div",{className:"mc-form-panel",children:[e.jsx("p",{className:"mc-panel-title",children:"Add Position"}),e.jsxs("div",{className:"mc-field",children:[e.jsx("label",{className:"mc-label",children:"Underlying"}),e.jsx("select",{className:"mc-select",value:a.underlying,onChange:t=>b("underlying",t.target.value),children:re.map(t=>e.jsx("option",{value:t,children:t},t))})]}),e.jsxs("div",{className:"mc-field",children:[e.jsx("label",{className:"mc-label",children:"Product"}),e.jsxs("select",{className:"mc-select",value:a.product,onChange:t=>b("product",t.target.value),children:[e.jsx("option",{value:"Options",children:"Options"}),e.jsx("option",{value:"Futures",children:"Futures"})]})]}),!y&&e.jsxs("div",{className:"mc-field",children:[e.jsx("label",{className:"mc-label",children:"Option Type"}),e.jsxs("select",{className:"mc-select",value:a.optionType,onChange:t=>b("optionType",t.target.value),children:[e.jsx("option",{value:"CE",children:"CE — Call"}),e.jsx("option",{value:"PE",children:"PE — Put"})]})]}),e.jsxs("div",{className:"mc-field",children:[e.jsx("label",{className:"mc-label",children:"Expiry"}),e.jsxs("select",{className:"mc-select",value:a.expiry,onChange:t=>b("expiry",t.target.value),disabled:w||A.length===0,children:[e.jsx("option",{value:"",children:w?"Loading expiry...":"Select expiry"}),A.map(t=>e.jsx("option",{value:t,children:le(t)},t))]}),R&&e.jsx("p",{className:"mc-input-hint",style:{color:"#dc2626"},children:R})]}),!y&&e.jsxs("div",{className:"mc-field",children:[e.jsx("label",{className:"mc-label",children:"Strike Price"}),e.jsxs("select",{className:"mc-select",value:a.strike,onChange:t=>b("strike",t.target.value),disabled:w||!a.expiry||B.length===0,children:[e.jsx("option",{value:"",children:w?"Loading strikes...":"Select strike"}),B.map(t=>e.jsx("option",{value:t,children:t},t))]})]}),e.jsxs("div",{className:"mc-field",children:[e.jsx("label",{className:"mc-label",children:"Spot Price"}),e.jsx("input",{className:"mc-input",type:"number",placeholder:"Underlying index/spot price",value:a.spot,onChange:t=>b("spot",t.target.value)})]}),e.jsxs("div",{className:"mc-field",children:[e.jsx("label",{className:"mc-label",children:"LTP"}),e.jsx("input",{className:"mc-input",type:"number",placeholder:y?"Futures price":"Option premium",value:a.ltp,onChange:t=>b("ltp",t.target.value)})]}),e.jsxs("div",{className:"mc-field",children:[e.jsx("label",{className:"mc-label",children:"Net Quantity (Lots)"}),e.jsx("input",{className:"mc-input",type:"number",min:"1",value:a.quantity,onChange:t=>b("quantity",t.target.value)}),e.jsxs("p",{className:"mc-input-hint",children:["Lot size: ",M[a.underlying]??"—","  |  Total qty:"," ",(parseInt(a.quantity)||1)*(M[a.underlying]??1)]})]}),e.jsxs("div",{className:"mc-field",children:[e.jsx("label",{className:"mc-label",children:"Side"}),e.jsxs("div",{className:"mc-side-group",children:[e.jsx("button",{type:"button",className:`mc-side-btn${a.side==="BUY"?" buy-active":""}`,onClick:()=>b("side","BUY"),children:"Buy"}),e.jsx("button",{type:"button",className:`mc-side-btn${a.side==="SELL"?" sell-active":""}`,onClick:()=>b("side","SELL"),children:"Sell"})]})]}),e.jsxs("div",{className:"mc-form-actions",children:[e.jsx("button",{type:"button",className:"mc-btn-add",onClick:Z,children:"+ Add"}),e.jsx("button",{type:"button",className:"mc-btn-reset",onClick:Q,children:"Reset Form"})]})]}),e.jsxs("div",{className:"mc-right-col",children:[e.jsxs("div",{className:"mc-summary-box",children:[e.jsxs("div",{className:"mc-summary-title",children:[e.jsx("span",{children:"Combined Margin Requirements"}),r.length>0&&e.jsx("button",{type:"button",className:`mc-calc-btn${x?" loading":""}`,onClick:()=>C(),disabled:x||r.length===0,children:x?e.jsxs(e.Fragment,{children:[e.jsx("svg",{className:"mc-spin",style:{animation:"spin 1s linear infinite",display:"inline-block"},xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",width:"14",height:"14",children:e.jsx("circle",{cx:"12",cy:"12",r:"10",stroke:"currentColor",strokeWidth:"3",strokeDasharray:"30 70"})}),"Calculating…"]}):"Calculate"})]}),_&&e.jsx("div",{className:"mc-error",style:{marginBottom:14},children:_}),e.jsxs("div",{className:"mc-summary-grid",children:[e.jsxs("div",{className:"mc-stat-card",children:[e.jsx("div",{className:"mc-stat-label",children:"SPAN Margin"}),e.jsx("div",{className:"mc-stat-value",children:c?f(c.span_margin):"—"})]}),e.jsxs("div",{className:"mc-stat-card",children:[e.jsx("div",{className:"mc-stat-label",children:"Exposure Margin"}),e.jsx("div",{className:"mc-stat-value",children:c?f(c.exposure_margin):"—"})]}),e.jsxs("div",{className:"mc-stat-card",children:[e.jsx("div",{className:"mc-stat-label",children:"Premium Receivable"}),e.jsx("div",{className:"mc-stat-value",children:c?f(c.premium_received):"—"})]}),e.jsxs("div",{className:"mc-stat-card net",children:[e.jsx("div",{className:"mc-stat-label",children:"Net Margin"}),e.jsx("div",{className:"mc-stat-value",children:c?f(c.net_margin):"—"})]}),e.jsxs("div",{className:"mc-stat-card total",children:[e.jsx("div",{className:"mc-stat-label",children:"Total Margin Required"}),e.jsx("div",{className:"mc-stat-value",children:c?f(c.total_margin):"—"})]}),c&&$>0&&e.jsxs("div",{className:"mc-stat-card benefit",style:{gridColumn:"span 2"},children:[e.jsx("div",{className:"mc-stat-label",children:"Margin Benefit (Hedge)"}),e.jsx("div",{className:"mc-stat-value",children:f($)})]})]}),r.length===0&&e.jsx("p",{style:{fontSize:12,color:"#94a3b8",textAlign:"center",marginTop:8},children:"Add one or more legs to calculate margin"})]}),e.jsxs("div",{className:"mc-table-panel",children:[e.jsxs("div",{className:"mc-table-title",children:[e.jsx("span",{children:"Positions Added"}),r.length>0&&e.jsxs("span",{className:"mc-legs-count",children:[r.length," leg",r.length!==1?"s":""]})]}),r.length===0?e.jsxs("div",{className:"mc-empty-state",children:[e.jsx("div",{className:"mc-empty-icon",children:"📋"}),e.jsx("p",{children:"No positions added yet"}),e.jsx("p",{style:{fontSize:11,marginTop:4},children:"Use the form on the left to add legs"})]}):e.jsx("div",{style:{overflowX:"auto"},children:e.jsxs("table",{className:"mc-legs-table",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"#"}),e.jsx("th",{children:"Underlying"}),e.jsx("th",{children:"Type"}),e.jsx("th",{children:"Expiry"}),e.jsx("th",{children:"Strike"}),e.jsx("th",{children:"Qty"}),e.jsx("th",{children:"Side"}),e.jsx("th",{children:"Spot"}),e.jsx("th",{children:"LTP"}),e.jsx("th",{children:"IV %"}),e.jsx("th",{children:"SPAN"}),e.jsx("th",{children:"Exposure"}),e.jsx("th",{children:"Total"}),e.jsx("th",{children:"Remove"})]})}),e.jsx("tbody",{children:r.map((t,l)=>e.jsxs("tr",{children:[e.jsx("td",{style:{color:"#94a3b8",fontSize:11},children:l+1}),e.jsx("td",{style:{fontWeight:600},children:t.underlying}),e.jsx("td",{children:ee(t.instrument_type)}),e.jsx("td",{style:{fontFamily:"monospace",fontSize:11},children:t.expiry||"—"}),e.jsx("td",{style:{fontFamily:"monospace"},children:t.instrument_type==="FUT"?"—":t.strike||"—"}),e.jsxs("td",{children:[t.quantity,e.jsxs("span",{style:{color:"#94a3b8",fontSize:10,marginLeft:3},children:["×",t.lot_size]})]}),e.jsx("td",{children:te(t.side)}),e.jsx("td",{children:e.jsx("input",{className:"mc-td-input",type:"number",value:t.spot,onChange:s=>U(t.id,"spot",s.target.value),placeholder:"0"})}),e.jsx("td",{children:e.jsx("input",{className:"mc-td-input",type:"number",value:t.ltp,onChange:s=>U(t.id,"ltp",s.target.value),placeholder:"0"})}),e.jsx("td",{style:{color:"#6b7280"},children:t.iv!=null?`${t.iv.toFixed(1)}%`:"—"}),e.jsx("td",{style:{fontWeight:500},children:t.span!=null?f(t.span):"—"}),e.jsx("td",{style:{color:"#6b7280"},children:t.exposure!=null?f(t.exposure):"—"}),e.jsx("td",{style:{fontWeight:600,color:"#2563eb"},children:t.total!=null?f(t.total):"—"}),e.jsx("td",{children:e.jsx("button",{type:"button",className:"mc-remove-btn",onClick:()=>G(t.id),title:"Remove leg",children:"×"})})]},t.id))})]})}),r.length>0&&e.jsxs("div",{className:"mc-calc-row",style:{marginTop:14},children:[e.jsx("button",{type:"button",className:`mc-calc-btn${x?" loading":""}`,onClick:()=>C(),disabled:x,children:x?"Calculating…":"Calculate Margin"}),e.jsxs("span",{className:"mc-legs-count",children:[r.length," leg",r.length!==1?"s":""," · auto-recalculates on change"]}),e.jsx("button",{type:"button",className:"mc-btn-reset",onClick:()=>{u([]),p(null),N("")},style:{marginLeft:"auto"},children:"Clear All"})]})]})]})]})]})]})}export{de as default};
