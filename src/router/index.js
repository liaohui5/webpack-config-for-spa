import Vue from "vue";
import Router from "vue-router";

import Home from "@/pages/home";
import About from "@/pages/about";

Vue.use(Router);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    component: About,
  }
];

export default new Router({
  mode: 'hash',
  routes,
});

