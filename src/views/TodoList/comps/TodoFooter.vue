<template>
    <div class="footer">
        <span>已完成{{ completedTask }} / 全部{{ allTask }}</span>
        <button @click="clearCompleted">清除已完成</button>
    </div>
</template>

<script>
import { useStore } from 'vuex'
import { computed } from 'vue'

export default {
    name: 'TodoFooter',

    setup() {
        const store = useStore()

        const completedTask = computed(() => store.getters.completedTask)
        const allTask = computed(() => store.getters.allTask)

        // 清除已完成
        let clearCompleted = () => store.commit('clearCompleted')

        return {
            completedTask,
            allTask,
            clearCompleted
        }
    }
};
</script>

<style lang="scss" scoped>
.footer {
    color: #333;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
</style>