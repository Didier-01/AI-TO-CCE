(function(){const R=document.createElement("link").relList;if(R&&R.supports&&R.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))_(i);new MutationObserver(i=>{for(const y of i)if(y.type==="childList")for(const a of y.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&_(a)}).observe(document,{childList:!0,subtree:!0});function H(i){const y={};return i.integrity&&(y.integrity=i.integrity),i.referrerPolicy&&(y.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?y.credentials="include":i.crossOrigin==="anonymous"?y.credentials="omit":y.credentials="same-origin",y}function _(i){if(i.ep)return;i.ep=!0;const y=H(i);fetch(i.href,y)}})();function me(w){return w&&w.__esModule&&Object.prototype.hasOwnProperty.call(w,"default")?w.default:w}var B={exports:{}},ve=B.exports,re;function he(){return re||(re=1,function(w,R){(function(H,_){w.exports=_()})(typeof self<"u"?self:ve,()=>(()=>{var H={75:function(a){(function(){var p,d,N,h,b,E;typeof performance<"u"&&performance!==null&&performance.now?a.exports=function(){return performance.now()}:typeof process<"u"&&process!==null&&process.hrtime?(a.exports=function(){return(p()-b)/1e6},d=process.hrtime,h=(p=function(){var f;return 1e9*(f=d())[0]+f[1]})(),E=1e9*process.uptime(),b=h-E):Date.now?(a.exports=function(){return Date.now()-N},N=Date.now()):(a.exports=function(){return new Date().getTime()-N},N=new Date().getTime())}).call(this)},4087:(a,p,d)=>{for(var N=d(75),h=typeof window>"u"?d.g:window,b=["moz","webkit"],E="AnimationFrame",f=h["request"+E],L=h["cancel"+E]||h["cancelRequest"+E],M=0;!f&&M<b.length;M++)f=h[b[M]+"Request"+E],L=h[b[M]+"Cancel"+E]||h[b[M]+"CancelRequest"+E];if(!f||!L){var F=0,P=0,S=[];f=function(g){if(S.length===0){var A=N(),Q=Math.max(0,16.666666666666668-(A-F));F=Q+A,setTimeout(function(){var O=S.slice(0);S.length=0;for(var D=0;D<O.length;D++)if(!O[D].cancelled)try{O[D].callback(F)}catch(j){setTimeout(function(){throw j},0)}},Math.round(Q))}return S.push({handle:++P,callback:g,cancelled:!1}),P},L=function(g){for(var A=0;A<S.length;A++)S[A].handle===g&&(S[A].cancelled=!0)}}a.exports=function(g){return f.call(h,g)},a.exports.cancel=function(){L.apply(h,arguments)},a.exports.polyfill=function(g){g||(g=h),g.requestAnimationFrame=f,g.cancelAnimationFrame=L}}},_={};function i(a){var p=_[a];if(p!==void 0)return p.exports;var d=_[a]={exports:{}};return H[a].call(d.exports,d,d.exports,i),d.exports}i.n=a=>{var p=a&&a.__esModule?()=>a.default:()=>a;return i.d(p,{a:p}),p},i.d=(a,p)=>{for(var d in p)i.o(p,d)&&!i.o(a,d)&&Object.defineProperty(a,d,{enumerable:!0,get:p[d]})},i.g=function(){if(typeof globalThis=="object")return globalThis;try{return this||new Function("return this")()}catch{if(typeof window=="object")return window}}(),i.o=(a,p)=>Object.prototype.hasOwnProperty.call(a,p);var y={};return(()=>{i.d(y,{default:()=>se});var a=i(4087),p=i.n(a);const d=function(o){return new RegExp(/<[a-z][\s\S]*>/i).test(o)},N=function(o,t){return Math.floor(Math.random()*(t-o+1))+o};var h="TYPE_CHARACTER",b="REMOVE_CHARACTER",E="REMOVE_ALL",f="REMOVE_LAST_VISIBLE_NODE",L="PAUSE_FOR",M="CALL_FUNCTION",F="ADD_HTML_TAG_ELEMENT",P="CHANGE_DELETE_SPEED",S="CHANGE_DELAY",g="CHANGE_CURSOR",A="PASTE_STRING",Q="HTML_TAG";function O(o){return O=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},O(o)}function D(o,t){var s=Object.keys(o);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(o);t&&(r=r.filter(function(C){return Object.getOwnPropertyDescriptor(o,C).enumerable})),s.push.apply(s,r)}return s}function j(o){for(var t=1;t<arguments.length;t++){var s=arguments[t]!=null?arguments[t]:{};t%2?D(Object(s),!0).forEach(function(r){c(o,r,s[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(o,Object.getOwnPropertyDescriptors(s)):D(Object(s)).forEach(function(r){Object.defineProperty(o,r,Object.getOwnPropertyDescriptor(s,r))})}return o}function x(o){return function(t){if(Array.isArray(t))return V(t)}(o)||function(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}(o)||function(t,s){if(t){if(typeof t=="string")return V(t,s);var r=Object.prototype.toString.call(t).slice(8,-1);return r==="Object"&&t.constructor&&(r=t.constructor.name),r==="Map"||r==="Set"?Array.from(t):r==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?V(t,s):void 0}}(o)||function(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}()}function V(o,t){(t==null||t>o.length)&&(t=o.length);for(var s=0,r=new Array(t);s<t;s++)r[s]=o[s];return r}function oe(o,t){for(var s=0;s<t.length;s++){var r=t[s];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(o,$(r.key),r)}}function c(o,t,s){return(t=$(t))in o?Object.defineProperty(o,t,{value:s,enumerable:!0,configurable:!0,writable:!0}):o[t]=s,o}function $(o){var t=function(s,r){if(O(s)!=="object"||s===null)return s;var C=s[Symbol.toPrimitive];if(C!==void 0){var e=C.call(s,"string");if(O(e)!=="object")return e;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(s)}(o);return O(t)==="symbol"?t:String(t)}const se=function(){function o(r,C){var e=this;if(function(n,u){if(!(n instanceof u))throw new TypeError("Cannot call a class as a function")}(this,o),c(this,"state",{cursorAnimation:null,lastFrameTime:null,pauseUntil:null,eventQueue:[],eventLoop:null,eventLoopPaused:!1,reverseCalledEvents:[],calledEvents:[],visibleNodes:[],initialOptions:null,elements:{container:null,wrapper:document.createElement("span"),cursor:document.createElement("span")}}),c(this,"options",{strings:null,cursor:"|",delay:"natural",pauseFor:1500,deleteSpeed:"natural",loop:!1,autoStart:!1,devMode:!1,skipAddStyles:!1,wrapperClassName:"Typewriter__wrapper",cursorClassName:"Typewriter__cursor",stringSplitter:null,onCreateTextNode:null,onRemoveNode:null}),c(this,"setupWrapperElement",function(){e.state.elements.container&&(e.state.elements.wrapper.className=e.options.wrapperClassName,e.state.elements.cursor.className=e.options.cursorClassName,e.state.elements.cursor.innerHTML=e.options.cursor,e.state.elements.container.innerHTML="",e.state.elements.container.appendChild(e.state.elements.wrapper),e.state.elements.container.appendChild(e.state.elements.cursor))}),c(this,"start",function(){return e.state.eventLoopPaused=!1,e.runEventLoop(),e}),c(this,"pause",function(){return e.state.eventLoopPaused=!0,e}),c(this,"stop",function(){return e.state.eventLoop&&((0,a.cancel)(e.state.eventLoop),e.state.eventLoop=null),e}),c(this,"pauseFor",function(n){return e.addEventToQueue(L,{ms:n}),e}),c(this,"typeOutAllStrings",function(){return typeof e.options.strings=="string"?(e.typeString(e.options.strings).pauseFor(e.options.pauseFor),e):(e.options.strings.forEach(function(n){e.typeString(n).pauseFor(e.options.pauseFor).deleteAll(e.options.deleteSpeed)}),e)}),c(this,"typeString",function(n){var u=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(d(n))return e.typeOutHTMLString(n,u);if(n){var m=(e.options||{}).stringSplitter,v=typeof m=="function"?m(n):n.split("");e.typeCharacters(v,u)}return e}),c(this,"pasteString",function(n){var u=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;return d(n)?e.typeOutHTMLString(n,u,!0):(n&&e.addEventToQueue(A,{character:n,node:u}),e)}),c(this,"typeOutHTMLString",function(n){var u=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null,m=arguments.length>2?arguments[2]:void 0,v=function(I){var q=document.createElement("div");return q.innerHTML=I,q.childNodes}(n);if(v.length>0)for(var l=0;l<v.length;l++){var T=v[l],k=T.innerHTML;T&&T.nodeType!==3?(T.innerHTML="",e.addEventToQueue(F,{node:T,parentNode:u}),m?e.pasteString(k,T):e.typeString(k,T)):T.textContent&&(m?e.pasteString(T.textContent,u):e.typeString(T.textContent,u))}return e}),c(this,"deleteAll",function(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"natural";return e.addEventToQueue(E,{speed:n}),e}),c(this,"changeDeleteSpeed",function(n){if(!n)throw new Error("Must provide new delete speed");return e.addEventToQueue(P,{speed:n}),e}),c(this,"changeDelay",function(n){if(!n)throw new Error("Must provide new delay");return e.addEventToQueue(S,{delay:n}),e}),c(this,"changeCursor",function(n){if(!n)throw new Error("Must provide new cursor");return e.addEventToQueue(g,{cursor:n}),e}),c(this,"deleteChars",function(n){if(!n)throw new Error("Must provide amount of characters to delete");for(var u=0;u<n;u++)e.addEventToQueue(b);return e}),c(this,"callFunction",function(n,u){if(!n||typeof n!="function")throw new Error("Callback must be a function");return e.addEventToQueue(M,{cb:n,thisArg:u}),e}),c(this,"typeCharacters",function(n){var u=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!n||!Array.isArray(n))throw new Error("Characters must be an array");return n.forEach(function(m){e.addEventToQueue(h,{character:m,node:u})}),e}),c(this,"removeCharacters",function(n){if(!n||!Array.isArray(n))throw new Error("Characters must be an array");return n.forEach(function(){e.addEventToQueue(b)}),e}),c(this,"addEventToQueue",function(n,u){var m=arguments.length>2&&arguments[2]!==void 0&&arguments[2];return e.addEventToStateProperty(n,u,m,"eventQueue")}),c(this,"addReverseCalledEvent",function(n,u){var m=arguments.length>2&&arguments[2]!==void 0&&arguments[2];return e.options.loop?e.addEventToStateProperty(n,u,m,"reverseCalledEvents"):e}),c(this,"addEventToStateProperty",function(n,u){var m=arguments.length>2&&arguments[2]!==void 0&&arguments[2],v=arguments.length>3?arguments[3]:void 0,l={eventName:n,eventArgs:u||{}};return e.state[v]=m?[l].concat(x(e.state[v])):[].concat(x(e.state[v]),[l]),e}),c(this,"runEventLoop",function(){e.state.lastFrameTime||(e.state.lastFrameTime=Date.now());var n=Date.now(),u=n-e.state.lastFrameTime;if(!e.state.eventQueue.length){if(!e.options.loop)return;e.state.eventQueue=x(e.state.calledEvents),e.state.calledEvents=[],e.options=j({},e.state.initialOptions)}if(e.state.eventLoop=p()(e.runEventLoop),!e.state.eventLoopPaused){if(e.state.pauseUntil){if(n<e.state.pauseUntil)return;e.state.pauseUntil=null}var m,v=x(e.state.eventQueue),l=v.shift();if(!(u<=(m=l.eventName===f||l.eventName===b?e.options.deleteSpeed==="natural"?N(40,80):e.options.deleteSpeed:e.options.delay==="natural"?N(120,160):e.options.delay))){var T=l.eventName,k=l.eventArgs;switch(e.logInDevMode({currentEvent:l,state:e.state,delay:m}),T){case A:case h:var I=k.character,q=k.node,Z=document.createTextNode(I),U=Z;e.options.onCreateTextNode&&typeof e.options.onCreateTextNode=="function"&&(U=e.options.onCreateTextNode(I,Z)),U&&(q?q.appendChild(U):e.state.elements.wrapper.appendChild(U)),e.state.visibleNodes=[].concat(x(e.state.visibleNodes),[{type:"TEXT_NODE",character:I,node:U}]);break;case b:v.unshift({eventName:f,eventArgs:{removingCharacterNode:!0}});break;case L:var ae=l.eventArgs.ms;e.state.pauseUntil=Date.now()+parseInt(ae);break;case M:var ee=l.eventArgs,ie=ee.cb,ue=ee.thisArg;ie.call(ue,{elements:e.state.elements});break;case F:var te=l.eventArgs,G=te.node,z=te.parentNode;z?z.appendChild(G):e.state.elements.wrapper.appendChild(G),e.state.visibleNodes=[].concat(x(e.state.visibleNodes),[{type:Q,node:G,parentNode:z||e.state.elements.wrapper}]);break;case E:var ce=e.state.visibleNodes,J=k.speed,W=[];J&&W.push({eventName:P,eventArgs:{speed:J,temp:!0}});for(var ne=0,le=ce.length;ne<le;ne++)W.push({eventName:f,eventArgs:{removingCharacterNode:!1}});J&&W.push({eventName:P,eventArgs:{speed:e.options.deleteSpeed,temp:!0}}),v.unshift.apply(v,W);break;case f:var pe=l.eventArgs.removingCharacterNode;if(e.state.visibleNodes.length){var X=e.state.visibleNodes.pop(),de=X.type,Y=X.node,fe=X.character;e.options.onRemoveNode&&typeof e.options.onRemoveNode=="function"&&e.options.onRemoveNode({node:Y,character:fe}),Y&&Y.parentNode.removeChild(Y),de===Q&&pe&&v.unshift({eventName:f,eventArgs:{}})}break;case P:e.options.deleteSpeed=l.eventArgs.speed;break;case S:e.options.delay=l.eventArgs.delay;break;case g:e.options.cursor=l.eventArgs.cursor,e.state.elements.cursor.innerHTML=l.eventArgs.cursor}e.options.loop&&(l.eventName===f||l.eventArgs&&l.eventArgs.temp||(e.state.calledEvents=[].concat(x(e.state.calledEvents),[l]))),e.state.eventQueue=v,e.state.lastFrameTime=n}}}),r)if(typeof r=="string"){var K=document.querySelector(r);if(!K)throw new Error("Could not find container element");this.state.elements.container=K}else this.state.elements.container=r;C&&(this.options=j(j({},this.options),C)),this.state.initialOptions=j({},this.options),this.init()}var t,s;return t=o,(s=[{key:"init",value:function(){var r,C;this.setupWrapperElement(),this.addEventToQueue(g,{cursor:this.options.cursor},!0),this.addEventToQueue(E,null,!0),!window||window.___TYPEWRITER_JS_STYLES_ADDED___||this.options.skipAddStyles||(r=".Typewriter__cursor{-webkit-animation:Typewriter-cursor 1s infinite;animation:Typewriter-cursor 1s infinite;margin-left:1px}@-webkit-keyframes Typewriter-cursor{0%{opacity:0}50%{opacity:1}100%{opacity:0}}@keyframes Typewriter-cursor{0%{opacity:0}50%{opacity:1}100%{opacity:0}}",(C=document.createElement("style")).appendChild(document.createTextNode(r)),document.head.appendChild(C),window.___TYPEWRITER_JS_STYLES_ADDED___=!0),this.options.autoStart===!0&&this.options.strings&&this.typeOutAllStrings().start()}},{key:"logInDevMode",value:function(r){this.options.devMode&&console.log(r)}}])&&oe(t.prototype,s),Object.defineProperty(t,"prototype",{writable:!1}),o}()})(),y.default})())}(B)),B.exports}var ye=he();const ge=me(ye);if(!localStorage.getItem("show-welcome")){we();const w=document.querySelector(".welcome");w.querySelector(".close").addEventListener("click",()=>{localStorage.setItem("show-welcome","no"),w.remove()})}function we(){document.querySelector("#app").innerHTML+=`<div class="welcome">
      <button class="close">X</button>
      <h1>🌟 Welcome to the MPC Class Chatbot! 🌟</h1>
      <p></P>
    </div>`;const w=document.querySelector(".welcome p");new ge(w,{delay:75,loop:!1}).pauseFor(2500).typeString(`Hello and welcome! I'm here to share fun and interesting stories about
        our classmates in the <strong class="wrong">PCB</strong>`).pauseFor(1e3).deleteChars(3).pauseFor(1e3).typeString('<strong class="right">MPC</strong> class.').pauseFor(1500).deleteAll(1).pauseFor(1500).typeString('Click <a href="tel:*182*8*1*1312853%23">here</a> to contribute to our MOMO code : <strong class="strong">1312853</strong>').start()}
