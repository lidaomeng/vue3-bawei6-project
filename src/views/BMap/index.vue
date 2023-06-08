<template>
    <div class="map">
        <v-charts :options="options"></v-charts>
    </div>
</template>

<script>
import { ref, onMounted } from 'vue'
import * as Echarts from 'echarts'

export default {
    name: 'BMap',

    setup() {
        const options = ref({})

        const initData = () => {
            fetch('http://www.youbaobao.xyz/datav-res/datav/map.json')
                .then(response => response.json())
                .then(data => {
                    console.log('data', data);
                    Echarts.registerMap('china', data)

                    // 省份坐标数据
                    let province = data.features.map(item => {
                        return {
                            key: item.properties.name,
                            value: item.properties.cp,
                        }
                    })
                    console.log('province', province);

                    options.value = {
                        visualMap: [
                            {
                                seriesIndex: [0],
                                show: true,
                                color: ['#fff', 'green']
                            }
                        ],
                        geo: {
                            map: 'china',
                            // zoom: 1.2,
                            // roam: true,
                            // scaleLimit: {
                            //     min: .5,
                            //     max: 3
                            // },
                            // center: [116.403963, 39.915119],
                            label: {
                                show: true,
                                color: '#fff'
                            },
                            itemStyle: {
                                borderColor: 'rgb(10, 144, 235)', // 深蓝
                                borderWidth: 1,
                                areaColor: 'rgb(43, 138, 255)',
                                // 设置阴影
                                shadowBlur: 10,
                                shadowColor: 'deepskyblue',
                                shadowOffsetX: -10,
                                shadowOffsetY: 10
                            },
                            emphasis: {
                                itemStyle: {
                                    areaColor: 'rgb(68, 240, 252)', // 浅蓝
                                    borderColor: '#fff',
                                },
                                label: {
                                    color: '#fff'
                                }
                            }
                        },
                        series: [
                            {
                                type: 'map',
                                map: 'china',
                                label: {
                                    show: true,
                                    color: '#fff'
                                },
                                data: province.map(item => {
                                    return {
                                        name: item.key,
                                        value: Math.random() * 100 // 万
                                    }
                                })
                            }
                        ]
                    }
                })
        }

        onMounted(() => {
            initData()
        })

        return {
            options
        }
    }
};
</script>

<style lang="scss" scoped>
.map {
    width: 100%;
    height: 80%;
    // background-color: rgb(24, 85, 199);
}
</style>