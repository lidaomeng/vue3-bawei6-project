<template>
    <div>
        我是组件 B
    </div>
</template>

<script>
export default {
    name: 'BComp',

    mounted() {
        console.log('--- 组件B挂载成功 ---');
    },
    beforeUnmount() {
        console.log('--- 组件B准备销毁 ---');
    },

    activated() {
        console.log('--- 组件B 激活 ---');
    },
    deactivated() {
        console.log('--- 组件B 失活 ---');
    }
};
</script>

<style lang="scss" scoped>

</style>