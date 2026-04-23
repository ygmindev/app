import { onBeforeClient } from '@lib/config/node/framework/onBeforeClient/onBeforeClient';

import { routesConfig } from '../config/routes';

export const onBeforeRenderClient = onBeforeClient({ routes: routesConfig.config() });
