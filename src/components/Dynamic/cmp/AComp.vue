<template>
    <div>
        我是组件 A
    </div>
</template>

<script>
export default {
    name: 'AComp',
    mounted() {
        console.log('--- 组件A挂载成功 ---');
    },
    beforeUnmount() {
        console.log('--- 组件A准备销毁 ---');
    },
    activated() {
        console.log('--- 组件A 激活 ---');
    },
    deactivated() {
        console.log('--- 组件A 失活 ---');
    }
};
</script>

<style lang="scss" scoped></style>