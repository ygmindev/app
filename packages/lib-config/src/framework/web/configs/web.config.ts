import type { WebConfigParamsModel } from '@lib/config/framework/web/web.models';

export const webConfig: WebConfigParamsModel = {
  configFile: 'web.config.ts',

  isReact: true,

  isSsr: true,

  publicDir: 'assets',

  rootId: 'root',
};
