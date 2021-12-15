<template>
  <div class="container">
    <p>{{ pokemon.name }}</p>
    <img
      id="pokeImg"
      :src="
        hovered ? pokemon.sprites.back_default : pokemon.sprites.front_default
      "
      alt=""
      srcset=""
      @mouseover="hovered = true"
      @mouseleave="hovered = false"
    />
  </div>
</template>

<script>
export default {
  props: ["pokemon"],
  data() {
    return {
      hovered: false,
    };
  },
};
</script>

<style>
#pokeImg {
  width: 5vw;
  padding: 20px;
  -webkit-transition: opacity 1s ease-in-out;
  -moz-transition: opacity 1s ease-in-out;
  -o-transition: opacity 1s ease-in-out;
  transition: opacity 1s ease-in-out;
}
.container {
  display: flex;
  flex-direction: column;
}
</style>