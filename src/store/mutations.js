export const SET_ALL_POKEMONS = (state, pokemons) => {
  state.pokemons = pokemons;
};

export const SET_ALL_INFORMATIONS = (
  state,
  pokemonId,
  informations,
) => {
  state.pokemons[pokemonId] = informations;
  // let img =  `https://pokeres.bastionbot.org/images/pokemon/${pokemonId}.png`;
  // typeof
  console.log(typeof(state.pokemons[pokemonId]));
  // state.pokemons[pokemonId].image = img;
  console.log(state.pokemons[pokemonId])
};
