<template lang="pug">
  div.team-name(:class="'team-' + team.id")
    router-link.team-link(:to="{ name: 'post', params: { id: team.id } }") {{ team.name }}
    div.logo(:class="'team-' + team.id")
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
  .team-link {
    display: block;
    padding-left: 10px;
    width: 98%;
    height: 100%;
    text-decoration: none;
    font-size: 20px;
    color: #FFFFFF;
  }
  .logo {
    margin-top: -50px;
    margin-left: 320px;
    width: 150px;
    height: 50px;
    background: url('../../assets/images/yakult.png');
    background-size: cover;
    opacity: 0.5;
    background-position: 0% 40%;
  }
}
</style>