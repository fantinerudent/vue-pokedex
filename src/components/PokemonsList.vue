<template>
  <div>
    <div v-for="pokemon in pokemons" :key="pokemon.name">
      <button @click="getInfo(pokemon.url)">
        Learn more about {{ pokemon.name }}
      </button>
      <!-- <PokemonCard :name="pokemon.name" :url="pokemon.url"/> -->
    </div>
  </div>
</template>

<script>
// import PokemonCard from "./PokemonCard";

export default {
  components: {
    // PokemonCard,
  },
  mounted() {
    this.$store.dispatch("getPokemons");
  },
  computed: {
    pokemons() {
      return this.$store.state.pokemons;
    },
  },
  methods: {
    getInfo(url) {
      this.$store.dispatch(`getPokemonInformations`, url);
    },
  },
};
</script>

<style>
</style>