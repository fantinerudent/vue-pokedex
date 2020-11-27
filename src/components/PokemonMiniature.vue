<template>
  <div>

      <p> TEST: {{ pokemon.name}} </p>
      <img :src="pokemon.image" alt="" srcset="">
    
  </div>
</template>

<script>
export default {
  props: ["pokemon"],
};
</script>

<style>
img {
  width: 30px;
}
</style>