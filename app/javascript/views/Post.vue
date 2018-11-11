<template lang="pug">
  div#posts
    div.comment(v-for="post in posts") {{ post.comment }}
  
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
#posts {
  float: left;
  height: 100%;
  width: 550px;
  background-color: #EEEEEE;
}
.comment {
  margin: 10px;
  margin-left: 20px;
  height: 30px;
  width: 500px;
  border-bottom: solid 1px #DDDDDD;
}
</style>
