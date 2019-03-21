<template>
  <v-space
    title="Web猫"
  >
    <div class="parent">
      <img
        src="../static/bakeneko.png"
        alt="bakeneko"
      >
      <div class="description">
        Vueをはじめとしたフロントエンドから、PHPによるサーバサイド、Swiftを使ったiOSネイティヴアプリまで異色の経歴を武器に活動しています。
      </div>
    </div>
  </v-space>
</template>

<script>
export default {}
</script>

<style scoped>
.parent img {
  float: left;
  width: 10%;
  padding: 50px;
}

.description {
  text-align: left;
  overflow: hidden;
  border: 1px dashed #ccc;
  padding: 5px;
  margin: 0 10px;
  width: 90%;
}

.content img {
  width: 50%;
}
</style>
