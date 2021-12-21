<template>
  <div class="container">
    <!-- LALALALA: {{ getInfos(url) }} -->
    NAME: {{ pokemonInfo.name}}
    <!-- <p>{{ pokemon.name }}</p> -->
    <!-- <img
      id="pokeImg"
      :src="
        hovered ? pokemon.sprites.back_default : pokemon.sprites.front_default
      "
      alt=""
      srcset=""
      @mouseover="hovered = true"
      @mouseleave="hovered = false"
    /> -->
  </div>
</template>

<script>
export default {
  props: ["url"],
  data() {
    return {
      hovered: false,
    };
  },
  created() {
    this.pokemonInfo()
  },
  methods: {
    getInfos(url) {
      this.$store.dispatch("getPokemonInformations", url).then((result) => {
        console.log(result)
        this.infos = result;
      });
    },
  },
  computed: {
    pokemonInfo() {
      return this.getInfos(this.url);
    },
  },
};
</script>

<style>
#pokeImg {
  width: 5vw;
  padding: 20px;
  -webkit-transition: opacity 1s ease-in-out;
  -moz-transition: opacity 1s ease-in-out;
  -o-transition: opacity 1s ease-in-out;
  transition: opacity 1s ease-in-out;
}
.container {
  display: flex;
  flex-direction: column;
}
</style>