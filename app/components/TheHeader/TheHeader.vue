<script setup lang="ts">
import { useResumeData } from '@/composables/useResumeData'
import { computed, onMounted, onUnmounted, ref } from 'vue'

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
const isScrolled = ref(false)
const setScroll = () => {
  isScrolled.value = window.scrollY > 140
}
onMounted(() => {
  window.addEventListener('scroll', setScroll)
})
onUnmounted(() => {
  window.removeEventListener('scroll', setScroll)
})
</script>
<template>
  <header class="the-header" v-show="isScrolled">
    <h1>
      {{ basics.name }}
    </h1>
    <div class="contact-info">
      <a :href="telHref">{{ basics.phone }}</a>
      <a :href="`mailto:${basics.email}`">{{ basics.email }}</a>
      <a
        v-for="[linkKey, link] in links"
        :key="linkKey"
        :href="link"
        target="_blank"
        class="contact-info-link"
      >
        {{ linkKey }}
      </a>
    </div>
  </header>
</template>
<style scoped>
.the-header {
  width: 100%;
  position: sticky;
  top: 0;
  background-color: var(--app-bg);
  width: 100%;
  max-width: var(--app-max-width);
  margin: 0 auto;
  border-bottom: 1px solid var(--border-color);
  border-left: 1px solid var(--border-color);
}
.the-header h1 {
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
