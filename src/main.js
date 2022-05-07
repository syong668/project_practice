import { createApp } from 'vue'

import App from './App.vue'
import router from './router'

// 載入vue axios
import axios from 'axios'
import VueAxios from 'vue-axios'

// 載入loading讀取的元件
import loadingTip from 'vue3-loading-overlay'
import 'vue3-loading-overlay/dist/vue3-loading-overlay.css'

// 載入boostrap的icon
import 'bootstrap-icons/font/bootstrap-icons.css'

// 載入千分位
import { currency } from './methods/filters'

// 載入吐司訊息的emit傳送
import $httpMessageStatus from './methods/pushMessageStatus'

// 載入vue-sweetalert2
import VueSweetalert2 from 'vue-sweetalert2'
import 'sweetalert2/dist/sweetalert2.min.css'
const options = {
  confirmButtonColor: '#8E44AD'
  // cancelButtonColor: '#ff7674'
}

// 請改寫成如下片段
const app = createApp(App)
app.config.globalProperties.$filters = {
  currency
}

// 整合ajax錯誤事件，emit發送至toastMessage
app.config.globalProperties.$httpMessageStatus = $httpMessageStatus

app.use(router)

app.use(VueAxios, axios) // 這段是從vue axios的文件上複製在改
app.component('loadingTip', loadingTip) // 全域註冊
app.use(VueSweetalert2, options) // 註冊vue-sweetalert2 全域元件

app.mount('#app')
