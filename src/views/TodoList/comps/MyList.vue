<template>
    <div class="list">
        <todo-item v-for="item in taskList" :key="item.id" :taskItem="item"></todo-item>
    </div>
</template>

<script>
import { useStore } from 'vuex'
import { computed } from 'vue'
import TodoItem from './TodoItem.vue';

export default {
    name: 'MyList',
    components: {
        TodoItem
    },
    setup() {
        const store = useStore()

        // 任务列表
        const taskList = computed(() => store.state.taskList)

        return {
            taskList
        }
    }
};
</script>

<style lang="scss" scoped>
.list {
    border: 1px solid #eee;
    padding: 20px;
    margin: 20px 0;
}
</style>