import { type FrameworkRenderParamsModel } from '@lib/config/node/framework/framework.models';
import { onBeforeServer } from '@lib/config/node/framework/onBeforeServer';
import type { PageContextServer } from 'vike/types';

import { databaseConfig } from '../config/database';
import { routes } from '../config/routes';

export const onBeforeRenderHtml = async (
  params: PageContextServer & FrameworkRenderParamsModel,
): Promise<void> => {
  params.routes = routes;
  params.database = () => databaseConfig.params();
  params.context = (await onBeforeServer(params)).context;
};
