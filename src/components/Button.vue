<template>
  <div class="next">
    <!--
    <a
      href="#"
      @click="next"
    >
      <img
        src="../static/next.png"
        alt="next"
      >
    </a>
    -->
  </div>
</template>

<script>
export default {
  methods: {
    next () {
      const pages = this.$store.state.pages
      this.$store.dispatch('onNext', { pages })
    }
  }
}
</script>

<style scoped>
.next {
  position: fixed;
  bottom: 5%;
  right: 5%;
  text-align: right;
}

a {
  z-index: 3;
}

img {
  width: 75px;
}
</style>
