<template>
  <div class="container">
    NAME: {{ pokemon.name }}
    <img
      id="pokeImg"
      :src="
        hovered ? pokemon.sprites.back_default : pokemon.sprites.front_default
      "
      alt=""
      @mouseover="hovered = true"
      @mouseleave="hovered = false"
    />
    <button @click="shareDataUrl(pokemon)">
      Learn more about {{ pokemon.name }}
    </button>
  </div>
</template>

<script>
export default {
  props: ["url"],
  data() {
    return {
      pokemon: undefined,
      hovered: false,
    };
  },
  mounted() {
    this.$store.dispatch("getPokemonInformations", this.url).then((result) => {
      this.pokemon = result;
    });
  },
  methods: {
    shareDataUrl(pokemon) {
      this.$router.push({
        name: "Pokemon's detail",
        params: { data: pokemon },
      });
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