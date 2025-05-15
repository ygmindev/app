import { databasePlugin } from '@lib/backend/server/utils/Server/plugins/databasePlugin/databasePlugin';
import { graphqlPlugin } from '@lib/backend/server/utils/Server/plugins/graphqlPlugin/graphqlPlugin';
import { type ServerPluginModel } from '@lib/backend/server/utils/Server/plugins/plugins.models';
import { websocketPlugin } from '@lib/backend/server/utils/Server/plugins/websocketPlugin/websocketPlugin';
import { config as apiConfig } from '@lib/config/api/api.node';
import { config as databaseConfig } from '@lib/config/database/database.mongo';
import { config as garphqlConfig } from '@lib/config/graphql/graphql.main';
import { config as configBase } from '@lib/config/node/server/server.base';
import { type ServerConfigModel } from '@lib/config/node/server/server.models';
import { defineConfig } from '@lib/config/utils/defineConfig/defineConfig';
import { GRAPHQL } from '@lib/shared/graphql/graphql.constants';
import { HTTP_METHOD } from '@lib/shared/http/http.constants';
import { logger } from '@lib/shared/logging/utils/Logger/Logger';

export const config = defineConfig<ServerConfigModel>({
  ...configBase,

  overrides: () => [
    {
      api: apiConfig.params(),

      plugins: [
        [databasePlugin, { config: databaseConfig.params() }],

        [
          graphqlPlugin,
          {
            config: garphqlConfig.params(),
            logger,
            method: [HTTP_METHOD.GET, HTTP_METHOD.POST, HTTP_METHOD.OPTIONS],
            pathname: GRAPHQL,
          },
        ],

        [websocketPlugin, {}],
      ] as Array<[ServerPluginModel<unknown>, unknown]>,
    },
  ],
});

export default config;
