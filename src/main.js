import Vue from 'vue'
import App from './App'
import router from './router'
import vueResource from 'vue-resource';
import 'normalize.css';
import fastClick from 'fastclick';
import cookie from 'vue-cookie';
import VueLazyLoad from 'vue-lazyload'
Vue.use(VueLazyLoad,{
  loading:'loading.gif'
})

Vue.use(vueResource);
Vue.use(cookie);

Vue.config.productionTip = false

fastClick.attach(document.body);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
