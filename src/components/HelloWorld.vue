<template>
  <input type="text" @input="$emit('input',$event.target.value)">
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
  }
}
</script>

<style scoped>
</style>
