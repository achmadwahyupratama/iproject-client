<template>
  <div class="p-3 container">
    <form @submit.prevent="createFavourite">
        <div class="form-group p-1">
          <select v-model="leagueKey" class="form-select" aria-label="Default select example">
            <option value="0" selected disabled>Select Country</option>
            <option v-for="country in countries" :key="country.id" :value="country.leagueKey">{{country.countryName}}</option>
          </select>
        </div>
        <div class="form-group p-1" v-if="listTeams.length !== 0">
          <select v-model="teamKey" class="form-select" aria-label="Default select example">
            <option value="0" selected disabled>Select Team</option>
            <option v-for="team in listTeams" :key="team.team_key" :value="team.team_key">{{team.team_name}}</option>
          </select>
        </div>
        <button v-if="showAddButton" type="submit" class="btn rounded btn-dark btn-sm p-1" value="add">add</button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'AddFavourite',
  data () {
    return {
      listTeams: [],
      leagueKey: 0,
      teamKey: 0,
      showAddButton: false
    }
  },
  computed: {
    countries: function () {
      return this.$store.state.countries
    },
    teamName: function () {
      const selectedTeam = this.listTeams.find(team => {
        return team.team_key === this.teamKey
      })
      return selectedTeam.team_name
    }
  },
  watch: {
    leagueKey (newValue, oldValue) {
      console.log(newValue)
      this.$store.dispatch('fetchTeams', newValue)
        .then(({ data }) => {
          this.listTeams = data
        })
        .catch((err) => {
          console.log(err)
        })
    },
    teamKey (newValue, oldValue) {
      if (newValue) {
        this.showAddButton = true
      } else {
        this.showAddButton = false
      }
    }
  },
  methods: {
    createFavourite () {
      const payload = { leagueKey: this.leagueKey, teamKey: this.teamKey, teamName: this.teamName }
      // console.log(payload)
      this.$store.dispatch('addToFavourite', payload)
        .then(({ data }) => {
          this.$store.dispatch('fetchFavourites')
          this.$emit('hideFormFavourite')
          console.log(data, 'created')
        })
        .catch((err) => {
          console.log(err)
        })
    }
  }
}
</script>

<style>

</style>
