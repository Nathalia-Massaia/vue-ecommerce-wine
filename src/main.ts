import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

Vue.config.productionTip = false;
Vue.config.silent = true

Vue.filter('currency', (value: number) => {
  return new Intl.NumberFormat('currency', {
    style: 'currency',
    currency: 'BRL',
  }).format(value);
});

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
