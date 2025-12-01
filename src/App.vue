<script setup>
import TheExperience from './components/TheExperience/TheExperience.vue'
import TheHeader from './components/TheHeader/TheHeader.vue'
import TheTechnologies from './components/TheTechnologies/TheTechnologies.vue'
import TheHero from './components/TheHero/TheHero.vue'
</script>
<template>
  <main class="container">
    <TheHeader />
    <TheHero />
    <TheExperience />
    <TheTechnologies />
  </main>
</template>
<style>
:root {
  --app-bg: #f5f5f5;
  --text-color: #0f172a;
  --border-color: #ccc;
  --app-max-width: 1200px;
}
body {
  background-color: var(--app-bg);
  color: var(--text-color);
  font-family: 'Public Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', 'Liberation Sans', sans-serif;
  font-weight: 400;
}
h1, h2, h3, h4, h5, h6 {
  font-family: 'Work Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', 'Liberation Sans', sans-serif;
  font-weight: 600;
}
</style>


