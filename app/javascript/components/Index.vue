<template lang="pug">
  div#index
    p {{ message }}
</template>

<script>
export default {
  data: function () {
    return {
      message: "Index"
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
