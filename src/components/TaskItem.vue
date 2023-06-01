<template>
    <div class="item">
        <span>{{ task.task }}</span>
        <button @click="handleRemove">删除</button>
        <button @click="getArticle">获取父组件标题</button>

    </div>
</template>

<script>
export default {
    name: 'TaskItem',
    props: {
        task: {
            type: Object,
            required: true
        },
    },

    data() {
        return {
            
        };
    },

    mounted() {
        
    },

    methods: {
        handleRemove() {
            this.$emit('removeTask', this.task.id)
        },
        getArticle() {
            this.$parent.getArticle()
        },
        // 子组件自己的方法
        getTaskName() {
            alert(this.task.task)
        }
    },
};
</script>

<style lang="scss" scoped>
.item {
    background-color: #eee;
    margin-bottom: 10px;
    padding: 6px;

    button {
        margin-left: 50px;
    }
}
</style>