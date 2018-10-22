<template lang="pug">
  div#header
    nav#header-nav
      router-link(to="/") Home
</template>

<script>
export default {
  data: function () {
    return {}
  }
}
</script>

<style lang="scss" scoped>
#header {
  background-color: rgb(8, 53, 95);
  width: 100%;
  height: 50px;
}
#header-nav {
  padding-top: 10px;
  padding-left: 10px;
}
a {
  color: white;
}
</style>
