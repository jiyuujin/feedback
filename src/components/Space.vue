<template>
  <div>
    <h1
      v-if="text !== ''"
      :style="addStyle !== '' ? addStyle : ''"
    >
      {{ text }}
    </h1>
    <slot />
  </div>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      default: ''
    },
    addStyle: {
      type: String,
      default: ''
    }
  }
}
</script>

<style scoped>
h1, h2 {
  text-align: center;
}

p {
  margin-top: 1.6em;
  font-size: 1.2em;
  line-height: 1.6em;
  text-align: center;
}
</style>
