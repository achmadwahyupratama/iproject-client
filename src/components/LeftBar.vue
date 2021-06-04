<template>
    <div id="leftBar" class="col-3 col p-4">
        <h4>Select your favourite team :</h4>
        <ul class="favourite-list" style="list-style: none;">
            <FavouritesList
              v-for="favourite in favourites" :key="favourite.id"
              :favourite="favourite"
            ></FavouritesList>
            <li>
                <a class="btn btn-dark btn-sm" @click.prevent="formActive">+</a> Add a team
            </li>
        </ul>
        <AddFavourite
            v-if="formIsActive"
            @hideFormFavourite="closeForm"
        />
        <div id="chat-box">
          <ChatBox
            v-if="favourite"
            :teamBadge="teamBadge"
          />
        </div>
    </div>
</template>

<script>
import FavouritesList from './FavouritesList'
import AddFavourite from './AddFavourite'
import ChatBox from './ChatBox'
export default {
  name: 'LeftBar',
  components: {
    FavouritesList,
    AddFavourite,
    ChatBox
  },
  data () {
    return {
      formIsActive: false
    }
  },
  methods: {
    formActive () {
      this.formIsActive = !this.formIsActive
    },
    closeForm () {
      this.formIsActive = false
    }
  },
  computed: {
    favourites: function () {
      return this.$store.state.favourites
    },
    teamBadge: function () {
      if (this.$store.state.favourite) {
        return this.$store.state.favourite.team_badge
      } else {
        return ''
      }
    },
    favourite: function () {
      return this.$store.state.favourite
    }
  }
}
</script>

<style>

</style>
