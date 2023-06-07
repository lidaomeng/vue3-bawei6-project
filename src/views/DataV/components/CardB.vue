<template>
    <div class="card-b">
        <common-card title="访问量" salesValue="8,846" footer="日访问量1,234">
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
    name: 'CardB',
    components: {
        CommonCard
    },
    setup() {
        const options = ref({})

        options.value = {
            color: ['purple'],
            xAxis: {
                type: 'category',
                data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
                show: false,
                boundaryGap: false
            },
            yAxis: {
                type: 'value',
                show: false
            },
            series: [
                {
                    data: [150, 900, 100, 800, 10, 1000, 230, 224, 218, 1200, 135, 147, 260],
                    type: 'line',
                    smooth: true, // 平滑
                    itemStyle: {
                        opacity: 0
                    },
                    areaStyle: {
                        color: '#c060ff'
                    }
                }
            ],
            grid: {
                top: 0,
                bottom: 10,
                left: 0,
                right: 0,
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