<template>
    <el-divider></el-divider>
    <div>
        1112
    </div>
</template>

<script>
import { ref, toRaw, reactive, markRaw, isReactive } from 'vue';

export default {
    name: 'RawComp',

    setup() {
        // 案例一
        const person1 = {
            name: '张三',
            age: 22
        }
        const person = reactive(person1)
        const person2 = toRaw(person) // 逆操作

        console.log('person1 === person2', person1 === person2); // true

        // 案例二
        const foo = {}
        const reactiveFoo = reactive(foo)

        console.log('toRaw(reactiveFoo) === foo', toRaw(reactiveFoo) === foo) // true

        // markRaw
        console.log('markRaw', isReactive(reactive({ name: 'foo', age: 21 })));
        console.log('markRaw', isReactive(reactive(markRaw({ name: 'foo', age: 21 }))));
    }
};
</script>

<style lang="scss" scoped></style>