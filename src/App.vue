<template>
  <div id="app">
    <!-- prop kebab cased in html/markup-->
    <the-header v-if="currentUser" :current-user="currentUser"></the-header>
    <img src="./assets/logo.png">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
  // Receive the prop from Root vue instance
  // Props have to be camelCased in JS
  props: ['currentUser']
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  display: flex;
  flex-direction: column;
  max-width: 1684px;
  margin: 0 auto;
}

img {
  width: fit-content;
  margin: 0 auto;
}
</style>
