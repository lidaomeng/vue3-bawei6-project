<template>
    <div>
        <p>我是C组件</p>
        <p>
            <span>地址：</span><span class="c">{{ location }}</span>
        </p>
        <p>
            <span>坐标：</span><span class="c">{{ geo.lng }}, {{ geo.lat }}</span>
        </p>
        <p>
            <button @click="handleChange('西二旗')">在组件C中改变地址</button>
        </p>
    </div>
</template>

<script>
import { inject } from 'vue'
export default {
    name: 'CompC',

    setup() {
        // 注入数据
        const location = inject('location')
        const geo = inject('geo')
        const handleChange = inject('handleChange')

        return {
            location,
            geo,
            handleChange
        }
    }
};
</script>

<style lang="scss" scoped>
.c {
    font-weight: 600;
}
</style>