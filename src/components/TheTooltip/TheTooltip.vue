<script setup lang="ts">
import { computed, onMounted, onUnmounted, ref } from 'vue'

const xPosition = ref(0)
const yPosition = ref(0)

const tooltipWidth = ref(0)
const tooltipRef = ref<HTMLDivElement | null>(null)

const mouseMoveHandler = (event: MouseEvent) => {
    tooltipWidth.value = tooltipRef.value?.clientWidth ?? 0
    xPosition.value = event.clientX
    yPosition.value = event.clientY
}

onMounted(() => {
    document.addEventListener('mousemove', mouseMoveHandler)
})
onUnmounted(() => {
    document.removeEventListener('mousemove', mouseMoveHandler)
})

const tooltipIsCloseToRightEdge = computed(() => {
  return xPosition.value + tooltipWidth.value + 20 > window.innerWidth
})

const style = computed(() => {
    if (tooltipIsCloseToRightEdge.value) {
        return {
            top: `${yPosition.value + 12}px`,
            right: `0px`
        }
    } else {
        return {
            top: `${yPosition.value + 12}px`,
            left: `${xPosition.value + 12}px`
        }
    }
})
</script>
<template>
    <Teleport to="body">
        <div class="the-tooltip" :style="style" ref="tooltipRef">
            <slot>
            </slot>
        </div>
    </Teleport>
</template>
<style scoped>
.the-tooltip {
    position: fixed;
    z-index: 9999;
    pointer-events: none;
}
</style>