(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{3411:function(e,t,r){Promise.resolve().then(r.bind(r,3267)),Promise.resolve().then(r.t.bind(r,8326,23))},3267:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return Particles}});var n=r(7437),a=r(2265);function Particles(e){let{className:t="",quantity:r=30,staticity:c=50,ease:s=50,refresh:u=!1}=e,i=(0,a.useRef)(null),l=(0,a.useRef)(null),o=(0,a.useRef)(null),h=(0,a.useRef)([]),d=function(){let[e,t]=(0,a.useState)({x:0,y:0});return(0,a.useEffect)(()=>{let handleMouseMove=e=>{t({x:e.clientX,y:e.clientY})};return window.addEventListener("mousemove",handleMouseMove),()=>{window.removeEventListener("mousemove",handleMouseMove)}},[]),e}(),f=(0,a.useRef)({x:0,y:0}),m=(0,a.useRef)({w:0,h:0}),w=window.devicePixelRatio;(0,a.useEffect)(()=>(i.current&&(o.current=i.current.getContext("2d")),initCanvas(),animate(),window.addEventListener("resize",initCanvas),()=>{window.removeEventListener("resize",initCanvas)}),[]),(0,a.useEffect)(()=>{onMouseMove()},[d.x,d.y]),(0,a.useEffect)(()=>{initCanvas()},[u]);let initCanvas=()=>{resizeCanvas(),drawParticles()},onMouseMove=()=>{if(i.current){let e=i.current.getBoundingClientRect(),{w:t,h:r}=m.current,n=d.x-e.left-t/2,a=d.y-e.top-r/2,c=n<t/2&&n>-t/2&&a<r/2&&a>-r/2;c&&(f.current.x=n,f.current.y=a)}},resizeCanvas=()=>{l.current&&i.current&&o.current&&(h.current.length=0,m.current.w=l.current.offsetWidth,m.current.h=l.current.offsetHeight,i.current.width=m.current.w*w,i.current.height=m.current.h*w,i.current.style.width="".concat(m.current.w,"px"),i.current.style.height="".concat(m.current.h,"px"),o.current.scale(w,w))},circleParams=()=>{let e=Math.floor(Math.random()*m.current.w),t=Math.floor(Math.random()*m.current.h),r=parseFloat((.6*Math.random()+.1).toFixed(1));return{x:e,y:t,translateX:0,translateY:0,size:Math.floor(2*Math.random())+.1,alpha:0,targetAlpha:r,dx:(Math.random()-.5)*.2,dy:(Math.random()-.5)*.2,magnetism:.1+4*Math.random()}},drawCircle=function(e){let t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];if(o.current){let{x:r,y:n,translateX:a,translateY:c,size:s,alpha:u}=e;o.current.translate(a,c),o.current.beginPath(),o.current.arc(r,n,s,0,2*Math.PI),o.current.fillStyle="rgba(255, 255, 255, ".concat(u,")"),o.current.fill(),o.current.setTransform(w,0,0,w,0,0),t||h.current.push(e)}},clearContext=()=>{o.current&&o.current.clearRect(0,0,m.current.w,m.current.h)},drawParticles=()=>{clearContext();for(let e=0;e<r;e++){let e=circleParams();drawCircle(e)}},remapValue=(e,t,r,n,a)=>{let c=(e-t)*(a-n)/(r-t)+n;return c>0?c:0},animate=()=>{clearContext(),h.current.forEach((e,t)=>{let r=[e.x+e.translateX-e.size,m.current.w-e.x-e.translateX-e.size,e.y+e.translateY-e.size,m.current.h-e.y-e.translateY-e.size],n=r.reduce((e,t)=>Math.min(e,t)),a=parseFloat(remapValue(n,0,20,0,1).toFixed(2));if(a>1?(e.alpha+=.02,e.alpha>e.targetAlpha&&(e.alpha=e.targetAlpha)):e.alpha=e.targetAlpha*a,e.x+=e.dx,e.y+=e.dy,e.translateX+=(f.current.x/(c/e.magnetism)-e.translateX)/s,e.translateY+=(f.current.y/(c/e.magnetism)-e.translateY)/s,e.x<-e.size||e.x>m.current.w+e.size||e.y<-e.size||e.y>m.current.h+e.size){h.current.splice(t,1);let e=circleParams();drawCircle(e)}else drawCircle({...e,x:e.x,y:e.y,translateX:e.translateX,translateY:e.translateY,alpha:e.alpha},!0)}),window.requestAnimationFrame(animate)};return(0,n.jsx)("div",{className:t,ref:l,"aria-hidden":"true",children:(0,n.jsx)("canvas",{ref:i})})}}},function(e){e.O(0,[122,971,472,744],function(){return e(e.s=3411)}),_N_E=e.O()}]);