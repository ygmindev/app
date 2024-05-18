import { defineConfig } from '@lib/config/core/utils/defineConfig/defineConfig';
import { SERVER_CONFIG } from '@lib/config/server/server.constants';
import { type ServerConfigModel } from '@lib/config/server/server.models';

const { config } = defineConfig({
  config: () =>
    ({
      ...SERVER_CONFIG,
    }) satisfies ServerConfigModel,
});

export { config };
