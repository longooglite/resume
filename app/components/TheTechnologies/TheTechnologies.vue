<script setup lang="ts">
import { computed } from 'vue'
import { useResumeData } from '@/composables/useResumeData'
import { experienceContainsTechnology } from '@/utils/experienceContainsTech'
import { skillLevelToString } from '@/utils/skillLevelToString'

const { technicalSkills, experiences } = useResumeData()
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
  <div class="the-technologies">
    <h2>Technologies</h2>
    <div class="technologies-list">
      <div
        class="technology"
        v-for="skill in sortedTechnicalSkills"
        :key="skill.name"
      >
        <h3 class="technology-name">
          {{ skill.name }} -
          <span class="technology-level">{{ skill.skillLevelText }}</span>
        </h3>
        <p class="technology-years">{{ skill.years }} years experience</p>
        <p class="technology-last-used">Last used: {{ skill.last_used }}</p>
        <p class="technology-experience">{{ skill.experience }}</p>
      </div>
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
.technology {
  display: flex;
  flex-direction: column;
  width: calc(50% - 22px);
  border-bottom: 1px solid var(--border-color);
  border-left: 1px solid var(--border-color);
  padding-left: 10px;
  padding-bottom: 10px;
  margin-right: 10px;
  margin-bottom: 10px;
}
</style>
