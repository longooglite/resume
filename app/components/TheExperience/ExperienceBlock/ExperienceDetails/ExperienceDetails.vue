<script setup lang="ts">
import { computed, inject, ref } from 'vue'
import { currentExperienceSymbol } from '@/symbols'
import { WorkExperience } from '@/types'
import { PhCaretDown, PhCaretUp } from 'phosphor-vue'

const currentExperience = inject<WorkExperience>(
  currentExperienceSymbol,
) as WorkExperience
const expanded = ref(false)
const toggleExpanded = () => {
  expanded.value = !expanded.value
}
const hasResponsibilities = computed(
  () => (currentExperience?.responsibilities?.length ?? 0) > 0,
)
const hasAchievements = computed(
  () => (currentExperience?.achievements?.length ?? 0) > 0,
)
const hasTechStack = computed(
  () => (currentExperience?.tech_stack?.length ?? 0) > 0,
)
const hasLeadership = computed(
  () => (currentExperience?.leadership?.length ?? 0) > 0,
)
</script>
<template>
  <div class="experience-details">
    <h4 @click="toggleExpanded">
      Details
      <PhCaretDown v-if="expanded" />
      <PhCaretUp v-else />
    </h4>
    <div
      class="experience-details-responsibilities"
      v-show="expanded && hasResponsibilities"
      @click="toggleExpanded"
    >
      <h5>Responsibilities</h5>
      <ul>
        <li
          v-for="responsibility in currentExperience.responsibilities"
          :key="responsibility"
        >
          {{ responsibility }}
        </li>
      </ul>
    </div>
    <div
      class="experience-details-achievements"
      v-show="expanded && hasAchievements"
    >
      <h5>Achievements</h5>
      <ul>
        <li
          v-for="achievement in currentExperience.achievements"
          :key="achievement"
        >
          {{ achievement }}
        </li>
      </ul>
    </div>
    <div
      class="experience-details-tech-stack"
      v-show="expanded && hasTechStack"
    >
      <h5>Tech Stack</h5>
      <ul>
        <li v-for="tech in currentExperience.tech_stack" :key="tech">
          {{ tech }}
        </li>
      </ul>
    </div>
    <div
      class="experience-details-leadership"
      v-show="expanded && hasLeadership"
    >
      <h5>Leadership</h5>
      <ul>
        <li
          v-for="leadership in currentExperience.leadership"
          :key="leadership"
        >
          {{ leadership }}
        </li>
      </ul>
    </div>
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
