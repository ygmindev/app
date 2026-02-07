import { Environment } from '@lib/backend/environment/utils/Environment/Environment';
import { fromStatic } from '@lib/backend/file/utils/fromStatic/fromStatic';
import { fromWorking } from '@lib/backend/file/utils/fromWorking/fromWorking';
import { cookiesPlugin } from '@lib/backend/server/utils/Server/plugins/cookiesPlugin/cookiesPlugin';
import { corsPlugin } from '@lib/backend/server/utils/Server/plugins/corsPlugin/corsPlugin';
import { type ServerPluginModel } from '@lib/backend/server/utils/Server/plugins/plugins.models';
import { PUBLIC_DIR } from '@lib/config/file/file.constants';
import { type ServerConfigModel } from '@lib/config/node/server/server.models';
import { Config } from '@lib/config/utils/Config/Config';
import { Container } from '@lib/shared/core/utils/Container/Container';
import toNumber from 'lodash/toNumber';

export const serverConfig = new Config<ServerConfigModel>({
  params: () => {
    const environment = Container.get(Environment);
    const port =
      environment.variables.PORT ??
      environment.variables.APP_PORT ??
      environment.variables.SERVER_APP_PORT;
    return {
      certificate:
        process.env.NODE_ENV === 'production'
          ? undefined
          : {
              caFilename: 'rootCA.pem',
              certificateDir: fromStatic('certificates'),
              privateKeyFilename: environment.variables.SERVER_SSL_PRIVATE_KEY ?? '',
              publicKeyFilename: environment.variables.SERVER_SSL_PUBLIC_KEY ?? '',
            },

      entryPathname: fromWorking('src/index.ts'),

      host: environment.variables.SERVER_APP_HOST ?? '',

      plugins: [
        [corsPlugin, { headers: ['*'], origins: ['*'] }],

        [cookiesPlugin, { secret: environment.variables.SERVER_APP_SECRET }],
      ] as Array<[ServerPluginModel<unknown>, unknown]>,

      port: toNumber(port),

      publicDir: PUBLIC_DIR,
    };
  },
});
