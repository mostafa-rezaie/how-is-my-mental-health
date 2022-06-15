<template>
  <div class="ghq-test-container">
    <div class="questions-container">
      <div class="question" v-for="(question,index) in questions" :key="index">
        <br>
        {{ question.questionText }}
        <div class="radio-group">
          <label class="radio-container">
            <input type="radio" value="1" :name="getName(question.questionNumber)" @change="onChange($event)">
            <span class="checkmark"></span>
            <span class="text-choice">1</span>
          </label>
          <label class="radio-container">
            <input type="radio" value="2" :name="getName(question.questionNumber)" @change="onChange($event)">
            <span class="checkmark"></span>
            <span class="text-choice">2</span>
          </label>
          <label class="radio-container">
            <input type="radio" value="3" :name="getName(question.questionNumber)" @change="onChange($event)">
            <span class="checkmark"></span>
            <span class="text-choice">3</span>
          </label>
          <label class="radio-container">
            <input type="radio" value="4" :name="getName(question.questionNumber)" @change="onChange($event)">
            <span class="checkmark"></span>
            <span class="text-choice">4</span>
          </label>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  name: 'GHQTest',
  props: {},
  data() {
    return {
      testName: 'qhqTest',
      questions: [
        {
          questionText: '1.how do you rate your mental health in genral?',
          questionNumber: 1
        },
        {
          questionText: '2.how do you rate your mental health in genral?',
          questionNumber: 2
        },
        {
          questionText: '3.how do you rate your mental health in genral?',
          questionNumber: 3
        },
        {
          questionText: '4.how do you rate your mental health in genral?',
          questionNumber: 4
        },
        {
          questionText: '5.how do you rate your mental health in genral?',
          questionNumber: 5
        },
        {
          questionText: '6.how do you rate your mental health in genral?',
          questionNumber: 6
        },
      ],
      answers: [],
    }
  },
  methods: {
    getName(questionNumber) {
      return this.testName + '' + questionNumber
    },
    onChange(event) {
      let flag = 0
      this.answers.forEach(item => {
        // console.log(item.questionId)
        if (item.questionId === event.target.name) {
          // console.log('repeat')
          item.questionAns = event.target.value
          flag = 1
        }
      })

      // for (let i in this.answers) {
      //   console.log(i)
      //   if (i.questionId === event.target.name) {
      //     i.questionAns = event.target.value
      //     flag = 1
      //   }
      // }
      if (flag == 0) {
        this.answers.push({'questionId': event.target.name, 'questionAns': event.target.value})

      }
    }
  }
}
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
