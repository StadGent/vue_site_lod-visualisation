(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["data-resource"],{"1bc9":function(t,e,a){},"2e1a":function(t,e,a){"use strict";var n=a("1bc9"),r=a.n(n);r.a},f7f3:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("transition",{attrs:{name:"fade"}},[this.dataset?a("section",{staticClass:"detail-layout"},[a("h1",[t._v(t._s(t.title))]),a("datadl",{attrs:{resource:t.dataset,id:t.id}})],1):t._e()])},r=[],s=(a("a481"),a("96cf"),a("1da1")),c=(a("551c"),a("f751"),a("cadf"),a("bc3a")),i=a.n(c);function u(t){return o.apply(this,arguments)}function o(){return o=Object(s["a"])(regeneratorRuntime.mark(function t(e){var a,n,r,s;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return a=i.a.create({transformRequest:[function(t,e){return e.common.Accept="application/sparql-results+json",t}]}),n="\n    DESCRIBE <http://".concat("qa.","stad.gent/id").concat(e,"> <https://").concat("qa.","stad.gent/id").concat(e,">\n    "),r=new FormData,r.append("query",n),t.next=6,a({method:"post",url:"https://qa.stad.gent/sparql",data:r});case 6:if(s=t.sent,s=s.data.results.bindings,s.id=e,s.length){t.next=11;break}throw new Error("404");case 11:return t.abrupt("return",s);case 12:case"end":return t.stop()}},t,this)})),o.apply(this,arguments)}var d=a("557e"),l=a("2769"),p={components:{datadl:d["a"]},mixins:[l["a"]],data:function(){return{dataset:null,title:null,id:null}},watch:{$route:"fetchData"},methods:{fetchData:function(){var t=Object(s["a"])(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,u(this.$route.path);case 3:this.dataset=t.sent,t.next=9;break;case 6:return t.prev=6,t.t0=t["catch"](0),t.abrupt("return",this.$router.replace({name:"404"}));case 9:this.id=this.dataset.id,this.dataset=this.dataset.reduce(this.tripleReducer,{}),this.setTitle();case 12:case"end":return t.stop()}},t,this,[[0,6]])}));return function(){return t.apply(this,arguments)}}()}},h=p,f=(a("2e1a"),a("2877")),m=Object(f["a"])(h,n,r,!1,null,null,null);m.options.__file="Data-resource.vue";e["default"]=m.exports}}]);
//# sourceMappingURL=data-resource.4ebeb538.js.map