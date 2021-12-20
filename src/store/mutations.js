export const SET_SELECTED_POKEMONS = (state, pokemons) => {
  state.pokemons = pokemons;
};

export const SET_ALL_INFORMATIONS = (state, informations) => {
  let index = Number(informations.id - 1);
  state.pokemons[index] = informations;
  state.pokemons[
    index
  ].image = `https://pokeres.bastionbot.org/images/pokemon/${informations.id}.png`;
};

export const SET_TOTAL_NUMBER_OF_POKEMONS = (state, total) => {
  state.totalNumberOfPokemons = total;
}

export const SET_ACTUAL_POKEMON = (state, pokemon) => {
  state.actualPokemon = pokemon;
};
