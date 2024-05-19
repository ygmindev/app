import { fromStatic } from '@lib/backend/file/utils/fromStatic/fromStatic';
import { config as apiConfig } from '@lib/config/api/api.server';
import { defineConfig } from '@lib/config/core/utils/defineConfig/defineConfig';
import { _config as databaseConfig } from '@lib/config/database/database.mongo';
import { SERVER_CONFIG } from '@lib/config/server/server.constants';
import { type ServerConfigModel } from '@lib/config/server/server.models';
import toNumber from 'lodash/toNumber';

const { config } = defineConfig({
  config: () =>
    ({
      ...SERVER_CONFIG,

      api: apiConfig,

      certificate: {
        caFile: 'rootCA.pem',

        certificateDir: fromStatic('certificates'),

        privateKeyFile: process.env.SERVER_SSL_PRIVATE_KEY,

        publicKeyFile: process.env.SERVER_SSL_PUBLIC_KEY,
      },

      databaseConfig,

      host: process.env.SERVER_APP_HOST,

      port: toNumber(process.env.SERVER_APP_PORT),
    }) satisfies ServerConfigModel,
});

export { config };
