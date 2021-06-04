<template>
  <div id="app" class="min-vh-100 min-vw-100">
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
.nav-link {
  text-decoration-color: #F2F2F2;
}
</style>
