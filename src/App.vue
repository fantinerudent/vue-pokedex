<template>
  <div id="app">
    <AppHeader />
    <audio controls autoplay src="../src/assets/pokemon.mp3">
      Your browser does not support the
    </audio>
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/pokemonslist"> List of Pokemons</router-link>
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
  background-color: pink;
}

#nav {
  margin: 30px 0;
  position: relative;
  text-align: center;
}

a {
  text-decoration: none;
  color: #2c3e50;
}

audio {
  opacity: 0.1;
}

a:hover {
  background-color: white;
}
</style>

<script>
import AppHeader from "./components/AppHeader";
export default {
  name: "app",
  components: {
    AppHeader,
  },
};
</script>