
import axios from "axios";

export const getPokemons = async ({commit}, {offset}) => {
  const response = await axios.get(
    ` https://pokeapi.co/api/v2/pokemon/?limit=20&offset=${offset}`
  );

  if (response.data) {
    commit("SET_SELECTED_POKEMONS", response.data.results);
  }
};



export const getPokemonInformations = async ({ commit }, url) => {
  console.log("url =>", url)
  const response = await axios.get(url);
  if (response.data) {
    commit("SET_ALL_INFORMATIONS", response.data);
  }
};
