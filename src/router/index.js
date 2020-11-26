import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/pokemonsList",
    name: "Pokemons List",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/PokemonsList.vue"),
  },
  {
    path: "/pokemon",
    name: "Pokemon's detail",
    props: true,
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/PokemonCard.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
