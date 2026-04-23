import { graphqlConfig } from '@lib/config/graphql/graphql.main';
import { serverConfig as configBase } from '@lib/config/node/server/server.web';

export const serverConfig = configBase.extend(() => ({
  graphqlConfig: graphqlConfig.params(),
}));
