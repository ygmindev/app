import { apiConfig } from '@lib/config/api/api.main';
import { graphqlConfig } from '@lib/config/graphql/graphql.main';
import { serverConfig as configBase } from '@lib/config/node/server/server.node';

export const serverConfig = configBase.extend(() => ({
  api: apiConfig.params(),

  graphqlConfig: graphqlConfig.params(),
}));
