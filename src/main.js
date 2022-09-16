import { createApp } from "vue";
import { createPinia } from "pinia";
import router from "@/router";
import App from "@/App";
import "normalize.css";
import "~/global.scss";

const app = createApp(App);

app.use(router);
app.use(createPinia());

app.mount("#app");
