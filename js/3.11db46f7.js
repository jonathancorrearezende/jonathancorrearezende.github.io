(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[3],{4202:function(e,t,a){"use strict";a.r(t);var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("q-page",[a("div",{staticClass:"text-white m-banner-pages malleo-gradient row items-center"},[a("particles",{staticClass:"particles"}),a("div",{staticClass:"m-container col items-center"},[a("div",{staticClass:"row items-center"},[a("div",{staticClass:"col"},[a("h4",{staticClass:"text-grey-4 text-weight-bold q-my-sm m text-center"},[e._v("\n            Planos\n          ")]),a("div",{staticClass:"text-grey-4 text-center text-caption"},[e._v("\n            Você pode testar a plataforma por 14 dias gratuitamente e assinar\n            um plano a qualquer momento\n          ")])])])])],1),a("div",{staticClass:"row m-container justify-center q-mb-sm"},[a("div",{staticClass:"col q-pa-lg",staticStyle:{"max-width":"500px"}},[a("div",[a("q-btn-toggle",{staticClass:"my-custom-toggle",attrs:{ripple:!1,spread:"",rounded:"",unelevated:"","toggle-color":"indigo-6",color:"white","text-color":"indigo-6","no-caps":"",options:[{label:"Mensal",value:"mensal",slot:1},{label:"Semestral",value:"semestral",slot:2}]},model:{value:e.periodoPlano,callback:function(t){e.periodoPlano=t},expression:"periodoPlano"}})],1)])]),a("div",{staticClass:"m-container"},[a("div",{staticClass:"row q-col-gutter-lg"},e._l(e.planos,(function(t,s){return a("div",{key:s,staticClass:"col-md-4 col-lg-4 col-sm-6 col-xs-12 q-mb-lg"},[a("q-card",{staticClass:"q-pa-sm pricing-card full-height",class:"Premium"==t.name?"text-grey-3":"text-grey-7",attrs:{dark:"Premium"==t.name}},[a("transition",{attrs:{appear:"","enter-active-class":"animated fadeIn","leave-active-class":"animated fadeOut"}},["semestral"==e.periodoPlano?a("q-ribbon",{staticClass:"text-bold",attrs:{glow:"",type:"corner",position:"top-right","leaf-color":"green-10",color:"#ffffff","background-color":"green-7"}},[e._v("\n              "+e._s(e.desconto.semestral)+"% desc.\n            ")]):e._e()],1),a("q-card-section",{staticClass:"text-center q-pb-none"},[a("div",{staticClass:"text-h5 q-pb-md text-weight-bolder"},[e._v("\n              "+e._s(t.name)+"\n            ")]),a("div",{staticClass:"text-weight-medium text-h2"},["Grátis"!=t.valor?a("span",{staticClass:"text-subtitle1 vertical-top"},[e._v("R$\n              ")]):e._e(),a("span",[e._v(e._s(e.valorPlano(t.valor)))]),"Grátis"!=t.valor?a("span",{staticClass:"text-subtitle1"},[e._v("\n                / Mês")]):e._e()]),"semestral"==e.periodoPlano?a("div",{staticClass:"text-overline q-pt-xs"},[e._v("\n              (cobrado R$"+e._s(6*e.valorPlano(t.valor))+" por semestre)\n            ")]):e._e()]),a("q-card-actions",{staticClass:"q-py-lg q-px-lg",attrs:{align:"center"}},[a("q-btn",{staticClass:"q-py-xs text-bold full-width",attrs:{unelevated:"",rounded:"",color:"indigo-6",label:t.btn}})],1),a("q-separator",{staticClass:"q-my-sm",attrs:{dark:"Premium"==t.name,inset:""}}),a("q-card-section",{staticClass:"q-px-sm"},[a("q-list",{staticClass:"text-weight-bold text-caption",attrs:{dense:""}},e._l(t.resources,(function(t){return a("q-item",{directives:[{name:"ripple",rawName:"v-ripple"}],key:t,staticStyle:{padding:"2px 10px"},attrs:{clickable:""}},[a("q-item-section",{staticClass:"q-pr-sm",attrs:{side:""}},[a("q-icon",{attrs:{size:"xs",name:"done",color:"blue"}})],1),a("q-item-section",[e._v(e._s(t))])],1)})),1)],1)],1)],1)})),0)])])},i=[],o=a("6a26"),r=[{name:"Basic",valor:19,btn:"Comprar",resources:["Modo simulação","Limite para Trade: U$500","Suporte inicial"]},{name:"Advanced",valor:29,btn:"Teste Gratuito",resources:["Modo simulação","Limite para Trade: U$1000","Suporte inicial","Notificações por e-mail"]},{name:"Pro",valor:49,btn:"Comprar",resources:["Modo simulação","Limite para Trade: U$2500","Suporte Inicial","Notificações por e-mail","Notificações por SMS"]},{name:"Plus",valor:79,btn:"Comprar",resources:["Modo simulação","Limite para Trade: U$6000","Suporte Inicial","Notificações por e-mail","Notificações por SMS","Acesso antecipado a novos recursos"]},{name:"Premium",valor:109,btn:"Comprar",resources:["Modo simulação","Limite para Trade: Ilimitado","Suporte Inicial","Notificações por e-mail","Notificações por SMS","Acesso antecipado a novos recursos"]}],n={name:"Pricing",components:{Particles:o["a"]},data:function(){return{tab:"semestral",planos:r,periodoPlano:"mensal",desconto:{mensal:0,semestral:20,route:this.$route.path}}},mounted:function(){},methods:{valorPlano:function(e){var t=this.periodoPlano,a=Math.round(e*(1-this.desconto[t]/100));return a}}},l=n,c=(a("fdb3"),a("2877")),d=a("9989"),m=a("6a67"),p=a("f09f"),u=a("a370"),v=a("4b7e"),b=a("9c40"),f=a("eb85"),g=a("1c1c"),h=a("66e5"),x=a("4074"),_=a("0016"),C=a("714f"),q=a("eebe"),y=a.n(q),w=Object(c["a"])(l,s,i,!1,null,null,null);t["default"]=w.exports;y()(w,"components",{QPage:d["a"],QBtnToggle:m["a"],QCard:p["a"],QCardSection:u["a"],QCardActions:v["a"],QBtn:b["a"],QSeparator:f["a"],QList:g["a"],QItem:h["a"],QItemSection:x["a"],QIcon:_["a"]}),y()(w,"directives",{Ripple:C["a"]})},"6a26":function(e,t,a){"use strict";var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"particles-js"}})},i=[],o=(a("572f"),{name:"ParticlesJS",data:function(){return{}},mounted:function(){this.initParticles()},methods:{initParticles:function(){window.particlesJS("particles-js",{particles:{number:{value:70,density:{enable:!0,value_area:800}},color:{value:"#dedede"},shape:{type:"circle",stroke:{width:0,color:"#ffffff"},polygon:{nb_sides:5},image:{src:"img/github.svg",width:100,height:100}},opacity:{value:.5,random:!1,anim:{enable:!1,speed:1,opacity_min:.1,sync:!1}},size:{value:3,random:!0,anim:{enable:!1,speed:40,size_min:.1,sync:!1}},line_linked:{enable:!0,distance:120,color:"#dedede",opacity:.4,width:1},move:{enable:!0,speed:7,direction:"none",random:!0,straight:!1,out_mode:"out",bounce:!1,attract:{enable:!1,rotateX:600,rotateY:1200}}},interactivity:{detect_on:"canvas",events:{onhover:{enable:!0,mode:"grab"},onclick:{enable:!0,mode:"push"},resize:!0},modes:{grab:{distance:200,line_linked:{opacity:1}},bubble:{distance:400,size:40,duration:2,opacity:8,speed:3},repulse:{distance:200,duration:.4},push:{particles_nb:4},remove:{particles_nb:2}}},retina_detect:!0})}}}),r=o,n=a("2877"),l=Object(n["a"])(r,s,i,!1,null,null,null);t["a"]=l.exports},c511:function(e,t,a){},fdb3:function(e,t,a){"use strict";var s=a("c511"),i=a.n(s);i.a}}]);