<template lang="pug">
  div.team-name(:class="'team-' + team.id")
    router-link.team-link(:to="{ name: 'post', params: { id: team.id } }") {{ team.name }}
</template>

<script>
export default {
  props: [
    "team",
  ],
  data: function () {
    return {

    }
  },
}
</script>

<style lang="scss" scoped>
.team-name {
  float: left;
  margin: 5px;
  height: 50px;
  width: 500px;
  border-radius: 5px;
  text-align: center;
  background-color: #555;
  &.team-1 {
    background-color: rgb(24, 41, 109);
    &:hover {
      background-color: rgb(73, 92, 168);
    }
  }
  &.team-2 {
    background-color: rgb(255, 166, 0);
    &:hover {
      background-color: rgb(255, 217, 0);
    }
  }
}
.team-link {
  display: block;
  width: 100%;
  height: 100%;
  text-decoration: none;
  color: #FFFFFF;
}
</style>