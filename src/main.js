import Vue from 'vue'
import App from './App.vue'

import '@/assets/css/style.css';
import router from '@/router/router.js';
import '@/components/core/registerComponent'; // 全局组件
import baseAxios from '@/components/core/axios.js';
import fastclick from 'fastclick'; // 解决点击延迟300ms的问题


Vue.prototype.$axios = baseAxios;
Vue.config.productionTip = false; // 阻止启动生产消息
fastclick.attach(document.body);
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
