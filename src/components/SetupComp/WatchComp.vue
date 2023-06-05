<template>
    <el-divider></el-divider>
    <div>
        WatchComp
    </div>
</template>

<script>
import { watch, ref, reactive } from 'vue';

export default {
    name: 'WatchComp',

    setup() {
        // ref 类型的响应式数据
        const name = ref('foo')
        const score = ref(60)

        const cat = ref({
            name: "蓝猫",
            age: 1
        })

        watch(() => cat.value.age, (value, oldValue) => {
            console.log('猫', value, oldValue);
        })

        // reactive 类型的响应式数据
        const people = reactive({
            name: '张三',
            age: 20
        })

        // 监听 ref 基本数据类型的响应式数据
        watch(score, (value, oldValue) => {
            console.log(value, oldValue);
        })

        // 监听某一个字段
        watch(() => people.age, (value, oldValue) => {
            console.log(value, oldValue);
        })

        setInterval(() => {
            cat.value.age ++
        }, 1000);

        // setInterval(() => {
        //     people.age++
        // }, 1000);

        // setInterval(() => {
        //     score.value++
        // }, 1000);

        return {
            name,
            score,
            people
        }
    }
};
</script>

<style lang="scss" scoped></style>