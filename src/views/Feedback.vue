<template>
  <Space
    title="2018年(個人的)振り返り"
  >
    <ul>
      <li>
        Laravelでアトミック性の向上！
      </li>
      <li class="sub">
        Vuex導入、dataでインスタンス化する必要が無くスリム化向上！
      </li>
      <li>
        Oauth2を使ってマスタデータ管理の効率化！
      </li>
      <li class="sub">
        管理画面で操作した情報がRedis、Web上のスプレッドシート同時に反映。
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
export default class Feedback extends Vue {}
</script>

<style scoped>

</style>
