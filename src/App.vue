<template>
  <div id="app">
    <index/>
  </div>
</template>

<script>
import Index from './views/Index.vue'
export default {
  components: { Index },
  name: 'App'
}
</script>

<style>
body{
  margin: 0px;
  padding: 0px;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 0px;
}
</style>
