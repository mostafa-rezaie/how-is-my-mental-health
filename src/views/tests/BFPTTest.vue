<template>
  <div class="ghq-test-container">
    <div class="questions-container">
      <div class="question" v-for="(question, index) in questions" :key="index">
        <br />
        <span>{{ question.qid }}.</span>
        {{ question.title }}
        <div class="radio-group">
          <label class="radio-container">
            <input
              type="radio"
              value="1"
              :name="getName(question.qid)"
              @change="onChange($event)"
            />
            <span class="checkmark"></span>
            <span class="text-choice">Totally Disagree</span>
          </label>
          <label class="radio-container">
            <input
              type="radio"
              value="2"
              :name="getName(question.qid)"
              @change="onChange($event)"
            />
            <span class="checkmark"></span>
            <span class="text-choice">Disagree</span>
          </label>
          <label class="radio-container">
            <input
              type="radio"
              value="3"
              :name="getName(question.qid)"
              @change="onChange($event)"
            />
            <span class="checkmark"></span>
            <span class="text-choice">Neutral</span>
          </label>
          <label class="radio-container">
            <input
              type="radio"
              value="4"
              :name="getName(question.qid)"
              @change="onChange($event)"
            />
            <span class="checkmark"></span>
            <span class="text-choice">Agree</span>
          </label>
          <label class="radio-container">
            <input
              type="radio"
              value="5"
              :name="getName(question.qid)"
              @change="onChange($event)"
            />
            <span class="checkmark"></span>
            <span class="text-choice">Totally Agree</span>
          </label>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "BFPTTest",
  props: {},
  data() {
    return {
      testName: "bpfttest",
      questions: [],
      answers: [],
    };
  },
  methods: {
    getName(questionNumber) {
      return questionNumber;
    },
    onChange(event) {
      let flag = 0;
      this.answers.forEach((item) => {
        if (item.qid === event.target.name) {
          item.answer = event.target.value;
          flag = 1;
        }
      });
      if (flag == 0) {
        this.answers.push({
          qid: event.target.name,
          answer: event.target.value,
        });
      }
      if (this.questions.length == this.answers.length){
        this.$emit('send-data',this.answers)
      }
    },
  },
  mounted() {
    console.log("hello");
    const options = {
      url: "http://192.168.1.9:8000/tests-api/get-questions/bfp",
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
        this.questions = res;
      });
    // TODO:unauth access
  },
};
</script>

<style scoped>
.ghq-test-container {
  color: white;
  width: 80%;
  margin: 3rem auto;
  font-size: 2rem;
  font-weight: bold;
  text-align: center;
}

label {
  font-size: 1.5rem;
  margin-right: 2rem;
}

.radio-container {
  /*display: block;*/
  position: relative;
  padding-left: 2rem;
  cursor: pointer;
  font-size: 1.5rem;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

.text-choice {
  font-size: 1.2rem;
}

.radio-container input {
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
}

.checkmark {
  position: absolute;
  top: 2px;
  left: 0;
  height: 25px;
  width: 25px;
  background-color: #4d566e;
  border-radius: 50%;
}

.radio-container:hover input ~ .checkmark {
  background-color: #ccc;
}

.radio-container input:checked ~ .checkmark {
  background-color: #f1b139;
}

.checkmark:after {
  content: "";
  position: absolute;
  display: none;
}

.radio-container input:checked ~ .checkmark:after {
  display: block;
}

.radio-container .checkmark:after {
  top: 33%;
  left: 33%;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: white;
}
</style>
