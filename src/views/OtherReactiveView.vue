<template>
    <div>
        <other-reactive></other-reactive>

        <readonly-comp></readonly-comp>

        <raw-comp></raw-comp>

        <provide-inject-comp></provide-inject-comp>
    </div>
</template>

<script>
import OtherReactive from '@/components/OtherReactive'
import ReadonlyComp from '@/components/OtherReactive/ReadonlyComp.vue'
import RawComp from '@/components/OtherReactive/RawComp.vue'
import ProvideInjectComp from '@/components/OtherReactive/ProvideInjectComp.vue'

export default {
    name: 'OtherReactiveView',
    components: {
        OtherReactive,
        ReadonlyComp,
        RawComp,
        ProvideInjectComp
    }
};
</script>

<style lang="scss" scoped></style>