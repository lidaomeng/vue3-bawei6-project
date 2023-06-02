<template>
    <div>
        <div v-if="true">
            <slot-comp>
                <h2>hello slot!</h2>
            </slot-comp>
            <slot-comp></slot-comp>

            <!-- 使用具名插槽 -->
            <slot-comp>
                <template v-slot:title>
                    <h3>静夜思</h3>
                </template>
                <template v-slot:content>
                    <p>床前明月光，疑是地上霜</p>
                    <p>举头望明月⑷，低头思故乡。</p>
                </template>
            </slot-comp>

            <slot-comp>
                <template #title>
                    <h3>江雪</h3>
                </template>
                <template #content>
                    <p>千山鸟飞绝，万径人踪灭。</p>
                    <p>孤舟蓑笠翁，独钓寒江雪。</p>
                </template>
            </slot-comp>
        </div>

        <!-- 使用作用域插槽 -->
        <scoped-comp>
            <!-- 默认插槽 -->
            <template #default="{ book1 }">
                <h3>书名：{{ book1.name }}</h3>
                <p>作者：{{ book1.author }}</p>
            </template>

            <!-- 具名插槽 -->
            <template #two="{ book2 }">
                <h3>书名：{{ book2.name }}</h3>
                <p>作者：{{ book2.author }}</p>
            </template>
            <template #three="{ book3 }">
                <h3>书名：{{ book3.name }}</h3>
                <p>作者：{{ book3.author }}</p>
            </template>
        </scoped-comp>
    </div>
</template>

<script>
import SlotComp from '@/components/SlotComp.vue'
import SlotScopedComp from '@/components/SlotScopedComp.vue'

export default {
    name: 'SlotView',
    components: {
        SlotComp,
        "scoped-comp": SlotScopedComp
    },
    data() {
        return {

        };
    },

    mounted() {
        // console.log('person', this.person);
    },

    methods: {

    },
};
</script>

<style lang="scss" scoped></style>