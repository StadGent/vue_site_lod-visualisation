(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["query"],{"4d52":function(e,t,n){},a962:function(e,t,n){"use strict";n.r(t);var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",{staticClass:"detail-layout"},[n("h1",[e._v("Query editor")]),n("transition",{attrs:{name:"fade",mode:"out-in"},on:{enter:e.enter}},[e.loaded?n("div",{key:2,attrs:{id:"yasgui"}},[n("div",{attrs:{id:"yasqe"}}),n("div",{attrs:{id:"yasr"}})]):n("div",{key:1,staticClass:"spinner"},[n("div",[e._v("…loading")])])])],1)},a=[],s=(n("d3b7"),n("96cf"),n("1da1")),o={name:"home",data:function(){return{YASQE:null,YASR:null,loaded:!1}},mounted:function(){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,n.e("YASQE").then(n.t.bind(null,"57de",7)).then((function(e){return e.default}));case 2:return e.YASQE=t.sent,t.next=5,n.e("YASR").then(n.t.bind(null,"3d81",7)).then((function(e){return e.default}));case 5:e.YASR=t.sent,e.loaded=!0;case 7:case"end":return t.stop()}}),t)})))()},methods:{enter:function(){var e=this.YASQE(document.querySelector("#yasqe"),{sparql:{showQueryButton:!0,endpoint:"https://stad.gent/sparql"}}),t=this.YASR(document.querySelector("#yasr"),{useGoogleCharts:!1,getUsedPrefixes:e.getPrefixesFromQuery,outputPlugins:["error","boolean","rawResponse","table","pivot"],output:"table"});e.options.sparql.callbacks.complete=t.setResponse,e.query()}}},u=o,i=(n("b8dd"),n("2877")),d=Object(i["a"])(u,r,a,!1,null,"3d2c8c52",null);t["default"]=d.exports},b8dd:function(e,t,n){"use strict";var r=n("4d52"),a=n.n(r);a.a}}]);
//# sourceMappingURL=query.5faf290a.js.map