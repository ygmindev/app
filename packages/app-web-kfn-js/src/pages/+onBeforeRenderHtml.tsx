import 'reflect-metadata';

import { onBeforeServer } from '@lib/config/node/framework/onBeforeServer/onBeforeServer';

import { databaseConfig } from '../config/database';
import { graphqlConfig } from '../config/graphql';
import { routes } from '../config/routes';

export const onBeforeRenderHtml = onBeforeServer({
  database: () => databaseConfig.params(),
  graphql: () => graphqlConfig.params(),
  routes,
});
