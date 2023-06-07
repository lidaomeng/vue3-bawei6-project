<template>
    <div class="card-b">
        <common-card title="支付笔数" salesValue="6,560" footer="转化率60%">
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
    name: 'CardC',
    components: {
        CommonCard
    },
    setup() {
        const options = ref({})

        options.value = {
            color: ['rgb(99,149,249)'],
            xAxis: {
                type: 'category',
                data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun','Mon2', 'Tue2', 'Wed2', 'Thu2', 'Fri2', 'Sat2', 'Sun2'],
                show: false,
                boundaryGap: false
            },
            yAxis: {
                type: 'value',
                show: false
            },
            series: [
                {
                    data: [120, 200, 150, 80, 70, 110, 130,120, 200, 150, 80, 70, 110, 130],
                    type: 'bar'
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