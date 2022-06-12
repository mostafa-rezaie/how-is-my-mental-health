<template>
  <div class="username-input ">
    <input type="text" :name="inputName" :placeholder="placeHolder"
           class="username-input w-full bg-sec-1 p-2 rounded-lg text-white font-bold">
  </div>

</template>

<script>
export default {
  name: 'UserInput',
  props: {
    inputName: String,
    placeHolder: String,
  }
}
</script>

<style scoped>
input:focus {
  outline: 2px solid #f1b139;
}

</style>
