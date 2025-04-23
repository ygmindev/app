import 'vike-react/Config';

import { type RootContextPropsModel } from '@lib/frontend/root/root.models';
import { type RouteModel } from '@lib/frontend/route/route.models';
import { type Config } from 'vike/types';

export type FrameworkConfigModel = {
  onAfterServer?(params: FrameworkRenderParamsModel): Promise<FrameworkRenderParamsModel>;
  onBeforeClient?(params: FrameworkRenderParamsModel): Promise<FrameworkRenderParamsModel>;
  onBeforeServer?(params: FrameworkRenderParamsModel): Promise<FrameworkRenderParamsModel>;
};

export type FrameworkRenderParamsModel = RootContextPropsModel & {
  enableEagerStreaming?: boolean;
  redirectTo?: string;
  routes?: Array<RouteModel>;
};

export type _FrameworkConfigModel = Config & Vike.Config;
