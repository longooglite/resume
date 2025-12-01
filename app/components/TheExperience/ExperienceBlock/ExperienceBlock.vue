<script setup lang="ts">
import { computed, provide } from 'vue'
import { WorkExperience } from '@/types'
import ExperienceHeader from './ExperienceHeader/ExperienceHeader.vue'
import { currentExperienceSymbol } from '@/symbols'
import ExperienceDetails from './ExperienceDetails/ExperienceDetails.vue'
import { storeToRefs } from 'pinia'
import { useSearchStore } from '@/stores/searchStore/searchStore'

const props = defineProps<{
  experience: WorkExperience
}>()

const searchStore = useSearchStore()
const { filteredExperiences } = storeToRefs(searchStore)

const anyExperiencesSelected = computed(() => {
  return filteredExperiences.value.length > 0
})

const currentExperienceSelected = computed(() => {
  return filteredExperiences.value.some(
    (experience) => experience.company === props.experience.company,
  )
})

const isUnselected = computed(() => {
  return anyExperiencesSelected.value && !currentExperienceSelected.value
})

provide(currentExperienceSymbol, props.experience)
</script>
<template>
  <div class="experience-block" :class="{ unselected: isUnselected }">
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
.experience-block.unselected {
  opacity: 0.5;
}
</style>
