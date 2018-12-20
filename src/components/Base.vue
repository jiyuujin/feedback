<template>
  <div class="top">
    <slot />
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
.top {
  margin: 0 auto;
  width: 75%;
  position: relative;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}

@media screen and (max-width: 750px) {
  .top {
    transform: scale(0.6);
  }
}
</style>
