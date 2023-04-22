import type { RootContextModel } from '@lib/frontend/root/root.models';
import type { DeepKeyModel } from '@lib/shared/core/core.models';

export interface _WebConfigParamsModel {
  configFile: string;
  isReact?: boolean;
  isSsr?: boolean;
  publicDir: string;
  rootId: string;
  ssrContextKeys?: Array<DeepKeyModel<RootContextModel>>;
}
