<template>
  <Space
    title="今回 Vue を使ってスライドを作成"
  >
    <div class="description">
      <p>
        <a
          href="https://github.com/jiyuujin/vue-presentation-starter"
          target="_blank"
        >
          jiyuujin/vue-presentation-starter
        </a>
      </p>
      <p>
        技術スタックはWebpack4 + Vue + Vue-Router + Vuex
      </p>
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
export default class VueSlide extends Vue {
  code: string = 'root> git clone https://github.com/jiyuujin/vue-presentation-starter<br>root> yarn install && yarn run dev';
  dark: boolean = true;
}
</script>

<style scoped>
img {
  width: 50%;
}
</style>
