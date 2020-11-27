<template>
  <div class="home">
    <p>Are you ready for your next adventure ?</p>
    <img alt="pokemons runes landscape" src="../assets/runes.jpg" />
  </div>
</template>

<script>
export default {
  name: "Home",
  components: {},
};
</script>

<style >
.home {
  display: flex;
  flex-direction: column;
  align-items: center;
}
img {
  width: 50vw;
  margin-bottom: 30px;
  border-radius: 10px;
}
</style>