import{j as e}from"./jsx-runtime.u17CrQMm.js";import{r as w}from"./index.D0zW3GPc.js";import{u as G}from"./useCountUp.BvaCF-JC.js";import{C as t,R as W,A as L,X as R,Y as O,T as V,a as A}from"./calc-colors.CA_o-Cja.js";import{R as P}from"./ReferenceLine.Ctacf0t6.js";const z=n=>new Intl.NumberFormat("cs-CZ",{style:"currency",currency:"CZK",maximumFractionDigits:0}).format(n),D=n=>n>=1e6?`${(n/1e6).toFixed(1)}M`:n>=1e3?`${(n/1e3).toFixed(0)}K`:`${0|n}`;function B(n,d,l,f,i,h,r,o){const p=Math.pow(1+d/100,.08333333333333333)-1,c=Math.pow(1+i/100,1/12)-1,x=f*12,m=h*12;let s,j,u;o?(j=n*Math.pow(1+r/100,f),c<1e-12?s=j*m:s=j*(1-Math.pow(1+c,-m))/c,u=j*m):(j=n,s=c>1e-12?n*(1-Math.pow(1+c,-m))/c:n*m,u=n*m),s=Math.max(0,s);const C=l*Math.pow(1+p,x),b=s-C;let g;x<=0||b<=0?g=0:p<1e-12?g=b/x:g=b*p/(Math.pow(1+p,x)-1);const M=l+g*x,I=Math.max(0,s-M),K=Math.max(0,u-s),S=[];let k=l,F=l;S.push({year:0,deposited:l,savingGain:0,drawdown:null,inflLoss:null});for(let a=1;a<=x;a++)if(k=k*(1+p)+g,F+=g,a%12===0){const y=a/12,N=Math.max(0,k);S.push({year:y,deposited:F,savingGain:Math.max(0,k-F),drawdown:y===f?k:null,inflLoss:o?Math.max(0,N-N/Math.pow(1+r/100,y)):null})}let v=k;for(let a=1;a<=m;a++){const y=j;if(v=v*(1+c)-y,a%12===0){const N=Math.max(0,v);S.push({year:f+a/12,deposited:null,savingGain:null,drawdown:N,inflLoss:o?Math.max(0,N-N/Math.pow(1+r/100,f+a/12)):null})}}return{monthly:g,requiredCapital:s,totalContributed:M,phase1Gain:I,phase2Gain:K,totalDrawn:u,yearlyData:S}}function $({label:n,min:d,max:l,step:f,numStep:i,value:h,onChange:r,suffix:o,lo:p,hi:c}){const x=(h-d)/(l-d)*100;return e.jsxs("div",{className:"renta-field space-y-1.5",children:[e.jsx("p",{className:"renta-field-label text-[15px] font-semibold text-[#2c1810] tracking-wide break-words",children:n}),e.jsxs("div",{className:"renta-range-labels flex justify-between text-[12px] text-[#b09080]",children:[e.jsx("span",{children:p??d}),e.jsx("span",{children:c??l})]}),e.jsx("input",{type:"range",min:d,max:l,step:f,value:h,onChange:m=>r(+m.target.value),className:"w-full slider",style:{background:`linear-gradient(to right, ${t.mid} ${x}%, ${t.track} ${x}%)`},"aria-label":n}),e.jsx("div",{className:"flex justify-end mt-1",children:e.jsxs("label",{className:"renta-number-control flex items-center gap-1.5 bg-white/60 border border-[#d4bfae]/80 rounded-xl px-3 py-2 shadow-sm",children:[e.jsx("input",{type:"number",min:d,max:l,step:i??f,value:h,onChange:m=>{const s=+m.target.value;isNaN(s)||r(Math.min(l,Math.max(d,s)))},className:"renta-number-input w-24 sm:w-32 text-right text-[16px] font-semibold text-[#2c1810] bg-transparent outline-none tabular-nums"}),o&&e.jsx("span",{className:"renta-number-suffix text-[13px] text-[#b09080] font-medium",children:o})]})})]})}function q({deposits:n,phase1Gain:d,phase2Gain:l,capital:f}){const i=n+d+l||1,h=80,r=100,o=100,p=28,c=2*Math.PI*h,x=n/i,m=d/i,s=l/i,j=x*c,u=m*c,C=s*c,b=x*360-90,g=(x+m)*360-90,M=D(f);return e.jsxs("svg",{viewBox:"0 0 200 200",className:"w-full max-w-[280px] mx-auto",children:[e.jsx("circle",{cx:r,cy:o,r:h,fill:"none",stroke:t.cream,strokeWidth:p}),e.jsx("circle",{cx:r,cy:o,r:h,fill:"none",stroke:t.dark,strokeWidth:p,strokeDasharray:`${j} ${c}`,strokeLinecap:"butt",style:{transform:"rotate(-90deg)",transformOrigin:`${r}px ${o}px`}}),e.jsx("circle",{cx:r,cy:o,r:h,fill:"none",stroke:t.amber,strokeWidth:p,strokeDasharray:`${u} ${c}`,strokeLinecap:"butt",style:{transform:`rotate(${b}deg)`,transformOrigin:`${r}px ${o}px`}}),e.jsx("circle",{cx:r,cy:o,r:h,fill:"none",stroke:t.green,strokeWidth:p,strokeDasharray:`${C} ${c}`,strokeLinecap:"butt",style:{transform:`rotate(${g}deg)`,transformOrigin:`${r}px ${o}px`}}),e.jsx("text",{x:r,y:o-18,textAnchor:"middle",fontSize:"7.5",fill:t.muted,letterSpacing:"1.1",fontFamily:"system-ui,sans-serif",fontWeight:"700",children:"POTŘEBNÝ"}),e.jsx("text",{x:r,y:o-7,textAnchor:"middle",fontSize:"7.5",fill:t.muted,letterSpacing:"1.1",fontFamily:"system-ui,sans-serif",fontWeight:"700",children:"KAPITÁL"}),e.jsx("text",{x:r,y:o+18,textAnchor:"middle",fontSize:"22",fill:t.text,fontWeight:"700",fontFamily:"Georgia,serif",children:M})]})}const E=({active:n,payload:d,label:l})=>{if(!n||!d?.length)return null;const f=d.filter(i=>i.value!=null&&i.value>0);return f.length?e.jsxs("div",{className:"bg-white/90 backdrop-blur-xl border border-[#d4bfae]/60 rounded-2xl px-4 py-3 shadow-2xl",children:[e.jsxs("p",{className:"text-[12px] font-bold text-[#2c1810] mb-2 tracking-widest uppercase",children:["Rok ",l]}),f.map((i,h)=>e.jsxs("div",{className:"flex items-center gap-2 py-0.5",children:[e.jsx("span",{className:"w-2.5 h-2.5 rounded-[3px]",style:{background:i.color}}),e.jsxs("span",{className:"text-[12px] text-[#8a6a5a]",children:[i.name,":"]}),e.jsx("span",{className:"text-[13px] font-bold text-[#2c1810] tabular-nums",children:z(i.value)})]},h))]}):null};function X(){const[n,d]=w.useState(8),[l,f]=w.useState(1e5),[i,h]=w.useState(30),[r,o]=w.useState(25e3),[p,c]=w.useState(25),[x,m]=w.useState(4),[s,j]=w.useState(!1),[u,C]=w.useState(3.2),b=w.useMemo(()=>B(r,n,l,i,x,p,u,s),[r,n,l,i,x,p,u,s]),g=G(b.monthly),M=G(b.requiredCapital),I=G(b.totalContributed),K=G(b.phase1Gain),S=G(b.phase2Gain),k=b.yearlyData.map(a=>({year:a.year,Vklady:a.deposited,"Výnos ze spoření":a.savingGain,"Čerpání penze":a.drawdown,Inflace:a.inflLoss})),F=b.monthly===0&&l>0,v={background:"rgba(252,245,237,0.72)",backdropFilter:"blur(20px) saturate(1.4)",WebkitBackdropFilter:"blur(20px) saturate(1.4)",border:"1px solid rgba(255,255,255,0.65)",boxShadow:"0 4px 32px rgba(80,40,10,0.10), inset 0 1px 0 rgba(255,255,255,0.8)"};return e.jsxs("div",{className:"renta-calculator",children:[e.jsxs("div",{children:[e.jsxs("div",{className:"renta-top-grid",children:[e.jsxs("div",{className:"renta-card rounded-3xl space-y-5",style:v,children:[e.jsxs("div",{children:[e.jsx("p",{className:"text-[12px] uppercase tracking-[0.22em] text-[#b09080] font-bold mb-1",children:"Fáze 1"}),e.jsx("h2",{className:"text-[22px] sm:text-[24px] font-bold text-[#2c1810] whitespace-nowrap",style:{fontFamily:"Georgia,serif",lineHeight:1.1},children:"Spoření"})]}),e.jsx($,{label:"Roční výnos",min:1,max:20,step:.1,value:n,onChange:d,suffix:"%",lo:"1 %",hi:"20 %"}),e.jsx($,{label:"Počáteční vklad",min:0,max:5e6,step:5e3,numStep:1,value:l,onChange:f,suffix:"Kč",lo:"0 Kč",hi:"5M Kč"}),e.jsx($,{label:"Délka spoření",min:1,max:50,step:1,value:i,onChange:h,suffix:"let",lo:"1 rok",hi:"50 let"})]}),e.jsxs("div",{className:"renta-card rounded-3xl space-y-5",style:v,children:[e.jsxs("div",{children:[e.jsx("p",{className:"text-[12px] uppercase tracking-[0.22em] text-[#b09080] font-bold mb-1",children:"Fáze 2"}),e.jsx("h2",{className:"text-[22px] sm:text-[24px] font-bold text-[#2c1810] whitespace-nowrap",style:{fontFamily:"Georgia,serif",lineHeight:1.1},children:"Čerpání"})]}),e.jsx($,{label:"Výnos v důchodu",min:0,max:15,step:.1,value:x,onChange:m,suffix:"%",lo:"0 %",hi:"15 %"}),e.jsx($,{label:"Požadovaná měsíční penze",min:1e3,max:15e4,step:500,numStep:1,value:r,onChange:o,suffix:"Kč",lo:"1K Kč",hi:"150K Kč"}),e.jsx($,{label:"Délka čerpání",min:1,max:50,step:1,value:p,onChange:c,suffix:"let",lo:"1 rok",hi:"50 let"})]}),e.jsxs("div",{className:"renta-card rounded-3xl flex min-w-0 flex-col gap-3 [container-type:inline-size]",style:v,children:[e.jsxs("div",{className:"min-w-0",children:[e.jsx("p",{className:"text-[12px] uppercase tracking-[0.22em] text-[#b09080] font-bold mb-1",children:"Potřebný měsíční vklad"}),F?e.jsx("p",{className:"max-w-full overflow-hidden whitespace-nowrap text-[clamp(26px,8cqi,32px)] font-bold text-[#6b8f3c] tabular-nums",style:{fontFamily:"ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,'Segoe UI',Arial,sans-serif",lineHeight:1.1},children:"0 Kč"}):e.jsx("p",{className:"max-w-full overflow-hidden whitespace-nowrap text-[clamp(28px,11cqi,44px)] font-bold text-[#2c1810] tabular-nums",style:{fontFamily:"ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,'Segoe UI',Arial,sans-serif",lineHeight:1.1},children:z(g)}),F&&e.jsx("p",{className:"text-[13px] text-[#6b8f3c] font-semibold mt-1",children:"Počáteční vklad je dostatečný"})]}),e.jsxs("div",{className:"grid grid-cols-2 gap-3 border-t border-[#e0cfc0]/50 pt-3",children:[e.jsxs("div",{children:[e.jsx("p",{className:"text-[10px] uppercase tracking-[0.2em] text-[#b09080] font-bold mb-0.5",children:s?"Penze při odchodu":"Požadovaná penze"}),e.jsx("p",{className:"max-w-full overflow-hidden whitespace-nowrap text-[clamp(15px,5.2cqi,19px)] font-bold text-[#2c1810] tabular-nums",style:{fontFamily:"ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,'Segoe UI',Arial,sans-serif",lineHeight:1.1},children:z(s?r*Math.pow(1+u/100,i):r)}),e.jsx("p",{className:"text-[11px] text-[#c4a898] mt-0.5",children:"nominálně / měs."})]}),s&&e.jsxs("div",{children:[e.jsx("p",{className:"text-[10px] uppercase tracking-[0.2em] text-[#9c6b3c] font-bold mb-0.5",children:"Penze reálně"}),e.jsx("p",{className:"max-w-full overflow-hidden whitespace-nowrap text-[clamp(15px,5.2cqi,19px)] font-bold text-[#9c6b3c] tabular-nums",style:{fontFamily:"ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,'Segoe UI',Arial,sans-serif",lineHeight:1.1},children:z(r)}),e.jsx("p",{className:"text-[11px] text-[#c4a898] mt-0.5",children:"v dnešních cenách / měs."})]})]}),e.jsx(q,{deposits:I,phase1Gain:K,phase2Gain:S,capital:M}),e.jsx("div",{className:"space-y-2.5 border-t border-[#e0cfc0]/50 pt-3 mt-auto",children:[{color:t.dark,label:"Celkové vklady",val:z(I)},{color:t.amber,label:"Výnos ze spoření",val:z(K)},{color:t.green,label:"Výnos z čerpání",val:z(S)}].map(({color:a,label:y,val:N})=>e.jsxs("div",{className:"flex items-center gap-2.5",children:[e.jsx("span",{className:"w-5 h-5 rounded-[4px] flex-shrink-0",style:{background:a}}),e.jsxs("div",{className:"min-w-0",children:[e.jsx("p",{className:"text-[14px] text-[#b09080]",children:y}),e.jsx("p",{className:"max-w-full overflow-hidden whitespace-nowrap text-[clamp(14px,4.8cqi,17px)] font-bold text-[#2c1810] tabular-nums",style:{fontFamily:"ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,'Segoe UI',Arial,sans-serif"},children:N})]})]},y))})]})]}),e.jsxs("div",{className:"renta-chart-card rounded-3xl p-5 sm:p-8",style:v,children:[e.jsxs("div",{className:"mb-5 flex flex-col items-stretch gap-4 sm:flex-row sm:items-center sm:justify-between",children:[e.jsx("p",{className:"text-[11px] uppercase tracking-[0.22em] font-bold text-[#b09080]",children:"Průběh spoření a čerpání"}),e.jsx("button",{onClick:()=>j(a=>!a),className:"w-full sm:w-auto text-[13px] font-semibold px-4 py-2 rounded-xl border transition-all duration-300",style:s?{background:t.btnActive,color:"#fff",border:`1px solid ${t.btnActive}`,boxShadow:"0 2px 12px rgba(107,63,31,0.35)"}:{background:"rgba(255,255,255,0.5)",color:t.btnActive,border:`1px solid ${t.btnBorder}`},children:s?"Skrýt inflaci":"Počítat s inflací?"})]}),e.jsx("div",{style:{minHeight:"48px"},className:"overflow-hidden",children:e.jsxs("div",{style:{opacity:s?1:0,transform:s?"translateY(0)":"translateY(-6px)",transition:"opacity 0.3s ease, transform 0.3s ease",pointerEvents:s?"auto":"none"},className:"mb-5 flex flex-col items-stretch gap-3 sm:flex-row sm:items-center sm:gap-4",children:[e.jsx("span",{className:"text-[13px] text-[#b09080] sm:flex-shrink-0",children:"Míra inflace"}),e.jsx("input",{type:"range",min:0,max:15,step:.1,value:u,onChange:a=>C(+a.target.value),className:"slider w-full sm:max-w-xs sm:flex-1","aria-label":"Míra inflace",style:{background:`linear-gradient(to right, ${t.mid} ${u/15*100}%, ${t.track} ${u/15*100}%)`}}),e.jsxs("label",{className:"flex items-center justify-end gap-1.5 bg-white/60 border border-[#d4bfae]/80 rounded-xl px-3 py-2 shadow-sm",children:[e.jsx("input",{type:"number",min:0,max:15,step:.1,value:u,onChange:a=>C(Math.min(15,Math.max(0,+a.target.value))),className:"w-14 text-right text-[14px] font-bold text-[#2c1810] bg-transparent outline-none tabular-nums"}),e.jsx("span",{className:"text-[13px] text-[#b09080]",children:"%"})]})]})}),e.jsx(W,{width:"100%",height:380,children:e.jsxs(L,{data:k,margin:{top:28,right:8,left:8,bottom:24},children:[e.jsxs("defs",{children:[e.jsxs("linearGradient",{id:"rD",x1:"0",y1:"0",x2:"0",y2:"1",children:[e.jsx("stop",{offset:"0%",stopColor:t.dark,stopOpacity:.7}),e.jsx("stop",{offset:"100%",stopColor:t.dark,stopOpacity:.1})]}),e.jsxs("linearGradient",{id:"rG",x1:"0",y1:"0",x2:"0",y2:"1",children:[e.jsx("stop",{offset:"0%",stopColor:t.amber,stopOpacity:.75}),e.jsx("stop",{offset:"100%",stopColor:t.amber,stopOpacity:.1})]}),e.jsxs("linearGradient",{id:"rC",x1:"0",y1:"0",x2:"0",y2:"1",children:[e.jsx("stop",{offset:"0%",stopColor:t.green,stopOpacity:.8}),e.jsx("stop",{offset:"100%",stopColor:t.green,stopOpacity:.1})]}),e.jsxs("linearGradient",{id:"rI",x1:"0",y1:"0",x2:"0",y2:"1",children:[e.jsx("stop",{offset:"0%",stopColor:t.inflation,stopOpacity:.5}),e.jsx("stop",{offset:"100%",stopColor:t.inflation,stopOpacity:.05})]})]}),e.jsx(R,{type:"number",dataKey:"year",domain:[0,i+p],tick:{fontSize:13,fill:t.muted,fontFamily:"system-ui"},axisLine:!1,tickLine:!1,label:{value:"Roky",position:"insideBottom",offset:-12,fontSize:13,fill:t.muted}}),e.jsx(O,{tickFormatter:D,tick:{fontSize:13,fill:t.muted,fontFamily:"system-ui"},axisLine:!1,tickLine:!1,width:52}),e.jsx(V,{content:E}),e.jsx(P,{x:i/2,stroke:"transparent",label:{value:"SPOŘENÍ",position:"insideTop",fontSize:10,fill:t.muted,fontWeight:700,fontFamily:"system-ui,sans-serif",letterSpacing:"0.14em"}}),e.jsx(P,{x:i,stroke:t.footnote,strokeWidth:1,strokeDasharray:"4 3"}),e.jsx(P,{x:i+p/2,stroke:"transparent",label:{value:"ČERPÁNÍ",position:"insideTop",fontSize:10,fill:t.green,fontWeight:700,fontFamily:"system-ui,sans-serif",letterSpacing:"0.14em"}}),e.jsx(A,{type:"monotone",dataKey:"Vklady",stackId:"saving",stroke:t.dark,strokeWidth:2,fill:"url(#rD)",connectNulls:!1}),e.jsx(A,{type:"monotone",dataKey:"Výnos ze spoření",stackId:"saving",stroke:t.amber,strokeWidth:2,fill:"url(#rG)",connectNulls:!1}),e.jsx(A,{type:"monotone",dataKey:"Čerpání penze",stroke:t.green,strokeWidth:2,fill:"url(#rC)",connectNulls:!1}),s&&e.jsx(A,{type:"monotone",dataKey:"Inflace",stroke:t.inflation,strokeWidth:1.5,fill:"url(#rI)",strokeDasharray:"4 2",connectNulls:!1})]})}),e.jsx("div",{className:"flex flex-wrap gap-5 mt-3",children:[{c:t.dark,l:"Vklady"},{c:t.amber,l:"Výnosy ze spoření"},{c:t.green,l:"Čerpání penze"},...s?[{c:t.inflation,l:"Vliv inflace"}]:[]].map(({c:a,l:y})=>e.jsxs("div",{className:"flex items-center gap-2.5",children:[e.jsx("span",{className:"w-5 h-5 rounded-[4px]",style:{background:a}}),e.jsx("span",{className:"text-[15px] text-[#b09080]",children:y})]},y))})]})]}),e.jsx("style",{children:`
        .renta-calculator {
          container-type: inline-size;
          container-name: renta;
        }
        .renta-top-grid {
          display: grid;
          grid-template-columns: minmax(0, 1fr);
          gap: 16px;
          margin-bottom: 24px;
        }
        .renta-card {
          min-width: 0;
          padding: 20px;
        }
        @container renta (min-width: 760px) {
          .renta-top-grid {
            grid-template-columns: minmax(0, 1fr) minmax(0, 1fr) minmax(220px, 0.84fr);
          }
          .renta-card {
            padding: 16px;
          }
          .renta-card.space-y-5 > :not([hidden]) ~ :not([hidden]) {
            margin-top: 16px;
          }
          .renta-field {
            --tw-space-y-reverse: 0;
          }
          .renta-field-label {
            font-size: 13.5px;
            line-height: 1.25;
            letter-spacing: 0.01em;
          }
          .renta-range-labels {
            font-size: 11px;
          }
          .renta-number-control {
            padding: 6px 10px;
            gap: 5px;
          }
          .renta-number-input {
            width: 84px;
            font-size: 14px;
          }
          .renta-number-suffix {
            font-size: 12px;
          }
          .renta-top-grid .slider {
            height: 5px;
          }
          .renta-top-grid .slider::-webkit-slider-thumb {
            width: 19px;
            height: 19px;
          }
          .renta-top-grid .slider::-moz-range-thumb {
            width: 19px;
            height: 19px;
          }
        }
        @container renta (min-width: 980px) {
          .renta-top-grid {
            grid-template-columns: minmax(0, 1fr) minmax(0, 1fr) minmax(245px, 0.9fr);
          }
          .renta-card {
            padding: 20px;
          }
          .renta-card.space-y-5 > :not([hidden]) ~ :not([hidden]) {
            margin-top: 20px;
          }
          .renta-field-label {
            font-size: 14.5px;
          }
          .renta-range-labels {
            font-size: 12px;
          }
          .renta-number-control {
            padding: 8px 12px;
            gap: 6px;
          }
          .renta-number-input {
            width: 108px;
            font-size: 15px;
          }
          .renta-number-suffix {
            font-size: 13px;
          }
        }
        @container renta (min-width: 1180px) {
          .renta-top-grid {
            grid-template-columns: minmax(0, 1fr) minmax(0, 1fr) minmax(300px, 380px);
            gap: 24px;
          }
          .renta-card {
            padding: 28px;
          }
          .renta-number-input {
            width: 128px;
            font-size: 16px;
          }
        }
        .renta-chart-card {
          max-width: 1180px;
          margin-inline: auto;
        }
        .rounded-3xl { container-type: inline-size; }
        .rounded-3xl h2 {
          overflow: hidden;
          white-space: nowrap;
          font-size: clamp(20px, 7cqi, 24px);
          line-height: 1.1;
        }
        .slider { -webkit-appearance: none; appearance: none; height: 6px; border-radius: 99px;
          outline: none; cursor: pointer; }
        .slider:focus-visible { outline: 2px solid ${t.mid}; outline-offset: 3px; border-radius: 99px; }
        .slider::-webkit-slider-thumb { -webkit-appearance: none; width: 22px; height: 22px;
          border-radius: 50%; background: #fff; border: 2.5px solid ${t.mid};
          box-shadow: 0 2px 8px rgba(100,50,10,0.25); cursor: grab; transition: transform 0.15s; }
        .slider::-webkit-slider-thumb:active { cursor: grabbing; transform: scale(1.15); }
        .slider::-moz-range-thumb { width: 22px; height: 22px; border-radius: 50%; background: #fff;
          border: 2.5px solid ${t.mid}; box-shadow: 0 2px 8px rgba(100,50,10,0.25); cursor: grab; }
        input[type=number]::-webkit-inner-spin-button, input[type=number]::-webkit-outer-spin-button { -webkit-appearance: none; margin: 0; }
        input[type=number] { -moz-appearance: textfield; }
      `})]})}export{X as default};
