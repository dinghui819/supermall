<template>
  <div id="app">
    <router-view></router-view>
    <MainTabBar/>
  </div>
</template>
<script>
import MainTabBar from './components/MainTabBar'
export default {
  components:{
    MainTabBar
  }
}
</script>
<style lang="less">
@import "./assets/css/base.css";
</style>
