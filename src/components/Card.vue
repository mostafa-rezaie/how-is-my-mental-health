<template>
  <div class="card-container">
    <div class="logo">
      <fas :icon="logoClass"></fas>

    </div>
    <div class="text">
      <span>{{cardText}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Card',
  props: {
    logoClass:String,
    cardText:String,
  },


}
</script>

<style scoped>
.card-container{
  width: 40%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 10rem;
}
.logo{
  font-size: 1.5rem;
  margin-bottom: .75rem;
}
</style>
