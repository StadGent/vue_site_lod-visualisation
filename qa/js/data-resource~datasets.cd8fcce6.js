(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["data-resource~datasets"],{"214f":function(e,t,n){"use strict";var r=n("32e9"),i=n("2aba"),s=n("79e5"),a=n("be13"),l=n("2b4c");e.exports=function(e,t,n){var o=l(e),c=n(a,o,""[e]),u=c[0],f=c[1];s(function(){var t={};return t[o]=function(){return 7},7!=""[e](t)})&&(i(String.prototype,e,u),r(RegExp.prototype,o,2==t?function(e,t){return f.call(e,this,t)}:function(e){return f.call(e,this)}))}},2769:function(e,t,n){"use strict";n.d(t,"a",function(){return i});n("96cf");var r=n("1da1"),i={created:function(){this.fetchData()},watch:{$route:"fetchData"},methods:{getTitle:function(){for(var e=["prefLabel","label","title","name","firstName"],t=0;t<e.length;t++)if(this.dataset[e[t]])return this.dataset[e[t]][0].o.value;return"detail view"},setTitle:function(){var e=Object(r["a"])(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.getTitle();case 2:this.title=e.sent,document.title="".concat(this.title," | LOD");case 4:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}(),tripleReducer:function(e,t){var n=t.p.value,r=n.lastIndexOf("#")>-1?n.lastIndexOf("#"):n.lastIndexOf("/"),i=n.substr(r+1);return e[i]||(e[i]=[]),e[i].push(t),e}}}},"2f21":function(e,t,n){"use strict";var r=n("79e5");e.exports=function(e,t){return!!e&&r(function(){t?e.call(null,function(){},1):e.call(null)})}},3022:function(e,t,n){(function(e,r){var i=/%[sdj%]/g;t.format=function(e){if(!w(e)){for(var t=[],n=0;n<arguments.length;n++)t.push(l(arguments[n]));return t.join(" ")}n=1;for(var r=arguments,s=r.length,a=String(e).replace(i,function(e){if("%%"===e)return"%";if(n>=s)return e;switch(e){case"%s":return String(r[n++]);case"%d":return Number(r[n++]);case"%j":try{return JSON.stringify(r[n++])}catch(t){return"[Circular]"}default:return e}}),o=r[n];n<s;o=r[++n])y(o)||!O(o)?a+=" "+o:a+=" "+l(o);return a},t.deprecate=function(n,i){if(x(e.process))return function(){return t.deprecate(n,i).apply(this,arguments)};if(!0===r.noDeprecation)return n;var s=!1;function a(){if(!s){if(r.throwDeprecation)throw new Error(i);r.traceDeprecation?console.trace(i):console.error(i),s=!0}return n.apply(this,arguments)}return a};var s,a={};function l(e,n){var r={seen:[],stylize:c};return arguments.length>=3&&(r.depth=arguments[2]),arguments.length>=4&&(r.colors=arguments[3]),_(n)?r.showHidden=n:n&&t._extend(r,n),x(r.showHidden)&&(r.showHidden=!1),x(r.depth)&&(r.depth=2),x(r.colors)&&(r.colors=!1),x(r.customInspect)&&(r.customInspect=!0),r.colors&&(r.stylize=o),f(r,e,r.depth)}function o(e,t){var n=l.styles[t];return n?"["+l.colors[n][0]+"m"+e+"["+l.colors[n][1]+"m":e}function c(e,t){return e}function u(e){var t={};return e.forEach(function(e,n){t[e]=!0}),t}function f(e,n,r){if(e.customInspect&&n&&M(n.inspect)&&n.inspect!==t.inspect&&(!n.constructor||n.constructor.prototype!==n)){var i=n.inspect(r,e);return w(i)||(i=f(e,i,r)),i}var s=h(e,n);if(s)return s;var a=Object.keys(n),l=u(a);if(e.showHidden&&(a=Object.getOwnPropertyNames(n)),$(n)&&(a.indexOf("message")>=0||a.indexOf("description")>=0))return p(n);if(0===a.length){if(M(n)){var o=n.name?": "+n.name:"";return e.stylize("[Function"+o+"]","special")}if(j(n))return e.stylize(RegExp.prototype.toString.call(n),"regexp");if(E(n))return e.stylize(Date.prototype.toString.call(n),"date");if($(n))return p(n)}var c,_="",y=!1,m=["{","}"];if(b(n)&&(y=!0,m=["[","]"]),M(n)){var k=n.name?": "+n.name:"";_=" [Function"+k+"]"}return j(n)&&(_=" "+RegExp.prototype.toString.call(n)),E(n)&&(_=" "+Date.prototype.toUTCString.call(n)),$(n)&&(_=" "+p(n)),0!==a.length||y&&0!=n.length?r<0?j(n)?e.stylize(RegExp.prototype.toString.call(n),"regexp"):e.stylize("[Object]","special"):(e.seen.push(n),c=y?g(e,n,r,l,a):a.map(function(t){return d(e,n,r,l,t,y)}),e.seen.pop(),v(c,_,m)):m[0]+_+m[1]}function h(e,t){if(x(t))return e.stylize("undefined","undefined");if(w(t)){var n="'"+JSON.stringify(t).replace(/^"|"$/g,"").replace(/'/g,"\\'").replace(/\\"/g,'"')+"'";return e.stylize(n,"string")}return k(t)?e.stylize(""+t,"number"):_(t)?e.stylize(""+t,"boolean"):y(t)?e.stylize("null","null"):void 0}function p(e){return"["+Error.prototype.toString.call(e)+"]"}function g(e,t,n,r,i){for(var s=[],a=0,l=t.length;a<l;++a)P(t,String(a))?s.push(d(e,t,n,r,String(a),!0)):s.push("");return i.forEach(function(i){i.match(/^\d+$/)||s.push(d(e,t,n,r,i,!0))}),s}function d(e,t,n,r,i,s){var a,l,o;if(o=Object.getOwnPropertyDescriptor(t,i)||{value:t[i]},o.get?l=o.set?e.stylize("[Getter/Setter]","special"):e.stylize("[Getter]","special"):o.set&&(l=e.stylize("[Setter]","special")),P(r,i)||(a="["+i+"]"),l||(e.seen.indexOf(o.value)<0?(l=y(n)?f(e,o.value,null):f(e,o.value,n-1),l.indexOf("\n")>-1&&(l=s?l.split("\n").map(function(e){return"  "+e}).join("\n").substr(2):"\n"+l.split("\n").map(function(e){return"   "+e}).join("\n"))):l=e.stylize("[Circular]","special")),x(a)){if(s&&i.match(/^\d+$/))return l;a=JSON.stringify(""+i),a.match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)?(a=a.substr(1,a.length-2),a=e.stylize(a,"name")):(a=a.replace(/'/g,"\\'").replace(/\\"/g,'"').replace(/(^"|"$)/g,"'"),a=e.stylize(a,"string"))}return a+": "+l}function v(e,t,n){var r=e.reduce(function(e,t){return 0,t.indexOf("\n")>=0&&0,e+t.replace(/\u001b\[\d\d?m/g,"").length+1},0);return r>60?n[0]+(""===t?"":t+"\n ")+" "+e.join(",\n  ")+" "+n[1]:n[0]+t+" "+e.join(", ")+" "+n[1]}function b(e){return Array.isArray(e)}function _(e){return"boolean"===typeof e}function y(e){return null===e}function m(e){return null==e}function k(e){return"number"===typeof e}function w(e){return"string"===typeof e}function S(e){return"symbol"===typeof e}function x(e){return void 0===e}function j(e){return O(e)&&"[object RegExp]"===N(e)}function O(e){return"object"===typeof e&&null!==e}function E(e){return O(e)&&"[object Date]"===N(e)}function $(e){return O(e)&&("[object Error]"===N(e)||e instanceof Error)}function M(e){return"function"===typeof e}function D(e){return null===e||"boolean"===typeof e||"number"===typeof e||"string"===typeof e||"symbol"===typeof e||"undefined"===typeof e}function N(e){return Object.prototype.toString.call(e)}function A(e){return e<10?"0"+e.toString(10):e.toString(10)}t.debuglog=function(e){if(x(s)&&(s=Object({VUE_APP_DIST:"qa",NODE_ENV:"production",VUE_APP_SPARQL_ENDPOINT:"https://qa.stad.gent/sparql",BASE_URL:"/data/"}).NODE_DEBUG||""),e=e.toUpperCase(),!a[e])if(new RegExp("\\b"+e+"\\b","i").test(s)){var n=r.pid;a[e]=function(){var r=t.format.apply(t,arguments);console.error("%s %d: %s",e,n,r)}}else a[e]=function(){};return a[e]},t.inspect=l,l.colors={bold:[1,22],italic:[3,23],underline:[4,24],inverse:[7,27],white:[37,39],grey:[90,39],black:[30,39],blue:[34,39],cyan:[36,39],green:[32,39],magenta:[35,39],red:[31,39],yellow:[33,39]},l.styles={special:"cyan",number:"yellow",boolean:"yellow",undefined:"grey",null:"bold",string:"green",date:"magenta",regexp:"red"},t.isArray=b,t.isBoolean=_,t.isNull=y,t.isNullOrUndefined=m,t.isNumber=k,t.isString=w,t.isSymbol=S,t.isUndefined=x,t.isRegExp=j,t.isObject=O,t.isDate=E,t.isError=$,t.isFunction=M,t.isPrimitive=D,t.isBuffer=n("d60a");var I=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];function z(){var e=new Date,t=[A(e.getHours()),A(e.getMinutes()),A(e.getSeconds())].join(":");return[e.getDate(),I[e.getMonth()],t].join(" ")}function P(e,t){return Object.prototype.hasOwnProperty.call(e,t)}t.log=function(){console.log("%s - %s",z(),t.format.apply(t,arguments))},t.inherits=n("3fb5"),t._extend=function(e,t){if(!t||!O(t))return e;var n=Object.keys(t),r=n.length;while(r--)e[n[r]]=t[n[r]];return e}}).call(this,n("c8ba"),n("4362"))},"3fb5":function(e,t){"function"===typeof Object.create?e.exports=function(e,t){e.super_=t,e.prototype=Object.create(t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}})}:e.exports=function(e,t){e.super_=t;var n=function(){};n.prototype=t.prototype,e.prototype=new n,e.prototype.constructor=e}},"557e":function(e,t,n){"use strict";var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("dl",{staticClass:"dataset"},[e._l(e.sortKeys(Object.keys(e.resource)),function(t,r){return[n("dt",{key:"dt-"+r},[e.isSubject(e.resource[t][0].o)?n("span",[e._v("Is predicate "),n("abbr",{attrs:{title:e.getPredicate(t)}},[e._v(e._s(t))]),e._v(" of")]):n("span",[e._v("Has predicate "),n("abbr",{attrs:{title:e.getPredicate(t)}},[e._v(e._s(t))])]),n("div",{staticClass:"predicate",attrs:{"aria-hidden":"true"}},[e._v(e._s(e.getPredicate(t)))])]),n("dd",{key:"dd-"+r},[e.resource[t].length>1?n("ul",e._l(e.resource[t],function(r,i){return n("li",{key:t+"-"+i},[e.isUri(r.o)?n("a",{staticClass:"uri",attrs:{href:e.getDataUri(r)}},[e._v("\n                        "+e._s(e.getUri(r))+"\n                    ")]):n("div",{domProps:{innerHTML:e._s(e.getMarkdown(r))}})])})):e._l(e.resource[t],function(r,i){return[e.isUri(r.o)?n("a",{key:t+"-"+i,staticClass:"uri",attrs:{href:e.getDataUri(r)}},[e._v("\n                    "+e._s(e.getUri(r))+"\n                ")]):n("div",{key:t+"-"+i,domProps:{innerHTML:e._s(e.getMarkdown(r))}})]})],2)]})],2)},i=[],s=(n("a481"),n("55dd"),n("8ddc")),a={props:{resource:{type:Object},id:{type:String}},methods:{sortKeys:function(e){return e.sort(function(e,t){return e>t?1:t>e?-1:0})},isSubject:function(e){return e.value==="https://qa.stad.gent/id".concat(this.id)||e.value==="http://qa.stad.gent/id".concat(this.id)},isUri:function(e){return"uri"===e.type},getUri:function(e){return this.isSubject(e.o)?e.s.value:e.o.value},getDataUri:function(e){return this.getUri(e).replace(".gent/id/",".gent/data/")},getMarkdown:function(e){var t=this.isSubject(e.o)?e.s.value:e.o.value;return s["parse"](t)},getPredicate:function(e){return this.resource[e][0].p.value}}},l=a,o=n("2877"),c=Object(o["a"])(l,r,i,!1,null,null,null);c.options.__file="datadl.vue";t["a"]=c.exports},"55dd":function(e,t,n){"use strict";var r=n("5ca1"),i=n("d8e8"),s=n("4bf8"),a=n("79e5"),l=[].sort,o=[1,2,3];r(r.P+r.F*(a(function(){o.sort(void 0)})||!a(function(){o.sort(null)})||!n("2f21")(l)),"Array",{sort:function(e){return void 0===e?l.call(s(this)):l.call(s(this),i(e))}})},"8cb0":function(e,t,n){(function(e){var t=e.Markdown=function(e){switch(typeof e){case"undefined":this.dialect=t.dialects.Gruber;break;case"object":this.dialect=e;break;default:if(!(e in t.dialects))throw new Error("Unknown Markdown dialect '"+String(e)+"'");this.dialect=t.dialects[e];break}this.em_state=[],this.strong_state=[],this.debug_indent=""};function r(){return"Markdown.mk_block( "+uneval(this.toString())+", "+uneval(this.trailing)+", "+uneval(this.lineNumber)+" )"}function i(){var e=n("3022");return"Markdown.mk_block( "+e.inspect(this.toString())+", "+e.inspect(this.trailing)+", "+e.inspect(this.lineNumber)+" )"}e.parse=function(e,n){var r=new t(n);return r.toTree(e)},e.toHTML=function(t,n,r){var i=e.toHTMLTree(t,n,r);return e.renderJsonML(i)},e.toHTMLTree=function(e,t,n){"string"===typeof e&&(e=this.parse(e,t));var r=g(e),i={};r&&r.references&&(i=r.references);var s=b(e,i,n);return _(s),s};var s=t.mk_block=function(e,t,n){1==arguments.length&&(t="\n\n");var s=new String(e);return s.trailing=t,s.inspect=i,s.toSource=r,void 0!=n&&(s.lineNumber=n),s};function l(e){var t=0,n=-1;while(-1!==(n=e.indexOf("\n",n+1)))t++;return t}function o(e,t){var n=e+"_state",r="strong"==e?"em_state":"strong_state";function i(e){this.len_after=e,this.name="close_"+t}return function(s,a){if(this[n][0]==t)return this[n].shift(),[s.length,new i(s.length-t.length)];var l=this[r].slice(),o=this[n].slice();this[n].unshift(t);var c=this.processInline(s.substr(t.length)),u=c[c.length-1];this[n].shift();if(u instanceof i){c.pop();var f=s.length-u.len_after;return[f,[e].concat(c)]}return this[r]=l,this[n]=o,[t.length,t]}}function c(e){var t=e.split(""),n=[""],r=!1;while(t.length){var i=t.shift();switch(i){case" ":r?n[n.length-1]+=i:n.push("");break;case"'":case'"':r=!r;break;case"\\":i=t.shift();default:n[n.length-1]+=i;break}}return n}t.prototype.split_blocks=function(e,t){e=e.replace(/(\r\n|\n|\r)/g,"\n");var n,r=/([\s\S]+?)($|\n#|\n(?:\s*\n|$)+)/g,i=[],a=1;null!=(n=/^(\s*\n)/.exec(e))&&(a+=l(n[0]),r.lastIndex=n[0].length);while(null!==(n=r.exec(e)))"\n#"==n[2]&&(n[2]="\n",r.lastIndex--),i.push(s(n[1],n[2],a)),a+=l(n[0]);return i},t.prototype.processBlock=function(e,t){var n=this.dialect.block,r=n.__order__;if("__call__"in n)return n.__call__.call(this,e,t);for(var i=0;i<r.length;i++){var s=n[r[i]].call(this,e,t);if(s)return(!f(s)||s.length>0&&!f(s[0]))&&this.debug(r[i],"didn't return a proper array"),s}return[]},t.prototype.processInline=function(e){return this.dialect.inline.__call__.call(this,String(e))},t.prototype.toTree=function(e,t){var n=e instanceof Array?e:this.split_blocks(e),r=this.tree;try{this.tree=t||this.tree||["markdown"];while(n.length){var i=this.processBlock(n.shift(),n);i.length&&this.tree.push.apply(this.tree,i)}return this.tree}finally{t&&(this.tree=r)}},t.prototype.debug=function(){var e=Array.prototype.slice.call(arguments);e.unshift(this.debug_indent),"undefined"!==typeof print&&print.apply(print,e),"undefined"!==typeof console&&"undefined"!==typeof console.log&&console.log.apply(null,e)},t.prototype.loop_re_over_block=function(e,t,n){var r,i=t.valueOf();while(i.length&&null!=(r=e.exec(i)))i=i.substr(r[0].length),n.call(this,r);return i},t.dialects={},t.dialects.Gruber={block:{atxHeader:function(e,t){var n=e.match(/^(#{1,6})\s*(.*?)\s*#*\s*(?:\n|$)/);if(n){var r=["header",{level:n[1].length}];return Array.prototype.push.apply(r,this.processInline(n[2])),n[0].length<e.length&&t.unshift(s(e.substr(n[0].length),e.trailing,e.lineNumber+2)),[r]}},setextHeader:function(e,t){var n=e.match(/^(.*)\n([-=])\2\2+(?:\n|$)/);if(n){var r="="===n[2]?1:2,i=["header",{level:r},n[1]];return n[0].length<e.length&&t.unshift(s(e.substr(n[0].length),e.trailing,e.lineNumber+2)),[i]}},code:function(e,t){var n=[],r=/^(?: {0,3}\t| {4})(.*)\n?/;if(e.match(r)){e:do{var i=this.loop_re_over_block(r,e.valueOf(),function(e){n.push(e[1])});if(i.length){t.unshift(s(i,e.trailing));break e}if(!t.length)break e;if(!t[0].match(r))break e;n.push(e.trailing.replace(/[^\n]/g,"").substring(2)),e=t.shift()}while(1);return[["code_block",n.join("\n")]]}},horizRule:function(e,t){var n=e.match(/^(?:([\s\S]*?)\n)?[ \t]*([-_*])(?:[ \t]*\2){2,}[ \t]*(?:\n([\s\S]*))?$/);if(n){var r=[["hr"]];return n[1]&&r.unshift.apply(r,this.processBlock(n[1],[])),n[3]&&t.unshift(s(n[3])),r}},lists:function(){var e="[*+-]|\\d+\\.",t=/[*+-]/,n=new RegExp("^( {0,3})("+e+")[ \t]+"),r="(?: {0,3}\\t| {4})";function i(t){return new RegExp("(?:^("+r+"{0,"+t+"} {0,3})("+e+")\\s+)|(^"+r+"{0,"+(t-1)+"}[ ]{0,4})")}function a(e){return e.replace(/ {0,3}\t/g,"    ")}function l(e,t,n,r){if(t)e.push(["para"].concat(n));else{var i=e[e.length-1]instanceof Array&&"para"==e[e.length-1][0]?e[e.length-1]:e;r&&e.length>1&&n.unshift(r);for(var s=0;s<n.length;s++){var a=n[s],l="string"==typeof a;l&&i.length>1&&"string"==typeof i[i.length-1]?i[i.length-1]+=a:i.push(a)}}}function o(e,t){var n=new RegExp("^("+r+"{"+e+"}.*?\\n?)*$"),i=new RegExp("^"+r+"{"+e+"}","gm"),a=[];while(t.length>0){if(!n.exec(t[0]))break;var l=t.shift(),o=l.replace(i,"");a.push(s(o,l.trailing,l.lineNumber))}return a}function c(e,t,n){var r=e.list,i=r[r.length-1];if(!(i[1]instanceof Array&&"para"==i[1][0]))if(t+1==n.length)i.push(["para"].concat(i.splice(1,i.length-1)));else{var s=i.pop();i.push(["para"].concat(i.splice(1,i.length-1)),s)}}return function(e,r){var s=e.match(n);if(s){var f,h,p=[],g=$(s),d=!1,v=[p[0].list];while(1){for(var b=e.split(/(?=\n)/),_="",y=0;y<b.length;y++){var m="",k=b[y].replace(/^\n/,function(e){return m=e,""}),w=i(p.length);if(s=k.match(w),void 0!==s[1]){_.length&&(l(f,d,this.processInline(_),m),d=!1,_=""),s[1]=a(s[1]);var S=Math.floor(s[1].length/4)+1;if(S>p.length)g=$(s),f.push(g),f=g[1]=["listitem"];else{var x=!1;for(h=0;h<p.length;h++)if(p[h].indent==s[1]){g=p[h].list,p.splice(h+1,p.length-(h+1)),x=!0;break}x||(S++,S<=p.length?(p.splice(S,p.length-S),g=p[S-1].list):(g=$(s),f.push(g))),f=["listitem"],g.push(f)}m=""}k.length>s[0].length&&(_+=m+k.substr(s[0].length))}_.length&&(l(f,d,this.processInline(_),m),d=!1,_="");var j=o(p.length,r);j.length>0&&(u(p,c,this),f.push.apply(f,this.toTree(j,[])));var O=r[0]&&r[0].valueOf()||"";if(!O.match(n)&&!O.match(/^ /))break;e=r.shift();var E=this.dialect.block.horizRule(e,r);if(E){v.push.apply(v,E);break}u(p,c,this),d=!0}return v}function $(e){var n=t.exec(e[2])?["bulletlist"]:["numberlist"];return p.push({list:n,indent:e[1]}),n}}}(),blockquote:function(e,t){if(e.match(/^>/m)){var n=[];if(">"!=e[0]){var r=e.split(/\n/),i=[],a=e.lineNumber;while(r.length&&">"!=r[0][0])i.push(r.shift()),a++;var l=s(i.join("\n"),"\n",e.lineNumber);n.push.apply(n,this.processBlock(l,[])),e=s(r.join("\n"),e.trailing,a)}while(t.length&&">"==t[0][0]){var o=t.shift();e=s(e+e.trailing+o,o.trailing,e.lineNumber)}var c=e.replace(/^> ?/gm,""),u=(this.tree,this.toTree(c,["blockquote"])),f=g(u);return f&&f.references&&(delete f.references,h(f)&&u.splice(1,1)),n.push(u),n}},referenceDefn:function(e,t){var n=/^\s*\[(.*?)\]:\s*(\S+)(?:\s+(?:(['"])(.*?)\3|\((.*?)\)))?\n?/;if(e.match(n)){g(this.tree)||this.tree.splice(1,0,{});var r=g(this.tree);void 0===r.references&&(r.references={});var i=this.loop_re_over_block(n,e,function(e){e[2]&&"<"==e[2][0]&&">"==e[2][e[2].length-1]&&(e[2]=e[2].substring(1,e[2].length-1));var t=r.references[e[1].toLowerCase()]={href:e[2]};void 0!==e[4]?t.title=e[4]:void 0!==e[5]&&(t.title=e[5])});return i.length&&t.unshift(s(i,e.trailing)),[]}},para:function(e,t){return[["para"].concat(this.processInline(e))]}}},t.dialects.Gruber.inline={__oneElement__:function(e,t,n){var r;t=t||this.dialect.inline.__patterns__;var i,s=new RegExp("([\\s\\S]*?)("+(t.source||t)+")");return r=s.exec(e),r?r[1]?[r[1].length,r[1]]:(r[2]in this.dialect.inline&&(i=this.dialect.inline[r[2]].call(this,e.substr(r.index),r,n||[])),i=i||[r[2].length,r[2]],i):[e.length,e]},__call__:function(e,t){var n,r=[];function i(e){"string"==typeof e&&"string"==typeof r[r.length-1]?r[r.length-1]+=e:r.push(e)}while(e.length>0)n=this.dialect.inline.__oneElement__.call(this,e,t,r),e=e.substr(n.shift()),u(n,i);return r},"]":function(){},"}":function(){},__escape__:/^\\[\\`\*_{}\[\]()#\+.!\-]/,"\\":function(e){return this.dialect.inline.__escape__.exec(e)?[2,e.charAt(1)]:[1,"\\"]},"![":function(e){var t=e.match(/^!\[(.*?)\][ \t]*\([ \t]*([^")]*?)(?:[ \t]+(["'])(.*?)\3)?[ \t]*\)/);if(t){t[2]&&"<"==t[2][0]&&">"==t[2][t[2].length-1]&&(t[2]=t[2].substring(1,t[2].length-1)),t[2]=this.dialect.inline.__call__.call(this,t[2],/\\/)[0];var n={alt:t[1],href:t[2]||""};return void 0!==t[4]&&(n.title=t[4]),[t[0].length,["img",n]]}return t=e.match(/^!\[(.*?)\][ \t]*\[(.*?)\]/),t?[t[0].length,["img_ref",{alt:t[1],ref:t[2].toLowerCase(),original:t[0]}]]:[2,"!["]},"[":function(e){var n=String(e),r=t.DialectHelpers.inline_until_char.call(this,e.substr(1),"]");if(!r)return[1,"["];var i,s,a=1+r[0],l=r[1];e=e.substr(a);var o=e.match(/^\s*\([ \t]*([^"']*)(?:[ \t]+(["'])(.*?)\2)?[ \t]*\)/);if(o){var c=o[1];if(a+=o[0].length,c&&"<"==c[0]&&">"==c[c.length-1]&&(c=c.substring(1,c.length-1)),!o[3])for(var u=1,f=0;f<c.length;f++)switch(c[f]){case"(":u++;break;case")":0==--u&&(a-=c.length-f,c=c.substring(0,f));break}return c=this.dialect.inline.__call__.call(this,c,/\\/)[0],s={href:c||""},void 0!==o[3]&&(s.title=o[3]),i=["link",s].concat(l),[a,i]}return o=e.match(/^\s*\[(.*?)\]/),o?(a+=o[0].length,s={ref:(o[1]||String(l)).toLowerCase(),original:n.substr(0,a)},i=["link_ref",s].concat(l),[a,i]):1==l.length&&"string"==typeof l[0]?(s={ref:l[0].toLowerCase(),original:n.substr(0,a)},i=["link_ref",s,l[0]],[a,i]):[1,"["]},"<":function(e){var t;return null!=(t=e.match(/^<(?:((https?|ftp|mailto):[^>]+)|(.*?@.*?\.[a-zA-Z]+))>/))?t[3]?[t[0].length,["link",{href:"mailto:"+t[3]},t[3]]]:"mailto"==t[2]?[t[0].length,["link",{href:t[1]},t[1].substr("mailto:".length)]]:[t[0].length,["link",{href:t[1]},t[1]]]:[1,"<"]},"`":function(e){var t=e.match(/(`+)(([\s\S]*?)\1)/);return t&&t[2]?[t[1].length+t[2].length,["inlinecode",t[3]]]:[1,"`"]},"  \n":function(e){return[3,["linebreak"]]}},t.dialects.Gruber.inline["**"]=o("strong","**"),t.dialects.Gruber.inline["__"]=o("strong","__"),t.dialects.Gruber.inline["*"]=o("em","*"),t.dialects.Gruber.inline["_"]=o("em","_"),t.buildBlockOrder=function(e){var t=[];for(var n in e)"__order__"!=n&&"__call__"!=n&&t.push(n);e.__order__=t},t.buildInlinePatterns=function(e){var t=[];for(var n in e)if(!n.match(/^__.*__$/)){var r=n.replace(/([\\.*+?|()\[\]{}])/g,"\\$1").replace(/\n/,"\\n");t.push(1==n.length?r:"(?:"+r+")")}t=t.join("|"),e.__patterns__=t;var i=e.__call__;e.__call__=function(e,n){return void 0!=n?i.call(this,e,n):i.call(this,e,t)}},t.DialectHelpers={},t.DialectHelpers.inline_until_char=function(e,t){var n=0,r=[];while(1){if(e.charAt(n)==t)return n++,[n,r];if(n>=e.length)return null;var i=this.dialect.inline.__oneElement__.call(this,e.substr(n));n+=i[0],r.push.apply(r,i.slice(1))}},t.subclassDialect=function(e){function t(){}function n(){}return t.prototype=e.block,n.prototype=e.inline,{block:new t,inline:new n}},t.buildBlockOrder(t.dialects.Gruber.block),t.buildInlinePatterns(t.dialects.Gruber.inline),t.dialects.Maruku=t.subclassDialect(t.dialects.Gruber),t.dialects.Maruku.processMetaHash=function(e){for(var t=c(e),n={},r=0;r<t.length;++r)if(/^#/.test(t[r]))n.id=t[r].substring(1);else if(/^\./.test(t[r]))n["class"]?n["class"]=n["class"]+t[r].replace(/./," "):n["class"]=t[r].substring(1);else if(/\=/.test(t[r])){var i=t[r].split(/\=/);n[i[0]]=i[1]}return n},t.dialects.Maruku.block.document_meta=function(e,t){if(!(e.lineNumber>1)&&e.match(/^(?:\w+:.*\n)*\w+:.*$/)){g(this.tree)||this.tree.splice(1,0,{});var n=e.split(/\n/);for(p in n){var r=n[p].match(/(\w+):\s*(.*)$/),i=r[1].toLowerCase(),s=r[2];this.tree[1][i]=s}return[]}},t.dialects.Maruku.block.block_meta=function(e,t){var n=e.match(/(^|\n) {0,3}\{:\s*((?:\\\}|[^\}])*)\s*\}$/);if(n){var r,i=this.dialect.processMetaHash(n[2]);if(""===n[1]){var s=this.tree[this.tree.length-1];if(r=g(s),"string"===typeof s)return;for(a in r||(r={},s.splice(1,0,r)),i)r[a]=i[a];return[]}var l=e.replace(/\n.*$/,""),o=this.processBlock(l,[]);for(a in r=g(o[0]),r||(r={},o[0].splice(1,0,r)),i)r[a]=i[a];return o}},t.dialects.Maruku.block.definition_list=function(e,t){var n,r=/^((?:[^\s:].*\n)+):\s+([\s\S]+)$/,i=["dl"];if(l=e.match(r)){var s=[e];while(t.length&&r.exec(t[0]))s.push(t.shift());for(var a=0;a<s.length;++a){var l=s[a].match(r),o=l[1].replace(/\n$/,"").split(/\n/),c=l[2].split(/\n:\s+/);for(n=0;n<o.length;++n)i.push(["dt",o[n]]);for(n=0;n<c.length;++n)i.push(["dd"].concat(this.processInline(c[n].replace(/(\n)\s+/,"$1"))))}return[i]}},t.dialects.Maruku.block.table=function(e,t){var n,r,i=function(e,t){t=t||"\\s",t.match(/^[\\|\[\]{}?*.+^$]$/)&&(t="\\"+t);var n,r=[],i=new RegExp("^((?:\\\\.|[^\\\\"+t+"])*)"+t+"(.*)");while(n=e.match(i))r.push(n[1]),e=n[2];return r.push(e),r},s=/^ {0,3}\|(.+)\n {0,3}\|\s*([\-:]+[\-| :]*)\n((?:\s*\|.*(?:\n|$))*)(?=\n|$)/,a=/^ {0,3}(\S(?:\\.|[^\\|])*\|.*)\n {0,3}([\-:]+\s*\|[\-| :]*)\n((?:(?:\\.|[^\\|])*\|.*(?:\n|$))*)(?=\n|$)/;if(r=e.match(s))r[3]=r[3].replace(/^\s*\|/gm,"");else if(!(r=e.match(a)))return;var l=["table",["thead",["tr"]],["tbody"]];r[2]=r[2].replace(/\|\s*$/,"").split("|");var o=[];for(u(r[2],function(e){e.match(/^\s*-+:\s*$/)?o.push({align:"right"}):e.match(/^\s*:-+\s*$/)?o.push({align:"left"}):e.match(/^\s*:-+:\s*$/)?o.push({align:"center"}):o.push({})}),r[1]=i(r[1].replace(/\|\s*$/,""),"|"),n=0;n<r[1].length;n++)l[1][1].push(["th",o[n]||{}].concat(this.processInline(r[1][n].trim())));return u(r[3].replace(/\|\s*$/gm,"").split("\n"),function(e){var t=["tr"];for(e=i(e,"|"),n=0;n<e.length;n++)t.push(["td",o[n]||{}].concat(this.processInline(e[n].trim())));l[2].push(t)},this),[l]},t.dialects.Maruku.inline["{:"]=function(e,t,n){if(!n.length)return[2,"{:"];var r=n[n.length-1];if("string"===typeof r)return[2,"{:"];var i=e.match(/^\{:\s*((?:\\\}|[^\}])*)\s*\}/);if(!i)return[2,"{:"];var s=this.dialect.processMetaHash(i[1]),a=g(r);for(var l in a||(a={},r.splice(1,0,a)),s)a[l]=s[l];return[i[0].length,""]},t.dialects.Maruku.inline.__escape__=/^\\[\\`\*_{}\[\]()#\+.!\-|:]/,t.buildBlockOrder(t.dialects.Maruku.block),t.buildInlinePatterns(t.dialects.Maruku.inline);var u,f=Array.isArray||function(e){return"[object Array]"==Object.prototype.toString.call(e)};u=Array.prototype.forEach?function(e,t,n){return e.forEach(t,n)}:function(e,t,n){for(var r=0;r<e.length;r++)t.call(n||e,e[r],r,e)};var h=function(e){for(var t in e)if(hasOwnProperty.call(e,t))return!1;return!0};function g(e){return f(e)&&e.length>1&&"object"===typeof e[1]&&!f(e[1])?e[1]:void 0}function d(e){return e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;")}function v(e){if("string"===typeof e)return d(e);var t=e.shift(),n={},r=[];!e.length||"object"!==typeof e[0]||e[0]instanceof Array||(n=e.shift());while(e.length)r.push(v(e.shift()));var i="";for(var s in n)i+=" "+s+'="'+d(n[s])+'"';return"img"==t||"br"==t||"hr"==t?"<"+t+i+"/>":"<"+t+i+">"+r.join("")+"</"+t+">"}function b(e,t,n){var r;n=n||{};var i=e.slice(0);"function"===typeof n.preprocessTreeNode&&(i=n.preprocessTreeNode(i,t));var s=g(i);if(s){for(r in i[1]={},s)i[1][r]=s[r];s=i[1]}if("string"===typeof i)return i;switch(i[0]){case"header":i[0]="h"+i[1].level,delete i[1].level;break;case"bulletlist":i[0]="ul";break;case"numberlist":i[0]="ol";break;case"listitem":i[0]="li";break;case"para":i[0]="p";break;case"markdown":i[0]="html",s&&delete s.references;break;case"code_block":i[0]="pre",r=s?2:1;var a=["code"];a.push.apply(a,i.splice(r,i.length-r)),i[r]=a;break;case"inlinecode":i[0]="code";break;case"img":i[1].src=i[1].href,delete i[1].href;break;case"linebreak":i[0]="br";break;case"link":i[0]="a";break;case"link_ref":i[0]="a";var l=t[s.ref];if(!l)return s.original;delete s.ref,s.href=l.href,l.title&&(s.title=l.title),delete s.original;break;case"img_ref":i[0]="img";l=t[s.ref];if(!l)return s.original;delete s.ref,s.src=l.href,l.title&&(s.title=l.title),delete s.original;break}if(r=1,s){for(var o in i[1]){r=2;break}1===r&&i.splice(r,1)}for(;r<i.length;++r)i[r]=b(i[r],t,n);return i}function _(e){var t=g(e)?2:1;while(t<e.length)"string"===typeof e[t]?t+1<e.length&&"string"===typeof e[t+1]?e[t]+=e.splice(t+1,1)[0]:++t:(_(e[t]),++t)}e.renderJsonML=function(e,t){t=t||{},t.root=t.root||!1;var n=[];if(t.root)n.push(v(e));else{e.shift(),!e.length||"object"!==typeof e[0]||e[0]instanceof Array||e.shift();while(e.length)n.push(v(e.shift()))}return n.join("\n\n")}})(function(){return t}())},"8ddc":function(e,t,n){t.markdown=n("8cb0"),t.parse=t.markdown.toHTML},a481:function(e,t,n){n("214f")("replace",2,function(e,t,n){return[function(r,i){"use strict";var s=e(this),a=void 0==r?void 0:r[t];return void 0!==a?a.call(r,s,i):n.call(String(s),r,i)},n]})},d60a:function(e,t){e.exports=function(e){return e&&"object"===typeof e&&"function"===typeof e.copy&&"function"===typeof e.fill&&"function"===typeof e.readUInt8}}}]);
//# sourceMappingURL=data-resource~datasets.cd8fcce6.js.map