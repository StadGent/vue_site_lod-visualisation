(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["data-resource"],{f7f3:function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("transition",{attrs:{name:"fade",mode:"out-in"}},[e.loaded?a("section",{key:2,staticClass:"detail-layout"},[a("h1",[e._v(e._s(e.title))]),a("datadl",{attrs:{resource:e.dataset,id:e.id}}),a("graph")],1):a("div",{key:1,staticClass:"spinner"},[a("div",[e._v("…loading")])])])},n=[],s=a("1da1"),c=a("5530"),i=(a("96cf"),a("d3b7"),a("ac1f"),a("5319"),a("557e")),d=a("2769"),u=a("2f62"),o={components:{datadl:i["a"]},mixins:[d["a"]],computed:Object(c["a"])({},Object(u["b"])(["last"])),methods:{fetchData:function(){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,e.$store.dispatch("fetchResource",e.$route.path);case 3:return e.dataset=e.last.bindings.reduce(e.tripleReducer,{}),e.id=e.last.id,t.next=7,e.setTitle();case 7:e.loaded=!0,t.next=13;break;case 10:return t.prev=10,t.t0=t["catch"](0),t.abrupt("return",e.$router.replace({name:"404"}));case 13:return t.next=15,e.$store.dispatch("fetchRelatedSubjects",{id:e.id,dataset:e.dataset});case 15:case"end":return t.stop()}}),t,null,[[0,10]])})))()}}},l=o,p=a("2877"),f=Object(p["a"])(l,r,n,!1,null,null,null);t["default"]=f.exports}}]);
//# sourceMappingURL=data-resource.0c227d9d.js.map