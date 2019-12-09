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
import { createComponent, SetupContext } from '@vue/composition-api'
import routes from '@/router'

const AtomsSvg = () => import('@/components/AtomsSvg.vue')

export default createComponent({
    components: {
        AtomsSvg
    },
    setup(props: {}, ctx: SetupContext) {
        const prev = () => {
            ctx.root.$store.dispatch('onLast')
        }

        const next = () => {
            ctx.root.$store.dispatch('onNext', { routes })
        }

        return {
            prev,
            next
        }
    }
})
</script>
