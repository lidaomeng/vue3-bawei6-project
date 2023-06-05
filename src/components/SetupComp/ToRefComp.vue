<template>
    <el-divider></el-divider>
    <div class="book">
        <p>书名：<span style="font-weight: 600;">{{ name }}</span></p>
        <p>作者：<span style="font-weight: 600;">{{ author }}</span></p>
        <p>页数1：<span style="font-weight: 600;">{{ pages }}页</span></p>
        <p>页数2：<span style="font-weight: 600;">{{ pagesRef }}页</span></p>
    </div>
</template>

<script>
import { reactive, toRef, toRefs } from 'vue'

export default {
    name: 'ToRefComp',
    setup() {
        const book = reactive({
            name: '《红楼梦》',
            author: '曹雪芹',
            pages: 500,
        })

        // 使用 toRef，生成一个ref 响应式对象
        const pagesRef = toRef(book, 'pages')

        setInterval(() => {
            pagesRef.value += 10
        }, 1000);

        return {
            ...toRefs(book), // 使用toRefs 对响应式数据做解构，同时保持字段的响应式不断
            pagesRef
        }
    }
};
</script>

<style lang="scss" scoped>
</style>