<template lang="pug">
  div#haeder
    p {{ message }}
</template>

<script>
export default {
  data: function () {
    return {
      message: "footer"
    }
  }
}
</script>

<style scoped>
p {
  font-size: 2em;
  text-align: center;
}
</style>
