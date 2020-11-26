<template>
  <div>
    <p v-for="pokemon in pokemons" :key="pokemon.name">
      <PokemonCard :name="pokemon.name" :url="pokemon.url"/>
    </p>
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
      console.log(this.$store.state.pokemons);
      return this.$store.state.pokemons;
    },
  },
};
</script>

<style>
</style>