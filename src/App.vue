<template>
  <h1 style="text-align: center;">Hello Vue3!</h1>
  <p class="link">
    <router-link to="/">Go to Home</router-link> | 
    <router-link to="/about">Go to About</router-link> | 
    <router-link to="/talk">父子组件通信</router-link> 
  </p>

  <router-view></router-view>
</template>

<script>

export default {
  name: 'App'
}
</script>

<style scoped>
.link {
  text-align: center;
}
</style>
