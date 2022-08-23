import Vue from "vue";
import VueRouter from "vue-router";
import App from "./App.vue";
import Home from "./components/Home.vue";
import Login from "./components/Login.vue";
import vuetify from "./plugins/vuetify";
Vue.use(VueRouter);
const routes = [
  { path: "/", component: Home },
  { path: "/home", component: Home },
  { path: "/login", component: Login},
];
const router = new VueRouter({
  routes, // short for `routes: routes`
});
Vue.config.productionTip = false;

new Vue({
  router,
  vuetify,
  render: (h) => h(App),
}).$mount("#app");
