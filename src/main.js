import Vue from 'vue'
import App from './App'
import router from './router'
import vueResource from 'vue-resource';
import 'normalize.css';

Vue.use(vueResource);

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
