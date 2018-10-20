<template lang="pug">
  div#index
    div(v-for="team in teams")
      router-link(v-bind:to="{ name: 'post', params: { id: team.id } }") {{ team.name }}
</template>

<script>
import axios from '../lib/axios'

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
  }
}
</script>

<style lang="scss" scoped>
</style>
