<template>
  <div class="login-page">
    <Header />
    <div
      class="
        card-container
        flex flex-col
        min-h-screen-90
        justify-center
        m-auto
        w-1/3
        relative
      "
    >
      <div class="circle"></div>
      <div class="card flex flex-col items-center min-h-20">
        <div class="logo text-white text-3xl font-bold mt-5">
          <span class="text-sec-2">Company</span> Logo
        </div>
        <div class="inputs mb-10 mt-10">
          <user-input
            place-holder="Username"
            input-name="username"
          ></user-input>
          <user-input
            place-holder="Password"
            input-name="password"
            class="mt-3"
          ></user-input>

        </div>
        <div class="bottom-section">
          <div class="btn-container mb-5">
            <button class="btn">Login!</button>
          </div>
          <div class="forget-pass mb-5 text-center text-xs">
            <a href="#" class="forget-pass-link">Forget Password?</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "../components/Header";
import UserInput from "../components/UserInput";

export default {
  name: "Login",
  props: {},
  components: {
    Header,
    UserInput,
  },
};
</script>

<style scoped>
.card {
  background: linear-gradient(
    135deg,
    rgba(44, 62, 80, 0.5),
    rgba(44, 62, 80, 0.5)
  );
  /*background-color: rgba(44, 62, 80, 0.5);*/
  /*filter: blur(10px);*/
  backdrop-filter: blur(5px);
  border-radius: 10px;
  box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.35);
}

.circle {
  background-color: #f1b139;
  clip-path: circle(30% at 50% 50%);
  width: 300px;
  height: 300px;
  position: absolute;
  z-index: -1;
  right: -120px;
  top: 50px;
}
.forget-pass {
  color: #4298b4;
  transition: all 0.3s;
  /* margin-bottom: 1.5rem; */
}
.forget-pass:hover {
  color: #f1b139;
}
.forget-pass-link{
  display: inline-block;
  margin: auto;
  text-align: center;
}
</style>
