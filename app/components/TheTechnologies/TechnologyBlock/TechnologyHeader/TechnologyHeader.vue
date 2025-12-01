<script setup lang="ts">
import { technologySymbol } from '@/symbols'
import { RatedSkill } from '@/types'
import { skillLevelToString } from '@/utils/skillLevelToString'
import { computed, inject } from 'vue'
import ExperienceBadge from './ExperienceBadge/ExperienceBadge.vue'

const technology = inject<RatedSkill>(technologySymbol)

const skillLevelText = computed(() => {
  return skillLevelToString(technology.level)
})
</script>
<template>
  <h3 class="technology-name">
    {{ technology.name }} -
    <ExperienceBadge :experience="skillLevelText" />
  </h3>
</template>
