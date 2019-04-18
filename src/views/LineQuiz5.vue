<template>
  <Space>
    <div class="description">
      <img
        src="../static/line_quiz_5.png"
        alt="line_quiz_5"
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
export default class LineQuiz5 extends Vue {}
</script>

<style scoped>
img {
  width: 300px;
}
</style>
