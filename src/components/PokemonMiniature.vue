<template>
  <div class="container">
    <p> {{ pokemon.name }}</p>
    <img  :src="pokemon.image" alt="" srcset="" />
  </div>
</template>

<script>
export default {
  props: ["pokemon"],
};
</script>

<style>
img {
  width: 5vw;
  padding: 20px;
}
.container {
  display:flex;
  flex-direction: column;
}
</style>