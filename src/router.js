import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter);

const paint = () => import('@/router/Painter/paint.vue');
const rank = () => import('@/router/rank/rank.vue');
const activity = () => import('@/router/activity/activity.vue');
const drawer = () => import('@/router/Painter/RecommendPainter/drawer.vue');

const routes = [
  {
    path: "/",
    redirect: '/paint'
  },
  {
    path: '/paint',
    name: 'paint',
    component: paint,
    children: [
      {
        path: 'drawer/:id',
        name: '/drawer',
        component: drawer,
      }
    ]
  },
  {
    path: '/rank',
    name: 'rank',
    component: rank
  },
  {
    path: '/activity',
    name: 'activity',
    component: activity
  }
]

var router =  new VueRouter({
    routes
})
export default router;
