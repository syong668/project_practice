"use strict";(self["webpackChunkmy_project"]=self["webpackChunkmy_project"]||[]).push([[630],{3630:function(a,o,n){n.r(o),n.d(o,{default:function(){return x}});var e=n(3396);const s={class:"container-fluid"};function t(a,o,n,t,l,r){const c=(0,e.up)("Navbar"),i=(0,e.up)("router-view");return(0,e.wg)(),(0,e.iD)(e.HY,null,[(0,e.Wm)(c),(0,e._)("div",s,[(0,e.Wm)(i)])],64)}var l=n(9242);const r={class:"navbar navbar-expand-lg navbar-light bg-light"},c={class:"container-fluid"},i=(0,e._)("a",{class:"navbar-brand",href:"#"},"Navbar",-1),d=(0,e._)("button",{class:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarNavDropdown","aria-controls":"navbarNavDropdown","aria-expanded":"false","aria-label":"Toggle navigation"},[(0,e._)("span",{class:"navbar-toggler-icon"})],-1),u={class:"collapse navbar-collapse",id:"navbarNavDropdown"},p={class:"navbar-nav"},v=(0,e._)("li",{class:"nav-item"},[(0,e._)("a",{class:"nav-link active","aria-current":"page",href:"#"},"Home")],-1),h=(0,e._)("li",{class:"nav-item"},[(0,e._)("a",{class:"nav-link",href:"#"},"Features")],-1),g={class:"nav-item"},b=(0,e._)("li",{class:"nav-item dropdown"},[(0,e._)("a",{class:"nav-link dropdown-toggle",href:"#",id:"navbarDropdownMenuLink",role:"button","data-bs-toggle":"dropdown","aria-expanded":"false"}," Dropdown link "),(0,e._)("ul",{class:"dropdown-menu","aria-labelledby":"navbarDropdownMenuLink"},[(0,e._)("li",null,[(0,e._)("a",{class:"dropdown-item",href:"#"},"Action")]),(0,e._)("li",null,[(0,e._)("a",{class:"dropdown-item",href:"#"},"Another action")]),(0,e._)("li",null,[(0,e._)("a",{class:"dropdown-item",href:"#"},"Something else here")])])],-1);function _(a,o,n,s,t,_){return(0,e.wg)(),(0,e.iD)("nav",r,[(0,e._)("div",c,[i,d,(0,e._)("div",u,[(0,e._)("ul",p,[v,h,(0,e._)("li",g,[(0,e._)("a",{class:"nav-link",href:"#",onClick:o[0]||(o[0]=(0,l.iM)(((...a)=>_.logout&&_.logout(...a)),["prevent"]))},"登出")]),b])])])])}var f={methods:{logout(){const a="https://vue3-course-api.hexschool.io/logout";this.$http.post(a).then((a=>{a.data.success&&(console.log(a),this.$router.push("/login"))}))}}},m=n(89);const w=(0,m.Z)(f,[["render",_]]);var k=w,D={components:{Navbar:k},created(){const a=document.cookie.replace(/(?:(?:^|.*;\s*)hexToken\s*=\s*([^;]*).*$)|^.*$/,"$1");console.log(a),this.$http.defaults.headers.common.Authorization=a;const o="https://vue3-course-api.hexschool.io/api/user/check";console.log(o),this.$http.post(o).then((a=>{console.log(a),console.log(a.data.message),a.data.success||this.$router.push("login")}))}};const $=(0,m.Z)(D,[["render",t]]);var x=$}}]);
//# sourceMappingURL=630.ae8cdc78.js.map