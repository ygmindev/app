import 'vike-react/Config';

import { type FCModel } from '@lib/frontend/core/core.models';
import { type RootContextModel, type RootContextPropsModel } from '@lib/frontend/root/root.models';
import { type RouteModel } from '@lib/frontend/route/route.models';
import { type DeepKeyModel } from '@lib/shared/core/core.models';
import { type UriModel } from '@lib/shared/route/route.models';
import { type ReactElement } from 'react';
import { type Config } from 'vike/types';

export type FrameworkConfigModel = {
  assetsUri?: UriModel;
  faviconDir?: string;
  ssrContextKeys?: Array<DeepKeyModel<RootContextModel>>;
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
