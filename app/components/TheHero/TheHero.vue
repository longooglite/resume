<script setup lang="ts">
import { useResumeData } from '@/composables/useResumeData'
import { computed } from 'vue'
import TheSummary from '@/components/TheSummary/TheSummary.vue'

const resumeData = useResumeData()
const { basics } = resumeData.resume.value
const links = computed(() => {
  return Object.entries(basics?.links ?? {}).filter(([_, link]) =>
    Boolean(link),
  )
})
const telHref = computed(() => {
  return `tel:${basics.phone?.replace(/[^0-9]/g, '')}`
})
</script>
<template>
  <div class="the-hero">
    <h1>{{ basics.name }}</h1>
    <div class="contact-info">
      <a :href="telHref">{{ basics.phone }}</a>
      <a :href="`mailto:${basics.email}`">{{ basics.email }}</a>
      <a
        v-for="[linkKey, link] in links"
        :key="linkKey"
        :href="link as string"
        target="_blank"
        class="contact-info-link"
      >
        {{ linkKey }}
      </a>
    </div>
    <TheSummary />
  </div>
</template>
<style scoped>
.the-hero {
  width: 100%;
  max-width: var(--app-max-width);
  margin: 0 auto;
}
.the-hero h1 {
  font-size: 8rem;
  font-weight: 600;
  text-align: center;
  margin-bottom: 10px;
  font-family:
    'IBM Plex Mono', ui-monospace, SFMono-Regular, Menlo, Monaco,
    'Liberation Mono', 'Courier New', monospace;
  padding-left: 10px;
}
.contact-info {
  display: flex;
  flex-direction: row;
  gap: 10px;
  padding-left: 10px;
  justify-content: center;
}
.contact-info a {
  font-size: 0.8rem;
  margin-bottom: 10px;
  color: var(--text-color);
}
.contact-info-link {
  text-transform: capitalize;
}
</style>
