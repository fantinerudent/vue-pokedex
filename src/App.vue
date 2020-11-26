<template>
  <div id="app">
    <AppHeader/>
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/pokemonslist"> Les pokéké</router-link>
    </div>
    <router-view />
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}


</style>

<script>
import AppHeader from "./components/AppHeader"
export default {
  name: "app",
  components: {
    AppHeader,
  },
};
</script>