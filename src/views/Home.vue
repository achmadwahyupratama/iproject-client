<template>
  <div class="home">
    <NavBar/>
    <div class="row d-flex flex-row">
      <LeftBar/>
      <div class="col-9 d-flex flex-column display-content">
        <div class="d-flex flex-row co-nav-bar navbar navbar-dark justify-content-around collapse">
          <div  class="nav-item">
            <router-link  class="nav-link" to="/standings">STANDINGS</router-link>
          </div>
          <div  class="nav-item">
            <router-link  class="nav-link" to="/players">PLAYERS</router-link>
          </div>
          <div  class="nav-item">
            <router-link  class="nav-link" to="/news">NEWS</router-link>
          </div>
        </div>
        <div class="route-view-display overflow-auto">
          <router-view/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import NavBar from '../components/NavBar'
import LeftBar from '../components/LeftBar'
export default {
  name: 'Home',
  components: {
    NavBar,
    LeftBar
  },
  methods: {
  },
  created () {
    this.$store.dispatch('fetchCountries')
    this.$store.dispatch('fetchFavourites')
    this.$store.commit('SET_favourite', this.$store.state.favourites[0])
    this.$store.dispatch('getStandings', this.$store.state.favourite.leagueKey)
      .then(({ data }) => {
        this.$store.commit('SET_standings', data)
        return this.$store.dispatch('getNews', this.$store.state.favourite.teamName)
      })
      .then(({ data }) => {
        this.$store.commit('SET_news', data)
      })
      .catch((err) => {
        console.log(err)
      })
    this.$router.push('/news')
  }
}
</script>

<style scoped>
.co-nav-bar {
  background-color: #323232;
}
.route-view-display {
  padding-top: 10px;
  padding-bottom: 10px;
  max-height: 600px;
}
</style>
