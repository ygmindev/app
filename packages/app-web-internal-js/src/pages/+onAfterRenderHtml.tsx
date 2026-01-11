import { onAfterServer } from '@lib/config/node/framework/onAfterServer/onAfterServer';

import { routes } from '../config/routes';

export const onAfterRenderHtml = onAfterServer({ routes });
