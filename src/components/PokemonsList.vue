<template>
  <div>
    <div v-for="pokemon in pokemons" :key="pokemon.name">
      <button @click="shareDataUrl(pokemon.url)">
        Learn more about {{ pokemon.name }}
      </button>
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
    shareDataUrl(url) {
      this.$router.push({ name: "Pokemon's detail", params: { data: url } });
    },
  },
};
</script>

<style>
</style>