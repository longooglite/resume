<script setup lang="ts">
import { inject } from 'vue'
import { currentExperienceSymbol } from '@/symbols'
import { WorkExperience } from '@/types'

const currentExperience = inject<WorkExperience>(
  currentExperienceSymbol,
) as WorkExperience
</script>
<template>
  <p class="experience-subtitle">
    {{ currentExperience.location }} | {{ currentExperience.start_date }} to
    {{ currentExperience.end_date }}
  </p>
</template>
