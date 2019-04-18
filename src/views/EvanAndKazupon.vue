<template>
  <Space
    title="Mr. EVAN と Mr. KAZUPON"
  >
    <div class="description">
      <img
        src="../static/kazupon_kanpai.png"
        alt="kazupon_kanpai"
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
export default class EvanAndKazupon extends Vue {}
</script>

<style scoped>
img {
  width: 60%;
}
</style>
