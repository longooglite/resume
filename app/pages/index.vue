<script setup lang="ts">
import { onMounted, ref } from 'vue'
import TheHeader from '@/components/TheHeader/TheHeader.vue'
import TheHero from '@/components/TheHero/TheHero.vue'
import TheExperience from '@/components/TheExperience/TheExperience.vue'
import TheTechnologies from '@/components/TheTechnologies/TheTechnologies.vue'

const loaded = ref(false)
onMounted(() => {
  loaded.value = true
})
</script>
<template>
  <TheHeader :loaded="loaded" />
  <main id="main-content">
    <TheHero :loaded="loaded"/>
    <TheExperience :loaded="loaded"/>
    <TheTechnologies :loaded="loaded"/>
  </main>
</template>
