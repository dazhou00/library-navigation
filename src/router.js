import { createRouter, createWebHistory } from "vue-router";
import { menus } from "./menu/index.js";

const routes = [
  {
    path: "/",
    name: "index",
    component: () => import("./navigation/index.vue"),
  },
  ...menus.map((item) => {
    return {
      path: item.path,
      name: item.name,
      component: () => import("./navigation/" + item.name + "/main.vue"),
    };
  }),
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});
export default router;
