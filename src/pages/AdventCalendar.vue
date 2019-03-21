<template>
  <v-space
    title="アドベントカレンダー2018"
  >
    <div class="parent">
      <img
        src="../static/firebase.png"
        alt="firebase"
      >
      <div class="tag">
        12/08
      </div>
      <div class="description">
        <a
          href="https://webneko.info/posts/migration-to-firestore-on-advent-calendar-2018"
          target="_blank"
        >
          FIRESTOREに移行したら色々と楽になった話
        </a>
      </div>
    </div>
    <div class="parent">
      <img
        src="../static/vue.png"
        alt="bakeneko"
      >
      <div class="tag">
        12/21
      </div>
      <div class="description">
        <a
          href="https://webneko.info/posts/created-presentation-slide-by-vue-on-advent-calendar-2018"
          target="_blank"
        >
          プレゼンテーションスライドもVUEで作っちゃう話
        </a>
      </div>
    </div>
    <div class="parent">
      <img
        src="../static/nuxt.png"
        alt="bakeneko"
      >
      <div class="tag">
        12/21
      </div>
      <div class="description">
        <a
          href="https://webneko.info/posts/doing-my-best-to-atomic-design-on-advent-calendar-2018"
          target="_blank"
        >
          ATOMIC DESIGNでの技術選定の結果、そして今後
        </a>
      </div>
    </div>
    <div class="parent">
      <img
        src="../static/laravel.png"
        alt="bakeneko"
      >
      <div class="tag">
        12/25
      </div>
      <div class="description">
        <a
          href="https://webneko.info/posts/pagination-on-tables-and-validator-on-advent-calendar-2018"
          target="_blank"
        >
          LARAVELで〆、バリデーションとデータのページ管理
        </a>
      </div>
    </div>
  </v-space>
</template>

<script>
export default {}
</script>

<style scoped>
img {
  float: left;
  width: 5%;
  padding: 15px;
}

.description {
  border: 1px dashed #ccc;
  padding: 5px;
  margin: 0 10px;
  width: 85%;
  display: inline-block;
}
</style>
