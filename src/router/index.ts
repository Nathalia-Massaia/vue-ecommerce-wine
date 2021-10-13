import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import Home from '@/views/Home.vue';
import Page404 from '@/views/404.vue';
import UnderConstruction from '@/views/UnderConstruction.vue';

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: '*',
    name: '404',
    component: Page404,
  },
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/clube',
    name: 'Clube',
    component: UnderConstruction,
  },
  {
    path: '/loja',
    name: 'Loja',
    component: UnderConstruction,
  },
  {
    path: '/produtores',
    name: 'Produtores',
    component: UnderConstruction,
  },
  {
    path: '/ofertas',
    name: 'Ofertas',
    component: UnderConstruction,
  },
  {
    path: '/eventos',
    name: 'Eventos',
    component: UnderConstruction,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
