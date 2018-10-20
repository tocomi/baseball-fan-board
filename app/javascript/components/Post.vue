<template lang="pug">
  div#posts
    li(v-for="post in posts") {{ post.comment }}
</template>

<script>
import axios from '../lib/axios'

export default {
  props: { 
    id: Number 
  },
  data: function () {
    return {
      posts: []
    }
  },
  created: function() {
    this.getPosts()
  },
  methods: {
    getPosts() {
      axios.get("api/v1/posts/" + this.id).then(
        (res) => {
          if (res.data instanceof Array) {
            this.posts = res.data
          } else {
            this.posts = [res.data]
          }
        }
      )
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
