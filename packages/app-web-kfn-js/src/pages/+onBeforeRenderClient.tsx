import 'reflect-metadata';

import { onBeforeClient } from '@lib/config/node/framework/onBeforeClient/onBeforeClient';

import { routes } from '../config/routes';

export const onBeforeRenderClient = onBeforeClient({ routes });
