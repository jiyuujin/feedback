<template>
  <Space>
    <div class="description">
      <img
        src="../static/line_quiz_4.png"
        alt="line_quiz_4"
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
export default class LineQuiz4 extends Vue {}
</script>

<style scoped>
img {
  width: 300px;
}
</style>
