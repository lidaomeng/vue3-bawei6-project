<template>
    <div>
        <keep-alive>
            <component :is="name"></component>
        </keep-alive>

        <el-tabs v-model="activeName" @tab-click="handleClick">
            <el-tab-pane label="组件A" name="a-comp">--- 组件A ---</el-tab-pane>
            <el-tab-pane label="组件B" name="b-comp">--- 组件B ---</el-tab-pane>
            <el-tab-pane label="组件C" name="c-comp">--- 组件C ---</el-tab-pane>
        </el-tabs>
    </div>
</template>

<script>
import AComp from './cmp/AComp.vue';
import BComp from './cmp/BComp.vue';
import CComp from './cmp/CComp.vue';

export default {
    name: 'Index',
    components: {
        "a-comp": AComp,
        "b-comp": BComp,
        "c-comp": CComp,
    },
    data() {
        return {
            name: 'a-comp',
            activeName: 'a-comp'
        };
    },
    methods: {
        handleClick(tab, event) {
            // console.log(tab.props.name)

            this.name = tab.props.name
        }
    },
};
</script>

<style lang="scss" scoped></style>