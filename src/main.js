import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import VueFullPage from 'vue-fullpage.js'
import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.min.css'


import "./registerServiceWorker";

Vue.config.productionTip = false;

Vue.use(VueFullPage, VueMaterial);


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
