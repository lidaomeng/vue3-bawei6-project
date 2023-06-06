<template>
    <div>
        <common-card title="总销售额" salesValue="¥ 126,560" footer="日销售额￥12,423">
            <p class="chart">周同比12%日同比11%</p>
        </common-card>
    </div>
</template>

<script>
import CommonCard from '@/components/CommonCard'
export default {
    name: 'CardC',
    components: {
        CommonCard
    },
    setup() {}
};
</script>

<style lang="scss" scoped>
.chart {
    font-size: 14px;
    color: #333;
    margin: 10px 0;
}
</style>