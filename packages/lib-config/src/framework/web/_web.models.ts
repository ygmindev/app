import type { RootContextModel } from '@lib/frontend/root/root.models';
import type { DeepKeyModel } from '@lib/shared/core/core.models';

export interface _WebConfigParamsModel {
  command: string;
  configFile: string;
  isSsr?: boolean;
  publicDir: string;
  rootId: string;
  ssrContextKeys?: Array<DeepKeyModel<RootContextModel>>;
}
