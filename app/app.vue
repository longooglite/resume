<script setup lang="ts">
import { useHead } from 'nuxt/app'
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ProfilePage',
  mainEntity: {
    '@type': 'Person',
    name: 'Kirk Longuski',
    jobTitle: 'Front-End Architect & Team Lead',
    description:
      '10-year veteran Front-End Architect specializing in TypeScript, React, and Vue modernization.',
    url: 'https://klonguski.com',
    sameAs: [
      'https://www.linkedin.com/in/kirk-longuski-7341a924/',
      'https://github.com/your-github-username',
    ],
    knowsAbout: [
      { '@type': 'Thing', name: 'TypeScript' },
      { '@type': 'Thing', name: 'React' },
      { '@type': 'Thing', name: 'Next.js' },
      { '@type': 'Thing', name: 'System Architecture' },
    ],
  },
}
useHead({
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify(jsonLd),
    },
  ],
})
</script>
<template>
  <NuxtLayout>
    <a href="#main-content" class="skip-link">Skip to main content</a>
    <NuxtPage />
  </NuxtLayout>
</template>

<style>
:root {
  --app-light: #f5f5f5;
  --app-dark: #0f172a;
  --border-color: #ccc;
  --app-max-width: 1200px;
  --primary-highlight: #0f172a;
  --secondary-highlight: #475569;
}
body {
  background-color: var(--app-light);
  color: var(--app-dark);
  font-family:
    'Public Sans',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    'Noto Sans',
    'Liberation Sans',
    sans-serif;
  font-weight: 400;
  --text-color: var(--app-dark);
  --background-color: var(--app-light);
  --contrast-color: var(--app-dark);
  transition:
    background-color 0.2s ease-in-out,
    color 0.2s ease-in-out;
}
body.light {
  display: unset;
}
body.dark {
  display: unset;
  background-color: var(--app-dark);
  color: var(--app-light);
  --text-color: var(--app-light);
  --background-color: var(--app-dark);
  --primary-highlight: var(--app-light);
  --secondary-highlight: var(--app-light);
  --contrast-color: var(--app-light);
}
@media (max-width: 640px) {
  main {
    padding: 10px;
  }
}
h1,
h2,
h3,
h4,
h5,
h6 {
  font-family:
    'Work Sans',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    'Noto Sans',
    'Liberation Sans',
    sans-serif;
  font-weight: 600;
  color: var(--text-color);
}
.skip-link {
  position: absolute;
  left: -10000px;
  top: auto;
  width: 1px;
  height: 1px;
  overflow: hidden;
}
.skip-link:focus {
  position: static;
  width: auto;
  height: auto;
  margin: 8px;
  padding: 8px 12px;
  background: var(--contrast-color);
  color: var(--background-color);
  border-radius: 4px;
}
</style>
