<template>
    <div class="item" @mouseenter="showBtn = true" @mouseleave="showBtn = false">
        <div class="left">
            <input type="checkbox" v-model="taskItem.checked">
            <span>{{ taskItem.taskName }}</span>
        </div>
        <button v-show="showBtn" class="right" @click="removeTask(taskItem.id)">
            删除
        </button>
    </div>
</template>

<script>
import { ref } from 'vue'
import { useStore } from 'vuex'

export default {
    name: 'TodoItem',
    props: {
        taskItem: {
            type: Object,
            required: true
        }
    },
    setup() {
        const showBtn = ref(false)
        const store = useStore()

        // 删除任务
        let removeTask = (id) => store.commit('removeTask', id)

        return {
            removeTask,
            showBtn,
        }
    }
};
</script>

<style lang="scss" scoped>
.item {
    display: flex;
    justify-content: space-between;
    margin-bottom: 5px;
    padding: 5px;

    &:hover {
        background-color: #eee;
    }
}
</style>