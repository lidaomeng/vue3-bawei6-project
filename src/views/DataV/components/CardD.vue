<template>
    <div class="card-b">
        <common-card title="运营活动效果" salesValue="78%" footer="周同比12% 日同比11%">
            <div class="content">
                <v-charts :options="options"></v-charts>
            </div>
        </common-card>
    </div>
</template>

<script>
import { ref } from 'vue'

import CommonCard from '@/components/CommonCard'
export default {
    name: 'CardD',
    components: {
        CommonCard
    },
    setup() {
        const options = ref({})

        options.value = {
            color: ['rgb(31,197,197)'],
            yAxis: {
                type: 'category',
                data: ['Mon'],
                show: false,
            },
            xAxis: {
                type: 'value',
                show: false,
            },
            series: [
                {
                    data: [120],
                    type: 'bar',
                    barWidth: 6,
                    stack: '数据'
                },
                {
                    data: [120],
                    type: 'bar',
                    barWidth: 6,
                    stack: '数据',
                    itemStyle: {
                        color: '#eee',
                    }
                },
            ],
            grid: {
                top: 0,
                bottom: 10,
                left: 0,
            }
        };

        return {
            options
        }
    }
};
</script>

<style lang="scss" scoped>
.chart {
    font-size: 14px;
    color: #333;
    margin: 10px 0;
}

.card-b {
    height: 100%;
    width: 100%;

    .content {
        height: 100%;
        width: 100%;
    }
}
</style>