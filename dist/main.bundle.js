(()=>{var t={64:()=>{const t=document.querySelector(".play-button"),e=document.querySelector("#small-video");function n(){window.scrollTo({top:0,behavior:"smooth"})}t&&e&&[t,e].forEach((t=>{t.addEventListener("click",n)}))},999:()=>{({rootElem:document.querySelector("#small-video"),button:document.querySelector(".parallax-button"),calcPosition({x:t,y:e}){const n=this.rootElem.offsetWidth/2,r=e-this.rootElem.offsetHeight/2;return{buttonX:(.05*(t-n)).toFixed(1),buttonY:(.05*r).toFixed(1)}},updatePosition({x:t,y:e}){const{buttonX:n,buttonY:r}=this.calcPosition({x:t,y:e});this.button.style.setProperty("--x",`${n}px`),this.button.style.setProperty("--y",`${r}px`)},watchCursor(){this.rootElem&&this.button&&(this.rootElem.onmouseenter=({target:t})=>{this.button.style.opacity=1,t.onmousemove=({offsetX:t,offsetY:e})=>{this.button.matches(".paused")||this.updatePosition({x:t,y:e})}},this.rootElem.onmouseleave=()=>{this.button.matches(".playing")||(this.button.style.opacity=0)})}}).watchCursor()},706:()=>{[...document.querySelectorAll(".s8 .archive-item a")].forEach((t=>{t.onclick=()=>t.classList.add("visited")}))}},e={};function n(r){var i=e[r];if(void 0!==i)return i.exports;var o=e[r]={exports:{}};return t[r](o,o.exports,n),o.exports}(()=>{"use strict";function t(t,e="300ms ease-in 0ms"){t.style.opacity=0,t.offsetHeight,t.style.transition=`opacity ${e}`,t.style.opacity=1}function e(t,e){t.style.transition=`opacity ${e}`,t.style.opacity=0}function r(t,{onAppear:e,onDisappear:n,options:r}){if(t.length||(t=[t]),![...t].every((t=>t instanceof HTMLElement)))return console.log("No elements to observe");const i=new IntersectionObserver((t=>{t.forEach((t=>{t.isIntersecting?e(t.target):n(t.target)}))}),r);return t.forEach((t=>i.observe(t))),i}function i({from:t,to:e,precise:n=2}){const r=t+Math.random()*(e-t);return Number(r.toFixed(n))}r(document.querySelectorAll(".js-auto-fade"),{onAppear:e=>t(e,"900ms 0ms ease-in"),onDisappear:t=>e(t,"300ms 0ms ease-out"),options:{threshold:.3}});var o={update:null,begin:null,loopBegin:null,changeBegin:null,change:null,changeComplete:null,loopComplete:null,complete:null,loop:1,direction:"normal",autoplay:!0,timelineOffset:0},a={duration:1e3,delay:0,endDelay:0,easing:"easeOutElastic(1, .5)",round:0},s=["translateX","translateY","translateZ","rotate","rotateX","rotateY","rotateZ","scale","scaleX","scaleY","scaleZ","skew","skewX","skewY","perspective","matrix","matrix3d"],u={CSS:{},springs:{}};function l(t,e,n){return Math.min(Math.max(t,e),n)}function c(t,e){return t.indexOf(e)>-1}function d(t,e){return t.apply(null,e)}var h={arr:function(t){return Array.isArray(t)},obj:function(t){return c(Object.prototype.toString.call(t),"Object")},pth:function(t){return h.obj(t)&&t.hasOwnProperty("totalLength")},svg:function(t){return t instanceof SVGElement},inp:function(t){return t instanceof HTMLInputElement},dom:function(t){return t.nodeType||h.svg(t)},str:function(t){return"string"==typeof t},fnc:function(t){return"function"==typeof t},und:function(t){return void 0===t},nil:function(t){return h.und(t)||null===t},hex:function(t){return/(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(t)},rgb:function(t){return/^rgb/.test(t)},hsl:function(t){return/^hsl/.test(t)},col:function(t){return h.hex(t)||h.rgb(t)||h.hsl(t)},key:function(t){return!o.hasOwnProperty(t)&&!a.hasOwnProperty(t)&&"targets"!==t&&"keyframes"!==t}};function m(t){var e=/\(([^)]+)\)/.exec(t);return e?e[1].split(",").map((function(t){return parseFloat(t)})):[]}function p(t,e){var n=m(t),r=l(h.und(n[0])?1:n[0],.1,100),i=l(h.und(n[1])?100:n[1],.1,100),o=l(h.und(n[2])?10:n[2],.1,100),a=l(h.und(n[3])?0:n[3],.1,100),s=Math.sqrt(i/r),c=o/(2*Math.sqrt(i*r)),d=c<1?s*Math.sqrt(1-c*c):0,p=c<1?(c*s-a)/d:-a+s;function f(t){var n=e?e*t/1e3:t;return n=c<1?Math.exp(-n*c*s)*(1*Math.cos(d*n)+p*Math.sin(d*n)):(1+p*n)*Math.exp(-n*s),0===t||1===t?t:1-n}return e?f:function(){var e=u.springs[t];if(e)return e;for(var n=1/6,r=0,i=0;;)if(1===f(r+=n)){if(++i>=16)break}else i=0;var o=r*n*1e3;return u.springs[t]=o,o}}function f(t){return void 0===t&&(t=10),function(e){return Math.ceil(l(e,1e-6,1)*t)*(1/t)}}var v,y,g=function(){var t=.1;function e(t,e){return 1-3*e+3*t}function n(t,e){return 3*e-6*t}function r(t){return 3*t}function i(t,i,o){return((e(i,o)*t+n(i,o))*t+r(i))*t}function o(t,i,o){return 3*e(i,o)*t*t+2*n(i,o)*t+r(i)}return function(e,n,r,a){if(0<=e&&e<=1&&0<=r&&r<=1){var s=new Float32Array(11);if(e!==n||r!==a)for(var u=0;u<11;++u)s[u]=i(u*t,e,r);return function(u){return e===n&&r===a||0===u||1===u?u:i(function(n){for(var a=0,u=1;10!==u&&s[u]<=n;++u)a+=t;--u;var l=a+(n-s[u])/(s[u+1]-s[u])*t,c=o(l,e,r);return c>=.001?function(t,e,n,r){for(var a=0;a<4;++a){var s=o(e,n,r);if(0===s)return e;e-=(i(e,n,r)-t)/s}return e}(n,l,e,r):0===c?l:function(t,e,n,r,o){var a,s,u=0;do{(a=i(s=e+(n-e)/2,r,o)-t)>0?n=s:e=s}while(Math.abs(a)>1e-7&&++u<10);return s}(n,a,a+t,e,r)}(u),n,a)}}}}(),b=(v={linear:function(){return function(t){return t}}},y={Sine:function(){return function(t){return 1-Math.cos(t*Math.PI/2)}},Expo:function(){return function(t){return t?Math.pow(2,10*t-10):0}},Circ:function(){return function(t){return 1-Math.sqrt(1-t*t)}},Back:function(){return function(t){return t*t*(3*t-2)}},Bounce:function(){return function(t){for(var e,n=4;t<((e=Math.pow(2,--n))-1)/11;);return 1/Math.pow(4,3-n)-7.5625*Math.pow((3*e-2)/22-t,2)}},Elastic:function(t,e){void 0===t&&(t=1),void 0===e&&(e=.5);var n=l(t,1,10),r=l(e,.1,2);return function(t){return 0===t||1===t?t:-n*Math.pow(2,10*(t-1))*Math.sin((t-1-r/(2*Math.PI)*Math.asin(1/n))*(2*Math.PI)/r)}}},["Quad","Cubic","Quart","Quint"].forEach((function(t,e){y[t]=function(){return function(t){return Math.pow(t,e+2)}}})),Object.keys(y).forEach((function(t){var e=y[t];v["easeIn"+t]=e,v["easeOut"+t]=function(t,n){return function(r){return 1-e(t,n)(1-r)}},v["easeInOut"+t]=function(t,n){return function(r){return r<.5?e(t,n)(2*r)/2:1-e(t,n)(-2*r+2)/2}},v["easeOutIn"+t]=function(t,n){return function(r){return r<.5?(1-e(t,n)(1-2*r))/2:(e(t,n)(2*r-1)+1)/2}}})),v);function x(t,e){if(h.fnc(t))return t;var n=t.split("(")[0],r=b[n],i=m(t);switch(n){case"spring":return p(t,e);case"cubicBezier":return d(g,i);case"steps":return d(f,i);default:return d(r,i)}}function w(t){try{return document.querySelectorAll(t)}catch(t){return}}function S(t,e){for(var n=t.length,r=arguments.length>=2?arguments[1]:void 0,i=[],o=0;o<n;o++)if(o in t){var a=t[o];e.call(r,a,o,t)&&i.push(a)}return i}function M(t){return t.reduce((function(t,e){return t.concat(h.arr(e)?M(e):e)}),[])}function C(t){return h.arr(t)?t:(h.str(t)&&(t=w(t)||t),t instanceof NodeList||t instanceof HTMLCollection?[].slice.call(t):[t])}function E(t,e){return t.some((function(t){return t===e}))}function P(t){var e={};for(var n in t)e[n]=t[n];return e}function I(t,e){var n=P(t);for(var r in t)n[r]=e.hasOwnProperty(r)?e[r]:t[r];return n}function q(t,e){var n=P(t);for(var r in e)n[r]=h.und(t[r])?e[r]:t[r];return n}function T(t){var e=/[+-]?\d*\.?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?(%|px|pt|em|rem|in|cm|mm|ex|ch|pc|vw|vh|vmin|vmax|deg|rad|turn)?$/.exec(t);if(e)return e[1]}function L(t,e){return h.fnc(t)?t(e.target,e.id,e.total):t}function k(t,e){return t.getAttribute(e)}function A(t,e,n){if(E([n,"deg","rad","turn"],T(e)))return e;var r=u.CSS[e+n];if(!h.und(r))return r;var i=document.createElement(t.tagName),o=t.parentNode&&t.parentNode!==document?t.parentNode:document.body;o.appendChild(i),i.style.position="absolute",i.style.width=100+n;var a=100/i.offsetWidth;o.removeChild(i);var s=a*parseFloat(e);return u.CSS[e+n]=s,s}function D(t,e,n){if(e in t.style){var r=e.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase(),i=t.style[e]||getComputedStyle(t).getPropertyValue(r)||"0";return n?A(t,i,n):i}}function O(t,e){return h.dom(t)&&!h.inp(t)&&(!h.nil(k(t,e))||h.svg(t)&&t[e])?"attribute":h.dom(t)&&E(s,e)?"transform":h.dom(t)&&"transform"!==e&&D(t,e)?"css":null!=t[e]?"object":void 0}function B(t){if(h.dom(t)){for(var e,n=t.style.transform||"",r=/(\w+)\(([^)]*)\)/g,i=new Map;e=r.exec(n);)i.set(e[1],e[2]);return i}}function H(t,e,n,r){switch(O(t,e)){case"transform":return function(t,e,n,r){var i=c(e,"scale")?1:0+function(t){return c(t,"translate")||"perspective"===t?"px":c(t,"rotate")||c(t,"skew")?"deg":void 0}(e),o=B(t).get(e)||i;return n&&(n.transforms.list.set(e,o),n.transforms.last=e),r?A(t,o,r):o}(t,e,r,n);case"css":return D(t,e,n);case"attribute":return k(t,e);default:return t[e]||0}}function F(t,e){var n=/^(\*=|\+=|-=)/.exec(t);if(!n)return t;var r=T(t)||0,i=parseFloat(e),o=parseFloat(t.replace(n[0],""));switch(n[0][0]){case"+":return i+o+r;case"-":return i-o+r;case"*":return i*o+r}}function N(t,e){if(h.col(t))return function(t){return h.rgb(t)?(n=/rgb\((\d+,\s*[\d]+,\s*[\d]+)\)/g.exec(e=t))?"rgba("+n[1]+",1)":e:h.hex(t)?function(t){var e=t.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i,(function(t,e,n,r){return e+e+n+n+r+r})),n=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e);return"rgba("+parseInt(n[1],16)+","+parseInt(n[2],16)+","+parseInt(n[3],16)+",1)"}(t):h.hsl(t)?function(t){var e,n,r,i=/hsl\((\d+),\s*([\d.]+)%,\s*([\d.]+)%\)/g.exec(t)||/hsla\((\d+),\s*([\d.]+)%,\s*([\d.]+)%,\s*([\d.]+)\)/g.exec(t),o=parseInt(i[1],10)/360,a=parseInt(i[2],10)/100,s=parseInt(i[3],10)/100,u=i[4]||1;function l(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+6*(e-t)*n:n<.5?e:n<2/3?t+(e-t)*(2/3-n)*6:t}if(0==a)e=n=r=s;else{var c=s<.5?s*(1+a):s+a-s*a,d=2*s-c;e=l(d,c,o+1/3),n=l(d,c,o),r=l(d,c,o-1/3)}return"rgba("+255*e+","+255*n+","+255*r+","+u+")"}(t):void 0;var e,n}(t);if(/\s/g.test(t))return t;var n=T(t),r=n?t.substr(0,t.length-n.length):t;return e?r+e:r}function G(t,e){return Math.sqrt(Math.pow(e.x-t.x,2)+Math.pow(e.y-t.y,2))}function $(t){for(var e,n=t.points,r=0,i=0;i<n.numberOfItems;i++){var o=n.getItem(i);i>0&&(r+=G(e,o)),e=o}return r}function V(t){if(t.getTotalLength)return t.getTotalLength();switch(t.tagName.toLowerCase()){case"circle":return function(t){return 2*Math.PI*k(t,"r")}(t);case"rect":return function(t){return 2*k(t,"width")+2*k(t,"height")}(t);case"line":return function(t){return G({x:k(t,"x1"),y:k(t,"y1")},{x:k(t,"x2"),y:k(t,"y2")})}(t);case"polyline":return $(t);case"polygon":return function(t){var e=t.points;return $(t)+G(e.getItem(e.numberOfItems-1),e.getItem(0))}(t)}}function j(t,e){var n=e||{},r=n.el||function(t){for(var e=t.parentNode;h.svg(e)&&h.svg(e.parentNode);)e=e.parentNode;return e}(t),i=r.getBoundingClientRect(),o=k(r,"viewBox"),a=i.width,s=i.height,u=n.viewBox||(o?o.split(" "):[0,0,a,s]);return{el:r,viewBox:u,x:u[0]/1,y:u[1]/1,w:a,h:s,vW:u[2],vH:u[3]}}function X(t,e,n){function r(n){void 0===n&&(n=0);var r=e+n>=1?e+n:0;return t.el.getPointAtLength(r)}var i=j(t.el,t.svg),o=r(),a=r(-1),s=r(1),u=n?1:i.w/i.vW,l=n?1:i.h/i.vH;switch(t.property){case"x":return(o.x-i.x)*u;case"y":return(o.y-i.y)*l;case"angle":return 180*Math.atan2(s.y-a.y,s.x-a.x)/Math.PI}}function R(t,e){var n=/[+-]?\d*\.?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?/g,r=N(h.pth(t)?t.totalLength:t,e)+"";return{original:r,numbers:r.match(n)?r.match(n).map(Number):[0],strings:h.str(t)||e?r.split(n):[]}}function z(t){return S(t?M(h.arr(t)?t.map(C):C(t)):[],(function(t,e,n){return n.indexOf(t)===e}))}function Y(t){var e=z(t);return e.map((function(t,n){return{target:t,id:n,total:e.length,transforms:{list:B(t)}}}))}function W(t,e){var n=P(e);if(/^spring/.test(n.easing)&&(n.duration=p(n.easing)),h.arr(t)){var r=t.length;2!==r||h.obj(t[0])?h.fnc(e.duration)||(n.duration=e.duration/r):t={value:t}}var i=h.arr(t)?t:[t];return i.map((function(t,n){var r=h.obj(t)&&!h.pth(t)?t:{value:t};return h.und(r.delay)&&(r.delay=n?0:e.delay),h.und(r.endDelay)&&(r.endDelay=n===i.length-1?e.endDelay:0),r})).map((function(t){return q(t,n)}))}var _={css:function(t,e,n){return t.style[e]=n},attribute:function(t,e,n){return t.setAttribute(e,n)},object:function(t,e,n){return t[e]=n},transform:function(t,e,n,r,i){if(r.list.set(e,n),e===r.last||i){var o="";r.list.forEach((function(t,e){o+=e+"("+t+") "})),t.style.transform=o}}};function Q(t,e){Y(t).forEach((function(t){for(var n in e){var r=L(e[n],t),i=t.target,o=T(r),a=H(i,n,o,t),s=F(N(r,o||T(a)),a),u=O(i,n);_[u](i,n,s,t.transforms,!0)}}))}function Z(t,e){return S(M(t.map((function(t){return e.map((function(e){return function(t,e){var n=O(t.target,e.name);if(n){var r=function(t,e){var n;return t.tweens.map((function(r){var i=function(t,e){var n={};for(var r in t){var i=L(t[r],e);h.arr(i)&&1===(i=i.map((function(t){return L(t,e)}))).length&&(i=i[0]),n[r]=i}return n.duration=parseFloat(n.duration),n.delay=parseFloat(n.delay),n}(r,e),o=i.value,a=h.arr(o)?o[1]:o,s=T(a),u=H(e.target,t.name,s,e),l=n?n.to.original:u,c=h.arr(o)?o[0]:l,d=T(c)||T(u),m=s||d;return h.und(a)&&(a=l),i.from=R(c,m),i.to=R(F(a,c),m),i.start=n?n.end:0,i.end=i.start+i.delay+i.duration+i.endDelay,i.easing=x(i.easing,i.duration),i.isPath=h.pth(o),i.isPathTargetInsideSVG=i.isPath&&h.svg(e.target),i.isColor=h.col(i.from.original),i.isColor&&(i.round=1),n=i,i}))}(e,t),i=r[r.length-1];return{type:n,property:e.name,animatable:t,tweens:r,duration:i.end,delay:r[0].delay,endDelay:i.endDelay}}}(t,e)}))}))),(function(t){return!h.und(t)}))}function U(t,e){var n=t.length,r=function(t){return t.timelineOffset?t.timelineOffset:0},i={};return i.duration=n?Math.max.apply(Math,t.map((function(t){return r(t)+t.duration}))):e.duration,i.delay=n?Math.min.apply(Math,t.map((function(t){return r(t)+t.delay}))):e.delay,i.endDelay=n?i.duration-Math.max.apply(Math,t.map((function(t){return r(t)+t.duration-t.endDelay}))):e.endDelay,i}var J=0,K=[],tt=function(){var t;function e(n){for(var r=K.length,i=0;i<r;){var o=K[i];o.paused?(K.splice(i,1),r--):(o.tick(n),i++)}t=i>0?requestAnimationFrame(e):void 0}return"undefined"!=typeof document&&document.addEventListener("visibilitychange",(function(){nt.suspendWhenDocumentHidden&&(et()?t=cancelAnimationFrame(t):(K.forEach((function(t){return t._onDocumentVisibility()})),tt()))})),function(){t||et()&&nt.suspendWhenDocumentHidden||!(K.length>0)||(t=requestAnimationFrame(e))}}();function et(){return!!document&&document.hidden}function nt(t){void 0===t&&(t={});var e,n=0,r=0,i=0,s=0,u=null;function c(t){var e=window.Promise&&new Promise((function(t){return u=t}));return t.finished=e,e}var d=function(t){var e=I(o,t),n=I(a,t),r=function(t,e){var n=[],r=e.keyframes;for(var i in r&&(e=q(function(t){for(var e=S(M(t.map((function(t){return Object.keys(t)}))),(function(t){return h.key(t)})).reduce((function(t,e){return t.indexOf(e)<0&&t.push(e),t}),[]),n={},r=function(r){var i=e[r];n[i]=t.map((function(t){var e={};for(var n in t)h.key(n)?n==i&&(e.value=t[n]):e[n]=t[n];return e}))},i=0;i<e.length;i++)r(i);return n}(r),e)),e)h.key(i)&&n.push({name:i,tweens:W(e[i],t)});return n}(n,t),i=Y(t.targets),s=Z(i,r),u=U(s,n),l=J;return J++,q(e,{id:l,children:[],animatables:i,animations:s,duration:u.duration,delay:u.delay,endDelay:u.endDelay})}(t);function m(){var t=d.direction;"alternate"!==t&&(d.direction="normal"!==t?"normal":"reverse"),d.reversed=!d.reversed,e.forEach((function(t){return t.reversed=d.reversed}))}function p(t){return d.reversed?d.duration-t:t}function f(){n=0,r=p(d.currentTime)*(1/nt.speed)}function v(t,e){e&&e.seek(t-e.timelineOffset)}function y(t){for(var e=0,n=d.animations,r=n.length;e<r;){var i=n[e],o=i.animatable,a=i.tweens,s=a.length-1,u=a[s];s&&(u=S(a,(function(e){return t<e.end}))[0]||u);for(var c=l(t-u.start-u.delay,0,u.duration)/u.duration,h=isNaN(c)?1:u.easing(c),m=u.to.strings,p=u.round,f=[],v=u.to.numbers.length,y=void 0,g=0;g<v;g++){var b=void 0,x=u.to.numbers[g],w=u.from.numbers[g]||0;b=u.isPath?X(u.value,h*x,u.isPathTargetInsideSVG):w+h*(x-w),p&&(u.isColor&&g>2||(b=Math.round(b*p)/p)),f.push(b)}var M=m.length;if(M){y=m[0];for(var C=0;C<M;C++){m[C];var E=m[C+1],P=f[C];isNaN(P)||(y+=E?P+E:P+" ")}}else y=f[0];_[i.type](o.target,i.property,y,o.transforms),i.currentValue=y,e++}}function g(t){d[t]&&!d.passThrough&&d[t](d)}function b(t){var o=d.duration,a=d.delay,h=o-d.endDelay,f=p(t);d.progress=l(f/o*100,0,100),d.reversePlayback=f<d.currentTime,e&&function(t){if(d.reversePlayback)for(var n=s;n--;)v(t,e[n]);else for(var r=0;r<s;r++)v(t,e[r])}(f),!d.began&&d.currentTime>0&&(d.began=!0,g("begin")),!d.loopBegan&&d.currentTime>0&&(d.loopBegan=!0,g("loopBegin")),f<=a&&0!==d.currentTime&&y(0),(f>=h&&d.currentTime!==o||!o)&&y(o),f>a&&f<h?(d.changeBegan||(d.changeBegan=!0,d.changeCompleted=!1,g("changeBegin")),g("change"),y(f)):d.changeBegan&&(d.changeCompleted=!0,d.changeBegan=!1,g("changeComplete")),d.currentTime=l(f,0,o),d.began&&g("update"),t>=o&&(r=0,d.remaining&&!0!==d.remaining&&d.remaining--,d.remaining?(n=i,g("loopComplete"),d.loopBegan=!1,"alternate"===d.direction&&m()):(d.paused=!0,d.completed||(d.completed=!0,g("loopComplete"),g("complete"),!d.passThrough&&"Promise"in window&&(u(),c(d)))))}return c(d),d.reset=function(){var t=d.direction;d.passThrough=!1,d.currentTime=0,d.progress=0,d.paused=!0,d.began=!1,d.loopBegan=!1,d.changeBegan=!1,d.completed=!1,d.changeCompleted=!1,d.reversePlayback=!1,d.reversed="reverse"===t,d.remaining=d.loop,e=d.children;for(var n=s=e.length;n--;)d.children[n].reset();(d.reversed&&!0!==d.loop||"alternate"===t&&1===d.loop)&&d.remaining++,y(d.reversed?d.duration:0)},d._onDocumentVisibility=f,d.set=function(t,e){return Q(t,e),d},d.tick=function(t){i=t,n||(n=i),b((i+(r-n))*nt.speed)},d.seek=function(t){b(p(t))},d.pause=function(){d.paused=!0,f()},d.play=function(){d.paused&&(d.completed&&d.reset(),d.paused=!1,K.push(d),f(),tt())},d.reverse=function(){m(),d.completed=!d.reversed,f()},d.restart=function(){d.reset(),d.play()},d.remove=function(t){it(z(t),d)},d.reset(),d.autoplay&&d.play(),d}function rt(t,e){for(var n=e.length;n--;)E(t,e[n].animatable.target)&&e.splice(n,1)}function it(t,e){var n=e.animations,r=e.children;rt(t,n);for(var i=r.length;i--;){var o=r[i],a=o.animations;rt(t,a),a.length||o.children.length||r.splice(i,1)}n.length||r.length||e.pause()}nt.version="3.2.1",nt.speed=1,nt.suspendWhenDocumentHidden=!0,nt.running=K,nt.remove=function(t){for(var e=z(t),n=K.length;n--;)it(e,K[n])},nt.get=H,nt.set=Q,nt.convertPx=A,nt.path=function(t,e){var n=h.str(t)?w(t)[0]:t,r=e||100;return function(t){return{property:t,el:n,svg:j(n),totalLength:V(n)*(r/100)}}},nt.setDashoffset=function(t){var e=V(t);return t.setAttribute("stroke-dasharray",e),e},nt.stagger=function(t,e){void 0===e&&(e={});var n=e.direction||"normal",r=e.easing?x(e.easing):null,i=e.grid,o=e.axis,a=e.from||0,s="first"===a,u="center"===a,l="last"===a,c=h.arr(t),d=c?parseFloat(t[0]):parseFloat(t),m=c?parseFloat(t[1]):0,p=T(c?t[1]:t)||0,f=e.start||0+(c?d:0),v=[],y=0;return function(t,e,h){if(s&&(a=0),u&&(a=(h-1)/2),l&&(a=h-1),!v.length){for(var g=0;g<h;g++){if(i){var b=u?(i[0]-1)/2:a%i[0],x=u?(i[1]-1)/2:Math.floor(a/i[0]),w=b-g%i[0],S=x-Math.floor(g/i[0]),M=Math.sqrt(w*w+S*S);"x"===o&&(M=-w),"y"===o&&(M=-S),v.push(M)}else v.push(Math.abs(a-g));y=Math.max.apply(Math,v)}r&&(v=v.map((function(t){return r(t/y)*y}))),"reverse"===n&&(v=v.map((function(t){return o?t<0?-1*t:-t:Math.abs(y-t)})))}return f+(c?(m-d)/y:d)*(Math.round(100*v[e])/100)+p}},nt.timeline=function(t){void 0===t&&(t={});var e=nt(t);return e.duration=0,e.add=function(n,r){var i=K.indexOf(e),o=e.children;function s(t){t.passThrough=!0}i>-1&&K.splice(i,1);for(var u=0;u<o.length;u++)s(o[u]);var l=q(n,I(a,t));l.targets=l.targets||t.targets;var c=e.duration;l.autoplay=!1,l.direction=e.direction,l.timelineOffset=h.und(r)?c:F(r,c),s(e),e.seek(l.timelineOffset);var d=nt(l);s(d),o.push(d);var m=U(o,t);return e.delay=m.delay,e.endDelay=m.endDelay,e.duration=m.duration,e.seek(0),e.reset(),e.autoplay&&e.play(),e},e},nt.easing=x,nt.penner=b,nt.random=function(t,e){return Math.floor(Math.random()*(e-t+1))+t};const ot=nt,at=(document.querySelector(".play-button"),document.querySelector("#small-video"),document.querySelector("#main-video"),ot({targets:".play-button .morph",points:[{value:"0 0, 10 8, 17 14, 10 20, 0 28"},{value:"0 0, 11 6.5, 23 14, 11 21.5, 0 28"},{value:"0 0, 28 0, 28 14, 28 28, 0 28"}],easing:"easeOutQuad",autoplay:!1,duration:300,complete:function(t){t.reverse()}}));class st{constructor(){this.subscribers=new Map}fadeIn(t){this.#t(t),t.style.opacity=0,t.offsetHeight,t.style.transition="opacity 1s linear",t.style.opacity=1}fadeOut(t){this.#t(t),t.style.opacity=1,t.offsetHeight,t.style.transition="opacity 1s linear",t.style.opacity=0}rollUp(t){this.#t(t),t.style.clipPath="rect(0 100% 100% 0)",t.offsetHeight,t.style.transition="clip-path 1s linear",t.style.clipPath="rect(0 100% 100% 100%)"}#t(t){t.style="",t.offsetHeight}awaitAnimationEnd(t,e){this.subscribers.set(t,e),this.#e(),t.addEventListener("transitionend",e)}#e(){this.subscribers.forEach(((t,e)=>{e.removeEventListener("transitionend",t)}))}}n(999),n(64);const ut=new class{constructor(){this.state="paused",this.mainPlayer=document.querySelector("#main-video"),this.smallPlayer=document.querySelector("#small-video"),this.playButton=document.querySelector(".play-button"),this.animator=new st,this.isValidInput&&(this.smallPlayerContainer=this.smallPlayer.closest("div"),this.#n())}get isValidInput(){return this.mainPlayer&&this.smallPlayer&&this.playButton}#n(){this.playButton&&(this.playButton.onclick=this.#r.bind(this)),this.smallPlayer&&(this.smallPlayer.onclick=this.#i.bind(this))}#r(){"paused"===this.state?this.activatePlayState():this.activateDefaultState()}#i(){"paused"===this.state&&this.#r()}activatePlayState(){"playing"!==this.state&&(this.state="playing",this.#o(),this.playButton.classList.add("playing"),at.play())}activateDefaultState(){"paused"!==this.state&&(this.state="paused",this.#a(),this.playButton.classList.remove("playing"),at.play())}#o(){this.animator.rollUp(this.smallPlayerContainer),this.animator.fadeIn(this.mainPlayer),this.mainPlayer.play(),this.mainPlayer.volume=1,this.mainPlayer.currentTime=0,this.animator.awaitAnimationEnd(this.smallPlayerContainer,(()=>{this.smallPlayer.pause()}))}#a(){this.animator.fadeOut(this.mainPlayer),this.animator.fadeIn(this.smallPlayerContainer),this.smallPlayer.play(),this.mainPlayer.volume=0,this.animator.awaitAnimationEnd(this.mainPlayer,(()=>{this.mainPlayer.pause()}))}},lt=document.querySelectorAll("video");var ct;function dt(t){let e=Math.floor(window.innerHeight);return function(t,{ms:e}){let n;return function(...r){clearTimeout(n),n=setTimeout((()=>t(r)),e)}}((()=>{const n=Math.floor(window.innerHeight),r=Math.abs(e-n);e=n,r>0||t()}),{ms:100})}function ht(){const t=window.innerHeight/100;document.body.style.setProperty("--vh",`${t}px`),document.body.style.setProperty("--100vh",100*t+"px")}ct=()=>{r(lt,{onAppear:t=>{t.matches("#main-video")||t.matches("[autoplay]")&&t.play()},onDisappear:t=>{t.matches("#main-video")&&(ut.activateDefaultState(),ut.mainPlayer.currentTime=0),t.pause()},options:{threshold:.5}})},setTimeout((()=>{ct()}),200),ht(),window.onresize=dt(ht);const mt=document.createElement("div");function pt(t,e=""){const n=`${t}: ${e}`;mt.insertAdjacentHTML("beforeEnd",`<p>${n}</p>`),console.log(n)}mt.className="log-screen",document.body.prepend(mt),console.clear(),setTimeout((()=>{mt.classList.add("finished")}),3e3);class ft{constructor({interval:t=1e3}={}){this.container=null,this.slides=null,this.timerId=null,this.interval=t,this.currentSlide=null,this.state="paused"}initSlider(t){if(t instanceof HTMLElement)return this.container=t,this.slides=[...this.container.children]||[],this.currentSlide=t.querySelector(".active")||this.slides[0],this}get canRun(){return this?.slides.length>0&&"playing"!==this.state}run(){this.canRun&&(this.state="playing",this.timerId=setInterval((()=>{this.currentSlide.classList.remove("active");let t=this.currentSlide.nextElementSibling;t?(t.classList.add("active"),this.currentSlide=t):(t=this.slides[0],t.classList.add("active"),this.currentSlide=t)}),this.interval),pt("slider.run()"))}stop(){this.timerId&&(clearInterval(this.timerId),this.state="stopped")}pause(){clearInterval(this.timerId),this.state="paused"}}class vt{constructor(t,{cssGap:e}){this.groupsContainer=document.createElement("div"),this.initialGroup=null,this.root=t,this.originChildren=this.saveOriginChildren(),this.root.classList.add("tape-screen"),this.groupsContainer.style.setProperty("--gap",e)}saveOriginChildren(){return[...this.root.children].map((t=>t.cloneNode(!0)))}init(){this.initialGroup=this.#s(),this.groupsContainer.className="positioned-tape",this.groupsContainer.dataset.x=0,this.groupsContainer.innerHTML="",this.groupsContainer.append(this.initialGroup),this.root.append(this.groupsContainer)}#s(){const t=this.originChildren,e=document.createElement("div");return e.className="group",this.root.innerHTML="",this.root.append(e),e.append(...t),e}fitScreen(){const t=this.root.offsetWidth,e=this.groupsContainer.lastElementChild;if(n=e.lastElementChild.offsetLeft,t-n>0){const t=e.cloneNode(!0);this.groupsContainer.append(t),this.fitScreen()}else this.#u();var n}#u(){const t=document.createElement("div");t.className="super-group";const e=this.groupsContainer.children;t.append(...e);for(let e=1;e<=3;e++)this.groupsContainer.append(t.cloneNode(!0))}}class yt{#l=1;#c=!0;#d=0;constructor({container:t,stepSize:e=1.35}){this.#l=e,this.direction="left",this.groupsContainer=t}get positionX(){return this.#d}set positionX(t){this.#d=t,this.groupsContainer.style.setProperty("--x",`${t.toFixed(2)}px`)}#h(){this.positionX-=this.#l}#m(){this.positionX+=this.#l}#p(){this.#c||("left"===this.direction?this.#h():this.#m(),requestAnimationFrame(this.#p.bind(this)))}start(){this.#c&&(this.#c=!1,this.#p())}stop(){return this.#c=!0,this}toggleDirection(){const t=this.direction;return this.direction="left"===t?"right":"left",this}}class gt{constructor(t,e){this.observer=new IntersectionObserver(t,e)}observe(t){this.observer.observe(t)}unobserve(t){this.observer.unobserve(t)}}const{log:bt}=console;class xt{#f;#v;#y;#g;#b;constructor({rootElem:t,cssGap:e=0,speed:n=1.3}){this.isValidRoot=t instanceof Element,this.isValidRoot&&(e=Number.parseFloat(e),this.#f=t,this.#v=new vt(this.#f,{cssGap:e}),this.#v.init(),this.#v.fitScreen(),this.#y=new yt({container:this.#v.groupsContainer,stepSize:n}),this.#g=new gt(this.#x.bind(this),{root:this.#f,threshold:0}),this.#w(),this.#b={cssGap:e},window.addEventListener("resize",dt(this.handleResize.bind(this))))}handleResize(){this.#S(),this.#y.stop(),this.#v.init(),this.#v.fitScreen(),this.#w(),setTimeout((()=>{this.#y.start()}),500)}start(){this.isValidRoot&&this.#y.start()}stop(){this.isValidRoot&&this.#y.stop()}toggleDirection(){this.isValidRoot&&this.#y.toggleDirection()}#x(t,e){t.forEach((t=>{if(!1===t.isIntersecting){const e=t.boundingClientRect.width;"left"===this.#y.direction&&(this.#y.positionX=-1*e),"right"===this.#y.direction&&(this.#y.positionX=this.#y.positionX-(e+this.#b.cssGap))}}))}#w(){const t=this.#v.groupsContainer.children[1];this.#g.observe(t)}#S(){const t=this.#v.groupsContainer.children[1];this.#g.unobserve(t)}}const wt=document.querySelector(".header-tape");let St;wt&&(wt.style.opacity=0,setTimeout((()=>{wt.style.transition="opacity 500ms",wt.style.opacity=1}),500),St=new xt({rootElem:wt,cssGap:"0",speed:1.3}));const Mt={duration:0,maxDelay:1500,timerId:null,completeCounter:0,isComplete(t){return this.completeCounter===t},awaitLoading(t,{onProgress:e,onComplete:n}){let r=t.length;pt("correct length",r>0);const i=[];if(t.length<1)return n();e(),pt("onProgress","handled");const o=[...t].map((t=>async function(t){return(await fetch(t,{method:"HEAD"})).ok}(t.src)));this.timerId=setInterval((()=>{if(this.duration+=100,this.isComplete(r)&&this.duration>this.maxDelay)return pt("loaded",!0),this.breakTimer(),void n()}),100),Promise.allSettled(o).then((e=>{e.forEach(((e,n)=>{e.value&&i.push(t[n])})),r=i.length,pt("settled length",i.length),i.forEach((t=>{this.completeCounter++}))}))},breakTimer(){clearInterval(this.timerId)}},Ct=document.querySelector("#preloader"),Et=new ft({interval:150}).initSlider(document.querySelector(".preloader-slider"));pt("slides",Et.slides.length),document.querySelector(".js-await-media");const Pt=document.querySelectorAll(".js-await-media video"),It=document.querySelector(".s2");pt("videos",Pt.length),Ct&&(pt("awaiting"),Mt.awaitLoading(Pt,{onProgress:()=>{t(Et.container,"300ms"),Et.run(),pt("onProgress","run")},onComplete:()=>{if(Et.stop(),e(Ct,"1000ms"),pt("onComplete","run"),setTimeout((()=>{Ct.remove(),pt("onComplete","hide overlay"),St.start()}),1e3),It){const t=It.offsetHeight;It.style.marginTop=t/-1.6+"px",It.style.transform="translateY(50%)",It.offsetHeight,It.style.transition="transform 1000ms",It.style.transform="translateY(0)"}}}));const qt={init(){return this.previewContainer=document.querySelector(".s3-fixed-container"),this},insertImages(t){const e=[...t].map((t=>t.cloneNode(!0)));for(let t of e){const e=t.dataset.targetSquare-1;this.previewContainer.firstElementChild.children[e].replaceChildren(t)}return e},sortImages:t=>t.sort(((t,e)=>t.dataset.targetSquare>e.dataset.targetSquare)),showMedia(e){const n=this.insertImages(e),r=this.sortImages(n);let i=0;r.forEach((e=>{i+=150,setTimeout((()=>{t(e,"200ms ease-in")}),i)}))},hideAllMedia(){const t=this.previewContainer.querySelectorAll("img, video");for(let n of t)e(n)},showContainer(){this.previewContainer.classList.add("visible")},hideContainer(){this.previewContainer.classList.remove("visible")}},Tt={textElements:document.querySelectorAll(".s3-text-box"),visibleElemIndex:null,getElemIndex(t){const e=[...this.textElements].findIndex((e=>e===t));return-1===e?null:e},updateCurrentIndex(t){const e=this.getElemIndex(t);this.visibleElemIndex=e},isLastTextGone(t){const e=this.textElements.length-1;return this.getElemIndex(t)===e&&this.visibleElemIndex===e},isFirstTextGone(t){return 0===this.getElemIndex(t)&&0===this.visibleElemIndex},isFinalElem(t){return this.isFirstTextGone(t)||this.isLastTextGone(t)}};(()=>{const t=document.querySelector(".s3");t&&t.insertAdjacentHTML("beforebegin",'\n<div class="s3-fixed-container">\n  <div class="s3-preview-grid">\n    <div class="grid-item"></div>\n    <div class="grid-item"></div>\n    <div class="grid-item"></div>\n    <div class="grid-item"></div>\n    <div class="grid-item"></div>\n    <div class="grid-item"></div>\n  </div>\n</div>')})(),new class{constructor(){this.textManager=Tt,this.animator=qt.init(),this.animator.previewContainer&&this.observe()}observe(){r(this.textManager.textElements,{onAppear:t=>{this.textManager.updateCurrentIndex(t);const e=t.querySelectorAll("[data-target-square]");this.updatePreview(e)},onDisappear:t=>{this.textManager.isFinalElem(t)&&this.breakPreview()},options:{threshold:.5}})}updatePreview(t){this.animator.showContainer(),this.animator.hideAllMedia(),this.animator.showMedia(t)}breakPreview(){this.textManager.visibleElemIndex=null,this.animator.hideContainer(),this.animator.hideAllMedia()}},r(document.querySelectorAll(".s4-images-box img, .s4-images-box video"),{onAppear:e=>{t(e,`300ms ${i({from:100,to:700})}ms ease-in`)},onDisappear:t=>e(t,"300ms ease-out")});const Lt=document.querySelector("#s5-video"),kt=document.querySelector(".s5 .title");function At(t){if(!t)return;const e=(new Date).toLocaleDateString("en-GB",{month:"2-digit",year:"2-digit"}).replace(/\//g,"—");t.textContent=e}Lt&&e(Lt,"0ms"),function(t,{onMove:e,onEnter:n,onOut:r}){t instanceof HTMLElement&&(t.onmouseover=({target:t})=>{n(),t.onmousemove=({offsetX:t,offsetY:n})=>{e({x:t,y:n})}},t.onmouseout=r)}(kt,{onEnter:()=>{t(Lt,"500ms ease"),Lt.play()},onMove:({x:t,y:e})=>{const n=Lt.offsetHeight;!function(t,{x:e,y:n}){t&&(t.style.setProperty("--x",`${e}px`),t.style.setProperty("--y",`${n}px`))}(Lt,{x:t-=10,y:e=e-n-10})},onOut:()=>{e(Lt,"100ms ease"),Lt.pause()}}),At(document.querySelector(".js-date"));const Dt=(new ft).initSlider(document.querySelector(".animated-button"));Dt?.canRun&&(Dt.run(),Dt.container.onmouseenter=Dt.pause.bind(Dt),Dt.container.onmouseleave=Dt.run.bind(Dt),Dt.container.onclick=Dt.stop.bind(Dt));const Ot=document.querySelector(".js-scroll-down");Ot&&Ot.addEventListener("click",(()=>{[...document.querySelectorAll("body > .hidden")].forEach((t=>t.classList.remove("hidden"))),function(){const t=document.querySelector(".archive-tape").offsetHeight/2;document.body.style.transition="transform 500ms",document.body.style.transform=`translateY(${-t}px)`,setTimeout((()=>{document.body.style.removeProperty("transition"),document.body.style.removeProperty("transform"),window.scrollBy(0,t)}),500)}()}),{once:!0}),document.querySelector(".archive-tape")&&new xt({rootElem:document.querySelector(".archive-tape"),cssGap:"0",speed:1.3}).start(),r(document.querySelectorAll(".archive-item img, .archive-item video"),{onAppear:e=>{t(e,`300ms ease-in ${i({from:100,to:700})}ms`),e.closest("a")?.matches(".visited")&&(e.style.opacity=.8)},onDisappear:t=>{e(t,"300ms ease-out")},options:{threshold:.5}});const Bt=document.querySelectorAll(".archive-item img, .archive-item video");[...Bt].forEach((t=>{t.onmouseenter=()=>{[...Bt].forEach((t=>{t.style.transition="transform 200ms ease, opacity 300ms",t.closest("a").matches(".visited")?t.style.opacity=.2:t.style.opacity=.8})),function(t){t.style.transition="all 200ms ease",t.style.transform="scale(1.05)",t.style.opacity=1}(t)}})),[...Bt].forEach((t=>{t.onmouseleave=()=>{[...Bt].forEach((t=>{t.style.transition="transform 200ms 0ms, opacity 300ms",t.style.transform="scale(1)",t.closest("a").matches(".visited")?t.style.opacity=.2:t.style.opacity=1}))}})),n(706);const Ht=document.querySelector(".ps1-running-tape");Ht&&new xt({rootElem:Ht,cssGap:"0",speed:1.3}).start(),At(document.querySelector(".js-date")),window.onerror=t=>{pt("error",t)}})()})();