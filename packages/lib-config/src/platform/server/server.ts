import { defineConfig } from '@lib/config/core/utils/defineConfig/defineConfig';
import { config as bundleConfig } from '@lib/config/node/bundle/bundle.node';
// import { _server } from '@lib/config/platform/server/_server';
import { type ServerConfigModel } from '@lib/config/platform/server/server.models';

const { config } = defineConfig({
  // _config: _server,

  config: {
    bundleConfig,
  } satisfies ServerConfigModel,
});

export { config };
