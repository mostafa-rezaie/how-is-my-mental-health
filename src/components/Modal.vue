<template>
  <div class="modal" v-show="getModalState">
    <div class="modal-content font-bold text-xl">
      <div v-if="isAuthenticated">
        <p>You are about to take the {{ testName }} test</p>
        <p>
          This test take about {{ testDuration }} minutes with
          {{ questionCount }} questions
        </p>
      </div>
      <div v-else>You need to Login First</div>
      <div class="btn-container">
        <button class="btn-alert mr-4" @click="toggleModal">Cancel</button>
        <button class="btn ml-4" v-if="isAuthenticated">
          <router-link :to="{ name: testUrl }">Start the test</router-link>
        </button>
        <button class="btn ml-4" v-else>
          <router-link :to="{ name: 'login' }">Login</router-link>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Modal",
  data() {
    return {
      url: "ghqtest",
    };
  },
  props: {
    isVisible: {
      type: Boolean,
      default: false,
    },
    testName: {
      type: String,
      default: "GHQ",
    },
    testUrl: {
      type: String,
      default: "ghqtest",
    },
    testDuration: {
      type: String,
      default: "10",
    },
    questionCount: {
      type: String,
      default: "10",
    },
  },
  methods: {
    toggleModal: function () {
      this.$emit("toggle-modal");
    },
  },
  computed: {
    getModalState() {
      return this.isVisible;
    },
    getUrl() {
      return this.url;
    },
    isAuthenticated() {
      if (localStorage.token) {
        return true;
      }else{
        return false;
      }
    },
  },
};
</script>

<style scoped>
.modal {
  /* display: block;  */
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgb(0, 0, 0); /* Fallback color */
  background-color: rgba(0, 0, 0, 0.4); /* Black w/ opacity */
  text-align: center;
}

/* Modal Content/Box */
.modal-content {
  min-height: 170px;
  position: fixed;
  background-color: #fefefe;
  margin: 15% auto;
  left: 30%;
  padding: 10px;
  border-radius: 15px;
  border: 1px solid #888;
  width: 40%;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  animation-name: animatetop;
  animation-duration: 0.4s;
}
.btn-container {
  display: flex;
  justify-content: space-between;
}
@keyframes animatetop {
  from {
    top: -300px;
    opacity: 0;
  }
  to {
    top: 0;
    opacity: 1;
  }
}
</style>
