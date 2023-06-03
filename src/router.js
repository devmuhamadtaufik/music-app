import { createRouter, createWebHistory } from "vue-router";
import Home from "./views/Home.vue";
import Information from "./views/Information.vue";
import Lirycs from "./views/Lyrics.vue";

const routes = [
  {
    path: "/",
    component: Home,
  },
  {
    path: "/information",
    component: Information,
  },
  {
    path: "/lyrics",
    component: Lirycs,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
