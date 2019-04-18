<template>
  <Space
    title="次回の v-kansai #2 は"
  >
    <div class="description specify">
      <p class="old">
        来年2月下旬〜3月上旬に開催予定(希望)
      </p>
      <p class="emphasis">
        <a
          href="https://vuekansai.connpass.com/event/112900/"
          target="_blank"
        >
          来月19日開催決定
        </a>
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
export default class NextMeetup extends Vue {}
</script>

<style scoped>

</style>
