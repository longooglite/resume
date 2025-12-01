<script setup lang="ts">
import { provide } from 'vue'
import { WorkExperience } from '@/types'
import ExperienceHeader from './ExperienceHeader/ExperienceHeader.vue'
import { currentExperienceSymbol } from '@/symbols'
import ExperienceDetails from './ExperienceDetails/ExperienceDetails.vue'

const props = defineProps<{
  experience: WorkExperience
}>()

provide(currentExperienceSymbol, props.experience)
</script>
<template>
  <div class="experience-block">
    <ExperienceHeader />
    <ExperienceDetails />
  </div>
</template>
<style scoped>
.experience-block {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: calc(50% - 22px);
  border-bottom: 1px solid var(--border-color);
  border-left: 1px solid var(--border-color);
  margin-right: 10px;
  margin-bottom: 10px;
  padding-left: 10px;
  padding-bottom: 10px;
  transition: height 0.1s ease-in-out;
}
@media (max-width: 640px) {
  .experience-block {
    width: 100%;
    border-left: none;
    border-bottom: none;
    margin-bottom: 0;
  }
}
</style>
