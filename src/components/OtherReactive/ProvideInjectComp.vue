<template>
    <el-divider></el-divider>
    <div>
        <comp-a></comp-a>
    </div>
</template>

<script>
import CompA from './comps/CompA.vue'
export default {
    name: 'ProvideInjectComp',
    components: {
        CompA
    }
};
</script>

<style lang="scss" scoped>

</style>