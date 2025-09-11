<template>
  <div
    class="
      grid min-h-dvh grid-rows-[min-content,auto,min-content] font-poppins
      text-base
    "
  >
    <AppHeader />

    <main>
      <slot />
    </main>

    <AppFooter />
  </div>
</template>
