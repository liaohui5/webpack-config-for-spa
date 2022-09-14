import Vue from "vue";
import router from "@/router";
import store from "@/store";
import App from "@/App";
import "normalize.css";
import "~/global.scss";

new Vue({
  el: "#app",
  router,
  store,
  render: (h) => h(App),
});
