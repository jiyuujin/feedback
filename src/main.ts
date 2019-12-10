import Vue from 'vue';
import App from './App';
import router from './router';
import store from './store';
import './plugins/composition-api';
import './assets/main.css';
import './registerServiceWorker';

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
