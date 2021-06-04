<template>
  <div id="app" class="vh-100 vw-100">
    <router-view/>
    <HFooter/>
  </div>
</template>

<script>
import HFooter from 'vue-hacktiv8-footer'
export default {
  name: 'App',
  methods: {
  },
  components: {
    HFooter
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
