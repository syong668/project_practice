(self["webpackChunkmy_project"]=self["webpackChunkmy_project"]||[]).push([[373],{1884:function(t,e,n){n(1703),
/*!
  * Bootstrap base-component.js v5.1.3 (https://getbootstrap.com/)
  * Copyright 2011-2021 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */
function(e,o){t.exports=o(n(3581),n(4130))}(0,(function(t,e){"use strict";const n=t=>t&&"object"===typeof t&&"default"in t?t:{default:t},o=n(t),a=n(e),i=1e3,l="transitionend",r=t=>{if(!t)return 0;let{transitionDuration:e,transitionDelay:n}=window.getComputedStyle(t);const o=Number.parseFloat(e),a=Number.parseFloat(n);return o||a?(e=e.split(",")[0],n=n.split(",")[0],(Number.parseFloat(e)+Number.parseFloat(n))*i):0},s=t=>{t.dispatchEvent(new Event(l))},d=t=>!(!t||"object"!==typeof t)&&("undefined"!==typeof t.jquery&&(t=t[0]),"undefined"!==typeof t.nodeType),c=t=>d(t)?t.jquery?t[0]:t:"string"===typeof t&&t.length>0?document.querySelector(t):null,u=t=>{"function"===typeof t&&t()},p=(t,e,n=!0)=>{if(!n)return void u(t);const o=5,a=r(e)+o;let i=!1;const d=({target:n})=>{n===e&&(i=!0,e.removeEventListener(l,d),u(t))};e.addEventListener(l,d),setTimeout((()=>{i||s(e)}),a)},f="5.1.3";class b{constructor(t){t=c(t),t&&(this._element=t,o.default.set(this._element,this.constructor.DATA_KEY,this))}dispose(){o.default.remove(this._element,this.constructor.DATA_KEY),a.default.off(this._element,this.constructor.EVENT_KEY),Object.getOwnPropertyNames(this).forEach((t=>{this[t]=null}))}_queueCallback(t,e,n=!0){p(t,e,n)}static getInstance(t){return o.default.get(c(t),this.DATA_KEY)}static getOrCreateInstance(t,e={}){return this.getInstance(t)||new this(t,"object"===typeof e?e:null)}static get VERSION(){return f}static get NAME(){throw new Error('You have to implement the static method "NAME", for each component!')}static get DATA_KEY(){return`bs.${this.NAME}`}static get EVENT_KEY(){return`.${this.DATA_KEY}`}}return b}))},3581:function(t){
/*!
  * Bootstrap data.js v5.1.3 (https://getbootstrap.com/)
  * Copyright 2011-2021 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */
(function(e,n){t.exports=n()})(0,(function(){"use strict";const t=new Map,e={set(e,n,o){t.has(e)||t.set(e,new Map);const a=t.get(e);a.has(n)||0===a.size?a.set(n,o):console.error(`Bootstrap doesn't allow more than one instance per element. Bound instance: ${Array.from(a.keys())[0]}.`)},get(e,n){return t.has(e)&&t.get(e).get(n)||null},remove(e,n){if(!t.has(e))return;const o=t.get(e);o.delete(n),0===o.size&&t.delete(e)}};return e}))},4130:function(t){
/*!
  * Bootstrap event-handler.js v5.1.3 (https://getbootstrap.com/)
  * Copyright 2011-2021 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */
(function(e,n){t.exports=n()})(0,(function(){"use strict";const t=()=>{const{jQuery:t}=window;return t&&!document.body.hasAttribute("data-bs-no-jquery")?t:null},e=/[^.]*(?=\..*)\.|.*/,n=/\..*/,o=/::\d+$/,a={};let i=1;const l={mouseenter:"mouseover",mouseleave:"mouseout"},r=/^(mouseenter|mouseleave)/i,s=new Set(["click","dblclick","mouseup","mousedown","contextmenu","mousewheel","DOMMouseScroll","mouseover","mouseout","mousemove","selectstart","selectend","keydown","keypress","keyup","orientationchange","touchstart","touchmove","touchend","touchcancel","pointerdown","pointermove","pointerup","pointerleave","pointercancel","gesturestart","gesturechange","gestureend","focus","blur","change","reset","select","submit","focusin","focusout","load","unload","beforeunload","resize","move","DOMContentLoaded","readystatechange","error","abort","scroll"]);function d(t,e){return e&&`${e}::${i++}`||t.uidEvent||i++}function c(t){const e=d(t);return t.uidEvent=e,a[e]=a[e]||{},a[e]}function u(t,e){return function n(o){return o.delegateTarget=t,n.oneOff&&y.off(t,o.type,e),e.apply(t,[o])}}function p(t,e,n){return function o(a){const i=t.querySelectorAll(e);for(let{target:l}=a;l&&l!==this;l=l.parentNode)for(let r=i.length;r--;)if(i[r]===l)return a.delegateTarget=l,o.oneOff&&y.off(t,a.type,e,n),n.apply(l,[a]);return null}}function f(t,e,n=null){const o=Object.keys(t);for(let a=0,i=o.length;a<i;a++){const i=t[o[a]];if(i.originalHandler===e&&i.delegationSelector===n)return i}return null}function b(t,e,n){const o="string"===typeof e,a=o?n:e;let i=_(t);const l=s.has(i);return l||(i=t),[o,a,i]}function g(t,n,o,a,i){if("string"!==typeof n||!t)return;if(o||(o=a,a=null),r.test(n)){const t=t=>function(e){if(!e.relatedTarget||e.relatedTarget!==e.delegateTarget&&!e.delegateTarget.contains(e.relatedTarget))return t.call(this,e)};a?a=t(a):o=t(o)}const[l,s,g]=b(n,o,a),m=c(t),h=m[g]||(m[g]={}),_=f(h,s,l?o:null);if(_)return void(_.oneOff=_.oneOff&&i);const y=d(s,n.replace(e,"")),v=l?p(t,o,a):u(t,o);v.delegationSelector=l?o:null,v.originalHandler=s,v.oneOff=i,v.uidEvent=y,h[y]=v,t.addEventListener(g,v,l)}function m(t,e,n,o,a){const i=f(e[n],o,a);i&&(t.removeEventListener(n,i,Boolean(a)),delete e[n][i.uidEvent])}function h(t,e,n,o){const a=e[n]||{};Object.keys(a).forEach((i=>{if(i.includes(o)){const o=a[i];m(t,e,n,o.originalHandler,o.delegationSelector)}}))}function _(t){return t=t.replace(n,""),l[t]||t}const y={on(t,e,n,o){g(t,e,n,o,!1)},one(t,e,n,o){g(t,e,n,o,!0)},off(t,e,n,a){if("string"!==typeof e||!t)return;const[i,l,r]=b(e,n,a),s=r!==e,d=c(t),u=e.startsWith(".");if("undefined"!==typeof l){if(!d||!d[r])return;return void m(t,d,r,l,i?n:null)}u&&Object.keys(d).forEach((n=>{h(t,d,n,e.slice(1))}));const p=d[r]||{};Object.keys(p).forEach((n=>{const a=n.replace(o,"");if(!s||e.includes(a)){const e=p[n];m(t,d,r,e.originalHandler,e.delegationSelector)}}))},trigger(e,n,o){if("string"!==typeof n||!e)return null;const a=t(),i=_(n),l=n!==i,r=s.has(i);let d,c=!0,u=!0,p=!1,f=null;return l&&a&&(d=a.Event(n,o),a(e).trigger(d),c=!d.isPropagationStopped(),u=!d.isImmediatePropagationStopped(),p=d.isDefaultPrevented()),r?(f=document.createEvent("HTMLEvents"),f.initEvent(i,c,!0)):f=new CustomEvent(n,{bubbles:c,cancelable:!0}),"undefined"!==typeof o&&Object.keys(o).forEach((t=>{Object.defineProperty(f,t,{get(){return o[t]}})})),p&&f.preventDefault(),u&&e.dispatchEvent(f),f.defaultPrevented&&"undefined"!==typeof d&&d.preventDefault(),f}};return y}))},7317:function(t){
/*!
  * Bootstrap selector-engine.js v5.1.3 (https://getbootstrap.com/)
  * Copyright 2011-2021 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */
(function(e,n){t.exports=n()})(0,(function(){"use strict";const t=t=>!(!t||"object"!==typeof t)&&("undefined"!==typeof t.jquery&&(t=t[0]),"undefined"!==typeof t.nodeType),e=e=>!(!t(e)||0===e.getClientRects().length)&&"visible"===getComputedStyle(e).getPropertyValue("visibility"),n=t=>!t||t.nodeType!==Node.ELEMENT_NODE||(!!t.classList.contains("disabled")||("undefined"!==typeof t.disabled?t.disabled:t.hasAttribute("disabled")&&"false"!==t.getAttribute("disabled"))),o=3,a={find(t,e=document.documentElement){return[].concat(...Element.prototype.querySelectorAll.call(e,t))},findOne(t,e=document.documentElement){return Element.prototype.querySelector.call(e,t)},children(t,e){return[].concat(...t.children).filter((t=>t.matches(e)))},parents(t,e){const n=[];let a=t.parentNode;while(a&&a.nodeType===Node.ELEMENT_NODE&&a.nodeType!==o)a.matches(e)&&n.push(a),a=a.parentNode;return n},prev(t,e){let n=t.previousElementSibling;while(n){if(n.matches(e))return[n];n=n.previousElementSibling}return[]},next(t,e){let n=t.nextElementSibling;while(n){if(n.matches(e))return[n];n=n.nextElementSibling}return[]},focusableChildren(t){const o=["a","button","input","textarea","select","details","[tabindex]",'[contenteditable="true"]'].map((t=>`${t}:not([tabindex^="-"])`)).join(", ");return this.find(o,t).filter((t=>!n(t)&&e(t)))}};return a}))},9955:function(t,e,n){n(1703),
/*!
  * Bootstrap tab.js v5.1.3 (https://getbootstrap.com/)
  * Copyright 2011-2021 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */
function(e,o){t.exports=o(n(4130),n(7317),n(1884))}(0,(function(t,e,n){"use strict";const o=t=>t&&"object"===typeof t&&"default"in t?t:{default:t},a=o(t),i=o(e),l=o(n),r=t=>{let e=t.getAttribute("data-bs-target");if(!e||"#"===e){let n=t.getAttribute("href");if(!n||!n.includes("#")&&!n.startsWith("."))return null;n.includes("#")&&!n.startsWith("#")&&(n=`#${n.split("#")[1]}`),e=n&&"#"!==n?n.trim():null}return e},s=t=>{const e=r(t);return e?document.querySelector(e):null},d=t=>!t||t.nodeType!==Node.ELEMENT_NODE||(!!t.classList.contains("disabled")||("undefined"!==typeof t.disabled?t.disabled:t.hasAttribute("disabled")&&"false"!==t.getAttribute("disabled"))),c=t=>{t.offsetHeight},u=()=>{const{jQuery:t}=window;return t&&!document.body.hasAttribute("data-bs-no-jquery")?t:null},p=[],f=t=>{"loading"===document.readyState?(p.length||document.addEventListener("DOMContentLoaded",(()=>{p.forEach((t=>t()))})),p.push(t)):t()},b=t=>{f((()=>{const e=u();if(e){const n=t.NAME,o=e.fn[n];e.fn[n]=t.jQueryInterface,e.fn[n].Constructor=t,e.fn[n].noConflict=()=>(e.fn[n]=o,t.jQueryInterface)}}))},g="tab",m="bs.tab",h=`.${m}`,_=".data-api",y=`hide${h}`,v=`hidden${h}`,E=`show${h}`,w=`shown${h}`,k=`click${h}${_}`,N="dropdown-menu",L="active",T="fade",A="show",x=".dropdown",S=".nav, .list-group",D=".active",$=":scope > li > .active",O='[data-bs-toggle="tab"], [data-bs-toggle="pill"], [data-bs-toggle="list"]',C=".dropdown-toggle",j=":scope > .dropdown-menu .active";class q extends l.default{static get NAME(){return g}show(){if(this._element.parentNode&&this._element.parentNode.nodeType===Node.ELEMENT_NODE&&this._element.classList.contains(L))return;let t;const e=s(this._element),n=this._element.closest(S);if(n){const e="UL"===n.nodeName||"OL"===n.nodeName?$:D;t=i.default.find(e,n),t=t[t.length-1]}const o=t?a.default.trigger(t,y,{relatedTarget:this._element}):null,l=a.default.trigger(this._element,E,{relatedTarget:t});if(l.defaultPrevented||null!==o&&o.defaultPrevented)return;this._activate(this._element,n);const r=()=>{a.default.trigger(t,v,{relatedTarget:this._element}),a.default.trigger(this._element,w,{relatedTarget:t})};e?this._activate(e,e.parentNode,r):r()}_activate(t,e,n){const o=!e||"UL"!==e.nodeName&&"OL"!==e.nodeName?i.default.children(e,D):i.default.find($,e),a=o[0],l=n&&a&&a.classList.contains(T),r=()=>this._transitionComplete(t,a,n);a&&l?(a.classList.remove(A),this._queueCallback(r,t,!0)):r()}_transitionComplete(t,e,n){if(e){e.classList.remove(L);const t=i.default.findOne(j,e.parentNode);t&&t.classList.remove(L),"tab"===e.getAttribute("role")&&e.setAttribute("aria-selected",!1)}t.classList.add(L),"tab"===t.getAttribute("role")&&t.setAttribute("aria-selected",!0),c(t),t.classList.contains(T)&&t.classList.add(A);let o=t.parentNode;if(o&&"LI"===o.nodeName&&(o=o.parentNode),o&&o.classList.contains(N)){const e=t.closest(x);e&&i.default.find(C,e).forEach((t=>t.classList.add(L))),t.setAttribute("aria-expanded",!0)}n&&n()}static jQueryInterface(t){return this.each((function(){const e=q.getOrCreateInstance(this);if("string"===typeof t){if("undefined"===typeof e[t])throw new TypeError(`No method named "${t}"`);e[t]()}}))}}return a.default.on(document,k,O,(function(t){if(["A","AREA"].includes(this.tagName)&&t.preventDefault(),d(this))return;const e=q.getOrCreateInstance(this);e.show()})),b(q),q}))},7373:function(t,e,n){"use strict";n.r(e),n.d(e,{default:function(){return st}});var o=n(3396),a=n(7139);const i={class:"container"},l={"aria-label":"breadcrumb"},r={class:"breadcrumb"},s={class:"breadcrumb-item"},d=(0,o.Uk)("ALL"),c={class:"breadcrumb-item active","aria-current":"page"},u={class:"row justify-content-center mb-5"},p={class:"col-md-6 d-flex flex-column align-items-center"},f={class:"other-img bg-light"},b=["src","alt","onClick"],g={class:"col-md-4 mt-4 mt-md-0 text-Secondary"},m={class:"h3 mb-3 fw-bold"},h=(0,o._)("hr",null,null,-1),_={class:"my-4"},y={key:0},v={key:1,class:"h5 text-danger"},E={key:2,class:"h5"},w={key:0,class:"mb-2"},k=(0,o._)("span",null,"尺寸",-1),N=["disabled"],L={key:0,selected:""},T=(0,o._)("option",{value:"XS",disabled:""},"XS(已售完)",-1),A=["selected"],x=(0,o._)("option",{value:"M",disabled:""},"M(已售完)",-1),S=(0,o._)("option",{value:"L",disabled:""},"L(已售完)",-1),D={key:1,class:"mb-2"},$=(0,o._)("span",null,"尺寸",-1),O=["disabled"],C={key:0,selected:""},j=(0,o._)("option",{value:"35",disabled:""},"35(已售完)",-1),q=["selected"],I=(0,o._)("option",{value:"37",disabled:""},"37(已售完)",-1),M=(0,o._)("option",{value:"38",disabled:""},"38(已售完)",-1),z=(0,o._)("option",{value:"39",disabled:""},"39(已售完)",-1),P=(0,o._)("option",{value:"40",disabled:""},"40(已售完)",-1),Y={class:"mb-3"},H=(0,o._)("span",null,"數量",-1),K={class:"input-group"},U={class:"input-group-prepend"},W=(0,o._)("i",{class:"bi bi-dash"},null,-1),F=[W],Q={class:"form-control text-center"},V={class:"input-group-append"},B=(0,o._)("i",{class:"bi bi-plus"},null,-1),R=[B],X={key:0},Z={key:1},G=(0,o._)("button",{type:"button",class:"btn btn-outline-primary rounded-0 w-100"}," 加入追蹤 ",-1),J=(0,o._)("ul",{class:"nav nav-tabs mt-5",id:"myTab",role:"tablist"},[(0,o._)("li",{class:"nav-item",role:"presentation"},[(0,o._)("button",{class:"nav-link active",id:"home-tab","data-bs-toggle":"tab","data-bs-target":"#home",type:"button",role:"tab","aria-controls":"home","aria-selected":"true"},"商品描述")]),(0,o._)("li",{class:"nav-item",role:"presentation"},[(0,o._)("button",{class:"nav-link",id:"profile-tab","data-bs-toggle":"tab","data-bs-target":"#profile",type:"button",role:"tab","aria-controls":"profile","aria-selected":"false"},"商品材質")]),(0,o._)("li",{class:"nav-item",role:"presentation"},[(0,o._)("button",{class:"nav-link",id:"contact-tab","data-bs-toggle":"tab","data-bs-target":"#contact",type:"button",role:"tab","aria-controls":"contact","aria-selected":"false"},"尺寸表")])],-1),tt={class:"tab-content pt-3",id:"myTabContent"},et={style:{"white-space":"pre-wrap"},class:"tab-pane fade show active",id:"home",role:"tabpanel","aria-labelledby":"home-tab"},nt=(0,o._)("div",{class:"tab-pane fade",id:"profile",role:"tabpanel","aria-labelledby":"profile-tab"},[(0,o.Uk)(" 材質 ：尼龍80%/彈性纖維20% "),(0,o._)("br"),(0,o.Uk)(" 厚度 ：一般 "),(0,o._)("br"),(0,o.Uk)(" 內裏 ：有 "),(0,o._)("br"),(0,o.Uk)(" 彈性 ：有 "),(0,o._)("br"),(0,o.Uk)(" 產地 ：台灣 ")],-1),ot=(0,o._)("div",{class:"tab-pane fade",id:"contact",role:"tabpanel","aria-labelledby":"contact-tab"},[(0,o._)("table",{class:"table table-sm"},[(0,o._)("tbody",null,[(0,o._)("tr",null,[(0,o._)("td",null,"尺寸(cm)"),(0,o._)("td",null,"XS"),(0,o._)("td",null,"S"),(0,o._)("td",null,"M"),(0,o._)("td",null,"L")]),(0,o._)("tr",null,[(0,o._)("td",null,"胸圍"),(0,o._)("td",null,"79"),(0,o._)("td",null,"84"),(0,o._)("td",null,"89"),(0,o._)("td",null,"94")]),(0,o._)("tr",null,[(0,o._)("td",null,"下胸圍"),(0,o._)("td",null,"69"),(0,o._)("td",null,"74"),(0,o._)("td",null,"79"),(0,o._)("td",null,"84")]),(0,o._)("tr",null,[(0,o._)("td",null,"腰圍"),(0,o._)("td",null,"67"),(0,o._)("td",null,"69"),(0,o._)("td",null,"74"),(0,o._)("td",null,"79")]),(0,o._)("tr",null,[(0,o._)("td",null,"臀圍"),(0,o._)("td",null,"89"),(0,o._)("td",null,"94"),(0,o._)("td",null,"99"),(0,o._)("td",null,"104")])])])],-1);function at(t,e,n,W,B,at){const it=(0,o.up)("loadingTip"),lt=(0,o.up)("router-link");return(0,o.wg)(),(0,o.iD)(o.HY,null,[(0,o.Wm)(it,{active:B.isLoading},null,8,["active"]),(0,o._)("div",i,[(0,o._)("nav",l,[(0,o._)("ol",r,[(0,o._)("li",s,[(0,o.Wm)(lt,{class:"text-secondary",to:"/user/products"},{default:(0,o.w5)((()=>[d])),_:1})]),(0,o._)("li",c,(0,a.zw)(B.product.category),1)])]),(0,o._)("div",u,[(0,o._)("div",p,[(0,o._)("div",{class:"index-img",style:(0,a.j5)({backgroundImage:`url(${B.indexImg})`})},null,4),(0,o._)("div",f,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(B.product.images,((t,e)=>((0,o.wg)(),(0,o.iD)("div",{key:e},[(0,o._)("img",{class:"img-fluid",src:t,alt:e,onClick:e=>at.changeImg(t)},null,8,b)])))),128))])]),(0,o._)("div",g,[(0,o._)("div",m,(0,a.zw)(B.product.title),1),(0,o._)("div",null,(0,a.zw)(B.product.description),1),h,(0,o._)("div",_,[B.product.origin_price?((0,o.wg)(),(0,o.iD)("del",y,"NT$"+(0,a.zw)(t.$filters.currency(B.product.origin_price)),1)):(0,o.kq)("",!0),B.product.origin_price?((0,o.wg)(),(0,o.iD)("div",v," NT$"+(0,a.zw)(t.$filters.currency(B.product.price)),1)):((0,o.wg)(),(0,o.iD)("div",E," NT$"+(0,a.zw)(t.$filters.currency(B.product.price)),1))]),"SWIM"==B.product.category||"FITNESS"==B.product.category?((0,o.wg)(),(0,o.iD)("div",w,[k,(0,o._)("select",{class:"form-select rounded-0","aria-label":"Default select example",disabled:0==B.product.unit},[0==B.product.unit?((0,o.wg)(),(0,o.iD)("option",L,"已搶購完畢")):(0,o.kq)("",!0),T,(0,o._)("option",{value:"S",selected:0!=B.product.unit},"S",8,A),x,S],8,N)])):(0,o.kq)("",!0),"SHOES"==B.product.category?((0,o.wg)(),(0,o.iD)("div",D,[$,(0,o._)("select",{class:"form-select rounded-0","aria-label":"Default select example",disabled:0==B.product.unit},[0==B.product.unit?((0,o.wg)(),(0,o.iD)("option",C,"已搶購完畢")):(0,o.kq)("",!0),j,(0,o._)("option",{value:"36",selected:0!=B.product.unit},"36",8,q),I,M,z,P],8,O)])):(0,o.kq)("",!0),(0,o._)("div",Y,[H,(0,o._)("div",K,[(0,o._)("div",U,[(0,o._)("button",{class:(0,a.C_)(["btn btn-primary rounded-0 d-flex align-items-center",{disabled:1==B.qty}]),type:"button",onClick:e[0]||(e[0]=t=>B.qty--)},F,2)]),(0,o._)("span",Q,(0,a.zw)(B.qty),1),(0,o._)("div",V,[(0,o._)("button",{class:"btn btn-primary d-flex align-items-center rounded-0",type:"button",onClick:e[1]||(e[1]=t=>B.qty++)},R)])])]),(0,o._)("div",null,[(0,o._)("button",{type:"button",class:(0,a.C_)(["btn btn-primary rounded-0 w-100 mb-3",{disabled:0==B.product.unit}]),onClick:e[2]||(e[2]=t=>at.addCart(B.product.id))},[0!=B.product.unit?((0,o.wg)(),(0,o.iD)("span",X,"加到購物車")):((0,o.wg)(),(0,o.iD)("span",Z,"補貨中"))],2),G]),J,(0,o._)("div",tt,[(0,o._)("div",et,(0,a.zw)(B.product.content),1),nt,ot])])])])],64)}n(9955);var it={data(){return{product:{},id:"",isLoading:!1,indexImg:"",qty:1}},methods:{getProduct(){const t=`https://vue3-course-api.hexschool.io/api/bear-work/product/${this.id}`;this.isLoading=!0,this.$http.get(t).then((t=>{console.log(t.data.product),this.isLoading=!1,t.data.success&&(this.product=t.data.product,this.indexImg=t.data.product.images[0])}))},changeImg(t){this.indexImg=t},addCart(){this.isLoading=!0;const t="https://vue3-course-api.hexschool.io/api/bear-work/cart",e={product_id:this.id,qty:this.qty};this.$http.post(t,{data:e}).then((t=>{console.log(t),t.data.success?(this.isLoading=!1,this.$swal({icon:"success",title:`${t.data.data.product.title}<br>已加入購物車`,text:"您可至購物車確認選購細項"})):(this.isLoading=!1,this.$swal({icon:"error",title:"商品加入失敗",text:"請重新加入購物車"}))})).catch((t=>{this.isLoading=!1,this.$swal({icon:"error",title:"發生錯誤",text:t,footer:'<a href="">請洽詢管理員</a>'})}))}},created(){this.id=this.$route.params.productId,this.getProduct()}},lt=n(89);const rt=(0,lt.Z)(it,[["render",at]]);var st=rt}}]);
//# sourceMappingURL=373.c50ee35c.js.map