<template>
  <div class="bg-blue-700 py-20">
    <div
      class="
        container flex max-w-4xl flex-col items-center justify-center space-y-12
      "
    >
      <h1
        class="
          text-balance text-center text-5xl font-bold leading-[4rem] text-white
        "
      >
        Vergelijk autogarages bij jou in de buurt
      </h1>

      <FormSearch />
    </div>
  </div>
</template>

<script setup lang="ts">
useSeoMeta({
  title: 'Index',
});
</script>
