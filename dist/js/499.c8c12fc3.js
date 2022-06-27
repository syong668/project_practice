(self["webpackChunkmy_project"]=self["webpackChunkmy_project"]||[]).push([[499],{434:function(t,e,i){i(1703),
/*!
  * Bootstrap collapse.js v5.1.3 (https://getbootstrap.com/)
  * Copyright 2011-2021 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */
function(e,s){t.exports=s(i(3581),i(4130),i(6221),i(7317),i(1884))}(0,(function(t,e,i,s,n){"use strict";const a=t=>t&&"object"===typeof t&&"default"in t?t:{default:t},o=a(t),l=a(e),r=a(i),c=a(s),d=a(n),h=t=>null===t||void 0===t?`${t}`:{}.toString.call(t).match(/\s([a-z]+)/i)[1].toLowerCase(),u=t=>{let e=t.getAttribute("data-bs-target");if(!e||"#"===e){let i=t.getAttribute("href");if(!i||!i.includes("#")&&!i.startsWith("."))return null;i.includes("#")&&!i.startsWith("#")&&(i=`#${i.split("#")[1]}`),e=i&&"#"!==i?i.trim():null}return e},f=t=>{const e=u(t);return e&&document.querySelector(e)?e:null},g=t=>{const e=u(t);return e?document.querySelector(e):null},p=t=>!(!t||"object"!==typeof t)&&("undefined"!==typeof t.jquery&&(t=t[0]),"undefined"!==typeof t.nodeType),m=t=>p(t)?t.jquery?t[0]:t:"string"===typeof t&&t.length>0?document.querySelector(t):null,_=(t,e,i)=>{Object.keys(i).forEach((s=>{const n=i[s],a=e[s],o=a&&p(a)?"element":h(a);if(!new RegExp(n).test(o))throw new TypeError(`${t.toUpperCase()}: Option "${s}" provided type "${o}" but expected type "${n}".`)}))},b=t=>{t.offsetHeight},v=()=>{const{jQuery:t}=window;return t&&!document.body.hasAttribute("data-bs-no-jquery")?t:null},w=[],y=t=>{"loading"===document.readyState?(w.length||document.addEventListener("DOMContentLoaded",(()=>{w.forEach((t=>t()))})),w.push(t)):t()},k=t=>{y((()=>{const e=v();if(e){const i=t.NAME,s=e.fn[i];e.fn[i]=t.jQueryInterface,e.fn[i].Constructor=t,e.fn[i].noConflict=()=>(e.fn[i]=s,t.jQueryInterface)}}))},A="collapse",C="bs.collapse",E=`.${C}`,x=".data-api",$={toggle:!0,parent:null},D={toggle:"boolean",parent:"(null|element)"},L=`show${E}`,N=`shown${E}`,S=`hide${E}`,T=`hidden${E}`,M=`click${E}${x}`,W="show",q="collapse",j="collapsing",I="collapsed",z=`:scope .${q} .${q}`,O="collapse-horizontal",R="width",Q="height",B=".collapse.show, .collapse.collapsing",V='[data-bs-toggle="collapse"]';class F extends d.default{constructor(t,e){super(t),this._isTransitioning=!1,this._config=this._getConfig(e),this._triggerArray=[];const i=c.default.find(V);for(let s=0,n=i.length;s<n;s++){const t=i[s],e=f(t),n=c.default.find(e).filter((t=>t===this._element));null!==e&&n.length&&(this._selector=e,this._triggerArray.push(t))}this._initializeChildren(),this._config.parent||this._addAriaAndCollapsedClass(this._triggerArray,this._isShown()),this._config.toggle&&this.toggle()}static get Default(){return $}static get NAME(){return A}toggle(){this._isShown()?this.hide():this.show()}show(){if(this._isTransitioning||this._isShown())return;let t,e=[];if(this._config.parent){const t=c.default.find(z,this._config.parent);e=c.default.find(B,this._config.parent).filter((e=>!t.includes(e)))}const i=c.default.findOne(this._selector);if(e.length){const s=e.find((t=>i!==t));if(t=s?F.getInstance(s):null,t&&t._isTransitioning)return}const s=l.default.trigger(this._element,L);if(s.defaultPrevented)return;e.forEach((e=>{i!==e&&F.getOrCreateInstance(e,{toggle:!1}).hide(),t||o.default.set(e,C,null)}));const n=this._getDimension();this._element.classList.remove(q),this._element.classList.add(j),this._element.style[n]=0,this._addAriaAndCollapsedClass(this._triggerArray,!0),this._isTransitioning=!0;const a=()=>{this._isTransitioning=!1,this._element.classList.remove(j),this._element.classList.add(q,W),this._element.style[n]="",l.default.trigger(this._element,N)},r=n[0].toUpperCase()+n.slice(1),d=`scroll${r}`;this._queueCallback(a,this._element,!0),this._element.style[n]=`${this._element[d]}px`}hide(){if(this._isTransitioning||!this._isShown())return;const t=l.default.trigger(this._element,S);if(t.defaultPrevented)return;const e=this._getDimension();this._element.style[e]=`${this._element.getBoundingClientRect()[e]}px`,b(this._element),this._element.classList.add(j),this._element.classList.remove(q,W);const i=this._triggerArray.length;for(let n=0;n<i;n++){const t=this._triggerArray[n],e=g(t);e&&!this._isShown(e)&&this._addAriaAndCollapsedClass([t],!1)}this._isTransitioning=!0;const s=()=>{this._isTransitioning=!1,this._element.classList.remove(j),this._element.classList.add(q),l.default.trigger(this._element,T)};this._element.style[e]="",this._queueCallback(s,this._element,!0)}_isShown(t=this._element){return t.classList.contains(W)}_getConfig(t){return t={...$,...r.default.getDataAttributes(this._element),...t},t.toggle=Boolean(t.toggle),t.parent=m(t.parent),_(A,t,D),t}_getDimension(){return this._element.classList.contains(O)?R:Q}_initializeChildren(){if(!this._config.parent)return;const t=c.default.find(z,this._config.parent);c.default.find(V,this._config.parent).filter((e=>!t.includes(e))).forEach((t=>{const e=g(t);e&&this._addAriaAndCollapsedClass([t],this._isShown(e))}))}_addAriaAndCollapsedClass(t,e){t.length&&t.forEach((t=>{e?t.classList.remove(I):t.classList.add(I),t.setAttribute("aria-expanded",e)}))}static jQueryInterface(t){return this.each((function(){const e={};"string"===typeof t&&/show|hide/.test(t)&&(e.toggle=!1);const i=F.getOrCreateInstance(this,e);if("string"===typeof t){if("undefined"===typeof i[t])throw new TypeError(`No method named "${t}"`);i[t]()}}))}}return l.default.on(document,M,V,(function(t){("A"===t.target.tagName||t.delegateTarget&&"A"===t.delegateTarget.tagName)&&t.preventDefault();const e=f(this),i=c.default.find(e);i.forEach((t=>{F.getOrCreateInstance(t,{toggle:!1}).toggle()}))})),k(F),F}))},6221:function(t){
/*!
  * Bootstrap manipulator.js v5.1.3 (https://getbootstrap.com/)
  * Copyright 2011-2021 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */
(function(e,i){t.exports=i()})(0,(function(){"use strict";function t(t){return"true"===t||"false"!==t&&(t===Number(t).toString()?Number(t):""===t||"null"===t?null:t)}function e(t){return t.replace(/[A-Z]/g,(t=>`-${t.toLowerCase()}`))}const i={setDataAttribute(t,i,s){t.setAttribute(`data-bs-${e(i)}`,s)},removeDataAttribute(t,i){t.removeAttribute(`data-bs-${e(i)}`)},getDataAttributes(e){if(!e)return{};const i={};return Object.keys(e.dataset).filter((t=>t.startsWith("bs"))).forEach((s=>{let n=s.replace(/^bs/,"");n=n.charAt(0).toLowerCase()+n.slice(1,n.length),i[n]=t(e.dataset[s])})),i},getDataAttribute(i,s){return t(i.getAttribute(`data-bs-${e(s)}`))},offset(t){const e=t.getBoundingClientRect();return{top:e.top+window.pageYOffset,left:e.left+window.pageXOffset}},position(t){return{top:t.offsetTop,left:t.offsetLeft}}};return i}))},4032:function(t,e,i){i(1703),
/*!
  * Bootstrap offcanvas.js v5.1.3 (https://getbootstrap.com/)
  * Copyright 2011-2021 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */
function(e,s){t.exports=s(i(7317),i(6221),i(4130),i(1884))}(0,(function(t,e,i,s){"use strict";const n=t=>t&&"object"===typeof t&&"default"in t?t:{default:t},a=n(t),o=n(e),l=n(i),r=n(s),c=1e3,d="transitionend",h=t=>null===t||void 0===t?`${t}`:{}.toString.call(t).match(/\s([a-z]+)/i)[1].toLowerCase(),u=t=>{let e=t.getAttribute("data-bs-target");if(!e||"#"===e){let i=t.getAttribute("href");if(!i||!i.includes("#")&&!i.startsWith("."))return null;i.includes("#")&&!i.startsWith("#")&&(i=`#${i.split("#")[1]}`),e=i&&"#"!==i?i.trim():null}return e},f=t=>{const e=u(t);return e?document.querySelector(e):null},g=t=>{if(!t)return 0;let{transitionDuration:e,transitionDelay:i}=window.getComputedStyle(t);const s=Number.parseFloat(e),n=Number.parseFloat(i);return s||n?(e=e.split(",")[0],i=i.split(",")[0],(Number.parseFloat(e)+Number.parseFloat(i))*c):0},p=t=>{t.dispatchEvent(new Event(d))},m=t=>!(!t||"object"!==typeof t)&&("undefined"!==typeof t.jquery&&(t=t[0]),"undefined"!==typeof t.nodeType),_=t=>m(t)?t.jquery?t[0]:t:"string"===typeof t&&t.length>0?document.querySelector(t):null,b=(t,e,i)=>{Object.keys(i).forEach((s=>{const n=i[s],a=e[s],o=a&&m(a)?"element":h(a);if(!new RegExp(n).test(o))throw new TypeError(`${t.toUpperCase()}: Option "${s}" provided type "${o}" but expected type "${n}".`)}))},v=t=>!(!m(t)||0===t.getClientRects().length)&&"visible"===getComputedStyle(t).getPropertyValue("visibility"),w=t=>!t||t.nodeType!==Node.ELEMENT_NODE||(!!t.classList.contains("disabled")||("undefined"!==typeof t.disabled?t.disabled:t.hasAttribute("disabled")&&"false"!==t.getAttribute("disabled"))),y=t=>{t.offsetHeight},k=()=>{const{jQuery:t}=window;return t&&!document.body.hasAttribute("data-bs-no-jquery")?t:null},A=[],C=t=>{"loading"===document.readyState?(A.length||document.addEventListener("DOMContentLoaded",(()=>{A.forEach((t=>t()))})),A.push(t)):t()},E=t=>{C((()=>{const e=k();if(e){const i=t.NAME,s=e.fn[i];e.fn[i]=t.jQueryInterface,e.fn[i].Constructor=t,e.fn[i].noConflict=()=>(e.fn[i]=s,t.jQueryInterface)}}))},x=t=>{"function"===typeof t&&t()},$=(t,e,i=!0)=>{if(!i)return void x(t);const s=5,n=g(e)+s;let a=!1;const o=({target:i})=>{i===e&&(a=!0,e.removeEventListener(d,o),x(t))};e.addEventListener(d,o),setTimeout((()=>{a||p(e)}),n)},D=".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",L=".sticky-top";class N{constructor(){this._element=document.body}getWidth(){const t=document.documentElement.clientWidth;return Math.abs(window.innerWidth-t)}hide(){const t=this.getWidth();this._disableOverFlow(),this._setElementAttributes(this._element,"paddingRight",(e=>e+t)),this._setElementAttributes(D,"paddingRight",(e=>e+t)),this._setElementAttributes(L,"marginRight",(e=>e-t))}_disableOverFlow(){this._saveInitialAttribute(this._element,"overflow"),this._element.style.overflow="hidden"}_setElementAttributes(t,e,i){const s=this.getWidth(),n=t=>{if(t!==this._element&&window.innerWidth>t.clientWidth+s)return;this._saveInitialAttribute(t,e);const n=window.getComputedStyle(t)[e];t.style[e]=`${i(Number.parseFloat(n))}px`};this._applyManipulationCallback(t,n)}reset(){this._resetElementAttributes(this._element,"overflow"),this._resetElementAttributes(this._element,"paddingRight"),this._resetElementAttributes(D,"paddingRight"),this._resetElementAttributes(L,"marginRight")}_saveInitialAttribute(t,e){const i=t.style[e];i&&o.default.setDataAttribute(t,e,i)}_resetElementAttributes(t,e){const i=t=>{const i=o.default.getDataAttribute(t,e);"undefined"===typeof i?t.style.removeProperty(e):(o.default.removeDataAttribute(t,e),t.style[e]=i)};this._applyManipulationCallback(t,i)}_applyManipulationCallback(t,e){m(t)?e(t):a.default.find(t,this._element).forEach(e)}isOverflowing(){return this.getWidth()>0}}const S={className:"modal-backdrop",isVisible:!0,isAnimated:!1,rootElement:"body",clickCallback:null},T={className:"string",isVisible:"boolean",isAnimated:"boolean",rootElement:"(element|string)",clickCallback:"(function|null)"},M="backdrop",W="fade",q="show",j=`mousedown.bs.${M}`;class I{constructor(t){this._config=this._getConfig(t),this._isAppended=!1,this._element=null}show(t){this._config.isVisible?(this._append(),this._config.isAnimated&&y(this._getElement()),this._getElement().classList.add(q),this._emulateAnimation((()=>{x(t)}))):x(t)}hide(t){this._config.isVisible?(this._getElement().classList.remove(q),this._emulateAnimation((()=>{this.dispose(),x(t)}))):x(t)}_getElement(){if(!this._element){const t=document.createElement("div");t.className=this._config.className,this._config.isAnimated&&t.classList.add(W),this._element=t}return this._element}_getConfig(t){return t={...S,..."object"===typeof t?t:{}},t.rootElement=_(t.rootElement),b(M,t,T),t}_append(){this._isAppended||(this._config.rootElement.append(this._getElement()),l.default.on(this._getElement(),j,(()=>{x(this._config.clickCallback)})),this._isAppended=!0)}dispose(){this._isAppended&&(l.default.off(this._element,j),this._element.remove(),this._isAppended=!1)}_emulateAnimation(t){$(t,this._getElement(),this._config.isAnimated)}}const z={trapElement:null,autofocus:!0},O={trapElement:"element",autofocus:"boolean"},R="focustrap",Q="bs.focustrap",B=`.${Q}`,V=`focusin${B}`,F=`keydown.tab${B}`,P="Tab",U="forward",Y="backward";class H{constructor(t){this._config=this._getConfig(t),this._isActive=!1,this._lastTabNavDirection=null}activate(){const{trapElement:t,autofocus:e}=this._config;this._isActive||(e&&t.focus(),l.default.off(document,B),l.default.on(document,V,(t=>this._handleFocusin(t))),l.default.on(document,F,(t=>this._handleKeydown(t))),this._isActive=!0)}deactivate(){this._isActive&&(this._isActive=!1,l.default.off(document,B))}_handleFocusin(t){const{target:e}=t,{trapElement:i}=this._config;if(e===document||e===i||i.contains(e))return;const s=a.default.focusableChildren(i);0===s.length?i.focus():this._lastTabNavDirection===Y?s[s.length-1].focus():s[0].focus()}_handleKeydown(t){t.key===P&&(this._lastTabNavDirection=t.shiftKey?Y:U)}_getConfig(t){return t={...z,..."object"===typeof t?t:{}},b(R,t,O),t}}const Z=(t,e="hide")=>{const i=`click.dismiss${t.EVENT_KEY}`,s=t.NAME;l.default.on(document,i,`[data-bs-dismiss="${s}"]`,(function(i){if(["A","AREA"].includes(this.tagName)&&i.preventDefault(),w(this))return;const n=f(this)||this.closest(`.${s}`),a=t.getOrCreateInstance(n);a[e]()}))},K="offcanvas",J="bs.offcanvas",X=`.${J}`,G=".data-api",tt=`load${X}${G}`,et="Escape",it={backdrop:!0,keyboard:!0,scroll:!1},st={backdrop:"boolean",keyboard:"boolean",scroll:"boolean"},nt="show",at="offcanvas-backdrop",ot=".offcanvas.show",lt=`show${X}`,rt=`shown${X}`,ct=`hide${X}`,dt=`hidden${X}`,ht=`click${X}${G}`,ut=`keydown.dismiss${X}`,ft='[data-bs-toggle="offcanvas"]';class gt extends r.default{constructor(t,e){super(t),this._config=this._getConfig(e),this._isShown=!1,this._backdrop=this._initializeBackDrop(),this._focustrap=this._initializeFocusTrap(),this._addEventListeners()}static get NAME(){return K}static get Default(){return it}toggle(t){return this._isShown?this.hide():this.show(t)}show(t){if(this._isShown)return;const e=l.default.trigger(this._element,lt,{relatedTarget:t});if(e.defaultPrevented)return;this._isShown=!0,this._element.style.visibility="visible",this._backdrop.show(),this._config.scroll||(new N).hide(),this._element.removeAttribute("aria-hidden"),this._element.setAttribute("aria-modal",!0),this._element.setAttribute("role","dialog"),this._element.classList.add(nt);const i=()=>{this._config.scroll||this._focustrap.activate(),l.default.trigger(this._element,rt,{relatedTarget:t})};this._queueCallback(i,this._element,!0)}hide(){if(!this._isShown)return;const t=l.default.trigger(this._element,ct);if(t.defaultPrevented)return;this._focustrap.deactivate(),this._element.blur(),this._isShown=!1,this._element.classList.remove(nt),this._backdrop.hide();const e=()=>{this._element.setAttribute("aria-hidden",!0),this._element.removeAttribute("aria-modal"),this._element.removeAttribute("role"),this._element.style.visibility="hidden",this._config.scroll||(new N).reset(),l.default.trigger(this._element,dt)};this._queueCallback(e,this._element,!0)}dispose(){this._backdrop.dispose(),this._focustrap.deactivate(),super.dispose()}_getConfig(t){return t={...it,...o.default.getDataAttributes(this._element),..."object"===typeof t?t:{}},b(K,t,st),t}_initializeBackDrop(){return new I({className:at,isVisible:this._config.backdrop,isAnimated:!0,rootElement:this._element.parentNode,clickCallback:()=>this.hide()})}_initializeFocusTrap(){return new H({trapElement:this._element})}_addEventListeners(){l.default.on(this._element,ut,(t=>{this._config.keyboard&&t.key===et&&this.hide()}))}static jQueryInterface(t){return this.each((function(){const e=gt.getOrCreateInstance(this,t);if("string"===typeof t){if(void 0===e[t]||t.startsWith("_")||"constructor"===t)throw new TypeError(`No method named "${t}"`);e[t](this)}}))}}return l.default.on(document,ht,ft,(function(t){const e=f(this);if(["A","AREA"].includes(this.tagName)&&t.preventDefault(),w(this))return;l.default.one(e,dt,(()=>{v(this)&&this.focus()}));const i=a.default.findOne(ot);i&&i!==e&&gt.getInstance(i).hide();const s=gt.getOrCreateInstance(e);s.toggle(this)})),l.default.on(window,tt,(()=>a.default.find(ot).forEach((t=>gt.getOrCreateInstance(t).show())))),Z(gt),E(gt),gt}))},2499:function(t,e,i){"use strict";i.r(e),i.d(e,{default:function(){return wt}});var s=i(3396);function n(t,e,i,n,a,o){const l=(0,s.up)("navbar"),r=(0,s.up)("RouterView"),c=(0,s.up)("frontfooter");return(0,s.wg)(),(0,s.iD)(s.HY,null,[(0,s.Wm)(l),((0,s.wg)(),(0,s.j4)(r,{key:t.$route.fullPath})),(0,s.Wm)(c)],64)}var a=i(5820),o=i(7139);const l={class:"navbar navbar-expand-lg navbar-light bg-white sticky-top shadow-sm"},r={class:"container d-flex align-items-center"},c=(0,s._)("button",{class:"navbar-toggler border-0",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarNavAltMarkup","aria-controls":"navbarNavAltMarkup","aria-expanded":"false","aria-label":"Toggle navigation"},[(0,s._)("span",{class:"navbar-toggler-icon"})],-1),d=(0,s._)("h1",{class:"fs-3 mb-0 text-primary"},"SIRA SWIM",-1),h={class:"heart-cart d-flex d-lg-none me-4"},u=(0,s._)("i",{class:"bi bi-suit-heart-fill fs-5"},null,-1),f={key:0},g=(0,s._)("i",{class:"bi bi-cart-fill fs-5"},null,-1),p={key:0},m={class:"collapse navbar-collapse",id:"navbarNavAltMarkup"},_={class:"navbar-nav"},b=(0,s.Uk)("首頁"),v=(0,s.Uk)("關於我們"),w=(0,s.Uk)("所有產品"),y=(0,s.Uk)("試衣間預約"),k={class:"heart-cart d-none d-lg-flex"},A=(0,s._)("i",{class:"bi bi-suit-heart-fill fs-5"},null,-1),C={key:0},E=(0,s._)("i",{class:"bi bi-cart-fill fs-5"},null,-1),x={key:0},$={key:0,class:"offcanvas offcanvas-end",tabindex:"-1",id:"offcanvasExample","aria-labelledby":"offcanvasExampleLabel"},D=(0,s._)("div",{class:"offcanvas-header"},[(0,s._)("h3",{class:"offcanvas-title",id:"offcanvasExampleLabel"},"已選購商品"),(0,s._)("button",{type:"button",class:"btn-close text-reset","data-bs-dismiss":"offcanvas","aria-label":"Close"})],-1),L={class:"offcanvas-body"},N={key:0,class:"table table-borderless align-middle text-secondary"},S=(0,s._)("thead",null,[(0,s._)("tr",null,[(0,s._)("th"),(0,s._)("th"),(0,s._)("th")])],-1),T=["src","alt","onClick"],M=["onClick"],W={class:"d-flex align-items-center my-4"},q=["onClick"],j=(0,s._)("i",{class:"bi bi-dash"},null,-1),I=[j],z={class:"form-control-sm text-center border-top border-bottom rounded-0"},O=["onClick"],R=(0,s._)("i",{class:"bi bi-plus"},null,-1),Q=[R],B=["onClick"],V=(0,s._)("i",{class:"bi bi-trash3-fill"},null,-1),F=[V],P={key:1},U={class:"text-center py-5"},Y=(0,s._)("i",{class:"bi bi-cart3 text-secondary",style:{"font-size":"120px"}},null,-1),H=(0,s._)("p",null,"您的購物車尚未加入商品",-1),Z={"data-bs-dismiss":"offcanvas"},K=(0,s.Uk)("來去逛逛"),J={key:0,class:"w-100 position-sticky bottom-0","data-bs-dismiss":"offcanvas","aria-label":"Close"},X=(0,s.Uk)("購物車結帳");function G(t,e,i,n,a,j){const R=(0,s.up)("router-link"),V=(0,s.up)("loadingTip");return(0,s.wg)(),(0,s.iD)(s.HY,null,[(0,s._)("nav",l,[(0,s._)("div",r,[c,(0,s.Wm)(R,{class:"navbar-brand me-0 me-lg-4",to:"/"},{default:(0,s.w5)((()=>[d])),_:1}),(0,s._)("div",h,[(0,s.Wm)(R,{to:"/favorite",class:"me-4",href:"#"},{default:(0,s.w5)((()=>[u,a.favoriteData.length>0?((0,s.wg)(),(0,s.iD)("span",f,(0,o.zw)(a.favoriteData.length),1)):(0,s.kq)("",!0)])),_:1}),(0,s.Wm)(R,{to:"/cart","data-bs-toggle":"offcanvas",href:"#offcanvasExample",role:"button","aria-controls":"offcanvasExample"},{default:(0,s.w5)((()=>[g,j.cartQty>0?((0,s.wg)(),(0,s.iD)("span",p,(0,o.zw)(j.cartQty),1)):(0,s.kq)("",!0)])),_:1})]),(0,s._)("div",m,[(0,s._)("div",_,[(0,s.Wm)(R,{class:"nav-link me-2",to:"/"},{default:(0,s.w5)((()=>[b])),_:1}),(0,s.Wm)(R,{class:"nav-link me-2",to:"/about"},{default:(0,s.w5)((()=>[v])),_:1}),(0,s.Wm)(R,{class:"nav-link me-2",to:"/products"},{default:(0,s.w5)((()=>[w])),_:1}),(0,s.Wm)(R,{class:"nav-link me-2",to:"/reserve"},{default:(0,s.w5)((()=>[y])),_:1})])]),(0,s._)("div",k,[(0,s.Wm)(R,{to:"/favorite",class:"me-5",href:"#"},{default:(0,s.w5)((()=>[A,a.favoriteData.length>0?((0,s.wg)(),(0,s.iD)("span",C,(0,o.zw)(a.favoriteData.length),1)):(0,s.kq)("",!0)])),_:1}),(0,s.Wm)(R,{to:"/cart","data-bs-toggle":"offcanvas",href:"#offcanvasExample",role:"button","aria-controls":"offcanvasExample"},{default:(0,s.w5)((()=>[E,j.cartQty>0?((0,s.wg)(),(0,s.iD)("span",x,(0,o.zw)(j.cartQty),1)):(0,s.kq)("",!0)])),_:1})])])]),"/cart"!==this.$route.path?((0,s.wg)(),(0,s.iD)("div",$,[(0,s.Wm)(V,{active:a.isLoading},null,8,["active"]),D,(0,s._)("div",L,[0!==a.cart.length?((0,s.wg)(),(0,s.iD)("table",N,[S,(0,s._)("tbody",null,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(a.cart,((t,e)=>((0,s.wg)(),(0,s.iD)("tr",{class:"border-bottom",key:e},[(0,s._)("td",null,[(0,s._)("img",{"data-bs-dismiss":"offcanvas",width:"80",class:"cursor-hover",src:t.product.imgLink,alt:t.product.title,onClick:e=>j.getProduct(t.product.id)},null,8,T)]),(0,s._)("td",null,[(0,s._)("h6",{"data-bs-dismiss":"offcanvas",class:"my-3 fw-bold cursor-hover",onClick:e=>j.getProduct(t.product.id)},(0,o.zw)(t.product.title),9,M),(0,s._)("p",null,(0,o.zw)("比基尼"===t.product.category||"運動服"===t.product.category?"S":""),1),(0,s._)("div",W,[(0,s._)("button",{class:(0,o.C_)(["btn btn-sm rounded-0 d-flex align-items-center border",{disabled:1==t.qty}]),type:"button",onClick:e=>j.updateCart(t,"reduceQty")},I,10,q),(0,s._)("span",z,(0,o.zw)(t.qty),1),(0,s._)("button",{class:"btn btn-sm d-flex align-items-center border rounded-0",type:"button",onClick:e=>j.updateCart(t,"addQty")},Q,8,O)]),(0,s._)("p",null,"單價: "+(0,o.zw)(t.product.price),1)]),(0,s._)("td",null,[(0,s._)("button",{type:"button",class:"btn btn-sm",onClick:e=>j.deleteCart(t)},F,8,B)])])))),128))])])):((0,s.wg)(),(0,s.iD)("div",P,[(0,s._)("div",U,[Y,H,(0,s._)("span",Z,[(0,s.Wm)(R,{class:"btn btn-primary rounded-0",to:"/products"},{default:(0,s.w5)((()=>[K])),_:1})])])]))]),0!==a.cart.length?((0,s.wg)(),(0,s.iD)("div",J,[(0,s.Wm)(R,{to:"/cart",class:"text-light w-100 btn btn-lg btn-primary rounded-0"},{default:(0,s.w5)((()=>[X])),_:1})])):(0,s.kq)("",!0)])):(0,s.kq)("",!0)],64)}i(434),i(4032);var tt={data(){return{cart:[],favoriteData:JSON.parse(localStorage.getItem("favorite"))||[],isLoading:!1,qty:""}},inject:["emitter"],computed:{cartQty(){let t=0;return this.cart.forEach((e=>{t+=e.qty})),t}},methods:{getCart(){const t="https://vue3-course-api.hexschool.io/api/bear-work/cart";this.$http.get(t).then((t=>{console.log(t.data.data.carts),this.cart=t.data.data.carts}))},getProduct(t){this.$router.push(`/product/${t}`)},deleteCart(t){const e=`https://vue3-course-api.hexschool.io/api/bear-work/cart/${t.id}`;this.$swal({title:"確定移除?",text:`【${t.product.title}】從購物車移除`,icon:"warning",showCancelButton:!0,confirmButtonColor:"#8144AD",cancelButtonColor:"#d33",confirmButtonText:"確定",cancelButtonText:"取消",reverseButtons:!0}).then((t=>{t.isConfirmed&&(this.isLoading=!0,this.$http.delete(e).then((t=>{console.log(t),this.getCart(),this.isLoading=!1,this.$swal("移除成功","","success"),this.emitter.emit("updateNavbarCart")})))}))},updateCart(t,e){this.isLoading=!0,this.qty=t.qty,"addQty"===e?this.qty++:"reduceQty"===e&&this.qty--;const i=`https://vue3-course-api.hexschool.io/api/bear-work/cart/${t.id}`,s={product_id:t.product.id,qty:this.qty};this.$http.put(i,{data:s}).then((t=>{this.isLoading=!1,t.data.success?(console.log(t),this.getCart(),this.emitter.emit("updateNavbarCart")):this.$swal({icon:"error",title:"更新失敗",text:"請重新操作"})})).catch((t=>{this.isLoading=!1,this.$swal({icon:"error",title:"發生錯誤",text:t,footer:'<a href="">請洽詢管理員</a>'})}))}},created(){this.getCart()},mounted(){this.emitter.on("updateNavbarCart",(()=>{this.getCart()})),this.emitter.on("updateNavbarFavorite",(()=>{this.favoriteData=JSON.parse(localStorage.getItem("favorite"))||[]}))}},et=i(89);const it=(0,et.Z)(tt,[["render",G]]);var st=it;const nt=t=>((0,s.dD)("data-v-91cc85be"),t=t(),(0,s.Cn)(),t),at={class:"container d-flex flex-column align-items-center py-4 text-light"},ot=nt((()=>(0,s._)("h2",null,"SIRA SWIM",-1))),lt={class:"d-flex mb-3"},rt=nt((()=>(0,s._)("a",{href:"https://github.com/syong668",target:"_blank"},[(0,s._)("svg",{xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink","aria-hidden":"true",role:"img",class:"iconify iconify--ri",width:"24",height:"24",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 24 24"},[(0,s._)("path",{fill:"currentColor",d:"M15.402 21v-6.966h2.333l.349-2.708h-2.682V9.598c0-.784.218-1.319 1.342-1.319h1.434V5.857a19.19 19.19 0 0 0-2.09-.107c-2.067 0-3.482 1.262-3.482 3.58v1.996h-2.338v2.708h2.338V21H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1h-4.598z"})])],-1))),ct=nt((()=>(0,s._)("a",{href:"https://github.com/syong668",target:"_blank"},[(0,s._)("svg",{xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink","aria-hidden":"true",role:"img",class:"iconify iconify--ion",width:"24",height:"24",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 512 512"},[(0,s._)("path",{fill:"currentColor",d:"M448.5 112c0-26.233-21.267-47.5-47.5-47.5H112c-26.233 0-47.5 21.267-47.5 47.5v289c0 26.233 21.267 47.5 47.5 47.5h289c26.233 0 47.5-21.267 47.5-47.5V112zM257 175.833c44.182 0 80 35.816 80 80s-35.818 80-80 80-80-35.816-80-80 35.818-80 80-80zM416.5 160.5c0 8.836-7.163 16-16 16h-48c-8.837 0-16-7.164-16-16v-48c0-8.836 7.163-16 16-16h48c8.837 0 16 7.164 16 16v48zm-15 256h-288c-8.822 0-17-8.178-17-17v-175h53.072c-3.008 10-4.572 20.647-4.572 31.583C145 286 156.65 314 177.805 335.154s49.279 32.741 79.195 32.741 58.041-11.681 79.195-32.835S369 286.016 369 256.099c0-10.936-1.563-21.599-4.572-31.599H416.5v175c0 8.822-6.178 17-15 17z"})])],-1))),dt=nt((()=>(0,s._)("a",{href:"https://github.com/syong668",target:"_blank"},[(0,s._)("svg",{xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink","aria-hidden":"true",role:"img",class:"iconify iconify--mdi",width:"24",height:"24",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 24 24"},[(0,s._)("path",{fill:"currentColor",d:"M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5c.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34c-.46-1.16-1.11-1.47-1.11-1.47c-.91-.62.07-.6.07-.6c1 .07 1.53 1.03 1.53 1.03c.87 1.52 2.34 1.07 2.91.83c.09-.65.35-1.09.63-1.34c-2.22-.25-4.55-1.11-4.55-4.92c0-1.11.38-2 1.03-2.71c-.1-.25-.45-1.29.1-2.64c0 0 .84-.27 2.75 1.02c.79-.22 1.65-.33 2.5-.33c.85 0 1.71.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02c.55 1.35.2 2.39.1 2.64c.65.71 1.03 1.6 1.03 2.71c0 3.82-2.34 4.66-4.57 4.91c.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2Z"})])],-1))),ht=nt((()=>(0,s._)("svg",{xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink","aria-hidden":"true",role:"img",class:"iconify iconify--ic",width:"24",height:"24",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 24 24"},[(0,s._)("path",{fill:"currentColor",d:"M19.5 12c0-.23-.01-.45-.03-.68l1.86-1.41c.4-.3.51-.86.26-1.3l-1.87-3.23a.987.987 0 0 0-1.25-.42l-2.15.91c-.37-.26-.76-.49-1.17-.68l-.29-2.31c-.06-.5-.49-.88-.99-.88h-3.73c-.51 0-.94.38-1 .88l-.29 2.31c-.41.19-.8.42-1.17.68l-2.15-.91c-.46-.2-1-.02-1.25.42L2.41 8.62c-.25.44-.14.99.26 1.3l1.86 1.41a7.343 7.343 0 0 0 0 1.35l-1.86 1.41c-.4.3-.51.86-.26 1.3l1.87 3.23c.25.44.79.62 1.25.42l2.15-.91c.37.26.76.49 1.17.68l.29 2.31c.06.5.49.88.99.88h3.73c.5 0 .93-.38.99-.88l.29-2.31c.41-.19.8-.42 1.17-.68l2.15.91c.46.2 1 .02 1.25-.42l1.87-3.23c.25-.44.14-.99-.26-1.3l-1.86-1.41c.03-.23.04-.45.04-.68zm-7.46 3.5c-1.93 0-3.5-1.57-3.5-3.5s1.57-3.5 3.5-3.5s3.5 1.57 3.5 3.5s-1.57 3.5-3.5 3.5z"})],-1))),ut=nt((()=>(0,s._)("span",null,"© SIRA SWIM 2022 All Rights Reserved.",-1))),ft=nt((()=>(0,s._)("span",null,"僅個人作品練習，無商業用途",-1)));function gt(t,e){const i=(0,s.up)("router-link");return(0,s.wg)(),(0,s.iD)("div",null,[(0,s._)("footer",null,[(0,s._)("div",at,[ot,(0,s._)("div",lt,[rt,ct,dt,(0,s.Wm)(i,{to:"/login",target:"_blank"},{default:(0,s.w5)((()=>[ht])),_:1})]),ut,ft])])])}const pt={},mt=(0,et.Z)(pt,[["render",gt],["__scopeId","data-v-91cc85be"]]);var _t=mt,bt={components:{navbar:st,frontfooter:_t},provide(){return{emitter:a.Z}}};const vt=(0,et.Z)(bt,[["render",n]]);var wt=vt}}]);
//# sourceMappingURL=499.c8c12fc3.js.map