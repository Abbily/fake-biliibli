import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false
import '@/assets/css/style.css';
import router from '@/router.js';
import '@/components/core/registerComponent';
import baseAxios from '@/components/core/axios.js';
import fastclick from 'fastclick'

Vue.prototype.$axios = baseAxios;
fastclick.attach(document.body);
Vue.config.productionTip = false;
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
