import { onBeforeServer } from '@lib/config/node/framework/onBeforeServer/onBeforeServer';

import { databaseConfig } from '../config/database';
import { routes } from '../config/routes';

export const onBeforeRenderHtml = onBeforeServer({
  database: () => databaseConfig.params(),
  routes,
});
