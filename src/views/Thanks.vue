<template>
  <Space
    title="ご静聴ありがとうございました、良いお年をお迎えください！️️"
  >
    <div class="description">
      <p>
        にゃんこ大戦争6周年、発足仕立てのWeb猫ブログ
      </p>
      <p>
        🎍来年もよろしくお願いします🎍
      </p>
    </div>
  </Space>
</template>

<script lang="ts">
import { Component, Vue} from 'vue-property-decorator'
import Space from '../components/Space.vue'

@Component({
  components: {
    Space,
  },
})
export default class Thanks extends Vue {}
</script>

<style scoped>

</style>
