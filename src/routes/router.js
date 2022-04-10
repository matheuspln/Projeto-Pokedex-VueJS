import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

import PokemonList from "@/pages/PokemonList";
import PokemonPage from "@/pages/PokemonPage";

const routes = [
  {
    path: "/home",
    component: PokemonList,
  },
  {
    path: "/stats",
    component: PokemonPage,
  },
];

const router = new VueRouter({
  routes,
  mode: "history",
});

export default router;
