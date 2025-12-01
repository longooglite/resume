<script setup lang="ts">
import { ref } from 'vue'

const props = defineProps<{
  x: number
  width: number
  color: string
  label: string
}>()

const isHovered = ref(false)
</script>
<template>
  <rect
      class="timeline-segment"
      height="16"
      y="0"
      :x="props.x"
      :width="props.width"
      :fill="props.color"
    />
</template>
<style scoped>
</style>