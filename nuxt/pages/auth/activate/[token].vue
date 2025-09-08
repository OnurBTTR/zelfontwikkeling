<template>
  <div>
    <h1>Wachtwoord herstellen</h1>

    <SofieAuthAcceptInviteForm
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
  title: 'Account activeren',
});

function onSuccess() {
  // TODO: Notify user and redirect to login page
}

function onError() {
  // TODO: Notify user of error
}
</script>
