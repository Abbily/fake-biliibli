import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    redirect: '/paint'
  },
  {
    path: '/paint',
    name: 'paint',
    component: () => import('@/views/Painter/paint.vue'),
    meta: {
      dontKeepAlive: true,
      label: '画友'
    },
    children: [
      {
        path: 'detail/:docId/:uId',
        name: 'detail',
        component: () => import('@/views/Painter/Recommendworks/workDetail.vue'),
      },
    ]
  },
  {
    path: '/drawer/:id',
    name: 'drawer',
    component: () => import('@/views/Painter/RecommendPainter/drawer.vue'),
    children: [
      {
        path: 'drawerDetail/:uid',
        name: 'drawerDetail',
        component: () => import('@/views/Painter/RecommendPainter/drawerDetail.vue'),
      },
    ]
  },
  {
    path: '/rank',
    name: 'rank',
    component: () => import('@/views/rank/rank.vue'),
    meta: {
      dontKeepAlive: true,
      label: '排行榜'
    },
  },
  {
    path: '/activity',
    name: 'activity',
    component: () => import('@/views/activity/activity.vue'),
    meta: {
      label: '活动中心'
    }
  },
  {
    path: '/search',
    name: 'search',
    component: () => import('@/views/search/search.vue')
  }
]

const router =  new VueRouter({
    routes
})
export default router;
