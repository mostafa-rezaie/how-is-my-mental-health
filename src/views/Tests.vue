<template>
  <div>
    <Header />
    <div class="tests-text">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad aliquam amet
      blanditiis consequatur culpa cum dolor doloribus, eaque exercitationem
      fuga illo, labore laboriosam laudantium libero magnam molestias mollitia
      nam necessitatibus nostrum obcaecati omnis perspiciatis praesentium quae
      quam qui quidem quisquam quod reiciendis repellat similique te Lorem ipsum
      dolor sit amet, consectetur adipisicing elit. Alias amet aperiam
      aspernatur at beatae consequuntur dicta maiores nesciunt quisquam unde.
    </div>

    <div class="card-list">
      <div
        v-for="(test, id) in tests"
        @click="clickHandler(test.name, test.numQuestion, test.duration)"
        :key="id"
      >
        <CardTest
          :test-name="test.name"
          :test-description="test.description"
          :num-of-questions="test.numQuestion"
          :algorithms="test.algorithms"
        />
      </div>
    </div>
    <div class="test-description">
      <h2 class="test-header">
        GHQ test:
      </h2>
      <div class="ghq-desc">
        Screening Psychological Distress Helps Early Detection for People at
        Risk of Mental Illness. the General Health Questionnaire (Ghq) Created
        by Goldberg in 1972 Is a Tool Which Has Been Widely Used to Assess Such
        Distress. the Ghq-12 Comprises 12 Questions Regarding the General Level
        of Happiness, the Experience of Depressive and Anxiety Symptoms,
        Perceived Stress, and Sleep Disturbance over the Previous 4 Weeks. Each
        Item Has a 4-Point Response Scale. In most studies, the GHQ-12 has been
        used as a unidimensional measure. Some factor analysis studies found
        that GHQ-12 measures three domains including social dysfunction,
        anxiety, and loss of confidence. However, other studies have identified
        only two factors depression and social dysfunction and a further study
        argued that separate domains do not contribute to identifying vulnerable
        population groups or the factors associated with distress.
      </div>
    </div>
    <div class="modal-container">
      <Modal
        @toggle-modal="toggleModal"
        :is-visible="modalShow"
        :question-count="questionCount"
        :test-name="testName"
        :test-duration="testDuration"
      />
    </div>
  </div>
</template>

<script>
import Header from "../components/Header";
import CardTest from "../components/CardTests";
import Modal from "../components/Modal.vue";

export default {
  name: "Tests",
  props: {},
  components: {
    Header,
    CardTest,
    Modal,
  },
  data() {
    return {
      tests: [
        {
          id: 1,
          name: "GHQ",
          description:
            "A self-administered questionnaire for identifying non-psychotic and minor psychiatric disorders. A widely-used first step for clinicians wishing to screen individuals for minor psychiatric disorders in the general population and within the community or non-psychiatric clinical settings, such as primary care or general medical out-patients.",
          numQuestion: "12",
          algorithms: "None",
          duration: "2",
        },
        {
          id: 2,
          name: "BIG FIVE PERSONALITY",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias ametaperiam aspernatur abeatae consequuntur dicta maiores nesciunt quisquam unde.",
          numQuestion: "85",
          algorithms: "SVM, Machine learning",
          duration: "15",
        },
        {
          id: 3,
          name: "CHARACTER STRENGTHS",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias ametaperiam aspernatur abeatae consequuntur dicta maiores nesciunt quisquam unde.",
          numQuestion: "80",
          algorithms: "SVM, Machine learning",
          duration: "20",
        },
        {
          id: 4,
          name: "HUMOR STYLES",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias ametaperiam aspernatur abeatae consequuntur dicta maiores nesciunt quisquam unde.",
          numQuestion: "75",
          algorithms: "SVM, Machine learning",
          duration: "25",
        },
      ],
      modalShow: false,
      questionCount: "0",
      testDuration: "0",
      testName: "",
    };
  },
  methods: {
    clickHandler(testName, questionCount, testDuration) {
      this.questionCount = questionCount;
      this.testDuration = testDuration;
      this.testName = testName;
      this.toggleModal();
      // console.log('clicked');
      // this.$refs.modal.toggleModal();
    },
    toggleModal() {
      this.modalShow = !this.modalShow;
    },
  },
};
</script>

<style scoped>
.tests-text {
  width: 80%;
  color: white;
  font-size: 1.2rem;
  margin: 2rem auto 0 auto;
}
.test-description{
  width: 80%;
  color: white;
  font-size: 1.2rem;
  margin: 2rem auto 0 auto;
}
.test-header{
  font-size: 2rem;
  font-weight: 700;
  border-left: 5px solid #f1b139;
  padding-left: 1rem;
}
.card-list {
  display: flex;
  padding: 3rem;
}

.card-list a div {
  width: 100%;
}

.card-list :not(:first-child) {
  /*margin-left: -1rem;*/
  /*background-color: red;*/
}
</style>
