<template>
  <div id="container">
    <div v-if="pokemon.name" id="pokemon-container">
      <div>{{ pokemon.name }} id: {{ pokemon.id }}</div>
      <img :src="urlImg" alt="pokemon" />
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
      pokemon: undefined,
      urlImg: undefined,
    };
  },
  beforeMount() {
    this.pokemon = this.$route.params.data;
    this.$store.commit("SET_ACTUAL_POKEMON", this.pokemon);
    if (this.pokemon.id < 10) {
      return (this.urlImg = `https://eternia.fr/public/media/pokedex/artworks/00${this.pokemon.id}.png`);
    } else if (10 < this.pokemon.id < 100) {
      return (this.urlImg = `https://eternia.fr/public/media/pokedex/artworks/0${this.pokemon.id}.png`);
    }
    this.urlImg = `https://eternia.fr/public/media/pokedex/artworks/${this.pokemon.id}.png`;
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
  width: fit-content;
}
#container img {
  margin: 20px;
  width: 20vw;
}
</style>