import type { _WebConfigParamsModel } from '@lib/config/framework/web/_web.models';

export const webConfigParams: _WebConfigParamsModel = {
  command: 'vite',

  configFile: 'web.config.ts',

  isSsr: true,

  publicDir: 'assets',

  rootId: 'root',

  ssrContextKeys: ['state.initialState'],
};
