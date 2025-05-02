import { type _FrameworkConfigModel } from '@lib/config/node/framework/framework.models';

export const _framework = (): _FrameworkConfigModel => ({
  extends: ['import:vike-react/config:default'],

  hydrationCanBeAborted: true,

  passToClient: ['context'],

  prerender: {
    partial: true,
  },

  route: '/*',

  ssr: true,

  stream: true,
});
