<template>
  <div>
    <the-header></the-header>
    <the-items></the-items>
  </div>
</template>

<script>

import TheHeader from './Layouts/TheHeader.vue';
import TheItems from './components/TheItems.vue';

export default {
  name: 'App',
  components: {
    TheItems,
    TheHeader
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');

* {
  box-sizing: border-box;
}

html {
  font-family: 'Roboto', sans-serif;
}

body {
  margin: 0;
  overflow:hidden;
}
</style>
