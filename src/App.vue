<template>
  <div id="app">
    <header-bar></header-bar>

    <router-view/>
  </div>
</template>

<script>
import HeaderBar from '@/components/HeaderBar'

export default {
  name: 'app',

  components: {
    HeaderBar,
  },
}
</script>

<style>
@import 'normalize.css';

:root {
  --color-black: #292929;
}

html, body {
  padding: 0;
  margin: 0;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: var(--color-black);
}

#app {
  padding: 0 20px;
  max-width: 900px;
  margin: 0 auto;
}

a {
  text-decoration: none;
  color: var(--color-black);
}
</style>
