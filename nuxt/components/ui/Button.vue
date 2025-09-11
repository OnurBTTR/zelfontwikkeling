<template>
  <component
    :is="to ? NuxtLink : 'button'"
    :to="to"
    :external="external"
    :type="type"
    class="
      flex h-12 w-fit min-w-8 select-none items-center justify-center gap-x-1.5
      whitespace-nowrap rounded-md px-4 text-center text-base font-medium
      leading-normal transition-all
      disabled:cursor-not-allowed
    "
    :class="[
      ({
        primary: `
          bg-yellow-400 text-blue-700
           hover:bg-yellow-500
        `,
      })[variant]
    ]"
    :disabled="disabled"
  >
    <Icon
      v-if="iconPrefix"
      :name="iconPrefix"
      class="flex-none"
    />

    <slot>
      {{ label }}
    </slot>

    <Icon
      v-if="iconSuffix"
      :name="iconSuffix"
      class="flex-none"
    />
  </component>
</template>

<script setup lang="ts">
import {NuxtLink} from '#components';
import type {RouteLocationRaw} from 'vue-router';

withDefaults(defineProps<{
  disabled?: boolean
  external?: boolean
  to?: RouteLocationRaw | undefined
  label?: string
  type?: string,
  variant?: 'primary',
  iconPrefix?: string,
  iconSuffix?: string,
}>(), {
  disabled: false,
  external: false,
  to: undefined,
  label: '',
  type: 'button',
  variant: 'primary',
  iconPrefix: undefined,
  iconSuffix: undefined,
});
</script>
