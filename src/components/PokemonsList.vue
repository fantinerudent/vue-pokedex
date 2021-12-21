<template>
  <div class="container" v-if="loading === false">
    <div id="pagination">
      {{ totalNumberOfPokemons }}
      <v-pagination
        v-model="pagination.page"
        :length="pagination.totalPages"
        :total-visible="pagination.visible"
        circle
        @input="onChangePage"
      ></v-pagination>
    </div>
    <div
      class="pokemon-container"
      v-for="pokemon in pokemons"
      :key="pokemon.name"
    >
      <p>{{ pokemon.name }}</p>
      <PokemonMiniature :url="pokemon.url"></PokemonMiniature>
      <!-- <button @click="shareDataUrl(pokemon)">
        Learn more about {{ pokemon.name }}
      </button> -->
    </div>
  </div>
  <div v-else>loading {{ loading }}</div>
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
  beforeCreate() {
    this.$store.dispatch(`getPokemons`, { offset: 0 });
  },

  data() {
    return {
      loading: false,
      customStyles,
      pagination: {
        totalPages: 0,
        page: 1,
        visible: 7,
        perPage: 20,
      },
      totalNumberOfPokemons: this.totalNumber(),
    };
  },

  methods: {
    totalNumber() {
      let result;
      this.totalNumberOfPokemons = axios
        .get(`https://pokeapi.co/api/v2/pokemon`)
        .then((response) => {
          if (response.data) {
            return (result = response.data.count);
          }
        })
        .then(() => {
          this.totalNumberOfPokemons = result;
          this.calculTotalPages();
        });
    },
    calculTotalPages() {
      if (this.totalNumberOfPokemons) {
        if (this.totalNumberOfPokemons % 20 !== 0) {
          this.pagination.totalPages =
            Math.floor(this.totalNumberOfPokemons / this.pagination.perPage) +
            1;
        } else
          this.pagination.totalPages = Math.floor(
            this.totalNumberOfPokemons / this.pagination.perPage
          );
      }
    },
    getPokemons() {
      this.$store.dispatch(`getPokemons`, { offset: this.offset }).then(() => {
        // this.$store.state.pokemons.map((pokemon) => {
        //   this.$store.dispatch("getPokemonInformations", pokemon.url);
        // });
        this.loading = false;
      });
    },
    onChangePage(selectedPage) {
      this.loading = true;
      this.pagination.page = selectedPage;
      this.getPokemons();
    },
    transformImagePokemon(id) {
      if (id.length === 1) {
        console.log(id);
        id = "00" + id;
      } else if (id.length === 2) {
        id = "0" + id;
      }
      return `https://eternia.fr/public/media/pokedex/artworks/${Number(
        id
      )}.png`;
    },
  },
  computed: {
    pokemons() {
      return this.$store.state.pokemons;
    },
    itemsToDisplay() {
      return this.pagination.page * 20 - 20;
    },
    offset() {
      return this.itemsToDisplay;
    },
  },
  watch: {
    calculPagination() {
      return (this.pagination.itemsToDisplay = this.getItems());
    },
    loader() {
      console.log(this.loading);
      return this.loading;
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
#pokeImg {
  width: 5vw;
  padding: 20px;
  -webkit-transition: opacity 1s ease-in-out;
  -moz-transition: opacity 1s ease-in-out;
  -o-transition: opacity 1s ease-in-out;
  transition: opacity 1s ease-in-out;
}

.pokemon-container {
  padding: 20px;
  background-color: red;
  min-width: 42%;
  margin: 10px;
  border-radius: 20px;
}

#pagination {
  position: relative;
  margin-bottom: 40px;
  background-color: white;
}
</style>