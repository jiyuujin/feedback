<template>
  <div class="container">
    <transition name="fade">
      <router-view />
    </transition>
    <Button />
  </div>
</template>

<script>
import Button from './components/Button.vue'
export default {
  components: {
    Button
  }
}
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
