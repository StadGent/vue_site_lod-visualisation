(function(t){function e(e){for(var n,s,o=e[0],c=e[1],l=e[2],u=0,d=[];u<o.length;u++)s=o[u],r[s]&&d.push(r[s][0]),r[s]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(t[n]=c[n]);f&&f(e);while(d.length)d.shift()();return i.push.apply(i,l||[]),a()}function a(){for(var t,e=0;e<i.length;e++){for(var a=i[e],n=!0,s=1;s<a.length;s++){var o=a[s];0!==r[o]&&(n=!1)}n&&(i.splice(e--,1),t=c(c.s=a[0]))}return t}var n={},s={app:0},r={app:0},i=[];function o(t){return c.p+"js/"+({"data-resource~datasets":"data-resource~datasets","data-resource":"data-resource",datasets:"datasets",notFound:"notFound",query:"query",YASQE:"YASQE",YASR:"YASR"}[t]||t)+"."+{"data-resource~datasets":"c2852c48","data-resource":"4c0c873d",datasets:"2c43ffa5",notFound:"0062a826",query:"bdd85707",YASQE:"eb7b4915",YASR:"b0ac8ab2"}[t]+".js"}function c(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,c),a.l=!0,a.exports}c.e=function(t){var e=[],a={"data-resource":1,datasets:1,query:1};s[t]?e.push(s[t]):0!==s[t]&&a[t]&&e.push(s[t]=new Promise(function(e,a){for(var n="css/"+({"data-resource~datasets":"data-resource~datasets","data-resource":"data-resource",datasets:"datasets",notFound:"notFound",query:"query",YASQE:"YASQE",YASR:"YASR"}[t]||t)+"."+{"data-resource~datasets":"31d6cfe0","data-resource":"b49d377e",datasets:"5343695e",notFound:"31d6cfe0",query:"001e0f0a",YASQE:"31d6cfe0",YASR:"31d6cfe0"}[t]+".css",s=c.p+n,r=document.getElementsByTagName("link"),i=0;i<r.length;i++){var o=r[i],l=o.getAttribute("data-href")||o.getAttribute("href");if("stylesheet"===o.rel&&(l===n||l===s))return e()}var u=document.getElementsByTagName("style");for(i=0;i<u.length;i++){o=u[i],l=o.getAttribute("data-href");if(l===n||l===s)return e()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=e,d.onerror=function(e){var n=e&&e.target&&e.target.src||s,r=new Error("Loading CSS chunk "+t+" failed.\n("+n+")");r.request=n,a(r)},d.href=s;var f=document.getElementsByTagName("head")[0];f.appendChild(d)}).then(function(){s[t]=0}));var n=r[t];if(0!==n)if(n)e.push(n[2]);else{var i=new Promise(function(e,a){n=r[t]=[e,a]});e.push(n[2]=i);var l,u=document.getElementsByTagName("head")[0],d=document.createElement("script");d.charset="utf-8",d.timeout=120,c.nc&&d.setAttribute("nonce",c.nc),d.src=o(t),l=function(e){d.onerror=d.onload=null,clearTimeout(f);var a=r[t];if(0!==a){if(a){var n=e&&("load"===e.type?"missing":e.type),s=e&&e.target&&e.target.src,i=new Error("Loading chunk "+t+" failed.\n("+n+": "+s+")");i.type=n,i.request=s,a[1](i)}r[t]=void 0}};var f=setTimeout(function(){l({type:"timeout",target:d})},12e4);d.onerror=d.onload=l,u.appendChild(d)}return Promise.all(e)},c.m=t,c.c=n,c.d=function(t,e,a){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(c.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)c.d(a,n,function(e){return t[e]}.bind(null,n));return a},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="/data/",c.oe=function(t){throw console.error(t),t};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],u=l.push.bind(l);l.push=e,l=l.slice();for(var d=0;d<l.length;d++)e(l[d]);var f=u;i.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"034f":function(t,e,a){"use strict";var n=a("64a9"),s=a.n(n);s.a},2242:function(t,e,a){"use strict";function n(t){if("undefined"!==typeof gent_styleguide){var e=t.querySelector(".toggle"),a=t.querySelector(".close"),n=t.querySelector(".drawer"),s=t.querySelector(".overlay"),r=new gent_styleguide.TabTrap(n),i=function(t){t&&t.preventDefault(),n.classList.remove("js-opened"),s.classList.remove("js-opened"),document.removeEventListener("keydown",c),e&&(e.focus(),e.setAttribute("aria-expanded",!1)),gent_styleguide.toggleScrollLockParent(!0,n),setTimeout(function(){n.style.display="none"},500)},o=function(t){t&&t.preventDefault(),n.style.display="block",setTimeout(function(){n.classList.add("js-opened"),s.classList.add("js-opened")}),e.setAttribute("aria-expanded",!0),n.focus(),document.addEventListener("keydown",c),gent_styleguide.toggleScrollLockParent(!1,n)},c=function(t){if(r&&r.hasFocusables&&t){var e=t.keyCode||t.which;switch(e){case 9:t.shiftKey?r.back(t):r.next(t);break;case 40:case 39:r.next(t);break;case 38:case 37:r.back(t);break;case 36:t.preventDefault(),r.home();break;case 35:t.preventDefault(),r.end();break;case 27:i(t);break}}};return e.addEventListener("click",o),a.addEventListener("click",i),s.addEventListener("click",i),{open:o,close:i}}console.error("You need to include base.js.")}t.exports=n},"36c2":function(t,e,a){"use strict";a.r(e);a("551c"),a("f751"),a("cadf");window.gent_styleguide=function(){function t(t){var e=a(t);function a(t){var e=t.querySelectorAll('a[href], area[href], input:not([disabled]):not([hidden]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), [tabindex="0"]');return Array.prototype.slice.call(e)}this.setFocusables=function(){e=a(t)},this.next=function(t){var a=document.activeElement;a&&a===e[e.length-1]&&(e[0].focus(),t.preventDefault())},this.back=function(t){var a=document.activeElement;a&&a===e[0]&&(e[e.length-1].focus(),t.preventDefault())},this.home=function(){e[0].focus()},this.end=function(){e[e.length-1].focus()},this.hasFocusables=e&&e.length>0}var e=function(t,e,a){a=a||".modal.visible";var n=e.parentNode.closest(a);n?n.style.overflow=t?"":"hidden":document.body.style.overflow=t?"":"hidden"};return{TabTrap:t,toggleScrollLockParent:e}}()},"56d7":function(t,e,a){"use strict";a.r(e);a("551c"),a("f751"),a("cadf");var n=a("2b0e"),s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"cs--cyan container"},[a("a",{staticClass:"skiplink",attrs:{href:"#main"}},[t._v("Overslaan en naar de inhoud gaan")]),a("v-header"),a("main",{staticClass:"content-container",attrs:{id:"main"}},[a("transition",{attrs:{name:"fade",mode:"out-in"}},[a("router-view")],1)],1),a("v-footer"),a("div",{staticClass:"visually-hidden",attrs:{role:"status","aria-atomic":"true","aria-live":"polite"}},[t._v(t._s(t.a11yMessage))])],1)},r=[],i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("header",{staticClass:"header"},[a("div",{staticClass:"content-container"},[a("logo"),a("v-menu")],1),a("breadcrumbs"),a("hr"),a("div",{staticClass:"subsite"},[a("span",[t._v(t._s(t.$store.state.projectName))])])],1)},o=[],c=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("router-link",{staticClass:"site-logo subsite",attrs:{to:"/",title:"Home",rel:"home"}},[t._v("\n  "+t._s(t.$store.state.projectName)+"\n")])},l=[],u=a("2877"),d={},f=Object(u["a"])(d,c,l,!1,null,null,null);f.options.__file="logo.vue";var m=f.exports,p=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("transition",{attrs:{name:"fade",mode:"out-in"}},[t.crumbs&&t.crumbs.length?a("nav",{staticClass:"breadcrumb section--default",attrs:{"aria-labelledby":"system-breadcrumb"}},[a("div",{staticClass:"content-container"},[a("h2",{staticClass:"visually-hidden",attrs:{id:"system-breadcrumb"}},[t._v("Breadcrumb")]),a("ol",{staticClass:"breadcrumb no-style"},[a("transition-group",{attrs:{name:"fade",mode:"out-in"}},t._l(t.crumbs,function(e,n){return a("li",{key:n},[e.link?a("router-link",{attrs:{to:{name:e.link}}},[t._v(t._s(e.name))]):a("span",[t._v(t._s(e.name))])],1)}))],1)])]):t._e()])},v=[],h={data:function(){return{crumbs:[]}},watch:{$route:function(){this.updateCrumbs()}},mounted:function(){this.updateCrumbs()},methods:{updateCrumbs:function(){this.crumbs=this.$route.meta?this.$route.meta.breadcrumb:[]}}},b=h,g=Object(u["a"])(b,p,v,!1,null,null,null);g.options.__file="breadcrumbs.vue";var _=g.exports,y=function(){var t=this,e=t.$createElement,a=t._self._c||e;return t.routes?a("nav",{staticClass:"menu"},[a("button",{staticClass:"toggle"},[t._v("Menu")]),a("div",{staticClass:"overlay"}),a("div",{staticClass:"drawer",attrs:{tabindex:"-1"}},[t._m(0),a("ul",{staticClass:"links"},t._l(t.routes,function(e,n){return a("li",{key:n},[a("router-link",{attrs:{to:e,"active-class":"active",exact:""===e.path||"/"===e.path},nativeOn:{click:function(e){t.menu.close()}}},[t._v(t._s(e.meta.menu)+"\n                ")])],1)}))])]):t._e()},k=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"header"},[a("a",{staticClass:"site-logo ",attrs:{href:"#",title:"Home",rel:"home"}}),a("button",{staticClass:"close"},[t._v("Menu sluiten")])])}],w=a("2242"),C={data:function(){return{menu:null}},computed:{routes:function(){return this.$router.options.routes.filter(function(t){return t.meta&&t.meta.menu})||[]}},mounted:function(){this.menu=new w(this.$el)}},E=C,S=Object(u["a"])(E,y,k,!1,null,null,null);S.options.__file="menu.vue";var j=S.exports,x={components:{logo:m,breadcrumbs:_,"v-menu":j}},A=x,O=Object(u["a"])(A,i,o,!1,null,null,null);O.options.__file="header.vue";var D=O.exports,T=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("footer",{staticClass:"footer"},[a("h2",{staticClass:"visually-hidden"},[t._v("Footer")]),a("div",{staticClass:"footer-top"},[a("div",{staticClass:"content-container"},[a("div",{staticClass:"footer--column"},[a("gent-info")],1),a("div",{staticClass:"footer--column"},[a("city-links")],1),a("div",{staticClass:"footer--column"},[a("post-address")],1)])]),a("div",{staticClass:"footer-bottom content-container"},[a("div",{staticClass:"footer--column"},[a("partnership")],1),a("div",{staticClass:"footer--column"},[a("social-media")],1)])])},P=[],$=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},q=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"gentinfo-block"},[a("div",{staticClass:"gentinfo-block-content"},[a("h2",[t._v("Gentinfo")]),a("p",{},[t._v("Bereikbaar van maandag t.e.m. zaterdag van 8:00 tot 19:00 uur.")]),a("ul",{staticClass:"icon-list"},[a("li",[a("i",{staticClass:"icon-phone",attrs:{"aria-hidden":"true"}}),a("a",{attrs:{href:"tel:09 210 10 10",alt:"Gentinfo tel link"}},[t._v("09 210 10 10")])]),a("li",[a("i",{staticClass:"icon-envelope",attrs:{"aria-hidden":"true"}}),a("a",{attrs:{href:"mailto:gentinfo@stad.gent",alt:"Gentinfo mail link"}},[t._v("Gentinfo@stad.gent")])]),a("li",[a("i",{staticClass:"icon-document",attrs:{"aria-hidden":"true"}}),a("a",{attrs:{href:"https://stad.gent/contact",alt:"Contact form"}},[t._v("Contactformulier")])])])])])}],L={},R=Object(u["a"])(L,$,q,!1,null,null,null);R.options.__file="gent-info.vue";var F=R.exports,G=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},Y=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"dg-block-disclaimer"},[a("h2",[t._v("Nuttige links")]),a("ul",[a("li",[a("a",{attrs:{href:"https://stad.gent/werken-ondernemen/werken/vacatures-jobs-zoeken-en-solliciteren-bij-de-stad-gent"}},[t._v("Vacatures")])]),a("li",[a("a",{attrs:{href:"https://stad.gent/over-gent-en-het-stadsbestuur/over-gent/kaarten-cijfers-en-data/gent-kaart/stadsplan"}},[t._v("Stadsplan")])]),a("li",[a("a",{attrs:{href:"https://persruimte.stad.gent/"}},[t._v("Persruimte Stad Gent")])]),a("li",[a("a",{attrs:{href:"https://stad.gent/over-gent-en-het-stadsbestuur/vragen-suggesties-en-meldingen/juridische-info"}},[t._v("Juridische info")])]),a("li",[a("a",{attrs:{href:"https://stad.gent/over-gent-en-het-stadsbestuur/vragen-suggesties-en-meldingen/met-respect-voor-uw-privacy"}},[t._v("Privacy")])])])])}],M={},Q=Object(u["a"])(M,G,Y,!1,null,null,null);Q.options.__file="city-links.vue";var B=Q.exports,H=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},N=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"dg-block-post-address"},[a("h2",[t._v("Postadres")]),a("address",[t._v("\n    Stad Gent"),a("br"),t._v("\n    Botermarkt 1"),a("br"),t._v("\n    9000 Gent\n  ")])])}],z={},I=Object(u["a"])(z,H,N,!1,null,null,null);I.options.__file="post-address.vue";var J=I.exports,X=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},V=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"dg-blocks-social"},[a("span",[t._v("Volg Stad Gent op sociale media")]),a("div",{staticClass:"social-list"},[a("ul",{},[a("li",[a("a",{attrs:{href:"https://www.facebook.com/stadsbestuurgent"}},[a("i",{staticClass:"icon-facebook",attrs:{"aria-hidden":"true"}}),a("span",{staticClass:"visually-hidden"},[t._v("Facebook")])])]),a("li",[a("a",{attrs:{href:"https://www.twitter.com/stadgent"}},[a("i",{staticClass:"icon-twitter",attrs:{"aria-hidden":"true"}}),a("span",{staticClass:"visually-hidden"},[t._v("Twitter")])])]),a("li",[a("a",{attrs:{href:"https://www.linkedin.com/company/stad-gent"}},[a("i",{staticClass:"icon-linkedin",attrs:{"aria-hidden":"true"}}),a("span",{staticClass:"visually-hidden"},[t._v("LinkedIn")])])]),a("li",[a("a",{attrs:{href:"https://www.youtube.com/channel/UCmJLf8SFG0D0GTd6LSSTQLw"}},[a("i",{staticClass:"icon-youtube",attrs:{"aria-hidden":"true"}}),a("span",{staticClass:"visually-hidden"},[t._v("Youtube")])])]),a("li",[a("a",{attrs:{href:"https://www.instagram.com/stadgent/"}},[a("i",{staticClass:"icon-instagram",attrs:{"aria-hidden":"true"}}),a("span",{staticClass:"visually-hidden"},[t._v("Instagram")])])])])])])}],U={},K=Object(u["a"])(U,X,V,!1,null,null,null);K.options.__file="social-media.vue";var W=K.exports,Z=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},tt=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"db-block-partnership"},[a("p",{},[t._v("In samenwerking met Digipolis")]),a("i",{staticClass:"icon-digipolis",attrs:{"aria-hidden":"true"}})])}],et={},at=Object(u["a"])(et,Z,tt,!1,null,null,null);at.options.__file="partnership.vue";var nt=at.exports,st={components:{"gent-info":F,"city-links":B,"post-address":J,partnership:nt,"social-media":W}},rt=st,it=Object(u["a"])(rt,T,P,!1,null,null,null);it.options.__file="footer.vue";var ot=it.exports,ct=a("2f62"),lt=(a("9299"),{name:"App",components:{"v-header":D,"v-footer":ot},computed:Object(ct["b"])(["a11yMessage"])}),ut=lt,dt=(a("034f"),Object(u["a"])(ut,s,r,!1,null,null,null));dt.options.__file="App.vue";var ft=dt.exports,mt=a("8c4f"),pt=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},vt=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{staticClass:"detail-layout"},[a("h1",[t._v("Home")]),a("p",[t._v("\n        Deze pagina's bieden een overzicht van de open datasets van Stad Gent die als Linked Open Data zijn\n        gepubliceerd\n        (en geraadpleegd kunnen worden via het "),a("a",{attrs:{href:"https://stad.gent/sparql"}},[t._v("Virtuoso SPARQL endpoint van Stad\n        Gent")]),t._v(").\n        Linked Open Data omvat gestructureerde informatie in een formaat dat bestemd is voor machines en dus niet\n        noodzakelijk makkelijk leesbaar voor mensen.\n    ")]),a("div",{staticClass:"cta-block box-left link"},[a("div",{staticClass:"inner-box"},[a("h2",[t._v("Open Data Portaal")]),a("p",[t._v("Ga naar het "),a("a",{attrs:{href:"https://data.stad.gent/"}},[t._v("Stad Gent Open Data Portaal")]),t._v(" om deze datasets te\n                filteren op o.a. trefwoord en categorie. U vindt op het Open Data Portaal een overzicht van alle\n                open data die Stad Gent ter beschikking stelt, bijv. ook open data die in een csv- of kml-formaat\n                gepubliceerd wordt.")]),a("a",{staticClass:"button button-primary",attrs:{href:"https://data.stad.gent/"}},[t._v("Open Data Portaal")])])])])}],ht={name:"home"},bt=ht,gt=Object(u["a"])(bt,pt,vt,!1,null,null,null);gt.options.__file="Home.vue";var _t=gt.exports;n["a"].use(mt["a"]);var yt=new mt["a"]({mode:"history",base:"/data/",scrollBehavior:function(){return{x:0,y:0}},routes:[{path:"/",name:"home",component:_t,meta:{menu:"Home"}},{path:"/home",redirect:"/"},{path:"/datasets",component:function(){return Promise.all([a.e("data-resource~datasets"),a.e("datasets")]).then(a.bind(null,"6835"))},meta:{menu:"Datasets",title:"Datasets"},children:[{path:"",component:function(){return Promise.all([a.e("data-resource~datasets"),a.e("datasets")]).then(a.bind(null,"d78f"))},name:"datasets_index",meta:{title:"Datasets",breadcrumb:[{name:"Home",link:"home"},{name:"Datasets"}]}},{path:":id",name:"datasets_show",component:function(){return Promise.all([a.e("data-resource~datasets"),a.e("datasets")]).then(a.bind(null,"784b"))},meta:{title:"Detail",breadcrumb:[{name:"Home",link:"home"},{name:"Datasets",link:"datasets_index"},{name:":id"}]}},{path:"index",redirect:"./"}]},{path:"/query",name:"query",component:function(){return a.e("query").then(a.bind(null,"a962"))},meta:{menu:"Query editor",title:"Query",breadcrumb:[{name:"Home",link:"home"},{name:"Query"}]}},{path:"/404",name:"404",component:function(){return a.e("notFound").then(a.bind(null,"9703"))},meta:{breadcrumb:[{name:"Home",link:"home"},{name:"404"}]}},{path:"*",component:function(){return Promise.all([a.e("data-resource~datasets"),a.e("data-resource")]).then(a.bind(null,"f7f3"))},meta:{title:"Detail"}}]}),kt=(a("96cf"),a("1da1")),wt=a("bc3a"),Ct=a.n(wt);function Et(t){return St.apply(this,arguments)}function St(){return St=Object(kt["a"])(regeneratorRuntime.mark(function t(e){var a,n,s,r;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:if(a=e.commit,!this.state.datasets.length){t.next=3;break}return t.abrupt("return");case 3:return n="PREFIX dcterm: <http://purl.org/dc/terms/>\n        PREFIX dct: <http://purl.org/dc/terms/>\n        PREFIX dcterms: <http://purl.org/dc/terms/>\n        PREFIX dcat: <http://www.w3.org/ns/dcat#>\n        SELECT ?dataset ?title ?description\n        FROM <http://stad.gent/dcat/linked-data/>\n        WHERE { ?dataset a dcat:Dataset; dcterms:title ?title; dcterms:description ?description.} \n        ORDER BY ?title",s=new FormData,s.append("query",n),t.next=8,Ct()({method:"post",url:"https://stad.gent/sparql",data:s,config:{headers:{accept:"application/sparql-results+json"}}});case 8:r=t.sent,r=r.data.results.bindings,r.map(function(t){return t.btoa=btoa(t.dataset.value),btoa}),a("SET_DATASETS",r);case 12:case"end":return t.stop()}},t,this)})),St.apply(this,arguments)}function jt(t,e){return xt.apply(this,arguments)}function xt(){return xt=Object(kt["a"])(regeneratorRuntime.mark(function t(e,a){var n,s,r,i,o;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:if(n=e.commit,!this.state.details[a]){t.next=3;break}return t.abrupt("return");case 3:return s=Ct.a.create({transformRequest:[function(t,e){return e.common.Accept="application/sparql-results+json",t}]}),r="\n    DESCRIBE <".concat(atob(a),">\n    "),i=new FormData,i.append("query",r),t.next=9,s({method:"post",url:"https://stad.gent/sparql",data:i});case 9:o=t.sent,o=o.data.results.bindings,o.id=a,n("SET_DATASET",o);case 13:case"end":return t.stop()}},t,this)})),xt.apply(this,arguments)}n["a"].use(ct["a"]);var At=new ct["a"].Store({state:{projectName:"Linked Open Data",datasets:[],details:{},a11yMessage:null},mutations:{SET_DATASETS:function(t,e){t.datasets=e},SET_DATASET:function(t,e){t.details[e.id]=e},SET_A11YMESSAGE:function(t,e){t.a11yMessage=e}},actions:{fetchDataSets:Et,fetchDataSet:jt,setA11yMessage:function(t,e){var a=t.commit;a("SET_A11YMESSAGE",e)}}});n["a"].config.productionTip=!1,n["a"].filter("truncate",function(t,e,a){return t?t.substring(0,e||140)+(a||"..."):""}),a("36c2"),yt.beforeEach(function(t,e,a){var n;t.meta&&t.meta.title&&(n=t.meta.title),document.title=n?"".concat(n," | LOD"):"Linked Open Data",setTimeout(function(){At.dispatch("setA11yMessage","pagina ".concat(n||""," geladen"))},200),a()}),new n["a"]({router:yt,store:At,render:function(t){return t(ft)}}).$mount("#app")},"64a9":function(t,e,a){},9299:function(t,e,a){}});
//# sourceMappingURL=app.387ccdce.js.map