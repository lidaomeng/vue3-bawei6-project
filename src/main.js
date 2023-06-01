import { createApp } from 'vue'
import App from './App.vue'

// 导入vue-router
import router from './router'

const app = createApp(App)
app.use(router) // 使用vue-router插件
app.mount('#app')
