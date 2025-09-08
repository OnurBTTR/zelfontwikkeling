<template>
  <div class="bg-blue-600 py-20">
    <div class="container flex flex-col items-center justify-center">
      <div class="bg-white p-20">
        <UiLicensePlate />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {useRouteQuery} from '@vueuse/router';

useSeoMeta({
  title: 'Index',
});

const page = useRouteQuery('page', '1', {transform: Number});

const {result} = useTenantsQuery({
  page,
}, {
  fetchPolicy: 'cache-and-network',
});

const tenants = computed(() => result.value?.tenants?.data ?? []);
</script>
