<template>
    <div>
        <comp-c></comp-c>
    </div>
</template>

<script>
import CompC from './CompC.vue';
export default {
    name: 'CompB',
    components: {
        CompC
    },
    setup() {}
};
</script>

<style lang="scss" scoped>

</style>