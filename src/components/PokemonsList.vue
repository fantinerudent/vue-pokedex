<template>
  <div class="container">
    <div id="pagination">
    {{ totalNumberOfPokemons }}
      <v-pagination v-model="page" :length="6"></v-pagination>
    </div>
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
import axios from "axios";
const customStyles = {
  ul: {
    border: "2px solid red",
  },
  li: {
    display: "inline-block",
    border: "2px dotted green",
  },
  a: {
    color: "blue",
  },
};

export default {
  components: {
    PokemonMiniature,
  },
  data() {
    return {
      pokemons: [],
      customStyles,
      page: 1,
      selectedItems: [],
      totalNumberOfPokemons: this.totalNumber(),
    };
  },
  beforeCreate() {
    this.$store
      .dispatch(`getPokemons`, { offset: this.selectedItems })
      .then(() => {
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
    totalNumber() {
      let result;
    this.totalNumberOfPokemons = axios
        .get(`https://pokeapi.co/api/v2/pokemon`)
        .then((response) => {
          if (response.data) {
            return result = response.data.count;
          }
        }).then(() => {
          this.totalNumberOfPokemons = result
        })
        console.log('total number',this.totalNumberOfPokemons)
    },

    onChangePage(selectedItems) {
      console.log("pouet", selectedItems);
      // this.selectedItems = selectedItems + 20;
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

#pagination {
  position: absolute;
  background-color: yellow;
}
</style>