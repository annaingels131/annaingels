<template>
  <div id="app">
      <home />
    <router-view/>
  </div>
</template>

<style lang="scss">

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  line-height: normal !important;
}

#fp-nav {
  margin-top: -157px !important;
}

#fp-nav ul li a span, .fp-slidesNav ul li a span {
  border: 2px solid #fff;
  border-radius: 24% !important;
  background-color: transparent;
}
</style>
