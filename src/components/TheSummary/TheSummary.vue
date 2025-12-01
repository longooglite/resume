<script setup lang="ts">
import { useResumeData } from '../../composables/useResumeData'

const resumeData = useResumeData()
const { professional_summary } = resumeData.resume.value
</script>
<template>
    <div class="the-summary">
        <h2>Summary</h2>
        <p>{{ professional_summary }}</p>
    </div>
</template>
<style scoped>
.the-summary {
    width: 100%;
    max-width: var(--app-max-width);
    margin: 0 auto;
}
</style>