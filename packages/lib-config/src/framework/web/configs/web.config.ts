import type { WebConfigParamsModel } from '@lib/config/framework/web/web.models';

export const webConfig: WebConfigParamsModel = {
  command: 'vite',

  configFile: 'web.config.ts',

  isSsr: true,

  publicDir: 'assets',

  rootId: 'root',

  ssrContextKeys: ['state.initialState'],
};
