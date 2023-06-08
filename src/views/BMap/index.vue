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
                    Echarts.registerMap('jiangsu', data)

                    // 拿到坐标数据
                    const center = data.features.map(item => {
                        return {
                            [item.properties.name]: item.properties.cp
                        }
                    })

                    options.value = {
                        visualMap: {
                            show: true,
                            seriesIndex: [0],
                            inRange: {
                                color: ['#a5dcf4', '#006edd']
                            }
                        },
                        geo: {
                            map: 'jiangsu',
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
                                borderColor: 'rgb(10, 144, 235)',
                                borderWidth: 1,
                                areaColor: 'rgb(43, 138, 255)',
                                // 阴影
                                shadowColor: 'deepskyblue',
                                shadowBlur: 20,
                                shadowOffsetX: -5,
                                shadowOffsetY: 15
                            },
                            emphasis: {
                                itemStyle: {
                                    areaColor: 'rgb(68, 240, 252)',
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
                                map: 'jiangsu',
                                data: center.map(item => {
                                    const key = Object.keys(item)[0]

                                    return {
                                        name: key,
                                        value: Math.random() * 100
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
    height: 90%;
    background-color: rgb(24, 85, 199);
}
</style>