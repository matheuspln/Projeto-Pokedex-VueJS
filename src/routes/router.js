import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

import PokemonList from "@/pages/PokemonList";
import PokemonPage from "@/pages/PokemonPage";

const routes = [
  {
    path: "/",
    component: PokemonList,
  },
  {
    path: "/stats",
    component: PokemonPage,
    props: (route) => ({ pokemon: route.query.q }),
  },
];

const router = new VueRouter({
  routes,
  mode: "history",
});

export default router;
