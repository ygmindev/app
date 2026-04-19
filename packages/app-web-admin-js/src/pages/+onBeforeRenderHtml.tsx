import { onBeforeServer } from '@lib/config/node/framework/onBeforeServer/onBeforeServer';

import { databaseConfig } from '../config/database';
import { graphqlConfig } from '../config/graphql';
import { routesConfig } from '../config/routes';

export const onBeforeRenderHtml = onBeforeServer({
  database: () => databaseConfig.params(),
  graphql: () => graphqlConfig.params(),
  routes: routesConfig.config(),
});
