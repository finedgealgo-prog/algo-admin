import{u as X,r as a,j as e,P as ee}from"./index-ywuV61sb.js";import{P as oe}from"./PageBreadCrumb-dzIOfijW.js";import{S as re}from"./StatusToast-S7qvo2O2.js";const D="https://scanner.finedgealgo.com/scanner",ne=[{value:20,label:"20 Sec"},{value:30,label:"30 Sec"},{value:60,label:"60 Sec"}],g=15;async function M(i="",n=0,c=g){const m=String(i||"").trim(),p=new URLSearchParams;m&&p.set("portfolio_master_id",m),p.set("skip",String(Math.max(0,n))),p.set("limit",String(Math.max(1,c)));const l=await fetch(`${D}/portfolio_summary?${p.toString()}`),t=await l.json().catch(()=>({}));if(!l.ok)throw new Error(t&&(t.detail||t.message)||"Unable to load portfolios.");const f=Array.isArray(t)?t:Array.isArray(t==null?void 0:t.items)?t.items:[],u=Number((t==null?void 0:t.total)??f.length)||f.length,j=typeof(t==null?void 0:t.has_more)=="boolean"?t.has_more:n+f.length<u;return{items:f,total:u,hasMore:j}}function te(i,n){return i.replace(/(^|[{}])\s*([^@{}][^{]*)\{/g,(c,m,p)=>{const l=p.split(",").map(t=>t.trim()).filter(Boolean).map(t=>t.startsWith(n)?t:`${n} ${t}`).join(", ");return l?`${m}
  ${l} {`:c})}function v(i){const n=Number(i);return`₹${(Number.isFinite(n)?n:0).toLocaleString("en-IN",{minimumFractionDigits:2,maximumFractionDigits:2})}`}function T(i){const n=Number(i);return(Number.isFinite(n)?n:0).toLocaleString("en-IN")}function ae(i){return new Intl.DateTimeFormat("en-IN",{day:"2-digit",month:"short",year:"numeric",hour:"2-digit",minute:"2-digit",hour12:!1}).format(i)}function se(i){const n=encodeURIComponent(String(i.portfolio_id??""));return i.combained_portfilio?`/scanner/portfolio/combainedDetailPortfolio/${n}`:`/scanner/portfolio/detailPortfolio/${n}`}function ie({positive:i}){return e.jsx("svg",{viewBox:"0 0 20 20",fill:"none","aria-hidden":"true",children:e.jsx("path",{d:i?"M10 4l5 6h-3v6H8v-6H5l5-6z":"M10 16l-5-6h3V4h4v6h3l-5 6z",fill:"currentColor"})})}function le(){return e.jsxs("svg",{viewBox:"0 0 20 20",fill:"none","aria-hidden":"true",children:[e.jsx("path",{d:"M6 7h1v8H6V7zm3 0h1v8H9V7zm4 0h1v8h-1V7z",fill:"currentColor"}),e.jsx("path",{d:"M4 5h12v1H4V5zm3-2h6l1 2H6l1-2zm-1 3h8l-.7 10.1a1 1 0 01-1 .9H7.7a1 1 0 01-1-.9L6 6z",stroke:"currentColor",strokeWidth:"1.2"})]})}function ce(){return e.jsxs("svg",{viewBox:"0 0 20 20",fill:"none","aria-hidden":"true",children:[e.jsx("path",{d:"M1.7 10s3.1-5 8.3-5 8.3 5 8.3 5-3.1 5-8.3 5-8.3-5-8.3-5Z",stroke:"currentColor",strokeWidth:"1.4",strokeLinejoin:"round"}),e.jsx("circle",{cx:"10",cy:"10",r:"2.6",stroke:"currentColor",strokeWidth:"1.4"})]})}function L(){return e.jsx("span",{className:"scanner-portfolio-spinner","aria-hidden":"true"})}function ue(){const i=X(),[n,c]=a.useState([]),[m,p]=a.useState([]),[l,t]=a.useState("all"),[f,u]=a.useState(!0),[j,b]=a.useState(""),[F,$]=a.useState(null),[w,U]=a.useState(20),[H,y]=a.useState(20),[B,Y]=a.useState(()=>new Date),[h,N]=a.useState(null),[_,R]=a.useState(!1),[W,k]=a.useState(null),[I,S]=a.useState(!0),[C,V]=a.useState(!1),z=a.useRef(g),A=a.useRef(null);function G(o){$({id:Date.now(),message:o,variant:"success"})}const P=a.useMemo(()=>n.reduce((o,r)=>(o.investment+=Number(r.investment_value)||0,o.current+=Number(r.current_value)||0,o.returns+=Number(r.returns)||0,o),{investment:0,current:0,returns:0}),[n]),E=a.useCallback(async()=>{const o=l==="all"?"":l,r=Math.max(z.current,g),s=await M(o,0,r);c(s.items),S(s.hasMore),k(s.total)},[l]),O=a.useCallback(async()=>{if(!(C||!I||f)){V(!0);try{const r=await M(l==="all"?"":l,n.length,g);c(s=>[...s,...r.items]),S(r.hasMore),k(r.total)}catch(o){b(o instanceof Error?o.message:"Unable to load more portfolios.")}finally{V(!1)}}},[C,I,f,l,n.length]);a.useEffect(()=>{let o=!0;return z.current=g,c([]),S(!0),b(""),u(!0),M(l==="all"?"":l,0,g).then(r=>{o&&(c(r.items),S(r.hasMore),k(r.total))}).catch(r=>{o&&b(r instanceof Error?r.message:"Unable to load portfolios.")}).finally(()=>{o&&u(!1)}),()=>{o=!1}},[l]),a.useEffect(()=>{z.current=Math.max(n.length,g)},[n.length]),a.useEffect(()=>{const o=window.setInterval(()=>{E().catch(()=>{}),y(w)},w*1e3),r=window.setInterval(()=>{y(s=>Math.max(0,s-1)),Y(new Date)},1e3);return()=>{window.clearInterval(o),window.clearInterval(r)}},[w,E]),a.useEffect(()=>{const o=A.current;if(!o)return;const r=new IntersectionObserver(s=>{var d;(d=s[0])!=null&&d.isIntersecting&&O()},{rootMargin:"400px 0px"});return r.observe(o),()=>r.disconnect()},[O]),a.useEffect(()=>{let o=!0;return(async()=>{try{const s=await fetch(`${D}/get_portfolio`),d=await s.json().catch(()=>[]);if(!s.ok)throw new Error(d&&(d.detail||d.message)||"Unable to load portfolio options.");const Q=Array.isArray(d)?d:[];if(!o)return;p(Q.map(x=>({_id:String((x==null?void 0:x._id)??"").trim(),name:String((x==null?void 0:x.name)??"").trim()})).filter(x=>x._id&&x.name))}catch{if(!o)return;p([])}})().catch(()=>{}),()=>{o=!1}},[]);const Z=o=>{const r=se(o);window.open(r,"_blank","noopener,noreferrer")},q=o=>{const r=encodeURIComponent(String(o.portfolio_id??""));r&&i(`/scanner/backtest/${r}`)},J=o=>{N(o)},K=async()=>{if(h!=null&&h.portfolio_id){R(!0);try{const o=await fetch(`${D}/portfolio/${h.portfolio_id}`,{method:"DELETE"});if(!o.ok){const r=await o.json().catch(()=>({}));throw new Error((r==null?void 0:r.detail)||(r==null?void 0:r.message)||"Delete failed.")}c(r=>r.filter(s=>s.portfolio_id!==h.portfolio_id)),k(r=>r!==null?Math.max(0,r-1):r),N(null),G("Portfolio deleted successfully.")}catch(o){b(o instanceof Error?o.message:"Delete failed."),N(null)}finally{R(!1)}}};return e.jsxs(e.Fragment,{children:[e.jsx(ee,{title:"Scanner Portfolio",description:"Sigma scanner portfolio summary"}),e.jsxs("div",{className:"scanner-portfolio-page",children:[e.jsx("style",{children:te(de,".scanner-portfolio-page")}),e.jsx(oe,{pageTitle:"Portfolio"}),e.jsxs("div",{className:"scanner-portfolio-shell",children:[e.jsxs("div",{className:"scanner-portfolio-title-bar",children:[e.jsxs("div",{children:[e.jsx("span",{className:"scanner-portfolio-title",children:"Portfolio"}),e.jsxs("div",{className:"scanner-portfolio-refresh-bar",children:[e.jsx("span",{className:"scanner-portfolio-now",children:ae(B)}),e.jsxs("span",{className:"scanner-portfolio-countdown",children:["Update in 00:",String(H).padStart(2,"0")]}),e.jsxs("select",{className:"scanner-portfolio-refresh-select scanner-portfolio-filter-select",value:l,onChange:o=>t(o.target.value),children:[e.jsx("option",{value:"all",children:"All Portfolios"}),m.map(o=>e.jsx("option",{value:o._id,children:o.name},o._id))]}),e.jsx("select",{className:"scanner-portfolio-refresh-select",value:w,onChange:o=>{const r=Number(o.target.value)||20;U(r),y(r)},children:ne.map(o=>e.jsx("option",{value:o.value,children:o.label},o.value))})]})]}),e.jsx("button",{type:"button",className:"scanner-portfolio-refresh",onClick:async()=>{y(w),n.length||u(!0),b("");try{await E()}catch(o){b(o instanceof Error?o.message:"Unable to load portfolios.")}finally{u(!1)}},disabled:f,children:"Refresh"})]}),e.jsxs("section",{className:"scanner-portfolio-stats",children:[e.jsxs("article",{className:"scanner-portfolio-stat-card",children:[e.jsx("span",{children:"Total Portfolios"}),e.jsx("strong",{children:T(W??n.length)})]}),e.jsxs("article",{className:"scanner-portfolio-stat-card",children:[e.jsx("span",{children:"Total Investment"}),e.jsx("strong",{children:v(P.investment)})]}),e.jsxs("article",{className:"scanner-portfolio-stat-card",children:[e.jsx("span",{children:"Current Value"}),e.jsx("strong",{children:v(P.current)})]}),e.jsxs("article",{className:"scanner-portfolio-stat-card",children:[e.jsx("span",{children:"Net Returns"}),e.jsx("strong",{className:P.returns>=0?"positive":"negative",children:v(P.returns)})]})]}),e.jsx(re,{toast:F,onClose:()=>$(null)}),j?e.jsx("div",{className:"scanner-portfolio-error",children:j}):null,h?e.jsx("div",{className:"sp-confirm-overlay",role:"dialog","aria-modal":"true",children:e.jsxs("div",{className:"sp-confirm-box",children:[e.jsx("h3",{className:"sp-confirm-title",children:"Delete Portfolio"}),e.jsxs("p",{className:"sp-confirm-msg",children:[e.jsx("strong",{children:h.portfolio_name||"This portfolio"})," permanently delete ஆகும். Undo முடியாது."]}),e.jsxs("div",{className:"sp-confirm-actions",children:[e.jsx("button",{type:"button",className:"sp-confirm-cancel",onClick:()=>N(null),disabled:_,children:"Cancel"}),e.jsx("button",{type:"button",className:"sp-confirm-delete",onClick:K,disabled:_,children:_?"Deleting…":"Delete"})]})]})}):null,f?e.jsxs("div",{className:"scanner-portfolio-loading",children:[e.jsx(L,{}),e.jsx("p",{children:"Loading portfolios…"})]}):n.length===0?e.jsxs("div",{className:"scanner-portfolio-empty",children:[e.jsx("h3",{children:"No portfolios found"}),e.jsx("p",{children:"Selected portfolio-ku related strategies inga display aagum."})]}):e.jsx("div",{className:"scanner-portfolio-grid",children:n.map((o,r)=>{const s=Number(o.returns)||0,d=s>=0;return e.jsxs("article",{className:"scanner-portfolio-card",children:[e.jsx("div",{className:"scanner-portfolio-card-top",children:e.jsxs("div",{className:"scanner-portfolio-card-header",children:[e.jsx("div",{className:"scanner-portfolio-title-wrap",children:e.jsx("h2",{children:o.strategy_name||o.portfolio_name||"Untitled Portfolio"})}),o.is_live===!1?e.jsx("span",{className:"scanner-portfolio-status-badge",children:"Virtual"}):null]})}),e.jsxs("div",{className:"scanner-portfolio-card-body",children:[e.jsxs("div",{className:"scanner-portfolio-pair scanner-portfolio-pair-head",children:[e.jsx("div",{children:e.jsx("span",{children:"Investment"})}),e.jsx("div",{className:"align-right",children:e.jsx("span",{children:"Current Value"})})]}),e.jsxs("div",{className:"scanner-portfolio-pair scanner-portfolio-pair-values",children:[e.jsx("div",{children:e.jsx("strong",{children:v(o.investment_value)})}),e.jsx("div",{className:"align-right",children:e.jsx("strong",{children:v(o.current_value)})})]}),e.jsx("div",{className:"scanner-portfolio-divider"}),e.jsxs("div",{className:"scanner-portfolio-pair scanner-portfolio-pair-head",children:[e.jsx("div",{children:e.jsx("span",{children:"Returns"})}),e.jsx("div",{className:"align-right",children:e.jsx("span",{children:"Holdings"})})]}),e.jsxs("div",{className:"scanner-portfolio-pair scanner-portfolio-metrics",children:[e.jsx("div",{children:e.jsxs("strong",{className:d?"positive":"negative",children:[e.jsx("span",{className:"scanner-portfolio-return-icon",children:e.jsx(ie,{positive:d})}),v(s),e.jsxs("em",{children:["(",(Number(o.return_pct)||0).toFixed(2),"%)"]})]})}),e.jsx("div",{className:"align-right",children:e.jsx("strong",{children:T(o.holdings)})})]})]}),e.jsxs("div",{className:"scanner-portfolio-cta-wrap",children:[e.jsx("button",{type:"button",className:"scanner-portfolio-backtest-action icon-btn","aria-label":`Open backtest for ${o.portfolio_name||"portfolio"}`,onClick:()=>q(o),children:e.jsx(ce,{})}),e.jsxs("button",{type:"button",className:"view-btn view-btn-full",onClick:()=>Z(o),children:["View Portfolio",e.jsx("span",{"aria-hidden":"true",children:"→"})]}),e.jsx("button",{type:"button",className:"scanner-portfolio-delete-action","aria-label":`Delete ${o.portfolio_name||"portfolio"}`,onClick:()=>J(o),children:e.jsx(le,{})})]})]},`${o.portfolio_id||o.portfolio_name||"portfolio"}-${r}`)})}),!f&&n.length>0?e.jsx("div",{ref:A,className:"scanner-portfolio-load-more",children:C?e.jsxs(e.Fragment,{children:[e.jsx(L,{}),e.jsx("span",{children:"Loading more…"})]}):I?null:e.jsx("span",{children:"All portfolios loaded."})}):null]})]})]})}const de=`
.sp-confirm-overlay {
  position: fixed;
  inset: 0;
  z-index: 999;
  background: rgba(15, 23, 42, 0.35);
  backdrop-filter: blur(6px);
  -webkit-backdrop-filter: blur(6px);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 16px;
}

.sp-confirm-box {
  background: #fff;
  border: 1px solid #90d1ff;
  border-radius: 18px;
  padding: 28px 28px 24px;
  width: min(440px, calc(100vw - 32px));
  box-shadow: 0 20px 60px rgba(15, 23, 42, 0.2);
}

.sp-confirm-title {
  margin: 0 0 10px;
  font-size: 18px;
  font-weight: 700;
  color: #14213d;
}

.sp-confirm-msg {
  margin: 0 0 22px;
  font-size: 14px;
  color: #475569;
  line-height: 1.6;
}

.sp-confirm-actions {
  display: flex;
  justify-content: flex-end;
  gap: 10px;
}

.sp-confirm-cancel,
.sp-confirm-delete {
  border-radius: 7px;
  padding: 10px 20px;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  transition: opacity 0.15s ease, transform 0.15s ease;
}

.sp-confirm-cancel {
  border: 1px solid #90d1ff;
  background: #fff;
  color: #1f2937;
}

.sp-confirm-cancel:hover:not(:disabled) {
  background: #f7fbff;
}

.sp-confirm-delete {
  border: 1px solid #ef4444;
  background: #ef4444;
  color: #fff;
}

.sp-confirm-delete:hover:not(:disabled) {
  background: #dc2626;
  transform: translateY(-1px);
}

.sp-confirm-cancel:disabled,
.sp-confirm-delete:disabled {
  opacity: 0.6;
  cursor: wait;
}

.scanner-portfolio-page {
  position: relative;
}

.scanner-portfolio-page::before {
  display: none;
}

.scanner-portfolio-shell {
  display: grid;
  gap: 16px;
  border-radius: 14px;
  background: #f6fbff;
  padding: 4px 0 12px;
}

.scanner-portfolio-title-bar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  padding: 16px 18px;
  border: 1px solid #90d1ff;
  background: #fff;
  border-radius: 14px;
  box-shadow: 0 4px 14px rgba(15, 23, 42, 0.08);
}

.scanner-portfolio-title {
  font-size: 20px;
  font-weight: 700;
  color: #111827;
}

.scanner-portfolio-refresh-bar {
  display: flex;
  align-items: center;
  gap: 12px;
  flex-wrap: wrap;
  margin-top: 8px;
}

.scanner-portfolio-now {
  font-size: 13px;
  color: #5f6f82;
}

.scanner-portfolio-countdown {
  font-size: 13px;
  color: #1f2937;
  font-weight: 600;
  border: 1px solid #90d1ff;
  border-radius: 7px;
  background: #eef7ff;
  padding: 7px 10px;
}

.scanner-portfolio-refresh-select {
  border: 1px solid #90d1ff;
  border-radius: 7px;
  padding: 8px 12px;
  font-size: 13px;
  color: #1e293b;
  background: #fff;
  outline: none;
}

.scanner-portfolio-refresh {
  border: 1px solid #69bbe8;
  border-radius: 7px;
  padding: 10px 16px;
  background: #69bbe8;
  color: #fff;
  font-size: 13px;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.18s ease, opacity 0.18s ease;
}

.scanner-portfolio-refresh:hover:not(:disabled) {
  background: #5badde;
}

.scanner-portfolio-refresh:disabled {
  opacity: 0.65;
  cursor: wait;
}

.scanner-portfolio-stats {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 16px;
}

.scanner-portfolio-load-more {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding: 18px 0 6px;
  color: #5f6f82;
  font-size: 13px;
}

.scanner-portfolio-load-more .scanner-portfolio-spinner {
  width: 20px;
  height: 20px;
  border-width: 3px;
  margin-bottom: 0;
}

.scanner-portfolio-stat-card {
  padding: 18px 20px;
  border-radius: 14px;
  background: #fff;
  border: 1px solid #90d1ff;
  box-shadow: 0 4px 14px rgba(15, 23, 42, 0.08);
}

.scanner-portfolio-stat-card span {
  display: block;
  margin-bottom: 8px;
  font-size: 12px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: #5f6f82;
}

.scanner-portfolio-stat-card strong {
  font-size: 22px;
  color: #111827;
}

.scanner-portfolio-notice,
.scanner-portfolio-error,
.scanner-portfolio-empty,
.scanner-portfolio-loading {
  border-radius: 14px;
  padding: 20px 22px;
  background: #fff;
  border: 1px solid #90d1ff;
  box-shadow: 0 4px 14px rgba(15, 23, 42, 0.08);
}

.scanner-portfolio-notice {
  color: #8a5a00;
  background: #fff8e7;
  border-color: #f4d48f;
}

.scanner-portfolio-error {
  color: #b42318;
  background: #fef3f2;
  border-color: #f7c7c4;
}

.scanner-portfolio-loading,
.scanner-portfolio-empty {
  display: grid;
  place-items: center;
  text-align: center;
  min-height: 260px;
}

.scanner-portfolio-empty h3 {
  margin: 0 0 8px;
  font-size: 20px;
  color: #14213d;
}

.scanner-portfolio-empty p,
.scanner-portfolio-loading p {
  margin: 0;
  color: #607086;
}

.scanner-portfolio-spinner {
  width: 46px;
  height: 46px;
  border-radius: 999px;
  border: 4px solid #d7efff;
  border-top-color: #39aaf5;
  animation: scanner-portfolio-spin 0.9s linear infinite;
  margin-bottom: 14px;
}

@keyframes scanner-portfolio-spin {
  to {
    transform: rotate(360deg);
  }
}

.scanner-portfolio-grid {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 18px;
}

.scanner-portfolio-card {
  overflow: hidden;
  min-height: 100%;
  display: flex;
  flex-direction: column;
  padding: 0;
  border-radius: 14px;
  background: #fff;
  border: 1px solid #90d1ff;
  box-shadow: 0 4px 14px rgba(15, 23, 42, 0.08);
  transition: transform 0.22s ease, box-shadow 0.22s ease, border-color 0.22s ease;
}

.scanner-portfolio-card::before {
  display: none;
}

.scanner-portfolio-card:hover {
  transform: translateY(-2px);
  border-color: #69bbe8;
  box-shadow: 0 8px 20px rgba(15, 23, 42, 0.1);
}

.scanner-portfolio-card-top {
  padding: 14px 18px;
  border-bottom: 1px solid #dbeffd;
  background: #eef7ff;
}

.scanner-portfolio-card-header,
.scanner-portfolio-pair,
.scanner-portfolio-card-footer {
  display: flex;
  justify-content: space-between;
  gap: 12px;
}

.scanner-portfolio-card-header {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 8px;
}

.scanner-portfolio-title-wrap {
  display: flex;
  align-items: flex-start;
  min-width: 0;
  flex: 1;
}

.scanner-portfolio-status-badge {
  flex-shrink: 0;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  padding: 0;
  color: #dc2626;
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.02em;
  white-space: nowrap;
}

.scanner-portfolio-status-badge::before {
  content: "";
  width: 8px;
  height: 8px;
  border-radius: 999px;
  background: currentColor;
  box-shadow: 0 0 0 0 rgba(220, 38, 38, 0.45);
  animation: scanner-portfolio-status-blink 1.2s ease-in-out infinite;
}

@keyframes scanner-portfolio-status-blink {
  0% {
    opacity: 1;
    box-shadow: 0 0 0 0 rgba(220, 38, 38, 0.45);
  }

  70% {
    opacity: 0.35;
    box-shadow: 0 0 0 6px rgba(220, 38, 38, 0);
  }

  100% {
    opacity: 1;
    box-shadow: 0 0 0 0 rgba(220, 38, 38, 0);
  }
}

.scanner-portfolio-card-header > div:first-child {
  min-width: 0;
  flex: 1;
}

.scanner-portfolio-card-body {
  padding: 16px 18px 0;
}

.scanner-portfolio-card-header h2 {
  margin: 0;
  max-width: 100%;
  font-size: 15px;
  line-height: 1.2;
  letter-spacing: 0;
  font-weight: 700;
  color: #111827;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.scanner-portfolio-divider {
  height: 1px;
  margin: 16px 0;
  background: #dbeffd;
}

.scanner-portfolio-pair span {
  display: block;
  color: #5f6f82;
  font-size: 12px;
  font-weight: 500;
}

.scanner-portfolio-pair-head {
  align-items: center;
}

.scanner-portfolio-pair-values strong {
  margin-top: 0;
}

.scanner-portfolio-pair strong {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  margin-top: 8px;
  font-size: 17px;
  line-height: 1.2;
  letter-spacing: -0.02em;
  color: #111827;
}

.scanner-portfolio-metrics strong {
  font-size: 16px;
  flex-wrap: wrap;
}

.scanner-portfolio-pair em {
  font-style: normal;
  font-size: 12px;
  font-weight: 700;
}

.align-right {
  text-align: right;
}

.positive {
  color: #0f9f6e !important;
}

.negative {
  color: #d64545 !important;
}

.scanner-portfolio-return-icon {
  display: inline-flex;
  width: 18px;
  height: 18px;
}

.scanner-portfolio-return-icon svg,
.icon-btn svg {
  width: 100%;
  height: 100%;
}

.view-btn,
.scanner-portfolio-backtest-action,
.scanner-portfolio-delete-action {
  cursor: pointer;
  transition: transform 0.18s ease, opacity 0.18s ease, background 0.18s ease, border-color 0.18s ease;
}

.view-btn {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 10px 16px;
  border-radius: 7px;
  border: 1px solid #90d1ff;
  background: #fff;
  color: #1f2937;
  font-size: 13px;
  font-weight: 600;
}

.scanner-portfolio-cta-wrap {
  margin-top: auto;
  padding: 18px;
  display: flex;
  align-items: center;
  gap: 12px;
}

.view-btn-full {
  justify-content: center;
  flex: 1;
  border: 1px solid #90d1ff;
  background: #fff;
  color: #1f2937;
  box-shadow: none;
}

.scanner-portfolio-delete-action {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 37px;
  height: 42px;
  border-radius: 7px;
  background: #fff5f5;
  color: #ef4444;
  border: 1px solid #ffd6d6;
}

.scanner-portfolio-backtest-action {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 42px;
  height: 42px;
  border-radius: 7px;
  background: #eef7ff;
  color: #39aaf5;
  border: 1px solid #90d1ff;
}

.scanner-portfolio-backtest-action:hover {
  transform: translateY(-2px);
  background: #e4f4ff;
}

.scanner-portfolio-delete-action:hover {
  transform: translateY(-2px);
  background: #ffe8e8;
}

.scanner-portfolio-backtest-action svg {
  width: 22px;
  height: 22px;
}

.scanner-portfolio-delete-action svg {
  width: 29px;
  height: 35px;
}

.view-btn:hover {
  transform: translateY(-2px);
  background: #f7fbff;
}

.view-btn-full:hover {
  background: #f8fbff;
}

@media (max-width: 1500px) {
  .scanner-portfolio-grid {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
}

@media (max-width: 1360px) {
  .scanner-portfolio-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media (max-width: 1200px) {
  .scanner-portfolio-stats {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media (max-width: 768px) {
  .scanner-portfolio-title-bar,
  .scanner-portfolio-card-header,
  .scanner-portfolio-pair {
    flex-direction: column;
  }

  .scanner-portfolio-refresh-bar {
    margin-top: 10px;
  }

  .scanner-portfolio-stats {
    grid-template-columns: 1fr;
  }

  .scanner-portfolio-cta-wrap {
    flex-direction: row;
  }

  .scanner-portfolio-grid {
    grid-template-columns: 1fr;
  }

  .align-right {
    text-align: left;
  }

  .scanner-portfolio-refresh {
    width: 100%;
    justify-content: center;
  }

  .view-btn {
    justify-content: center;
    width: 100%;
  }
}
`;export{ue as default};
