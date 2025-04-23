import { config } from '@lib/config/node/framework/framework';
import { type FrameworkRenderParamsModel } from '@lib/config/node/framework/framework.models';
import type { PageContextServer } from 'vike/types';

import { routes } from '../routes';

export const onBeforeRenderHtml = async (
  params: PageContextServer & FrameworkRenderParamsModel,
): Promise<void> => {
  params.routes = routes;
  params.context = (await config.params().onBeforeServer?.(params))?.context;
};
