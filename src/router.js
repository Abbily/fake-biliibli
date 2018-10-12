import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter);

const paint = () => import('@/router/Painter/paint.vue');
const rank = () => import('@/router/rank/rank.vue');
const activity = () => import('@/router/activity/activity.vue');
const drawer = () => import('@/router/Painter/RecommendPainter/drawer.vue');
const drawerDetail = () => import('@/router/Painter/RecommendPainter/drawerDetail.vue');
const detail = () => import('@/router/Painter/Recommendworks/works.vue');
const search = () => import('@/router/search/search.vue');

const routes = [
  {
    path: "/",
    redirect: '/paint'
  },
  {
    path: '/paint',
    name: 'paint',
    component: paint,
    meta: {
      dontKeepAlive: true
    }
  },
  {
    path: 'detail/:docId/:uId',
    name: 'detail',
    component: detail,
  },
  {
    path: '/drawer/:id',
    name: 'drawer',
    component: drawer,
    children: [
      {
        path: 'drawerDetail/:uid',
        name: 'drawerDetail',
        component: drawerDetail,
      },
    ]
  },
  {
    path: '/rank',
    name: 'rank',
    component: rank,
    meta: {
      dontKeepAlive: true
    },
  },
  {
    path: '/activity',
    name: 'activity',
    component: activity
  },
  {
    path: '/search',
    name: 'search',
    component: search
  }
]

const router =  new VueRouter({
    routes
})
export default router;
