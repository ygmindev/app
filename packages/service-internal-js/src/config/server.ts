import { graphqlPlugin } from '@lib/backend/server/utils/Server/plugins/graphqlPlugin/graphqlPlugin';
import { type ServerPluginModel } from '@lib/backend/server/utils/Server/plugins/plugins.models';
import { serverConfig as configBase } from '@lib/config/node/server/server.node';
import { GRAPHQL } from '@lib/shared/graphql/graphql.constants';
import { HTTP_METHOD } from '@lib/shared/http/http.constants';
import { logger } from '@lib/shared/logging/utils/Logger/Logger';

import { apiConfig } from './api';
import { graphqlConfig } from './graphql';

export const serverConfig = configBase.extend(() => {
  return {
    api: apiConfig.params(),

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
