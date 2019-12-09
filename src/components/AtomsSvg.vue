<template>
    <component
        :is="svg"
        style="width: 16px;"
    />
</template>

<script lang="ts">
import { createComponent, SetupContext } from '@vue/composition-api'

type SvgProps = {
    name: string
}

export default createComponent({
    props: {
        name: {
            type: String,
            required: true
        }
    },
    setup(props: SvgProps, ctx: SetupContext) {
        const svg = () => import(`@/assets/img/${props.name}.svg`)

        return {
            svg
        }
    }
})
</script>
