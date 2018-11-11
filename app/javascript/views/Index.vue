<template lang="pug">
  div#index
    TeamBanner(v-for="team in teams", :team="team")
</template>

<script>
import axios from '../lib/axios'
import TeamBanner from '../components/TeamBanner.vue'

export default {
  data: function () {
    return {
      teams: []
    }
  },
  created: function() {
    this.getTeams()
  },
  methods: {
    getTeams() {
      axios.get("api/v1/teams").then(
        (res) => {
          this.teams = res.data
        }
      )
    }
  },
  components: {
    TeamBanner: TeamBanner,
  }
}
</script>

<style lang="scss" scoped>
</style>
