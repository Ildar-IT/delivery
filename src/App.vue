<template>
  <div class="layout">
    <Main></Main>
  </div>
</template>

<script>
import Main from './pages/Main.vue'

export default {
  name: 'App',
  components: {
    Main
  }
}
</script>

<style>
:root {
  --vh: 1vh;
  --gray: #B3B8CB;
}
*, ::before, ::after {
  background-repeat: no-repeat;
  box-sizing: inherit;
}

html {
  overflow-y: inherit;
  overflow-x: hidden;
}

body {
  box-sizing: border-box;
  min-width: 360px;
  cursor: default;
  background-color: #f7f6f5;
  font-family: BlissPro, sans-serif;
  font-weight: 300;
  font-style: normal;
  font-size: 14px;
  line-height: 150%;
  padding: 0;
  margin: 0;
  height: 100vh;
  overflow-y: hidden;
}

/* Работает в Chrome, Edge и Safari */
*::-webkit-scrollbar {
  width: 5px;
}

*::-webkit-scrollbar-track {
  background: transparent;
}

*::-webkit-scrollbar-thumb {
  background-color: transparent;
  border: none;
}

h1, h2, h3, h4, h5, h6 {
  margin: 0;
  padding: 0;
  font-family: BlissPro, sans-serif;
}
h1, h2 {
  color: rgba(196, 156, 94, 0.95);
}

h4, h3 {
  font-size: 16px;
  color: rgba(20, 14, 20, 0.7);
}

span {
  color: #757575;
}

button {
  font-size: 15px;
  cursor: pointer;
  transition: 0.2s ease-in-out;
  opacity: 1;
}
textarea:focus, input:focus{
  outline: none;
}


p {
  margin-bottom: 0;
}

.layout {
  width: 100%;
  height: 100vh;
  padding: 0 16px;
  margin-right: auto;
  margin-left: auto;
}
@media (min-width: 960px) {
  body {
    font-size: 18px;
  }
  .layout {
    max-width: 900px;
  }
  button {
    font-size: 19px;
  }
  h4, h3 {
    font-size: 20px;

  }
}

@media (min-width: 1280px) {
  .layout {
    max-width: 1200px;
  }
}
</style>
