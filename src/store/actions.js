// import Pokemon from "../apis/Pokemon";
import axios from "axios";

export const getPokemons = ({ commit }) => {
  axios.get("https://pokeapi.co/api/v2/pokemon").then((response) => {
    commit("SET_ALL_POKEMONS", response.data.results);
  });
};

export const getPokemonInformations = ({ commit }, url) => {
  axios.get(url).then((response) => {
    commit("SET_ALL_INFORMATIONS", response.data);
  });
};
