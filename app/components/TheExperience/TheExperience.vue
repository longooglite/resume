<script setup lang="ts">
import ExperienceBlock from '@/components/TheExperience/ExperienceBlock/ExperienceBlock.vue'
import { useResumeData } from '@/composables/useResumeData'
import { MAX_APP_WIDTH } from '@/utils/styles'
const { experiencesSorted } = useResumeData()
const props = defineProps<{
  loaded: boolean
}>()
</script>
<template>
  <div class="the-experience" v-show="props.loaded">
    <h2>Experience</h2>
    <div class="experience-blocks" :style="{ maxWidth: `${MAX_APP_WIDTH}px` }">
      <ExperienceBlock
        v-for="exp in experiencesSorted"
        :key="exp.company + exp.start_date"
        :experience="exp"
      />
    </div>
  </div>
</template>
<style scoped>
.the-experience {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  align-content: flex-start;
  width: 100%;
  max-width: var(--app-max-width);
  margin: 0 auto;
}

.experience-blocks {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
  margin: 0 auto;
}
</style>
