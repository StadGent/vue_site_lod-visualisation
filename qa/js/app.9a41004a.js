(function(t){function e(e){for(var n,r,o=e[0],c=e[1],u=e[2],l=0,d=[];l<o.length;l++)r=o[l],Object.prototype.hasOwnProperty.call(s,r)&&s[r]&&d.push(s[r][0]),s[r]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(t[n]=c[n]);m&&m(e);while(d.length)d.shift()();return i.push.apply(i,u||[]),a()}function a(){for(var t,e=0;e<i.length;e++){for(var a=i[e],n=!0,r=1;r<a.length;r++){var o=a[r];0!==s[o]&&(n=!1)}n&&(i.splice(e--,1),t=c(c.s=a[0]))}return t}var n={},r={app:0},s={app:0},i=[];function o(t){return c.p+"js/"+({"data-resource~datasets":"data-resource~datasets","data-resource":"data-resource",datasets:"datasets",notFound:"notFound",query:"query",YASQE:"YASQE",YASR:"YASR"}[t]||t)+"."+{"data-resource~datasets":"9793c457","data-resource":"f2941504",datasets:"75cca47d",notFound:"44565aca",query:"7c8ffdd6",YASQE:"5255a1ce",YASR:"f025a4d2"}[t]+".js"}function c(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,c),a.l=!0,a.exports}c.e=function(t){var e=[],a={"data-resource~datasets":1,datasets:1,query:1};r[t]?e.push(r[t]):0!==r[t]&&a[t]&&e.push(r[t]=new Promise((function(e,a){for(var n="css/"+({"data-resource~datasets":"data-resource~datasets","data-resource":"data-resource",datasets:"datasets",notFound:"notFound",query:"query",YASQE:"YASQE",YASR:"YASR"}[t]||t)+"."+{"data-resource~datasets":"98375abe","data-resource":"31d6cfe0",datasets:"6b6b53db",notFound:"31d6cfe0",query:"66361cc0",YASQE:"31d6cfe0",YASR:"31d6cfe0"}[t]+".css",s=c.p+n,i=document.getElementsByTagName("link"),o=0;o<i.length;o++){var u=i[o],l=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(l===n||l===s))return e()}var d=document.getElementsByTagName("style");for(o=0;o<d.length;o++){u=d[o],l=u.getAttribute("data-href");if(l===n||l===s)return e()}var m=document.createElement("link");m.rel="stylesheet",m.type="text/css",m.onload=e,m.onerror=function(e){var n=e&&e.target&&e.target.src||s,i=new Error("Loading CSS chunk "+t+" failed.\n("+n+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=n,delete r[t],m.parentNode.removeChild(m),a(i)},m.href=s;var f=document.getElementsByTagName("head")[0];f.appendChild(m)})).then((function(){r[t]=0})));var n=s[t];if(0!==n)if(n)e.push(n[2]);else{var i=new Promise((function(e,a){n=s[t]=[e,a]}));e.push(n[2]=i);var u,l=document.createElement("script");l.charset="utf-8",l.timeout=120,c.nc&&l.setAttribute("nonce",c.nc),l.src=o(t);var d=new Error;u=function(e){l.onerror=l.onload=null,clearTimeout(m);var a=s[t];if(0!==a){if(a){var n=e&&("load"===e.type?"missing":e.type),r=e&&e.target&&e.target.src;d.message="Loading chunk "+t+" failed.\n("+n+": "+r+")",d.name="ChunkLoadError",d.type=n,d.request=r,a[1](d)}s[t]=void 0}};var m=setTimeout((function(){u({type:"timeout",target:l})}),12e4);l.onerror=l.onload=u,document.head.appendChild(l)}return Promise.all(e)},c.m=t,c.c=n,c.d=function(t,e,a){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(c.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)c.d(a,n,function(e){return t[e]}.bind(null,n));return a},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="/data/",c.oe=function(t){throw console.error(t),t};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=e,u=u.slice();for(var d=0;d<u.length;d++)e(u[d]);var m=l;i.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"56d7":function(t,e,a){"use strict";a.r(e);a("4de4"),a("e6cf"),a("cca6"),a("e260");var n=a("2b0e"),r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container"},[a("a",{staticClass:"skiplink",attrs:{href:"#main"}},[t._v("Overslaan en naar de inhoud gaan")]),a("v-header"),a("main",{staticClass:"content-container",attrs:{id:"main"}},[a("transition",{attrs:{name:"fade",mode:"out-in"}},[a("router-view")],1)],1),a("v-footer"),a("div",{staticClass:"visually-hidden",attrs:{role:"status","aria-atomic":"true","aria-live":"polite"}},[t._v(t._s(t.a11yMessage))])],1)},s=[],i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("header",{staticClass:"header header--menu"},[a("div",{staticClass:"content-container"},[a("logo"),a("v-menu")],1),a("div",{staticClass:"site-name"},[t._v(" "+t._s(t.$store.state.projectName)+" ")]),a("breadcrumbs"),a("hr")],1)},o=[],c=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("router-link",{staticClass:"site-logo subsite",attrs:{to:"/",title:"Home",rel:"home"}},[t._v(" "+t._s(t.$store.state.projectName)+" ")])},u=[],l=a("2877"),d={},m=Object(l["a"])(d,c,u,!1,null,null,null),f=m.exports,p=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("transition",{attrs:{name:"fade",mode:"out-in"}},[t.crumbs&&t.crumbs.length?a("nav",{staticClass:"breadcrumb section--default",attrs:{"aria-labelledby":"system-breadcrumb"}},[a("div",{staticClass:"content-container"},[a("h2",{staticClass:"visually-hidden",attrs:{id:"system-breadcrumb"}},[t._v("Breadcrumb")]),a("ol",{staticClass:"breadcrumb no-style"},t._l(t.crumbs,(function(e,n){return a("li",{key:"crumb-"+n},[e.link?a("router-link",{attrs:{to:{name:e.link}}},[t._v(t._s(e.name))]):a("span",[t._v(t._s(e.name))])],1)})),0)])]):t._e()])},h=[],v={data:function(){return{crumbs:[]}},watch:{$route:function(){this.updateCrumbs()}},mounted:function(){this.updateCrumbs()},methods:{updateCrumbs:function(){this.crumbs=this.$route.meta?this.$route.meta.breadcrumb:[]}}},b=v,g=Object(l["a"])(b,p,h,!1,null,null,null),_=g.exports,E=function(){var t=this,e=t.$createElement,a=t._self._c||e;return t.routes?a("nav",{staticClass:"menu"},[a("button",{staticClass:"toggle modal-trigger",attrs:{type:"button","aria-expanded":"false","aria-controls":"menu"}},[t._v("menu")]),a("ul",t._l(t.routes,(function(e,n){return a("li",{key:n},[a("router-link",{attrs:{to:e,"active-class":"active",exact:""===e.path||"/"===e.path}},[t._v(" "+t._s(e.meta.menu)+" ")])],1)})),0),a("div",{ref:"modal",staticClass:"modal has-custom-binding menu",attrs:{id:"menu",role:"dialog","aria-modal":"true",tabindex:"-1"}},[a("div",{staticClass:"modal-inner"},[t._m(0),a("div",{staticClass:"modal-content"},[a("div",{staticClass:"header"},[a("router-link",{staticClass:"site-logo",attrs:{to:"/",title:"Home",rel:"home"}})],1),a("div",{staticClass:"menu-links"},[a("ul",t._l(t.routes,(function(e,n){return a("li",{key:n},[a("router-link",{staticClass:"modal-close",attrs:{to:e,"active-class":"active",exact:""===e.path||"/"===e.path}},[t._v(" "+t._s(e.meta.menu)+" ")])],1)})),0)])])]),a("div",{staticClass:"modal-overlay modal-close",attrs:{"data-target":"menu",tabindex:"-1"}})])]):t._e()},y=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"modal-header"},[a("button",{staticClass:"button close icon-cross modal-close",attrs:{type:"button","data-target":"menu"}},[a("span",[t._v("sluiten")])])])}],k=a("526b"),w=a.n(k),C={data:function(){return{menu:null}},computed:{routes:function(){return this.$router.options.routes.filter((function(t){return t.meta&&t.meta.menu}))||[]}},mounted:function(){this.menu=new w.a(this.$refs.modal,{changeHash:!1})}},S=C,j=Object(l["a"])(S,E,y,!1,null,null,null),x=j.exports,O={components:{logo:f,breadcrumbs:_,"v-menu":x}},A=O,D=Object(l["a"])(A,i,o,!1,null,null,null),T=D.exports,R=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("footer",{staticClass:"footer"},[a("h2",{staticClass:"visually-hidden"},[t._v("Footer")]),a("div",{staticClass:"footer-top"},[a("div",{staticClass:"content-container"},[a("gent-info"),a("city-links"),a("social-media")],1)]),a("div",{staticClass:"footer-bottom content-container"},[t._m(0),a("partnership")],1)])},q=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"footer--column"},[a("ul",{},[a("li",[a("a",{attrs:{href:"https://stad.gent/nl/over-gent-en-het-stadsbestuur/juridische-info/gebruiksvoorwaarden-website-stad-gent"}},[t._v("Gebruiksvoorwaarden")])]),a("li",[a("a",{attrs:{href:"https://stad.gent/nl/over-gent-en-het-stadsbestuur/juridische-info/met-respect-voor-uw-privacy"}},[t._v("Privacy")])]),a("li",[a("a",{attrs:{href:"https://stad.gent/nl/responsible-disclosure"}},[t._v("Responsible disclosure")])]),a("li",[a("a",{attrs:{href:"https://stad.gent/nl/over-gent-en-het-stadsbestuur/juridische-info/toegankelijkheidsverklaring-stad-gent"}},[t._v("Toegankelijkheidsverklaring")])])])])}],I=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},P=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"footer--column"},[n("div",{staticClass:"gentinfo-block"},[n("div",{staticClass:"gentinfo-block-content"},[n("h3",{staticClass:"visually-hidden"},[t._v("Gentinfo")]),n("figure",{staticClass:"gentinfo-logo"},[n("img",{staticClass:"gentinfo-logo",attrs:{src:a("02db"),alt:"Gentinfo"}})]),n("p",{},[t._v("Bereikbaar van maandag tot en met zaterdag van 8 tot 19 uur.")]),n("ul",{staticClass:"icon-list"},[n("li",[n("i",{staticClass:"icon-phone",attrs:{"aria-hidden":"true"}}),n("a",{attrs:{href:"tel:092101010"}},[t._v("09 210 10 10")])]),n("li",[n("i",{staticClass:"icon-envelope",attrs:{"aria-hidden":"true"}}),n("a",{attrs:{href:"mailto:gentinfo@stad.gent"}},[t._v("Gentinfo@stad.gent")])]),n("li",[n("i",{staticClass:"icon-document",attrs:{"aria-hidden":"true"}}),n("a",{attrs:{href:"https://stad.gent/contact"}},[t._v("Contactformulier")])])])])])])}],$={},L=Object(l["a"])($,I,P,!1,null,null,null),F=L.exports,G=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},Y=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"footer--column"},[a("h3",[t._v("Nuttige links")]),a("ul",[a("li",[a("a",{attrs:{href:"https://data.stad.gent"}},[t._v("Open Data Portaal")])]),a("li",[a("a",{attrs:{href:"https://stad.gent/werken-ondernemen/werken/vacatures-jobs-zoeken-en-solliciteren-bij-de-stad-gent"}},[t._v("Vacatures")])]),a("li",[a("a",{attrs:{href:"https://stad.gent/over-gent-en-het-stadsbestuur/over-gent/kaarten-cijfers-en-data/gent-kaart/stadsplan"}},[t._v("Stadsplan")])]),a("li",[a("a",{attrs:{href:"https://persruimte.stad.gent/"}},[t._v("Persruimte Stad Gent")])])])])}],H={},N=Object(l["a"])(H,G,Y,!1,null,null,null),M=N.exports,B=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},Q=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"footer--column"},[a("h3",[t._v("Volg de stad Gent")]),a("div",{staticClass:"social-list"},[a("ul",{},[a("li",[a("a",{attrs:{href:"https://www.facebook.com/stadsbestuurgent"}},[a("i",{staticClass:"icon-facebook",attrs:{"aria-hidden":"true"}}),a("span",{staticClass:"visually-hidden"},[t._v("Facebook")])])]),a("li",[a("a",{attrs:{href:"https://www.twitter.com/stadgent"}},[a("i",{staticClass:"icon-twitter",attrs:{"aria-hidden":"true"}}),a("span",{staticClass:"visually-hidden"},[t._v("Twitter")])])]),a("li",[a("a",{attrs:{href:"https://www.linkedin.com/company/stad-gent"}},[a("i",{staticClass:"icon-linkedin",attrs:{"aria-hidden":"true"}}),a("span",{staticClass:"visually-hidden"},[t._v("LinkedIn")])])]),a("li",[a("a",{attrs:{href:"https://www.youtube.com/channel/UCmJLf8SFG0D0GTd6LSSTQLw"}},[a("i",{staticClass:"icon-youtube",attrs:{"aria-hidden":"true"}}),a("span",{staticClass:"visually-hidden"},[t._v("Youtube")])])]),a("li",[a("a",{attrs:{href:"https://www.instagram.com/stadgent/"}},[a("i",{staticClass:"icon-instagram",attrs:{"aria-hidden":"true"}}),a("span",{staticClass:"visually-hidden"},[t._v("Instagram")])])])])])])}],z={},V=Object(l["a"])(z,B,Q,!1,null,null,null),U=V.exports,X=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},J=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"footer--column partnership"},[a("span",[t._v("In samenwerking met District09")]),a("i",{staticClass:"icon-district09",attrs:{"aria-hidden":"true"}})])}],W={},K=Object(l["a"])(W,X,J,!1,null,null,null),Z=K.exports,tt={components:{"gent-info":F,"city-links":M,partnership:Z,"social-media":U}},et=tt,at=Object(l["a"])(et,R,q,!1,null,null,null),nt=at.exports,rt=a("2f62"),st=(a("9299"),{name:"App",components:{"v-header":T,"v-footer":nt},computed:Object(rt["d"])(["a11yMessage"])}),it=st,ot=Object(l["a"])(it,r,s,!1,null,null,null),ct=ot.exports,ut=(a("d3b7"),a("8c4f")),lt=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},dt=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{staticClass:"detail-layout"},[a("h1",[t._v("Home")]),a("p",[t._v(" Deze pagina's bieden een overzicht van de open datasets van Stad Gent die als Linked Open Data zijn gepubliceerd (en geraadpleegd kunnen worden via het "),a("a",{attrs:{href:"https://stad.gent/sparql"}},[t._v("Virtuoso SPARQL endpoint van Stad Gent")]),t._v("). Linked Open Data omvat gestructureerde informatie in een formaat dat bestemd is voor machines en dus niet noodzakelijk makkelijk leesbaar voor mensen. ")]),a("div",{staticClass:"cta-block highlight highlight--left link"},[a("div",{staticClass:"highlight__inner"},[a("h2",[t._v("Open Data Portaal")]),a("p",[t._v("Ga naar het "),a("a",{attrs:{href:"https://data.stad.gent/"}},[t._v("Stad Gent Open Data Portaal")]),t._v(" voor een overzicht van alle open data die Stad Gent ter beschikking stelt, bijv. ook open data die in een csv- of kml-formaat gepubliceerd wordt.")]),a("div",{staticClass:"links"},[a("a",{staticClass:"button button-primary",attrs:{href:"https://data.stad.gent/"}},[t._v("Open Data Portaal")])])])])])}],mt={name:"home"},ft=mt,pt=Object(l["a"])(ft,lt,dt,!1,null,null,null),ht=pt.exports;n["a"].use(ut["a"]);var vt=new ut["a"]({mode:"history",base:"/data/",scrollBehavior:function(){return{x:0,y:0}},routes:[{path:"/",name:"home",component:ht,meta:{menu:"Home"}},{path:"/home",redirect:"/"},{path:"/datasets",component:function(){return Promise.all([a.e("data-resource~datasets"),a.e("datasets")]).then(a.bind(null,"6835"))},meta:{menu:"Datasets",title:"Datasets"},children:[{path:"",component:function(){return Promise.all([a.e("data-resource~datasets"),a.e("datasets")]).then(a.bind(null,"d78f"))},name:"datasets_index",meta:{title:"Datasets",breadcrumb:[{name:"Home",link:"home"},{name:"Datasets"}]}},{path:":id",name:"datasets_show",component:function(){return Promise.all([a.e("data-resource~datasets"),a.e("datasets")]).then(a.bind(null,"784b"))},meta:{title:"Detail",breadcrumb:[{name:"Home",link:"home"},{name:"Datasets",link:"datasets_index"},{name:":id"}]}},{path:"index",redirect:"./"}]},{path:"/query",name:"query",component:function(){return a.e("query").then(a.bind(null,"a962"))},meta:{menu:"Query editor",title:"Query",breadcrumb:[{name:"Home",link:"home"},{name:"Query"}]}},{path:"/404",name:"404",component:function(){return a.e("notFound").then(a.bind(null,"9703"))},meta:{breadcrumb:[{name:"Home",link:"home"},{name:"404"}]}},{path:"*",component:function(){return Promise.all([a.e("data-resource~datasets"),a.e("data-resource")]).then(a.bind(null,"f7f3"))},meta:{title:"Detail"}}]}),bt=(a("7db0"),a("d81d"),a("bfa9")),gt=(a("96cf"),a("1da1")),_t=a("bc3a"),Et=a.n(_t);function yt(t){return kt.apply(this,arguments)}function kt(){return kt=Object(gt["a"])(regeneratorRuntime.mark((function t(e){var a,n,r,s;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(a=e.commit,!this.state.datasets.length){t.next=3;break}return t.abrupt("return");case 3:return n="PREFIX dcterm: <http://purl.org/dc/terms/>\n        PREFIX dct: <http://purl.org/dc/terms/>\n        PREFIX dcterms: <http://purl.org/dc/terms/>\n        PREFIX dcat: <http://www.w3.org/ns/dcat#>\n        SELECT ?dataset ?title ?description\n        FROM <http://stad.gent/dcat/linked-data/>\n        WHERE { ?dataset a dcat:Dataset; dcterms:title ?title; dcterms:description ?description.} \n        ORDER BY ?title",r=new FormData,r.append("query",n),t.next=8,Et()({method:"post",url:"https://qa.stad.gent/sparql",data:r,config:{headers:{accept:"application/sparql-results+json"}}});case 8:s=t.sent,s=s.data.results.bindings,s.map((function(t){return t.btoa=btoa(t.dataset.value),btoa})),a("SET_DATASETS",s);case 12:case"end":return t.stop()}}),t,this)}))),kt.apply(this,arguments)}var wt=a("6f22");function Ct(t,e){return St.apply(this,arguments)}function St(){return St=Object(gt["a"])(regeneratorRuntime.mark((function t(e,a){var n,r,s,i,o,c,u,l;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(s=e.commit,i=e.getters,i.lastId!==atob(a)){t.next=3;break}return t.abrupt("return");case 3:return o="\n    DESCRIBE <".concat(atob(a),">\n    "),c=new FormData,c.append("query",o),t.next=8,Object(wt["c"])({method:"post",url:"https://qa.stad.gent/sparql",data:c});case 8:if(u=t.sent,l=null===u||void 0===u||null===(n=u.data)||void 0===n||null===(r=n.results)||void 0===r?void 0:r.bindings,l){t.next=12;break}throw new Error("404");case 12:return t.next=14,s("SET_DATASET",{id:"".concat(atob(a)),bindings:l});case 14:case"end":return t.stop()}}),t)}))),St.apply(this,arguments)}a("99af");function jt(t,e){return xt.apply(this,arguments)}function xt(){return xt=Object(gt["a"])(regeneratorRuntime.mark((function t(e,a){var n,r,s,i,o,c,u,l;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(s=e.commit,i=e.getters,i.lastId!=="https://".concat("qa.","stad.gent/id").concat(a)){t.next=3;break}return t.abrupt("return");case 3:return o="\n    DESCRIBE <http://".concat("qa.","stad.gent/id").concat(a,"> <https://").concat("qa.","stad.gent/id").concat(a,">\n    "),c=new FormData,c.append("query",o),t.next=8,Object(wt["c"])({method:"post",url:"https://qa.stad.gent/sparql",data:c});case 8:if(u=t.sent,l=null===u||void 0===u||null===(n=u.data)||void 0===n||null===(r=n.results)||void 0===r?void 0:r.bindings,l){t.next=12;break}throw new Error("404");case 12:return t.next=14,s("SET_DATASET",{id:"https://".concat("qa.","stad.gent/id").concat(a),bindings:l});case 14:case"end":return t.stop()}}),t)}))),xt.apply(this,arguments)}a("4160"),a("ac1f"),a("5319"),a("159b");var Ot=a("2909");function At(t,e){return Dt.apply(this,arguments)}function Dt(){return Dt=Object(gt["a"])(regeneratorRuntime.mark((function t(e,a){var n,r,s,i,o,c,u,l,d,m,f,p;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return p=function(){var t=Object(Ot["a"])(i.edges);return m.forEach((function(e){var a=e.naar,n=e.pijl,r=e.pijlAndereRichting,s=a.value.replace(/http.?:\/\//,"");t.find((function(t){var e=t.from,a=t.to;return e===o&&a===s}))||t.push({from:o,to:s,label:Object(wt["a"])(n?n.value:r.value),arrows:n&&n.value?"to":"from"})})),t},f=function(){var t=Object(Ot["a"])(i.nodes);return t.find((function(t){return t.id===o}))||t.push({id:o.replace(/http.?:\/\//,""),label:Object(wt["b"])(c)}),m.forEach((function(e){var a=e.naar,n=a.value.replace(/http.?:\/\//,"");t.find((function(t){return t.id===n}))||t.push({id:n,label:Object(wt["a"])(a.value)})})),t},s=e.commit,i=e.state,o=a.id,c=a.dataset,u="\n    SELECT ?pijl ?pijlInAndereRichting ?naar\n    WHERE {\n        {   <".concat(o,"> \n            ?pijl \n            ?naar \n            FILTER (isIRI(?naar) && ?pijl != <http://www.w3.org/2000/01/rdf-schema#isDefinedBy>) \n        }\n        UNION \n        { \n            ?naar ?pijlAndereRichting <").concat(o,"uri>\n        }\n    } \n    "),l=new FormData,l.append("query",u),t.next=9,Object(wt["c"])({method:"post",url:"https://qa.stad.gent/sparql",data:l});case 9:if(d=t.sent,m=null===d||void 0===d||null===(n=d.data)||void 0===n||null===(r=n.results)||void 0===r?void 0:r.bindings,m){t.next=13;break}return t.abrupt("return");case 13:return o=o.replace(/http.?:\/\//,""),t.prev=14,t.next=17,s("SET_VISITED",i.last);case 17:return t.next=19,s("SET_NODES",f());case 19:return t.next=21,s("SET_EDGES",p());case 21:t.next=41;break;case 23:return t.prev=23,t.t0=t["catch"](14),t.next=27,s("CLEAR_GRAPH");case 27:return t.prev=27,t.next=30,s("SET_VISITED",i.last);case 30:return t.next=32,s("SET_NODES",f());case 32:return t.next=34,s("SET_EDGES",p());case 34:t.next=41;break;case 36:return t.prev=36,t.t1=t["catch"](27),t.next=40,s("CLEAR_GRAPH");case 40:console.error("cleared graph, but still unable to add nodes",t.t1);case 41:case"end":return t.stop()}}),t,null,[[14,23],[27,36]])}))),Dt.apply(this,arguments)}var Tt=a("a002");n["a"].use(rt["a"]);var Rt=new bt["a"]({storage:Tt,asyncStorage:!0,reducer:function(t){var e=t.visited,a=t.nodes,n=t.edges;return{visited:e,nodes:a,edges:n}}}),qt=new rt["a"].Store({plugins:[Rt.plugin],state:{projectName:"Linked Open Data",datasets:[],visited:[],nodes:[],edges:[],a11yMessage:null,last:null},getters:{ids:function(t){return t.visited.map((function(t){return t.id}))},last:function(t){return t.last},lastId:function(t){var e;return null===(e=t.last)||void 0===e?void 0:e.id},getSetById:function(t){return function(e){return t.visited.find((function(t){return t.id===e}))}},getSetByIndex:function(t){return function(e){return t.visited[e]}}},mutations:{SET_DATASETS:function(t,e){t.datasets=e},SET_DATASET:function(t,e){t.last=e},SET_A11YMESSAGE:function(t,e){t.a11yMessage=e},SET_NODES:function(t,e){t.nodes=e},SET_EDGES:function(t,e){t.edges=e},SET_VISITED:function(t,e){t.visited.push(e)},CLEAR_GRAPH:function(t){t.nodes=[],t.edges=[],t.visited=[]}},actions:{fetchDataSets:yt,fetchDataSet:Ct,fetchResource:jt,fetchRelatedSubjects:At,setA11yMessage:function(t,e){var a=t.commit;a("SET_A11YMESSAGE",e)}}}),It=a("a584");n["a"].config.productionTip=!1,n["a"].use(It["a"],{config:{id:"UA-791237-65"}},vt),n["a"].filter("truncate",(function(t,e,a){return t?t.substring(0,e||140)+(a||"..."):""})),vt.beforeEach((function(t,e,a){var n;t.meta&&t.meta.title&&(n=t.meta.title),document.title=n?"".concat(n," | LOD"):"Linked Open Data",setTimeout((function(){qt.dispatch("setA11yMessage","pagina ".concat(n||""," geladen")).catch((function(t){return console.error("unable to set a11y message",t)}))}),200),a()})),new n["a"]({router:vt,store:qt,render:function(t){return t(ct)}}).$mount("#app")},"6f22":function(t,e,a){"use strict";a.d(e,"c",(function(){return s})),a.d(e,"b",(function(){return i})),a.d(e,"a",(function(){return o}));a("baa5");var n=a("bc3a"),r=a.n(n),s=r.a.create({transformRequest:[function(t,e){return e.common.Accept="application/sparql-results+json",t}]});function i(t){for(var e=["prefLabel","label","title","name","firstName"],a=0;a<e.length;a++)if(t[e[a]])return t[e[a]][0].o.value;return"detail view"}function o(t){return t.substr((t.lastIndexOf("#")>-1?t.lastIndexOf("#"):t.lastIndexOf("/"))+1)}},9299:function(t,e,a){}});
//# sourceMappingURL=app.9a41004a.js.map