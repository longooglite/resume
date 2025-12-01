<script setup lang="ts">
import { useResumeData } from '@/composables/useResumeData'
import { technologySymbol } from '@/symbols'
import { RatedSkill } from '@/types'
import { experienceContainsTechnology } from '@/utils/experienceContainsTech'
import { inject, computed, ref } from 'vue'
import { PhCaretDown, PhCaretUp } from 'phosphor-vue'

const technology = inject<RatedSkill>(technologySymbol)

const { experiences } = useResumeData()
const experienceCompanies = computed(() => {
  return experiences.value
    .filter((exp) => experienceContainsTechnology(exp, technology.name))
    .map((experience) => experience.company)
    .join(', ')
})
const expanded = ref(false)
const toggleExpanded = () => {
  expanded.value = !expanded.value
}
</script>
<template>
  <h4 @click="toggleExpanded">
    Details
    <PhCaretDown v-if="expanded" />
    <PhCaretUp v-else />
  </h4>
  <div class="technology-details" v-show="expanded">
    <p class="technology-years">{{ technology.years }} years experience</p>
    <p class="technology-last-used">Last used: {{ technology.last_used }}</p>
    <p class="technology-experience">{{ experienceCompanies }}</p>
  </div>
</template>
<style scoped>
h4 {
  cursor: pointer;
  margin: 0;
  padding: 0;
  font-size: 16px;
  font-weight: 600;
  user-select: none;
  display: flex;
  align-items: center;
  gap: 10px;
}
</style>
