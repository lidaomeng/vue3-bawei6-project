<template>
  <div id="app">
    <h1 style="text-align: center;">Hello Vue3!</h1>
    <p class="link">
      <el-button><router-link to="/">Go to Home</router-link> </el-button>
      <!-- <el-button> <router-link to="/about">Go to About</router-link> </el-button> -->
      <el-button><router-link to="/talk">父子组件通信</router-link> </el-button>
      <el-button><router-link to="/slot">插槽</router-link> </el-button>
      <el-button><router-link to="/component">动态组件</router-link> </el-button>
      <el-button><router-link to="/async-comp">异步组件</router-link> </el-button>
      <el-button><router-link to="/setup">Setup</router-link></el-button>
      <el-button><router-link to="/other">other响应式</router-link></el-button>
      <el-button><router-link to="/todolist">TodoList</router-link></el-button>
      <el-button><router-link to="/data-v">Echarts</router-link></el-button>
      <el-button><router-link to="/bmap">百度地图</router-link></el-button>
      <el-button><router-link to="/timeline">timeline组件</router-link></el-button>
      <el-button><router-link to="/earth">3D地球</router-link></el-button>
      <el-button><router-link to="/lines">航线</router-link></el-button>
      <el-button><router-link to="/scatter">3D散点图</router-link></el-button>
    </p>

    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'App'
}
</script>

<style>
html, body, #app {
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
}
#app {
  margin-bottom: 500px;
}

.link {
  text-align: center;
}</style>
