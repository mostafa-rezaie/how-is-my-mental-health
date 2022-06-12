<template>
  <div class="nav-bar-container">
    <nav >
      <div class="logo">Logo</div>
      <div class="links">
        <router-link to="/">Home</router-link>
        <router-link to="/Tests">Tests</router-link>
        <router-link to="/About-us">About Us</router-link>
      </div>
      <div class="login-container">
        <router-link to="/Login" class="login">Login</router-link>
        <router-link to="/Sign-up" class="sign-up">Sign Up</router-link>

      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'Header',
  props: {}
}
</script>

<style scoped>
.nav-bar-container{
  width: 90%;
  margin: auto;
}
nav{
  font-size: 1.2rem;
  padding-top: 1rem;
  display: flex;
  justify-content: space-between;
}
a{
  text-decoration: none;
}
.links {
  display: flex;
  justify-content: space-around;
  width: 35%;
}
.logo,.login-container{
  width: 15%;
}
.login-container{
  display: flex;
  justify-content: space-around;
}
</style>
