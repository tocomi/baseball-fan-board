import VueRouter from 'vue-router';
import Index from './components/Index.vue';

const routes = [{
  path: '/', component: Index,
}];

export default new VueRouter({ routes });