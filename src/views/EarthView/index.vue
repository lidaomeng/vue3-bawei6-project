<template>
    <div class="earth">
        <v-charts :options="options"></v-charts>
    </div>
</template>

<script>
import {ref, onMounted} from 'vue'

export default {
    name: 'EarthView',

    setup() {
        const options = ref({})

        const update = () => {
            options.value = {
                globe: {
                    baseTexture: './assets/world.jpg', // 地球的纹理
                    heightTexture: './assets/world.jpg', // 地球的高度纹理
                    environment: './assets/bg.jpg', // 环境贴图
                    displacementScale: 0.01, // 地球顶点位移的大小
                    shading: 'realistic', // 地球中三维图形的着色效果
                    realisticMaterial: { // 真实感材质相关的配置项
                        roughness: 0.9 // 粗糙度
                    },
                    postEffect: { // 后处理特效
                        enable: true
                    },
                    light: { // 光照
                        main: { // 主光源
                            intensity: 5, // 强度
                            shadow: true
                        },
                        ambient: { // 环境光
                            intensity: 1,
                        }
                    }
                }
            }
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