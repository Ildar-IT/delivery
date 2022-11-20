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

  font-weight: 300;
  font-style: normal;
  font-size: 14px;
  line-height: 150%;
  padding: 0;
  margin: 0;

}

/* Работает в Chrome, Edge и Safari */
*::-webkit-scrollbar {
  width: 5px;
}

*::-webkit-scrollbar-track {
  background: #6B676734;
}

*::-webkit-scrollbar-thumb {
  background-color: #6b6767;
  border-radius: 20px;
  border: 3px solid #6B676734;
}

h1, h2, h3, h4, h5, h6 {
  margin: 0;
  padding: 0;
}

h4 {
  color: #071aa6;
}

h3, span {
  color: #067dcc;
}

button {
  font-size: 15px;
  cursor: pointer;

}

button:hover {
  opacity: 0.7;
  transition: 0.2s ease-in-out;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  overflow: hidden;
}

p {
  margin-bottom: 0;
}

.layout {
  width: 100%;
  height: 100vh;
  padding: 16px;
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
}

@media (min-width: 1280px) {
  .layout {
    max-width: 1200px;
  }
}
</style>
