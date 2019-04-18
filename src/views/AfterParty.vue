<template>
  <Space
    title="お楽しみ！アフターパーティー"
  >
    <div class="description">
      <img
        src="../static/after_party.png"
        alt="after_party"
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
export default class AfterParty extends Vue {}
</script>

<style scoped>
img {
  width: 60%;
}
</style>
