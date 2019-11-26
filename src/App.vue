<template>
  <div class="container">
    <transition name="fade">
      <router-view />
    </transition>
  </div>
</template>

<style>
@import url(https://fonts.googleapis.com/css?family=Comfortaa:400,300,700);

.container {
  font-family: 'Comfortaa', sans-serif;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity .5s
}

.fade-enter, .fade-leave-to {
  opacity: 0
}
</style>
