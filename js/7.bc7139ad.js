(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[7],{"5be1":function(t,a,s){t.exports=s.p+"img/malleo-logo2.03ccc2a6.svg"},"713b":function(t,a,s){"use strict";s.r(a);var e=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("q-layout",{attrs:{view:"HHh lpr fff"},on:{scroll:t.onScroll}},[e("q-header",{staticClass:"text-grey-1",class:t.headerColor},[e("q-toolbar",{staticClass:"m-toolbar m-container bg-transparent"},[e("q-btn",{staticClass:"lt-md absolute-left",attrs:{flat:"",icon:"menu"},on:{click:function(a){t.left=!t.left}}}),e("q-toolbar-title",{staticClass:"toolbar-title",attrs:{shrink:""}},[e("router-link",{attrs:{to:"/"}},[e("q-avatar",{staticClass:"logo",attrs:{square:""}},[e("img",{staticClass:"logo",attrs:{src:s("5be1")}})])],1)],1),e("q-space",{staticClass:"gt-sm"}),e("q-tabs",{staticClass:"gt-sm",attrs:{"no-caps":"",dense:"","active-color":"primary","indicator-color":"transparent"},model:{value:t.tab,callback:function(a){t.tab=a},expression:"tab"}},t._l(t.menuList,(function(t,a){return e("q-route-tab",{key:a,attrs:{to:{name:t.name},name:t.name,label:t.label}})})),1),e("q-separator",{staticClass:"q-mr-lg q-ml-sm gt-sm",attrs:{dark:"",vertical:"",inset:""}}),e("q-btn",{staticClass:"gt-sm text-bold q-mr-lg",attrs:{to:"/login",outline:"",color:"grey-3",unelevated:"","no-caps":"",label:"Login"}}),e("q-btn",{staticClass:"gt-sm text-weight-medium no-border malleo-button",attrs:{to:"/register",color:"primary","text-color":"grey-10",unelevated:"","no-caps":"",label:"Registrar"}})],1)],1),e("q-drawer",{staticClass:"lt-md",attrs:{side:"left",width:250,bordered:"",overlay:"",dark:"","content-class":"text-grey-3 bg-dark"},model:{value:t.left,callback:function(a){t.left=a},expression:"left"}},[e("q-scroll-area",{staticClass:"fit"},[e("q-list",{attrs:{padding:""}},[e("q-item",[e("q-item-section",{staticClass:"q-pt-md q-pb-sm"},[e("q-btn",{staticClass:"q-mb-md text-bold",attrs:{unelevated:"",to:"/login",outline:"","no-caps":"",label:"Login"}}),e("q-btn",{staticClass:"text-bold",attrs:{unelevated:"",to:"register",color:"primary","text-color":"secondary","no-caps":"",label:"Registrar"}})],1)],1),e("q-separator",{attrs:{spaced:"",dark:""}}),t._l(t.menuList,(function(a,s){return e("q-item",{key:s,attrs:{clickable:"",exact:"",to:{name:a.name}}},[e("q-item-section",{attrs:{avatar:""}},[e("q-icon",{attrs:{name:a.icon}})],1),e("q-item-section",[t._v("\n            "+t._s(a.label)+"\n          ")])],1)})),e("q-separator",{attrs:{spaced:"",dark:""}})],2)],1)],1),e("q-page-container",[e("router-view"),e("q-page-sticky",{staticClass:"z-top",attrs:{position:"bottom-right",offset:[20,20]}},[e("q-btn",{staticClass:"malleo-button",attrs:{to:{name:"contato"},fab:"",icon:"chat_bubble","text-color":"secondary"}})],1)],1),e("q-footer",{staticClass:"bg-dark text-white",attrs:{bordered:""}},[e("div",{staticClass:"m-container q-py-lg"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-sm-4"},[e("div",{staticClass:"text-h4 q-mb-sm text-primary text-weight-medium"},[t._v("\n            Malleo\n          ")])])]),e("div",{staticClass:"row q-col-gutter-md q-mb-md"},[e("div",{staticClass:"col"},[e("div",{staticClass:"text-caption text-grey-3 q-mb-md"},[t._v("\n            A Malleo é a melhor plataforma de trading automático do Brasil.\n            Compra e venda criptomoedas sem precisar ser um Expert e comece a\n            lucrar.\n          ")]),e("span",[e("b",[t._v("Siga-nos nas Redes Sociais")])]),e("div",{staticClass:"q-mt-xs"},[e("q-btn",{attrs:{href:"https://www.facebook.com/malleobusiness",target:"_blank",type:"a",round:"",flat:"",color:"primary",icon:"fab fa-facebook"}}),e("q-btn",{attrs:{href:"https://www.instagram.com/malleobusiness",target:"_blank",type:"a",round:"",flat:"",color:"primary",icon:"fab fa-instagram"}}),e("q-btn",{attrs:{href:"https://twitter.com/businessmalleo",target:"_blank",type:"a",round:"",flat:"",color:"primary",icon:"fab fa-twitter"}}),e("q-btn",{attrs:{round:"",flat:"",color:"primary",icon:"fab fa-linkedin"}})],1)]),e("div",{staticClass:"col-xs-12 col-sm-4"},[t._v("teste")]),e("div",{staticClass:"col-xs-12 col-sm-4"},[t._v("teste")])]),e("div",{staticClass:"row"},[e("div",{staticClass:"col"},[t._v("\n          ©2020 Copyright\n          "),e("span",{staticClass:"text-weight-bold"},[t._v("Malleo Business")]),t._v(" - Todos os\n          direitos reservados\n        ")])])])])],1)},o=[],r=(s("572f"),[{icon:"fas fa-home",name:"home",label:"Home",separator:!1},{icon:"fas fa-coins",name:"resultados",label:"Resultados",separator:!1},{icon:"fas fa-dollar-sign",name:"planos",label:"Planos",separator:!1},{icon:"fas fa-lightbulb",name:"artigos",label:"Artigos",separator:!1},{icon:"fas fa-question",name:"faq",label:"FAQ",separator:!1},{icon:"call",name:"contato",label:"Contato",separator:!1}]),l={data:function(){return{left:!1,tab:"home",menuList:r,scrollPosition:0}},computed:{headerColor:function(){return this.scrollPosition<=80?"bg-transparent":"bg-dark"}},methods:{onScroll:function(t){this.scrollPosition=t.position}}},n=l,i=s("2877"),c=s("4d5a"),m=s("e359"),b=s("65c6"),d=s("9c40"),p=s("6ac5"),u=s("cb32"),f=s("2c91"),g=s("429b"),q=s("7867"),v=s("eb85"),C=s("9404"),h=s("4983"),y=s("1c1c"),w=s("66e5"),k=s("4074"),x=s("0016"),Q=s("09e3"),_=s("de5e"),S=s("7ff0"),L=s("eebe"),P=s.n(L),T=Object(i["a"])(n,e,o,!1,null,null,null);a["default"]=T.exports;P()(T,"components",{QLayout:c["a"],QHeader:m["a"],QToolbar:b["a"],QBtn:d["a"],QToolbarTitle:p["a"],QAvatar:u["a"],QSpace:f["a"],QTabs:g["a"],QRouteTab:q["a"],QSeparator:v["a"],QDrawer:C["a"],QScrollArea:h["a"],QList:y["a"],QItem:w["a"],QItemSection:k["a"],QIcon:x["a"],QPageContainer:Q["a"],QPageSticky:_["a"],QFooter:S["a"]})}}]);