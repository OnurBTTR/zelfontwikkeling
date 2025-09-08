<template>
  <div
    class="
      flex h-12 items-center overflow-hidden rounded-md border-2 border-gray-900
    "
  >
    <div class="flex h-12 flex-col justify-center bg-[#2662a2] px-1.5">
      <Icon
        name="simple-icons:europeanunion"
        class="text-primary"
      />

      <span class="text-[11px] text-white">
        NL
      </span>
    </div>

    <FormKit
      type="text"
      name="license_plate"
      label="Kenteken"
      placeholder="Kenteken"
      :validation="[
        ['required'],
        ['matches', /^[A-Za-z0-9-/]+$/]
      ]"
      validation-label="Kenteken"
      input-class="$reset bg-primary p-3 text-lg font-bold uppercase"
      inner-class="$reset"
    />
  </div>
</template>
