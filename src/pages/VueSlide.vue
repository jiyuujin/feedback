<template>
  <v-space
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
  </v-space>
</template>

<script>
const codeText = 'root> git clone https://github.com/jiyuujin/vue-presentation-starter<br>root> yarn install && yarn run dev'
export default {
  data () {
    return {
      code: codeText,
      dark: true
    }
  }
}
</script>

<style scoped>
img {
  width: 50%;
}
</style>
