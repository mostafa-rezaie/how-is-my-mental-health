<template>
  <div>
    <Header />
    <router-view @send-data="saveData"></router-view>
    <div class="button-container w-full flex flex-col justify-center mb-10">
      <button @click="sendAnswers" class="submit-btn mx-auto">
        <span class="hover-span"><fas icon="fa-solid fa-right-long"></fas></span
        ><span class="default-text">Submit Answers!</span>
      </button>
      <span v-if="isAnsweredAll" class="mx-auto text-red"
        >Please answer to all questions!</span
      >
    </div>
  </div>
</template>

<script>
import Header from "../components/Header";
import axios from "axios";

export default {
  name: "TakeTest",
  props: {},
  components: {
    Header,
  },
  data() {
    return {
      answers: [],
      isAnsweredAll: false,
      questionnaireId:'',
      questionnaireName:this.$router.currentRoute.name
    };
  },
  methods: {
    saveData(ans) {
      this.answers = ans;
    },
    sendAnswers() {
      if (this.answers.length == 0) {
        console.log("list is empty");
        this.isAnsweredAll = true;
      } else {
        console.log("hey");
        const options = {
          url: "http://192.168.1.9:8000/tests-api/submit-answers",
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json;charset=UTF-8",
            Authorization: "Token " + localStorage.getItem("token"),
          },
          data: {
            questionnaireId: this.questionnaireId,
            data: this.answers,
          },
        };
        axios(options).then((res) => {
          console.log(res.status);
          if (res.status == 200) {
            this.$router.push({ name: "home" });
          }
        });
      }
    },
  },
  computed: {
    getQuestionnareName(){
      return this.$router.currentRoute.name 
    }
  },
  mounted() {
    if (this.questionnaireName == 'ghqtest'){
      this.questionnaireId = '5'
    }else{
      if (this.questionnaireName == 'bfptest'){
        this.questionnaireId = '6'
      }
    }
  },
};
</script>

<style scoped>
.submit-btn {
  @apply px-4 py-2 border rounded-3xl text-base
  border-sec-2 text-sec-2;
  min-width: 150px;
  font-weight: normal;
  transition: all 0.3s ease;
}
.submit-btn:hover {
  background-color: #f1b139;
  color: black;
  transition: all 0.3s ease-out;
}
.submit-btn:hover .default-text {
  display: none;
}
.submit-btn:hover .hover-span {
  display: inline;
}
.hover-span {
  display: none;
}
</style>
