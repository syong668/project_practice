"use strict";(self["webpackChunkmy_project"]=self["webpackChunkmy_project"]||[]).push([[367],{3367:function(t,e,a){a.r(e),a.d(e,{default:function(){return h}});var s=a(3396);const d=(0,s.uE)('<div class="container"><table class="container table mt-5 table-hover"><thead class="table-dark"><tr><th>購買時間</th><th>Email</th><th>購買款項</th><th>應付金額</th><th>是否付款</th><th>編輯</th></tr></thead><tbody class="bg-white"><tr><td></td><td></td><td></td><td></td><td></td><td></td></tr></tbody></table></div>',1);function r(t,e,a,r,i,n){const o=(0,s.up)("loadingTip");return(0,s.wg)(),(0,s.iD)(s.HY,null,[(0,s.Wm)(o,{active:i.isLoading},null,8,["active"]),d],64)}var i={data(){return{orders:[],isLoading:!1}},created(){this.getOrders()},methods:{getOrders(){const t="https://vue3-course-api.hexschool.io/api/bear-work/admin/orders";this.isLoading=!0,this.$http.get(t).then((t=>{console.log(t),t.data.success&&(this.isLoading=!1)}))}}},n=a(89);const o=(0,n.Z)(i,[["render",r]]);var h=o}}]);
//# sourceMappingURL=367.a6018451.js.map