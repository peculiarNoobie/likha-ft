<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style scoped>
/* Font */
@import url('https://fonts.googleapis.com/css2?family=Kanit:wght@200;300;400;500;600;700&display=swap');
@import url('https://fonts.googleapis.com/css?family=Abril+Fatface&display=swap');

#app {
  font-family: 'Kanit', Avenir, Helvetica, sans-serif;
  
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

body {
  margin: 0px;
}

a {
  text-decoration: none;
}
</style>