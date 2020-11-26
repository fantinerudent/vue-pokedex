// import Pokemon from "../apis/Pokemon";
import axios from "axios";

export const getPokemons = ({ commit }) => {
  axios.get("https://pokeapi.co/api/v2/pokemon").then((response) => {
    commit("SET_ALL_POKEMONS", response.data.results);
  });
};

export const getPokemonInformations = ({ commit }, url) => {
  axios.get(url).then((response) => {
    let id = response.data.id;
    console.log(id)
    commit(
      "SET_ALL_INFORMATIONS",
      id,
      response.data
    );
  });
};

