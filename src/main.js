import Vue from 'vue'
import App from './App.vue'

import picture from './index.js'
Vue.use(picture)

new Vue({
  el: '#app',
  render: h => h(App)
})
