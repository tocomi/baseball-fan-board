import VueRouter from 'vue-router';
import Index from './components/Index.vue';
import Post from './components/Post.vue'

const routes = [
  {
    path: '/', 
    component: Index,
  },
  {
    path: '/post/:id(\\d+)', 
    name: 'post',
    component: Post,
    props: route => ({ id: Number(route.params.id) })
  }
];

export default new VueRouter({ routes });