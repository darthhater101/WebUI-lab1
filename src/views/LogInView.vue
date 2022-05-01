<template>
  <div class="login">
    <h1>Login</h1>
    <p>
      <input
        type="text"
        name="username"
        v-model="user.username"
        placeholder="Username"
      />
    </p>
    <p>
      <input
        type="password"
        name="password"
        v-model="user.password"
        placeholder="Password"
      />
    </p>
    <button type="button" v-on:click="login()">Login</button>
  </div>
</template>

<script>
export default {
    name: "LoginView",
    data() {
        return {
            user: {
                username: "",
                password: ""
            }
        }
    },

    methods: {
        login() {
            if(this.user.username !== "" && this.user.password !== "") {
                this.$store.dispatch("LOGIN_USER", this.user);
                this.$router.push('/profile');
            } else {
                alert("Please enter username and password");
            }
        }
    }
}

</script>