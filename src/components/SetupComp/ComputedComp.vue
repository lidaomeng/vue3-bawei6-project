<template>
    <el-divider></el-divider>
    <div>
        <h3><input type="text" v-model="firstName"> {{ firstName }}</h3>
        <h3><input type="text" v-model="lastName"> {{ lastName }}</h3>
        <h3><input type="text" v-model="fullName"> {{ fullName }}</h3>
    </div>
</template>

<script>
import { computed, ref } from 'vue';

export default {
    name: 'ComputedComp',
    setup() {
        const firstName = ref('关羽')
        const lastName = ref('云长')

        // 箭头函数
        // const fullName = computed(() => {
        //     return firstName.value + ' 字' + lastName.value
        // })

        const fullName = computed({
            get() {
                return firstName.value + ' 字' + lastName.value
            },
            set(value) {
                let arr = value.split(" 字")
                firstName.value = arr[0]
                lastName.value = arr[1]
            }
        })
        console.log('fullName', fullName);

        return {
            firstName,
            lastName,
            fullName
        }
    }
};
</script>

<style lang="scss" scoped></style>