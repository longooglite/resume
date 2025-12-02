<script setup lang="ts">
import { useResumeData } from '@/composables/useResumeData'
import { computed, onMounted, onUnmounted, ref } from 'vue'
import { PhCaretDown, PhCaretUp } from 'phosphor-vue'

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

const mobileExpanded = ref(false)
const toggleMobileExpanded = () => {
  mobileExpanded.value = !mobileExpanded.value
}
</script>
<template>
  <header class="the-header" v-show="isScrolled && props.loaded">
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
        rel="noopener noreferrer"
        class="contact-info-link"
      >
        {{ linkKey }}
      </a>
    </div>
    <div class="contact-info-mobile" id="mobile-contact-info">
      <button
        @click="toggleMobileExpanded"
        :aria-expanded="mobileExpanded"
        aria-controls="mobile-contact-info-list"
      >
        Contact Info
        <PhCaretDown v-if="mobileExpanded" aria-hidden="true" />
        <PhCaretUp v-else aria-hidden="true" />
      </button>
      <div v-show="mobileExpanded" id="mobile-contact-info-list">
        <a :href="telHref">{{ basics.phone }}</a>
        <a :href="`mailto:${basics.email}`">{{ basics.email }}</a>
        <a
          v-for="[linkKey, link] in links"
          :key="linkKey"
          :href="link"
          target="_blank"
          rel="noopener noreferrer"
          class="contact-info-link"
        >
          {{ linkKey }}
        </a>
      </div>
    </div>
  </header>
</template>
<style scoped>
.the-header {
  width: 100%;
  position: sticky;
  top: 0;
  background-color: var(--background-color);
  width: 100%;
  max-width: var(--app-max-width);
  margin: 0 auto;
  border-bottom: 1px solid var(--border-color);
  border-left: 1px solid var(--border-color);
  color: var(--text-color);
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
  color: var(--primary-highlight);
}
.contact-info a:visited {
  color: var(--secondary-highlight);
}
.contact-info-link {
  text-transform: capitalize;
}
.contact-info-mobile {
  display: none;
}
.contact-info-mobile button {
  background-color: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  margin: 0;
  font-size: 16px;
  font-weight: 600;
  margin-bottom: 10px;
  color: var(--text-color);
}
@media (max-width: 640px) {
  .the-header {
    padding-top: 10px;
    width: 100%;
    border-left: none;
    margin-bottom: 0;
    border-left: none;
  }
  .contact-info {
    display: none;
  }
  #mobile-contact-info-list {
    display: flex;
    flex-direction: column;
    gap: 10px;
    padding-left: 10px;
  }
  .contact-info-mobile a {
    font-size: 0.8rem;
    margin-bottom: 10px;
    color: var(--primary-highlight);
  }
  .contact-info-mobile a:visited {
    color: var(--secondary-highlight);
  }
}
</style>
