import { onPrerender } from '@lib/config/node/framework/onPrerender/onPrerender';

import { databaseConfig } from '../config/database';

export const onPrerenderStart = onPrerender({ database: () => databaseConfig.params() });
