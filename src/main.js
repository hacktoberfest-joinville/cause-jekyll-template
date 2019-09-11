import Vue from 'vue';
import MagicGrid from 'vue-magic-grid';
import App from './App.vue';
import router from './router';

Vue.config.productionTip = false;

Vue.use(MagicGrid);

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');
