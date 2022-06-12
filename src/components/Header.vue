<template>
  <div class="nav-bar-container">
    <nav >
      <div class="logo">Logo</div>
      <div class="links">
        <router-link to="/">Home</router-link>
        <router-link to="/Tests">Tests</router-link>
        <router-link to="/About-us">About</router-link>
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
  width: 95%;
  margin: auto;
}
nav{
  color: #4d566e;
  font-family: 'Nunito', sans-serif;
  font-weight: normal ;
  font-size: 1.2rem;
  padding-top: 1rem;
  display: flex;
  justify-content: space-between;
}

a{
  text-decoration: none;
}
a:hover{
  color: white;
  transition: all .4s ease;
}
.links {
  display: flex;
  justify-content: space-around;
  width: 35%;
  margin-right: 2rem;
}
.logo,.login-container{
  width: 15%;
}
.logo{
  padding-left: 2rem;
  font-weight: 900;
  font-size: 1.3rem;
}
.login-container{
  display: flex;
  justify-content: space-around;
}
.sign-up{
  color:#f1b139 ;
}
</style>
