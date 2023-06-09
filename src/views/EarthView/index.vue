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
                    baseTexture: './assets/world.jpg',
                    heightTexture: './assets/world.jpg',
                    environment: './assets/bg.jpg',
                    displacementScale: 0.01,
                    shading: 'realistic',
                    realisticMaterial: {
                        roughness: 0.9
                    },
                    postEffect: {
                        enable: true
                    },
                    light: {
                        main: {
                            intensity: 5,
                            shadow: true
                        },
                        ambient: {
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