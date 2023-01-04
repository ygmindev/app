import type { WebConfigParamsModel } from '@lib/config/framework/web/web.models';

export const webConfig: WebConfigParamsModel = {
  configFile: 'web.config.ts',

  favicoPath: 'favicon.svg',

  isReact: true,

  isSsr: true,

  rootId: 'root',
};
