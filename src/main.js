import { createApp } from 'vue'
import App from './App.vue'

// 导入echarts-gl
import 'echarts-gl'

// 引入element-plus组件库
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

// 导入vue-router
import router from './router'
// 导入vuex
import store from './store'

// 导入VueEcharts
import VueEcharts from '@/components/VueEcharts'

// 导入vue-count-to
import CountTo from '@/components/VueCountTo/vue-countTo.vue';

const app = createApp(App)
app.use(router) // 使用vue-router插件
app.use(store) // 使用vue-router插件
app.use(ElementPlus) // 使用vue-router插件'
app.component('v-charts', VueEcharts)
app.component('count-to', CountTo)
app.mount('#app')
