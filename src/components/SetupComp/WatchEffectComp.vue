<template>
    <el-divider></el-divider>
    <div>
        <h3>name: {{ name }}</h3>
        <h3>score: {{ score }}分</h3>

        <h3>people.name {{ people.name }}</h3>
        <h3>people.age {{ people.age }}岁</h3>
    </div>
</template>

<script>
import { reactive, ref, watchEffect } from 'vue';

export default {
    name: 'WatchEffectComp',

    setup() {
        const name = ref('foo')
        const score = ref(60)

        const people = reactive({
            name: '张三',
            age: 20
        })

        // 做响应式数据的依赖收集
        watchEffect(() => {
            console.log(score.value);
            console.log(people.name);
        })

        setInterval(() => {
            // score.value ++

            // people.age ++

            // name.value = 'bar'

            people.name = "李四"
        }, 1000);

        return {
            name,
            score,
            people
        }
    }
};
</script>

<style lang="scss" scoped></style>