import { Environment } from '@lib/backend/environment/utils/Environment/Environment';
import { fromStatic } from '@lib/backend/file/utils/fromStatic/fromStatic';
import { fromWorking } from '@lib/backend/file/utils/fromWorking/fromWorking';
import { cookiesPlugin } from '@lib/backend/server/utils/Server/plugins/cookiesPlugin/cookiesPlugin';
import { corsPlugin } from '@lib/backend/server/utils/Server/plugins/corsPlugin/corsPlugin';
import { graphqlPlugin } from '@lib/backend/server/utils/Server/plugins/graphqlPlugin/graphqlPlugin';
import { type ServerPluginModel } from '@lib/backend/server/utils/Server/plugins/plugins.models';
import { PUBLIC_DIR } from '@lib/config/file/file.constants';
import {
  type _ServerConfigModel,
  type ServerConfigModel,
} from '@lib/config/node/server/server.models';
import { Config } from '@lib/config/utils/Config/Config';
import { Container } from '@lib/shared/core/utils/Container/Container';
import { GRAPHQL } from '@lib/shared/graphql/graphql.constants';
import { HTTP_METHOD } from '@lib/shared/http/http.constants';
import { logger } from '@lib/shared/logging/utils/Logger/Logger';
import toNumber from 'lodash/toNumber';

export const serverConfig = new Config<ServerConfigModel, _ServerConfigModel>({
  params: (prev) => {
    const environment = Container.get(Environment);

    let plugins = [
      [corsPlugin, { headers: ['*'], origins: ['*'] }],

      [cookiesPlugin, { secret: environment.variables.SERVER_APP_SECRET }],
    ] as Array<[ServerPluginModel<unknown>, unknown]>;

    if (prev?.graphqlConfig) {
      plugins = [
        ...(plugins ?? []),

        [
          graphqlPlugin,
          {
            config: prev.graphqlConfig,
            logger,
            method: [HTTP_METHOD.GET, HTTP_METHOD.POST, HTTP_METHOD.OPTIONS],
            pathname: GRAPHQL,
          },
        ],
      ] as Array<[ServerPluginModel<unknown>, unknown]>;
    }

    const port =
      environment.variables.PORT ||
      environment.variables.APP_PORT ||
      environment.variables.SERVER_APP_PORT;
    return {
      certificate:
        process.env.NODE_ENV === 'production'
          ? undefined
          : {
              caFilename: environment.variables.SERVER_SSL_CA_FILENAME ?? '',
              certificateDir: fromStatic('certificates'),
              privateKeyFilename: environment.variables.SERVER_SSL_PRIVATE_KEY ?? '',
              publicKeyFilename: environment.variables.SERVER_SSL_PUBLIC_KEY ?? '',
            },

      entryPathname: fromWorking('src/index.ts'),

      host: environment.variables.SERVER_APP_HOST ?? '',

      plugins,

      port: toNumber(port),

      publicDir: PUBLIC_DIR,
    };
  },
});
