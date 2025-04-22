import {
  type _FrameworkConfigModel,
  type FrameworkConfigModel,
} from '@lib/config/node/framework/framework.models';

export const _framework = (params: FrameworkConfigModel): _FrameworkConfigModel => ({
  hydrationCanBeAborted: true,

  passToClient: ['context', 'pageProps'],

  prerender: {
    partial: true,
  },

  route: '/*',
});
