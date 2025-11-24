import { graphqlPlugin } from '@lib/backend/server/utils/Server/plugins/graphqlPlugin/graphqlPlugin';
import { type ServerPluginModel } from '@lib/backend/server/utils/Server/plugins/plugins.models';
import { initialize as initializeBackend } from '@lib/backend/setup/utils/initialize/initialize';
import { serverConfig as configBase } from '@lib/config/node/server/server.base';
import { GRAPHQL } from '@lib/shared/graphql/graphql.constants';
import { HTTP_METHOD } from '@lib/shared/http/http.constants';
import { logger } from '@lib/shared/logging/utils/Logger/Logger';

import { apiConfig } from './api';
import { databaseConfig } from './database';
import { graphqlConfig } from './graphql';

let serverConfig = configBase;

serverConfig = serverConfig.extend(() => {
  return {
    api: apiConfig.params(),

    onInitialize: async () => {
      await initializeBackend({ database: () => databaseConfig.params() });
    },

    plugins: [
      [
        graphqlPlugin,
        {
          config: graphqlConfig.params(),
          logger,
          method: [HTTP_METHOD.GET, HTTP_METHOD.POST, HTTP_METHOD.OPTIONS],
          pathname: GRAPHQL,
        },
      ],
    ] as Array<[ServerPluginModel<unknown>, unknown]>,
  };
});

export { serverConfig };
