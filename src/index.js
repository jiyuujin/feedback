import Vue from 'vue'

import router from './router'
import store from './store'

import App from './App.vue'

import './assets/main.css'

import Space from './components/Space.vue'

Vue.component('v-space', Space)

const app = new Vue({
  router,
  store,
  render: h => h(App)
})

app.$mount('#app')
