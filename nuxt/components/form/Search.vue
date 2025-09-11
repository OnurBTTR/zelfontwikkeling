<template>
  <FormKit
    type="form"
    form-class="w-full bg-neutral-200 p-5 border rounded-2xl border-neutral-400"
    :actions="false"
  >
    <div
      class="flex items-end justify-between gap-x-2"
    >
      <FormLicensePlate
        id="license_plate"
        v-model="licensePlate"
        name="license_plate"
        @blur="resolveLicensePlate"
      />

      <FormKit
        type="autocomplete"
        name="location"
        placeholder="In de buurt of adres"
        label="Adres"
        :options="[
          {label: 'zeb', value: 'zeb'},
          {label: 'zeb2', value: 'zeb2'},
          {label: 'zeb3', value: 'zeb3'},
          {label: 'zeb4', value: 'zeb4'},
          {label: 'zeb5', value: 'zeb5'},
          {label: 'zeb5', value: 'zeb6'},
          {label: 'zeb5', value: 'zeb8'},
          {label: 'zeb5', value: 'zeb7'},
        ]"
        :select-icon="false"
        open-on-click
      />

      <UiButton
        type="submit"
        label="Zoeken"
        :disabled="loading"
      />
    </div>

    <p v-if="vehicle">
      {{ vehicle.brand + ' ' + vehicle.model }}
    </p>
  </FormKit>
</template>

<script setup lang="ts">
import {getNode} from '@formkit/core';

const licensePlate = ref('');

watch(licensePlate, (newVal) => {
  if (newVal) {
    licensePlate.value = useFormatLicensePlate(newVal);
  }
});

const licensePlateNodeIsValid = ref(false);

onMounted(() => {
  const node = getNode('license_plate');

  if (node) {
    watch(() => node?.context?.state.valid, (isValid) => {
      licensePlateNodeIsValid.value = isValid === true;
    }, {
      immediate: true,
    });
  }
});

const variables = ref({
  licensePlate: '',
});

const {load, loading, result} = useVehicleLazyQuery(variables);
const vehicle = computed(() => result.value?.vehicle ?? null);

async function resolveLicensePlate() {
  if (!licensePlate.value || !licensePlateNodeIsValid.value) {
    return;
  }

  variables.value = {
    licensePlate: licensePlate.value.replace(/-/g, ''),
  };

  await load();
}
</script>
