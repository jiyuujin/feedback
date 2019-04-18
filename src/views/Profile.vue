<template>
  <Space
    title="Web猫"
  >
    <div class="parent">
      <img
        src="../static/bakeneko.png"
        alt="bakeneko"
      >
      <div class="detail">
        Webエンジニア。2018年10月より運営の当ブログを始め、Vue.jsやNuxtを使ったフロントエンドを中心に設計・開発しています。
        <p>
          毎回ブログ枠の有無に関わらずイベントの振り返り記事を書いています:
          <span>
            <a
              href="https://webneko.info/"
              target="_blank"
            >
              Web猫ブログ
            </a>
          </span>
        </p>
      </div>
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
export default class Profile extends Vue {}
</script>

<style scoped>
.parent img {
  float: left;
  width: 10%;
  padding-left: 15%;
  padding-right: 5%;
}

.detail {
  text-align: left;
  overflow: hidden;
  border: 1px dashed #ccc;
  width: 60%;
  font-size: 6vmin;
}
</style>
