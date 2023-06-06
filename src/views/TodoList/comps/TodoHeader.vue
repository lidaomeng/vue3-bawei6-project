<template>
    <div class="header">
        <input @keyup.enter="submit" type="text" v-model="taskName" placeholder="请输入任务名称">
    </div>
</template>

<script>
import { useStore } from 'vuex'
import { ref } from 'vue'
export default {
    name: 'TodoHeader',

    setup() {
        const taskName = ref('')
        const store = useStore()
        // 提交任务
        let submitTask = (taskName) => store.commit('submitTask', taskName)

        const submit = () => {
            if (!taskName.value.trim()) {
                alert('请输入任务名称')
                taskName.value = ''
                return
            }
            
            submitTask(taskName.value.trim())
            taskName.value = ''
        }

        return {
            taskName,
            submit
        }
    }
};
</script>

<style lang="scss" scoped>
.header {
    input {
        width: 99%;
        outline-color: #eee;
        border: 1px solid #ccc;
        padding: 5px 3px;
        border-radius: 3px;
    }
}
</style>