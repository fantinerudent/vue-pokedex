export const SET_ALL_POKEMONS = (state, pokemons) => {
  state.pokemons = pokemons;
};

export const SET_ALL_INFORMATIONS = (state, informations) => {
  state.actualPokemon = informations;
  state.actualPokemon.image = `https://pokeres.bastionbot.org/images/pokemon/${state.actualPokemon.id}.png`;
};
