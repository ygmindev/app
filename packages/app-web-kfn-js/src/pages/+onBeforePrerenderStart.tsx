import { onBeforePrerender } from '@lib/config/node/framework/onBeforePrerender/onBeforePrerender';

import { routes } from '../config/routes';

export const onBeforePrerenderStart = onBeforePrerender({ routes });
