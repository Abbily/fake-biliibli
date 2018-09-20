import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false
import '@/assets/css/style.css';
import axios from '@/components/core/axios.js';
Vue.prototype.$axios = axios;

new Vue({
  render: h => h(App)
}).$mount('#app')
