import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App),
  data: {
    proofs: [
      { name: "Proof 1" }
      { name: "Proof 2" }
      { name: "Proof 3" }
      { name: "Proof 4" }
    ]
  },
}).$mount('#app');
