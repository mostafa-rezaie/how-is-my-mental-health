<template>
  <div class="nav-bar-container">
    <nav>
      <div class="logo">Logo</div>
      <div class="links">
        <router-link to="/">Home</router-link>
        <router-link to="/tests">Tests</router-link>
        <router-link to="/about-us">About</router-link>
      </div>
      <div class="login-container">
        <router-link to="/login" class="left-element" v-if="!IsAuthenticated"
          >Login</router-link
        >
        <router-link to="/sign-up" class="right-element" v-if="!IsAuthenticated"
          >Sign Up</router-link
        >
        <router-link to="/#" class="left-element" v-if="IsAuthenticated"
          >Dashboard</router-link
        >
        <div class="right-element" @click="logout" v-if="IsAuthenticated">
          <a href="#">Logout</a>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Header",
  props: {},
  data() {
    return {
      IsAuthenticated: false,
    };
  },
  methods: {
    logout() {
      var token = localStorage.token;
      localStorage.removeItem("token");
      // this.$router.go();
      const options = {
        url: "http://192.168.1.9:8000/profile/logout",
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json;charset=UTF-8",
          Authorization: "Token " + token,
        },
      };
      axios(options).then((res) => {
        if (res.status == 204) {
          this.$router.go();
        }
      });
    },
  },
  computed: {},
  created() {
    if (localStorage.token) {
      this.IsAuthenticated = true;
    }
  },
};
</script>

<style scoped>
.nav-bar-container {
  width: 95%;
  margin: auto;
}
nav {
  color: #4d566e;
  font-family: "Nunito", sans-serif;
  font-weight: normal;
  font-size: 1.2rem;
  padding-top: 1rem;
  display: flex;
  justify-content: space-between;
}

a {
  text-decoration: none;
}
a:hover {
  color: white;
  transition: all 0.4s ease;
}
.links {
  display: flex;
  justify-content: space-around;
  width: 35%;
}
.logo {
  width: 15%;
}
.login-container {
  width: 20%;
}
.logo {
  padding-left: 2rem;
  font-weight: 900;
  font-size: 1.3rem;
}
.login-container {
  display: flex;
  /* justify-content: space-around; */
  justify-content: flex-end;
}
.sign-up {
  color: #f1b139;
}
.left-element{
  padding-right: .75rem;

}
.right-element{
  padding-left: .75rem;
}
</style>
