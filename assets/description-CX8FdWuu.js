import{n as et,r as L,j as D,c as ye,a as we,d as tt,N as St,O as wt,Q as nt,T as Dt,m as Nt}from"./main-CjZDhGab.js";import{i as ae,a as W,b as Ce,c as ee,d as Le,e as le}from"./flyer-CJyThvsh.js";import{s as Et}from"./env-RRMoOSyB.js";/**
 * @license lucide-react v0.414.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tt=et("ArrowLeft",[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]]);/**
 * @license lucide-react v0.414.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pt=et("ArrowRight",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]]);let Xe=null;fetch(`${Et+"/api/v1/post/stocks"}`).then(e=>{if(e.ok)return e.json();throw new Error("Error fetching data")}).then(e=>{Xe=e,console.log(Xe)}).catch(e=>{console.error(e)});const it={title:"stocks",description:"available stocks",stocks:[{img:ae,name:"puffpuff",id:1,Description:"special recipe from succo, good looks",price:50,availability:!0,qty:1e3},{img:W,name:"chicken",id:2,Description:"tasty grilled chicken, succo special recipe",price:700,availability:!0,qty:100},{img:Ce,name:"samosa",id:3,Description:"perfectly made and nice taste beef samosa",price:200,availability:!0,qty:100},{img:ee,name:"spring roll",id:4,Description:"Placeholder Text",price:200,availability:!0,qty:100},{img:Le,name:"fanta",id:5,Description:"Placeholder Text",price:1500,availability:!0,qty:100},{img:le,name:"rice",id:6,Description:"Placeholder Text",price:1500,availability:!0,qty:100},{img:W,name:"chin chin",id:7,Description:"Placeholder Text",price:2e3,availability:!0,qty:100},{img:ee,name:"egg roll",id:8,Description:"Placeholder Text",price:500,availability:!0,qty:100},{img:W,name:"meat pie",id:9,Description:"Placeholder Text",price:600,availability:!0,qty:100},{img:le,name:"doughnut",id:10,Description:"Placeholder Text",price:400,availability:!0,qty:100},{img:ae,name:"coke",id:11,Description:"Placeholder Text",price:1500,availability:!0,qty:100},{img:ee,name:"malt",id:12,Description:"Placeholder Text",price:1500,availability:!0,qty:100},{img:ae,name:"puffpuff",id:1,Description:"special recipe from succo, good looks",price:50,availability:!0,qty:1e3},{img:W,name:"chicken",id:2,Description:"tasty grilled chicken, succo special recipe",price:700,availability:!0,qty:100},{img:Ce,name:"samosa",id:3,Description:"perfectly made and nice taste beef samosa",price:200,availability:!0,qty:100},{img:ee,name:"spring roll",id:4,Description:"Placeholder Text",price:200,availability:!0,qty:100},{img:Le,name:"fanta",id:5,Description:"Placeholder Text",price:1500,availability:!0,qty:100},{img:le,name:"rice",id:6,Description:"Placeholder Text",price:1500,availability:!0,qty:100},{img:W,name:"chin chin",id:7,Description:"Placeholder Text",price:2e3,availability:!0,qty:100},{img:ee,name:"egg roll",id:8,Description:"Placeholder Text",price:500,availability:!0,qty:100},{img:W,name:"meat pie",id:9,Description:"Placeholder Text",price:600,availability:!0,qty:100},{img:le,name:"doughnut",id:10,Description:"Placeholder Text",price:400,availability:!0,qty:100},{img:ae,name:"coke",id:11,Description:"Placeholder Text",price:1500,availability:!0,qty:100},{img:ee,name:"malt",id:12,Description:"Placeholder Text",price:1500,availability:!0,qty:100},{img:ae,name:"puffpuff",id:1,Description:"special recipe from succo, good looks",price:50,availability:!0,qty:1e3},{img:W,name:"chicken",id:2,Description:"tasty grilled chicken, succo special recipe",price:700,availability:!0,qty:100},{img:Ce,name:"samosa",id:3,Description:"perfectly made and nice taste beef samosa",price:200,availability:!0,qty:100},{img:ee,name:"spring roll",id:4,Description:"Placeholder Text",price:200,availability:!0,qty:100},{img:Le,name:"fanta",id:5,Description:"Placeholder Text",price:1500,availability:!0,qty:100},{img:le,name:"rice",id:6,Description:"Placeholder Text",price:1500,availability:!0,qty:100},{img:W,name:"chin chin",id:7,Description:"Placeholder Text",price:2e3,availability:!0,qty:100},{img:ee,name:"egg roll",id:8,Description:"Placeholder Text",price:500,availability:!0,qty:100},{img:W,name:"meat pie",id:9,Description:"Placeholder Text",price:600,availability:!0,qty:100},{img:le,name:"doughnut",id:10,Description:"Placeholder Text",price:400,availability:!0,qty:100},{img:ae,name:"coke",id:11,Description:"Placeholder Text",price:1500,availability:!0,qty:100},{img:ee,name:"malt",id:12,Description:"Placeholder Text",price:1500,availability:!0,qty:100}]},jt={active:!0,breakpoints:{},delay:4e3,jump:!1,playOnInit:!0,stopOnFocusIn:!0,stopOnInteraction:!0,stopOnMouseEnter:!1,stopOnLastSnap:!1,rootNode:null};function Ae(e={}){let t,n,o,s=!1,i=!0,r=!1,a=0;function c(S,j){n=S;const{mergeOptions:E,optionsAtMedia:w}=j,N=E(jt,Ae.globalOptions),P=E(N,e);if(t=w(P),n.scrollSnapList().length<=1)return;r=t.jump,o=!1;const{eventStore:T,ownerDocument:C}=n.internalEngine(),M=n.rootNode(),B=t.rootNode&&t.rootNode(M)||M,z=n.containerNode();n.on("pointerDown",u),t.stopOnInteraction||n.on("pointerUp",g),t.stopOnMouseEnter&&(T.add(B,"mouseenter",()=>{i=!1,u()}),t.stopOnInteraction||T.add(B,"mouseleave",()=>{i=!0,g()})),t.stopOnFocusIn&&(n.on("slideFocusStart",u),t.stopOnInteraction||T.add(z,"focusout",g)),T.add(C,"visibilitychange",h),t.playOnInit&&!b()&&g()}function l(){n.off("pointerDown",u).off("pointerUp",g).off("slideFocusStart",u),u(),o=!0,s=!1}function g(){if(o||!i)return;s||n.emit("autoplay:play");const{ownerWindow:S}=n.internalEngine();S.clearInterval(a),a=S.setInterval(m,t.delay),s=!0}function u(){if(o)return;s&&n.emit("autoplay:stop");const{ownerWindow:S}=n.internalEngine();S.clearInterval(a),a=0,s=!1}function h(){if(b())return i=s,u();i&&g()}function b(){const{ownerDocument:S}=n.internalEngine();return S.visibilityState==="hidden"}function f(S){typeof S<"u"&&(r=S),i=!0,g()}function p(){s&&u()}function x(){s&&f()}function d(){return s}function m(){const{index:S}=n.internalEngine(),j=S.clone().add(1).get(),E=n.scrollSnapList().length-1;t.stopOnLastSnap&&j===E&&u(),n.canScrollNext()?n.scrollNext(r):n.scrollTo(0,r)}return{name:"autoplay",options:e,init:c,destroy:l,play:f,stop:p,reset:x,isPlaying:d}}Ae.globalOptions=void 0;function It(e){return Object.prototype.toString.call(e)==="[object Object]"}function Ye(e){return It(e)||Array.isArray(e)}function Ct(){return!!(typeof window<"u"&&window.document&&window.document.createElement)}function qe(e,t){const n=Object.keys(e),o=Object.keys(t);if(n.length!==o.length)return!1;const s=JSON.stringify(Object.keys(e.breakpoints||{})),i=JSON.stringify(Object.keys(t.breakpoints||{}));return s!==i?!1:n.every(r=>{const a=e[r],c=t[r];return typeof a=="function"?`${a}`==`${c}`:!Ye(a)||!Ye(c)?a===c:qe(a,c)})}function _e(e){return e.concat().sort((t,n)=>t.name>n.name?1:-1).map(t=>t.options)}function Lt(e,t){if(e.length!==t.length)return!1;const n=_e(e),o=_e(t);return n.every((s,i)=>{const r=o[i];return qe(s,r)})}function Me(e){return typeof e=="number"}function Oe(e){return typeof e=="string"}function Fe(e){return typeof e=="boolean"}function Ze(e){return Object.prototype.toString.call(e)==="[object Object]"}function O(e){return Math.abs(e)}function ze(e){return Math.sign(e)}function me(e,t){return O(e-t)}function Ot(e,t){if(e===0||t===0||O(e)<=O(t))return 0;const n=me(O(e),O(t));return O(n/e)}function ge(e){return he(e).map(Number)}function H(e){return e[be(e)]}function be(e){return Math.max(0,e.length-1)}function Re(e,t){return t===be(e)}function We(e,t=0){return Array.from(Array(e),(n,o)=>t+o)}function he(e){return Object.keys(e)}function rt(e,t){return[e,t].reduce((n,o)=>(he(o).forEach(s=>{const i=n[s],r=o[s],a=Ze(i)&&Ze(r);n[s]=a?rt(i,r):r}),n),{})}function ke(e,t){return typeof t.MouseEvent<"u"&&e instanceof t.MouseEvent}function kt(e,t){const n={start:o,center:s,end:i};function o(){return 0}function s(c){return i(c)/2}function i(c){return t-c}function r(c,l){return Oe(e)?n[e](c):e(t,c,l)}return{measure:r}}function xe(){let e=[];function t(s,i,r,a={passive:!0}){let c;if("addEventListener"in s)s.addEventListener(i,r,a),c=()=>s.removeEventListener(i,r,a);else{const l=s;l.addListener(r),c=()=>l.removeListener(r)}return e.push(c),o}function n(){e=e.filter(s=>s())}const o={add:t,clear:n};return o}function At(e,t,n,o){const s=xe(),i=1e3/60;let r=null,a=0,c=0;function l(){s.add(e,"visibilitychange",()=>{e.hidden&&f()})}function g(){b(),s.clear()}function u(x){if(!c)return;r||(r=x);const d=x-r;for(r=x,a+=d;a>=i;)n(i),a-=i;const m=a/i;o(m),c&&t.requestAnimationFrame(u)}function h(){c||(c=t.requestAnimationFrame(u))}function b(){t.cancelAnimationFrame(c),r=null,a=0,c=0}function f(){r=null,a=0}return{init:l,destroy:g,start:h,stop:b,update:()=>n(i),render:o}}function qt(e,t){const n=t==="rtl",o=e==="y",s=o?"y":"x",i=o?"x":"y",r=!o&&n?-1:1,a=g(),c=u();function l(f){const{height:p,width:x}=f;return o?p:x}function g(){return o?"top":n?"right":"left"}function u(){return o?"bottom":n?"left":"right"}function h(f){return f*r}return{scroll:s,cross:i,startEdge:a,endEdge:c,measureSize:l,direction:h}}function oe(e=0,t=0){const n=O(e-t);function o(l){return l<e}function s(l){return l>t}function i(l){return o(l)||s(l)}function r(l){return i(l)?o(l)?e:t:l}function a(l){return n?l-n*Math.ceil((l-t)/n):l}return{length:n,max:t,min:e,constrain:r,reachedAny:i,reachedMax:s,reachedMin:o,removeOffset:a}}function ot(e,t,n){const{constrain:o}=oe(0,e),s=e+1;let i=r(t);function r(h){return n?O((s+h)%s):o(h)}function a(){return i}function c(h){return i=r(h),u}function l(h){return g().set(a()+h)}function g(){return ot(e,a(),n)}const u={get:a,set:c,add:l,clone:g};return u}function Mt(e,t,n,o,s,i,r,a,c,l,g,u,h,b,f,p,x,d,m){const{cross:v,direction:S}=e,j=["INPUT","SELECT","TEXTAREA"],E={passive:!1},w=xe(),N=xe(),P=oe(50,225).constrain(b.measure(20)),T={mouse:300,touch:400},C={mouse:500,touch:600},M=f?43:25;let B=!1,z=0,K=0,ie=!1,Q=!1,te=!1,J=!1;function re(y){if(!m)return;function I(q){(Fe(m)||m(y,q))&&R(q)}const A=t;w.add(A,"dragstart",q=>q.preventDefault(),E).add(A,"touchmove",()=>{},E).add(A,"touchend",()=>{}).add(A,"touchstart",I).add(A,"mousedown",I).add(A,"touchcancel",F).add(A,"contextmenu",F).add(A,"click",ce,!0)}function X(){w.clear(),N.clear()}function se(){const y=J?n:t;N.add(y,"touchmove",G,E).add(y,"touchend",F).add(y,"mousemove",G,E).add(y,"mouseup",F)}function Y(y){const I=y.nodeName||"";return j.includes(I)}function ue(){return(f?C:T)[J?"mouse":"touch"]}function fe(y,I){const A=u.add(ze(y)*-1),q=g.byDistance(y,!f).distance;return f||O(y)<P?q:x&&I?q*.5:g.byIndex(A.get(),0).distance}function R(y){const I=ke(y,o);J=I,te=f&&I&&!y.buttons&&B,B=me(s.get(),r.get())>=2,!(I&&y.button!==0)&&(Y(y.target)||(ie=!0,i.pointerDown(y),l.useFriction(0).useDuration(0),s.set(r),se(),z=i.readPoint(y),K=i.readPoint(y,v),h.emit("pointerDown")))}function G(y){if(!ke(y,o)&&y.touches.length>=2)return F(y);const A=i.readPoint(y),q=i.readPoint(y,v),$=me(A,z),_=me(q,K);if(!Q&&!J&&(!y.cancelable||(Q=$>_,!Q)))return F(y);const U=i.pointerMove(y);$>p&&(te=!0),l.useFriction(.3).useDuration(.75),a.start(),s.add(S(U)),y.preventDefault()}function F(y){const A=g.byDistance(0,!1).index!==u.get(),q=i.pointerUp(y)*ue(),$=fe(S(q),A),_=Ot(q,$),U=M-10*_,Z=d+_/50;Q=!1,ie=!1,N.clear(),l.useDuration(U).useFriction(Z),c.distance($,!f),J=!1,h.emit("pointerUp")}function ce(y){te&&(y.stopPropagation(),y.preventDefault(),te=!1)}function V(){return ie}return{init:re,destroy:X,pointerDown:V}}function Ft(e,t){let o,s;function i(u){return u.timeStamp}function r(u,h){const f=`client${(h||e.scroll)==="x"?"X":"Y"}`;return(ke(u,t)?u:u.touches[0])[f]}function a(u){return o=u,s=u,r(u)}function c(u){const h=r(u)-r(s),b=i(u)-i(o)>170;return s=u,b&&(o=u),h}function l(u){if(!o||!s)return 0;const h=r(s)-r(o),b=i(u)-i(o),f=i(u)-i(s)>170,p=h/b;return b&&!f&&O(p)>.1?p:0}return{pointerDown:a,pointerMove:c,pointerUp:l,readPoint:r}}function zt(){function e(n){const{offsetTop:o,offsetLeft:s,offsetWidth:i,offsetHeight:r}=n;return{top:o,right:s+i,bottom:o+r,left:s,width:i,height:r}}return{measure:e}}function Rt(e){function t(o){return e*(o/100)}return{measure:t}}function Bt(e,t,n,o,s,i,r){let a,c,l=[],g=!1;function u(p){return s.measureSize(r.measure(p))}function h(p){if(!i)return;c=u(e),l=o.map(u);function x(m){for(const v of m){const S=v.target===e,j=o.indexOf(v.target),E=S?c:l[j],w=u(S?e:o[j]);if(O(w-E)>=.5){n.requestAnimationFrame(()=>{p.reInit(),t.emit("resize")});break}}}a=new ResizeObserver(m=>{g||(Fe(i)||i(p,m))&&x(m)}),[e].concat(o).forEach(m=>a.observe(m))}function b(){a&&a.disconnect(),g=!0}return{init:h,destroy:b}}function Vt(e,t,n,o,s,i){let r=0,a=0,c=s,l=i,g=e.get(),u=0;function h(E){const w=E/1e3,N=c*w,P=o.get()-e.get(),T=!c;let C=0;return T?(r=0,n.set(o),e.set(o),C=P):(n.set(e),r+=P/N,r*=l,g+=r,e.add(r*w),C=g-u),a=ze(C),u=g,j}function b(){const E=o.get()-t.get();return O(E)<.001}function f(){return c}function p(){return a}function x(){return r}function d(){return v(s)}function m(){return S(i)}function v(E){return c=E,j}function S(E){return l=E,j}const j={direction:p,duration:f,velocity:x,seek:h,settled:b,useBaseFriction:m,useBaseDuration:d,useFriction:S,useDuration:v};return j}function Ht(e,t,n,o,s){const i=s.measure(10),r=s.measure(50),a=oe(.1,.99);let c=!1;function l(){return!(c||!e.reachedAny(n.get())||!e.reachedAny(t.get()))}function g(b){if(!l())return;const f=e.reachedMin(t.get())?"min":"max",p=O(e[f]-t.get()),x=n.get()-t.get(),d=a.constrain(p/r);n.subtract(x*d),!b&&O(x)<i&&(n.set(e.constrain(n.get())),o.useDuration(25).useBaseFriction())}function u(b){c=!b}return{shouldConstrain:l,constrain:g,toggleActive:u}}function Gt(e,t,n,o,s){const i=oe(-t+e,0),r=u(),a=g(),c=h();function l(f,p){return me(f,p)<1}function g(){const f=r[0],p=H(r),x=r.lastIndexOf(f),d=r.indexOf(p)+1;return oe(x,d)}function u(){return n.map((f,p)=>{const{min:x,max:d}=i,m=i.constrain(f),v=!p,S=Re(n,p);return v?d:S||l(x,m)?x:l(d,m)?d:m}).map(f=>parseFloat(f.toFixed(3)))}function h(){if(t<=e+s)return[i.max];if(o==="keepSnaps")return r;const{min:f,max:p}=a;return r.slice(f,p)}return{snapsContained:c,scrollContainLimit:a}}function $t(e,t,n){const o=t[0],s=n?o-e:H(t);return{limit:oe(s,o)}}function Ut(e,t,n,o){const i=t.min+.1,r=t.max+.1,{reachedMin:a,reachedMax:c}=oe(i,r);function l(h){return h===1?c(n.get()):h===-1?a(n.get()):!1}function g(h){if(!l(h))return;const b=e*(h*-1);o.forEach(f=>f.add(b))}return{loop:g}}function Kt(e){const{max:t,length:n}=e;function o(i){const r=i-t;return n?r/-n:0}return{get:o}}function Qt(e,t,n,o,s){const{startEdge:i,endEdge:r}=e,{groupSlides:a}=s,c=u().map(t.measure),l=h(),g=b();function u(){return a(o).map(p=>H(p)[r]-p[0][i]).map(O)}function h(){return o.map(p=>n[i]-p[i]).map(p=>-O(p))}function b(){return a(l).map(p=>p[0]).map((p,x)=>p+c[x])}return{snaps:l,snapsAligned:g}}function Jt(e,t,n,o,s,i){const{groupSlides:r}=s,{min:a,max:c}=o,l=g();function g(){const h=r(i),b=!e||t==="keepSnaps";return n.length===1?[i]:b?h:h.slice(a,c).map((f,p,x)=>{const d=!p,m=Re(x,p);if(d){const v=H(x[0])+1;return We(v)}if(m){const v=be(i)-H(x)[0]+1;return We(v,H(x)[0])}return f})}return{slideRegistry:l}}function Xt(e,t,n,o,s){const{reachedAny:i,removeOffset:r,constrain:a}=o;function c(f){return f.concat().sort((p,x)=>O(p)-O(x))[0]}function l(f){const p=e?r(f):a(f),x=t.map((m,v)=>({diff:g(m-p,0),index:v})).sort((m,v)=>O(m.diff)-O(v.diff)),{index:d}=x[0];return{index:d,distance:p}}function g(f,p){const x=[f,f+n,f-n];if(!e)return f;if(!p)return c(x);const d=x.filter(m=>ze(m)===p);return d.length?c(d):H(x)-n}function u(f,p){const x=t[f]-s.get(),d=g(x,p);return{index:f,distance:d}}function h(f,p){const x=s.get()+f,{index:d,distance:m}=l(x),v=!e&&i(x);if(!p||v)return{index:d,distance:f};const S=t[d]-m,j=f+g(S,0);return{index:d,distance:j}}return{byDistance:h,byIndex:u,shortcut:g}}function Yt(e,t,n,o,s,i,r){function a(u){const h=u.distance,b=u.index!==t.get();i.add(h),h&&(o.duration()?e.start():(e.update(),e.render(1),e.update())),b&&(n.set(t.get()),t.set(u.index),r.emit("select"))}function c(u,h){const b=s.byDistance(u,h);a(b)}function l(u,h){const b=t.clone().set(u),f=s.byIndex(b.get(),h);a(f)}return{distance:c,index:l}}function _t(e,t,n,o,s,i,r){let a=0;function c(){i.add(document,"keydown",l,!1),t.forEach(g)}function l(h){h.code==="Tab"&&(a=new Date().getTime())}function g(h){const b=()=>{if(new Date().getTime()-a>10)return;e.scrollLeft=0;const x=t.indexOf(h),d=n.findIndex(m=>m.includes(x));Me(d)&&(s.useDuration(0),o.index(d,0),r.emit("slideFocus"))};i.add(h,"focus",b,{passive:!0,capture:!0})}return{init:c}}function pe(e){let t=e;function n(){return t}function o(c){t=r(c)}function s(c){t+=r(c)}function i(c){t-=r(c)}function r(c){return Me(c)?c:c.get()}return{get:n,set:o,add:s,subtract:i}}function st(e,t){const n=e.scroll==="x"?i:r,o=t.style;let s=!1;function i(u){return`translate3d(${u}px,0px,0px)`}function r(u){return`translate3d(0px,${u}px,0px)`}function a(u){s||(o.transform=n(e.direction(u)))}function c(u){s=!u}function l(){s||(o.transform="",t.getAttribute("style")||t.removeAttribute("style"))}return{clear:l,to:a,toggleActive:c}}function Zt(e,t,n,o,s,i,r,a,c){const g=ge(s),u=ge(s).reverse(),h=d().concat(m());function b(w,N){return w.reduce((P,T)=>P-s[T],N)}function f(w,N){return w.reduce((P,T)=>b(P,N)>0?P.concat([T]):P,[])}function p(w){return i.map((N,P)=>({start:N-o[P]+.5+w,end:N+t-.5+w}))}function x(w,N,P){const T=p(N);return w.map(C=>{const M=P?0:-n,B=P?n:0,z=P?"end":"start",K=T[C][z];return{index:C,loopPoint:K,slideLocation:pe(-1),translate:st(e,c[C]),target:()=>a.get()>K?M:B}})}function d(){const w=r[0],N=f(u,w);return x(N,n,!1)}function m(){const w=t-r[0]-1,N=f(g,w);return x(N,-n,!0)}function v(){return h.every(({index:w})=>{const N=g.filter(P=>P!==w);return b(N,t)<=.1})}function S(){h.forEach(w=>{const{target:N,translate:P,slideLocation:T}=w,C=N();C!==T.get()&&(P.to(C),T.set(C))})}function j(){h.forEach(w=>w.translate.clear())}return{canLoop:v,clear:j,loop:S,loopPoints:h}}function Wt(e,t,n){let o,s=!1;function i(c){if(!n)return;function l(g){for(const u of g)if(u.type==="childList"){c.reInit(),t.emit("slidesChanged");break}}o=new MutationObserver(g=>{s||(Fe(n)||n(c,g))&&l(g)}),o.observe(e,{childList:!0})}function r(){o&&o.disconnect(),s=!0}return{init:i,destroy:r}}function en(e,t,n,o){const s={};let i=null,r=null,a,c=!1;function l(){a=new IntersectionObserver(f=>{c||(f.forEach(p=>{const x=t.indexOf(p.target);s[x]=p}),i=null,r=null,n.emit("slidesInView"))},{root:e.parentElement,threshold:o}),t.forEach(f=>a.observe(f))}function g(){a&&a.disconnect(),c=!0}function u(f){return he(s).reduce((p,x)=>{const d=parseInt(x),{isIntersecting:m}=s[d];return(f&&m||!f&&!m)&&p.push(d),p},[])}function h(f=!0){if(f&&i)return i;if(!f&&r)return r;const p=u(f);return f&&(i=p),f||(r=p),p}return{init:l,destroy:g,get:h}}function tn(e,t,n,o,s,i){const{measureSize:r,startEdge:a,endEdge:c}=e,l=n[0]&&s,g=f(),u=p(),h=n.map(r),b=x();function f(){if(!l)return 0;const m=n[0];return O(t[a]-m[a])}function p(){if(!l)return 0;const m=i.getComputedStyle(H(o));return parseFloat(m.getPropertyValue(`margin-${c}`))}function x(){return n.map((m,v,S)=>{const j=!v,E=Re(S,v);return j?h[v]+g:E?h[v]+u:S[v+1][a]-m[a]}).map(O)}return{slideSizes:h,slideSizesWithGaps:b,startGap:g,endGap:u}}function nn(e,t,n,o,s,i,r,a,c){const{startEdge:l,endEdge:g,direction:u}=e,h=Me(n);function b(d,m){return ge(d).filter(v=>v%m===0).map(v=>d.slice(v,v+m))}function f(d){return d.length?ge(d).reduce((m,v,S)=>{const j=H(m)||0,E=j===0,w=v===be(d),N=s[l]-i[j][l],P=s[l]-i[v][g],T=!o&&E?u(r):0,C=!o&&w?u(a):0,M=O(P-C-(N+T));return S&&M>t+c&&m.push(v),w&&m.push(d.length),m},[]).map((m,v,S)=>{const j=Math.max(S[v-1]||0);return d.slice(j,m)}):[]}function p(d){return h?b(d,n):f(d)}return{groupSlides:p}}function rn(e,t,n,o,s,i,r){const{align:a,axis:c,direction:l,startIndex:g,loop:u,duration:h,dragFree:b,dragThreshold:f,inViewThreshold:p,slidesToScroll:x,skipSnaps:d,containScroll:m,watchResize:v,watchSlides:S,watchDrag:j}=i,E=2,w=zt(),N=w.measure(t),P=n.map(w.measure),T=qt(c,l),C=T.measureSize(N),M=Rt(C),B=kt(a,C),z=!u&&!!m,K=u||!!m,{slideSizes:ie,slideSizesWithGaps:Q,startGap:te,endGap:J}=tn(T,N,P,n,K,s),re=nn(T,C,x,u,N,P,te,J,E),{snaps:X,snapsAligned:se}=Qt(T,B,N,P,re),Y=-H(X)+H(Q),{snapsContained:ue,scrollContainLimit:fe}=Gt(C,Y,se,m,E),R=z?ue:se,{limit:G}=$t(Y,R,u),F=ot(be(R),g,u),ce=F.clone(),V=ge(n),k=({dragHandler:ne,scrollBody:Pe,scrollBounds:je,options:{loop:ve}},Ie)=>{ve||je.constrain(ne.pointerDown()),Pe.seek(Ie)},y=({scrollBody:ne,translate:Pe,location:je,offsetLocation:ve,scrollLooper:Ie,slideLooper:gt,dragHandler:ht,animation:xt,eventHandler:$e,scrollBounds:yt,options:{loop:Ue}},Ke)=>{const Qe=ne.settled(),bt=!yt.shouldConstrain(),Je=Ue?Qe:Qe&&bt;Je&&!ht.pointerDown()&&(xt.stop(),$e.emit("settle")),Je||$e.emit("scroll");const vt=je.get()*Ke+_.get()*(1-Ke);ve.set(vt),Ue&&(Ie.loop(ne.direction()),gt.loop()),Pe.to(ve.get())},I=At(o,s,ne=>k(Te,ne),ne=>y(Te,ne)),A=.68,q=R[F.get()],$=pe(q),_=pe(q),U=pe(q),Z=pe(q),de=Vt($,U,_,Z,h,A),Ne=Xt(u,R,Y,G,Z),Ee=Yt(I,F,ce,de,Ne,Z,r),Ve=Kt(G),He=xe(),pt=en(t,n,r,p),{slideRegistry:Ge}=Jt(z,m,R,fe,re,V),mt=_t(e,n,Ge,Ee,de,He,r),Te={ownerDocument:o,ownerWindow:s,eventHandler:r,containerRect:N,slideRects:P,animation:I,axis:T,dragHandler:Mt(T,e,o,s,Z,Ft(T,s),$,I,Ee,de,Ne,F,r,M,b,f,d,A,j),eventStore:He,percentOfView:M,index:F,indexPrevious:ce,limit:G,location:$,offsetLocation:U,previousLocation:_,options:i,resizeHandler:Bt(t,r,s,n,T,v,w),scrollBody:de,scrollBounds:Ht(G,U,Z,de,M),scrollLooper:Ut(Y,G,U,[$,U,_,Z]),scrollProgress:Ve,scrollSnapList:R.map(Ve.get),scrollSnaps:R,scrollTarget:Ne,scrollTo:Ee,slideLooper:Zt(T,C,Y,ie,Q,X,R,U,n),slideFocus:mt,slidesHandler:Wt(t,r,S),slidesInView:pt,slideIndexes:V,slideRegistry:Ge,slidesToScroll:re,target:Z,translate:st(T,t)};return Te}function on(){let e={},t;function n(l){t=l}function o(l){return e[l]||[]}function s(l){return o(l).forEach(g=>g(t,l)),c}function i(l,g){return e[l]=o(l).concat([g]),c}function r(l,g){return e[l]=o(l).filter(u=>u!==g),c}function a(){e={}}const c={init:n,emit:s,off:r,on:i,clear:a};return c}const sn={align:"center",axis:"x",container:null,slides:null,containScroll:"trimSnaps",direction:"ltr",slidesToScroll:1,inViewThreshold:0,breakpoints:{},dragFree:!1,dragThreshold:10,loop:!1,skipSnaps:!1,duration:25,startIndex:0,active:!0,watchDrag:!0,watchResize:!0,watchSlides:!0};function cn(e){function t(i,r){return rt(i,r||{})}function n(i){const r=i.breakpoints||{},a=he(r).filter(c=>e.matchMedia(c).matches).map(c=>r[c]).reduce((c,l)=>t(c,l),{});return t(i,a)}function o(i){return i.map(r=>he(r.breakpoints||{})).reduce((r,a)=>r.concat(a),[]).map(e.matchMedia)}return{mergeOptions:t,optionsAtMedia:n,optionsMediaQueries:o}}function an(e){let t=[];function n(i,r){return t=r.filter(({options:a})=>e.optionsAtMedia(a).active!==!1),t.forEach(a=>a.init(i,e)),r.reduce((a,c)=>Object.assign(a,{[c.name]:c}),{})}function o(){t=t.filter(i=>i.destroy())}return{init:n,destroy:o}}function Se(e,t,n){const o=e.ownerDocument,s=o.defaultView,i=cn(s),r=an(i),a=xe(),c=on(),{mergeOptions:l,optionsAtMedia:g,optionsMediaQueries:u}=i,{on:h,off:b,emit:f}=c,p=C;let x=!1,d,m=l(sn,Se.globalOptions),v=l(m),S=[],j,E,w;function N(){const{container:k,slides:y}=v;E=(Oe(k)?e.querySelector(k):k)||e.children[0];const A=Oe(y)?E.querySelectorAll(y):y;w=[].slice.call(A||E.children)}function P(k){const y=rn(e,E,w,o,s,k,c);if(k.loop&&!y.slideLooper.canLoop()){const I=Object.assign({},k,{loop:!1});return P(I)}return y}function T(k,y){x||(m=l(m,k),v=g(m),S=y||S,N(),d=P(v),u([m,...S.map(({options:I})=>I)]).forEach(I=>a.add(I,"change",C)),v.active&&(d.translate.to(d.location.get()),d.animation.init(),d.slidesInView.init(),d.slideFocus.init(),d.eventHandler.init(V),d.resizeHandler.init(V),d.slidesHandler.init(V),d.options.loop&&d.slideLooper.loop(),E.offsetParent&&w.length&&d.dragHandler.init(V),j=r.init(V,S)))}function C(k,y){const I=X();M(),T(l({startIndex:I},k),y),c.emit("reInit")}function M(){d.dragHandler.destroy(),d.eventStore.clear(),d.translate.clear(),d.slideLooper.clear(),d.resizeHandler.destroy(),d.slidesHandler.destroy(),d.slidesInView.destroy(),d.animation.destroy(),r.destroy(),a.clear()}function B(){x||(x=!0,a.clear(),M(),c.emit("destroy"),c.clear())}function z(k,y,I){!v.active||x||(d.scrollBody.useBaseFriction().useDuration(y===!0?0:v.duration),d.scrollTo.index(k,I||0))}function K(k){const y=d.index.add(1).get();z(y,k,-1)}function ie(k){const y=d.index.add(-1).get();z(y,k,1)}function Q(){return d.index.add(1).get()!==X()}function te(){return d.index.add(-1).get()!==X()}function J(){return d.scrollSnapList}function re(){return d.scrollProgress.get(d.location.get())}function X(){return d.index.get()}function se(){return d.indexPrevious.get()}function Y(){return d.slidesInView.get()}function ue(){return d.slidesInView.get(!1)}function fe(){return j}function R(){return d}function G(){return e}function F(){return E}function ce(){return w}const V={canScrollNext:Q,canScrollPrev:te,containerNode:F,internalEngine:R,destroy:B,off:b,on:h,emit:f,plugins:fe,previousScrollSnap:se,reInit:p,rootNode:G,scrollNext:K,scrollPrev:ie,scrollProgress:re,scrollSnapList:J,scrollTo:z,selectedScrollSnap:X,slideNodes:ce,slidesInView:Y,slidesNotInView:ue};return T(t,n),setTimeout(()=>c.emit("init"),0),V}Se.globalOptions=void 0;function Be(e={},t=[]){const n=L.useRef(e),o=L.useRef(t),[s,i]=L.useState(),[r,a]=L.useState(),c=L.useCallback(()=>{s&&s.reInit(n.current,o.current)},[s]);return L.useEffect(()=>{if(Ct()&&r){Se.globalOptions=Be.globalOptions;const l=Se(r,n.current,o.current);return i(l),()=>l.destroy()}else i(void 0)},[r,i]),L.useEffect(()=>{qe(n.current,e)||(n.current=e,c())},[e,c]),L.useEffect(()=>{Lt(o.current,t)||(o.current=t,c())},[t,c]),[a,s]}Be.globalOptions=void 0;const ct=L.createContext(null);function De(){const e=L.useContext(ct);if(!e)throw new Error("useCarousel must be used within a <Carousel />");return e}const at=L.forwardRef(({orientation:e="horizontal",opts:t,setApi:n,plugins:o,className:s,children:i,...r},a)=>{const[c,l]=Be({...t,axis:e==="horizontal"?"x":"y"},o),[g,u]=L.useState(!1),[h,b]=L.useState(!1),f=L.useCallback(m=>{m&&(u(m.canScrollPrev()),b(m.canScrollNext()))},[]),p=L.useCallback(()=>{l?.scrollPrev()},[l]),x=L.useCallback(()=>{l?.scrollNext()},[l]),d=L.useCallback(m=>{m.key==="ArrowLeft"?(m.preventDefault(),p()):m.key==="ArrowRight"&&(m.preventDefault(),x())},[p,x]);return L.useEffect(()=>{!l||!n||n(l)},[l,n]),L.useEffect(()=>{if(l)return f(l),l.on("reInit",f),l.on("select",f),()=>{l?.off("select",f)}},[l,f]),D.jsx(ct.Provider,{value:{carouselRef:c,api:l,opts:t,orientation:e||(t?.axis==="y"?"vertical":"horizontal"),scrollPrev:p,scrollNext:x,canScrollPrev:g,canScrollNext:h},children:D.jsx("div",{ref:a,onKeyDownCapture:d,className:ye("relative",s),role:"region","aria-roledescription":"carousel",...r,children:i})})});at.displayName="Carousel";const lt=L.forwardRef(({className:e,...t},n)=>{const{carouselRef:o,orientation:s}=De();return D.jsx("div",{ref:o,className:"overflow-hidden",children:D.jsx("div",{ref:n,className:ye("flex",s==="horizontal"?"-ml-4":"-mt-4 flex-col",e),...t})})});lt.displayName="CarouselContent";const ut=L.forwardRef(({className:e,...t},n)=>{const{orientation:o}=De();return D.jsx("div",{ref:n,role:"group","aria-roledescription":"slide",className:ye("min-w-0 shrink-0 grow-0 basis-full",o==="horizontal"?"/pl-4":"pt-4",e),...t})});ut.displayName="CarouselItem";const ft=L.forwardRef(({className:e,variant:t="outline",size:n="icon",...o},s)=>{const{orientation:i,scrollPrev:r,canScrollPrev:a}=De();return D.jsxs(we,{ref:s,variant:t,size:n,className:ye("absolute  h-8 w-8 rounded-full",i==="horizontal"?"-left-12 top-1/2 -translate-y-1/2":"-top-12 left-1/2 -translate-x-1/2 rotate-90",e),disabled:!a,onClick:r,...o,children:[D.jsx(Tt,{className:"h-4 w-4"}),D.jsx("span",{className:"sr-only",children:"Previous slide"})]})});ft.displayName="CarouselPrevious";const dt=L.forwardRef(({className:e,variant:t="outline",size:n="icon",...o},s)=>{const{orientation:i,scrollNext:r,canScrollNext:a}=De();return D.jsxs(we,{ref:s,variant:t,size:n,className:ye("absolute h-8 w-8 rounded-full",i==="horizontal"?"-right-12 top-1/2 -translate-y-1/2":"-bottom-12 left-1/2 -translate-x-1/2 rotate-90",e),disabled:!a,onClick:r,...o,children:[D.jsx(Pt,{className:"h-4 w-4"}),D.jsx("span",{className:"sr-only",children:"Next slide"})]})});dt.displayName="CarouselNext";function ln(){const e=L.useRef(Ae({delay:2e3,stopOnInteraction:!0})),t=tt(),n=St(),o=(i,r,a,c)=>{t(nt.addToCart({name:i,id:r,price:a,img:c}))},s=it.stocks.slice().sort(()=>Math.random()-.5);return L.useEffect(()=>{},[s]),D.jsxs(at,{plugins:[e.current],className:"w-full max-w-[600px] lg:max-w-[850px] xl:max-w-[1000px] /max-h-[70vh] mx-auto mt-10",opts:{loop:!0},orientation:"horizontal",children:[D.jsx(lt,{className:"",children:s.map((i,r)=>D.jsxs(ut,{className:"basis-1/3 md:basis-1/5 lg:basis-1/7 flex flex-col overflow-clip justify-center items-center w-full ml-2 /bg-green-500",children:[D.jsx("div",{onClick:()=>n(`/store/${i.id}`,{replace:!0}),className:"h-[100px] w-full mx-2 md:mx-0 flex justify-center items-center",children:D.jsx("img",{src:i.img,alt:"",className:"h-full rounded-sm"})}),D.jsxs("div",{className:"flex flex-1 flex-col text-center justify-center items-center w-full /bg-red-500",children:[D.jsxs("div",{onClick:()=>n(`/store/${i.id}`,{replace:!0}),className:"w-full text-center flex flex-col justify-center items-center",children:[D.jsx("div",{className:"font-semibold text-sm",children:i.name}),D.jsxs("div",{className:"font-semibold text-foreground/80 text-sm",children:["₦ ",i.price]})]}),D.jsx("div",{className:"flex flex-row w-full max-w-[100px] gap-1",children:D.jsx(we,{onClick:()=>o(i.name,i.id,i.price,i.img),variant:"outline",className:"rounded-lg flex-1 w-full h-6 font-semibold text-accent-secondary border-accent-secondary hover:bg-accent-secondary/60 hover:text-background border-2",children:D.jsx(wt,{})})})]})]},r))}),D.jsx(ft,{}),D.jsx(dt,{})]})}const pn=()=>{let{id:e}=Dt();const t=it.stocks.find(s=>`${s.id}`==e);L.useEffect(()=>{},[]);const n=tt(),o=(s,i,r,a)=>{n(nt.addToCart({name:s,id:i,price:r,img:a}))};return D.jsx(Nt.section,{initial:{opacity:0},animate:{opacity:1,transition:{delay:.5,duration:.6,ease:"easeIn"}},className:"w-[100vw] overflow-clip",children:D.jsxs("div",{className:"flex flex-col gap-2",children:[D.jsxs("div",{className:"flex flex-col md:flex-row w-full max-w-4xl mx-auto md:h-[320px]",children:[D.jsx("div",{className:"w-[100%] h-[100vw] max-w-[320px] max-h-[320px] flex justify-center items-center mx-auto",children:D.jsx("img",{className:"h-full",src:t?.img,alt:""})}),D.jsxs("div",{className:"h-full flex flex-none md:flex-1 flex-col justify-end m-5",children:[D.jsx("div",{className:"text-xl md:text-2xl font-semibold text-center md:text-start",children:t?.name}),D.jsxs("div",{className:"flex flex-col md:flex-row md:justify-between",children:[D.jsxs("div",{className:"text-xl text-foreground/80 text-end md:text-start",children:["₦ ",t?.price]}),D.jsx("div",{className:"flex flex-row mb-5 /mx-5",children:D.jsx(we,{onClick:()=>o(t?.name,t?.id,t?.price,t?.img),className:"rounded-md text-lg font-semibold w-64 md:w-20",children:"cart"})})]}),D.jsx("div",{className:"px-2 text-center md:text-start",children:t?.Description})]})]}),D.jsx("div",{children:D.jsx("div",{children:D.jsx(ln,{})})})]})})};export{pn as default};
