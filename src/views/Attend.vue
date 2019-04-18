<template>
  <Space
    title="11/3 Vue Fes Japan 2018参戦しました！"
  >
    <div class="description">
      <img
        src="../static/vue_fes_attend.png"
        alt="vue_fes_attend"
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
export default class Attend extends Vue {}
</script>

<style scoped>
img {
  width: 60%;
}
</style>
