(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["query"],{"60c7":function(e,t,n){},"878c":function(e,t,n){"use strict";var r=n("60c7"),a=n.n(r);a.a},a962:function(e,t,n){"use strict";n.r(t);var r=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},a=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",{staticClass:"detail-layout"},[n("h1",[e._v("Query editor")]),n("div",{attrs:{id:"yasqe"}}),n("div",{attrs:{id:"yasr"}})])}],s=(n("96cf"),n("1da1")),u=(n("551c"),n("f751"),n("cadf"),{name:"home",mounted:function(){var e=Object(s["a"])(regeneratorRuntime.mark(function e(){var t,r,a,s;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,n.e("YASQE").then(n.t.bind(null,"57de",7)).then(function(e){return e.default});case 2:return t=e.sent,r=t(document.querySelector("#yasqe"),{sparql:{showQueryButton:!0,endpoint:"https://qa.stad.gent/sparql"}}),e.next=6,n.e("YASR").then(n.t.bind(null,"3d81",7)).then(function(e){return e.default});case 6:a=e.sent,s=a(document.querySelector("#yasr"),{useGoogleCharts:!1,getUsedPrefixes:r.getPrefixesFromQuery,outputPlugins:["error","boolean","rawResponse","table","pivot"],output:"table"}),r.options.sparql.callbacks.complete=s.setResponse;case 9:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()}),o=u,c=(n("878c"),n("2877")),i=Object(c["a"])(o,r,a,!1,null,"2a6624d4",null);i.options.__file="Query.vue";t["default"]=i.exports}}]);
//# sourceMappingURL=query.603051af.js.map