import 'vike-react/Config';

import { type FCModel } from '@lib/frontend/core/core.models';
import { type RootContextPropsModel } from '@lib/frontend/root/root.models';
import { type RouteModel } from '@lib/frontend/route/route.models';
import { type UriModel } from '@lib/shared/route/route.models';
import { type ReactElement, type ReactNode } from 'react';
import { type Config } from 'vike/types';

export type onAfterServerModel = (
  params: FrameworkRenderParamsModel,
) => Promise<FrameworkRenderParamsModel>;

export type onBeforeClientModel = (
  params: FrameworkRenderParamsModel,
) => Promise<FrameworkRenderParamsModel>;

export type onBeforeServerModel = (
  params: FrameworkRenderParamsModel,
) => Promise<FrameworkRenderParamsModel>;

export type onHeaderModel = () => ReactNode;

export type FrameworkConfigModel = {
  assetsUri?: UriModel;
  faviconDir?: string;
  onAfterServer?: onAfterServerModel;
  onBeforeClient?: onBeforeClientModel;
  onBeforeServer?: onBeforeServerModel;
  onHeader?: onHeaderModel;
};

export type FrameworkRenderParamsModel = RootContextPropsModel & {
  Page?: FCModel;
  enableEagerStreaming?: boolean;
  headers?: Record<string, string>;
  redirectTo?: string;
  routes?: Array<RouteModel>;
  getStyleSheet?(): ReactElement;
};

export type _FrameworkConfigModel = Config & Vike.Config;
