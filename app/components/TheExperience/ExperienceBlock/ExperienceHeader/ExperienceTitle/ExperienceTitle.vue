<script setup lang="ts">
import { inject } from 'vue'
import { currentExperienceSymbol } from '@/symbols'
import { WorkExperience } from '@/types'

const currentExperience = inject<WorkExperience>(
  currentExperienceSymbol,
) as WorkExperience
</script>

<template>
  <h3 class="experience-title">
    {{ currentExperience.title }} at {{ currentExperience.company }}
  </h3>
</template>
