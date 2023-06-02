<template>
    <div>
        我是组件 C
    </div>
</template>

<script>
export default {
    name: 'CComp',

    mounted() {
        console.log('--- 组件C挂载成功 ---');
    },
    beforeUnmount() {
        console.log('--- 组件C准备销毁 ---');
    },

    activated() {
        console.log('--- 组件C 激活 ---');
    },
    deactivated() {
        console.log('--- 组件C 失活 ---');
    }
};
</script>

<style lang="scss" scoped>

</style>