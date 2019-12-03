<template>
  <div class="container">
    <transition name="fade">
      <router-view />
    </transition>
    <div class="operation">
      <a @click="prev">
        <atoms-svg name="chevron-left" style="margin: 20px" />
      </a>
      <a @click="next">
        <atoms-svg name="chevron-right" style="margin: 20px;" />
      </a>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import routes from '@/router'

const AtomsSvg = () => import('@/components/AtomsSvg.vue')

export default Vue.extend({
    components: {
        AtomsSvg
    },
    methods: {
        prev() {
            this.$store.dispatch('onLast')
        },
        next() {
            this.$store.dispatch('onNext', { routes })
        }
    }
})
</script>

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

.operation {
  position: absolute;
  bottom: 4%;
  right: 4%;
}
</style>
