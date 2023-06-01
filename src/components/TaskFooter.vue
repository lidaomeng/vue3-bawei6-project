<template>
    <div>
        <button @click="handleClick">task footer</button> <span style="font-weight: 600;">{{ info }}</span>
    </div>
</template>

<script>
export default {
    name: 'TaskFooter',
    props: {
        info: {
            type: String,
            required: true
        }
    },

    methods: {
        handleClick() {
            this.$emit('update:info', '非常好，收到了！')
        }
    },
};
</script>

<style lang="scss" scoped>

</style>