<template>
    <div class="view">
        <setup-comp :name="name" team="Laker"></setup-comp>

        <reactive-comp></reactive-comp>

        <to-ref-comp></to-ref-comp>

        <computed-comp></computed-comp>

        <watch-effect-comp></watch-effect-comp>

        <watch-comp></watch-comp>
    </div>
</template>

<script>
import SetupComp from '@/components/SetupComp'
import ReactiveComp from '@/components/SetupComp/ReactiveComp.vue'
import ToRefComp from '@/components/SetupComp/ToRefComp.vue'
import ComputedComp from '@/components/SetupComp/ComputedComp.vue'
import WatchEffectComp from '@/components/SetupComp/WatchEffectComp.vue'
import WatchComp from '@/components/SetupComp/WatchComp.vue'

export default {
    name: 'SetupView',
    components: {
        SetupComp,
        ReactiveComp,
        ToRefComp,
        "computed-comp": ComputedComp,
        WatchEffectComp,
        WatchComp
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
.view {
    margin-bottom: 500px;
}
</style>