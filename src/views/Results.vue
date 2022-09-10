<template>
  <div>
    <Header />
    <div class="text-center mt-10 font-bold text-sec-2">GHQ Results</div>
    <table class="mt-7">
      <tr>
        <th>Questionnaire</th>
        <th>Answered Questions</th>
        <!-- <th>Duration</th> -->
        <th>Score</th>
        <th>Date</th>
      </tr>
      <tr v-for="(item, index) in ghqResults" :key="index">
        <th>{{ item.questionnaire }}</th>
        <th>{{ item.num_of_question_answered }}</th>
        <!-- <th>{{ item.duration }}</th> -->
        <th>{{ item.score }}</th>
        <th>{{ item.created }}</th>
      </tr>
    </table>
    <div class="text-center mt-16 font-bold text-sec-2">Big Five Personality Results</div>
    <table class="mt-7">
      <tr>
        <th>Questionnaire</th>
        <th>Answered Questions</th>
        <!-- <th>Duration</th> -->
        <th>Score</th>
        <th>Description</th>
        <th>Date</th>
      </tr>
      <tr v-for="(item, index) in bfpResults" :key="index">
        <th>{{ item.questionnaire }}</th>
        <th>{{ item.num_of_question_answered }}</th>
        <!-- <th>{{ item.duration }}</th> -->
        <th>{{ item.score }}</th>
        <th>{{ item.description }}</th>
        <th>{{ item.created }}</th>
      </tr>
    </table>
  </div>
</template>

<script>
import Header from "../components/Header";
import axios from "axios";

export default {
  name: "Results",
  components: {
    Header,
  },
  data() {
    return {
      userResults: [],
      ghqResults :[],
      bfpResults:[],
    };
  },
  props: {},
  mounted() {
    const options = {
      url: this.$host + "tests-api/results",
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json;charset=UTF-8",
        Authorization: "Token " + localStorage.getItem("token"),
      },
    };
    // axios(options).then((res) => console.log(res.data));
    axios(options)
      .then((res) => res.data)
      .then((res) => {
        console.log(res);
        this.userResults = res;
        res.forEach(element => {
          if (element.questionnaire == 'GHQ'){
            this.ghqResults.push(element)
          }
          if (element.questionnaire == 'BFP'){
            this.bfpResults.push(element)
          }
          
        });
      });

  },
  methods: {
    divideResults(){
      console.log('hey');
    }
  },
};
</script>

<style scoped>
table {
  width: 95%;
  border-collapse: collapse;
  margin-right: auto;
  margin-left: auto;
}
td,
th {
  border: 1px solid #4d566e;
  padding: 8px;
}
tr:nth-child(even) {
  background-color: #4d566e45;
}
</style>
