import { Environment } from '@lib/backend/environment/utils/Environment/Environment';
import { fromStatic } from '@lib/backend/file/utils/fromStatic/fromStatic';
import { fromWorking } from '@lib/backend/file/utils/fromWorking/fromWorking';
import { corsPlugin } from '@lib/backend/server/utils/Server/plugins/corsPlugin/corsPlugin';
import { type ServerPluginModel } from '@lib/backend/server/utils/Server/plugins/plugins.models';
import { PUBLIC_DIR } from '@lib/config/file/file.constants';
import { type ServerConfigModel } from '@lib/config/node/server/server.models';
import { defineConfig } from '@lib/config/utils/defineConfig/defineConfig';
import { Container } from '@lib/shared/core/utils/Container/Container';
import toNumber from 'lodash/toNumber';

export const config = defineConfig<ServerConfigModel>({
  params: () => {
    const environment = Container.get(Environment);
    return {
      certificate: {
        caFilename: 'rootCA.pem',

        certificateDir: fromStatic('certificates'),

        privateKeyFilename: environment.variables.SERVER_SSL_PRIVATE_KEY ?? '',

        publicKeyFilename: environment.variables.SERVER_SSL_PUBLIC_KEY ?? '',
      },

      entryPathname: fromWorking('src/index.ts'),

      host: environment.variables.SERVER_APP_HOST ?? '',

      plugins: [
        [
          corsPlugin,
          {
            headers: ['*'],
            origins: ['*'],
          },
        ],
      ] as Array<[ServerPluginModel<unknown>, unknown]>,

      port: toNumber(environment.variables.SERVER_APP_PORT ?? ''),

      publicDir: PUBLIC_DIR,
    };
  },
});

export default config;
