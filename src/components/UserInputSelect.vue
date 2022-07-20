<template>
  <div class="select-input w-full bg-sec-1 p-2 rounded-lg text-white font-bold">
    <select name="gender" id="gender">
      <option value="M">Male</option>
      <option value="F">Female</option>
      <option value="N">Prefer Not to Say</option>
    </select>
  </div>
</template>

<script>
export default {
  name: "UserInputSelect",
  props: {},
};
</script>

<style scoped>
select option{
    @apply w-full bg-sec-1 p-2 rounded-lg text-white font-bold;
}
select{
    background-color: transparent;
    width: 100%;
}
</style>
