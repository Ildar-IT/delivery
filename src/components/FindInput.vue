<template>
  <form class="find-input">
    <input :value="modelValue" @input="updateInput" type="text" placeholder="Поиск по адресу или номеру">
  </form>
</template>

<script>
export default {
  name: "FindInput",
  props: {
    modelValue:[String, Number]
  },
  methods: {
    updateInput(event) {
      this.$emit('update:modelValue', event.target.value)
    }
  }
}
</script>

<style>
.find-input{
  width: 300px;
  min-width: 120px;
}

.find-input > input {
  width: 100%;
  border:1px solid #6b6767;
  padding: 10px 15px;
  border-radius: 10px;
}
</style>
