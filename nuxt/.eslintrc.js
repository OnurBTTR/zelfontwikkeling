module.exports = {
  extends: '@bttr-devs/nuxt',

  ignorePatterns: [
    '.gitignore',
  ],

  settings: {
    'better-tailwindcss': {
      tailwindConfig: 'core/tailwind.config.ts',
    },
  },
};
