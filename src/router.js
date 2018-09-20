import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter);

const paint = () => import('@/router/Painter/paint.vue');


const routes = [
  {
    path: "/",
    redirect: '/paint'
  },
  {
    path: '/paint',
    name: 'paint',
    components: paint
  }
]

var router =  new VueRouter({
    routes
})
export default router;
