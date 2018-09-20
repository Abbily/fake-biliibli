import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter);

const paint = () => import('@/router/Painter/paint.vue');
const rank = () => import('@/router/rank/rank.vue');

const routes = [
  {
    path: "/",
    redirect: '/paint'
  },
  {
    path: '/paint',
    name: 'paint',
    component: paint
  },
  {
    path: '/rank',
    name: 'rank',
    component: rank
  }
]

var router =  new VueRouter({
    routes
})
export default router;
