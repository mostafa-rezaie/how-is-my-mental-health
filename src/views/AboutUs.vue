<template>
  <div>
    <Header/>
    <div class="container">
      <div class="text-container">
        <div class="header">What <span>we</span> do</div>
        <div class="vertical-line"></div>
        <div class="desc">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam, asperiores consequatur
          debitis dignissimos eaque enim est eum ex impedit incidunt ipsa labore nostrum obcaecati porro quae quibusdam
          sed veritatis? Aliquam amet commodi deleniti enim esse, incidunt, inventore iste iusto molestias nostrum odio
          possimus quae totam vel velit. Adipisci amet aperiam enim error facere incidunt inventore minima modi nesciunt
          possimus quibusdam, tempore ullam veniam voluptates voluptatum! Accusantium ad adipisci alias debitis
          dignissimos ducimus, excepturi facere fugiat ipsa ipsum iste, minus natus quis rerum sint temporibus velit!
          Assumenda earum possimus repellat tempore.
        </div>
      </div>
      <div class="cards-container">
        <div class="row">
          <Card logo-class="fa-solid fa-brain" card-text="ML & AI algorithm"/>
          <Card logo-class="fa-solid fa-user-clock" card-text="save time"/>
        </div>
        <div class="row">

          <Card logo-class="fa-solid fa-check" card-text="standard tests"/>
          <Card logo-class="fa-solid fa-handshake" card-text="project contribution"/>
        </div>
        <div class="row">
          <Card logo-class="fa-solid fa-lock" card-text="information security"/>
          <Card logo-class="fa-solid fa-piggy-bank" card-text="save money"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Card from '../components/Card'
import Header from '../components/Header'

export default {
  name: 'AboutUs',
  props: {},
  components: {
    Card,
    Header,
  }
}
</script>

<style scoped>
.container {
  width: 90%;
  display: flex;
  margin: 4rem auto 0 auto;
  min-height: 100px;
  align-items: flex-start;
}
.text-container{
  position: relative;
}
.header{
  text-transform: uppercase;
  color: white;
  font-size: 3rem;
  font-weight: 900;
}
.header span{
  color: #f1b139;
}
.desc{
  color: white;
  margin-left: 2rem;
}
.vertical-line{
  border: 3px #f1b139 solid;
  min-height: 200px;
  width: 0;
  position: absolute;
  left: .4rem;
  top: 5rem;
}
.text-container, .cards-container {
  width: 50%;
  margin: 0 auto;
}

.cards-container {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.row {
  display: flex;
  width: 100%;
  justify-content: center;
  margin-bottom: .4rem;
  color: #f1b139;
  text-transform: uppercase;
  font-size: .75rem;
  font-weight: bolder;
}
.row div{
  margin-right: .2rem;
  margin-left: .2rem;
  background-color: rgba(77, 86, 110, 0.39);
  box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.35);
  border: 1px black solid;
  border-radius: 10px;
}
</style>
