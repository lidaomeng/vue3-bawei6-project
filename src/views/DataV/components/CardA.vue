<template>
    <div>
        <common-card title="总销售额" salesValue="¥ 126,560" footer="日销售额￥12,423">
            <div class="chart">周同比12% 日同比11%</div>
        </common-card>
    </div>
</template>

<script>
import CommonCard from '@/components/CommonCard'
export default {
    name: 'CardA',
    components: {
        CommonCard
    },
    setup() {}
};
</script>

<style lang="scss" scoped>
.chart {
    line-height: 50px;
    font-size: 14px;
    color: #333;
}
</style>