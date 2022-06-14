<template>
  <div class="card-container">
    <div class="card">
        <div class="text-2xl font-black text-sec-2">{{ testName }}</div>
        <div class="text-white mt-5 text-lg">{{ testDescription }}</div>
        <h2 class="mt-5 text-white">Number of Questions:{{ numOfQuestions }}</h2>
        <h2 class="text-white">used Algorithms :{{ algorithms }}</h2>

    </div>
  </div>
</template>

<script>
export default {
  name: 'CardTest',
  props: {
    testName: String,
    testDescription: String,
    numOfQuestions: Number,
    algorithms: String,

  }
}
</script>

<style scoped>
.card {
  position: relative;
  flex-direction: column;
  height: 350px;
  width: 100%;
  min-width: 100px;
  padding: .5rem 1.5rem .5rem 1rem;
  border-radius: 1rem;
  background: rgb(44, 62, 80);
  box-shadow: -1rem 0 3rem black;
  transition: 0.2s;
}

.card:hover {
  transform: translateY(-1rem);
}



</style>
