import { type ServerPluginModel } from '@lib/backend/server/utils/Server/plugins/plugins.models';
import { initialize as initializeBackend } from '@lib/backend/setup/utils/initialize/initialize';
import { type ServerConfigModel } from '@lib/config/node/server/server.models';
import { config as configBase } from '@lib/config/node/server/server.web';
import { defineConfig } from '@lib/config/utils/defineConfig/defineConfig';

export const config = defineConfig<ServerConfigModel>({
  ...configBase,

  overrides: () => {
    return [
      {
        onInitialize: async () => {
          await initializeBackend();
        },

        plugins: [] as Array<[ServerPluginModel<unknown>, unknown]>,
      },
    ];
  },
});
