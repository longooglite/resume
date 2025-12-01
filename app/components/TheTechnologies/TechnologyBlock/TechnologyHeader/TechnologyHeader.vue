<script setup lang="ts">
import { technologySymbol } from '@/symbols'
import { RatedSkill } from '@/types'
import { skillLevelToString } from '@/utils/skillLevelToString'
import { computed, inject } from 'vue'

const technology = inject<RatedSkill>(technologySymbol)

const skillLevelText = computed(() => {
  return skillLevelToString(technology.level)
})
</script>
<template>
  <h3 class="technology-name">
    {{ technology.name }} -
    <span class="technology-level">{{ skillLevelText }}</span>
  </h3>
</template>
