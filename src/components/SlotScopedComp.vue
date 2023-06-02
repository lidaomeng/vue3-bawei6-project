<template>
    <div>
        <!-- 作用域插槽 -->
        <slot :book1="book1"></slot>

        <slot name="two" :book2="book2"></slot>
        <slot name="three" :book3="book3"></slot>
    </div>
</template>

<script>
export default {
    name: 'SlotScopedComp',

    data() {
        return {
            book1: {
                name: '《三国演义》',
                author: '罗贯中'
            },
            book2: {
                name: '《水浒传》',
                author: '施耐庵'
            },
            book3: {
                name: '《红楼梦》',
                author: '曹雪芹'
            },
        };
    },

    mounted() {

    },

    methods: {

    },
};
</script>

<style lang="scss" scoped></style>