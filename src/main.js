import { createApp } from 'vue'

// 插入以下兩行
import axios from 'axios'
import VueAxios from 'vue-axios'

import App from './App.vue'
import router from './router'

// 載入讀取的元件
import loadingTip from 'vue3-loading-overlay'
import 'vue3-loading-overlay/dist/vue3-loading-overlay.css'

// 載入boostrap的icon
import 'bootstrap-icons/font/bootstrap-icons.css'

// 載入千分位
import { currency } from './methods/filters'

// 載入吐司訊息的emit傳送
import $httpMessageStatus from './methods/pushMessageStatus'

// 請改寫成如下片段
const app = createApp(App)
app.config.globalProperties.$filters = {
  currency
}

// 整合ajax錯誤事件，emit發送至toastMessage
app.config.globalProperties.$httpMessageStatus = $httpMessageStatus

app.use(VueAxios, axios) // 這段是從vue axios的文件上複製在改
app.use(router)
app.component('loadingTip', loadingTip) // 全域註冊
app.mount('#app')
