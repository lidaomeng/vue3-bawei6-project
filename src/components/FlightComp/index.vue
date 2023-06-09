<template>
    <div class="flight">
        <v-charts :options="options"></v-charts>
    </div>
</template>

<script>
import { ref, onMounted } from 'vue'

export default {
    name: 'FlightComp',

    setup() {
        const options = ref({})

        const update = () => {

        }

        onMounted(update)
    }
};
</script>

<style lang="scss" scoped></style>