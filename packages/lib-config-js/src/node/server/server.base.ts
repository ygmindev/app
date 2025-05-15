import { fromStatic } from '@lib/backend/file/utils/fromStatic/fromStatic';
import { fromWorking } from '@lib/backend/file/utils/fromWorking/fromWorking';
import { PUBLIC_DIR } from '@lib/config/file/file.constants';
import { type ServerConfigModel } from '@lib/config/node/server/server.models';
import { defineConfig } from '@lib/config/utils/defineConfig/defineConfig';
import toNumber from 'lodash/toNumber';

export const config = defineConfig<ServerConfigModel>({
  params: () => ({
    certificate: {
      caFilename: 'rootCA.pem',

      certificateDir: fromStatic('certificates'),

      privateKeyFilename: process.env.SERVER_SSL_PRIVATE_KEY,

      publicKeyFilename: process.env.SERVER_SSL_PUBLIC_KEY,
    },

    entryPathname: fromWorking('src/index.ts'),

    host: process.env.SERVER_APP_HOST,

    port: toNumber(process.env.SERVER_APP_PORT),

    publicDir: PUBLIC_DIR,
  }),
});

export default config;
