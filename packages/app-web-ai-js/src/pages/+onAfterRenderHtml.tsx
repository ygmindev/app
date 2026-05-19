import { onAfterServer } from '@lib/config/node/framework/onAfterServer/onAfterServer';

import { routesConfig } from '../config/routes';

export const onAfterRenderHtml = onAfterServer({ routes: routesConfig.config() });
