"use strict";(self["webpackChunkmy_project"]=self["webpackChunkmy_project"]||[]).push([[876],{7876:function(s,e,n){n.r(e),n.d(e,{default:function(){return f}});var t=n(3396),o=n(9242);const a={class:"container mt-5"},r={class:"col-md-6"},i=(0,t._)("h1",{class:"h3 mb-3 font-weight-normal"},"請先登入",-1),l={class:"mb-2"},d=(0,t._)("label",{for:"inputEmail",class:"sr-only"},"Email address",-1),u={class:"mb-2"},c=(0,t._)("label",{for:"inputPassword",class:"sr-only"},"Password",-1),p=(0,t._)("div",{class:"text-end mt-4"},[(0,t._)("button",{class:"btn btn-lg btn-primary btn-block",type:"submit"},"登入")],-1);function m(s,e,n,m,h,b){const w=(0,t.up)("loadingTip");return(0,t.wg)(),(0,t.iD)(t.HY,null,[(0,t.Wm)(w,{active:h.isLoading},null,8,["active"]),(0,t._)("div",a,[(0,t._)("form",{class:"row justify-content-center",onSubmit:e[2]||(e[2]=(0,o.iM)(((...s)=>b.signIn&&b.signIn(...s)),["prevent"]))},[(0,t._)("div",r,[i,(0,t._)("div",l,[d,(0,t.wy)((0,t._)("input",{type:"email",id:"inputEmail",class:"form-control",placeholder:"Email address",required:"",autofocus:"","onUpdate:modelValue":e[0]||(e[0]=s=>h.user.username=s)},null,512),[[o.nr,h.user.username]])]),(0,t._)("div",u,[c,(0,t.wy)((0,t._)("input",{type:"password",id:"inputPassword",class:"form-control",placeholder:"Password",required:"","onUpdate:modelValue":e[1]||(e[1]=s=>h.user.password=s)},null,512),[[o.nr,h.user.password]])]),p])],32)])],64)}var h={data(){return{user:{username:"",password:""},isLoading:!1}},methods:{signIn(){const s="https://vue3-course-api.hexschool.io/admin/signin";console.log(s),this.isLoading=!0,this.$http.post(s,this.user).then((s=>{if(s.data.success){const e=s.data.token,n=s.data.expired;document.cookie=`hexToken=${e}; expires=${new Date(n)}`,console.log(s),this.$router.push("/dashboard/products"),this.isLoading=!1}}))}}},b=n(89);const w=(0,b.Z)(h,[["render",m]]);var f=w}}]);
//# sourceMappingURL=876.acc4b411.js.map