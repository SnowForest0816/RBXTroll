<template>
  <div class="App">
    <Header />
    <Homepage />
  </div>
</template>

<script>
import Header from './components/Header.vue';
import Homepage from './components/Homepage.vue';

export default {
  name: 'App',
  components: {
    Header,
    Homepage,
  }
}
</script>

<style>
  .App {
    font-family: 'Inter', sans-serif;
  }
</style>