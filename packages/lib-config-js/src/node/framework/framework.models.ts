import 'vike-react/Config';

import { type FCModel } from '@lib/frontend/core/core.models';
import { type RootContextPropsModel } from '@lib/frontend/root/root.models';
import { type RouteModel } from '@lib/frontend/route/route.models';
import { type UriModel } from '@lib/shared/route/route.models';
import { type ReactElement } from 'react';
import { type Config } from 'vike/types';

export type FrameworkConfigModel = {
  assetsUri?: UriModel;
  faviconDir?: string;
  onAfterServer?(params: FrameworkRenderParamsModel): Promise<FrameworkRenderParamsModel>;
  onBeforeClient?(params: FrameworkRenderParamsModel): Promise<FrameworkRenderParamsModel>;
  onBeforeServer?(params: FrameworkRenderParamsModel): Promise<FrameworkRenderParamsModel>;
};

export type FrameworkRenderParamsModel = RootContextPropsModel & {
  Page?: FCModel;
  enableEagerStreaming?: boolean;
  getStyleSheet?(): ReactElement;
  redirectTo?: string;
  routes?: Array<RouteModel>;
};

export type _FrameworkConfigModel = Config & Vike.Config;
