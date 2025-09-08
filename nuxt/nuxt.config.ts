import {createResolver} from '@nuxt/kit';
const {resolve} = createResolver(import.meta.url);

export default defineNuxtConfig({
  extends: [
    '@bttr-devs/nuxt-layer-sofie-auth',
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

  modules: ['@nuxt/icon'],
});
