<template>
  <div id="container">
    <div v-if="actualPokemon.name" id="pokemon-container">
      <div>{{ actualPokemon.name }}</div>
      <img :src="actualPokemon.image" alt="pokemon" />
    </div>
    <div v-else>
      An error has been detected, please go back to the pokemons' list to choose
      another one...
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      url: String,
    };
  },
  mounted() {
    this.url = this.$route.params.data;
    this.$store.dispatch(`getPokemonInformations`, this.url);
  },

  computed: {
    actualPokemon() {
      return this.$store.state.actualPokemon;
    },
  },
};
</script>

<style>
#container {
  display: flex;
}
#pokemon-container {
  display: flex;
  flex-direction: column;
}
#container img {
  margin: 20px;
  width: 20vw;
}
</style>