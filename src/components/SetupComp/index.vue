<template>
    <div>
        <p>name: {{ name }}</p>
        <h3>playerName {{ playerName }}</h3>
        <h3>姓名： {{ playerInfo.name }}，年龄： {{ playerInfo.age }}，球队： {{ playerInfo.team }}，效力年限： {{ playerInfo.years }}</h3>
        <div>
            <button @click="handleClick">增加年限</button>
        </div>
        <el-divider></el-divider>
    </div>
</template>

<script>
import { ref } from 'vue';

export default {
    name: 'SetupComp',
    props: {
        name: {
            type: String
        }
    },
    setup(props, { attrs, slots, emit }) {
        console.log('props', props);
        console.log('attrs', attrs);

        // 使用ref定义响应式数据
        const playerName = ref('韦德') // 简单数据类型

        const playerInfo = ref({ // 引用类型
            name: '约基奇',
            team: '掘金',
            age: 30,
            years: 3
        })

        setInterval(() => {
            playerInfo.value.age += 1
        }, 1000);

        // 定义方法
        const handleClick = () => {
            playerInfo.value.years += 1
        }

        return {
            playerName,
            playerInfo,
            handleClick
        }
    }
};
</script>

<style lang="scss" scoped></style>