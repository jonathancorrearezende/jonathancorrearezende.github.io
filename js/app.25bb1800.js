(function(e){function t(t){for(var o,r,i=t[0],u=t[1],l=t[2],s=0,d=[];s<i.length;s++)r=i[s],Object.prototype.hasOwnProperty.call(a,r)&&a[r]&&d.push(a[r][0]),a[r]=0;for(o in u)Object.prototype.hasOwnProperty.call(u,o)&&(e[o]=u[o]);f&&f(t);while(d.length)d.shift()();return c.push.apply(c,l||[]),n()}function n(){for(var e,t=0;t<c.length;t++){for(var n=c[t],o=!0,r=1;r<n.length;r++){var i=n[r];0!==a[i]&&(o=!1)}o&&(c.splice(t--,1),e=u(u.s=n[0]))}return e}var o={},r={1:0},a={1:0},c=[];function i(e){return u.p+"js/"+({}[e]||e)+"."+{2:"b0a2fedb",3:"2af86162",4:"f62e2dac",5:"0778aa14",6:"46b4d6b3",7:"134d6dc9",8:"e0385d71",9:"c736b477",10:"a238009d",11:"566d4bdc",12:"a8c31899"}[e]+".js"}function u(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.e=function(e){var t=[],n={2:1,3:1,4:1,5:1};r[e]?t.push(r[e]):0!==r[e]&&n[e]&&t.push(r[e]=new Promise((function(t,n){for(var o="css/"+({}[e]||e)+"."+{2:"4a4a337c",3:"32b9829e",4:"5502bf84",5:"5502bf84",6:"31d6cfe0",7:"31d6cfe0",8:"31d6cfe0",9:"31d6cfe0",10:"31d6cfe0",11:"31d6cfe0",12:"31d6cfe0"}[e]+".css",a=u.p+o,c=document.getElementsByTagName("link"),i=0;i<c.length;i++){var l=c[i],s=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(s===o||s===a))return t()}var d=document.getElementsByTagName("style");for(i=0;i<d.length;i++){l=d[i],s=l.getAttribute("data-href");if(s===o||s===a)return t()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=t,f.onerror=function(t){var o=t&&t.target&&t.target.src||a,c=new Error("Loading CSS chunk "+e+" failed.\n("+o+")");c.code="CSS_CHUNK_LOAD_FAILED",c.request=o,delete r[e],f.parentNode.removeChild(f),n(c)},f.href=a;var p=document.getElementsByTagName("head")[0];p.appendChild(f)})).then((function(){r[e]=0})));var o=a[e];if(0!==o)if(o)t.push(o[2]);else{var c=new Promise((function(t,n){o=a[e]=[t,n]}));t.push(o[2]=c);var l,s=document.createElement("script");s.charset="utf-8",s.timeout=120,u.nc&&s.setAttribute("nonce",u.nc),s.src=i(e);var d=new Error;l=function(t){s.onerror=s.onload=null,clearTimeout(f);var n=a[e];if(0!==n){if(n){var o=t&&("load"===t.type?"missing":t.type),r=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+o+": "+r+")",d.name="ChunkLoadError",d.type=o,d.request=r,n[1](d)}a[e]=void 0}};var f=setTimeout((function(){l({type:"timeout",target:s})}),12e4);s.onerror=s.onload=l,document.head.appendChild(s)}return Promise.all(t)},u.m=e,u.c=o,u.d=function(e,t,n){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)u.d(n,o,function(t){return e[t]}.bind(null,o));return n},u.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="/",u.oe=function(e){throw console.error(e),e};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],s=l.push.bind(l);l.push=t,l=l.slice();for(var d=0;d<l.length;d++)t(l[d]);var f=s;c.push([0,0]),n()})({0:function(e,t,n){e.exports=n("2f39")},"0047":function(e,t,n){},"0065":function(e,t,n){"use strict";function o({commit:e},t){console.log(t),this._vm.$axios.post("/accounts:signUp?key=AIzaSyC5QvtyY68k_NWdPMrqVvYU9qrjjpvYD_s",t).then(t=>{console.log(t),e("authUser",{token:t.data.idToken,userId:t.data.localId})}).catch(e=>console.log(e))}function r({commit:e},t){console.log(t),this._vm.$axios.post("/accounts:signInWithPassword?key=AIzaSyC5QvtyY68k_NWdPMrqVvYU9qrjjpvYD_s",t).then(t=>{console.log(t),e("authUser",{token:t.data.idToken,userId:t.data.localId})}).catch(e=>console.log(e))}n.r(t),n.d(t,"registerUser",(function(){return o})),n.d(t,"loginUser",(function(){return r}))},"2f39":function(e,t,n){"use strict";n.r(t);var o={};n.r(o),n.d(o,"someGetter",(function(){return w}));var r={};n.r(r),n.d(r,"authUser",(function(){return P}));n("5319"),n("573e"),n("7d6e"),n("e54f"),n("a4b7"),n("4439"),n("4605"),n("f580"),n("5b2b"),n("8753"),n("2967"),n("7e67"),n("d770"),n("dd82"),n("922c"),n("d7fb"),n("a533"),n("c32e"),n("a151"),n("8bc7"),n("e80f"),n("5fec"),n("e42f"),n("57fc"),n("d67f"),n("880e"),n("1c10"),n("9482"),n("e797"),n("4848"),n("53d0"),n("63b1"),n("e9fd"),n("195c"),n("64e9"),n("33c5"),n("4f62"),n("0dbc"),n("7c38"),n("0756"),n("4953"),n("81db"),n("2e52"),n("22485"),n("7797"),n("12a1"),n("ce96"),n("70ca"),n("2318"),n("24bd"),n("8f27"),n("3064"),n("c9a2"),n("8767"),n("4a8e"),n("b828"),n("3c1c"),n("21cb"),n("c00e"),n("e4a8"),n("e4d3"),n("f4d9"),n("fffd"),n("f645"),n("639e"),n("34ee"),n("b794"),n("af24"),n("7c9c"),n("7bb2"),n("64f7"),n("c382"),n("053c"),n("c48f"),n("f5d1"),n("3cec"),n("c00ee"),n("d450"),n("ca07"),n("14e3"),n("9393"),n("9227"),n("1dba"),n("674a"),n("de26"),n("6721"),n("9cb5"),n("ed9b"),n("fc83"),n("98e5"),n("605a"),n("ba60"),n("df07"),n("7903"),n("e046"),n("58af"),n("7713"),n("0571"),n("3e27"),n("6837"),n("3fc9"),n("0693"),n("bf41"),n("985d"),n("0047"),n("3c39"),n("46f6");var a=n("2b0e"),c=n("1f91"),i=n("42d2"),u=n("b05d"),l=n("2a19"),s=n("f508");a["default"].use(u["a"],{config:{},lang:c["a"],iconSet:i["a"],plugins:{Notify:l["a"],Loading:s["a"]}});var d=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"q-app"}},[n("router-view")],1)},f=[],p={name:"App",data(){return{thumbStyle:{right:"7px",borderRadius:"6px",backgroundColor:"#2e3336",width:"8px",opacity:.6,margin:"14px 0",zIndex:2500},barStyle:{right:"5px",borderRadius:"10px",backgroundColor:"2e3336",width:"12px",opacity:.2,margin:"10px 0",zIndex:2500}}},created(){this.$q.iconMapFn=e=>{if(!0===e.startsWith("app:")){const t=e.substring(4);return{cls:"flaticon "+t}}},this.$q.dark.set(!1)}},h=p,b=n("2877"),m=Object(b["a"])(h,d,f,!1,null,null,null),g=m.exports,v=n("2f62"),y=function(){return{idToken:null,userId:null}};function w(){}function P(e,t){e.idToken=t.token,e.userId=t.userId}var k=n("0065"),x={namespaced:!0,getters:o,mutations:r,actions:k,state:y};a["default"].use(v["a"]);var j=function(){const e=new v["a"].Store({modules:{auth:x},strict:!1});return e},_=n("8c4f");const S=[{path:"/",component:()=>Promise.all([n.e(0),n.e(3)]).then(n.bind(null,"713b")),children:[{path:"",name:"home",component:()=>Promise.all([n.e(0),n.e(9)]).then(n.bind(null,"8b24"))},{path:"/sobre",name:"sobre",component:()=>Promise.all([n.e(0),n.e(12)]).then(n.bind(null,"bd80"))},{path:"/resultados",name:"resultados",component:()=>Promise.all([n.e(0),n.e(10)]).then(n.bind(null,"6220"))},{path:"/planos",name:"planos",component:()=>Promise.all([n.e(0),n.e(2)]).then(n.bind(null,"4202"))},{path:"/artigos",name:"artigos",component:()=>Promise.all([n.e(0),n.e(6)]).then(n.bind(null,"ae87"))},{path:"/faq",name:"faq",component:()=>Promise.all([n.e(0),n.e(8)]).then(n.bind(null,"2bba"))},{path:"/contato",name:"contato",component:()=>Promise.all([n.e(0),n.e(7)]).then(n.bind(null,"73ca"))},{path:"/login",name:"login",component:()=>Promise.all([n.e(0),n.e(4)]).then(n.bind(null,"013f"))},{path:"/register",name:"register",component:()=>Promise.all([n.e(0),n.e(5)]).then(n.bind(null,"56b4"))}]}];S.push({path:"*",component:()=>Promise.all([n.e(0),n.e(11)]).then(n.bind(null,"e51e"))});var O=S;a["default"].use(_["a"]);var I=function(){const e=new _["a"]({scrollBehavior:()=>({x:0,y:0}),routes:O,mode:"history",base:"/"});return e},q=async function(){const e="function"===typeof j?await j({Vue:a["default"]}):j,t="function"===typeof I?await I({Vue:a["default"],store:e}):I;e.$router=t;const n={router:t,store:e,render:e=>e(g),el:"#q-app"};return{app:n,store:e,router:t}},C=n("a925"),A={failed:"Action failed",success:"Action was successful"},T={"en-us":A};a["default"].use(C["a"]);const U=new C["a"]({locale:"en-us",fallbackLocale:"en-us",messages:T});var E=({app:e})=>{e.i18n=U},L=n("758b"),N=n("9e15"),M=n.n(N),$=n("a670");const Y="/";async function V(){const{app:e,store:t,router:n}=await q();let o=!1;const r=e=>{o=!0;const t=Object(e)===e?n.resolve(e).route.fullPath:e;window.location.href=t},c=window.location.href.replace(window.location.origin,""),i=[E,L["default"],M.a,$["default"]];for(let l=0;!1===o&&l<i.length;l++)if("function"===typeof i[l])try{await i[l]({app:e,router:n,store:t,Vue:a["default"],ssrContext:null,redirect:r,urlPath:c,publicPath:Y})}catch(u){return u&&u.url?void(window.location.href=u.url):void console.error("[Quasar] boot error:",u)}!0!==o&&new a["default"](e)}V()},"3c39":function(e,t,n){},"758b":function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var o=n("2b0e"),r=n("bc3a"),a=n.n(r);a.a.defaults.baseURL="https://identitytoolkit.googleapis.com/v1",o["default"].prototype.$axios=a.a;const c=a.a.create({baseURL:"https://api.binance.com/api/v3"})},"9e15":function(e,t){}});