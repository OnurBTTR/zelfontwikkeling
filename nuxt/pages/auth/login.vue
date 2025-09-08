<template>
  <div>
    <h1>Inloggen</h1>

    <SofieAuthLoginForm>
      <template #after-submit>
        <NuxtLink :to="{name: 'auth-request-password'}">
          Wachtwoord vergeten?
        </NuxtLink>
      </template>
    </SofieAuthLoginForm>
  </div>
</template>

<script lang="ts" setup>
definePageMeta({
  middleware: 'sidebase-auth',
  auth: {
    unauthenticatedOnly: true,
  },
});

useSeoMeta({
  title: 'Inloggen',
});
</script>
