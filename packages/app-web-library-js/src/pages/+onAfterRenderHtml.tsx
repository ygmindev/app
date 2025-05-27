import { type FrameworkRenderParamsModel } from '@lib/config/node/framework/framework.models';
import { onAfterServer } from '@lib/config/node/framework/onAfterServer';
import { ROUTE } from '@lib/shared/route/route.constants';
import type { PageContextServer } from 'vike/types';
import { useConfig } from 'vike-react/useConfig';

import { routes } from '../routes';

export const onAfterRenderHtml = async (
  params: PageContextServer & FrameworkRenderParamsModel,
): Promise<void> => {
  const config = useConfig();
  params.routes = routes;
  params.context = (await onAfterServer(params)).context;
  params.enableEagerStreaming = true;
  params.redirectTo = params.context?.[ROUTE]?.redirectTo;
  params.getStyleSheet && config({ Head: params.getStyleSheet() });
};
