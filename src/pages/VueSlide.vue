<template>
  <v-base>
    <v-space
      text="ちなみに今回Vueを使ってスライドを作成しました"
    >
      <div class="content">
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
        <v-code
          :data="code"
          :dark="dark"
        />
      </div>
    </v-space>
  </v-base>
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
