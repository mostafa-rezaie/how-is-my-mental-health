<template>
  <div>
    <Header/>
    <div class="container text-center mt-8 mx-auto overflow-hidden">
      <div class="titles">
        <div class="first-title text-lg ">How is my mental health</div>
        <div class="quote text-8xl text-white font-bold">Calm yourself down</div>
        <div class="second-title mt-3 text-sec-1">Take these test to evaluate your mental health</div>
      </div>
      <div class="button-container mt-8 flex max-w-5 m-auto justify-around">
        <button class="test-btn">Take a Test!</button>
        <div>test</div>
        <button class="login-btn">Login</button>
      </div>
    </div>
    <div class="bottom-section absolute">
      <div class="social-links absolute  ">
        <fas icon="fa-brands fa-instagram"></fas>
        <fas icon="fa-brands fa-github"></fas>
        <fas icon="fa-brands fa-reddit"></fas>
        <fas icon="fa-brands fa-facebook"></fas>
      </div>
      <div class="image-container mx-auto mt-9 ">
        <img src="@/assets/images/home-avatar.png" alt="">
      </div>
    </div>
  </div>
</template>

<script>
import Header from '../components/Header'

export default {
  name: 'Home',
  components: {
    Header,
  },
  beforeCreate() {
    console.log(this.$route.path)
    document.body.classList.add('body-home')
  },
  destroyed() {
    document.body.classList.remove('body-home')
  }
}
</script>

<style>
body {
}

</style>

<style scoped>

.first-title {
  color: #f1b139;
}

.test-btn, .login-btn {
  @apply px-4 py-2 border rounded-3xl text-base
  border-sec-2 text-sec-2
  ;
  min-width: 150px;
  font-weight: normal;
  transition: all .3s ease;
}

.test-btn:hover, .login-btn:hover {
  background-color: #f1b139;
  color: black;
  transition: all .3s ease-out;
}

.image-container {
  width: 35%;
}

.image-container img {
}

.social-links {
  bottom: 40px;
  left: 30px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
}

.social-links svg {
  color: #f1b139;
  margin-top: .5rem;
}

.bottom-section {
  bottom: 0;
}

@media screen and (max-width: 800px) {
  .image-container {
    width: 50%;
  }

}
</style>