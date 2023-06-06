<template>
    <div>
        <h3>姓名：{{ foo.name }}</h3>
        <h3>城市：{{ foo.address.city }}</h3>
        <p>--------------------------------------</p>
        <h3>姓名：{{ bar.name }}</h3>
        <h3>城市：{{ bar.address.city }}</h3>
        <p>
            <button @click="bar.name = '王五'">修改姓名</button>
        </p>
    </div>
</template>

<script>
import { shallowRef, triggerRef, shallowReactive } from 'vue'

export default {
    name: 'Index',

    setup() {
        // 浅响应式数据
        const foo = shallowRef({
            name: '张三',
            address: {
                city: '北京'
            }
        })

        setTimeout(() => {
            // 第一种触发响应式渲染
            // foo.value = {
            //     name: '李四',
            //     address: {
            //         city: '天津'
            //     }
            // }

            foo.value.name = '李四'
            foo.value.address.city = '天津'
            // 手动触发响应式，触发页面重新渲染
            triggerRef(foo)
        }, 1000);


        // shallowReactive（只对第一层生效）
        const bar = shallowReactive({
            name: '李四',
            address: {
                city: '上海'
            }
        })

        setTimeout(() => {
            // bar.name = '王五' 
            bar.address.city = '苏州'
        }, 1000);

        return {
            foo,
            bar
        }
    }
};
</script>

<style lang="scss" scoped></style>