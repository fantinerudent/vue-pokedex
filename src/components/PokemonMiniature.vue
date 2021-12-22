<template>
  <v-card class="mx-auto" max-width="344" outlined elevation="2">
    <v-list-item one-line> NAME: {{ pokemon.name }} </v-list-item>
    <v-list-item-avatar tile size="80" color="grey">
      <img :src=" hovered ? pokemon.sprites.back_default :
      pokemon.sprites.front_default " style="background-color: lime"
      @mouseover="hovered = true" @mouseleave="hovered = false" />
    </v-list-item-avatar>
    <v-card-actions>
      <v-btn outlined rounded @click="shareDataUrl(pokemon)">
        Learn more about {{ pokemon.name }}
      </v-btn>
    </v-card-actions>
  </v-card>
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
  /* display: flex;
  flex-direction: column; */
}
</style>