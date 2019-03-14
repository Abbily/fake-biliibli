import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter);

const paint = () => import('@/views/Painter/paint.vue');
const rank = () => import('@/views/rank/rank.vue');
const activity = () => import('@/views/activity/activity.vue');
const drawer = () => import('@/views/Painter/RecommendPainter/drawer.vue');
const drawerDetail = () => import('@/views/Painter/RecommendPainter/drawerDetail.vue');
const detail = () => import('@/views/Painter/Recommendworks/workDetail.vue');
const search = () => import('@/views/search/search.vue');

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
      dontKeepAlive: true,
      label: '画友'
    },
    children: [
      {
        path: 'detail/:docId/:uId',
        name: 'detail',
        component: detail,
      },
    ]
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
      dontKeepAlive: true,
      label: '排行榜'
    },
  },
  {
    path: '/activity',
    name: 'activity',
    component: activity,
    meta: {
      label: '活动中心'
    }
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
