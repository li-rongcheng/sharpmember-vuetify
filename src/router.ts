import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import List from './views/List.vue';
import Cards from './views/Cards.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    { path: '/', name: 'home', component: Home },
    { path: '/list', name: 'list', component: List },
    { path: '/cards', name: 'cards', component: Cards },
    { path: '/about', name: 'about', component: () => import('./views/About.vue'),
    },
    // { path: '/helloworld', name: 'hellowworld', component: HelloWorld},
  ],
});
