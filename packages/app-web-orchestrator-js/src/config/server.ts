import { type ServerPluginModel } from '@lib/backend/server/utils/Server/plugins/plugins.models';
import { initialize as initializeBackend } from '@lib/backend/setup/utils/initialize/initialize';
import { type ServerConfigModel } from '@lib/config/node/server/server.models';
import { config as configBase } from '@lib/config/node/server/server.node';
import { defineConfig } from '@lib/config/utils/defineConfig/defineConfig';

import { config as databaseConfig } from './database';

export const config = defineConfig<ServerConfigModel>({
  ...configBase,

  overrides: () => {
    return [
      {
        onInitialize: async () => {
          await initializeBackend({ database: databaseConfig.params() });
        },

        plugins: [] as Array<[ServerPluginModel<unknown>, unknown]>,
      },
    ];
  },
});
