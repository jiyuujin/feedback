<template>
  <video
    autoplay
    loop
    muted
    controls
    width="60%"
  >
    <source
      :src="videoName"
      :type="getVideoType(videoName)"
    >
  </video>
</template>

<script>
export default {
  props: {
    videoName: {
      type: String,
      required: true
    }
  },
  methods: {
    getVideoType (name) {
      switch (name.split('.')[1]) {
        case 'webm':
          return 'video/webm'
        case 'mp4':
          return 'video/mp4'
        default:
          return 'video/webm'
      }
    }
  }
}
</script>

<style scoped>

</style>
