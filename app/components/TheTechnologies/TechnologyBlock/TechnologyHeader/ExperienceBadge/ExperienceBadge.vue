<script setup lang="ts">
const props = defineProps<{
  experience: string
}>()
</script>
<template>
  <span class="experience-badge" :class="props.experience.toLowerCase()">
    {{ props.experience }}
  </span>
</template>
<style scoped>
.experience-badge {
  border-radius: 4px;
  padding: 4px 8px;
  display: inline-flex;
  color: var(--background-color);
  font-size: 12px;
  font-weight: 600;
}
.experience-badge.expert {
  background-color: var(--primary-highlight);
}
.experience-badge.advanced {
  background-color: var(--secondary-highlight);
}
</style>
