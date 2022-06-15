<template>
  <div>
    <Header/>
    <router-view></router-view>
    <div class="button-container w-full flex justify-center mb-10 ">

    <button class="submit-btn mx-auto "><span class="hover-span"><fas icon="fa-solid fa-right-long"></fas></span><span class="default-text">Submit Answers!</span></button>
    </div>
  </div>
</template>

<script>
import Header from "../components/Header";
export default {
  name: 'TakeTest',
  props: {
  },
  components:{
    Header
  }
}
</script>

<style scoped>
.submit-btn{
  @apply px-4 py-2 border rounded-3xl text-base
  border-sec-2 text-sec-2
  ;
  min-width: 150px;
  font-weight: normal;
  transition: all .3s ease;
}
.submit-btn:hover{
  background-color: #f1b139;
  color: black;
  transition: all .3s ease-out;

}
.submit-btn:hover .default-text{
  display: none;
}
.submit-btn:hover .hover-span{
  display: inline;
}
.hover-span{
  display: none;
}
</style>
