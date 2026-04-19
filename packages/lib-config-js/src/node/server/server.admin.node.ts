import { apiConfig } from '@lib/config/api/api.admin';
import { graphqlConfig } from '@lib/config/graphql/graphql.admin';
import { serverConfig as configBase } from '@lib/config/node/server/server.node';

export const serverConfig = configBase.extend(() => ({
  api: apiConfig.params(),

  graphqlConfig: graphqlConfig.params(),
}));
