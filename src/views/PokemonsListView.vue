<template>
  <div>
    <h1>Les pokékés</h1>
    <p>
      Ici se trouvent la liste des pokémons, je vais trouver les pokémons rangés
      dans mon data store, je vais créer un component pour les diplays ok ?
    </p>
    <div class="toto"><PokemonsList /></div>
  </div>
</template>


<script>
import PokemonsList from "../components/PokemonsList";
export default {
  components: {
    PokemonsList,
  },
};
</script>

<style>
.toto {
  background-color: red;
  height: 100px;
}
</style>