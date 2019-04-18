<template>
  <div class="top">
    <div class="content">
      <div class="title">
        {{ title }}
      </div>
      <div>
        <slot />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class Space extends Vue {
  @Prop() private title?: string;
}
</script>

<style scoped>
</style>
