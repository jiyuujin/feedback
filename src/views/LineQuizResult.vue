<template>
  <Space
    title="結果発表！"
  >
    <div class="description">
      <p>
        皆さんは正解しましたか?
      </p>
      <img
        src="../static/line_quiz_1_answer.png"
        alt="line_quiz_1_answer"
      >
      <img
        src="../static/line_quiz_2_answer.png"
        alt="line_quiz_2_answer"
      >
      <img
        src="../static/line_quiz_2_answer.png"
        alt="line_quiz_3_answer"
      >
      <img
        src="../static/line_quiz_4_answer.png"
        alt="line_quiz_4_answer"
      >
      <img
        src="../static/line_quiz_5_answer.png"
        alt="line_quiz_5_answer"
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
export default class LineQuizResult extends Vue {}
</script>

<style scoped>
img {
  width: 150px;
  margin: 4px;
}
</style>
