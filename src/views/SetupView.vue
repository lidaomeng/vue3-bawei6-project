<template>
    <div>
        <setup-comp :name="name" team="Laker"></setup-comp>

        <reactive-comp></reactive-comp>
    </div>
</template>

<script>
import SetupComp from '@/components/SetupComp'
import ReactiveComp from '@/components/SetupComp/ReactiveComp.vue'

export default {
    name: 'SetupView',
    components: {
        SetupComp,
        ReactiveComp
    },
    data() {
        return {
            name: 'James',
            age: 23
        }
    }
};
</script>

<style lang="scss" scoped>

</style>