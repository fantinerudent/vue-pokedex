// import Pokemon from "../apis/Pokemon";
import axios from "axios";

export const getPokemons = async ({ commit }) => {
  const response = await axios.get(
    "https://pokeapi.co/api/v2/pokemon/?limit=10"
  );

  if (response.data) {
    commit("SET_ALL_POKEMONS", response.data.results);
  }
};

export const getPokemonInformations = async ({ commit }, url) => {
  const response = await axios.get(url);
  if (response.data) {
    commit("SET_ALL_INFORMATIONS", response.data);
  }
};
