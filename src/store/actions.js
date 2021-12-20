
import axios from "axios";

export const getPokemons = async ( {commit, offset }) => {
  const response = await axios.get(
    ` https://pokeapi.co/api/v2/pokemon/?limit=20&offset=${offset}`
  );

  if (response.data) {
    commit("SET_SELECTED_POKEMONS", response.data.results);
  }
};

// export const getTotalNumberOfPokemons = async () => {
//   const response = await axios.get(`https://pokeapi.co/api/v2/pokemon`)
//   if (response.data) {
//     console.log(response.data)
//     return response.data.count
//   }
// };

export const getPokemonInformations = async ({ commit }, url) => {
  const response = await axios.get(url);
  if (response.data) {

    commit("SET_ALL_INFORMATIONS", response.data);
  }
};
