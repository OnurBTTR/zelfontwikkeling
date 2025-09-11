<template>
  <div>
    Autogarages overzicht:
    {{ tenants }}
  </div>
</template>

<script setup lang="ts">
import {useRouteQuery} from '@vueuse/router';

const page = useRouteQuery('page', '1', {transform: Number});

const {result} = useTenantsQuery({
  page,
}, {
  fetchPolicy: 'cache-and-network',
});

const tenants = computed(() => result.value?.tenants?.data ?? []);
</script>
