import { config } from '@lib/config/node/framework/framework';
import { type FrameworkRenderParamsModel } from '@lib/config/node/framework/framework.models';
import { ROUTE } from '@lib/shared/route/route.constants';
import type { PageContextServer } from 'vike/types';

import { routes } from '../routes';

export const onAfterRenderHtml = async (
  params: PageContextServer & FrameworkRenderParamsModel,
): Promise<void> => {
  params.routes = routes;
  params.context = (await config.params().onAfterServer?.(params))?.context;
  params.enableEagerStreaming = true;
  params.redirectTo = params.context?.[ROUTE]?.redirectTo;
};
