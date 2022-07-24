<template>
  <div class="input-date">
    <input
      type="date"
      class="w-full bg-sec-1 p-2 rounded-lg text-white font-bold"
      value="1998-01-01"
      @input="$emit('input', $event.target.value)"
    />
  </div>
</template>

<script>
export default {
  name: "InputDate",
  props: {},
};
</script>

<style scoped>
</style>
