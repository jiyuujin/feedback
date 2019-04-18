<template>
  <Space>
    <div class="description">
      <img
        src="../static/line_quiz_1.png"
        alt="line_quiz_1"
      >
    </div>
  </Space>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import Space from '../components/Space.vue'

@Component({
  components: {
    Space
  }
})
export default class LineQuiz1 extends Vue {}
</script>

<style scoped>
img {
  width: 300px;
}
</style>
