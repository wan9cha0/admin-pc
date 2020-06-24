import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import anime from 'animejs/lib/anime.es.js';
import '@/assets/css/common.min.css'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import '@mdi/font/css/materialdesignicons.css'


Vue.use(Vuetify)

Vue.config.productionTip = false
Vue.prototype.$anime = anime
new Vue({
  vuetify: new Vuetify(),
  router,
  store,
  render: h => h(App)
}).$mount('#app')