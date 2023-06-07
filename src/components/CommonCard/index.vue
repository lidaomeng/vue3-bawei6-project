<template>
    <div class="card">
        <div class="title">{{ title }}</div>
        <div class="salesValue">
            <count-to :startVal='startVal' :endVal='endVal' :duration='8000'></count-to>
        </div>
        <div class="chart">
            <slot></slot>
        </div>
        <div class="line"></div>
        <div class="footer">{{ footer }}</div>
    </div>
</template>

<script>
import {ref} from 'vue'
export default {
    name: 'CommonCard',
    props: {
        title: {
            type: String,
            default: ''
        },
        salesValue: {
            type: [String, Number],
            default: ''
        },
        footer: {
            type: String,
            default: ''
        },
    },
    setup() {
        const startVal = ref(0)
        const endVal = ref(1000)

        setInterval(() => {
            startVal.value = endVal.value
            endVal.value += Math.random() * 1000
        }, 1000);

        return {
            startVal,
            endVal
        }
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
        padding: 8px;
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