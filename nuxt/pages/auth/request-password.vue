<template>
  <div>
    <h1>Wachtwoord aanvragen</h1>

    <SofieAuthPasswordResetRequestForm
      @success="onSuccess"
      @error="onError"
    />
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
  title: 'Wachtwoord aanvragen',
});

function onSuccess() {
  // TODO: Notify user and redirect to login page
}

function onError() {
  // TODO: Notify user of error
}
</script>
