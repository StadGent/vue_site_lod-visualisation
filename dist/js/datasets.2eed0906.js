(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["datasets"],{1276:function(t,e,a){"use strict";var i=a("d784"),r=a("44e7"),n=a("825a"),s=a("1d80"),l=a("4840"),c=a("8aa5"),u=a("50c4"),o=a("14c3"),h=a("9263"),d=a("d039"),v=[].push,p=Math.min,f=4294967295,g=!d((function(){return!RegExp(f,"y")}));i("split",2,(function(t,e,a){var i;return i="c"=="abbc".split(/(b)*/)[1]||4!="test".split(/(?:)/,-1).length||2!="ab".split(/(?:ab)*/).length||4!=".".split(/(.?)(.?)/).length||".".split(/()()/).length>1||"".split(/.?/).length?function(t,a){var i=String(s(this)),n=void 0===a?f:a>>>0;if(0===n)return[];if(void 0===t)return[i];if(!r(t))return e.call(i,t,n);var l,c,u,o=[],d=(t.ignoreCase?"i":"")+(t.multiline?"m":"")+(t.unicode?"u":"")+(t.sticky?"y":""),p=0,g=new RegExp(t.source,d+"g");while(l=h.call(g,i)){if(c=g.lastIndex,c>p&&(o.push(i.slice(p,l.index)),l.length>1&&l.index<i.length&&v.apply(o,l.slice(1)),u=l[0].length,p=c,o.length>=n))break;g.lastIndex===l.index&&g.lastIndex++}return p===i.length?!u&&g.test("")||o.push(""):o.push(i.slice(p)),o.length>n?o.slice(0,n):o}:"0".split(void 0,0).length?function(t,a){return void 0===t&&0===a?[]:e.call(this,t,a)}:e,[function(e,a){var r=s(this),n=void 0==e?void 0:e[t];return void 0!==n?n.call(e,r,a):i.call(String(r),e,a)},function(t,r){var s=a(i,t,this,r,i!==e);if(s.done)return s.value;var h=n(t),d=String(this),v=l(h,RegExp),m=h.unicode,b=(h.ignoreCase?"i":"")+(h.multiline?"m":"")+(h.unicode?"u":"")+(g?"y":"g"),_=new v(g?h:"^(?:"+h.source+")",b),y=void 0===r?f:r>>>0;if(0===y)return[];if(0===d.length)return null===o(_,d)?[d]:[];var C=0,k=0,O=[];while(k<d.length){_.lastIndex=g?k:0;var x,P=o(_,g?d:d.slice(k));if(null===P||(x=p(u(_.lastIndex+(g?0:k)),d.length))===C)k=c(d,k,m);else{if(O.push(d.slice(C,k)),O.length===y)return O;for(var $=1;$<=P.length-1;$++)if(O.push(P[$]),O.length===y)return O;k=C=x}}return O.push(d.slice(C)),O}]}),!g)},"44e7":function(t,e,a){var i=a("861d"),r=a("c6b6"),n=a("b622"),s=n("match");t.exports=function(t){var e;return i(t)&&(void 0!==(e=t[s])?!!e:"RegExp"==r(t))}},6835:function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("router-view")},r=[],n=a("2877"),s={},l=Object(n["a"])(s,i,r,!1,null,null,null);e["default"]=l.exports},7156:function(t,e,a){var i=a("861d"),r=a("d2bb");t.exports=function(t,e,a){var n,s;return r&&"function"==typeof(n=e.constructor)&&n!==a&&i(s=n.prototype)&&s!==a.prototype&&r(t,s),t}},"784b":function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("transition",{attrs:{name:"fade",mode:"out-in"}},[t.loaded?a("section",{key:2,staticClass:"detail-layout"},[a("h1",[t._v(t._s(t.title))]),a("datadl",{attrs:{resource:t.dataset,id:t.id}}),a("graph")],1):a("div",{key:1,staticClass:"spinner"},[a("div",[t._v("…loading")])])])},r=[],n=(a("13d5"),a("b0c0"),a("ac1f"),a("5319"),a("96cf"),a("1da1")),s=a("5530"),l=a("2f62"),c=a("557e"),u=a("2769"),o={components:{datadl:c["a"]},mixins:[u["a"]],data:function(){return{crumbs:null}},computed:Object(s["a"])({},Object(l["b"])(["last"])),methods:{fetchData:function(){var t=this;return Object(n["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.$store.dispatch("fetchDataSet",t.$route.params.id);case 3:return t.dataset=t.last.bindings.reduce(t.tripleReducer,{}),t.id=t.last.id,e.next=7,t.setTitle();case 7:t.setCrumbs(),t.loaded=!0,e.next=14;break;case 11:return e.prev=11,e.t0=e["catch"](0),e.abrupt("return",t.$router.replace({name:"404"}));case 14:return e.next=16,t.$store.dispatch("fetchRelatedSubjects",{id:t.id,dataset:t.dataset});case 16:case"end":return e.stop()}}),e,null,[[0,11]])})))()},setCrumbs:function(){this.crumbs=this.$route.meta.breadcrumb,this.crumbs[this.crumbs.length-1].name=this.title}},destroyed:function(){this.crumbs&&(this.crumbs[this.crumbs.length-1].name="")}},h=o,d=a("2877"),v=Object(d["a"])(h,i,r,!1,null,null,null);e["default"]=v.exports},8811:function(t,e,a){},a9e3:function(t,e,a){"use strict";var i=a("83ab"),r=a("da84"),n=a("94ca"),s=a("6eeb"),l=a("5135"),c=a("c6b6"),u=a("7156"),o=a("c04e"),h=a("d039"),d=a("7c73"),v=a("241c").f,p=a("06cf").f,f=a("9bf2").f,g=a("58a8").trim,m="Number",b=r[m],_=b.prototype,y=c(d(_))==m,C=function(t){var e,a,i,r,n,s,l,c,u=o(t,!1);if("string"==typeof u&&u.length>2)if(u=g(u),e=u.charCodeAt(0),43===e||45===e){if(a=u.charCodeAt(2),88===a||120===a)return NaN}else if(48===e){switch(u.charCodeAt(1)){case 66:case 98:i=2,r=49;break;case 79:case 111:i=8,r=55;break;default:return+u}for(n=u.slice(2),s=n.length,l=0;l<s;l++)if(c=n.charCodeAt(l),c<48||c>r)return NaN;return parseInt(n,i)}return+u};if(n(m,!b(" 0o1")||!b("0b1")||b("+0x1"))){for(var k,O=function(t){var e=arguments.length<1?0:t,a=this;return a instanceof O&&(y?h((function(){_.valueOf.call(a)})):c(a)!=m)?u(new b(C(e)),a,O):C(e)},x=i?v(b):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),P=0;x.length>P;P++)l(b,k=x[P])&&!l(O,k)&&f(O,k,p(b,k));O.prototype=_,_.constructor=O,s(r,m,O)}},c975:function(t,e,a){"use strict";var i=a("23e7"),r=a("4d64").indexOf,n=a("a640"),s=a("ae40"),l=[].indexOf,c=!!l&&1/[1].indexOf(1,-0)<0,u=n("indexOf"),o=s("indexOf",{ACCESSORS:!0,1:0});i({target:"Array",proto:!0,forced:c||!u||!o},{indexOf:function(t){return c?l.apply(this,arguments)||0:r(this,t,arguments.length>1?arguments[1]:void 0)}})},d78f:function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("transition",{attrs:{name:"fade"}},[a("section",{staticClass:"overview-layout"},[a("h1",{staticClass:"overview-title"},[a("span",{staticClass:"overview-title-colon"},[t._v("LOD datasets"),a("span",{staticClass:"colon",attrs:{"aria-hidden":"true"}})])]),a("div",{staticClass:"cta-block highlight highlight--left link",attrs:{id:"ODP_CTA"}},[a("div",{staticClass:"highlight__inner"},[a("h2",[t._v("Open Data Portaal")]),a("p",[t._v("Ga naar het "),a("a",{attrs:{href:"https://data.stad.gent/"}},[t._v("Stad Gent Open Data Portaal")]),t._v(" voor een overzicht van alle open data die Stad Gent ter beschikking stelt, bijv. ook open data die in een csv- of kml-formaat gepubliceerd wordt.")]),a("div",{staticClass:"links"},[a("a",{staticClass:"button button-primary",attrs:{href:"https://data.stad.gent/"}},[t._v("Open Data Portaal")])])])]),a("search",{staticClass:"mb-40",model:{value:t.searchValue,callback:function(e){t.searchValue=e},expression:"searchValue"}}),a("h2",{staticClass:"visually-hidden"},[t._v("Overview")]),a("ul",{staticClass:"grid-3"},t._l(t.paginatedItems,(function(e,i){return a("li",{key:"dataset-"+i,staticClass:"teaser teaser-topic"},[a("article",{staticClass:"teaser-content"},[a("div",{staticClass:"content__bottom"},[a("h3",[t._v(t._s(e.title.value))]),a("p",[t._v(t._s(t._f("truncate")(e.description.value)))]),a("router-link",{staticClass:"read-more standalone-link",attrs:{to:{name:"datasets_show",params:{id:e.btoa}}}},[t._v("Lees meer "),a("span",{staticClass:"visually-hidden"},[t._v(t._s(e.title.value))])])],1)]),a("router-link",{staticClass:"teaser-overlay-link",attrs:{to:{name:"datasets_show",params:{id:e.btoa}},tabindex:"-1","aria-hidden":"true"}})],1)})),0),a("pagination",{attrs:{total:t.totalPages,active:t.currentPage}})],1)])},r=[],n=(a("a4d3"),a("e01a"),a("4de4"),a("c975"),a("fb6a"),a("ac1f"),a("5319"),a("1276"),a("96cf"),a("1da1")),s=a("5530"),l=a("2f62"),c=function(){var t=this,e=t.$createElement,a=t._self._c||e;return t.total>1?a("nav",{staticClass:"pager",attrs:{"aria-labelledby":"pagination_1"}},[a("h2",{staticClass:"visually-hidden",attrs:{id:"pagination_1"}},[t._v("Pagination")]),a("ul",{staticClass:"pager__items"},[1!==+t.active?a("li",{staticClass:"previous"},[a("router-link",{staticClass:"previous",attrs:{to:{path:this.$route.path+"#main",query:Object.assign({},t.$route.query,{page:+t.active-1})}},nativeOn:{click:function(e){return t.blur(e)}}},[t._v(" Vorige "),a("span",{staticClass:"visually-hidden"},[t._v("pagina")])])],1):t._e(),a("li",[a("router-link",{class:{active:1===+t.active},attrs:{to:{path:this.$route.path+"#main",query:Object.assign({},t.$route.query,{page:1})},title:"Ga naar pagina 1"},nativeOn:{click:function(e){return t.blur(e)}}},[a("span",{staticClass:"visually-hidden"},[t._v("Pagina")]),t._v(" "+t._s(1)+" ")])],1),t.active>3?a("li",[t._v("...")]):t._e(),t.active-1>1&&+t.active-1!==t.total?a("li",[a("router-link",{attrs:{to:{path:this.$route.path+"#main",query:Object.assign({},t.$route.query,{page:+t.active-1})},title:"Ga naar pagina "+(t.active-1)},nativeOn:{click:function(e){return t.blur(e)}}},[a("span",{staticClass:"visually-hidden"},[t._v("Pagina")]),t._v(" "+t._s(+t.active-1)+" ")])],1):t._e(),1!==+t.active&&+t.active!==t.total?a("li",[a("router-link",{staticClass:"active",attrs:{to:{path:this.$route.path+"#main",query:Object.assign({},t.$route.query,{page:+t.active})},title:"Ga naar pagina "+t.active},nativeOn:{click:function(e){return t.blur(e)}}},[a("span",{staticClass:"visually-hidden"},[t._v("Pagina")]),t._v(" "+t._s(+t.active)+" ")])],1):t._e(),t.active+1<t.total?a("li",[a("router-link",{attrs:{to:{path:this.$route.path+"#main",query:Object.assign({},t.$route.query,{page:+t.active+1})},title:"Ga naar pagina "+(+t.active+1)},nativeOn:{click:function(e){return t.blur(e)}}},[a("span",{staticClass:"visually-hidden"},[t._v("Pagina")]),t._v(" "+t._s(+t.active+1)+" ")])],1):t._e(),t.total-t.active>2?a("li",[t._v("...")]):t._e(),a("li",[a("router-link",{class:{active:t.total===+t.active},attrs:{to:{path:this.$route.path+"#main",query:Object.assign({},t.$route.query,{page:t.total})},title:"Ga naar pagina "+t.total},nativeOn:{click:function(e){return t.blur(e)}}},[a("span",{staticClass:"visually-hidden"},[t._v("Pagina")]),t._v(" "+t._s(t.total)+" ")])],1),t.total!==+t.active?a("li",{staticClass:"next"},[a("router-link",{staticClass:"next",attrs:{to:{path:this.$route.path+"#main",query:Object.assign({},t.$route.query,{page:+t.active+1})}},nativeOn:{click:function(e){return t.blur(e)}}},[t._v(" Volgende "),a("span",{staticClass:"visually-hidden"},[t._v("pagina")])])],1):t._e()])]):t._e()},u=[],o=(a("a9e3"),{props:{total:{type:Number,required:!0},active:{type:Number,required:!0}},methods:{blur:function(t){t.target.blur()}}}),h=o,d=a("2877"),v=Object(d["a"])(h,c,u,!1,null,null,null),p=v.exports,f=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("form",{staticClass:"form search",on:{submit:function(e){return e.preventDefault(),t.$emit("input",t.myValue)}}},[a("label",{attrs:{for:"header-search"}},[t._v("Waar ben je naar op zoek?")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.myValue,expression:"myValue"}],staticClass:"search inline",attrs:{type:"search",id:"header-search",name:"header-search"},domProps:{value:t.myValue},on:{input:function(e){e.target.composing||(t.myValue=e.target.value)}}}),a("input",{attrs:{type:"submit",value:"Zoeken"}})])},g=[],m={name:"search",props:["value"],data:function(){return{myValue:this.value}}},b=m,_=Object(d["a"])(b,f,g,!1,null,null,null),y=_.exports,C={components:{search:y,pagination:p},data:function(){return{itemsPerPage:12,searchValue:""}},computed:Object(s["a"])(Object(s["a"])({},Object(l["d"])(["datasets"])),{},{searchValueArray:function(){return this.searchValue.split(" ")},filteredSets:function(){var t=this;return this.datasets.filter((function(e){var a=e.title,i=e.description;return t.checkValues(t.searchValueArray,a.value+" "+i.value)}))},totalPages:function(){return Math.ceil(this.filteredSets.length/this.itemsPerPage)},paginatedItems:function(){var t=this.currentPage*this.itemsPerPage-this.itemsPerPage;return this.filteredSets.slice(t,t+this.itemsPerPage)},currentPage:function(){var t=this.$route.query.page||1;return t<=0||isNaN(t)?1:t>this.totalPages?this.totalPages:+t}}),created:function(){this.fetchData()},watch:{$route:"fetchData"},methods:{fetchData:function(){var t=this;return Object(n["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.$store.dispatch("fetchDataSets");case 3:e.next=8;break;case 5:return e.prev=5,e.t0=e["catch"](0),e.abrupt("return",t.$router.replace({name:"404"}));case 8:case"end":return e.stop()}}),e,null,[[0,5]])})))()},checkValues:function(t,e){e=e.toUpperCase();for(var a=t.length;a--;)if(-1===e.indexOf(t[a].toUpperCase()))return!1;return!0}}},k=C,O=(a("d9c5"),Object(d["a"])(k,i,r,!1,null,null,null));e["default"]=O.exports},d9c5:function(t,e,a){"use strict";var i=a("8811"),r=a.n(i);r.a}}]);
//# sourceMappingURL=datasets.2eed0906.js.map