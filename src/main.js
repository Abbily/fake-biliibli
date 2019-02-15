import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false
import '@/assets/css/style.css';
import router from '@/router.js';
import '@/components/core/registerComponent';
import baseAxios from '@/components/core/axios.js';
Vue.prototype.$axios = baseAxios;


new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
