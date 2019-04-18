<template>
  <Space
    title="Vue Fes 2018と振り返り"
  >
    <div class="description">
      <p>
        Web猫 / jiyuujin
      </p>
      <a
        href="https://github.com/jiyuujin"
        target="_blank"
      >
        Github
      </a>
      <a
        href="https://twitter.com/jiyuujinlab"
        target="_blank"
      >
        Twitter
      </a>
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
export default class Landing extends Vue {}
</script>

<style scoped>

</style>
