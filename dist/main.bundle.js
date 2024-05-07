(()=>{var t={64:()=>{const t=document.querySelector(".play-button"),e=document.querySelector("#small-video");function n(){window.scrollTo({top:0,behavior:"smooth"})}t&&e&&[t,e].forEach((t=>{t.addEventListener("click",n)}))},999:()=>{({rootElem:document.querySelector("#small-video"),button:document.querySelector(".parallax-button"),calcPosition({x:t,y:e}){const n=this.rootElem.offsetWidth/2,r=e-this.rootElem.offsetHeight/2;return{buttonX:(.05*(t-n)).toFixed(1),buttonY:(.05*r).toFixed(1)}},updatePosition({x:t,y:e}){const{buttonX:n,buttonY:r}=this.calcPosition({x:t,y:e});this.button.style.setProperty("--x",`${n}px`),this.button.style.setProperty("--y",`${r}px`)},watchCursor(){this.rootElem&&this.button&&(this.rootElem.onmouseenter=({target:t})=>{this.button.style.opacity=1,t.onmousemove=({offsetX:t,offsetY:e})=>{this.button.matches(".paused")||this.updatePosition({x:t,y:e})}},this.rootElem.onmouseleave=()=>{this.button.matches(".playing")||(this.button.style.opacity=0)})}}).watchCursor()},706:()=>{[...document.querySelectorAll(".s8 .archive-item a")].forEach((t=>{t.onclick=()=>t.classList.add("visited")}))}},e={};function n(r){var i=e[r];if(void 0!==i)return i.exports;var o=e[r]={exports:{}};return t[r](o,o.exports,n),o.exports}(()=>{"use strict";const t=document.createElement("div");function e(e,n=""){const r=`${e}: ${n}`;t.insertAdjacentHTML("beforeEnd",`<p>${r}</p>`),console.log(r)}function r(t,e="300ms ease-in 0ms"){t.style.opacity=0,t.offsetHeight,t.style.transition=`opacity ${e}`,t.style.opacity=1}function i(t,e){t.style.transition=`opacity ${e}`,t.style.opacity=0}function o(t,{onAppear:e,onDisappear:n,options:r}){if(t.length||(t=[t]),![...t].every((t=>t instanceof HTMLElement)))return console.log("No elements to observe");const i=new IntersectionObserver((t=>{t.forEach((t=>{t.isIntersecting?e(t.target):n(t.target)}))}),r);return t.forEach((t=>i.observe(t))),i}function a({from:t,to:e,precise:n=2}){const r=t+Math.random()*(e-t);return Number(r.toFixed(n))}t.className="log-screen",document.body.prepend(t),console.clear(),setTimeout((()=>{t.classList.add("finished")}),5e3),o(document.querySelectorAll(".js-auto-fade"),{onAppear:t=>r(t,"900ms 0ms ease-in"),onDisappear:t=>i(t,"300ms 0ms ease-out"),options:{threshold:.3}});var s={update:null,begin:null,loopBegin:null,changeBegin:null,change:null,changeComplete:null,loopComplete:null,complete:null,loop:1,direction:"normal",autoplay:!0,timelineOffset:0},u={duration:1e3,delay:0,endDelay:0,easing:"easeOutElastic(1, .5)",round:0},l=["translateX","translateY","translateZ","rotate","rotateX","rotateY","rotateZ","scale","scaleX","scaleY","scaleZ","skew","skewX","skewY","perspective","matrix","matrix3d"],c={CSS:{},springs:{}};function d(t,e,n){return Math.min(Math.max(t,e),n)}function h(t,e){return t.indexOf(e)>-1}function m(t,e){return t.apply(null,e)}var p={arr:function(t){return Array.isArray(t)},obj:function(t){return h(Object.prototype.toString.call(t),"Object")},pth:function(t){return p.obj(t)&&t.hasOwnProperty("totalLength")},svg:function(t){return t instanceof SVGElement},inp:function(t){return t instanceof HTMLInputElement},dom:function(t){return t.nodeType||p.svg(t)},str:function(t){return"string"==typeof t},fnc:function(t){return"function"==typeof t},und:function(t){return void 0===t},nil:function(t){return p.und(t)||null===t},hex:function(t){return/(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(t)},rgb:function(t){return/^rgb/.test(t)},hsl:function(t){return/^hsl/.test(t)},col:function(t){return p.hex(t)||p.rgb(t)||p.hsl(t)},key:function(t){return!s.hasOwnProperty(t)&&!u.hasOwnProperty(t)&&"targets"!==t&&"keyframes"!==t}};function f(t){var e=/\(([^)]+)\)/.exec(t);return e?e[1].split(",").map((function(t){return parseFloat(t)})):[]}function v(t,e){var n=f(t),r=d(p.und(n[0])?1:n[0],.1,100),i=d(p.und(n[1])?100:n[1],.1,100),o=d(p.und(n[2])?10:n[2],.1,100),a=d(p.und(n[3])?0:n[3],.1,100),s=Math.sqrt(i/r),u=o/(2*Math.sqrt(i*r)),l=u<1?s*Math.sqrt(1-u*u):0,h=u<1?(u*s-a)/l:-a+s;function m(t){var n=e?e*t/1e3:t;return n=u<1?Math.exp(-n*u*s)*(1*Math.cos(l*n)+h*Math.sin(l*n)):(1+h*n)*Math.exp(-n*s),0===t||1===t?t:1-n}return e?m:function(){var e=c.springs[t];if(e)return e;for(var n=1/6,r=0,i=0;;)if(1===m(r+=n)){if(++i>=16)break}else i=0;var o=r*n*1e3;return c.springs[t]=o,o}}function y(t){return void 0===t&&(t=10),function(e){return Math.ceil(d(e,1e-6,1)*t)*(1/t)}}var g,b,x=function(){var t=.1;function e(t,e){return 1-3*e+3*t}function n(t,e){return 3*e-6*t}function r(t){return 3*t}function i(t,i,o){return((e(i,o)*t+n(i,o))*t+r(i))*t}function o(t,i,o){return 3*e(i,o)*t*t+2*n(i,o)*t+r(i)}return function(e,n,r,a){if(0<=e&&e<=1&&0<=r&&r<=1){var s=new Float32Array(11);if(e!==n||r!==a)for(var u=0;u<11;++u)s[u]=i(u*t,e,r);return function(u){return e===n&&r===a||0===u||1===u?u:i(function(n){for(var a=0,u=1;10!==u&&s[u]<=n;++u)a+=t;--u;var l=a+(n-s[u])/(s[u+1]-s[u])*t,c=o(l,e,r);return c>=.001?function(t,e,n,r){for(var a=0;a<4;++a){var s=o(e,n,r);if(0===s)return e;e-=(i(e,n,r)-t)/s}return e}(n,l,e,r):0===c?l:function(t,e,n,r,o){var a,s,u=0;do{(a=i(s=e+(n-e)/2,r,o)-t)>0?n=s:e=s}while(Math.abs(a)>1e-7&&++u<10);return s}(n,a,a+t,e,r)}(u),n,a)}}}}(),w=(g={linear:function(){return function(t){return t}}},b={Sine:function(){return function(t){return 1-Math.cos(t*Math.PI/2)}},Expo:function(){return function(t){return t?Math.pow(2,10*t-10):0}},Circ:function(){return function(t){return 1-Math.sqrt(1-t*t)}},Back:function(){return function(t){return t*t*(3*t-2)}},Bounce:function(){return function(t){for(var e,n=4;t<((e=Math.pow(2,--n))-1)/11;);return 1/Math.pow(4,3-n)-7.5625*Math.pow((3*e-2)/22-t,2)}},Elastic:function(t,e){void 0===t&&(t=1),void 0===e&&(e=.5);var n=d(t,1,10),r=d(e,.1,2);return function(t){return 0===t||1===t?t:-n*Math.pow(2,10*(t-1))*Math.sin((t-1-r/(2*Math.PI)*Math.asin(1/n))*(2*Math.PI)/r)}}},["Quad","Cubic","Quart","Quint"].forEach((function(t,e){b[t]=function(){return function(t){return Math.pow(t,e+2)}}})),Object.keys(b).forEach((function(t){var e=b[t];g["easeIn"+t]=e,g["easeOut"+t]=function(t,n){return function(r){return 1-e(t,n)(1-r)}},g["easeInOut"+t]=function(t,n){return function(r){return r<.5?e(t,n)(2*r)/2:1-e(t,n)(-2*r+2)/2}},g["easeOutIn"+t]=function(t,n){return function(r){return r<.5?(1-e(t,n)(1-2*r))/2:(e(t,n)(2*r-1)+1)/2}}})),g);function S(t,e){if(p.fnc(t))return t;var n=t.split("(")[0],r=w[n],i=f(t);switch(n){case"spring":return v(t,e);case"cubicBezier":return m(x,i);case"steps":return m(y,i);default:return m(r,i)}}function M(t){try{return document.querySelectorAll(t)}catch(t){return}}function E(t,e){for(var n=t.length,r=arguments.length>=2?arguments[1]:void 0,i=[],o=0;o<n;o++)if(o in t){var a=t[o];e.call(r,a,o,t)&&i.push(a)}return i}function C(t){return t.reduce((function(t,e){return t.concat(p.arr(e)?C(e):e)}),[])}function P(t){return p.arr(t)?t:(p.str(t)&&(t=M(t)||t),t instanceof NodeList||t instanceof HTMLCollection?[].slice.call(t):[t])}function I(t,e){return t.some((function(t){return t===e}))}function q(t){var e={};for(var n in t)e[n]=t[n];return e}function T(t,e){var n=q(t);for(var r in t)n[r]=e.hasOwnProperty(r)?e[r]:t[r];return n}function L(t,e){var n=q(t);for(var r in e)n[r]=p.und(t[r])?e[r]:t[r];return n}function k(t){var e=/[+-]?\d*\.?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?(%|px|pt|em|rem|in|cm|mm|ex|ch|pc|vw|vh|vmin|vmax|deg|rad|turn)?$/.exec(t);if(e)return e[1]}function A(t,e){return p.fnc(t)?t(e.target,e.id,e.total):t}function D(t,e){return t.getAttribute(e)}function O(t,e,n){if(I([n,"deg","rad","turn"],k(e)))return e;var r=c.CSS[e+n];if(!p.und(r))return r;var i=document.createElement(t.tagName),o=t.parentNode&&t.parentNode!==document?t.parentNode:document.body;o.appendChild(i),i.style.position="absolute",i.style.width=100+n;var a=100/i.offsetWidth;o.removeChild(i);var s=a*parseFloat(e);return c.CSS[e+n]=s,s}function B(t,e,n){if(e in t.style){var r=e.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase(),i=t.style[e]||getComputedStyle(t).getPropertyValue(r)||"0";return n?O(t,i,n):i}}function H(t,e){return p.dom(t)&&!p.inp(t)&&(!p.nil(D(t,e))||p.svg(t)&&t[e])?"attribute":p.dom(t)&&I(l,e)?"transform":p.dom(t)&&"transform"!==e&&B(t,e)?"css":null!=t[e]?"object":void 0}function F(t){if(p.dom(t)){for(var e,n=t.style.transform||"",r=/(\w+)\(([^)]*)\)/g,i=new Map;e=r.exec(n);)i.set(e[1],e[2]);return i}}function N(t,e,n,r){switch(H(t,e)){case"transform":return function(t,e,n,r){var i=h(e,"scale")?1:0+function(t){return h(t,"translate")||"perspective"===t?"px":h(t,"rotate")||h(t,"skew")?"deg":void 0}(e),o=F(t).get(e)||i;return n&&(n.transforms.list.set(e,o),n.transforms.last=e),r?O(t,o,r):o}(t,e,r,n);case"css":return B(t,e,n);case"attribute":return D(t,e);default:return t[e]||0}}function G(t,e){var n=/^(\*=|\+=|-=)/.exec(t);if(!n)return t;var r=k(t)||0,i=parseFloat(e),o=parseFloat(t.replace(n[0],""));switch(n[0][0]){case"+":return i+o+r;case"-":return i-o+r;case"*":return i*o+r}}function V(t,e){if(p.col(t))return function(t){return p.rgb(t)?(n=/rgb\((\d+,\s*[\d]+,\s*[\d]+)\)/g.exec(e=t))?"rgba("+n[1]+",1)":e:p.hex(t)?function(t){var e=t.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i,(function(t,e,n,r){return e+e+n+n+r+r})),n=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e);return"rgba("+parseInt(n[1],16)+","+parseInt(n[2],16)+","+parseInt(n[3],16)+",1)"}(t):p.hsl(t)?function(t){var e,n,r,i=/hsl\((\d+),\s*([\d.]+)%,\s*([\d.]+)%\)/g.exec(t)||/hsla\((\d+),\s*([\d.]+)%,\s*([\d.]+)%,\s*([\d.]+)\)/g.exec(t),o=parseInt(i[1],10)/360,a=parseInt(i[2],10)/100,s=parseInt(i[3],10)/100,u=i[4]||1;function l(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+6*(e-t)*n:n<.5?e:n<2/3?t+(e-t)*(2/3-n)*6:t}if(0==a)e=n=r=s;else{var c=s<.5?s*(1+a):s+a-s*a,d=2*s-c;e=l(d,c,o+1/3),n=l(d,c,o),r=l(d,c,o-1/3)}return"rgba("+255*e+","+255*n+","+255*r+","+u+")"}(t):void 0;var e,n}(t);if(/\s/g.test(t))return t;var n=k(t),r=n?t.substr(0,t.length-n.length):t;return e?r+e:r}function $(t,e){return Math.sqrt(Math.pow(e.x-t.x,2)+Math.pow(e.y-t.y,2))}function j(t){for(var e,n=t.points,r=0,i=0;i<n.numberOfItems;i++){var o=n.getItem(i);i>0&&(r+=$(e,o)),e=o}return r}function X(t){if(t.getTotalLength)return t.getTotalLength();switch(t.tagName.toLowerCase()){case"circle":return function(t){return 2*Math.PI*D(t,"r")}(t);case"rect":return function(t){return 2*D(t,"width")+2*D(t,"height")}(t);case"line":return function(t){return $({x:D(t,"x1"),y:D(t,"y1")},{x:D(t,"x2"),y:D(t,"y2")})}(t);case"polyline":return j(t);case"polygon":return function(t){var e=t.points;return j(t)+$(e.getItem(e.numberOfItems-1),e.getItem(0))}(t)}}function R(t,e){var n=e||{},r=n.el||function(t){for(var e=t.parentNode;p.svg(e)&&p.svg(e.parentNode);)e=e.parentNode;return e}(t),i=r.getBoundingClientRect(),o=D(r,"viewBox"),a=i.width,s=i.height,u=n.viewBox||(o?o.split(" "):[0,0,a,s]);return{el:r,viewBox:u,x:u[0]/1,y:u[1]/1,w:a,h:s,vW:u[2],vH:u[3]}}function z(t,e,n){function r(n){void 0===n&&(n=0);var r=e+n>=1?e+n:0;return t.el.getPointAtLength(r)}var i=R(t.el,t.svg),o=r(),a=r(-1),s=r(1),u=n?1:i.w/i.vW,l=n?1:i.h/i.vH;switch(t.property){case"x":return(o.x-i.x)*u;case"y":return(o.y-i.y)*l;case"angle":return 180*Math.atan2(s.y-a.y,s.x-a.x)/Math.PI}}function Y(t,e){var n=/[+-]?\d*\.?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?/g,r=V(p.pth(t)?t.totalLength:t,e)+"";return{original:r,numbers:r.match(n)?r.match(n).map(Number):[0],strings:p.str(t)||e?r.split(n):[]}}function W(t){return E(t?C(p.arr(t)?t.map(P):P(t)):[],(function(t,e,n){return n.indexOf(t)===e}))}function _(t){var e=W(t);return e.map((function(t,n){return{target:t,id:n,total:e.length,transforms:{list:F(t)}}}))}function Q(t,e){var n=q(e);if(/^spring/.test(n.easing)&&(n.duration=v(n.easing)),p.arr(t)){var r=t.length;2!==r||p.obj(t[0])?p.fnc(e.duration)||(n.duration=e.duration/r):t={value:t}}var i=p.arr(t)?t:[t];return i.map((function(t,n){var r=p.obj(t)&&!p.pth(t)?t:{value:t};return p.und(r.delay)&&(r.delay=n?0:e.delay),p.und(r.endDelay)&&(r.endDelay=n===i.length-1?e.endDelay:0),r})).map((function(t){return L(t,n)}))}var Z={css:function(t,e,n){return t.style[e]=n},attribute:function(t,e,n){return t.setAttribute(e,n)},object:function(t,e,n){return t[e]=n},transform:function(t,e,n,r,i){if(r.list.set(e,n),e===r.last||i){var o="";r.list.forEach((function(t,e){o+=e+"("+t+") "})),t.style.transform=o}}};function U(t,e){_(t).forEach((function(t){for(var n in e){var r=A(e[n],t),i=t.target,o=k(r),a=N(i,n,o,t),s=G(V(r,o||k(a)),a),u=H(i,n);Z[u](i,n,s,t.transforms,!0)}}))}function J(t,e){return E(C(t.map((function(t){return e.map((function(e){return function(t,e){var n=H(t.target,e.name);if(n){var r=function(t,e){var n;return t.tweens.map((function(r){var i=function(t,e){var n={};for(var r in t){var i=A(t[r],e);p.arr(i)&&1===(i=i.map((function(t){return A(t,e)}))).length&&(i=i[0]),n[r]=i}return n.duration=parseFloat(n.duration),n.delay=parseFloat(n.delay),n}(r,e),o=i.value,a=p.arr(o)?o[1]:o,s=k(a),u=N(e.target,t.name,s,e),l=n?n.to.original:u,c=p.arr(o)?o[0]:l,d=k(c)||k(u),h=s||d;return p.und(a)&&(a=l),i.from=Y(c,h),i.to=Y(G(a,c),h),i.start=n?n.end:0,i.end=i.start+i.delay+i.duration+i.endDelay,i.easing=S(i.easing,i.duration),i.isPath=p.pth(o),i.isPathTargetInsideSVG=i.isPath&&p.svg(e.target),i.isColor=p.col(i.from.original),i.isColor&&(i.round=1),n=i,i}))}(e,t),i=r[r.length-1];return{type:n,property:e.name,animatable:t,tweens:r,duration:i.end,delay:r[0].delay,endDelay:i.endDelay}}}(t,e)}))}))),(function(t){return!p.und(t)}))}function K(t,e){var n=t.length,r=function(t){return t.timelineOffset?t.timelineOffset:0},i={};return i.duration=n?Math.max.apply(Math,t.map((function(t){return r(t)+t.duration}))):e.duration,i.delay=n?Math.min.apply(Math,t.map((function(t){return r(t)+t.delay}))):e.delay,i.endDelay=n?i.duration-Math.max.apply(Math,t.map((function(t){return r(t)+t.duration-t.endDelay}))):e.endDelay,i}var tt=0,et=[],nt=function(){var t;function e(n){for(var r=et.length,i=0;i<r;){var o=et[i];o.paused?(et.splice(i,1),r--):(o.tick(n),i++)}t=i>0?requestAnimationFrame(e):void 0}return"undefined"!=typeof document&&document.addEventListener("visibilitychange",(function(){it.suspendWhenDocumentHidden&&(rt()?t=cancelAnimationFrame(t):(et.forEach((function(t){return t._onDocumentVisibility()})),nt()))})),function(){t||rt()&&it.suspendWhenDocumentHidden||!(et.length>0)||(t=requestAnimationFrame(e))}}();function rt(){return!!document&&document.hidden}function it(t){void 0===t&&(t={});var e,n=0,r=0,i=0,o=0,a=null;function l(t){var e=window.Promise&&new Promise((function(t){return a=t}));return t.finished=e,e}var c=function(t){var e=T(s,t),n=T(u,t),r=function(t,e){var n=[],r=e.keyframes;for(var i in r&&(e=L(function(t){for(var e=E(C(t.map((function(t){return Object.keys(t)}))),(function(t){return p.key(t)})).reduce((function(t,e){return t.indexOf(e)<0&&t.push(e),t}),[]),n={},r=function(r){var i=e[r];n[i]=t.map((function(t){var e={};for(var n in t)p.key(n)?n==i&&(e.value=t[n]):e[n]=t[n];return e}))},i=0;i<e.length;i++)r(i);return n}(r),e)),e)p.key(i)&&n.push({name:i,tweens:Q(e[i],t)});return n}(n,t),i=_(t.targets),o=J(i,r),a=K(o,n),l=tt;return tt++,L(e,{id:l,children:[],animatables:i,animations:o,duration:a.duration,delay:a.delay,endDelay:a.endDelay})}(t);function h(){var t=c.direction;"alternate"!==t&&(c.direction="normal"!==t?"normal":"reverse"),c.reversed=!c.reversed,e.forEach((function(t){return t.reversed=c.reversed}))}function m(t){return c.reversed?c.duration-t:t}function f(){n=0,r=m(c.currentTime)*(1/it.speed)}function v(t,e){e&&e.seek(t-e.timelineOffset)}function y(t){for(var e=0,n=c.animations,r=n.length;e<r;){var i=n[e],o=i.animatable,a=i.tweens,s=a.length-1,u=a[s];s&&(u=E(a,(function(e){return t<e.end}))[0]||u);for(var l=d(t-u.start-u.delay,0,u.duration)/u.duration,h=isNaN(l)?1:u.easing(l),m=u.to.strings,p=u.round,f=[],v=u.to.numbers.length,y=void 0,g=0;g<v;g++){var b=void 0,x=u.to.numbers[g],w=u.from.numbers[g]||0;b=u.isPath?z(u.value,h*x,u.isPathTargetInsideSVG):w+h*(x-w),p&&(u.isColor&&g>2||(b=Math.round(b*p)/p)),f.push(b)}var S=m.length;if(S){y=m[0];for(var M=0;M<S;M++){m[M];var C=m[M+1],P=f[M];isNaN(P)||(y+=C?P+C:P+" ")}}else y=f[0];Z[i.type](o.target,i.property,y,o.transforms),i.currentValue=y,e++}}function g(t){c[t]&&!c.passThrough&&c[t](c)}function b(t){var s=c.duration,u=c.delay,p=s-c.endDelay,f=m(t);c.progress=d(f/s*100,0,100),c.reversePlayback=f<c.currentTime,e&&function(t){if(c.reversePlayback)for(var n=o;n--;)v(t,e[n]);else for(var r=0;r<o;r++)v(t,e[r])}(f),!c.began&&c.currentTime>0&&(c.began=!0,g("begin")),!c.loopBegan&&c.currentTime>0&&(c.loopBegan=!0,g("loopBegin")),f<=u&&0!==c.currentTime&&y(0),(f>=p&&c.currentTime!==s||!s)&&y(s),f>u&&f<p?(c.changeBegan||(c.changeBegan=!0,c.changeCompleted=!1,g("changeBegin")),g("change"),y(f)):c.changeBegan&&(c.changeCompleted=!0,c.changeBegan=!1,g("changeComplete")),c.currentTime=d(f,0,s),c.began&&g("update"),t>=s&&(r=0,c.remaining&&!0!==c.remaining&&c.remaining--,c.remaining?(n=i,g("loopComplete"),c.loopBegan=!1,"alternate"===c.direction&&h()):(c.paused=!0,c.completed||(c.completed=!0,g("loopComplete"),g("complete"),!c.passThrough&&"Promise"in window&&(a(),l(c)))))}return l(c),c.reset=function(){var t=c.direction;c.passThrough=!1,c.currentTime=0,c.progress=0,c.paused=!0,c.began=!1,c.loopBegan=!1,c.changeBegan=!1,c.completed=!1,c.changeCompleted=!1,c.reversePlayback=!1,c.reversed="reverse"===t,c.remaining=c.loop,e=c.children;for(var n=o=e.length;n--;)c.children[n].reset();(c.reversed&&!0!==c.loop||"alternate"===t&&1===c.loop)&&c.remaining++,y(c.reversed?c.duration:0)},c._onDocumentVisibility=f,c.set=function(t,e){return U(t,e),c},c.tick=function(t){i=t,n||(n=i),b((i+(r-n))*it.speed)},c.seek=function(t){b(m(t))},c.pause=function(){c.paused=!0,f()},c.play=function(){c.paused&&(c.completed&&c.reset(),c.paused=!1,et.push(c),f(),nt())},c.reverse=function(){h(),c.completed=!c.reversed,f()},c.restart=function(){c.reset(),c.play()},c.remove=function(t){at(W(t),c)},c.reset(),c.autoplay&&c.play(),c}function ot(t,e){for(var n=e.length;n--;)I(t,e[n].animatable.target)&&e.splice(n,1)}function at(t,e){var n=e.animations,r=e.children;ot(t,n);for(var i=r.length;i--;){var o=r[i],a=o.animations;ot(t,a),a.length||o.children.length||r.splice(i,1)}n.length||r.length||e.pause()}it.version="3.2.1",it.speed=1,it.suspendWhenDocumentHidden=!0,it.running=et,it.remove=function(t){for(var e=W(t),n=et.length;n--;)at(e,et[n])},it.get=N,it.set=U,it.convertPx=O,it.path=function(t,e){var n=p.str(t)?M(t)[0]:t,r=e||100;return function(t){return{property:t,el:n,svg:R(n),totalLength:X(n)*(r/100)}}},it.setDashoffset=function(t){var e=X(t);return t.setAttribute("stroke-dasharray",e),e},it.stagger=function(t,e){void 0===e&&(e={});var n=e.direction||"normal",r=e.easing?S(e.easing):null,i=e.grid,o=e.axis,a=e.from||0,s="first"===a,u="center"===a,l="last"===a,c=p.arr(t),d=c?parseFloat(t[0]):parseFloat(t),h=c?parseFloat(t[1]):0,m=k(c?t[1]:t)||0,f=e.start||0+(c?d:0),v=[],y=0;return function(t,e,p){if(s&&(a=0),u&&(a=(p-1)/2),l&&(a=p-1),!v.length){for(var g=0;g<p;g++){if(i){var b=u?(i[0]-1)/2:a%i[0],x=u?(i[1]-1)/2:Math.floor(a/i[0]),w=b-g%i[0],S=x-Math.floor(g/i[0]),M=Math.sqrt(w*w+S*S);"x"===o&&(M=-w),"y"===o&&(M=-S),v.push(M)}else v.push(Math.abs(a-g));y=Math.max.apply(Math,v)}r&&(v=v.map((function(t){return r(t/y)*y}))),"reverse"===n&&(v=v.map((function(t){return o?t<0?-1*t:-t:Math.abs(y-t)})))}return f+(c?(h-d)/y:d)*(Math.round(100*v[e])/100)+m}},it.timeline=function(t){void 0===t&&(t={});var e=it(t);return e.duration=0,e.add=function(n,r){var i=et.indexOf(e),o=e.children;function a(t){t.passThrough=!0}i>-1&&et.splice(i,1);for(var s=0;s<o.length;s++)a(o[s]);var l=L(n,T(u,t));l.targets=l.targets||t.targets;var c=e.duration;l.autoplay=!1,l.direction=e.direction,l.timelineOffset=p.und(r)?c:G(r,c),a(e),e.seek(l.timelineOffset);var d=it(l);a(d),o.push(d);var h=K(o,t);return e.delay=h.delay,e.endDelay=h.endDelay,e.duration=h.duration,e.seek(0),e.reset(),e.autoplay&&e.play(),e},e},it.easing=S,it.penner=w,it.random=function(t,e){return Math.floor(Math.random()*(e-t+1))+t};const st=it,ut=(document.querySelector(".play-button"),document.querySelector("#small-video"),document.querySelector("#main-video"),st({targets:".play-button .morph",points:[{value:"0 0, 10 8, 17 14, 10 20, 0 28"},{value:"0 0, 11 6.5, 23 14, 11 21.5, 0 28"},{value:"0 0, 28 0, 28 14, 28 28, 0 28"}],easing:"easeOutQuad",autoplay:!1,duration:300,complete:function(t){t.reverse()}}));class lt{constructor(){this.subscribers=new Map}fadeIn(t){this.#t(t),t.style.opacity=0,t.offsetHeight,t.style.transition="opacity 1s linear",t.style.opacity=1}fadeOut(t){this.#t(t),t.style.opacity=1,t.offsetHeight,t.style.transition="opacity 1s linear",t.style.opacity=0}rollUp(t){this.#t(t),t.style.clipPath="rect(0 100% 100% 0)",t.offsetHeight,t.style.transition="clip-path 1s linear",t.style.clipPath="rect(0 100% 100% 100%)"}#t(t){t.style="",t.offsetHeight}awaitAnimationEnd(t,e){this.subscribers.set(t,e),this.#e(),t.addEventListener("transitionend",e)}#e(){this.subscribers.forEach(((t,e)=>{e.removeEventListener("transitionend",t)}))}}n(999),n(64);const ct=new class{constructor(){this.state="paused",this.mainPlayer=document.querySelector("#main-video"),this.smallPlayer=document.querySelector("#small-video"),this.playButton=document.querySelector(".play-button"),this.animator=new lt,this.isValidInput&&(this.smallPlayerContainer=this.smallPlayer.closest("div"),this.#n())}get isValidInput(){return this.mainPlayer&&this.smallPlayer&&this.playButton}#n(){this.playButton&&(this.playButton.onclick=this.#r.bind(this)),this.smallPlayer&&(this.smallPlayer.onclick=this.#i.bind(this))}#r(){"paused"===this.state?this.activatePlayState():this.activateDefaultState()}#i(){"paused"===this.state&&this.#r()}activatePlayState(){"playing"!==this.state&&(this.state="playing",this.#o(),this.playButton.classList.add("playing"),ut.play())}activateDefaultState(){"paused"!==this.state&&(this.state="paused",this.#a(),this.playButton.classList.remove("playing"),ut.play())}#o(){this.animator.rollUp(this.smallPlayerContainer),this.animator.fadeIn(this.mainPlayer),this.mainPlayer.play(),this.mainPlayer.volume=1,this.mainPlayer.currentTime=0,this.animator.awaitAnimationEnd(this.smallPlayerContainer,(()=>{this.smallPlayer.pause()}))}#a(){this.animator.fadeOut(this.mainPlayer),this.animator.fadeIn(this.smallPlayerContainer),this.smallPlayer.play(),this.mainPlayer.volume=0,this.animator.awaitAnimationEnd(this.mainPlayer,(()=>{this.mainPlayer.pause()}))}},dt=document.querySelectorAll("video");var ht;function mt(t){let e=Math.floor(document.documentElement.clientHeight);return function(t,{ms:e}){let n;return function(...r){clearTimeout(n),n=setTimeout((()=>t(r)),e)}}((()=>{const n=Math.floor(document.documentElement.clientHeight),r=Math.abs(e-n);e=n,r>0||t()}),{ms:100})}function pt(){try{const t=document.documentElement.clientHeight/100;document.body.style.setProperty("--vh",`${t}px`),document.body.style.setProperty("--100vh",100*t+"px")}catch(t){e("setVh",t)}}ht=()=>{o(dt,{onAppear:t=>{try{if(t.matches("#main-video"))return;t.matches("[autoplay]")&&t.play()}catch(t){e("onAppear",t)}},onDisappear:t=>{try{t.matches("#main-video")&&(ct.activateDefaultState(),ct.mainPlayer.currentTime=0),t.pause()}catch(t){e("onDisappear",t)}},options:{threshold:.5}})},setTimeout((()=>{ht()}),200),pt(),window.onresize=mt(pt);class ft{constructor({interval:t=1e3}={}){this.container=null,this.slides=null,this.timerId=null,this.interval=t,this.currentSlide=null,this.state="paused"}initSlider(t){if(t instanceof HTMLElement)return this.container=t,this.slides=[...this.container.children]||[],this.currentSlide=t.querySelector(".active")||this.slides[0],this}get canRun(){return this?.slides.length>0&&"playing"!==this.state}run(){this.canRun&&(this.state="playing",this.timerId=setInterval((()=>{this.currentSlide.classList.remove("active");let t=this.currentSlide.nextElementSibling;t?(t.classList.add("active"),this.currentSlide=t):(t=this.slides[0],t.classList.add("active"),this.currentSlide=t)}),this.interval),e("slider.run()"))}stop(){this.timerId&&(clearInterval(this.timerId),this.state="stopped")}pause(){clearInterval(this.timerId),this.state="paused"}}class vt{constructor(t,{cssGap:e}){this.groupsContainer=document.createElement("div"),this.initialGroup=null,this.root=t,this.originChildren=this.saveOriginChildren(),this.root.classList.add("tape-screen"),this.groupsContainer.style.setProperty("--gap",e)}saveOriginChildren(){return[...this.root.children].map((t=>t.cloneNode(!0)))}init(){this.initialGroup=this.#s(),this.groupsContainer.className="positioned-tape",this.groupsContainer.dataset.x=0,this.groupsContainer.innerHTML="",this.groupsContainer.append(this.initialGroup),this.root.append(this.groupsContainer)}#s(){const t=this.originChildren,e=document.createElement("div");return e.className="group",this.root.innerHTML="",this.root.append(e),e.append(...t),e}fitScreen(){const t=this.root.offsetWidth,e=this.groupsContainer.lastElementChild;if(n=e.lastElementChild.offsetLeft,t-n>0){const t=e.cloneNode(!0);this.groupsContainer.append(t),this.fitScreen()}else this.#u();var n}#u(){const t=document.createElement("div");t.className="super-group";const e=this.groupsContainer.children;t.append(...e);for(let e=1;e<=3;e++)this.groupsContainer.append(t.cloneNode(!0))}}class yt{#l=1;#c=!0;#d=0;constructor({container:t,stepSize:e=1.35}){this.#l=e,this.direction="left",this.groupsContainer=t}get positionX(){return this.#d}set positionX(t){this.#d=t,this.groupsContainer.style.setProperty("--x",`${t.toFixed(2)}px`)}#h(){this.positionX-=this.#l}#m(){this.positionX+=this.#l}#p(){this.#c||("left"===this.direction?this.#h():this.#m(),requestAnimationFrame(this.#p.bind(this)))}start(){this.#c&&(this.#c=!1,this.#p())}stop(){return this.#c=!0,this}toggleDirection(){const t=this.direction;return this.direction="left"===t?"right":"left",this}}class gt{constructor(t,e){this.observer=new IntersectionObserver(t,e)}observe(t){this.observer.observe(t)}unobserve(t){this.observer.unobserve(t)}}const{log:bt}=console;class xt{#f;#v;#y;#g;#b;constructor({rootElem:t,cssGap:e=0,speed:n=1.3}){this.isValidRoot=t instanceof Element,this.isValidRoot&&(e=Number.parseFloat(e),this.#f=t,this.#v=new vt(this.#f,{cssGap:e}),this.#v.init(),this.#v.fitScreen(),this.#y=new yt({container:this.#v.groupsContainer,stepSize:n}),this.#g=new gt(this.#x.bind(this),{root:this.#f,threshold:0}),this.#w(),this.#b={cssGap:e},window.addEventListener("resize",mt(this.handleResize.bind(this))))}handleResize(){this.#S(),this.#y.stop(),this.#v.init(),this.#v.fitScreen(),this.#w(),setTimeout((()=>{this.#y.start()}),500)}start(){this.isValidRoot&&this.#y.start()}stop(){this.isValidRoot&&this.#y.stop()}toggleDirection(){this.isValidRoot&&this.#y.toggleDirection()}#x(t,e){t.forEach((t=>{if(!1===t.isIntersecting){const e=t.boundingClientRect.width;"left"===this.#y.direction&&(this.#y.positionX=-1*e),"right"===this.#y.direction&&(this.#y.positionX=this.#y.positionX-(e+this.#b.cssGap))}}))}#w(){const t=this.#v.groupsContainer.children[1];this.#g.observe(t)}#S(){const t=this.#v.groupsContainer.children[1];this.#g.unobserve(t)}}const wt=document.querySelector(".header-tape");let St;wt&&(wt.style.opacity=0,setTimeout((()=>{wt.style.transition="opacity 500ms",wt.style.opacity=1}),500),St=new xt({rootElem:wt,cssGap:"0",speed:1.3}));const Mt={duration:0,maxDelay:1500,timerId:null,completeCounter:0,isComplete(t){return this.completeCounter===t},awaitLoading(t,{onProgress:n,onComplete:r}){let i=t.length;e("correct length",i>0);const o=[];if(t.length<1)return r();n(),e("onProgress","handled");const a=[...t].map((t=>async function(t){return(await fetch(t,{method:"HEAD"})).ok}(t.src)));this.timerId=setInterval((()=>{if(this.duration+=100,this.isComplete(i)&&this.duration>this.maxDelay)return e("loaded",!0),this.breakTimer(),void r()}),100),Promise.allSettled(a).then((n=>{n.forEach(((e,n)=>{e.value&&o.push(t[n])})),i=o.length,e("settled length",o.length),o.forEach((t=>{this.completeCounter++}))}))},breakTimer(){clearInterval(this.timerId)}},Et=document.querySelector("#preloader"),Ct=new ft({interval:150}).initSlider(document.querySelector(".preloader-slider"));e("slides",Ct.slides.length),document.querySelector(".js-await-media");const Pt=document.querySelectorAll(".js-await-media video"),It=document.querySelector(".s2");e("videos",Pt.length),Et&&(e("awaiting"),Mt.awaitLoading(Pt,{onProgress:()=>{r(Ct.container,"300ms"),Ct.run(),e("onProgress","run")},onComplete:()=>{if(Ct.stop(),i(Et,"1000ms"),e("onComplete","run"),setTimeout((()=>{Et.remove(),e("onComplete","hide overlay"),St?.start()}),1e3),It){const t=It.offsetHeight;It.style.marginTop=t/-1.6+"px",It.style.transform="translateY(50%)",It.offsetHeight,It.style.transition="transform 1000ms",It.style.transform="translateY(0)"}}}));const qt={init(){return this.previewContainer=document.querySelector(".s3-fixed-container"),this},insertImages(t){const e=[...t].map((t=>t.cloneNode(!0)));for(let t of e){const e=t.dataset.targetSquare-1;this.previewContainer.firstElementChild.children[e].replaceChildren(t)}return e},sortImages:t=>t.sort(((t,e)=>t.dataset.targetSquare>e.dataset.targetSquare)),showMedia(t){const e=this.insertImages(t),n=this.sortImages(e);let i=0;n.forEach((t=>{i+=150,setTimeout((()=>{r(t,"200ms ease-in")}),i)}))},hideAllMedia(){const t=this.previewContainer.querySelectorAll("img, video");for(let e of t)i(e)},showContainer(){this.previewContainer.classList.add("visible")},hideContainer(){this.previewContainer.classList.remove("visible")}},Tt={textElements:document.querySelectorAll(".s3-text-box"),visibleElemIndex:null,getElemIndex(t){const e=[...this.textElements].findIndex((e=>e===t));return-1===e?null:e},updateCurrentIndex(t){const e=this.getElemIndex(t);this.visibleElemIndex=e},isLastTextGone(t){const e=this.textElements.length-1;return this.getElemIndex(t)===e&&this.visibleElemIndex===e},isFirstTextGone(t){return 0===this.getElemIndex(t)&&0===this.visibleElemIndex},isFinalElem(t){return this.isFirstTextGone(t)||this.isLastTextGone(t)}};(()=>{const t=document.querySelector(".s3");t&&t.insertAdjacentHTML("beforebegin",'\n<div class="s3-fixed-container">\n  <div class="s3-preview-grid">\n    <div class="grid-item"></div>\n    <div class="grid-item"></div>\n    <div class="grid-item"></div>\n    <div class="grid-item"></div>\n    <div class="grid-item"></div>\n    <div class="grid-item"></div>\n  </div>\n</div>')})(),new class{constructor(){this.textManager=Tt,this.animator=qt.init(),this.animator.previewContainer&&this.observe()}observe(){o(this.textManager.textElements,{onAppear:t=>{this.textManager.updateCurrentIndex(t);const e=t.querySelectorAll("[data-target-square]");this.updatePreview(e)},onDisappear:t=>{this.textManager.isFinalElem(t)&&this.breakPreview()},options:{threshold:.5}})}updatePreview(t){this.animator.showContainer(),this.animator.hideAllMedia(),this.animator.showMedia(t)}breakPreview(){this.textManager.visibleElemIndex=null,this.animator.hideContainer(),this.animator.hideAllMedia()}},o(document.querySelectorAll(".s4-images-box img, .s4-images-box video"),{onAppear:t=>{r(t,`300ms ${a({from:100,to:700})}ms ease-in`)},onDisappear:t=>i(t,"300ms ease-out")});const Lt=document.querySelector("#s5-video"),kt=document.querySelector(".s5 .title");function At(t){if(!t)return;const e=(new Date).toLocaleDateString("en-GB",{month:"2-digit",year:"2-digit"}).replace(/\//g,"—");t.textContent=e}Lt&&i(Lt,"0ms"),function(t,{onMove:e,onEnter:n,onOut:r}){t instanceof HTMLElement&&(t.onmouseover=({target:t})=>{n(),t.onmousemove=({offsetX:t,offsetY:n})=>{e({x:t,y:n})}},t.onmouseout=r)}(kt,{onEnter:()=>{r(Lt,"500ms ease"),Lt.play()},onMove:({x:t,y:e})=>{const n=Lt.offsetHeight;!function(t,{x:e,y:n}){t&&(t.style.setProperty("--x",`${e}px`),t.style.setProperty("--y",`${n}px`))}(Lt,{x:t-=10,y:e=e-n-10})},onOut:()=>{i(Lt,"100ms ease"),Lt.pause()}}),At(document.querySelector(".js-date"));const Dt=(new ft).initSlider(document.querySelector(".animated-button"));Dt?.canRun&&(Dt.run(),Dt.container.onmouseenter=Dt.pause.bind(Dt),Dt.container.onmouseleave=Dt.run.bind(Dt),Dt.container.onclick=Dt.stop.bind(Dt));const Ot=document.querySelector(".js-scroll-down");Ot&&Ot.addEventListener("click",(()=>{[...document.querySelectorAll("body > .hidden")].forEach((t=>t.classList.remove("hidden"))),function(){const t=document.querySelector(".archive-tape").offsetHeight/2;document.body.style.transition="transform 500ms",document.body.style.transform=`translateY(${-t}px)`,setTimeout((()=>{document.body.style.removeProperty("transition"),document.body.style.removeProperty("transform"),window.scrollBy(0,t)}),500)}()}),{once:!0}),document.querySelector(".archive-tape")&&new xt({rootElem:document.querySelector(".archive-tape"),cssGap:"0",speed:1.3}).start(),o(document.querySelectorAll(".archive-item img, .archive-item video"),{onAppear:t=>{r(t,`300ms ease-in ${a({from:100,to:700})}ms`),t.closest("a")?.matches(".visited")&&(t.style.opacity=.8)},onDisappear:t=>{i(t,"300ms ease-out")},options:{threshold:.5}});const Bt=document.querySelectorAll(".archive-item img, .archive-item video");[...Bt].forEach((t=>{t.onmouseenter=()=>{[...Bt].forEach((t=>{t.style.transition="transform 200ms ease, opacity 300ms",t.closest("a").matches(".visited")?t.style.opacity=.2:t.style.opacity=.8})),function(t){t.style.transition="all 200ms ease",t.style.transform="scale(1.05)",t.style.opacity=1}(t)}})),[...Bt].forEach((t=>{t.onmouseleave=()=>{[...Bt].forEach((t=>{t.style.transition="transform 200ms 0ms, opacity 300ms",t.style.transform="scale(1)",t.closest("a").matches(".visited")?t.style.opacity=.2:t.style.opacity=1}))}})),n(706);const Ht=document.querySelector(".ps1-running-tape");Ht&&new xt({rootElem:Ht,cssGap:"0",speed:1.3}).start(),At(document.querySelector(".js-date")),window.onerror=t=>{e("error",t)},e("logging starts")})()})();