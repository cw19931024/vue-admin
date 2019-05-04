import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import partyA from './views/PartyModule/partyAlist.vue';
import partyB from './views/PartyModule/partyBlist.vue';
import partyAdd from './views/PartyModule/partyAdd.vue';
import CommodityList from './views/CommodityModule/CommodityList.vue';
import CommodityAdd from './views/CommodityModule/CommodityAdd.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/party-a',
      name: '',
      component: partyA,
    },
    {
      path: '/party-b',
      name: '',
      component: partyB,
    },
    {
      path: '/party/add',
      name: '',
      component: partyAdd,
    },
    {
      path: '/commodity/list/scuess',
      name: '',
      component: CommodityList,
    },
    {
      path: '/commodity/add',
      name: '',
      component: CommodityAdd,
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue'),
    },
  ],
});
