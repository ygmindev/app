import { type FrameworkRenderParamsModel } from '@lib/config/node/framework/framework.models';
import { onBeforeClient } from '@lib/config/node/framework/onBeforeClient';
import type { PageContextClient } from 'vike/types';

import { routes } from '../config/routes';

export const onBeforeRenderClient = async (
  params: PageContextClient & FrameworkRenderParamsModel,
): Promise<void> => {
  params.routes = routes;
  params.context = (await onBeforeClient(params)).context;
};
