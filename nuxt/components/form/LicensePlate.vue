<template>
  <FormKit
    type="text"
    placeholder="XX-123-X"
    :validation="[['required'], ['matches', /^[A-Za-z0-9-]+$/]]"
    label="Kenteken"
    validation-visibility="blur"
    validation-label="Kenteken"
    input-class="$reset font-kenteken transition-all autofill:shadow-[0_0_0_1000px_#facc15_inset] w-full h-12 text-center bg-yellow-400 focus:outline-none p-3 text-lg uppercase"
    inner-class="$reset overflow-hidden w-full flex items-center border border-neutral-400 bg-blue-700 rounded-lg"
  >
    <template #prefix>
      <div class="px-0.5 text-center text-xs font-medium text-white">
        <Icon
          name="simple-icons:europeanunion"
          class="text-yellow-400"
          size="1rem"
        />
        NL
      </div>
    </template>
  </FormKit>
</template>
