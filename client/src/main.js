// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Veutify from 'vuetify';
import 'vuetify/dist/vuetify.min.css';
import { sync } from 'vuex-router-sync';
import store from '@/store/store';
import VueYouTubeEmbed from 'vue-youtube-embed';
import Vue from 'vue';
import Panel from '@/components/globals/Panel';
import App from './App';
import router from './router';

Vue.config.productionTip = false;

Vue.use(Veutify);
Vue.use(VueYouTubeEmbed);
/* eslint-disable no-new */

Vue.component('panel', Panel);

sync(store, router);

new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>',
});
