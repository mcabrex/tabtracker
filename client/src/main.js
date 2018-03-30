// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Veutify from 'vuetify';
import 'vuetify/dist/vuetify.min.css';
import { sync } from 'vuex-router-sync';
import store from '@/store/store';
import Vue from 'vue';
import App from './App';
import router from './router';

Vue.config.productionTip = false;

Vue.use(Veutify);
/* eslint-disable no-new */

sync(store, router);

new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>',
});
