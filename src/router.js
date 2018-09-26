import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter);

const paint = () => import('@/router/Painter/paint.vue');
const rank = () => import('@/router/rank/rank.vue');
const activity = () => import('@/router/activity/activity.vue');
const drawer = () => import('@/router/Painter/RecommendPainter/drawer.vue');
const detail = () => import('@/router/Painter/Recommendworks/works.vue');

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
      },
      {
        path: 'detail/:docId/:uId',
        name: '/detail',
        component: detail,
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

const router =  new VueRouter({
    routes
})
export default router;
