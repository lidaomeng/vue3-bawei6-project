<template>
    <el-divider></el-divider>
    <div>
        <h4>{{ foo.name }}</h4>
        <h4>{{ foo.address.city }}</h4>
        <p>--------------------------------------</p>
        <h4>{{ foo_.name }}</h4>
        <h4>{{ foo_.address.city }}</h4>
    </div>
</template>

<script>
import { ref, reactive, readonly, isReadonly, isRef, isReactive, isProxy, shallowReadonly } from 'vue';

export default {
    name: 'ReadonlyComp',

    setup() {
        // 只读
        const foo = readonly({
            name: '张三',
            address: {
                city: '北京'
            }
        })

        // 深层可以改变数据内容，但是不能够触发页面的重新渲染
        const foo_ = shallowReadonly({
            name: '关羽',
            address: {
                city: '荆州'
            }
        })

        const score = ref(80)

        const person = reactive({
            name: 'baz',
            age: 20
        })

        console.log('isReadonly(foo)', isReadonly(foo));

        console.log('------------ foo ------------');
        console.log(isRef(foo)); // false
        console.log(isReactive(foo));// false
        console.log(isProxy(foo));// true

        console.log('------------ score ------------');
        // isProxy 看的是 return isReactive(raw) || isReadonly(raw)
        console.log('isRef(score)', isRef(score)); // true
        console.log('isReactive(score)', isReactive(score)); // false
        console.log('isProxy(score)', isProxy(score)); // false

        console.log('------------ person ------------');
        console.log('isRef(person)', isRef(person)); // false
        console.log('isReactive(person)', isReactive(person)); // true
        console.log('isProxy(person)', isProxy(person)); // true

        setTimeout(() => {
            // foo.name = '李四'

            // foo_.name = '张飞'
            foo_.address.city = '益州'

            console.log('foo_', foo_);
        }, 1500);

        return {
            foo,
            foo_
        }
    }
};
</script>

<style lang="scss" scoped></style>