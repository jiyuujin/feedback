<template>
  <Space>
    <div class="description">
      <img
        src="../static/line_quiz_2.png"
        alt="line_quiz_2"
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
export default class LineQuiz2 extends Vue {}
</script>

<style scoped>
img {
  width: 300px;
}
</style>
