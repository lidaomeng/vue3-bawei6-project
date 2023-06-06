<template>
    <div>
        <comp-b></comp-b>
        <p>
            <button @click="handleChange('百度大厦')">改变地址</button>
        </p>
    </div>
</template>

<script>
import { ref, reactive, provide } from 'vue'
import CompB from './CompB.vue';

export default {
    name: 'CompA',
    components: {
        CompB
    },

    setup() {
        const location = ref('北京八维研修学院')
        const geo = reactive({
            lng: 116,
            lat: 40
        })

        // 改变地址
        const handleChange = (loc) => {
            location.value = loc
        }

        // 提供数据
        provide('location', location)
        provide('geo', geo)
        provide('handleChange', handleChange)

        return {
            handleChange
        }
    }
};
</script>

<style lang="scss" scoped></style>