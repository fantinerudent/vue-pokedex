<template>
  <div>
    <button @click="getInfo(url)">Learn more about {{ name }}</button>
  </div>
</template>

<script>
export default {
  props: ["name", "url"],
  methods: {
    getInfo(url) {
      this.$store.dispatch(`getPokemonInformations`, url);
    },
  },
};
</script>

<style>
</style>