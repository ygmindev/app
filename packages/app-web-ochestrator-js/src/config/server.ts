import { initialize as initializeBackend } from '@lib/backend/setup/utils/initialize/initialize';
import { type ServerConfigModel } from '@lib/config/node/server/server.models';
import { config as configBase } from '@lib/config/node/server/server.web';
import { defineConfig } from '@lib/config/utils/defineConfig/defineConfig';

import { config as apiConfig } from './api';

export const config = defineConfig<ServerConfigModel>({
  ...configBase,

  overrides: () => [
    {
      api: apiConfig.params(),

      onInitialize: async () => {
        await initializeBackend();
      },
    },
  ],
});
