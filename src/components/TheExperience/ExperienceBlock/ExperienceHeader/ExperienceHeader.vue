<script setup lang="ts">
import { inject } from 'vue'
import { currentExperienceSymbol } from '../../../../symbols'
import ExperienceSubtitle from './ExperienceSubtitle/ExperienceSubtitle.vue'
import ExperienceTitle from './ExperienceTitle/ExperienceTitle.vue'
import { WorkExperience } from '../../../../types'

</script>
<template>
    <div class="experience-header">
        <ExperienceTitle />
        <ExperienceSubtitle />
    </div>
</template>