import { createRouter, createWebHashHistory } from "vue-router";

import Home from "@/pages/home";
import About from "@/pages/about";

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
  },
];

export default createRouter({
  history: createWebHashHistory(),
  routes,
});
