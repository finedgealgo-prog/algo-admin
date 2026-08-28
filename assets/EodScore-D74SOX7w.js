import{r as i,j as e,P as ct,M as pt}from"./index-ywuV61sb.js";import{P as ft}from"./PageBreadCrumb-dzIOfijW.js";import{S as ut}from"./calender-line-CuOH9bD9.js";const mt="https://algo.finedgealgo.com/algo".replace(/\/+$/,""),Z="https://scanner.finedgealgo.com/scanner".replace(/\/+$/,""),Ce="((70% * 6 Month Volatility) + (20% * 3 Month Performance) + (10% * 1 Year Performance)) / 3 Month Volatility",ht=[5,10,15,50,100],gt="69dcf52711877c164638d2a7",xt=["1 Day Performance","2 Day Performance","3 Day Performance","4 Day Performance","5 Day Performance","6 Day Performance","1 Week Performance","2 Week Performance","3 Week Performance","1 Month Performance","2 Month Performance","3 Month Performance","4 Month Performance","5 Month Performance","6 Month Performance","7 Month Performance","8 Month Performance","9 Month Performance","10 Month Performance","11 Month Performance","1 Year Performance","1 Day Volatility","2 Day Volatility","3 Day Volatility","4 Day Volatility","5 Day Volatility","6 Day Volatility","1 Week Volatility","2 Week Volatility","3 Week Volatility","1 Month Volatility","2 Month Volatility","3 Month Volatility","4 Month Volatility","5 Month Volatility","6 Month Volatility","7 Month Volatility","8 Month Volatility","9 Month Volatility","10 Month Volatility","11 Month Volatility","1 Year Volatility","1 Day Slope","2 Day Slope","3 Day Slope","4 Day Slope","5 Day Slope","6 Day Slope","1 Week Slope","2 Week Slope","3 Week Slope","1 Month Slope","2 Month Slope","3 Month Slope","4 Month Slope","5 Month Slope","6 Month Slope","7 Month Slope","8 Month Slope","9 Month Slope","10 Month Slope","11 Month Slope","1 Year Slope"],Be={indices:["nifty_50"],sectors:[],minPrice:"0",maxPrice:"0",scoreDate:G(),formula:Ce,capital:"1000000",topN:"12",scoreModel:"current"},He={rowSelectable:!0,hideRowSelectionCheckbox:!1,multiSelectable:!0,showToolbar:!0,columnHideable:!0,columnSortable:!0,columnPinnable:!0,rowHover:!0,rowStriped:!0,showPaginator:!0,loadingStatus:!1,columnResizable:!1},je=[{key:"rank",label:"Rank",align:"center"},{key:"universe",label:"Universe"},{key:"symbol",label:"Symbol"},{key:"sector",label:"Sector"},{key:"last_price",label:"Last Price",align:"right",formatter:t=>_(t,2)},{key:"score",label:"Score",align:"right",formatter:t=>_(t,6)},{key:"perf_1D",label:"1D Perf",align:"right",formatter:t=>_(t,4)},{key:"perf_1W",label:"1W Perf",align:"right",formatter:t=>_(t,4)},{key:"perf_1M",label:"1M Perf",align:"right",formatter:t=>_(t,4)},{key:"perf_3M",label:"3M Perf",align:"right",formatter:t=>_(t,4)},{key:"perf_6M",label:"6M Perf",align:"right",formatter:t=>_(t,4)},{key:"perf_1Y",label:"1Y Perf",align:"right",formatter:t=>_(t,4)},{key:"vol_1D",label:"1D Vol",align:"right",formatter:t=>_(t,4)},{key:"vol_1W",label:"1W Vol",align:"right",formatter:t=>_(t,4)},{key:"vol_1M",label:"1M Vol",align:"right",formatter:t=>_(t,4)},{key:"vol_3M",label:"3M Vol",align:"right",formatter:t=>_(t,4)},{key:"vol_6M",label:"6M Vol",align:"right",formatter:t=>_(t,4)},{key:"vol_1Y",label:"1Y Vol",align:"right",formatter:t=>_(t,4)},{key:"slope_1D",label:"1D Slope",align:"right",formatter:t=>_(t,4)},{key:"slope_1W",label:"1W Slope",align:"right",formatter:t=>_(t,4)},{key:"slope_1M",label:"1M Slope",align:"right",formatter:t=>_(t,4)},{key:"slope_3M",label:"3M Slope",align:"right",formatter:t=>_(t,4)},{key:"slope_6M",label:"6M Slope",align:"right",formatter:t=>_(t,4)},{key:"slope_1Y",label:"1Y Slope",align:"right",formatter:t=>_(t,4)}],Ne=[{key:"rank",label:"Rank",align:"center"},{key:"universe",label:"Universe"},{key:"symbol",label:"Symbol"},{key:"sector",label:"Sector"},{key:"last_price",label:"Last Price",align:"right",formatter:t=>_(t,2)},{key:"score",label:"Score",align:"right",formatter:t=>_(t,6)},{key:"qty",label:"Qty",align:"right",formatter:t=>_(t,0)},{key:"amount",label:"Amount",align:"right",formatter:t=>oe(t)},{key:"Investment",label:"Allocation",align:"right",formatter:t=>oe(t)}];function G(){return new Date().toISOString().slice(0,10)}function bt(t,l){return t.replace(/(^|[{}])\s*([^@{}][^{]*)\{/g,(r,d,o)=>{const s=o.split(",").map(u=>u.trim()).filter(Boolean).map(u=>u.startsWith(l)?u:`${l} ${u}`).join(", ");return s?`${d}
  ${s} {`:r})}function oe(t){return`₹${R(t).toLocaleString("en-IN",{minimumFractionDigits:2,maximumFractionDigits:2})}`}function _(t,l=2){const r=Number(t);return Number.isFinite(r)?r.toLocaleString("en-IN",{minimumFractionDigits:l,maximumFractionDigits:l}):"—"}function R(t,l=0){const r=Number(t);return Number.isFinite(r)?r:l}function Ue(t){if(!t.trim())return"";let l=0;for(const r of t)if(r==="("&&l++,r===")"&&l--,l<0)return"Unmatched closing bracket ')'";return l>0?`Unclosed bracket '(' — ${l} closing ')' missing`:/[+\-*/]\s*$/.test(t.trimEnd())?"Formula cannot end with an operator":/[+\-*/]\s*[+*/]/.test(t)?"Consecutive operators are not allowed":""}function I(t){return typeof t=="string"?t:String(t??"")}function ae(t){const l=t.rank??t.Rank??t.rank_no;return R(l,Number.MAX_SAFE_INTEGER)}function _e(t){return[I(t.symbol),I(t.universe),ae(t)].join("|")}function yt(t,l){const r=Number(t),d=Number(l),o=Number.isFinite(r),s=Number.isFinite(d);return o&&s?r-d:I(t).localeCompare(I(l),void 0,{numeric:!0,sensitivity:"base"})}const vt=["1D","2D","3D","4D","5D","6D","1W","2W","3W","1M","2M","3M","4M","5M","6M","7M","8M","9M","10M","11M","1Y"];function wt(t){return Array.isArray(t)?t.map(l=>{const r=l&&typeof l=="object"?l:{},d={...r,rank:ae(r),universe:I(r.universe),symbol:I(r.symbol),sector:I(r.sector),last_price:R(r.last_price),score:R(r.score)};for(const o of vt)d[`perf_${o}`]=R(r[`perf_${o}`],NaN),d[`vol_${o}`]=R(r[`vol_${o}`],NaN),d[`slope_${o}`]=R(r[`slope_${o}`],NaN);return d}):[]}function St(t,l,r){const d=Math.max(1,r),o=[...t].sort((f,N)=>ae(f)-ae(N)).slice(0,d),s=l/d;let u=0;const h=o.map(f=>{const N=R(f.last_price),C=N>0?Math.floor(s/N):0,M=C*N;return u+=M,{...f,rank:ae(f),universe:I(f.universe),symbol:I(f.symbol),sector:I(f.sector),last_price:N,score:R(f.score),qty:C,amount:M,Investment:s}});let v=l-u;for(const f of h)f.qty===0&&f.last_price>0&&v>=f.last_price&&(f.qty=1,f.amount=f.last_price,v-=f.last_price,u+=f.last_price);const y={total_capital:l,used_capital:Number(u.toFixed(2)),remaining_capital:Number((l-u).toFixed(2))};return{portfolio:h,summary:y}}function qe(t,l){return t.filter(r=>l.some(d=>{const o=d[r.key];return o!=null&&o!==""}))}const kt=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],Ge=["January","February","March","April","May","June","July","August","September","October","November","December"],Ke=["1 Mo","1 Yr","10 Yr"],Qe=0,Y=[2017,2035];function ee(t){if(!t)return null;const l=/^(\d{4})-(\d{2})-(\d{2})$/.exec(t);if(!l)return null;const[,r,d,o]=l,s=new Date(Number(r),Number(d)-1,Number(o));return s.setHours(0,0,0,0),Number.isNaN(s.getTime())?null:s}function te(t){return new Date(t.getFullYear(),t.getMonth(),t.getDate())}function jt(t){const l=t.getFullYear(),r=String(t.getMonth()+1).padStart(2,"0"),d=String(t.getDate()).padStart(2,"0");return`${l}-${r}-${d}`}function Nt(t){const l=ee(t);if(!l)return"";const r=String(l.getDate()).padStart(2,"0"),d=String(l.getMonth()+1).padStart(2,"0"),o=l.getFullYear();return`${r}/${d}/${o}`}function De(t,l=0){return new Date(t.getFullYear(),t.getMonth()+l+1,0).getDate()}function Me(t,l){const r=te(l);return t.getDate()!==r.getDate()&&r.setMonth(r.getMonth()-1,De(r,-1)),r}function _t(t,l=Qe){const r=t.getMonth(),d=t.getFullYear();let o=new Date(d,r,1).getDay()-l;o<0&&(o+=7);const s=[],u=De(t,-1),h=u-o+1;for(let v=h;v<=u;v+=1)s.push(v);return s}function Mt(t){const l=De(t,0);return Array.from({length:l},(r,d)=>d+1)}function Ct(t,l){const d=(t.length+l.length)%7;return d===0?[]:Array.from({length:7-d},(o,s)=>s+1)}function Dt(t,l){const[r,d]=l,o=t.getFullYear();let s=r;for(;!(s>=r&&s<=d&&o>=s&&o<=s+9);)s+=1;const u=[];for(let h=s;h<s+10;h+=1)h<=d&&u.push(h);return u}function Pt(t,l){const r=l.length,d=t>=r?t-r:t;return l[d]}function Je({label:t,required:l,options:r,values:d,placeholder:o,onChange:s}){const[u,h]=i.useState(!1),v=i.useRef(null),y=i.useMemo(()=>r.map(S=>S.value),[r]),f=i.useMemo(()=>r.filter(S=>d.includes(S.value)).map(S=>S.label),[r,d]),N=r.length>0&&d.length===r.length;i.useEffect(()=>{const S=E=>{v.current&&!v.current.contains(E.target)&&h(!1)};return document.addEventListener("mousedown",S),()=>document.removeEventListener("mousedown",S)},[]);const C=S=>{if(d.includes(S)){s(d.filter(E=>E!==S));return}s([...d,S])},M=()=>{s(N?[]:y)},j=f.length?f.length<=2?f.join(", "):`${f.slice(0,2).join(", ")} +${f.length-2}`:o;return e.jsxs("div",{className:`eod-field eod-multi-field ${u?"eod-multi-field-open":""}`,ref:v,children:[e.jsx("label",{className:`eod-multi-label ${l?"eod-required":""}`,children:t}),e.jsxs("button",{type:"button",className:"eod-multi-trigger",onClick:()=>h(S=>!S),children:[e.jsx("span",{className:f.length?"":"eod-multi-placeholder",children:j}),e.jsx("span",{className:`eod-multi-caret ${u?"open":""}`,children:"▾"})]}),u?e.jsxs("div",{className:"eod-multi-panel",children:[e.jsxs("label",{className:"eod-multi-option eod-multi-option-sticky",children:[e.jsx("input",{type:"checkbox",checked:N,onChange:M}),e.jsx("span",{children:"Select All"})]}),e.jsx("div",{className:"eod-multi-list",children:r.map(S=>e.jsxs("label",{className:`eod-multi-option ${d.includes(S.value)?"selected":""}`,children:[e.jsx("input",{type:"checkbox",checked:d.includes(S.value),onChange:()=>C(S.value)}),e.jsx("span",{children:S.label})]},S.value))})]}):null]})}function Et({label:t,required:l,value:r,onChange:d}){const o=i.useRef(null),[s,u]=i.useState(!1),[h,v]=i.useState(0),[y,f]=i.useState(()=>ee(r)??ee(G())??new Date);i.useEffect(()=>{s||(f(ee(r)??ee(G())??new Date),v(0))},[s,r]),i.useEffect(()=>{const c=x=>{o.current&&!o.current.contains(x.target)&&u(!1)};return document.addEventListener("mousedown",c),()=>document.removeEventListener("mousedown",c)},[]);const N=i.useMemo(()=>_t(y),[y]),C=i.useMemo(()=>Mt(y),[y]),M=i.useMemo(()=>Ct(N,C),[C,N]),j=i.useMemo(()=>Dt(y,Y),[y]),S=c=>{d(jt(c)),u(!1),v(0)},E=c=>{f(x=>{const b=te(x);return h===0?b.setMonth(b.getMonth()+c):h===1?b.setFullYear(b.getFullYear()+c):b.setFullYear(b.getFullYear()+c*10),b.getFullYear()>Y[1]&&b.setFullYear(Y[1]),b.getFullYear()<Y[0]&&b.setFullYear(Y[0]),Me(x,b)})},O=h===0?!(y.getFullYear()<=Y[0]&&y.getMonth()===0):h===1?y.getFullYear()>Y[0]:!j.includes(Y[0]),m=h===0?!(y.getFullYear()>=Y[1]&&y.getMonth()===11):h===1?y.getFullYear()<Y[1]:!j.includes(Y[1]),w=(c,x=0)=>{const b=te(y),A=new Date(b.getFullYear(),b.getMonth()+x,c);A.setHours(0,0,0,0),f(A),S(A)};return e.jsxs("div",{className:`eod-field eod-date-field ${s?"eod-date-field-open":""}`,ref:o,children:[e.jsx("label",{className:l?"eod-required":"",children:t}),e.jsxs("div",{className:"eod-date-wrap",children:[e.jsxs("button",{type:"button",className:"eod-date-trigger",onClick:()=>u(c=>!c),children:[e.jsx("span",{className:r?"":"eod-date-placeholder",children:Nt(r)||"Select score date"}),e.jsx("span",{className:"eod-date-icon","aria-hidden":"true",children:e.jsx(ut,{className:"size-5"})})]}),s?e.jsxs(e.Fragment,{children:[e.jsx("button",{type:"button",className:"eod-calendar-overlay","aria-label":"Close calendar",onClick:()=>u(!1)}),e.jsxs("div",{className:"eod-calendar-popover",children:[e.jsxs("div",{className:"eod-calendar-header",children:[e.jsx("div",{className:`eod-calendar-header-highlight eod-view-${h}`}),e.jsx("div",{className:"eod-calendar-header-outline"}),e.jsx("button",{type:"button",className:`eod-calendar-nav prev ${O?"":"is-hidden"}`,onClick:()=>E(-1),children:Ke[h]}),e.jsx("button",{type:"button",className:"eod-calendar-segment",onClick:()=>v(0),children:y.getDate()}),e.jsx("button",{type:"button",className:"eod-calendar-segment",onClick:()=>v(1),children:Ge[y.getMonth()].slice(0,3)}),e.jsx("button",{type:"button",className:"eod-calendar-segment",onClick:()=>v(2),children:y.getFullYear()}),e.jsx("button",{type:"button",className:`eod-calendar-nav next ${m?"":"is-hidden"}`,onClick:()=>E(1),children:Ke[h]})]}),e.jsxs("div",{className:"eod-calendar-panel",children:[h===0&&e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"eod-calendar-weekdays",children:Array.from({length:7},(c,x)=>{const b=Pt(x+Qe,kt);return e.jsx("div",{className:"eod-calendar-cell dummy",children:b.slice(0,2)},b)})}),e.jsxs("div",{className:"eod-calendar-grid",children:[N.map(c=>e.jsx("button",{type:"button",className:"eod-calendar-cell other-scope",onClick:()=>w(c,-1),children:e.jsx("span",{className:"number",children:c})},`prev-${c}`)),C.map(c=>e.jsx("button",{type:"button",className:`eod-calendar-cell ${y.getDate()===c?"chosen":""}`,onClick:()=>w(c),children:e.jsx("span",{className:"number",children:c})},`current-${c}`)),M.map(c=>e.jsx("button",{type:"button",className:"eod-calendar-cell other-scope",onClick:()=>w(c,1),children:e.jsx("span",{className:"number",children:c})},`next-${c}`))]})]}),h===1&&e.jsx("div",{className:"eod-calendar-months",children:Ge.map((c,x)=>e.jsx("button",{type:"button",className:`eod-calendar-cell eod-calendar-month ${y.getMonth()===x?"chosen":""}`,onClick:()=>{const b=te(y);b.setMonth(x),f(Me(y,b)),v(0)},children:e.jsx("span",{className:"number",children:c.slice(0,3)})},c))}),h===2&&e.jsx("div",{className:"eod-calendar-years",children:j.map(c=>e.jsx("button",{type:"button",className:`eod-calendar-cell eod-calendar-year ${y.getFullYear()===c?"chosen":""}`,onClick:()=>{const x=te(y);x.setFullYear(c),f(Me(y,x)),v(1)},children:e.jsx("span",{className:"number",children:c})},c))})]})]})]}):null]})]})}const Rt=bt(`
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
    backdrop-filter: none;
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
    grid-column: span 9;
  }

  .eod-field.eod-half {
    grid-column: span 3;
  }

  .eod-field.eod-small {
    grid-column: span 3;
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
  .eod-select,
  .eod-textarea {
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

  .eod-select[multiple] {
    min-height: 128px;
    padding-right: 10px;
  }

  .eod-multi-label {
    display: block;
    margin: 0 0 8px;
    font-size: 0.83rem;
    font-weight: 700;
    color: #22344b;
  }

  .eod-multi-field {
    position: relative;
  }

  .eod-multi-field-open {
    z-index: 20;
  }

  .eod-multi-trigger {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    text-align: left;
    cursor: pointer;
    width: 100%;
    border: 1px solid #90d1ff;
    border-radius: 7px;
    background: #fff;
    color: #111827;
    padding: 10px 12px;
    font-size: 0.95rem;
    line-height: 1.3;
    box-shadow: none;
    gap: 12px;
  }

  .eod-multi-placeholder {
    color: #73839a;
  }

  .eod-multi-trigger > span:first-child {
    flex: 1;
    min-width: 0;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    overflow: hidden;
    word-break: break-word;
  }

  .eod-multi-caret {
    font-size: 0.9rem;
    color: #39aaf5;
    transition: transform .18s ease;
    margin-left: 0;
    flex: 0 0 auto;
    align-self: center;
  }

  .eod-multi-caret.open {
    transform: rotate(180deg);
  }

  .eod-multi-panel {
    position: absolute;
    top: calc(100% - 1px);
    left: 0;
    right: 0;
    margin-top: 0;
    border: 0;
    border-top: 0;
    border: 1px solid #90d1ff;
    border-top: 0;
    border-radius: 0 0 7px 7px;
    background: #ffffff;
    box-shadow: 0 10px 24px rgba(15, 23, 42, 0.12);
    overflow: hidden;
    z-index: 8;
  }

  .eod-multi-field .eod-multi-option {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 10px;
    min-height: 40px;
    padding: 8px 16px;
    font-size: 0.95rem;
    font-weight: 500;
    line-height: 1.2;
    color: #1f2937;
    cursor: pointer;
    background: #ffffff;
  }

  .eod-multi-option.selected {
    background: #eef7ff;
  }

  .eod-multi-option:hover {
    background: #f7fbff;
  }

  .eod-multi-option.selected:hover {
    background: #eef7ff;
  }

  .eod-multi-option input {
    display: block;
    width: 18px;
    height: 18px;
    margin: 0;
    accent-color: #1565c0;
    cursor: pointer;
    transform: translateY(0);
  }

  .eod-multi-option span {
    flex: 1;
    color: #162235;
    line-height: 1.35;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .eod-multi-option-sticky {
    position: sticky;
    top: 0;
    z-index: 1;
    background: #ffffff;
  }

  .eod-multi-list {
    max-height: 270px;
    overflow: auto;
    background: #ffffff;
  }

  .eod-multi-list .eod-multi-option + .eod-multi-option {
    border-top: 0;
  }

  .eod-textarea {
    min-height: 110px;
    resize: vertical;
    line-height: 1.5;
  }

  .eod-input:focus,
  .eod-select:focus,
  .eod-textarea:focus {
    border-color: #69bbe8;
    box-shadow: 0 0 0 3px rgba(105, 187, 232, 0.18);
  }

  .eod-date-field,
  .eod-date-wrap {
    width: 100%;
  }

  .eod-date-wrap {
    position: relative;
  }

  .eod-date-field-open {
    z-index: 120;
  }

  .eod-date-trigger {
    width: 100%;
    border: 1px solid #90d1ff;
    border-radius: 7px;
    background: #ffffff;
    color: #111827;
    padding: 10px 12px;
    padding-right: 44px;
    min-height: 42px;
    font-size: 0.95rem;
    text-align: left;
    cursor: pointer;
    transition: border-color .2s ease, box-shadow .2s ease, transform .2s ease;
    position: relative;
  }

  .eod-date-trigger:hover,
  .eod-date-trigger:focus {
    border-color: #69bbe8;
    box-shadow: 0 0 0 3px rgba(105, 187, 232, 0.18);
  }

  .eod-date-icon {
    position: absolute;
    right: 14px;
    top: 50%;
    transform: translateY(-50%);
    color: #6b7a90;
    pointer-events: none;
    display: inline-flex;
    align-items: center;
    justify-content: center;
  }

  .eod-date-placeholder {
    color: #73839a;
  }

  .eod-calendar-overlay {
    position: fixed;
    inset: 0;
    border: 0;
    background: transparent;
    cursor: default;
    z-index: 9990;
  }

  .eod-calendar-popover {
    position: absolute;
    top: calc(100% + 8px);
    left: 0;
    width: 308px;
    max-width: min(308px, calc(100vw - 32px));
    z-index: 9991;
    font-family: "Segoe UI", "Inter", Helvetica, Arial, sans-serif;
    overflow: hidden;
    border-radius: 14px;
    border: 1px solid #90d1ff;
    background: #ffffff;
    box-shadow: 0 16px 34px rgba(15, 23, 42, 0.16);
  }

  .eod-calendar-popover *,
  .eod-calendar-popover button {
    box-sizing: border-box;
    user-select: none;
    outline: none;
  }

  .eod-calendar-header {
    position: relative;
    display: flex;
    justify-content: space-between;
    background: #69bbe8;
    border-radius: 14px 14px 0 0;
    padding: 8px 10px;
    margin-bottom: 0;
  }

  .eod-calendar-header-highlight {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    width: 63.3333px;
    height: calc(100% - 12px);
    background: rgba(255, 255, 255, 0.22);
    transition: left .2s ease;
    box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2);
  }

  .eod-calendar-header-highlight.eod-view-0 {
    left: 59px;
    border-top-left-radius: 16px;
    border-bottom-left-radius: 16px;
  }

  .eod-calendar-header-highlight.eod-view-1 {
    left: 122.3333px;
  }

  .eod-calendar-header-highlight.eod-view-2 {
    left: 185.6666px;
    border-top-right-radius: 16px;
    border-bottom-right-radius: 16px;
  }

  .eod-calendar-header-outline {
    position: absolute;
    left: 50%;
    top: 50%;
    width: 190px;
    height: calc(100% - 12px);
    transform: translate(-50%, -50%);
    border: 1px solid rgba(255, 255, 255, 0.28);
    border-radius: 16px;
  }

  .eod-calendar-nav,
  .eod-calendar-segment {
    position: relative;
    height: 44px;
    padding: 0;
    margin: 0;
    background: none;
    border: 0;
    color: #ffffff;
    cursor: pointer;
    z-index: 1;
  }

  .eod-calendar-nav {
    min-width: 44px;
    font-size: 11px;
    font-weight: 600;
    opacity: 0.96;
    white-space: nowrap;
  }

  .eod-calendar-nav.prev {
    text-align: left;
    padding-left: 17.6px;
    margin-right: auto;
  }

  .eod-calendar-nav.next {
    text-align: right;
    padding-right: 17.6px;
    margin-left: auto;
  }

  .eod-calendar-nav::after {
    content: "";
    position: absolute;
    top: calc(50% - 6.5px);
    width: 11px;
    height: 11px;
    border-top: 2px solid #ffffff;
    border-right: 2px solid #ffffff;
  }

  .eod-calendar-nav.prev::after {
    left: 0;
    margin-left: 7.04px;
    transform: rotate(-135deg);
  }

  .eod-calendar-nav.next::after {
    right: 0;
    margin-right: 7.04px;
    transform: rotate(45deg);
  }

  .eod-calendar-nav.is-hidden {
    visibility: hidden;
    pointer-events: none;
  }

  .eod-calendar-segment {
    width: 63.3333px;
    font-size: 0.82rem;
    font-weight: 700;
    letter-spacing: 0.01em;
  }

  .eod-calendar-panel {
    border-radius: 0 0 18px 18px;
    overflow: hidden;
    background: linear-gradient(180deg, #ffffff 0%, #f8fbff 100%);
  }

  .eod-calendar-weekdays {
    display: flex;
    flex-wrap: nowrap;
  }

  .eod-calendar-grid {
    display: flex;
    flex-wrap: wrap;
  }

  .eod-calendar-months,
  .eod-calendar-years {
    display: flex;
    flex-wrap: wrap;
  }

  .eod-calendar-cell {
    position: relative;
    font-size: 11px;
    background: #ffffff;
    border: 0;
    color: #36506f;
    cursor: pointer;
    transition: background .16s ease, color .16s ease, transform .16s ease, box-shadow .16s ease;
  }

  .eod-calendar-cell:hover {
    background: #edf5ff;
    color: #19457f;
  }

  .eod-calendar-cell.dummy {
    background: linear-gradient(180deg, #214d87 0%, #173c6d 100%);
    color: #ffffff;
    cursor: default;
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 1;
    height: 36px;
    font-size: 11px;
    font-weight: 700;
    letter-spacing: 0.02em;
    white-space: nowrap;
  }

  .eod-calendar-cell.dummy:hover {
    background: #333333;
  }

  .eod-calendar-cell.chosen {
    background: linear-gradient(180deg, #e8f1ff 0%, #dbeafe 100%);
    border: 2px solid #2563eb;
    font-weight: 700;
    color: #123c76;
    box-shadow: 0 8px 18px rgba(37, 99, 235, 0.18);
  }

  .eod-calendar-cell.other-scope {
    color: #a3b1c2;
    background: #f8fbff;
  }

  .eod-calendar-cell .number {
    position: relative;
    z-index: 1;
  }

  .eod-calendar-grid .eod-calendar-cell {
    width: 44px;
    height: 44px;
    border-radius: 10px;
    margin: 0;
  }

  .eod-calendar-months .eod-calendar-cell {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .eod-calendar-years .eod-calendar-cell {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .eod-calendar-month {
    width: 25%;
    height: 72px;
    border-radius: 14px;
  }

  .eod-calendar-year {
    width: 20%;
    height: 58px;
    border-radius: 14px;
  }

  .eod-calendar-grid .eod-calendar-cell,
  .eod-calendar-month,
  .eod-calendar-year {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .eod-calendar-weekdays,
  .eod-calendar-grid,
  .eod-calendar-months,
  .eod-calendar-years {
    padding: 8px 10px 10px;
    gap: 0;
  }

  .eod-actions {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    gap: 10px;
    margin-top: 14px;
  }

  .eod-btn {
    border-radius: 7px;
    padding: 10px 16px;
    font-size: 0.92rem;
    font-weight: 600;
    cursor: pointer;
    transition: background .16s ease, border-color .16s ease, color .16s ease, opacity .16s ease;
  }

  .eod-btn:hover:not(:disabled) {
    opacity: 0.96;
  }

  .eod-btn:disabled {
    cursor: not-allowed;
    opacity: 0.55;
  }

  .eod-btn-secondary {
    border: 1px solid #90d1ff;
    background: #ffffff;
    color: #1f2937;
  }

  .eod-btn-primary {
    border: 1px solid #69bbe8;
    background: #69bbe8;
    color: #ffffff;
  }

  .eod-error {
    margin-top: 12px;
    padding: 12px 14px;
    border-radius: 14px;
    background: #fff1f2;
    border: 1px solid #fecdd3;
    color: #be123c;
    font-size: 0.92rem;
  }

  .eod-section-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 12px;
    background: #eef7ff;
    color: #111827;
    padding: 14px 18px;
    border-bottom: 1px solid #dbeffd;
  }

  .eod-section-header h4 {
    margin: 0;
    font-size: 0.98rem;
    font-weight: 700;
    letter-spacing: 0.02em;
  }

  .eod-section-header span {
    font-size: 0.84rem;
    color: #5f6f82;
  }

  .eod-section-body {
    padding: 16px 18px 18px;
  }

  .eod-option-row {
    display: flex;
    flex-wrap: wrap;
    gap: 10px 16px;
    margin-bottom: 16px;
    color: #203149;
  }

  .eod-check,
  .eod-radio {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    font-size: 0.9rem;
    color: #334155;
  }

  .eod-radio-group {
    display: inline-flex;
    align-items: center;
    gap: 12px;
    flex-wrap: wrap;
  }

  .eod-summary-grid {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 12px;
    margin-bottom: 16px;
  }

  .eod-summary-card {
    border-radius: 10px;
    border: 1px solid #dbeffd;
    background: #ffffff;
    padding: 15px 16px;
  }

  .eod-summary-card span {
    display: block;
    color: #5f6f84;
    font-size: 0.8rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.06em;
  }

  .eod-summary-card strong {
    display: block;
    margin-top: 8px;
    font-size: 1.06rem;
    color: #10233b;
  }

  .eod-toolbar {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    gap: 12px;
    margin-bottom: 14px;
  }

  .eod-toolbar-left,
  .eod-toolbar-right {
    display: flex;
    align-items: center;
    gap: 10px;
    flex-wrap: wrap;
  }

  .eod-toolbar-badge {
    padding: 7px 12px;
    border-radius: 7px;
    border: 1px solid #90d1ff;
    background: #eef7ff;
    color: #1f2937;
    font-size: 0.82rem;
    font-weight: 700;
  }

  .eod-pill-wrap {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
  }

  .eod-pill {
    border: 1px solid #90d1ff;
    background: #fff;
    color: #1f2937;
    border-radius: 7px;
    padding: 6px 10px;
    font-size: 0.78rem;
    font-weight: 700;
    cursor: pointer;
  }

  .eod-pill.active {
    background: #69bbe8;
    border-color: #69bbe8;
    color: #fff;
  }

  .eod-table-wrap {
    border: 1px solid #90d1ff;
    border-radius: 10px;
    overflow: hidden;
    position: relative;
    background: #fff;
  }

  .eod-table-scroll {
    overflow-x: auto;
  }

  .eod-table {
    width: 100%;
    border-collapse: separate;
    border-spacing: 0;
    min-width: 980px;
  }

  .eod-table thead th {
    position: sticky;
    top: 0;
    z-index: 1;
    background: #eef7ff;
    border-bottom: 1px solid #dbeffd;
    color: #374151;
    font-size: 0.82rem;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.04em;
    padding: 13px 12px;
    white-space: nowrap;
  }

  .eod-table thead th button {
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

  .eod-table tbody td {
    border-bottom: 1px solid #edf2f7;
    padding: 12px;
    font-size: 0.92rem;
    color: #213246;
    vertical-align: middle;
    white-space: nowrap;
  }

  .eod-table tbody tr:last-child td {
    border-bottom: 0;
  }

  .eod-table tbody tr.striped {
    background: #fbfdff;
  }

  .eod-table tbody tr.hoverable:hover {
    background: #f7fbff;
  }

  .eod-table tbody tr.selected {
    background: #eef7ff;
  }

  .eod-table .right {
    text-align: right;
  }

  .eod-table .center {
    text-align: center;
  }

  .eod-selection-col {
    width: 52px;
  }

  .eod-empty {
    padding: 40px 20px;
    text-align: center;
    color: #64748b;
    font-size: 0.94rem;
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
    color: #5f6f84;
    font-size: 0.86rem;
  }

  .eod-pagination-controls {
    display: flex;
    align-items: center;
    gap: 8px;
    flex-wrap: wrap;
  }

  .eod-mini-btn {
    border: 1px solid #90d1ff;
    background: #fff;
    color: #1f2937;
    border-radius: 7px;
    padding: 8px 12px;
    font-size: 0.86rem;
    font-weight: 600;
    cursor: pointer;
  }

  .eod-loading {
    position: absolute;
    inset: 0;
    background: rgba(255, 255, 255, 0.72);
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 12px;
    z-index: 2;
    color: #39aaf5;
    font-size: 0.95rem;
    font-weight: 700;
    backdrop-filter: blur(4px);
  }

  .eod-spinner {
    width: 18px;
    height: 18px;
    border-radius: 999px;
    border: 2px solid rgba(105, 187, 232, 0.24);
    border-top-color: #39aaf5;
    animation: eod-spin 0.8s linear infinite;
  }

  .eod-invest-summary-actions {
    margin-top: 12px;
    display: flex;
    justify-content: flex-end;
  }

  .eod-invest-modal {
    width: 100%;
    max-width: 560px;
    overflow-y: auto;
    border-radius: 14px;
    border: 1px solid #90d1ff;
    background: #ffffff;
    box-shadow: 0 12px 30px rgba(15, 23, 42, 0.12);
  }

  .eod-invest-modal-header {
    border-bottom: 1px solid #dbeffd;
    background: #eef7ff;
    padding: 16px 20px;
  }

  .eod-invest-modal-header h4 {
    margin: 0;
    color: #111827;
    font-size: 16px;
    font-weight: 700;
  }

  .eod-invest-modal-header p {
    margin: 4px 0 0;
    color: #5f6f82;
    font-size: 12px;
  }

  .eod-invest-modal-body {
    padding: 20px;
  }

  .eod-invest-field {
    margin-bottom: 16px;
  }

  .eod-invest-field label {
    display: block;
    margin-bottom: 6px;
    font-size: 13px;
    font-weight: 600;
    color: #1f2937;
  }

  .eod-invest-hint {
    margin: 6px 0 0;
    font-size: 12px;
    color: #64748b;
  }

  .eod-invest-modal-actions {
    display: flex;
    gap: 10px;
    justify-content: flex-end;
    padding-top: 4px;
  }

  @keyframes eod-spin {
    to { transform: rotate(360deg); }
  }

  .eod-formula-wrap {
    position: relative;
  }

  .eod-ac-dropdown {
    position: absolute;
    background: #fff;
    border: 1px solid #b8ccdf;
    border-radius: 8px;
    box-shadow: 0 8px 24px rgba(15, 23, 42, 0.15);
    z-index: 200;
    max-height: 210px;
    overflow-y: auto;
  }

  .eod-ac-item {
    padding: 10px 14px;
    font-size: 0.9rem;
    cursor: pointer;
    color: #162235;
    border-bottom: 1px solid #edf2f7;
    white-space: nowrap;
    transition: background .12s ease, color .12s ease;
  }

  .eod-ac-item:last-child {
    border-bottom: 0;
  }

  .eod-ac-item:hover,
  .eod-ac-item.active {
    background: #eaf2ff;
    color: #0f6adf;
  }

  .eod-formula-error {
    margin-top: 6px;
    font-size: 0.82rem;
    color: #be123c;
    font-weight: 600;
  }

  @media (max-width: 1280px) {
    .eod-grid { grid-template-columns: repeat(12, minmax(0, 1fr)); }
    .eod-field { grid-column: span 4; }
    .eod-field.eod-wide { grid-column: span 12; }
    .eod-field.eod-half { grid-column: span 4; }
    .eod-field.eod-small { grid-column: span 4; }
  }

  @media (max-width: 900px) {
    .eod-page { padding: 16px; }
    .eod-topbar { flex-direction: column; align-items: flex-start; }
    .eod-field,
    .eod-field.eod-half,
    .eod-field.eod-small,
    .eod-field.eod-wide { grid-column: span 12; }
    .eod-summary-grid { grid-template-columns: 1fr; }
    .eod-actions { justify-content: stretch; flex-wrap: wrap; }
    .eod-btn { width: 100%; justify-content: center; }
  }
`,".eod-page");function Xe({title:t,subtitle:l,rows:r,columns:d,options:o,setOptions:s,selectedRows:u,setSelectedRows:h,visibleColumns:v,setVisibleColumns:y,pageSize:f,setPageSize:N,pageIndex:C,setPageIndex:M,sortState:j,setSortState:S,searchText:E,setSearchText:O}){const m=i.useDeferredValue(E),w=i.useMemo(()=>{const a=m.trim().toLowerCase();return a?r.filter(p=>Object.values(p).some(P=>I(P).toLowerCase().includes(a))):r},[m,r]),c=i.useMemo(()=>{if(!j||!o.columnSortable)return w;const a=[...w];return a.sort((p,P)=>{const z=yt(p[j.key],P[j.key]);return j.direction==="asc"?z:-z}),a},[w,o.columnSortable,j]),x=o.showPaginator?Math.max(1,Math.ceil(c.length/f)):1,b=Math.min(C,x-1),A=o.showPaginator?b*f:0,B=o.showPaginator?c.slice(A,A+f):c,q=B.length>0&&B.every(a=>u.includes(_e(a)));i.useEffect(()=>{C!==b&&M(b)},[C,b,M]),i.useEffect(()=>{M(0)},[m,f,M]);const re=d.filter(a=>v.includes(a.key)),ne=a=>{o.rowSelectable&&h(p=>{const P=p.includes(a);return o.multiSelectable?P?p.filter(z=>z!==a):[...p,a]:P?[]:[a]})},fe=()=>{if(!o.rowSelectable)return;const a=B.map(p=>_e(p));h(p=>{if(q)return p.filter(z=>!a.includes(z));const P=new Set(o.multiSelectable?p:[]);return a.forEach(z=>P.add(z)),Array.from(P)})},ue=a=>{o.columnSortable&&S(p=>!p||p.key!==a?{key:a,direction:"asc"}:p.direction==="asc"?{key:a,direction:"desc"}:null)},me=a=>{y(p=>p.includes(a)?p.length===1?p:p.filter(P=>P!==a):[...p,a])};return e.jsxs("section",{className:"eod-card",children:[e.jsxs("div",{className:"eod-section-header",children:[e.jsx("h4",{children:t}),e.jsx("span",{children:l})]}),e.jsxs("div",{className:"eod-section-body",children:[e.jsxs("div",{className:"eod-option-row",children:[e.jsxs("label",{className:"eod-check",children:[e.jsx("input",{type:"checkbox",checked:o.rowSelectable,onChange:a=>s(p=>({...p,rowSelectable:a.target.checked}))})," Row Selectable"]}),e.jsxs("label",{className:"eod-check",children:[e.jsx("input",{type:"checkbox",checked:o.hideRowSelectionCheckbox,onChange:a=>s(p=>({...p,hideRowSelectionCheckbox:a.target.checked}))})," Hide checkbox"]}),e.jsxs("span",{className:"eod-radio-group",children:[e.jsxs("label",{className:"eod-radio",children:[e.jsx("input",{type:"radio",checked:!o.multiSelectable,onChange:()=>s(a=>({...a,multiSelectable:!1}))})," Single Selectable"]}),e.jsxs("label",{className:"eod-radio",children:[e.jsx("input",{type:"radio",checked:o.multiSelectable,onChange:()=>s(a=>({...a,multiSelectable:!0}))})," Multiple Selectable"]})]}),e.jsxs("label",{className:"eod-check",children:[e.jsx("input",{type:"checkbox",checked:o.showToolbar,onChange:a=>s(p=>({...p,showToolbar:a.target.checked}))})," Show Toolbar"]}),e.jsxs("label",{className:"eod-check",children:[e.jsx("input",{type:"checkbox",checked:o.columnHideable,onChange:a=>s(p=>({...p,columnHideable:a.target.checked}))})," Column Hiding"]}),e.jsxs("label",{className:"eod-check",children:[e.jsx("input",{type:"checkbox",checked:o.columnSortable,onChange:a=>s(p=>({...p,columnSortable:a.target.checked}))})," Column Sorting"]}),e.jsxs("label",{className:"eod-check",children:[e.jsx("input",{type:"checkbox",checked:o.columnPinnable,onChange:a=>s(p=>({...p,columnPinnable:a.target.checked}))})," Column Pinning"]}),e.jsxs("label",{className:"eod-check",children:[e.jsx("input",{type:"checkbox",checked:o.rowHover,onChange:a=>s(p=>({...p,rowHover:a.target.checked}))})," Hover"]}),e.jsxs("label",{className:"eod-check",children:[e.jsx("input",{type:"checkbox",checked:o.rowStriped,onChange:a=>s(p=>({...p,rowStriped:a.target.checked}))})," Striped"]}),e.jsxs("label",{className:"eod-check",children:[e.jsx("input",{type:"checkbox",checked:o.showPaginator,onChange:a=>s(p=>({...p,showPaginator:a.target.checked}))})," Show Paginator"]}),e.jsxs("label",{className:"eod-check",children:[e.jsx("input",{type:"checkbox",checked:o.loadingStatus,onChange:a=>s(p=>({...p,loadingStatus:a.target.checked}))})," Loading Status"]}),e.jsxs("label",{className:"eod-check",children:[e.jsx("input",{type:"checkbox",checked:o.columnResizable,onChange:a=>s(p=>({...p,columnResizable:a.target.checked}))})," Column Resizable"]})]}),o.showToolbar?e.jsxs("div",{className:"eod-toolbar",children:[e.jsxs("div",{className:"eod-toolbar-left",children:[e.jsxs("span",{className:"eod-toolbar-badge",children:[r.length," rows"]}),e.jsx("input",{className:"eod-input",style:{width:"240px"},value:E,onChange:a=>O(a.target.value),placeholder:"Search symbol, sector, universe..."})]}),e.jsx("div",{className:"eod-toolbar-right",children:o.columnHideable?e.jsx("div",{className:"eod-pill-wrap",children:d.map(a=>e.jsx("button",{type:"button",className:`eod-pill ${v.includes(a.key)?"active":""}`,onClick:()=>me(a.key),children:a.label},a.key))}):null})]}):null,e.jsxs("div",{className:"eod-table-wrap",children:[o.loadingStatus?e.jsxs("div",{className:"eod-loading",children:[e.jsx("span",{className:"eod-spinner"}),"Loading rows..."]}):null,w.length===0?e.jsx("div",{className:"eod-empty",children:"No rows available for the current filters."}):e.jsx("div",{className:"eod-table-scroll",children:e.jsxs("table",{className:"eod-table",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[o.rowSelectable&&!o.hideRowSelectionCheckbox?e.jsx("th",{className:"eod-selection-col center",children:e.jsx("input",{type:"checkbox",checked:q,onChange:fe})}):null,re.map(a=>e.jsx("th",{className:a.align==="right"?"right":a.align==="center"?"center":"",children:e.jsxs("button",{type:"button",onClick:()=>ue(a.key),children:[a.label,(j==null?void 0:j.key)===a.key?j.direction==="asc"?"↑":"↓":o.columnSortable?"↕":""]})},a.key))]})}),e.jsx("tbody",{children:B.map((a,p)=>{const P=_e(a),z=u.includes(P);return e.jsxs("tr",{className:[o.rowStriped&&p%2===1?"striped":"",o.rowHover?"hoverable":"",z?"selected":""].join(" "),onClick:()=>{o.rowSelectable&&o.hideRowSelectionCheckbox&&ne(P)},children:[o.rowSelectable&&!o.hideRowSelectionCheckbox?e.jsx("td",{className:"center",children:e.jsx("input",{type:"checkbox",checked:z,onChange:()=>ne(P)})}):null,re.map(W=>e.jsx("td",{className:W.align==="right"?"right":W.align==="center"?"center":"",children:W.formatter?W.formatter(a[W.key],a):I(a[W.key]??"—")},W.key))]},P)})})]})})]}),o.showPaginator&&w.length>0?e.jsxs("div",{className:"eod-pagination",children:[e.jsxs("div",{className:"eod-pagination-info",children:["Showing ",Math.min(A+1,w.length)," to ",Math.min(A+f,w.length)," of ",w.length," rows"]}),e.jsxs("div",{className:"eod-pagination-controls",children:[e.jsx("select",{className:"eod-select",style:{width:"92px",minWidth:"92px"},value:f,onChange:a=>N(Number(a.target.value)),children:ht.map(a=>e.jsxs("option",{value:a,children:[a,"/page"]},a))}),e.jsx("button",{type:"button",className:"eod-mini-btn",disabled:b===0,onClick:()=>M(a=>Math.max(0,a-1)),children:"Prev"}),e.jsxs("span",{className:"eod-pagination-info",children:["Page ",b+1," / ",x]}),e.jsx("button",{type:"button",className:"eod-mini-btn",disabled:b>=x-1,onClick:()=>M(a=>Math.min(x-1,a+1)),children:"Next"})]})]}):null]})]})}function Tt(t,l,r){const d=l.getBoundingClientRect(),o=t.getBoundingClientRect(),s=getComputedStyle(t),u=document.createElement("div");Object.assign(u.style,{position:"fixed",top:`${o.top}px`,left:`${o.left}px`,width:`${o.width}px`,height:`${o.height}px`,overflow:"auto",whiteSpace:"pre-wrap",wordBreak:"break-word",visibility:"hidden",pointerEvents:"none",fontFamily:s.fontFamily,fontSize:s.fontSize,fontWeight:s.fontWeight,lineHeight:s.lineHeight,letterSpacing:s.letterSpacing,paddingTop:s.paddingTop,paddingRight:s.paddingRight,paddingBottom:s.paddingBottom,paddingLeft:s.paddingLeft,borderTopWidth:s.borderTopWidth,borderRightWidth:s.borderRightWidth,borderBottomWidth:s.borderBottomWidth,borderLeftWidth:s.borderLeftWidth,boxSizing:s.boxSizing}),document.body.appendChild(u),u.textContent=t.value.slice(0,r);const h=document.createElement("span");h.textContent="​",u.appendChild(h),u.scrollTop=t.scrollTop;const v=h.getBoundingClientRect();return document.body.removeChild(u),{top:v.bottom-d.top,left:v.left-d.left}}function Ft({value:t,onChange:l}){const r=i.useRef(null),d=i.useRef(null),[o,s]=i.useState([]),[u,h]=i.useState(0),[v,y]=i.useState({start:0,end:0}),[f,N]=i.useState(""),[C,M]=i.useState(null),j=i.useRef(null);i.useEffect(()=>{j.current!==null&&r.current&&(r.current.setSelectionRange(j.current,j.current),j.current=null)});function S(m,w){const c="+-*/()";let x=w;for(;x>0&&!c.includes(m[x-1]);)x--;for(;x<w&&m[x]===" ";)x++;return{token:m.slice(x,w),start:x,end:w}}function E(m,w){const{token:c,start:x,end:b}=S(m,w),A=c.trim().toLowerCase(),B=A?xt.filter(q=>q.toLowerCase().includes(A)):[];s(B),h(0),y({start:x,end:b}),B.length>0&&r.current&&d.current?M(Tt(r.current,d.current,w)):M(null)}function O(m){var b;const w=t.slice(0,v.start),c=t.slice(v.end),x=w+m+c;l(x),N(Ue(x)),s([]),M(null),j.current=v.start+m.length,(b=r.current)==null||b.focus()}return e.jsxs("div",{className:"eod-formula-wrap",ref:d,children:[e.jsx("textarea",{ref:r,className:"eod-textarea",value:t,onChange:m=>{l(m.target.value),N(Ue(m.target.value)),E(m.target.value,m.target.selectionStart??m.target.value.length)},onKeyDown:m=>{o.length!==0&&(m.key==="ArrowDown"?(m.preventDefault(),h(w=>Math.min(w+1,o.length-1))):m.key==="ArrowUp"?(m.preventDefault(),h(w=>Math.max(w-1,0))):m.key==="Enter"||m.key==="Tab"?(m.preventDefault(),O(o[u])):m.key==="Escape"&&(s([]),M(null)))},onFocus:m=>E(m.target.value,m.target.selectionStart??0),onClick:m=>E(m.currentTarget.value,m.currentTarget.selectionStart??0),onBlur:()=>setTimeout(()=>{s([]),M(null)},150)}),o.length>0&&C&&e.jsx("div",{className:"eod-ac-dropdown",style:{top:`${C.top}px`,left:`${C.left}px`,width:"260px"},children:o.map((m,w)=>e.jsx("div",{className:`eod-ac-item${w===u?" active":""}`,onMouseDown:c=>{c.preventDefault(),O(m)},children:m},m))}),f&&e.jsx("div",{className:"eod-formula-error",children:f})]})}function Lt(){var Oe;const[t,l]=i.useState(Be),[r,d]=i.useState([]),[o,s]=i.useState([]),[u,h]=i.useState(!0),[v,y]=i.useState(!1),[f,N]=i.useState(""),[C,M]=i.useState([]),[j,S]=i.useState([]),[E,O]=i.useState({total_capital:0,used_capital:0,remaining_capital:0}),[m,w]=i.useState(He),[c,x]=i.useState(He),[b,A]=i.useState(null),[B,q]=i.useState(null),[re,ne]=i.useState(15),[fe,ue]=i.useState(15),[me,a]=i.useState(0),[p,P]=i.useState(0),[z,W]=i.useState(""),[Ze,Pe]=i.useState(""),[et,he]=i.useState([]),[tt,ge]=i.useState([]),[ot,Ee]=i.useState(je.map(n=>n.key)),[at,Re]=i.useState(Ne.map(n=>n.key)),[xe,be]=i.useState(!1),[K,Te]=i.useState([{value:"__new__",label:"Add New Portfolio"}]),[V,ye]=i.useState("__new__"),[ve,le]=i.useState(""),[we,Se]=i.useState(""),[Fe,Ie]=i.useState(!1),[se,Ae]=i.useState([{value:"paper_trade",label:"Virtual (Paper Trade)",brokerType:"paper",isLoggedIn:!0}]),[J,ie]=i.useState("paper_trade"),[ze,Le]=i.useState(!1),[ke,$e]=i.useState(!1);i.useEffect(()=>{let n=!0;return(async()=>{try{h(!0);const[L,F]=await Promise.all([fetch(`${Z}/indexes`),fetch(`${Z}/sectors`)]);if(!L.ok||!F.ok)throw new Error("Scanner metadata fetch failed.");const[g,D]=await Promise.all([L.json(),F.json()]);if(!n)return;d(Array.isArray(g==null?void 0:g.items)?g.items:Array.isArray(g)?g:[]),s(Array.isArray(D==null?void 0:D.items)?D.items:Array.isArray(D)?D:[])}catch(L){if(!n)return;N(L instanceof Error?L.message:"Unable to load scanner filters.")}finally{n&&h(!1)}})(),()=>{n=!1}},[]),i.useEffect(()=>{Ee(qe(je,C).map(n=>n.key))},[C]),i.useEffect(()=>{Re(qe(Ne,j).map(n=>n.key))},[j]),i.useEffect(()=>{let n=!0;if(!xe)return()=>{n=!1};const $=async()=>{try{Ie(!0);const F=await fetch(`${Z}/get_portfolio`),g=await F.json().catch(()=>[]);if(!F.ok)throw new Error("Failed to load portfolios.");if(!n)return;const k=(Array.isArray(g)?g:Array.isArray(g==null?void 0:g.items)?g.items:[]).map(T=>{const Q=String((T==null?void 0:T._id)||"").trim(),U=String((T==null?void 0:T.name)||"").trim();return Q&&U?{value:Q,label:U}:null}).filter(T=>!!T),X=Array.from(new Map(k.map(T=>[T.value,T])).values());Te([{value:"__new__",label:"Add New Portfolio"},...X])}catch{if(!n)return;Te([{value:"__new__",label:"Add New Portfolio"}])}finally{n&&Ie(!1)}},L=async()=>{try{Le(!0);const F=await fetch(`${mt}/broker-configurations?broker_type=live`),g=await F.json().catch(()=>({}));if(!F.ok)throw new Error("Failed to load brokers.");if(!n)return;const D=(Array.isArray(g==null?void 0:g.records)?g.records:[]).filter(k=>String((k==null?void 0:k.user_id)||"")===gt).map(k=>{const X=String((k==null?void 0:k.name)||(k==null?void 0:k.broker_name)||"Broker").trim(),T=!!(k!=null&&k.is_logged_in)&&!(k!=null&&k.session_expired);return{value:String((k==null?void 0:k._id)||""),label:`${X} (${T?"Logged In":"Not Logged In"})`,brokerType:"live",isLoggedIn:T}}).filter(k=>k.value);Ae([{value:"paper_trade",label:"Virtual (Paper Trade)",brokerType:"paper",isLoggedIn:!0},...D])}catch{if(!n)return;Ae([{value:"paper_trade",label:"Virtual (Paper Trade)",brokerType:"paper",isLoggedIn:!0}])}finally{n&&Le(!1)}};return $(),L(),()=>{n=!1}},[xe]),i.useEffect(()=>{if(V!=="__new__"){const n=K.find($=>$.value===V);le((n==null?void 0:n.label)||"")}},[K,V]),i.useEffect(()=>{se.some(n=>n.value===J)||ie("paper_trade")},[se,J]);const H=(n,$)=>{l(L=>({...L,[n]:$}))},rt=async()=>{try{y(!0),N("");const n=Math.max(0,R(t.capital,1e6)),$=Math.max(1,R(t.topN,12)),L={index_name:t.indices,sectors:t.sectors,min_price:R(t.minPrice,0)<=0?null:R(t.minPrice),max_price:R(t.maxPrice,0)<=0?null:R(t.maxPrice),top_n:$,total_capital:n,score_date:t.scoreDate||G(),formula:t.formula||Ce,score_model:t.scoreModel||"current"},F=await fetch(`${Z}/eod_scoring`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(L)}),g=await F.json();if(!F.ok||(g==null?void 0:g.status)==="error")throw new Error(I((g==null?void 0:g.message)||"Unable to fetch score results."));const D=wt(g==null?void 0:g.stocks_scored),k=St(D,n,$);M(D),S(k.portfolio),O(k.summary),he([]),ge([]),a(0),P(0)}catch(n){N(n instanceof Error?n.message:"Unable to fetch score results.")}finally{y(!1)}},Ve=async()=>{const n=K.find(D=>D.value===V),$=V==="__new__"?ve.trim():String((n==null?void 0:n.label)||"").trim(),L=V==="__new__"?"":String((n==null?void 0:n.value)||"").trim(),F=we.trim(),g=se.find(D=>D.value===J);if(!(!$||!F||!g))try{$e(!0);const D=t.scoreDate||G(),k=Math.max(0,R(t.capital,1e6)),X=Math.max(1,R(t.topN,12)),T={portfolio_settings:{strategy_name:F,portfolio_name:$,portfolio_id:L,starting_capital:k,entry_rank:X,score_date:D,indexes:t.indices,sectors:t.sectors,formula:t.formula||Ce,score_model:t.scoreModel||"current",broker:g.brokerType==="live"?g.value:"",broker_id:g.brokerType==="live"?g.value:"",broker_type:g.brokerType,broker_name:g.label},invest_stock_data:j},Q=await fetch(`${Z}/save_portfolio`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(T)}),U=await Q.json();if(!Q.ok||(U==null?void 0:U.status)==="error")throw new Error(I((U==null?void 0:U.message)||"Failed to save portfolio."));be(!1),ye("__new__"),le(""),Se(""),ie("paper_trade")}catch(D){N(D instanceof Error?D.message:"Failed to save portfolio.")}finally{$e(!1)}},Ye=()=>{ke||(be(!1),ye("__new__"),le(""),Se(""),ie("paper_trade"))},nt={width:"100%",maxWidth:"560px",overflowY:"auto",borderRadius:"14px",border:"1px solid #90d1ff",background:"#ffffff",boxShadow:"0 12px 30px rgba(15, 23, 42, 0.12)"},lt={borderBottom:"1px solid #dbeffd",background:"#eef7ff",padding:"16px 20px"},st={padding:"20px"},de={marginBottom:"16px"},ce={display:"block",marginBottom:"6px",fontSize:"13px",fontWeight:600,color:"#1f2937"},pe={width:"100%",border:"1px solid #90d1ff",borderRadius:"7px",background:"#ffffff",color:"#111827",padding:"10px 12px",fontSize:"14px",outline:"none",boxSizing:"border-box"},We={margin:"6px 0 0",fontSize:"12px",color:"#64748b"},it={display:"flex",gap:"10px",justifyContent:"flex-end",paddingTop:"4px"},dt=()=>{l(Be),N(""),M([]),S([]),O({total_capital:0,used_capital:0,remaining_capital:0}),W(""),Pe(""),he([]),ge([])};return e.jsxs(e.Fragment,{children:[e.jsx(ct,{title:"FinEdge Scanner | EOD Score",description:"End of day scanner and score allocator"}),e.jsx("style",{children:Rt}),e.jsxs("div",{className:"eod-page",children:[e.jsx(ft,{pageTitle:"EOD Score"}),e.jsxs("div",{className:"eod-shell",children:[e.jsxs("section",{className:"eod-card eod-form-card",children:[e.jsxs("div",{className:"eod-topbar",children:[e.jsxs("div",{className:"eod-title-wrap",children:[e.jsx("h3",{children:"finEdge Scanner"}),e.jsx("p",{children:"Score shortlisted stocks, review capital allocation, and invest from the same workspace."})]}),e.jsx("div",{className:"eod-chip",children:e.jsx("span",{children:u?"Loading filters...":`${r.length} indices · ${o.length} sectors`})})]}),e.jsxs("div",{className:"eod-grid",children:[e.jsx(Je,{label:"Index",required:!0,options:r,values:t.indices,placeholder:"Select Index",onChange:n=>H("indices",n)}),e.jsx(Je,{label:"Sector",options:o,values:t.sectors,placeholder:"Select Sector",onChange:n=>H("sectors",n)}),e.jsxs("div",{className:"eod-field eod-small",children:[e.jsx("label",{className:"eod-required",children:"Min value"}),e.jsx("input",{className:"eod-input",type:"number",value:t.minPrice,onChange:n=>H("minPrice",n.target.value)})]}),e.jsxs("div",{className:"eod-field eod-small",children:[e.jsx("label",{className:"eod-required",children:"Max value"}),e.jsx("input",{className:"eod-input",type:"number",value:t.maxPrice,onChange:n=>H("maxPrice",n.target.value)})]}),e.jsx(Et,{label:"Score date",required:!0,value:t.scoreDate,onChange:n=>H("scoreDate",n)}),e.jsxs("div",{className:"eod-field eod-half",children:[e.jsx("label",{children:"EOD Score Model"}),e.jsxs("select",{className:"eod-input",value:t.scoreModel,onChange:n=>H("scoreModel",n.target.value),children:[e.jsx("option",{value:"current",children:"Current EOD Score"}),e.jsx("option",{value:"old",children:"Old EOD Score"})]})]}),e.jsxs("div",{className:"eod-field eod-wide",children:[e.jsx("label",{children:"Scoring Console"}),e.jsx(Ft,{value:t.formula,onChange:n=>H("formula",n)})]}),e.jsxs("div",{className:"eod-field eod-half",children:[e.jsx("label",{children:"Capital"}),e.jsx("input",{className:"eod-input",type:"number",value:t.capital,onChange:n=>H("capital",n.target.value)})]}),e.jsxs("div",{className:"eod-field eod-half",children:[e.jsx("label",{children:"No of Stocks"}),e.jsx("input",{className:"eod-input",type:"number",min:"1",value:t.topN,onChange:n=>H("topN",n.target.value)})]})]}),e.jsxs("div",{className:"eod-actions",children:[e.jsx("button",{type:"button",className:"eod-btn eod-btn-secondary",onClick:dt,children:"Cancel"}),e.jsx("button",{type:"button",className:"eod-btn eod-btn-primary",onClick:rt,disabled:v||u,children:v?"Scoring...":"Score"})]}),f?e.jsx("div",{className:"eod-error",children:f}):null]}),j.length>0?e.jsxs(e.Fragment,{children:[e.jsxs("section",{className:"eod-card",children:[e.jsxs("div",{className:"eod-section-header",children:[e.jsx("h4",{children:"CAPITAL SUMMARY"}),e.jsx("span",{children:"Equal allocation overview"})]}),e.jsxs("div",{className:"eod-section-body",children:[e.jsxs("div",{className:"eod-summary-grid",children:[e.jsxs("div",{className:"eod-summary-card",children:[e.jsx("span",{children:"Capital"}),e.jsx("strong",{children:oe(E.total_capital)})]}),e.jsxs("div",{className:"eod-summary-card",children:[e.jsx("span",{children:"Used"}),e.jsx("strong",{children:oe(E.used_capital)})]}),e.jsxs("div",{className:"eod-summary-card",children:[e.jsx("span",{children:"Remaining"}),e.jsx("strong",{children:oe(E.remaining_capital)})]})]}),e.jsx("div",{className:"eod-invest-summary-actions",children:e.jsx("button",{type:"button",className:"eod-btn eod-btn-primary",onClick:()=>be(!0),children:"Invest Now"})})]})]}),e.jsx(Xe,{title:"EOD INVESTMENT RESULT",subtitle:"Portfolio-ready picks",rows:j,columns:Ne,options:c,setOptions:x,selectedRows:tt,setSelectedRows:ge,visibleColumns:at,setVisibleColumns:Re,pageSize:fe,setPageSize:ue,pageIndex:p,setPageIndex:P,sortState:B,setSortState:q,searchText:Ze,setSearchText:Pe})]}):null,C.length>0?e.jsx(Xe,{title:"EOD SCORE RESULT",subtitle:"Raw score engine output",rows:C,columns:je,options:m,setOptions:w,selectedRows:et,setSelectedRows:he,visibleColumns:ot,setVisibleColumns:Ee,pageSize:re,setPageSize:ne,pageIndex:me,setPageIndex:a,sortState:b,setSortState:A,searchText:z,setSearchText:W}):null]})]}),e.jsx(pt,{isOpen:xe,onClose:Ye,className:"max-w-[560px] m-4",children:e.jsxs("div",{style:nt,children:[e.jsxs("div",{style:lt,children:[e.jsx("h4",{style:{margin:0,color:"#111827",fontSize:"16px",fontWeight:700},children:"Invest Strategy"}),e.jsxs("p",{style:{margin:"4px 0 0",color:"#5f6f82",fontSize:"12px"},children:["Portfolio will be created at prices for ",e.jsx("strong",{style:{color:"#111827"},children:t.scoreDate||G()})]})]}),e.jsxs("div",{style:st,children:[e.jsxs("div",{style:de,children:[e.jsx("label",{style:ce,children:"Portfolio"}),e.jsx("select",{style:pe,value:V,onChange:n=>ye(n.target.value),disabled:Fe,children:K.map(n=>e.jsx("option",{value:n.value,children:n.label},n.value))}),Fe?e.jsx("p",{style:We,children:"Loading portfolios..."}):null]}),V==="__new__"?e.jsxs("div",{style:de,children:[e.jsx("label",{style:ce,children:"Portfolio Name"}),e.jsx("input",{type:"text",style:pe,placeholder:"Enter portfolio name",value:ve,onChange:n=>le(n.target.value),autoFocus:!0})]}):null,e.jsxs("div",{style:de,children:[e.jsx("label",{style:ce,children:"Strategy Name"}),e.jsx("input",{type:"text",style:pe,placeholder:"Enter strategy name",value:we,onChange:n=>Se(n.target.value),onKeyDown:n=>{n.key==="Enter"&&Ve()},autoFocus:V!=="__new__"})]}),e.jsxs("div",{style:de,children:[e.jsx("label",{style:ce,children:"Broker"}),e.jsx("select",{style:pe,value:J,onChange:n=>ie(n.target.value),disabled:ze,children:se.map(n=>e.jsx("option",{value:n.value,children:n.label},n.value))}),ze?e.jsx("p",{style:We,children:"Loading broker list..."}):null]}),e.jsxs("div",{style:it,children:[e.jsx("button",{type:"button",className:"eod-btn eod-btn-secondary",onClick:Ye,children:"Cancel"}),e.jsx("button",{type:"button",className:"eod-btn eod-btn-primary",onClick:Ve,disabled:ke||!(V==="__new__"?ve.trim():String(((Oe=K.find(n=>n.value===V))==null?void 0:Oe.label)||"").trim())||!we.trim()||!J,children:ke?"Saving...":"Invest Now"})]})]})]})})]})}export{Lt as default};
