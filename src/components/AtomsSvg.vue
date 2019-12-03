<template>
    <component
        :is="svg"
        style="width: 16px;"
    />
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
    props: {
        name: {
            type: String,
            required: true
        }
    },
    computed: {
        svg() {
            return () => import(`@/assets/img/${this.name}.svg`)
        }
    }
})
</script>
