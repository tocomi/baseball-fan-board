import VueRouter from 'vue-router';
import Index from './components/Index.vue';

const routes = [{
  path: '/index', component: Index,
}];

export default new VueRouter({ routes });