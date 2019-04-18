<template>
  <Space
    title="セッションだけではなかった"
  >
    <div class="description">
      <p>
        満点正解だったけど、意外と難しいw
      </p>
      <img
        src="../static/line_quiz.png"
        alt="line_quiz"
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
export default class LineQuizMain extends Vue {}
</script>

<style scoped>
img {
  width: 250px;
}
</style>
