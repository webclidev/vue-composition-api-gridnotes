import { createApp } from "vue";
import App from "./App.vue";
import { createRouter, createWebHashHistory } from "vue-router";
import HomeView from "./HomeView.vue";
import AboutView from "./AboutView.vue";

const routes = [
  { path: "/", component: HomeView },
  { path: "/about", component: AboutView },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

createApp(App).use(router).mount("#app");
