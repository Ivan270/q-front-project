<script setup lang="ts">
import Image from 'primevue/image';
import { defineProps } from 'vue';
    // props

    // Reactive Values

const props = defineProps({
    src: {
        type: String,
    },
    alt: {
        type: String,
    },
    width: {
        type: Number
    },
    heigth: {
        type: Number
    }
})
    // Computed Properties

    // Watchers

    // Lifecycle hooks

</script>

<template>
    <Image :width="props.width" :src="props.src" :alt="props.alt" :height="props.heigth"/>
</template>

<style scoped>
    
</style>