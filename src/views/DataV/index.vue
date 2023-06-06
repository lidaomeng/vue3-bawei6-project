<template>
    <div style="height: 400px;width: 100%;">
        <v-charts :options="options"></v-charts>
    </div>
</template>

<script>
import { ref } from 'vue';

export default {
    name: 'Index',

    setup() {
        const options = ref()
        options.value = {
            title: {
                text: 'ECharts 入门示例'
            },
            tooltip: {},
            legend: {
                data: ['销量']
            },
            xAxis: {
                data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
            },
            yAxis: {},
            series: [
                {
                    name: '销量',
                    type: 'bar',
                    data: [5, 20, 36, 10, 10, 20]
                }
            ]
        };

        return {
            options
        }
    }
};
</script>

<style lang="scss" scoped></style>