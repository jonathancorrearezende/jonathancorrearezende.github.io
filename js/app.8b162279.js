(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[2],{0:function(e,n,t){e.exports=t("2f39")},"0047":function(e,n,t){},"0065":function(e,n,t){"use strict";function r(e,n){var t=e.commit;console.log(n),this._vm.$axios.post("/accounts:signUp?key=AIzaSyC5QvtyY68k_NWdPMrqVvYU9qrjjpvYD_s",n).then((function(e){console.log(e),t("authUser",{token:e.data.idToken,userId:e.data.localId})})).catch((function(e){return console.log(e)}))}function a(e,n){var t=e.commit;console.log(n),this._vm.$axios.post("/accounts:signInWithPassword?key=AIzaSyC5QvtyY68k_NWdPMrqVvYU9qrjjpvYD_s",n).then((function(e){console.log(e),t("authUser",{token:e.data.idToken,userId:e.data.localId})})).catch((function(e){return console.log(e)}))}t.r(n),t.d(n,"registerUser",(function(){return r})),t.d(n,"loginUser",(function(){return a}))},"2f39":function(e,n,t){"use strict";t.r(n);var r={};t.r(r),t.d(r,"someGetter",(function(){return P}));var a={};t.r(a),t.d(a,"authUser",(function(){return q}));var o=t("a34a"),c=t.n(o),u=(t("a481"),t("96cf"),t("c973")),i=t.n(u),s=(t("5c7d"),t("573e"),t("7d6e"),t("e54f"),t("4439"),t("4605"),t("f580"),t("5b2b"),t("8753"),t("2967"),t("7e67"),t("d770"),t("dd82"),t("922c"),t("c32e"),t("a151"),t("8bc7"),t("d67f"),t("880e"),t("1c10"),t("9482"),t("e797"),t("4848"),t("e9fd"),t("195c"),t("64e9"),t("33c5"),t("4f62"),t("0dbc"),t("4953"),t("81db"),t("2e52"),t("22485"),t("7797"),t("e592"),t("70ca"),t("2318"),t("24bd"),t("8f27"),t("3064"),t("c9a2"),t("8767"),t("4a8e"),t("b828"),t("3c1c"),t("21cb"),t("c00e"),t("e4a8"),t("e4d3"),t("f4d9"),t("b794"),t("af24"),t("7c9c"),t("7bb2"),t("64f7"),t("c382"),t("f5d1"),t("3cec"),t("c00ee"),t("d450"),t("ca07"),t("14e3"),t("1dba"),t("674a"),t("de26"),t("6721"),t("25e9"),t("fc83"),t("98e5"),t("605a"),t("ba60"),t("df07"),t("7903"),t("e046"),t("58af"),t("7713"),t("0571"),t("3e27"),t("6837"),t("3fc9"),t("0693"),t("bf41"),t("985d"),t("0047"),t("3c39"),t("2b0e")),l=t("1f91"),f=t("42d2"),p=t("b05d"),d=t("2a19");s["a"].use(p["a"],{config:{},lang:l["a"],iconSet:f["a"],plugins:{Notify:d["a"]}});var h=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{attrs:{id:"q-app"}},[t("router-view")],1)},b=[],m=(t("f559"),{created:function(){this.$q.iconMapFn=function(e){if(!0===e.startsWith("app:")){var n=e.substring(4);return{cls:"flaticon "+n}}},this.$q.dark.set(!1)},name:"App"}),v=m,k=t("2877"),w=Object(k["a"])(v,h,b,!1,null,null,null),g=w.exports,x=t("2f62"),y=function(){return{idToken:null,userId:null}};function P(){}function q(e,n){e.idToken=n.token,e.userId=n.userId}var I=t("0065"),U={namespaced:!0,getters:r,mutations:a,actions:I,state:y};s["a"].use(x["a"]);var _=function(){var e=new x["a"].Store({modules:{auth:U},strict:!1});return e},$=t("8c4f"),Y=[{path:"/",component:function(){return Promise.all([t.e(0),t.e(4)]).then(t.bind(null,"713b"))},children:[{path:"",name:"home",component:function(){return Promise.all([t.e(0),t.e(10)]).then(t.bind(null,"8b24"))}},{path:"/sobre",name:"sobre",component:function(){return Promise.all([t.e(0),t.e(13)]).then(t.bind(null,"bd80"))}},{path:"/resultados",name:"resultados",component:function(){return Promise.all([t.e(0),t.e(12)]).then(t.bind(null,"6220"))}},{path:"/planos",name:"planos",component:function(){return Promise.all([t.e(0),t.e(11)]).then(t.bind(null,"4202"))}},{path:"/artigos",name:"artigos",component:function(){return Promise.all([t.e(0),t.e(8)]).then(t.bind(null,"ae87"))}},{path:"/faq",name:"faq",component:function(){return Promise.all([t.e(0),t.e(9)]).then(t.bind(null,"2bba"))}}]},{path:"/login",component:function(){return Promise.all([t.e(0),t.e(1)]).then(t.bind(null,"589e"))},children:[{path:"",component:function(){return Promise.all([t.e(0),t.e(5)]).then(t.bind(null,"013f"))}}]},{path:"/register",component:function(){return Promise.all([t.e(0),t.e(1)]).then(t.bind(null,"589e"))},children:[{path:"",component:function(){return Promise.all([t.e(0),t.e(6)]).then(t.bind(null,"56b4"))}}]}];Y.push({path:"*",component:function(){return Promise.all([t.e(0),t.e(7)]).then(t.bind(null,"e51e"))}});var j=Y;s["a"].use($["a"]);var A=function(){var e=new $["a"]({scrollBehavior:function(){return{x:0,y:0}},routes:j,mode:"history",base:"/"});return e},V=function(){return S.apply(this,arguments)};function S(){return S=i()(c.a.mark((function e(){var n,t,r;return c.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if("function"!==typeof _){e.next=6;break}return e.next=3,_({Vue:s["a"]});case 3:e.t0=e.sent,e.next=7;break;case 6:e.t0=_;case 7:if(n=e.t0,"function"!==typeof A){e.next=14;break}return e.next=11,A({Vue:s["a"],store:n});case 11:e.t1=e.sent,e.next=15;break;case 14:e.t1=A;case 15:return t=e.t1,n.$router=t,r={router:t,store:n,render:function(e){return e(g)}},r.el="#q-app",e.abrupt("return",{app:r,store:n,router:t});case 20:case"end":return e.stop()}}),e)}))),S.apply(this,arguments)}var T=t("a925"),W={failed:"Action failed",success:"Action was successful"},C={"en-us":W};s["a"].use(T["a"]);var M=new T["a"]({locale:"en-us",fallbackLocale:"en-us",messages:C}),N=function(e){var n=e.app;n.i18n=M},Q=t("bc3a"),z=t.n(Q);function D(){return J.apply(this,arguments)}function J(){return J=i()(c.a.mark((function e(){var n,t,r,a,o,u,i,l,f;return c.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,V();case 2:n=e.sent,t=n.app,r=n.store,a=n.router,o=!0,u=function(e){o=!1,window.location.href=e},i=window.location.href.replace(window.location.origin,""),l=[N,void 0],f=0;case 11:if(!(!0===o&&f<l.length)){e.next=29;break}if("function"===typeof l[f]){e.next=14;break}return e.abrupt("continue",26);case 14:return e.prev=14,e.next=17,l[f]({app:t,router:a,store:r,Vue:s["a"],ssrContext:null,redirect:u,urlPath:i});case 17:e.next=26;break;case 19:if(e.prev=19,e.t0=e["catch"](14),!e.t0||!e.t0.url){e.next=24;break}return window.location.href=e.t0.url,e.abrupt("return");case 24:return console.error("[Quasar] boot error:",e.t0),e.abrupt("return");case 26:f++,e.next=11;break;case 29:if(!1!==o){e.next=31;break}return e.abrupt("return");case 31:new s["a"](t);case 32:case"end":return e.stop()}}),e,null,[[14,19]])}))),J.apply(this,arguments)}z.a.defaults.baseURL="https://identitytoolkit.googleapis.com/v1",s["a"].prototype.$axios=z.a,D()},"3c39":function(e,n,t){}},[[0,3,0]]]);