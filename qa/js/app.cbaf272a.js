(function(t){function e(e){for(var n,r,o=e[0],u=e[1],c=e[2],l=0,d=[];l<o.length;l++)r=o[l],Object.prototype.hasOwnProperty.call(s,r)&&s[r]&&d.push(s[r][0]),s[r]=0;for(n in u)Object.prototype.hasOwnProperty.call(u,n)&&(t[n]=u[n]);m&&m(e);while(d.length)d.shift()();return i.push.apply(i,c||[]),a()}function a(){for(var t,e=0;e<i.length;e++){for(var a=i[e],n=!0,r=1;r<a.length;r++){var o=a[r];0!==s[o]&&(n=!1)}n&&(i.splice(e--,1),t=u(u.s=a[0]))}return t}var n={},r={app:0},s={app:0},i=[];function o(t){return u.p+"js/"+({"data-resource~datasets":"data-resource~datasets","data-resource":"data-resource",datasets:"datasets",notFound:"notFound",query:"query",YASQE:"YASQE",YASR:"YASR"}[t]||t)+"."+{"data-resource~datasets":"db67ee7b","data-resource":"53e84172",datasets:"b32fb4d8",notFound:"5dd9787b",query:"af998d47",YASQE:"5255a1ce",YASR:"f025a4d2"}[t]+".js"}function u(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,u),a.l=!0,a.exports}u.e=function(t){var e=[],a={"data-resource~datasets":1,datasets:1,query:1};r[t]?e.push(r[t]):0!==r[t]&&a[t]&&e.push(r[t]=new Promise((function(e,a){for(var n="css/"+({"data-resource~datasets":"data-resource~datasets","data-resource":"data-resource",datasets:"datasets",notFound:"notFound",query:"query",YASQE:"YASQE",YASR:"YASR"}[t]||t)+"."+{"data-resource~datasets":"baece48f","data-resource":"31d6cfe0",datasets:"6b6b53db",notFound:"31d6cfe0",query:"b006cd68",YASQE:"31d6cfe0",YASR:"31d6cfe0"}[t]+".css",s=u.p+n,i=document.getElementsByTagName("link"),o=0;o<i.length;o++){var c=i[o],l=c.getAttribute("data-href")||c.getAttribute("href");if("stylesheet"===c.rel&&(l===n||l===s))return e()}var d=document.getElementsByTagName("style");for(o=0;o<d.length;o++){c=d[o],l=c.getAttribute("data-href");if(l===n||l===s)return e()}var m=document.createElement("link");m.rel="stylesheet",m.type="text/css",m.onload=e,m.onerror=function(e){var n=e&&e.target&&e.target.src||s,i=new Error("Loading CSS chunk "+t+" failed.\n("+n+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=n,delete r[t],m.parentNode.removeChild(m),a(i)},m.href=s;var f=document.getElementsByTagName("head")[0];f.appendChild(m)})).then((function(){r[t]=0})));var n=s[t];if(0!==n)if(n)e.push(n[2]);else{var i=new Promise((function(e,a){n=s[t]=[e,a]}));e.push(n[2]=i);var c,l=document.createElement("script");l.charset="utf-8",l.timeout=120,u.nc&&l.setAttribute("nonce",u.nc),l.src=o(t);var d=new Error;c=function(e){l.onerror=l.onload=null,clearTimeout(m);var a=s[t];if(0!==a){if(a){var n=e&&("load"===e.type?"missing":e.type),r=e&&e.target&&e.target.src;d.message="Loading chunk "+t+" failed.\n("+n+": "+r+")",d.name="ChunkLoadError",d.type=n,d.request=r,a[1](d)}s[t]=void 0}};var m=setTimeout((function(){c({type:"timeout",target:l})}),12e4);l.onerror=l.onload=c,document.head.appendChild(l)}return Promise.all(e)},u.m=t,u.c=n,u.d=function(t,e,a){u.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},u.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},u.t=function(t,e){if(1&e&&(t=u(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(u.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)u.d(a,n,function(e){return t[e]}.bind(null,n));return a},u.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return u.d(e,"a",e),e},u.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},u.p="data/",u.oe=function(t){throw console.error(t),t};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],l=c.push.bind(c);c.push=e,c=c.slice();for(var d=0;d<c.length;d++)e(c[d]);var m=l;i.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"56d7":function(t,e,a){"use strict";a.r(e);a("4de4"),a("e6cf"),a("cca6"),a("e260");var n=a("2b0e"),r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container"},[a("a",{staticClass:"skiplink",attrs:{href:"#main"}},[t._v("Overslaan en naar de inhoud gaan")]),a("v-header"),a("main",{staticClass:"content-container",attrs:{id:"main"}},[a("transition",{attrs:{name:"fade",mode:"out-in"}},[a("router-view")],1)],1),a("v-footer"),a("div",{staticClass:"visually-hidden",attrs:{role:"status","aria-atomic":"true","aria-live":"polite"}},[t._v(t._s(t.a11yMessage))])],1)},s=[],i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("header",{staticClass:"header header--menu"},[a("div",{staticClass:"content-container"},[a("logo"),a("v-menu")],1),a("div",{staticClass:"site-name"},[t._v(" "+t._s(t.$store.state.projectName)+" ")]),a("breadcrumbs"),a("hr")],1)},o=[],u=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("router-link",{staticClass:"site-logo subsite",attrs:{to:"/",title:"Home",rel:"home"}},[t._v(" "+t._s(t.$store.state.projectName)+" ")])},c=[],l=a("2877"),d={},m=Object(l["a"])(d,u,c,!1,null,null,null),f=m.exports,p=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("transition",{attrs:{name:"fade",mode:"out-in"}},[t.crumbs&&t.crumbs.length?a("nav",{staticClass:"breadcrumb section--default",attrs:{"aria-labelledby":"system-breadcrumb"}},[a("div",{staticClass:"content-container"},[a("h2",{staticClass:"visually-hidden",attrs:{id:"system-breadcrumb"}},[t._v("Breadcrumb")]),a("ol",{staticClass:"breadcrumb no-style"},[a("transition-group",{attrs:{name:"fade",mode:"out-in"}},t._l(t.crumbs,(function(e,n){return a("li",{key:"crumb-"+n},[e.link?a("router-link",{attrs:{to:{name:e.link}}},[t._v(t._s(e.name))]):a("span",[t._v(t._s(e.name))])],1)})),0)],1)])]):t._e()])},h=[],v={data:function(){return{crumbs:[]}},watch:{$route:function(){this.updateCrumbs()}},mounted:function(){this.updateCrumbs()},methods:{updateCrumbs:function(){this.crumbs=this.$route.meta?this.$route.meta.breadcrumb:[]}}},b=v,g=Object(l["a"])(b,p,h,!1,null,null,null),_=g.exports,y=function(){var t=this,e=t.$createElement,a=t._self._c||e;return t.routes?a("nav",{staticClass:"menu"},[a("button",{staticClass:"toggle modal-trigger",attrs:{type:"button","aria-expanded":"false","aria-controls":"menu"}},[t._v("menu")]),a("ul",t._l(t.routes,(function(e,n){return a("li",{key:n},[a("router-link",{attrs:{to:e,"active-class":"active",exact:""===e.path||"/"===e.path}},[t._v(" "+t._s(e.meta.menu)+" ")])],1)})),0),a("div",{ref:"modal",staticClass:"modal has-custom-binding menu",attrs:{id:"menu",role:"dialog","aria-modal":"true",tabindex:"-1"}},[a("div",{staticClass:"modal-inner"},[t._m(0),a("div",{staticClass:"modal-content"},[a("div",{staticClass:"header"},[a("router-link",{staticClass:"site-logo",attrs:{to:"/",title:"Home",rel:"home"}})],1),a("div",{staticClass:"menu-links"},[a("ul",t._l(t.routes,(function(e,n){return a("li",{key:n},[a("router-link",{staticClass:"modal-close",attrs:{to:e,"active-class":"active",exact:""===e.path||"/"===e.path}},[t._v(" "+t._s(e.meta.menu)+" ")])],1)})),0)])])]),a("div",{staticClass:"modal-overlay modal-close",attrs:{"data-target":"menu",tabindex:"-1"}})])]):t._e()},E=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"modal-header"},[a("button",{staticClass:"button close icon-cross modal-close",attrs:{type:"button","data-target":"menu"}},[a("span",[t._v("sluiten")])])])}],C=a("526b"),w=a.n(C),k={data:function(){return{menu:null}},computed:{routes:function(){return this.$router.options.routes.filter((function(t){return t.meta&&t.meta.menu}))||[]}},mounted:function(){this.menu=new w.a(this.$refs.modal,{changeHash:!1})}},S=k,j=Object(l["a"])(S,y,E,!1,null,null,null),O=j.exports,x={components:{logo:f,breadcrumbs:_,"v-menu":O}},A=x,D=Object(l["a"])(A,i,o,!1,null,null,null),R=D.exports,T=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("footer",{staticClass:"footer"},[a("h2",{staticClass:"visually-hidden"},[t._v("Footer")]),a("div",{staticClass:"footer-top"},[a("div",{staticClass:"content-container"},[a("div",{staticClass:"footer--column"},[a("gent-info")],1),a("div",{staticClass:"footer--column"},[a("city-links")],1),a("div",{staticClass:"footer--column"},[a("post-address")],1)])]),a("div",{staticClass:"footer-bottom content-container"},[a("div",{staticClass:"footer--column"},[a("partnership")],1),a("div",{staticClass:"footer--column"},[a("social-media")],1)])])},q=[],P=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},$=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"gentinfo-block"},[n("div",{staticClass:"gentinfo-block-content"},[n("h2",{staticClass:"visually-hidden"},[t._v("Gentinfo")]),n("figure",{staticClass:"gentinfo-logo"},[n("img",{staticClass:"gentinfo-logo",attrs:{src:a("02db"),alt:"Gentinfo"}})]),n("p",{},[t._v("Bereikbaar van maandag t.e.m. zaterdag van 8:00 tot 19:00 uur.")]),n("ul",{staticClass:"icon-list"},[n("li",[n("i",{staticClass:"icon-phone",attrs:{"aria-hidden":"true"}}),n("a",{attrs:{href:"tel:09 210 10 10",alt:"Gentinfo tel link"}},[t._v("09 210 10 10")])]),n("li",[n("i",{staticClass:"icon-envelope",attrs:{"aria-hidden":"true"}}),n("a",{attrs:{href:"mailto:gentinfo@stad.gent",alt:"Gentinfo mail link"}},[t._v("Gentinfo@stad.gent")])]),n("li",[n("i",{staticClass:"icon-document",attrs:{"aria-hidden":"true"}}),n("a",{attrs:{href:"https://stad.gent/contact",alt:"Contact form"}},[t._v("Contactformulier")])])])])])}],I={},F=Object(l["a"])(I,P,$,!1,null,null,null),G=F.exports,L=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},Y=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"dg-block-disclaimer"},[a("h2",[t._v("Nuttige links")]),a("ul",[a("li",[a("a",{attrs:{href:"https://stad.gent/werken-ondernemen/werken/vacatures-jobs-zoeken-en-solliciteren-bij-de-stad-gent"}},[t._v("Vacatures")])]),a("li",[a("a",{attrs:{href:"https://stad.gent/over-gent-en-het-stadsbestuur/over-gent/kaarten-cijfers-en-data/gent-kaart/stadsplan"}},[t._v("Stadsplan")])]),a("li",[a("a",{attrs:{href:"https://persruimte.stad.gent/"}},[t._v("Persruimte Stad Gent")])]),a("li",[a("a",{attrs:{href:"https://stad.gent/over-gent-en-het-stadsbestuur/vragen-suggesties-en-meldingen/juridische-info"}},[t._v("Juridische info")])]),a("li",[a("a",{attrs:{href:"https://stad.gent/over-gent-en-het-stadsbestuur/vragen-suggesties-en-meldingen/met-respect-voor-uw-privacy"}},[t._v("Privacy")])])])])}],N={},B=Object(l["a"])(N,L,Y,!1,null,null,null),H=B.exports,M=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},Q=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"dg-block-post-address"},[a("h2",[t._v("Postadres")]),a("address",[t._v(" Stad Gent"),a("br"),t._v(" Botermarkt 1"),a("br"),t._v(" 9000 Gent ")])])}],z={},U=Object(l["a"])(z,M,Q,!1,null,null,null),J=U.exports,X=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},V=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"dg-blocks-social"},[a("span",[t._v("Volg Stad Gent op sociale media")]),a("div",{staticClass:"social-list"},[a("ul",{},[a("li",[a("a",{attrs:{href:"https://www.facebook.com/stadsbestuurgent"}},[a("i",{staticClass:"icon-facebook",attrs:{"aria-hidden":"true"}}),a("span",{staticClass:"visually-hidden"},[t._v("Facebook")])])]),a("li",[a("a",{attrs:{href:"https://www.twitter.com/stadgent"}},[a("i",{staticClass:"icon-twitter",attrs:{"aria-hidden":"true"}}),a("span",{staticClass:"visually-hidden"},[t._v("Twitter")])])]),a("li",[a("a",{attrs:{href:"https://www.linkedin.com/company/stad-gent"}},[a("i",{staticClass:"icon-linkedin",attrs:{"aria-hidden":"true"}}),a("span",{staticClass:"visually-hidden"},[t._v("LinkedIn")])])]),a("li",[a("a",{attrs:{href:"https://www.youtube.com/channel/UCmJLf8SFG0D0GTd6LSSTQLw"}},[a("i",{staticClass:"icon-youtube",attrs:{"aria-hidden":"true"}}),a("span",{staticClass:"visually-hidden"},[t._v("Youtube")])])]),a("li",[a("a",{attrs:{href:"https://www.instagram.com/stadgent/"}},[a("i",{staticClass:"icon-instagram",attrs:{"aria-hidden":"true"}}),a("span",{staticClass:"visually-hidden"},[t._v("Instagram")])])])])])])}],W={},K=Object(l["a"])(W,X,V,!1,null,null,null),Z=K.exports,tt=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},et=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"db-block-partnership"},[a("p",{},[t._v("In samenwerking met Digipolis")]),a("i",{staticClass:"icon-digipolis",attrs:{"aria-hidden":"true"}})])}],at={},nt=Object(l["a"])(at,tt,et,!1,null,null,null),rt=nt.exports,st={components:{"gent-info":G,"city-links":H,"post-address":J,partnership:rt,"social-media":Z}},it=st,ot=Object(l["a"])(it,T,q,!1,null,null,null),ut=ot.exports,ct=a("2f62"),lt=(a("9299"),{name:"App",components:{"v-header":R,"v-footer":ut},computed:Object(ct["d"])(["a11yMessage"])}),dt=lt,mt=Object(l["a"])(dt,r,s,!1,null,null,null),ft=mt.exports,pt=(a("d3b7"),a("8c4f")),ht=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},vt=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{staticClass:"detail-layout"},[a("h1",[t._v("Home")]),a("p",[t._v(" Deze pagina's bieden een overzicht van de open datasets van Stad Gent die als Linked Open Data zijn gepubliceerd (en geraadpleegd kunnen worden via het "),a("a",{attrs:{href:"https://stad.gent/sparql"}},[t._v("Virtuoso SPARQL endpoint van Stad Gent")]),t._v("). Linked Open Data omvat gestructureerde informatie in een formaat dat bestemd is voor machines en dus niet noodzakelijk makkelijk leesbaar voor mensen. ")]),a("div",{staticClass:"cta-block highlight highlight--left link"},[a("div",{staticClass:"highlight__inner"},[a("h2",[t._v("Open Data Portaal")]),a("p",[t._v("Ga naar het "),a("a",{attrs:{href:"https://data.stad.gent/"}},[t._v("Stad Gent Open Data Portaal")]),t._v(" om deze datasets te filteren op o.a. trefwoord en categorie. U vindt op het Open Data Portaal een overzicht van alle open data die Stad Gent ter beschikking stelt, bijv. ook open data die in een csv- of kml-formaat gepubliceerd wordt.")]),a("div",{staticClass:"links"},[a("a",{staticClass:"button button-primary",attrs:{href:"https://data.stad.gent/"}},[t._v("Open Data Portaal")])])])])])}],bt={name:"home"},gt=bt,_t=Object(l["a"])(gt,ht,vt,!1,null,null,null),yt=_t.exports;n["a"].use(pt["a"]);var Et=new pt["a"]({mode:"history",base:"data/",scrollBehavior:function(){return{x:0,y:0}},routes:[{path:"/",name:"home",component:yt,meta:{menu:"Home"}},{path:"/home",redirect:"/"},{path:"/datasets",component:function(){return Promise.all([a.e("data-resource~datasets"),a.e("datasets")]).then(a.bind(null,"6835"))},meta:{menu:"Datasets",title:"Datasets"},children:[{path:"",component:function(){return Promise.all([a.e("data-resource~datasets"),a.e("datasets")]).then(a.bind(null,"d78f"))},name:"datasets_index",meta:{title:"Datasets",breadcrumb:[{name:"Home",link:"home"},{name:"Datasets"}]}},{path:":id",name:"datasets_show",component:function(){return Promise.all([a.e("data-resource~datasets"),a.e("datasets")]).then(a.bind(null,"784b"))},meta:{title:"Detail",breadcrumb:[{name:"Home",link:"home"},{name:"Datasets",link:"datasets_index"},{name:":id"}]}},{path:"index",redirect:"./"}]},{path:"/query",name:"query",component:function(){return a.e("query").then(a.bind(null,"a962"))},meta:{menu:"Query editor",title:"Query",breadcrumb:[{name:"Home",link:"home"},{name:"Query"}]}},{path:"/404",name:"404",component:function(){return a.e("notFound").then(a.bind(null,"9703"))},meta:{breadcrumb:[{name:"Home",link:"home"},{name:"404"}]}},{path:"*",component:function(){return Promise.all([a.e("data-resource~datasets"),a.e("data-resource")]).then(a.bind(null,"f7f3"))},meta:{title:"Detail"}}]}),Ct=(a("7db0"),a("d81d"),a("bfa9")),wt=(a("96cf"),a("1da1")),kt=a("bc3a"),St=a.n(kt);function jt(t){return Ot.apply(this,arguments)}function Ot(){return Ot=Object(wt["a"])(regeneratorRuntime.mark((function t(e){var a,n,r,s;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(a=e.commit,!this.state.datasets.length){t.next=3;break}return t.abrupt("return");case 3:return n="PREFIX dcterm: <http://purl.org/dc/terms/>\n        PREFIX dct: <http://purl.org/dc/terms/>\n        PREFIX dcterms: <http://purl.org/dc/terms/>\n        PREFIX dcat: <http://www.w3.org/ns/dcat#>\n        SELECT ?dataset ?title ?description\n        FROM <http://stad.gent/dcat/linked-data/>\n        WHERE { ?dataset a dcat:Dataset; dcterms:title ?title; dcterms:description ?description.} \n        ORDER BY ?title",r=new FormData,r.append("query",n),t.next=8,St()({method:"post",url:"https://qa.stad.gent/sparql",data:r,config:{headers:{accept:"application/sparql-results+json"}}});case 8:s=t.sent,s=s.data.results.bindings,s.map((function(t){return t.btoa=btoa(t.dataset.value),btoa})),a("SET_DATASETS",s);case 12:case"end":return t.stop()}}),t,this)}))),Ot.apply(this,arguments)}var xt=a("6f22");function At(t,e){return Dt.apply(this,arguments)}function Dt(){return Dt=Object(wt["a"])(regeneratorRuntime.mark((function t(e,a){var n,r,s,i,o,u,c,l;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(s=e.commit,i=e.getters,i.lastId!==atob(a)){t.next=3;break}return t.abrupt("return");case 3:return o="\n    DESCRIBE <".concat(atob(a),">\n    "),u=new FormData,u.append("query",o),t.next=8,Object(xt["c"])({method:"post",url:"https://qa.stad.gent/sparql",data:u});case 8:if(c=t.sent,l=null===c||void 0===c||null===(n=c.data)||void 0===n||null===(r=n.results)||void 0===r?void 0:r.bindings,l){t.next=12;break}throw new Error("404");case 12:return t.next=14,s("SET_DATASET",{id:"".concat(atob(a)),bindings:l});case 14:case"end":return t.stop()}}),t)}))),Dt.apply(this,arguments)}a("99af");function Rt(t,e){return Tt.apply(this,arguments)}function Tt(){return Tt=Object(wt["a"])(regeneratorRuntime.mark((function t(e,a){var n,r,s,i,o,u,c,l;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(s=e.commit,i=e.getters,i.lastId!=="https://".concat("qa.","stad.gent/id").concat(a)){t.next=3;break}return t.abrupt("return");case 3:return o="\n    DESCRIBE <http://".concat("qa.","stad.gent/id").concat(a,"> <https://").concat("qa.","stad.gent/id").concat(a,">\n    "),u=new FormData,u.append("query",o),t.next=8,Object(xt["c"])({method:"post",url:"https://qa.stad.gent/sparql",data:u});case 8:if(c=t.sent,l=null===c||void 0===c||null===(n=c.data)||void 0===n||null===(r=n.results)||void 0===r?void 0:r.bindings,l){t.next=12;break}throw new Error("404");case 12:return t.next=14,s("SET_DATASET",{id:"https://".concat("qa.","stad.gent/id").concat(a),bindings:l});case 14:case"end":return t.stop()}}),t)}))),Tt.apply(this,arguments)}a("4160"),a("159b");var qt=a("2909");function Pt(t,e){return $t.apply(this,arguments)}function $t(){return $t=Object(wt["a"])(regeneratorRuntime.mark((function t(e,a){var n,r,s,i,o,u,c,l,d,m,f,p;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return s=e.commit,i=e.state,o=a.id,u=a.dataset,c="\n    SELECT ?pijl ?pijlInAndereRichting ?naar\n    WHERE {\n        {   <".concat(o,"> \n            ?pijl \n            ?naar \n            FILTER (isIRI(?naar) && ?pijl != <http://www.w3.org/2000/01/rdf-schema#isDefinedBy>) \n        }\n        UNION \n        { \n            ?naar ?pijlAndereRichting <").concat(o,"uri>\n        }\n    } \n    "),l=new FormData,l.append("query",c),t.next=7,Object(xt["c"])({method:"post",url:"https://qa.stad.gent/sparql",data:l});case 7:if(d=t.sent,m=null===d||void 0===d||null===(n=d.data)||void 0===n||null===(r=n.results)||void 0===r?void 0:r.bindings,m){t.next=11;break}return t.abrupt("return");case 11:return f=Object(qt["a"])(i.nodes),f.find((function(t){return t.id===o}))||f.push({id:o,label:Object(xt["b"])(u)}),m.forEach((function(t){var e=t.naar;f.find((function(t){return t.id===e.value}))||f.push({id:e.value,label:Object(xt["a"])(e.value)})})),p=Object(qt["a"])(i.edges),m.forEach((function(t){var e=t.naar,a=t.pijl,n=t.pijlAndereRichting;p.find((function(t){var a=t.from,n=t.to;return a===o&&n===e.value}))||p.push({from:o,to:e.value,label:Object(xt["a"])(a?a.value:n.value),arrows:a&&a.value?"to":"from"})})),t.next=18,s("SET_NODES",f);case 18:return t.next=20,s("SET_EDGES",p);case 20:case"end":return t.stop()}}),t)}))),$t.apply(this,arguments)}n["a"].use(ct["a"]);var It=new Ct["a"]({storage:window.localStorage,reducer:function(t){var e=t.visited,a=t.nodes,n=t.edges;return{visited:e,nodes:a,edges:n}}}),Ft=new ct["a"].Store({plugins:[It.plugin],state:{projectName:"Linked Open Data",datasets:[],visited:[],nodes:[],edges:[],a11yMessage:null},getters:{ids:function(t){return t.visited.map((function(t){return t.id}))},last:function(t){return t.visited[t.visited.length-1]},lastId:function(t,e){var a;return null===(a=e.last)||void 0===a?void 0:a.id},getSetById:function(t){return function(e){return t.visited.find((function(t){return t.id===e}))}},getSetByIndex:function(t){return function(e){return t.visited[e]}}},mutations:{SET_DATASETS:function(t,e){t.datasets=e},SET_DATASET:function(t,e){t.visited.push(e)},SET_A11YMESSAGE:function(t,e){t.a11yMessage=e},SET_NODES:function(t,e){t.nodes=e},SET_EDGES:function(t,e){t.edges=e},CLEAR_GRAPH:function(t){t.nodes=[],t.edges=[],t.visited=[]}},actions:{fetchDataSets:jt,fetchDataSet:At,fetchResource:Rt,fetchRelatedSubjects:Pt,setA11yMessage:function(t,e){var a=t.commit;a("SET_A11YMESSAGE",e)}}}),Gt=a("a584");n["a"].config.productionTip=!1,n["a"].use(Gt["a"],{config:{id:"UA-791237-65"}},Et),n["a"].filter("truncate",(function(t,e,a){return t?t.substring(0,e||140)+(a||"..."):""})),Et.beforeEach((function(t,e,a){var n;t.meta&&t.meta.title&&(n=t.meta.title),document.title=n?"".concat(n," | LOD"):"Linked Open Data",setTimeout((function(){Ft.dispatch("setA11yMessage","pagina ".concat(n||""," geladen"))}),200),a()})),new n["a"]({router:Et,store:Ft,render:function(t){return t(ft)}}).$mount("#app")},"6f22":function(t,e,a){"use strict";a.d(e,"c",(function(){return s})),a.d(e,"b",(function(){return i})),a.d(e,"a",(function(){return o}));a("baa5");var n=a("bc3a"),r=a.n(n),s=r.a.create({transformRequest:[function(t,e){return e.common.Accept="application/sparql-results+json",t}]});function i(t){for(var e=["prefLabel","label","title","name","firstName"],a=0;a<e.length;a++)if(t[e[a]])return t[e[a]][0].o.value;return"detail view"}function o(t){return t.substr((t.lastIndexOf("#")>-1?t.lastIndexOf("#"):t.lastIndexOf("/"))+1)}},9299:function(t,e,a){}});
//# sourceMappingURL=app.cbaf272a.js.map