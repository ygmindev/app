import { config } from '@lib/config/node/framework/framework';
import { type FrameworkRenderParamsModel } from '@lib/config/node/framework/framework.models';
import type { PageContextClient } from 'vike/types';

import { routes } from '../routes';

export const onBeforeRenderClient = async (
  params: PageContextClient & FrameworkRenderParamsModel,
): Promise<void> => {
  params.routes = routes;
  params.context = (await config.params().onBeforeClient?.(params))?.context;
};
