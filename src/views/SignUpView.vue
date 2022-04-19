<template>
  <div class="signup">
    <h1>Sign Up</h1>
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
        type="text"
        name="password"
        v-model="user.password"
        placeholder="Password"
      />
    </p>
    <button type="button" v-on:click="signup()">Sign Up</button>
  </div>
</template>

<script>
export default {
    name: "UserProfle",
    data() {
        return {
            user: {
                username: "",
                password: "",
                score: 0
            }
        }
    },

    methods: {
        signup() {
            if(this.user.username !== "" && this.user.password !== "") {
                this.$store.dispatch("ADD_USER", this.user);
                this.$router.push('/login');
            } else {
                alert("Please enter username and password");
            }
        }
    }
}
</script>