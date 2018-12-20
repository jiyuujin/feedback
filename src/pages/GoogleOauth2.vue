<template>
  <v-base>
    <v-space
      text="該当シートの共有にチェックを付けること"
    >
      <div class="specify">
        <p>
          google/apiclient
        </p>
        <p>
          asimlqt/php-google-spreadsheet-client
        </p>
      </div>
      <ul>
        <li>
          基本はapp/controllers/SpreadsheetController.phpでAPIを呼び出すこと。
        </li>
        <li class="sub">
          public下にoauth2callback.phpの設定を忘れずに。
        </li>
        <li>
          Cross-Origin対策も必要。
        </li>
        <li class="sub">
          barryvdh/laravel-corsをインストールして対応。
        </li>
      </ul>
    </v-space>
  </v-base>
</template>

<script>
export default {}
</script>

<style scoped>

</style>
