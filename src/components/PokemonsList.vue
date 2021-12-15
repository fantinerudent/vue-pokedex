<template>
  <div class="container">
    <div
      class="pokemon-container"
      v-for="pokemon in pokemons"
      :key="pokemon.name"
    >
      <PokemonMiniature :pokemon="pokemon" />
      <button @click="shareDataUrl(pokemon)">
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
      pokemons: [],
    };
  },
  beforeCreate() {
    this.$store.dispatch("getPokemons").then(() => {
      this.$store.state.pokemons.map((pokemon) => {
        this.$store.dispatch("getPokemonInformations", pokemon.url);
        setTimeout(() => {
          this.pokemons = this.$store.state.pokemons;
        }, 100);
      });
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
.container {
  display: grid;
  grid-template-columns: 20% 20% 20% 20%;
}
  @media (max-width: 1100px) {
    .container {
      display: flex;
      flex-direction: column;
    }
    
  }

.pokemon-container {
  padding: 20px;
  background-color: red;
  min-width: 42%;
  margin: 10px;
  border-radius: 20px;
}
</style>