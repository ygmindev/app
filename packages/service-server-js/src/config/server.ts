import { Environment } from '@lib/backend/environment/utils/Environment/Environment';
import { cookiesPlugin } from '@lib/backend/server/utils/Server/plugins/cookiesPlugin/cookiesPlugin';
import { graphqlPlugin } from '@lib/backend/server/utils/Server/plugins/graphqlPlugin/graphqlPlugin';
import { type ServerPluginModel } from '@lib/backend/server/utils/Server/plugins/plugins.models';
import { websocketPlugin } from '@lib/backend/server/utils/Server/plugins/websocketPlugin/websocketPlugin';
import { initialize as initializeBackend } from '@lib/backend/setup/utils/initialize/initialize';
import { config as configBase } from '@lib/config/node/server/server.base';
import { type ServerConfigModel } from '@lib/config/node/server/server.models';
import { defineConfig } from '@lib/config/utils/defineConfig/defineConfig';
import { Container } from '@lib/shared/core/utils/Container/Container';
import { GRAPHQL } from '@lib/shared/graphql/graphql.constants';
import { HTTP_METHOD } from '@lib/shared/http/http.constants';
import { logger } from '@lib/shared/logging/utils/Logger/Logger';

import { config as apiConfig } from './api';
import { config as graphqlConfig } from './graphql';

export const config = defineConfig<ServerConfigModel>({
  ...configBase,

  overrides: () => {
    const environment = Container.get(Environment);
    return [
      {
        api: apiConfig.params(),

        onInitialize: async () => {
          await initializeBackend();
        },

        plugins: [
          [cookiesPlugin, { secret: environment.variables.SERVER_APP_SECRET }],

          [
            graphqlPlugin,
            {
              config: graphqlConfig.params(),
              logger,
              method: [HTTP_METHOD.GET, HTTP_METHOD.POST, HTTP_METHOD.OPTIONS],
              pathname: GRAPHQL,
            },
          ],

          [websocketPlugin, {}],
        ] as Array<[ServerPluginModel<unknown>, unknown]>,
      },
    ];
  },
});
