<template>
  <v-base>
    <v-space
      text="ご静聴ありがとうございました、良いお年をお迎えください！️️"
    >
      <div class="content">
        <div class="nuxt">
          <div class="nuxt-left">
            <img
              src="../static/nuxt.png"
              alt="nuxt"
            >
          </div>
          <p>
            にゃんこ大戦争6周年<br>発足仕立てのWeb猫ブログ<br>🎍来年もよろしくお願いします🎍
          </p>
          <div class="nuxt-right">
            <img
              src="../static/nuxt.png"
              alt="nuxt"
            >
          </div>
        </div>
        <div class="nyanko">
          <img
            src="../static/nyanko.png"
            alt="nyanko"
          >
        </div>
      </div>
    </v-space>
  </v-base>
</template>

<script>
export default {}
</script>

<style scoped>
.nuxt {
  width: 50%;
  margin: 0 auto;
}

.nuxt-left {
  text-align: left;
}

.nuxt-right {
  text-align: right;
}

.nuxt img {
  width: 25px;
}

.nyanko img {
  width: 50%;
}
</style>
