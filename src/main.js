import { createApp } from 'vue'

import App from './App.vue'
import router from './router'

import AOS from 'aos'
import 'aos/dist/aos.css'

import { Swiper, SwiperSlide } from 'swiper/vue'
import SwiperCore, { Pagination, Navigation, Autoplay } from 'swiper'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

import { Field, Form, ErrorMessage, defineRule, configure } from 'vee-validate'
import rules from '@vee-validate/rules'
import { localize, setLocale } from '@vee-validate/i18n'
import zhTW from '@vee-validate/i18n/dist/locale/zh_TW.json'

import axios from 'axios'
import VueAxios from 'vue-axios'

import loadingTip from 'vue3-loading-overlay'
import 'vue3-loading-overlay/dist/vue3-loading-overlay.css'

import 'bootstrap-icons/font/bootstrap-icons.css'

// 載入千分位跟時間戳轉換
import { currency, date } from './methods/filters'

// 載入吐司訊息的 emit 傳送
import $httpMessageStatus from './methods/pushMessageStatus'

import VueSweetalert2 from 'vue-sweetalert2'
import 'sweetalert2/dist/sweetalert2.min.css'
const options = {
  confirmButtonColor: '#8E44AD'
}

// vee-validate 定義驗證規則(全部)
Object.keys(rules).forEach((rule) => {
  defineRule(rule, rules[rule])
})
// vee-validate 多國語系
configure({
  generateMessage: localize({ zh_TW: zhTW }), // 載入繁體中文語系
  validateOnInput: true // 輸入字元後直接進行驗證
})
// vee-validate 設定預設語系
setLocale('zh_TW')

// 每次換頁在最上方
router.afterEach((to, from, next) => { window.scrollTo(0, 0) })

AOS.init({
  once: true
})

const app = createApp(App)
app.config.globalProperties.$filters = {
  date,
  currency
}

// 整合ajax錯誤事件，emit 發送至 toastMessage
app.config.globalProperties.$httpMessageStatus = $httpMessageStatus

app.use(router)

app.use(VueAxios, axios)
app.component('loadingTip', loadingTip)
app.use(VueSweetalert2, options) // 註冊 vue-sweetalert2 全域元件

// 註冊 vee-validate 三個全域元件
app.component('VForm', Form)
app.component('VField', Field)
app.component('ErrorMessage', ErrorMessage)

app.component('SwiperView', Swiper)
app.component('SwiperSlide', SwiperSlide)
SwiperCore.use([Pagination, Navigation, Autoplay])

app.mount('#app')
