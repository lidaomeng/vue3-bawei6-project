<template>
    <div class="slot">
        <!-- 默认插槽 -->
        <slot>
            <p> --------------- default content ---------------</p>
        </slot>

        <!-- 具名插槽 -->
        <slot name="title"></slot>
        <slot name="content"></slot>
    </div>
</template>

<script>
export default {
    name: 'SlotComp',

    data() {
        return {

        };
    },

    mounted() {
        
    },

    methods: {
        
    },
};
</script>

<style lang="scss" scoped>

</style>