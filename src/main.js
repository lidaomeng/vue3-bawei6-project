import { createApp } from 'vue'
import App from './App.vue'

// 引入element-plus组件库
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

// 导入vue-router
import router from './router'

// // 定义异步组件
// import HelloWorld from './components/HelloWorld.vue'
// const AsyncComp = defineAsyncComponent(() => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(HelloWorld)
//         }, 2000);
//     })
// })

const app = createApp(App)
app.use(router) // 使用vue-router插件
app.use(ElementPlus) // 使用vue-router插件'

// app.component('async-comp', AsyncComp)

app.mount('#app')
