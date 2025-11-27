import { type ServerPluginModel } from '@lib/backend/server/utils/Server/plugins/plugins.models';
import { initialize as initializeBackend } from '@lib/backend/setup/utils/initialize/initialize';
import { serverConfig as configBase } from '@lib/config/node/server/server.web';

import { databaseConfig } from './database';

let serverConfig = configBase;

serverConfig = serverConfig.extend(() => ({
  onInitialize: async () => {
    await initializeBackend({ database: () => databaseConfig.params() });
  },

  plugins: [] as Array<[ServerPluginModel<unknown>, unknown]>,
}));

export { serverConfig };
