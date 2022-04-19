<template>
  <div class="profile">
    <h1>My Profile</h1>
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
    <p>
      Score {{this.user.score}}
    </p>
    <button type="button" v-on:click="update()">Update</button>
    <button type="button" v-on:click="logout()">Logout</button>
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

    beforeMount() {
        this.user = Object.assign({}, this.$store.state.currentUser);
    },

    methods: {
        update() {
            if(this.user.username !== "" && this.user.password !== "") {
                this.$store.dispatch("UPDATE_USER", this.user);
            } else {
                alert("Please enter username and password");
            }
        },

        logout() {
            this.$store.dispatch("LOGOUT_USER");
            this.$router.push("/login");
        }
    }
}

</script>

