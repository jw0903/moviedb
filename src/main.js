// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import Element from 'element-ui';
import 'element-ui/lib/theme-default/index.css';
import 'normalize.css';
import router from './router';
import store from '../store';
import VueResource from 'vue-resource';
Vue.config.productionTip = false

Vue.use(VueResource);
Vue.use(Element);
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
