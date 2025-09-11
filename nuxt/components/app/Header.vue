<template>
  <div class="sticky top-0 py-5">
    <div class="container flex items-center justify-between gap-20">
      <NuxtLink
        class="flex items-center gap-2 text-2xl font-bold"
        to="/"
      >
        <div
          class="
            flex size-8 items-center justify-center rounded bg-blue-700
            text-white
          "
        >
          <Icon
            name="game-icons:imbricated-arrows"
            size="1.75rem"
          />
        </div>


        garages
      </NuxtLink>

      <UiButton
        icon-prefix="mingcute:user-1-line"
        icon-suffix="mingcute:down-line"
        label="Inloggen"
        class="ml-auto"
      />
    </div>
  </div>
</template>
