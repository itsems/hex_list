import Vue from 'vue'
import App from './App.vue'
import "bootstrap/dist/css/bootstrap.css";

// import VueRouter from "vue-router";
// import index from './components/index.vue'
// Vue.use(VueRouter);

// const routes = [
//   {
//     path: "*",
//     name: "index",
//     component: index
//   },

// ]

// const router = new VueRouter({
//   mode: "history",
//   routes
// });

Vue.config.productionTip = false

new Vue({
  // router,
  render: h => h(App),
}).$mount('#app')
