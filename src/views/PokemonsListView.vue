<template>
  <div>
    <h1>Les pokékés</h1>
    <p>
      Ici se trouve la liste des pokémons, je vais trouver les pokémons rangés
      dans mon data store, je vais créer un component pour les diplays ok ?
    </p>
    <PokemonsList class="toto"/>
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
  max-width: 80%;
  margin: 0 auto;
}
</style>