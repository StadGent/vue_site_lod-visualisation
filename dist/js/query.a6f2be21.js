"use strict";(self["webpackChunklod_vis"]=self["webpackChunklod_vis"]||[]).push([[658],{4546:function(e,t,n){n.r(t),n.d(t,{default:function(){return m}});var s=n(6252),o=n(9963);const u={class:"detail-layout"},a=(0,s._)("h1",null,"Query editor",-1),r={key:1,class:"spinner"},i=(0,s._)("div",null,"…loading",-1),l=[i],d={key:2,id:"yasgui"},h=(0,s._)("div",{id:"yasqe"},null,-1),c=(0,s._)("div",{id:"yasr"},null,-1),y=[h,c];function p(e,t,n,i,h,c){return(0,s.wg)(),(0,s.iD)("section",u,[a,(0,s.Wm)(o.uT,{name:"fade",mode:"out-in",onEnter:c.enter},{default:(0,s.w5)((()=>[h.loaded?((0,s.wg)(),(0,s.iD)("div",d,y)):((0,s.wg)(),(0,s.iD)("div",r,l))])),_:1},8,["onEnter"])])}var f={name:"home",data(){return{YASQE:null,YASR:null,loaded:!1}},async mounted(){this.YASQE=await n.e(339).then(n.t.bind(n,3636,23)).then((e=>e.default)),this.YASR=await n.e(273).then(n.t.bind(n,3692,23)).then((e=>e.default)),this.loaded=!0},methods:{enter(){const e=new this.YASQE(document.querySelector("#yasqe"),{sparql:{showQueryButton:!0,endpoint:"https://stad.gent/sparql"}}),t=new this.YASR(document.querySelector("#yasr"),{useGoogleCharts:!1,prefixes:e.getPrefixesFromQuery,outputPlugins:["error","boolean","rawResponse","table","pivot"],output:"table"});e.on("queryResponse",((e,n)=>{t.setResponse(n)})),e.query()}}},w=n(3744);const v=(0,w.Z)(f,[["render",p]]);var m=v}}]);
//# sourceMappingURL=query.a6f2be21.js.map