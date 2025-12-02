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
  <h4>
    <button
      @click="toggleExpanded"
      :aria-expanded="expanded"
      aria-controls="technology-details"
    >
      Details
      <PhCaretDown v-if="expanded" aria-hidden="true" />
      <PhCaretUp v-else aria-hidden="true" />
    </button>
  </h4>
  <div class="technology-details" v-show="expanded" id="technology-details">
    <p class="technology-years">{{ technology.years }} years experience</p>
    <p class="technology-last-used">Last used: {{ technology.last_used }}</p>
    <p class="technology-experience">{{ experienceCompanies }}</p>
  </div>
</template>
<style scoped>
h4 {
  margin: 0;
  padding: 0;
  font-size: 16px;
  font-weight: 600;
}
h4 > button {
  background: transparent;
  border: none;
  padding: 0;
  margin: 0;
  cursor: pointer;
  color: var(--text-color);
  display: inline-flex;
  align-items: center;
  gap: 10px;
  font: inherit;
}
</style>
