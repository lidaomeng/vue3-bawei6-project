import { createRouter, createWebHashHistory } from 'vue-router'

import HomeView from '@/views/HomeView.vue'
import AboutView from '@/views/AboutView.vue'
import TalkView from '@/views/TalkView.vue'
import SlotView from '@/views/SlotView.vue'
import ComponentView from '@/views/ComponentView.vue'
import AsyncCompView from '@/views/AsyncCompView.vue'
import SetupView from '@/views/SetupView.vue'
import OtherReactiveView from '@/views/OtherReactiveView.vue'
import DataV from '@/views/DataV'
import TodoList from '@/views/TodoList'
import BMap from '@/views/BMap'
import TimeLine from '@/views/TimeLine'

// 1. 定义一些路由
const routes = [
    { path: '/', component: HomeView },
    { path: '/about', component: AboutView },
    { path: '/talk', component: TalkView },
    { path: '/slot', component: SlotView },
    { path: '/component', component: ComponentView },
    { path: '/async-comp', component: AsyncCompView },
    { path: '/setup', component: SetupView },
    { path: '/other', component: OtherReactiveView },
    { path: '/data-v', component: DataV },
    { path: '/todolist', component: TodoList },
    { path: '/bmap', component: BMap },
    { path: '/timeline', component: TimeLine },
]

// 2. 创建路由实例并传递 `routes` 配置
const router = createRouter({
    history: createWebHashHistory(),
    routes,
})

export default router

