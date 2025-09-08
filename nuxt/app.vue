<template>
  <NuxtLayout>
    <NuxtRouteAnnouncer />
    <NuxtPwaManifest />
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup lang="ts">
const {locale} = useI18n();

useHead({
  htmlAttrs: {lang: locale},
  titleTemplate: titleChunk => titleChunk ? `${titleChunk} - Garages.nl` : 'Garages.nl',
});
</script>
