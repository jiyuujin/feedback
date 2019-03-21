<template>
  <div class="container">
    <transition name="fade">
      <router-view />
    </transition>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
.container {
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity .5s
}

.fade-enter, .fade-leave-to {
  opacity: 0
}
</style>
