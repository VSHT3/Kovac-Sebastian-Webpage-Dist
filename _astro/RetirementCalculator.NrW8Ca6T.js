import{j as e}from"./jsx-runtime.u17CrQMm.js";import{r as v}from"./index.D0zW3GPc.js";import{u as I}from"./useCountUp.BvaCF-JC.js";import{C as t,R as L,A as R,X as O,Y as V,T as B,a as P}from"./calc-colors.CBJGoQi8.js";import{R as D}from"./ReferenceLine.bjV4t8UH.js";const M=a=>new Intl.NumberFormat("cs-CZ",{style:"currency",currency:"CZK",maximumFractionDigits:0}).format(a),W=a=>a>=1e6?`${(a/1e6).toFixed(1)}M`:a>=1e3?`${(a/1e3).toFixed(0)}K`:`${0|a}`;function q(a,f,i,h,r,u,n,l){const c=Math.pow(1+f/100,.08333333333333333)-1,x=Math.pow(1+r/100,1/12)-1,d=Math.pow(1+n/100,1/12)-1,b=h*12,s=u*12;let g,m,j;if(!l)m=a,g=x>1e-12?a*(1-Math.pow(1+x,-s))/x:a*s,j=a*s;else{if(m=a*Math.pow(1+n/100,h),Math.abs(x-d)<1e-10)g=m*s;else{const p=(1+d)/(1+x);g=m*(1-Math.pow(p,s))/(x-d)}j=d>1e-12?m*(Math.pow(1+d,s)-1)/d:m*s}g=Math.max(0,g);const y=i*Math.pow(1+c,b),z=g-y;let w;b<=0||z<=0?w=0:c<1e-12?w=z/b:w=z*c/(Math.pow(1+c,b)-1);const G=i+w*b,K=Math.max(0,g-G),A=Math.max(0,j-g),C=[];let k=i,N=i;C.push({year:0,deposited:i,savingGain:0,drawdown:null,inflLoss:null});for(let p=1;p<=b;p++)if(k=k*(1+c)+w,N+=w,p%12===0){const S=p/12,F=Math.max(0,k);C.push({year:S,deposited:N,savingGain:Math.max(0,k-N),drawdown:S===h?k:null,inflLoss:l?Math.max(0,F-F/Math.pow(1+n/100,S)):null})}let o=k;for(let p=1;p<=s;p++){const S=l?m*Math.pow(1+d,p-1):a;if(o=o*(1+x)-S,p%12===0){const F=Math.max(0,o);C.push({year:h+p/12,deposited:null,savingGain:null,drawdown:F,inflLoss:l?Math.max(0,F-F/Math.pow(1+n/100,h+p/12)):null})}}return{monthly:w,requiredCapital:g,totalContributed:G,phase1Gain:K,phase2Gain:A,totalDrawn:j,yearlyData:C}}function $({label:a,min:f,max:i,step:h,numStep:r,value:u,onChange:n,suffix:l,lo:c,hi:x}){const d=(u-f)/(i-f)*100;return e.jsxs("div",{className:"renta-field space-y-1.5",children:[e.jsx("p",{className:"renta-field-label text-[15px] font-semibold text-[#2c1810] tracking-wide break-words",children:a}),e.jsxs("div",{className:"renta-range-labels flex justify-between text-[12px] text-[#b09080]",children:[e.jsx("span",{children:c??f}),e.jsx("span",{children:x??i})]}),e.jsx("input",{type:"range",min:f,max:i,step:h,value:u,onChange:b=>n(+b.target.value),className:"w-full slider",style:{background:`linear-gradient(to right, ${t.mid} ${d}%, ${t.track} ${d}%)`},"aria-label":a}),e.jsx("div",{className:"flex justify-end mt-1",children:e.jsxs("label",{className:"renta-number-control flex items-center gap-1.5 bg-white/60 border border-[#d4bfae]/80 rounded-xl px-3 py-2 shadow-sm",children:[e.jsx("input",{type:"number",min:f,max:i,step:r??h,value:u,onChange:b=>{const s=+b.target.value;isNaN(s)||n(Math.min(i,Math.max(f,s)))},className:"renta-number-input w-24 sm:w-32 text-right text-[16px] font-semibold text-[#2c1810] bg-transparent outline-none tabular-nums"}),l&&e.jsx("span",{className:"renta-number-suffix text-[13px] text-[#b09080] font-medium",children:l})]})})]})}function E({deposits:a,phase1Gain:f,phase2Gain:i,capital:h}){const r=a+f+i||1,u=80,n=100,l=100,c=28,x=2*Math.PI*u,d=a/r,b=f/r,s=i/r,g=d*x,m=b*x,j=s*x,y=d*360-90,z=(d+b)*360-90,w=W(h);return e.jsxs("svg",{viewBox:"0 0 200 200",className:"w-full max-w-[280px] mx-auto",children:[e.jsx("circle",{cx:n,cy:l,r:u,fill:"none",stroke:t.cream,strokeWidth:c}),e.jsx("circle",{cx:n,cy:l,r:u,fill:"none",stroke:t.dark,strokeWidth:c,strokeDasharray:`${g} ${x}`,strokeLinecap:"butt",style:{transform:"rotate(-90deg)",transformOrigin:`${n}px ${l}px`}}),e.jsx("circle",{cx:n,cy:l,r:u,fill:"none",stroke:t.amber,strokeWidth:c,strokeDasharray:`${m} ${x}`,strokeLinecap:"butt",style:{transform:`rotate(${y}deg)`,transformOrigin:`${n}px ${l}px`}}),e.jsx("circle",{cx:n,cy:l,r:u,fill:"none",stroke:t.green,strokeWidth:c,strokeDasharray:`${j} ${x}`,strokeLinecap:"butt",style:{transform:`rotate(${z}deg)`,transformOrigin:`${n}px ${l}px`}}),e.jsx("text",{x:n,y:l-18,textAnchor:"middle",fontSize:"7.5",fill:t.muted,letterSpacing:"1.1",fontFamily:"system-ui,sans-serif",fontWeight:"700",children:"POTŘEBNÝ"}),e.jsx("text",{x:n,y:l-7,textAnchor:"middle",fontSize:"7.5",fill:t.muted,letterSpacing:"1.1",fontFamily:"system-ui,sans-serif",fontWeight:"700",children:"KAPITÁL"}),e.jsx("text",{x:n,y:l+18,textAnchor:"middle",fontSize:"22",fill:t.text,fontWeight:"700",fontFamily:"Georgia,serif",children:w})]})}const H=({active:a,payload:f,label:i})=>{if(!a||!f?.length)return null;const h=f.filter(r=>r.value!=null&&r.value>0);return h.length?e.jsxs("div",{className:"bg-white/90 backdrop-blur-xl border border-[#d4bfae]/60 rounded-2xl px-4 py-3 shadow-2xl",children:[e.jsxs("p",{className:"text-[12px] font-bold text-[#2c1810] mb-2 tracking-widest uppercase",children:["Rok ",i]}),h.map((r,u)=>e.jsxs("div",{className:"flex items-center gap-2 py-0.5",children:[e.jsx("span",{className:"w-2.5 h-2.5 rounded-[3px]",style:{background:r.color}}),e.jsxs("span",{className:"text-[12px] text-[#8a6a5a]",children:[r.name,":"]}),e.jsx("span",{className:"text-[13px] font-bold text-[#2c1810] tabular-nums",children:M(r.value)})]},u))]}):null};function J(){const[a,f]=v.useState(8),[i,h]=v.useState(1e5),[r,u]=v.useState(30),[n,l]=v.useState(25e3),[c,x]=v.useState(25),[d,b]=v.useState(4),[s,g]=v.useState(!1),[m,j]=v.useState(3.2),y=v.useMemo(()=>q(n,a,i,r,d,c,m,s),[n,a,i,r,d,c,m,s]),z=I(y.monthly),w=I(y.requiredCapital),G=I(y.totalContributed),K=I(y.phase1Gain),A=I(y.phase2Gain),C=y.yearlyData.map(o=>({year:o.year,Vklady:o.deposited,"Výnos ze spoření":o.savingGain,"Čerpání penze":o.drawdown,Inflace:o.inflLoss})),k=y.monthly===0&&i>0,N={background:"rgba(252,245,237,0.72)",backdropFilter:"blur(20px) saturate(1.4)",WebkitBackdropFilter:"blur(20px) saturate(1.4)",border:"1px solid rgba(255,255,255,0.65)",boxShadow:"0 4px 32px rgba(80,40,10,0.10), inset 0 1px 0 rgba(255,255,255,0.8)"};return e.jsxs("div",{className:"renta-calculator",children:[e.jsxs("div",{children:[e.jsxs("div",{className:"renta-top-grid",children:[e.jsxs("div",{className:"renta-card rounded-3xl space-y-5",style:N,children:[e.jsxs("div",{children:[e.jsx("p",{className:"text-[12px] uppercase tracking-[0.22em] text-[#b09080] font-bold mb-1",children:"Fáze 1"}),e.jsx("h2",{className:"text-[22px] sm:text-[24px] font-bold text-[#2c1810] whitespace-nowrap",style:{fontFamily:"Georgia,serif",lineHeight:1.1},children:"Spoření"})]}),e.jsx($,{label:"Roční výnos",min:1,max:20,step:.1,value:a,onChange:f,suffix:"%",lo:"1 %",hi:"20 %"}),e.jsx($,{label:"Počáteční vklad",min:0,max:5e6,step:5e3,numStep:1,value:i,onChange:h,suffix:"Kč",lo:"0 Kč",hi:"5M Kč"}),e.jsx($,{label:"Délka spoření",min:1,max:50,step:1,value:r,onChange:u,suffix:"let",lo:"1 rok",hi:"50 let"})]}),e.jsxs("div",{className:"renta-card rounded-3xl space-y-5",style:N,children:[e.jsxs("div",{children:[e.jsx("p",{className:"text-[12px] uppercase tracking-[0.22em] text-[#b09080] font-bold mb-1",children:"Fáze 2"}),e.jsx("h2",{className:"text-[22px] sm:text-[24px] font-bold text-[#2c1810] whitespace-nowrap",style:{fontFamily:"Georgia,serif",lineHeight:1.1},children:"Čerpání"})]}),e.jsx($,{label:"Výnos v důchodu",min:0,max:15,step:.1,value:d,onChange:b,suffix:"%",lo:"0 %",hi:"15 %"}),e.jsx($,{label:"Požadovaná měsíční penze",min:1e3,max:15e4,step:500,numStep:1,value:n,onChange:l,suffix:"Kč",lo:"1K Kč",hi:"150K Kč"}),e.jsx($,{label:"Délka čerpání",min:1,max:50,step:1,value:c,onChange:x,suffix:"let",lo:"1 rok",hi:"50 let"})]}),e.jsxs("div",{className:"renta-card rounded-3xl flex min-w-0 flex-col gap-3 [container-type:inline-size]",style:N,children:[e.jsxs("div",{className:"min-w-0",children:[e.jsx("p",{className:"text-[12px] uppercase tracking-[0.22em] text-[#b09080] font-bold mb-1",children:"Potřebný měsíční vklad"}),k?e.jsx("p",{className:"max-w-full overflow-hidden whitespace-nowrap text-[clamp(26px,8cqi,32px)] font-bold text-[#6b8f3c] tabular-nums",style:{fontFamily:"ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,'Segoe UI',Arial,sans-serif",lineHeight:1.1},children:"0 Kč"}):e.jsx("p",{className:"max-w-full overflow-hidden whitespace-nowrap text-[clamp(28px,11cqi,44px)] font-bold text-[#2c1810] tabular-nums",style:{fontFamily:"ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,'Segoe UI',Arial,sans-serif",lineHeight:1.1},children:M(z)}),k&&e.jsx("p",{className:"text-[13px] text-[#6b8f3c] font-semibold mt-1",children:"Počáteční vklad je dostatečný"})]}),e.jsxs("div",{className:"grid grid-cols-2 gap-3 border-t border-[#e0cfc0]/50 pt-3",children:[e.jsxs("div",{children:[e.jsx("p",{className:"text-[10px] uppercase tracking-[0.2em] text-[#b09080] font-bold mb-0.5",children:s?"Penze při odchodu":"Požadovaná penze"}),e.jsx("p",{className:"max-w-full overflow-hidden whitespace-nowrap text-[clamp(15px,5.2cqi,19px)] font-bold text-[#2c1810] tabular-nums",style:{fontFamily:"ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,'Segoe UI',Arial,sans-serif",lineHeight:1.1},children:M(s?n*Math.pow(1+m/100,r):n)}),e.jsx("p",{className:"text-[11px] text-[#c4a898] mt-0.5",children:"nominálně / měs."})]}),s&&e.jsxs("div",{children:[e.jsx("p",{className:"text-[10px] uppercase tracking-[0.2em] text-[#9c6b3c] font-bold mb-0.5",children:"Penze reálně"}),e.jsx("p",{className:"max-w-full overflow-hidden whitespace-nowrap text-[clamp(15px,5.2cqi,19px)] font-bold text-[#9c6b3c] tabular-nums",style:{fontFamily:"ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,'Segoe UI',Arial,sans-serif",lineHeight:1.1},children:M(n)}),e.jsx("p",{className:"text-[11px] text-[#c4a898] mt-0.5",children:"v dnešních cenách / měs."})]})]}),e.jsx(E,{deposits:G,phase1Gain:K,phase2Gain:A,capital:w}),e.jsx("div",{className:"space-y-2.5 border-t border-[#e0cfc0]/50 pt-3 mt-auto",children:[{color:t.dark,label:"Celkové vklady",val:M(G)},{color:t.amber,label:"Výnos ze spoření",val:M(K)},{color:t.green,label:"Výnos z čerpání",val:M(A)}].map(({color:o,label:p,val:S})=>e.jsxs("div",{className:"flex items-center gap-2.5",children:[e.jsx("span",{className:"w-5 h-5 rounded-[4px] flex-shrink-0",style:{background:o}}),e.jsxs("div",{className:"min-w-0",children:[e.jsx("p",{className:"text-[14px] text-[#b09080]",children:p}),e.jsx("p",{className:"max-w-full overflow-hidden whitespace-nowrap text-[clamp(14px,4.8cqi,17px)] font-bold text-[#2c1810] tabular-nums",style:{fontFamily:"ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,'Segoe UI',Arial,sans-serif"},children:S})]})]},p))})]})]}),e.jsxs("div",{className:"renta-chart-card rounded-3xl p-5 sm:p-8",style:N,children:[e.jsxs("div",{className:"mb-5 flex flex-col items-stretch gap-4 sm:flex-row sm:items-center sm:justify-between",children:[e.jsx("p",{className:"text-[11px] uppercase tracking-[0.22em] font-bold text-[#b09080]",children:"Průběh spoření a čerpání"}),e.jsx("button",{onClick:()=>g(o=>!o),className:"w-full sm:w-auto text-[13px] font-semibold px-4 py-2 rounded-xl border transition-all duration-300",style:s?{background:t.btnActive,color:"#fff",border:`1px solid ${t.btnActive}`,boxShadow:"0 2px 12px rgba(107,63,31,0.35)"}:{background:"rgba(255,255,255,0.5)",color:t.btnActive,border:`1px solid ${t.btnBorder}`},children:s?"Skrýt inflaci":"Počítat s inflací?"})]}),e.jsx("div",{style:{minHeight:"48px"},className:"overflow-hidden",children:e.jsxs("div",{style:{opacity:s?1:0,transform:s?"translateY(0)":"translateY(-6px)",transition:"opacity 0.3s ease, transform 0.3s ease",pointerEvents:s?"auto":"none"},className:"mb-5 flex flex-col items-stretch gap-3 sm:flex-row sm:items-center sm:gap-4",children:[e.jsx("span",{className:"text-[13px] text-[#b09080] sm:flex-shrink-0",children:"Míra inflace"}),e.jsx("input",{type:"range",min:0,max:15,step:.1,value:m,onChange:o=>j(+o.target.value),className:"slider w-full sm:max-w-xs sm:flex-1","aria-label":"Míra inflace",style:{background:`linear-gradient(to right, ${t.mid} ${m/15*100}%, ${t.track} ${m/15*100}%)`}}),e.jsxs("label",{className:"flex items-center justify-end gap-1.5 bg-white/60 border border-[#d4bfae]/80 rounded-xl px-3 py-2 shadow-sm",children:[e.jsx("input",{type:"number",min:0,max:15,step:.1,value:m,onChange:o=>j(Math.min(15,Math.max(0,+o.target.value))),className:"w-14 text-right text-[14px] font-bold text-[#2c1810] bg-transparent outline-none tabular-nums"}),e.jsx("span",{className:"text-[13px] text-[#b09080]",children:"%"})]})]})}),e.jsx(L,{width:"100%",height:380,children:e.jsxs(R,{data:C,margin:{top:28,right:8,left:8,bottom:24},children:[e.jsxs("defs",{children:[e.jsxs("linearGradient",{id:"rD",x1:"0",y1:"0",x2:"0",y2:"1",children:[e.jsx("stop",{offset:"0%",stopColor:t.dark,stopOpacity:.7}),e.jsx("stop",{offset:"100%",stopColor:t.dark,stopOpacity:.1})]}),e.jsxs("linearGradient",{id:"rG",x1:"0",y1:"0",x2:"0",y2:"1",children:[e.jsx("stop",{offset:"0%",stopColor:t.amber,stopOpacity:.75}),e.jsx("stop",{offset:"100%",stopColor:t.amber,stopOpacity:.1})]}),e.jsxs("linearGradient",{id:"rC",x1:"0",y1:"0",x2:"0",y2:"1",children:[e.jsx("stop",{offset:"0%",stopColor:t.green,stopOpacity:.8}),e.jsx("stop",{offset:"100%",stopColor:t.green,stopOpacity:.1})]}),e.jsxs("linearGradient",{id:"rI",x1:"0",y1:"0",x2:"0",y2:"1",children:[e.jsx("stop",{offset:"0%",stopColor:t.inflation,stopOpacity:.5}),e.jsx("stop",{offset:"100%",stopColor:t.inflation,stopOpacity:.05})]})]}),e.jsx(O,{type:"number",dataKey:"year",domain:[0,r+c],tick:{fontSize:13,fill:t.muted,fontFamily:"system-ui"},axisLine:!1,tickLine:!1,label:{value:"Roky",position:"insideBottom",offset:-12,fontSize:13,fill:t.muted}}),e.jsx(V,{tickFormatter:W,tick:{fontSize:13,fill:t.muted,fontFamily:"system-ui"},axisLine:!1,tickLine:!1,width:52}),e.jsx(B,{content:H}),e.jsx(D,{x:r/2,stroke:"transparent",label:{value:"SPOŘENÍ",position:"insideTop",fontSize:10,fill:t.muted,fontWeight:700,fontFamily:"system-ui,sans-serif",letterSpacing:"0.14em"}}),e.jsx(D,{x:r,stroke:t.footnote,strokeWidth:1,strokeDasharray:"4 3"}),e.jsx(D,{x:r+c/2,stroke:"transparent",label:{value:"ČERPÁNÍ",position:"insideTop",fontSize:10,fill:t.green,fontWeight:700,fontFamily:"system-ui,sans-serif",letterSpacing:"0.14em"}}),e.jsx(P,{type:"monotone",dataKey:"Vklady",stackId:"saving",stroke:t.dark,strokeWidth:2,fill:"url(#rD)",connectNulls:!1}),e.jsx(P,{type:"monotone",dataKey:"Výnos ze spoření",stackId:"saving",stroke:t.amber,strokeWidth:2,fill:"url(#rG)",connectNulls:!1}),e.jsx(P,{type:"monotone",dataKey:"Čerpání penze",stroke:t.green,strokeWidth:2,fill:"url(#rC)",connectNulls:!1}),s&&e.jsx(P,{type:"monotone",dataKey:"Inflace",stroke:t.inflation,strokeWidth:1.5,fill:"url(#rI)",strokeDasharray:"4 2",connectNulls:!1})]})}),e.jsx("div",{className:"flex flex-wrap gap-5 mt-3",children:[{c:t.dark,l:"Vklady"},{c:t.amber,l:"Výnosy ze spoření"},{c:t.green,l:"Čerpání penze"},...s?[{c:t.inflation,l:"Vliv inflace"}]:[]].map(({c:o,l:p})=>e.jsxs("div",{className:"flex items-center gap-2.5",children:[e.jsx("span",{className:"w-5 h-5 rounded-[4px]",style:{background:o}}),e.jsx("span",{className:"text-[15px] text-[#b09080]",children:p})]},p))})]})]}),e.jsx("style",{children:`
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
      `})]})}export{J as default};
