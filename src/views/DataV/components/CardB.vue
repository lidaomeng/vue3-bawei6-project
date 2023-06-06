<template>
    <div class="card-b">
        <common-card title="总销售额" salesValue="¥ 126,560" footer="日销售额￥12,423">
            <div class="content">
                <v-charts :options="options"></v-charts>
            </div>
        </common-card>
    </div>
</template>

<script>
import {ref} from 'vue'

import CommonCard from '@/components/CommonCard'
export default {
    name: 'CardB',
    components: {
        CommonCard
    },
    setup() {
        const options = ref()
        options.value = {
            
            tooltip: {},
            xAxis: {
                show: false,
                data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
            },
            yAxis: {
                show: false,
            },
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