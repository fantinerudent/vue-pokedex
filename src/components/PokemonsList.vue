<template>
  <div>
    <div v-for="pokemon in this.pokemons" :key="pokemon.name">
      <PokemonMiniature :pokemon="pokemon" />
      <button @click="shareDataUrl(pokemon.url)">
        Learn more about {{ pokemon.name }}
      </button>
    </div>
  </div>
</template>

<script>
import PokemonMiniature from "./PokemonMiniature";

export default {
  components: {
    PokemonMiniature,
  },
  data() {
      return {
        pokemons: []
      };
  },
  beforeCreate() {
    this.$store.dispatch("getPokemons").then(() => {
      this.$store.state.pokemons.map((pokemon) => {
        this.$store.dispatch("getPokemonInformations", pokemon.url);
        return this.pokemons = this.$store.state.pokemons;
      });
    });
  },
  methods: {
    shareDataUrl(url) {
      this.$router.push({ name: "Pokemon's detail", params: { data: url } });
    },
  },
};
</script>

<style>
</style>