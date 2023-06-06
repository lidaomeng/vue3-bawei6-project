<template>
    <div class="container">
        <h2>TodoList</h2>
        <div class="todolist">
            <todo-header></todo-header>
            <my-list></my-list>
            <todo-footer></todo-footer>
        </div>
    </div>
</template>

<script>
import TodoHeader from './comps/TodoHeader.vue'
import MyList from './comps/MyList.vue'
import TodoFooter from './comps/TodoFooter.vue'
export default {
    name: 'Index',
    components: {
        TodoHeader,
        MyList,
        TodoFooter  
    }
};
</script>

<style lang="scss" scoped>
.container {
    .todolist {
        border: 1px solid #eee;
        width: 500px;
        padding: 20px;
    }
}
</style>