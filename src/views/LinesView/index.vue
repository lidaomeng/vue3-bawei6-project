<template>
    <div class="earth">
        <v-charts :options="options"></v-charts>
    </div>
</template>

<script>
import { ref, onMounted } from 'vue'

export default {
    name: 'EarthView',

    setup() {
        const options = ref({})

        const update = () => {
            let ROOT_PATH = './assets/'

            fetch('http://localhost:8080/assets/flights.json')
                .then(response => response.json())
                .then(data => {
                    let airports = data.airports.map(function (item) {
                        return {
                            coord: [item[3], item[4]]
                        };
                    });
                    function getAirportCoord(idx) {
                        return [data.airports[idx][3], data.airports[idx][4]];
                    }
                    let routesGroupByAirline = {};
                    data.routes.forEach(function (route) {
                        let airline = data.airlines[route[0]];
                        let airlineName = airline[0];
                        if (!routesGroupByAirline[airlineName]) {
                            routesGroupByAirline[airlineName] = [];
                        }
                        routesGroupByAirline[airlineName].push(route);
                    });
                    let pointsData = [];
                    data.routes.forEach(function (airline) {
                        pointsData.push(getAirportCoord(airline[1]));
                        pointsData.push(getAirportCoord(airline[2]));
                    });
                    let series = data.airlines
                        .map(function (airline) {
                            let airlineName = airline[0];
                            let routes = routesGroupByAirline[airlineName];
                            if (!routes) {
                                return null;
                            }
                            return {
                                type: 'lines3D',
                                name: airlineName,
                                effect: {
                                    show: true,
                                    trailWidth: 2,
                                    trailLength: 0.15,
                                    trailOpacity: 1,
                                    trailColor: 'rgb(30, 30, 60)'
                                },
                                lineStyle: {
                                    width: 1,
                                    color: 'rgb(50, 50, 150)',
                                    opacity: 0.1
                                },
                                blendMode: 'lighter',
                                data: routes.map(function (item) {
                                    return [airports[item[1]].coord, airports[item[2]].coord];
                                })
                            };
                        })
                        .filter(function (series) {
                            return !!series;
                        });
                    series.push({
                        type: 'scatter3D',
                        coordinateSystem: 'globe',
                        blendMode: 'lighter',
                        symbolSize: 2,
                        itemStyle: {
                            color: 'rgb(50, 50, 150)',
                            opacity: 0.2
                        },
                        data: pointsData
                    });
                    // 重点
                    options.value = {
                        legend: {
                            selectedMode: 'single',
                            left: 'left',
                            data: Object.keys(routesGroupByAirline),
                            orient: 'vertical',
                            textStyle: {
                                color: '#fff'
                            }
                        },
                        globe: {
                            environment: ROOT_PATH + 'starfield.jpg',
                            heightTexture:
                                ROOT_PATH + 'bathymetry_bw_composite_4k.jpg',
                            displacementScale: 0.1,
                            displacementQuality: 'high',
                            baseColor: '#000',
                            shading: 'realistic',
                            realisticMaterial: {
                                roughness: 0.2,
                                metalness: 0
                            },
                            postEffect: {
                                enable: true,
                                depthOfField: {
                                    enable: false,
                                    focalDistance: 150
                                }
                            },
                            temporalSuperSampling: {
                                enable: true
                            },
                            light: {
                                ambient: {
                                    intensity: 0
                                },
                                main: {
                                    intensity: 0.1,
                                    shadow: false
                                },
                                ambientCubemap: {
                                    texture: ROOT_PATH + 'lake.hdr',
                                    exposure: 1,
                                    diffuseIntensity: 0.5,
                                    specularIntensity: 2
                                }
                            },
                            viewControl: {
                                autoRotate: false
                            },
                            silent: true
                        },
                        series: series
                    };

                })


        }

        onMounted(update)

        return {
            options
        }
    }
};
</script>

<style lang="scss" scoped>
.earth {
    width: 100%;
    height: 90%;
}
</style>