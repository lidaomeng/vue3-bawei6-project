<template>
    <div class="list">
        <task-item @click="() => handleClickItem(index)" ref="item" @removeTask="removeTask" :key="item.id" v-for="(item, index) in taskList" :task="item"></task-item>

        <h3>父组件：{{ statistic }}</h3>
        <task-footer v-model:info="statistic"></task-footer>
    </div>
</template>

<script>
import TaskItem from '@/components/TaskItem.vue';
import TaskFooter from '@/components/TaskFooter.vue';

export default {
    name: 'TalkView',
    components: {
        TaskItem,
        TaskFooter
    },

    data() {
        return {
            statistic: '已完成1，全部3',
            title: '文章标题：TodoList列表',
            taskList: [
                {
                    id: 1,
                    task: '吃饭',
                    checked: false,
                },
                {
                    id: 2,
                    task: '睡觉',
                    checked: false,
                },
                {
                    id: 3,
                    task: '敲代码',
                    checked: true,
                },
            ]
        };
    },

    mounted() {
        
    },

    methods: {
        removeTask(id) {
            this.taskList = this.taskList.filter(item => item.id !== id)
        },
        // 父组件的方法
        getArticle() {
            alert(this.title)
        },

        handleClickItem(index) {
            console.log(this.$refs.item[index].getTaskName());
        }
    },
};
</script>

<style lang="scss" scoped>

</style>