<template>
  <div>
    <h1>Mijn account</h1>

    {{ user.name }}
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  middleware: ['sidebase-auth'],
});

useSeoMeta({
  title: 'Mijn account',
});

const user = useSofieUser();
</script>
