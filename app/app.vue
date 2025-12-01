<script setup lang="ts">
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
      children: JSON.stringify(jsonLd),
    },
  ],
})
</script>
<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
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
}
</style>
