<template>
    <div class="analyze">
        <el-row :gutter="12">
            <el-col :span="6">
                <el-card shadow="always"><card-a></card-a></el-card>
            </el-col>
            <el-col :span="6">
                <el-card shadow="always"> <card-b></card-b> </el-card>
            </el-col>
            <el-col :span="6">
                <el-card shadow="always"> <card-c></card-c> </el-card>
            </el-col>
            <el-col :span="6">
                <el-card shadow="always"> <card-d></card-d> </el-card>
            </el-col>
        </el-row>
    </div>
</template>

<script>
import CardA from './components/CardA.vue';
import CardB from './components/CardB.vue';
import CardC from './components/CardC.vue';
import CardD from './components/CardD.vue';
export default {
    name: 'Index',
    components: {
        CardA,
        CardB,
        CardC,
        CardD
    },
    setup() {

    }
};
</script>

<style lang="scss" scoped>
.analyze {
    width: 100%;
    height: 100%;
    background-color: #eee;
    padding: 20px;
    box-sizing: border-box;
}
</style>