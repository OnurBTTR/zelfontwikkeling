<template>
  <NuxtLayout>
    <div>
      <h1>Error {{ error.statusCode }}</h1>
      <DevOnly>
        <p>{{ error.message }}</p>
      </DevOnly>

      <button @click="handleError">
        Terug naar home
      </button>
    </div>
  </NuxtLayout>
</template>

<script setup lang="ts">
import type {NuxtError} from '#app';

const props = defineProps<{
  error: NuxtError,
}>();

useSeoMeta({
  title: props.error.message,
});

function handleError() {
  clearError({redirect: '/'});
}
</script>
