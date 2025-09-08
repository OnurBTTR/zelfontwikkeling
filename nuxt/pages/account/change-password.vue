<template>
  <div>
    <h1>Wachtwoord aanpassen</h1>

    <SofieAuthChangePasswordForm
      @success="onSuccess"
      @error="onError"
    />
  </div>
</template>

<script lang="ts" setup>
definePageMeta({
  middleware: ['sidebase-auth'],
});

useSeoMeta({
  title: 'Wachtwoord veranderen',
});

function onSuccess() {
  // TODO: Notify user of success
}

function onError() {
  // TODO: Notify user of error
}
</script>
