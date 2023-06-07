<template>
    <div class="card">
        <div class="title">{{ title }}</div>
        <div class="salesValue">{{ salesValue }}</div>
        <div class="chart">
            <slot></slot>
        </div>
        <div class="line"></div>
        <div class="footer">{{ footer }}</div>
    </div>
</template>

<script>
export default {
    name: 'CommonCard',
    props: {
        title: {
            type: String,
            default: ''
        },
        salesValue: {
            type: String,
            default: ''
        },
        footer: {
            type: String,
            default: ''
        },
    },
    setup() {

    }
};
</script>

<style lang="scss" scoped>
.card {
    .line {
        border-top: 1px solid #eee;
    }
    .title {
        font-size: 12px;
        color: #ccc;
    }
    .salesValue {
        font-size: 30px;
    }
    .footer {
        margin-top: 5px;
        color: #333;
    }
    .chart {
        height: 50px;
    }
}
</style>