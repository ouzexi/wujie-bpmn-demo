<template>
  <div id="app">
    <h4>主应用</h4>
    <img alt="Vue logo" src="./assets/logo.png">
    <WujieVue  width="100%" height="100%" url="http://127.0.0.1:8081"></WujieVue>
  </div>
</template>

<script>
import WujieVue from "wujie-vue2";
export default {
  name: 'App',
  components: {
      WujieVue
  },
}
</script>

<style>
#app {
  border: 1px solid purple;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
