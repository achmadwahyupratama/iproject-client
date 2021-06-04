<template>
<div>
  <nav class="navbar shadow navbar-dark primary-navbar">
  <div class="container-fluid">
    <a class="navbar-brand">Kick Off</a>
    <div class="nav-item">
      <p class="nav-link">Hey, {{username}}</p>
    </div>
    <div class="nav-item">
      <a @click.prevent="logout" class="nav-link" href="#">Logout</a>
    </div>
  </div>
  </nav>
</div>
</template>

<script>
export default {
  name: 'NavBar',
  methods: {
    logout () {
      localStorage.clear()
      //   const auth2 = gapi.auth2.getAuthInstance()
      //   auth2.signOut().then(function () {
      //     console.log('User signed out.')
      //   })
      this.$store.commit('SET_favourites', [])
      this.$store.commit('SET_standings', [])
      this.$store.commit('SET_news', [])
      this.$store.commit('SET_favourite', null)
      this.$router.push('/login')
    }
  },
  computed: {
    username: function () {
      return localStorage.getItem('username')
    }
  }
}
</script>

<style scoped>
.primary-navbar {
  background-color: black;
}
</style>
