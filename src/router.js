import { createRouter, createWebHistory } from "vue-router";

const routes = [
  { path: "/", component: () => import("./navigation/index.vue") },
  {
    path: "/javascript",
    compoent: () => import("./navigation/javascript/main.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});
export default router;
