(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[327],{4923:function(e,t,n){Promise.resolve().then(n.bind(n,8388))},9506:function(e,t,n){"use strict";n.r(t),n.d(t,{Card:function(){return Card}});var r=n(5083),i=n(7437),a=n(3901),s=n(9609),c=n(5214);function _templateObject(){let e=(0,r._)(["radial-gradient(240px at ","px ","px, white, transparent)"]);return _templateObject=function(){return e},e}let Card=e=>{let{children:t}=e,n=(0,a.q)(0,{stiffness:500,damping:100}),r=(0,a.q)(0,{stiffness:500,damping:100}),o=(0,s.Y)(_templateObject(),n,r),l={maskImage:o,WebkitMaskImage:o};return(0,i.jsxs)("div",{onMouseMove:function(e){let{currentTarget:t,clientX:i,clientY:a}=e,{left:s,top:c}=t.getBoundingClientRect();n.set(i-s),r.set(a-c)},className:"overflow-hidden relative duration-700 border rounded-xl hover:bg-zinc-800/10 group md:gap-8 hover:border-zinc-400/50 border-zinc-600 ",children:[(0,i.jsxs)("div",{className:"pointer-events-none",children:[(0,i.jsx)("div",{className:"absolute inset-0 z-0  transition duration-1000 [mask-image:linear-gradient(black,transparent)]"}),(0,i.jsx)(c.E.div,{className:"absolute inset-0 z-10  bg-gradient-to-br opacity-100  via-zinc-100/10  transition duration-1000 group-hover:opacity-50 ",style:l}),(0,i.jsx)(c.E.div,{className:"absolute inset-0 z-10 opacity-0 mix-blend-overlay transition duration-1000 group-hover:opacity-100",style:l})]}),t]})}},7810:function(e,t,n){"use strict";n.r(t),n.d(t,{Navigation:function(){return Navigation}});var r=n(7437),i=n(3067),a=n(1396),s=n.n(a),c=n(2265);let Navigation=()=>{let e=(0,c.useRef)(null),[t,n]=(0,c.useState)(!0);return(0,c.useEffect)(()=>{if(!e.current)return;let t=new IntersectionObserver(e=>{let[t]=e;return n(t.isIntersecting)});return t.observe(e.current),()=>t.disconnect()},[]),(0,r.jsx)("header",{ref:e,children:(0,r.jsx)("div",{className:"fixed inset-x-0 top-0 z-50 backdrop-blur  duration-200 border-b  ".concat(t?"bg-zinc-900/0 border-transparent":"bg-zinc-900/500  border-zinc-800 "),children:(0,r.jsxs)("div",{className:"container flex flex-row-reverse items-center justify-between p-6 mx-auto",children:[(0,r.jsxs)("div",{className:"flex justify-between gap-8",children:[(0,r.jsx)(s(),{href:"/sobre-mim",className:"duration-200 text-zinc-400 hover:text-zinc-100",children:"Sobre mim"}),(0,r.jsx)(s(),{href:"/projects",className:"duration-200 text-zinc-400 hover:text-zinc-100",children:"Projetos"}),(0,r.jsx)(s(),{href:"/contact",className:"duration-200 text-zinc-400 hover:text-zinc-100",children:"Contato"})]}),(0,r.jsx)(s(),{href:"/",className:"duration-200 text-zinc-300 hover:text-zinc-100",children:(0,r.jsx)(i.Z,{className:"w-6 h-6 "})})]})})})}},8388:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return Example}});var r=n(7437),i=n(2898);let a=(0,i.Z)("Instagram",[["rect",{width:"20",height:"20",x:"2",y:"2",rx:"5",ry:"5",key:"2e1cvw"}],["path",{d:"M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z",key:"9exkf1"}],["line",{x1:"17.5",x2:"17.51",y1:"6.5",y2:"6.5",key:"r4j83e"}]]),s=(0,i.Z)("Linkedin",[["path",{d:"M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z",key:"c2jq9f"}],["rect",{width:"4",height:"12",x:"2",y:"9",key:"mk3on5"}],["circle",{cx:"4",cy:"4",r:"2",key:"bt5ra8"}]]),c=(0,i.Z)("Github",[["path",{d:"M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4",key:"tonef"}],["path",{d:"M9 18c-4.51 2-5-2-7-2",key:"9comsn"}]]);var o=n(1396),l=n.n(o),d=n(7810),u=n(9506);let x=[{icon:(0,r.jsx)(a,{size:20}),href:"https://www.instagram.com/_luxxca.b_/",label:"Instagram",handle:"_luxxca.b_"},{icon:(0,r.jsx)(s,{size:20}),href:"https://www.linkedin.com/in/lucas-ferreira-balduino-a7a960227/",label:"linkedin",handle:"Lucas Balduino"},{icon:(0,r.jsx)(c,{size:20}),href:"https://github.com/lucaskjkk",label:"Github",handle:"lucaskjkk"}];function Example(){return(0,r.jsxs)("div",{className:" bg-gradient-to-tl from-zinc-900/0 via-zinc-900 to-zinc-900/0",children:[(0,r.jsx)(d.Navigation,{}),(0,r.jsx)("div",{className:"container flex items-center justify-center min-h-screen px-4 mx-auto",children:(0,r.jsx)("div",{className:"grid w-full grid-cols-1 gap-8 mx-auto mt-32 sm:mt-0 sm:grid-cols-3 lg:gap-16",children:x.map(e=>(0,r.jsx)(u.Card,{children:(0,r.jsxs)(l(),{href:e.href,target:"_blank",className:"p-4 relative flex flex-col items-center gap-4 duration-700 group md:gap-8 md:py-24  lg:pb-48  md:p-16",children:[(0,r.jsx)("span",{className:"absolute w-px h-2/3 bg-gradient-to-b from-zinc-500 via-zinc-500/50 to-transparent","aria-hidden":"true"}),(0,r.jsx)("span",{className:"relative z-10 flex items-center justify-center w-12 h-12 text-sm duration-1000 border rounded-full text-zinc-200 group-hover:text-white group-hover:bg-zinc-900 border-zinc-500 bg-zinc-900 group-hover:border-zinc-200 drop-shadow-orange",children:e.icon})," ",(0,r.jsxs)("div",{className:"z-10 flex flex-col items-center",children:[(0,r.jsx)("span",{className:"lg:text-xl font-medium duration-150 xl:text-3xl text-zinc-200 group-hover:text-white font-display",children:e.handle}),(0,r.jsx)("span",{className:"mt-4 text-sm text-center duration-1000 text-zinc-400 group-hover:text-zinc-200",children:e.label})]})]})}))})})]})}}},function(e){e.O(0,[122,197,971,472,744],function(){return e(e.s=4923)}),_N_E=e.O()}]);