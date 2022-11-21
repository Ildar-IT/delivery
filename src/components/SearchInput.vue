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
  padding: 5px 10px;
  border-radius: 10px;
  background: transparent;
  font-size: 13px;
  color: #140e14;
  border: 2px solid rgba(0,0,0,0.2);
  opacity: 0.9;
  transition: 0.2s ease-in-out;
}


.find-input > input::placeholder {
  color: #b3b8cb;
}
.find-input > input:focus-visible {
  border: 2px solid #c09c5e;
}
.find-input > input:hover {
  border: 2px solid #c09c5e;
}

@media (min-width: 960px) {
  .find-input > input {
    padding: 7px 15px;
    font-size: 15px;
  }

}
</style>
