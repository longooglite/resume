<script setup lang="ts">
import { useResumeData } from '@/composables/useResumeData'
import { computed } from 'vue'
import TheSummary from '@/components/TheSummary/TheSummary.vue'
import { useTheme } from '@/composables/useTheme'
import { PhMoonStars, PhSun } from 'phosphor-vue'
const props = defineProps<{
  loaded: boolean
}>()
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
const { toggleTheme, theme } = useTheme()
</script>
<template>
  <div class="the-hero" v-show="props.loaded">
    <h1>{{ basics.name }}</h1>
    <button @click="toggleTheme">
      <PhMoonStars v-if="theme === 'light'" />
      <PhSun v-if="theme === 'dark'" />
    </button>
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
    <TheSummary :loaded="props.loaded" />
  </div>
</template>
<style scoped>
body.dark .the-hero h1 {
  color: var(--app-light);
}
.the-hero {
  width: 100%;
  max-width: var(--app-max-width);
  margin: 0 auto;
}
.the-hero button {
  background-color: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  margin: 0;
  font-size: 2rem;
  color: var(--text-color);
  position: absolute;
  top: 10px;
  right: 10px;
  z-index: 1000;
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
@media (max-width: 640px) {
  .the-hero h1 {
    font-size: 4rem;
  }
  .contact-info {
    display: flex;
    flex-direction: column;
    gap: 10px;
    padding-left: 0;
    justify-content: flex-start;
    align-items: flex-start;
  }
}
</style>
