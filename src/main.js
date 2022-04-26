import { createApp } from 'vue'

// 插入以下兩行
import axios from 'axios'
import VueAxios from 'vue-axios'

import App from './App.vue'
import router from './router'

// 請改寫成如下片段
const app = createApp(App)
app.use(VueAxios, axios) // 這段是從vue axios的文件上複製在改
app.use(router)
app.mount('#app')
