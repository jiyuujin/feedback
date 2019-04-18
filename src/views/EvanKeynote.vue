<template>
  <Space
    title="Evan's Keynoteで印象に残ったこと"
  >
    <ul>
      <li>
        <span class="tag">
          All
        </span>
        Vue3.0とNuxt3.0、いずれももうすぐ！！
      </li>
      <li>
        <span class="tag">
          React
        </span>
        Vue HooksとTime Slicing、実験中
      </li>
      <li class="sub">
        同じイベントを発火した場合、2回目以降スキップ描画できるようになる
      </li>
      <li>
        <span class="tag">
          TypeScript
        </span>
        TS/TSXサポート標準化
      </li>
      <li class="sub">
        nuxt-community/typescript-templateのメンテは?
      </li>
    </ul>
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
export default class EvanKeynote extends Vue {}
</script>

<style scoped>

</style>
