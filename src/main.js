import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'


// vant
import Vant from 'vant';
import 'vant/lib/index.css';
Vue.use(Vant);

// element-ui
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
Vue.use(ElementUI)

// axios
import axios from "@/utils/request.js"
Vue.prototype.$axios = axios;

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')