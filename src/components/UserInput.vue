<template>
  <div class="username-input">
    <input
      :type="inputType"
      :name="inputName"
      :placeholder="placeHolder"
      @input="$emit('input', $event.target.value)"
      class="username-input w-full bg-sec-1 p-2 rounded-lg text-white font-bold"
    />
  </div>
</template>

<script>
export default {
  name: "UserInput",
  props: {
    inputName: String,
    placeHolder: String,
    inputType: {
      type: String,
      default: "text",
    },
  },
  data() {
    return {
      inputData: "",
    };
  },
  methods: {
    sendData() {
      this.$emit("send-data");
    },
  },
};
</script>

<style scoped>
input:focus {
  outline: 2px solid #f1b139;
}
</style>
