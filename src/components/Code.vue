<template>
  <div
    :style="dark ? 'color: #FFF; background-color: #001122;' : 'color: #000; background-color: #FFF;'"
    class="code-preview"
  >
    <span
      :style="dark ? 'color: #FFF; background-color: #001122;' : 'color: #000; background-color: #FFF;'"
    >
      <div class="button-a" />
      <div class="button-b" />
      <div class="button-c" />
    </span>
    <div v-html="data" />
  </div>
</template>

<script>
export default {
  props: {
    data: {
      type: String,
      required: true
    },
    dark: {
      type: Boolean,
      required: true
    }
  }
}
</script>

<style scoped>
.code-preview {
  width: 75%;
  margin: 0 auto;
  padding: 2em;
  position: relative;
  box-shadow: 0 0 5px 1px #ccc;
  text-align: left;
}
.code-preview span {
  position: absolute;
  padding: 0 .5em;
  left: 5px;
  top: 5px;
  font-weight: bold;
}
.code-preview span .button-a {
  display: inline-block;
  border-radius: 50%;
  height: 10px;
  width: 10px;
  background-color: #ff4500;
}
.code-preview span .button-b {
  display: inline-block;
  border-radius: 50%;
  height: 10px;
  width: 10px;
  background-color: #ffff00;
}
.code-preview span .button-c {
  display: inline-block;
  border-radius: 50%;
  height: 10px;
  width: 10px;
  background-color: #32cd32;
}
</style>
