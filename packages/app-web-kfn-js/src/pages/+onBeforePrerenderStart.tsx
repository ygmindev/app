import { onBeforePrerender } from '@lib/config/node/framework/onBeforePrerender/onBeforePrerender';

import { databaseConfig } from '../config/database';
import { routes } from '../config/routes';

export const onBeforePrerenderStart = onBeforePrerender({
  database: () => databaseConfig.params(),
  routes,
});
