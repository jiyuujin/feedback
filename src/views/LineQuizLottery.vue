<template>
  <Space
    title="抽選には外れた。。"
  >
    <div class="description">
      <p>
        どのくらいの確率か聞いてません
      </p>
      <img
        src="../static/line_quiz_lottery.png"
        alt="line_quiz_lottery"
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
export default class LineQuizLottery extends Vue {}
</script>

<style scoped>
img {
  width: 250px;
}
</style>
