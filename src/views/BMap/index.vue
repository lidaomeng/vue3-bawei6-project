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
        const colors = ref(['rgba(254,174,33,.8)', 'rgba(8,186,236,.9)','rgba(233,63,66,.9)'])

        const initData = () => {
            fetch('http://www.youbaobao.xyz/datav-res/datav/map.json')
                .then(response => response.json())
                .then(data => {
                    console.log('data', data);
                    Echarts.registerMap('jiangsu', data)

                    // 拿到坐标数据
                    const center = data.features.map(item => {
                        return {
                            key: item.properties.name,
                            value: item.properties.cp
                        }
                    })
                    console.log('center', center);

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
                                    return {
                                        name: item.key,
                                        value: Math.random() * 100
                                    }
                                })
                            },
                            {
                                type: 'effectScatter',
                                data: center.map(item => {
                                    return {
                                        city: item.key,
                                        value: item.value,
                                        age: Math.floor(Math.random() * 100)
                                    }
                                }),
                                coordinateSystem: 'geo',
                                symbolSize: 16,
                                label: {
                                    emphasis: {
                                        show: true,
                                        position: 'top',
                                        formatter(p) {
                                            return `{title|${p.data.city}}\n{content|发生xx事件 ${p.data.age}岁}`
                                        },
                                        // 背景色
                                        // backgroundColor: 'rgba(254,174,33,.8)', // 黄
                                        // backgroundColor: 'rgba(8,186,236,.9)', // 蓝
                                        backgroundColor: 'rgba(233,63,66,.9)', // 红
                                        borderRadius: 3,
                                        lineHeight: 30,
                                        rich: {
                                            title: {
                                                padding: [0, 10, 10, 10],
                                                color: '#fff'
                                            },
                                            content: {
                                                padding: [10, 10, 0, 10],
                                                color: '#fff'
                                            }
                                        }
                                    }

                                },

                                itemStyle: {
                                    color: '#BF40BF'
                                }
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