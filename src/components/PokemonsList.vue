<template>
  <div>
    <PokemonCard v-for="pokemon in pokemons" :key="pokemon.name" />
  </div>
</template>

<script>
import PokemonCard from "./PokemonCard";

export default {
  components: {
    PokemonCard,
  },
  mounted() {
    this.$store.dispatch("getPokemons");
  },
  computed: {
    pokemons() {
      return this.$store.state.pokemons.results;
    },
  },
};
</script>

<style>
</style>