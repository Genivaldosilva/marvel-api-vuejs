import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './components/App.vue';
import Home from './components/Home.vue';
import Characters from './components/Characters.vue';
import Comics from './components/comics/Comics.vue';

import './assets/styles/app.css';

Vue.config.productionTip = false;

Vue.use(VueRouter);

const routes = [
  { path: '/', component: Home },
  { path: '/characters', component: Characters },
  { path: '/comics', component: Comics }
];

const router = new VueRouter({
  routes
});

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
