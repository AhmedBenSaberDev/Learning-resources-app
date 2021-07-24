import Vue from 'vue';
import App from './App.vue';

import BaseCard from './UI/BaseCard';
import BaseButton from './UI/BaseButton';

Vue.config.productionTip = false;

Vue.component('base-card',BaseCard);
Vue.component('base-button',BaseButton);
new Vue({
  render: h => h(App),
}).$mount('#app')
