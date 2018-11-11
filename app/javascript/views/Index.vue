<template lang="pug">
  div#index
    div#central.league
      TeamBanner(v-for="team in centralLeague", :team="team")
    div#pacific.league
      TeamBanner(v-for="team in pacificLeague", :team="team")
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
  computed: {
    centralLeague() {
      return this.teams.filter((team) => team.id >= 1 && team.id <= 6)
    },
    pacificLeague() {
      return this.teams.filter((team) => team.id >= 7 && team.id <= 12)
    },
  },
  components: {
    TeamBanner: TeamBanner,
  }
}
</script>

<style lang="scss" scoped>
.league {
  float: left;
  width: 550px;
}
</style>
