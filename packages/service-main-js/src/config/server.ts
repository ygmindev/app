import { serverConfig as configBase } from '@lib/config/node/server/server.base';

import { apiConfig } from './api';

export const serverConfig = configBase.extend(() => {
  return {
    api: apiConfig.params(),
  };
});
