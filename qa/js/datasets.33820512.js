(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["datasets"],{"11e9":function(t,e,a){var n=a("52a7"),r=a("4630"),i=a("6821"),s=a("6a99"),c=a("69a8"),o=a("c69a"),u=Object.getOwnPropertyDescriptor;e.f=a("9e1e")?u:function(t,e){if(t=i(t),e=s(e,!0),o)try{return u(t,e)}catch(a){}if(c(t,e))return r(!n.f.call(t,e),t[e])}},4673:function(t,e,a){"use strict";var n=a("6a1e"),r=a.n(n);r.a},"5dbc":function(t,e,a){var n=a("d3f4"),r=a("8b97").set;t.exports=function(t,e,a){var i,s=e.constructor;return s!==a&&"function"==typeof s&&(i=s.prototype)!==a.prototype&&n(i)&&r&&r(t,i),t}},6835:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("router-view")},r=[],i=a("2877"),s={},c=Object(i["a"])(s,n,r,!1,null,null,null);c.options.__file="Datasets.vue";e["default"]=c.exports},"6a1e":function(t,e,a){},"784b":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("transition",{attrs:{name:"fade",mode:"out-in"}},[t.loaded?n("section",{key:2,staticClass:"detail-layout"},[n("h1",[t._v(t._s(t.title))]),n("datadl",{attrs:{resource:t.dataset,id:t.id}})],1):n("div",{key:1,staticClass:"loader"},[n("img",{attrs:{src:a("7a7d"),alt:""}})])])},r=[],i=(a("a481"),a("96cf"),a("1da1")),s=(a("551c"),a("f751"),a("cadf"),a("2f62")),c=a("557e"),o=a("2769"),u={components:{datadl:c["a"]},mixins:[o["a"]],data:function(){return{crumbs:null}},computed:Object(s["b"])(["datasets","details"]),methods:{fetchData:function(){var t=Object(i["a"])(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,this.$store.dispatch("fetchDataSet",this.$route.params.id);case 3:t.next=8;break;case 5:return t.prev=5,t.t0=t["catch"](0),t.abrupt("return",this.$router.replace({name:"404"}));case 8:return this.dataset=this.details[this.$route.params.id],this.id=this.dataset.id,this.dataset=this.dataset.reduce(this.tripleReducer,{}),t.next=13,this.setTitle();case 13:this.setCrumbs(),this.loaded=!0;case 15:case"end":return t.stop()}},t,this,[[0,5]])}));return function(){return t.apply(this,arguments)}}(),setCrumbs:function(){this.crumbs=this.$route.meta.breadcrumb,this.crumbs[this.crumbs.length-1].name=this.title}},destroyed:function(){this.crumbs&&(this.crumbs[this.crumbs.length-1].name="")}},l=u,p=(a("4673"),a("2877")),v=Object(p["a"])(l,n,r,!1,null,null,null);v.options.__file="Datasets_show.vue";e["default"]=v.exports},"8b97":function(t,e,a){var n=a("d3f4"),r=a("cb7c"),i=function(t,e){if(r(t),!n(e)&&null!==e)throw TypeError(e+": can't set as prototype!")};t.exports={set:Object.setPrototypeOf||("__proto__"in{}?function(t,e,n){try{n=a("9b43")(Function.call,a("11e9").f(Object.prototype,"__proto__").set,2),n(t,[]),e=!(t instanceof Array)}catch(r){e=!0}return function(t,a){return i(t,a),e?t.__proto__=a:n(t,a),t}}({},!1):void 0),check:i}},9093:function(t,e,a){var n=a("ce10"),r=a("e11e").concat("length","prototype");e.f=Object.getOwnPropertyNames||function(t){return n(t,r)}},aa77:function(t,e,a){var n=a("5ca1"),r=a("be13"),i=a("79e5"),s=a("fdef"),c="["+s+"]",o="​",u=RegExp("^"+c+c+"*"),l=RegExp(c+c+"*$"),p=function(t,e,a){var r={},c=i(function(){return!!s[t]()||o[t]()!=o}),u=r[t]=c?e(v):s[t];a&&(r[a]=u),n(n.P+n.F*c,"String",r)},v=p.trim=function(t,e){return t=String(r(t)),1&e&&(t=t.replace(u,"")),2&e&&(t=t.replace(l,"")),t};t.exports=p},b536:function(t,e,a){},c5f6:function(t,e,a){"use strict";var n=a("7726"),r=a("69a8"),i=a("2d95"),s=a("5dbc"),c=a("6a99"),o=a("79e5"),u=a("9093").f,l=a("11e9").f,p=a("86cc").f,v=a("aa77").trim,f="Number",d=n[f],h=d,_=d.prototype,b=i(a("2aeb")(_))==f,g="trim"in String.prototype,m=function(t){var e=c(t,!1);if("string"==typeof e&&e.length>2){e=g?e.trim():v(e,3);var a,n,r,i=e.charCodeAt(0);if(43===i||45===i){if(a=e.charCodeAt(2),88===a||120===a)return NaN}else if(48===i){switch(e.charCodeAt(1)){case 66:case 98:n=2,r=49;break;case 79:case 111:n=8,r=55;break;default:return+e}for(var s,o=e.slice(2),u=0,l=o.length;u<l;u++)if(s=o.charCodeAt(u),s<48||s>r)return NaN;return parseInt(o,n)}}return+e};if(!d(" 0o1")||!d("0b1")||d("+0x1")){d=function(t){var e=arguments.length<1?0:t,a=this;return a instanceof d&&(b?o(function(){_.valueOf.call(a)}):i(a)!=f)?s(new h(m(e)),a,d):m(e)};for(var y,O=a("9e1e")?u(h):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),C=0;O.length>C;C++)r(h,y=O[C])&&!r(d,y)&&p(d,y,l(h,y));d.prototype=_,_.constructor=d,a("2aba")(n,f,d)}},d78f:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("transition",{attrs:{name:"fade"}},[t.datasets.length?a("section",{staticClass:"overview-layout"},[a("h1",{staticClass:"overview-title"},[a("span",{staticClass:"overview-title-colon"},[t._v("LOD datasets\n            "),a("span",{staticClass:"colon",attrs:{"aria-hidden":"true"}})])]),a("div",{staticClass:"cta-block box-left link",attrs:{id:"ODP_CTA"}},[a("div",{staticClass:"inner-box"},[a("h2",[t._v("Open Data Portaal")]),a("p",[t._v("Ga naar het "),a("a",{attrs:{href:"https://data.stad.gent/"}},[t._v("Stad Gent Open Data Portaal")]),t._v(" om deze datasets te\n                    filteren op o.a. trefwoord en categorie. U vindt op het Open Data Portaal een overzicht van alle\n                    open data die Stad Gent ter beschikking stelt, bijv. ook open data die in een csv- of kml-formaat\n                    gepubliceerd wordt.")]),a("a",{staticClass:"button button-primary",attrs:{href:"https://data.stad.gent/"}},[t._v("Open Data Portaal")])])]),a("h2",{staticClass:"visually-hidden"},[t._v("Overview")]),a("ul",{staticClass:"grid-3"},t._l(t.paginatedItems,function(e,n){return a("li",{key:"dataset-"+n,staticClass:"teaser teaser-topic"},[a("article",{staticClass:"teaser-content"},[a("div",{staticClass:"content__bottom"},[a("h3",[t._v(t._s(e.title.value))]),a("p",[t._v(t._s(t._f("truncate")(e.description.value)))]),a("router-link",{staticClass:"read-more standalone-link",attrs:{to:{name:"datasets_show",params:{id:e.btoa}}}},[t._v("lees meer "),a("span",{staticClass:"visually-hidden"},[t._v(t._s(e.title.value))])])],1)]),a("router-link",{staticClass:"teaser-overlay-link",attrs:{to:{name:"datasets_show",params:{id:e.btoa}},tabindex:"-1","aria-hidden":"true"}})],1)})),a("pagination",{attrs:{total:t.totalPages,active:t.currentPage}})],1):t._e()])},r=[],i=(a("a481"),a("96cf"),a("1da1"));function s(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function c(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{},n=Object.keys(a);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(a).filter(function(t){return Object.getOwnPropertyDescriptor(a,t).enumerable}))),n.forEach(function(e){s(t,e,a[e])})}return t}a("551c"),a("f751"),a("cadf");var o=a("2f62"),u=function(){var t=this,e=t.$createElement,a=t._self._c||e;return t.total>1?a("nav",{staticClass:"pager",attrs:{"aria-labelledby":"pagination_1"}},[a("h2",{staticClass:"visually-hidden",attrs:{id:"pagination_1"}},[t._v("Pagination")]),a("ul",{staticClass:"pager__items"},[1!==+t.active?a("li",{staticClass:"previous"},[a("router-link",{staticClass:"previous",attrs:{to:{path:this.$route.path+"#main",query:Object.assign({},t.$route.query,{page:+t.active-1})}},nativeOn:{click:function(e){return t.blur(e)}}},[t._v("\n        vorige\n        "),a("span",{staticClass:"visually-hidden"},[t._v("pagina")])])],1):t._e(),a("li",[a("router-link",{class:{active:1===+t.active},attrs:{to:{path:this.$route.path+"#main",query:Object.assign({},t.$route.query,{page:1})},title:"Ga naar pagina 1"},nativeOn:{click:function(e){return t.blur(e)}}},[a("span",{staticClass:"visually-hidden"},[t._v("Pagina")]),t._v("\n        "+t._s(1)+"\n      ")])],1),t.active>3?a("li",[t._v("...")]):t._e(),t.active-1>1&&+t.active-1!==t.total?a("li",[a("router-link",{attrs:{to:{path:this.$route.path+"#main",query:Object.assign({},t.$route.query,{page:+t.active-1})},title:"Ga naar pagina "+(t.active-1)},nativeOn:{click:function(e){return t.blur(e)}}},[a("span",{staticClass:"visually-hidden"},[t._v("Pagina")]),t._v("\n        "+t._s(+t.active-1)+"\n      ")])],1):t._e(),1!==+t.active&&+t.active!==t.total?a("li",[a("router-link",{staticClass:"active",attrs:{to:{path:this.$route.path+"#main",query:Object.assign({},t.$route.query,{page:+t.active})},title:"Ga naar pagina "+t.active},nativeOn:{click:function(e){return t.blur(e)}}},[a("span",{staticClass:"visually-hidden"},[t._v("Pagina")]),t._v("\n        "+t._s(+t.active)+"\n      ")])],1):t._e(),t.active+1<t.total?a("li",[a("router-link",{attrs:{to:{path:this.$route.path+"#main",query:Object.assign({},t.$route.query,{page:+t.active+1})},title:"Ga naar pagina "+(+t.active+1)},nativeOn:{click:function(e){return t.blur(e)}}},[a("span",{staticClass:"visually-hidden"},[t._v("Pagina")]),t._v("\n        "+t._s(+t.active+1)+"\n      ")])],1):t._e(),t.total-t.active>2?a("li",[t._v("...")]):t._e(),a("li",[a("router-link",{class:{active:t.total===+t.active},attrs:{to:{path:this.$route.path+"#main",query:Object.assign({},t.$route.query,{page:t.total})},title:"Ga naar pagina "+t.total},nativeOn:{click:function(e){return t.blur(e)}}},[a("span",{staticClass:"visually-hidden"},[t._v("Pagina")]),t._v("\n        "+t._s(t.total)+"\n      ")])],1),t.total!==+t.active?a("li",{staticClass:"next"},[a("router-link",{staticClass:"next",attrs:{to:{path:this.$route.path+"#main",query:Object.assign({},t.$route.query,{page:+t.active+1})}},nativeOn:{click:function(e){return t.blur(e)}}},[t._v("\n        volgende\n        "),a("span",{staticClass:"visually-hidden"},[t._v("pagina")])])],1):t._e()])]):t._e()},l=[],p=(a("c5f6"),{props:{total:{type:Number,required:!0},active:{type:Number,required:!0}},methods:{blur:function(t){t.target.blur()}}}),v=p,f=a("2877"),d=Object(f["a"])(v,u,l,!1,null,null,null);d.options.__file="pagination.vue";var h=d.exports,_={components:{pagination:h},data:function(){return{itemsPerPage:12}},computed:c({},Object(o["b"])(["datasets"]),{totalPages:function(){return Math.ceil(this.datasets.length/this.itemsPerPage)},paginatedItems:function(){var t=this.currentPage*this.itemsPerPage-this.itemsPerPage;return this.datasets.slice(t,t+this.itemsPerPage)},currentPage:function(){var t=this.$route.query.page||1;return t<=0||isNaN(t)?1:t>this.totalPages?this.totalPages:+t}}),created:function(){this.fetchData()},watch:{$route:"fetchData"},methods:{fetchData:function(){var t=Object(i["a"])(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,this.$store.dispatch("fetchDataSets");case 3:t.next=8;break;case 5:return t.prev=5,t.t0=t["catch"](0),t.abrupt("return",this.$router.replace({name:"404"}));case 8:case"end":return t.stop()}},t,this,[[0,5]])}));return function(){return t.apply(this,arguments)}}()}},b=_,g=(a("d9c5"),Object(f["a"])(b,n,r,!1,null,null,null));g.options.__file="Datasets_index.vue";e["default"]=g.exports},d9c5:function(t,e,a){"use strict";var n=a("b536"),r=a.n(n);r.a},fdef:function(t,e){t.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"}}]);
//# sourceMappingURL=datasets.33820512.js.map