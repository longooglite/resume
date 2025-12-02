<script setup lang="ts">
import { computed } from 'vue'
import { useResumeData } from '@/composables/useResumeData'
import { experienceContainsTechnology } from '@/utils/experienceContainsTech'
import { skillLevelToString } from '@/utils/skillLevelToString'
import TechnologyBlock from './TechnologyBlock/TechnologyBlock.vue'
const { technicalSkills, experiences } = useResumeData()
const props = defineProps<{
  loaded: boolean
}>()
const sortedTechnicalSkills = computed(() => {
  return [...technicalSkills.value]
    .filter((skill) => skill.level > 5)
    .sort((a, b) => b.level - a.level)
    .map((skill) => {
      const skillLevelText = skillLevelToString(skill.level)
      const experience = experiences.value
        .filter((exp) => experienceContainsTechnology(exp, skill.name))
        .map((experience) => experience.company)
        .join(', ')
      return {
        ...skill,
        skillLevelText,
        experience,
      }
    })
})
</script>
<template>
  <div class="the-technologies" v-show="props.loaded">
    <h2>Technologies</h2>
    <div class="technologies-list">
      <TechnologyBlock
        v-for="skill in sortedTechnicalSkills"
        :key="skill.name"
        :technology="skill"
      />
    </div>
  </div>
</template>
<style scoped>
.the-technologies {
  display: flex;
  width: 100%;
  max-width: var(--app-max-width);
  margin: 0 auto;
  flex-direction: column;
}
.technologies-list {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: flex-start;
  align-content: flex-start;
  width: 100%;
}
</style>
