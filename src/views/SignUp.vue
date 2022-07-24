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
        w-2/5
        relative
      "
    >
      <div class="circle"></div>
      <div class="card flex flex-col items-center min-h-20">
        <div class="logo text-white text-3xl font-bold mt-5">
          <span class="text-sec-2">Company</span> Logo
        </div>
        <div class="inputs w-2/4 mb-10 mt-10">
          <user-input
            place-holder="Name"
            input-name="username"
            v-model="signUpData.username"
          ></user-input>
          <user-input
            place-holder="Email@email.com"
            input-name="email"
            v-model="signUpData.email"
          ></user-input>
          <user-input
            place-holder="Password"
            input-name="password"
            inputType="password"
            v-model="signUpData.password"
          ></user-input>
          <user-input
            place-holder="Re-enter Password"
            input-name="password2"
            inputType="password"
            v-model="signUpData.password2"
          ></user-input>
          <user-input-select @change="onChange" />
          <input-date v-model="signUpData.date_of_birth" />
        </div>
        <div class="btn-container mb-10">
          <button class="login-btn" @click="signUpUser">Sign Up</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "../components/Header";
import UserInput from "../components/UserInput";
import UserInputSelect from "../components/UserInputSelect";
import InputDate from "../components/InputDate";
import axios from "axios";

export default {
  name: "SignUp",
  props: {},
  components: {
    Header,
    UserInput,
    UserInputSelect,
    InputDate,
  },
  data() {
    return {
      signUpData: {
        email: "",
        password: "",
        username: "",
        password2: "",
        gender: "",
        date_of_birth: "",
      },
      IsAuth: true,
    };
  },
  methods: {
    onChange(ev) {
      if (ev) {
        console.log(ev);
      }
      this.signUpData.gender = ev;
    },
    async signUpUser() {
      console.log("hello");
      const options = {
        url: "http://192.168.1.9:8000/profile/sign-up",
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json;charset=UTF-8",
        },
        data: this.signUpData
      };
      axios(options)
        // .then((res) => res.data)
        .then((res) => {
          console.log(res);
          if (res.status==201){
            this.$router.push('/login')
          }
        } )
        .catch((error) => error.response.data)
        .then(res=>console.log(res));
      // var interval = setInterval(() => {
      //   if (localStorage.token) {
      //     this.$router.push("/");
      //     clearInterval(interval);
      //   }
      // }, 1000);
    },
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
  left: -120px;
  bottom: 50px;
}

.login-btn {
  @apply px-4 py-2 border rounded-3xl text-base
  border-sec-2 text-sec-2;
  min-width: 150px;
  font-weight: normal;
  transition: all 0.3s ease;
}

.login-btn:hover {
  background-color: #f1b139;
  color: black;
  transition: all 0.3s ease-out;
}
.inputs div {
  margin-bottom: 0.5rem;
  width: 100%;
}
</style>
