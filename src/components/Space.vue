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

<script>
export default {
  props: {
    title: {
      type: String,
      default: ''
    }
  }
}
</script>

<style scoped>

</style>
