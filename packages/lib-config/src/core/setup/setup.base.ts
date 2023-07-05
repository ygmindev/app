// COMPLETE
import { type SetupConfigModel } from '#lib-config/core/setup/setup.models';
import { defineConfig } from '#lib-config/core/utils/defineConfig/defineConfig';

const { _config, config } = defineConfig({
  config: {
    onInitialize: async () => {
      return;
    },

    onTerminate: async () => {
      return;
    },
  } satisfies SetupConfigModel,
});

export { _config, config };
