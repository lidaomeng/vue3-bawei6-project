import { createStore } from 'vuex'

// 创建一个新的 store 实例
const store = createStore({
    state() {
        return {
            id: 4,
            taskList: [
                {
                    id: 1,
                    taskName: '吃饭',
                    checked: false
                },
                {
                    id: 2,
                    taskName: '睡觉',
                    checked: false
                },
                {
                    id: 3,
                    taskName: '敲代码',
                    checked: true
                },
                {
                    id: 4,
                    taskName: '吃火锅',
                    checked: false
                },
            ]
        }
    },
    getters: {
        // 已完成
        completedTask(state) {
            return state.taskList.filter(todo => todo.checked).length
        },
        // 全部
        allTask(state) {
            return state.taskList.length
        },
    },
    mutations: {
        increment(state) {
            state.count++
        },
        // 清除已完成
        clearCompleted(state) {
            state.taskList = state.taskList.filter(todo => !todo.checked)
        },
        // 删除
        removeTask(state, id) {
            console.log('id', id);
            state.taskList = state.taskList.filter(todo => todo.id !== id)
        },
        // 提交任务
        submitTask(state, taskName) {
            state.taskList.push({
                id: state.id++,
                taskName,
                checked: false
            })
        }
    }
})

export default store
