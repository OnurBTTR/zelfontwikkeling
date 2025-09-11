import {createResolver} from '@nuxt/kit';
const {resolve} = createResolver(import.meta.url);

export default defineNuxtConfig({
  extends: [
    '@bttr-devs/nuxt-layer-sofie-auth',
  ],

  modules: [
    '@nuxt/icon',
    '@nuxt/fonts',
  ],

  imports: {
    dirs: [
      './constants',
      './graphql',
      './types',
    ],
  },

  sofie: {
    queries: {
      me: resolve('./graphql/queries/sofie/me.gql'),
    },
  },

  fonts: {
    defaults: {
      weights: [400, 500, 600, 700],
    },
  },

  icon: {
    size: '1.25rem',
  },

  tailwindcss: {
    config: {
      content: [
        './formkit.*.ts',
      ],
    },
  },
});
