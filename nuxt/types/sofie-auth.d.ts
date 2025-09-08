import type {MeQuery} from '@graphql/graphql';

declare module '@bttr-devs/nuxt-layer-sofie-auth' {
  type BaseUser = NonNullable<MeQuery['me']>;

  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  interface User extends BaseUser {
  }
}
