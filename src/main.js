import Vue from 'vue'
import App from './App.vue'
import 'swiper/dist/css/swiper.css';

import picture from './index.js'
Vue.use(picture)

new Vue({
  el: '#app',
  render: h => h(App)
})
