<template>
  <div id="app">
    <Hheader></Hheader>
    <!-- <keep-alive exclude="movieDetail"> -->
      <router-view></router-view>
    <!-- </keep-alive> -->
  </div>
</template>

<script>
import Hheader from './header.vue';

export default {
  name: 'app',
  components: {
    Hheader
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
