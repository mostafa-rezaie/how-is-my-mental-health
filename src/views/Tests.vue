<template>
  <div>
    <Header/>
    <div class="tests-text">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad aliquam amet blanditiis consequatur culpa cum dolor
      doloribus, eaque exercitationem fuga illo, labore laboriosam laudantium libero magnam molestias mollitia nam
      necessitatibus nostrum obcaecati omnis perspiciatis praesentium quae quam qui quidem quisquam quod reiciendis
      repellat similique te
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias amet aperiam aspernatur at beatae consequuntur
      dicta maiores nesciunt quisquam unde.
    </div>
    <div class="card-list">
      <CardTest test-name="GHQ"
                test-description="
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias amet
                aperiam aspernatur abeatae consequuntur dicta maiores nesciunt quisquam unde."
                num-of-questions=" 90"
                algorithms=" SVM, Machine learning"

      />
      <CardTest test-name="CHARACTER STRENGTHS"
                test-description="
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias amet
                aperiam aspernatur abeatae consequuntur dicta maiores nesciunt quisquam unde."
                num-of-questions=" 90"
                algorithms=" SVM, Machine learning"

      />
      <CardTest test-name="HUMOR STYLES"
                test-description="
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias amet
                aperiam aspernatur abeatae consequuntur dicta maiores nesciunt quisquam unde."
                num-of-questions=" 90"
                algorithms=" SVM, Machine learning"

      />
      <CardTest test-name="BIG FIVE PERSONALITY"
                test-description="
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias amet
                aperiam aspernatur abeatae consequuntur dicta maiores nesciunt quisquam unde."
                num-of-questions=" 90"
                algorithms=" SVM, Machine learning"

      />

    </div>
  </div>
</template>

<script>
import Header from "../components/Header";
import CardTest from "../components/CardTests";

export default {
  name: 'Tests',
  props: {},
  components: {
    Header,
    CardTest,
  }
}
</script>

<style scoped>
.tests-text {
  width: 80%;
  color: white;
  font-size: 1.2rem;
  margin: 2rem auto 0 auto;
}

.card-list {
  display: flex;
  padding: 3rem;
}

.card-list div {
  width: 25%;
}

.card-list :not(:first-child) {
  /*margin-left: -1rem;*/
  /*background-color: red;*/
}
</style>
