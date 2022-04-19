<template>
  <nav>
    <router-link to="/">Game</router-link> |
    <router-link to="/about">About</router-link> |
    <template v-if="this.$store.state.currentUser">
      <router-link to="/profile">Profile</router-link>
    </template>
    <template v-else>
      <router-link to="/login">Log In</router-link> |
      <router-link to="/signup">Sign Up</router-link>
    </template>
  </nav>
  <router-view />
</template>

<script>
export default {
  name: "App",
  data() {
    return {};
  },

  beforeMount() {
    const users = require("./assets/users.json");
    users.forEach((user) => this.$store.dispatch("ADD_USER", user));
  }
};
</script>


<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
