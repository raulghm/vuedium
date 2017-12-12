<template>
  <div id="app">

    <div class="App">
      <div class="App-content">
        <header-bar></header-bar>

        <transition name="fade" mode="out-in">
          <router-view class="App-view"></router-view>
        </transition>
      </div>
    </div>
  </div>
</template>

<script>
import HeaderBar from '@/components/ui/HeaderBar'

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

.App-content {
  padding: 0 20px;
  max-width: 900px;
  margin: 0 auto;
}

.App-view {
  position: relative;
}

a {
  text-decoration: none;
  color: var(--color-black);
}

.is-disabled {
  opacity: .6;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity .5s .2s ease;
  opacity: 1;
}

.fade-enter,
.fade-leave-active {
  opacity: 0;
}
</style>
