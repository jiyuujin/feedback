import Vue from 'vue'

import router from './router'
import store from './store'

import App from './App.vue'

import './assets/main.css'

import Base from './components/Base.vue'
import Space from './components/Space.vue'
import Code from './components/Code.vue'
import Video from './components/Video.vue'

Vue.component('v-base', Base)
Vue.component('v-space', Space)
Vue.component('v-code', Code)
Vue.component('v-video', Video)

const app = new Vue({
  router,
  store,
  render: h => h(App)
})

app.$mount('#app')
