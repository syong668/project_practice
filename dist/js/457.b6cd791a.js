"use strict";(self["webpackChunkmy_project"]=self["webpackChunkmy_project"]||[]).push([[457],{2457:function(t,i,e){e.r(i),e.d(i,{default:function(){return z}});var o=e(3396),r=e(7139),s=e(9242);const c={class:"container"},a={class:"row mt-4"},d={class:"col-md-2 d-none d-md-block"},l={class:"list-group list-group-flush rounded-0"},n=["onClick"],u={class:"col-12 col-md-10"},g={class:"row"},p={class:"card rounded-0 border-0"},h={class:"text-secondary cursor-hover"},v={class:"product-hover"},k=["onClick"],w=["onClick"],m=["onClick"],y=(0,o._)("p",{class:"fs-3 border border-primary border-end-0 border-start-0 text-center text-primary fw-blod"}," SALE OUT ",-1),C=[y],b=["onClick"],_={key:0,class:"fw-bold text-danger"},f={key:1},$={key:2,class:"fw-bold"};function x(t,i,e,y,x,D){const L=(0,o.up)("loadingTip");return(0,o.wg)(),(0,o.iD)(o.HY,null,[(0,o.Wm)(L,{active:x.isLoading},null,8,["active"]),(0,o._)("div",c,[(0,o.Uk)(" [test]目前選到的分類:"+(0,r.zw)(x.activedCategory)+" ",1),(0,o._)("div",a,[(0,o._)("div",d,[(0,o._)("div",l,[(0,o._)("a",{href:"#",class:"list-group-item list-group-item-action active","aria-current":"true",onClick:i[0]||(i[0]=(0,s.iM)((t=>x.activedCategory=""),["prevent"]))}," 全部商品 "),((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(x.categories,((t,i)=>((0,o.wg)(),(0,o.iD)("a",{key:i,href:"#",class:"list-group-item list-group-item-action",onClick:(0,s.iM)((i=>x.activedCategory=t),["prevent"])},(0,r.zw)(t),9,n)))),128))])]),(0,o._)("div",u,[(0,o._)("div",g,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(x.products,(t=>((0,o.wg)(),(0,o.iD)("div",{class:"col-12 col-sm-6 col-md-4 col-lg-3 mb-3",key:t.id},[(0,o._)("div",p,[(0,o._)("div",h,[(0,o._)("div",v,[(0,o._)("div",{class:"rounded-0 card-imge",style:(0,r.j5)({backgroundImage:`url(${t.imgLink})`})},null,4),(0,o._)("div",{class:"mask",onClick:i=>D.getProduct(t.id)},null,8,k),0!=t.unit?((0,o.wg)(),(0,o.iD)("button",{key:0,type:"button",class:"btn btn-primary add-cart-btn w-100 rounded-0",onClick:(0,s.iM)((i=>D.addCart(t.id)),["prevent"])}," 加入購物車 ",8,w)):(0,o.kq)("",!0),0==t.unit?((0,o.wg)(),(0,o.iD)("div",{key:1,class:"mask-white",onClick:i=>D.getProduct(t.id)},C,8,m)):(0,o.kq)("",!0)]),(0,o._)("div",{class:"pt-1 text-center",onClick:i=>D.getProduct(t.id)},[(0,o._)("div",null,(0,r.zw)(t.title),1),t.origin_price?((0,o.wg)(),(0,o.iD)("div",_," NT$"+(0,r.zw)(t.price),1)):(0,o.kq)("",!0),t.origin_price?((0,o.wg)(),(0,o.iD)("del",f,"NT$"+(0,r.zw)(t.origin_price),1)):((0,o.wg)(),(0,o.iD)("div",$,"NT$"+(0,r.zw)(t.price),1))],8,b)])])])))),128))])])])])],64)}var D={data(){return{product:"",products:"",isLoading:!1,categories:[],activedCategory:""}},computed:{filterProducts(){return this.products.filter((t=>t.category.match(this.activedCategory)))}},methods:{getProducts(){const t="https://vue3-course-api.hexschool.io/api/bear-work/products/all";this.isLoading=!0,this.$http.get(t).then((t=>{t.data.success&&(console.log(t),this.products=t.data.products,this.isLoading=!1,this.getCategories())}))},getProduct(t){this.$router.push(`/user/product/${t}`)},addCart(t){const i="https://vue3-course-api.hexschool.io/api/bear-work/cart",e={product_id:t,qty:1};this.isLoading=!0,this.$http.post(i,{data:e}).then((t=>{t.data.success?(console.log(t),this.isLoading=!1,this.$swal({icon:"success",title:`${t.data.data.product.title}<br>已加入購物車`,text:"您可至購物車確認選購細項"})):(this.isLoading=!1,this.$swal({icon:"error",title:"商品加入失敗",text:"請重新加入購物車"}))})).catch((t=>{this.isLoading=!1,this.$swal({icon:"error",title:"發生錯誤",text:t,footer:'<a href="">請洽詢管理員</a>'})}))},getCategories(){const t=new Set;this.products.forEach((i=>{t.add(i.category)})),this.categories=[...t]}},created(){this.getProducts()}},L=e(89);const P=(0,L.Z)(D,[["render",x]]);var z=P}}]);
//# sourceMappingURL=457.b6cd791a.js.map