import { type SetupConfigModel } from '#lib-config/core/setup/setup.models';
import { defineConfig } from '#lib-config/core/utils/defineConfig/defineConfig';

const isInitialized = false;

const isTerminated = false;

const { _config, config } = defineConfig({
  config: {
    onInitialize: async () => {
      if (!isInitialized) {
        return;
      }
    },

    onShutdown: async () => {
      if (!isTerminated) {
        return;
      }
    },
  } satisfies SetupConfigModel,
});

export { _config, config };
