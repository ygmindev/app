import { ConfigDynamicModel, ConfigStaticModel } from '@lib/config/core/core.models';
import type { RootContextModel } from '@lib/frontend/root/root.models';
import type { DeepKeyModel } from '@lib/shared/core/core.models';
import type { RunWithConfigStringParamsModel } from '@tool/task/core/utils/runWithConfig/runWithConfig.models';
import type { UserConfig } from 'vite';

export type WebConfigModel = ConfigStaticModel<{
  build: RunWithConfigStringParamsModel;

  dev: RunWithConfigStringParamsModel;

  isSsr?: boolean;

  publicDir: string;

  rootId: string;

  ssrContextKeys?: Array<DeepKeyModel<RootContextModel>>;
}>;

export type _WebConfigModel = ConfigDynamicModel<UserConfig>;
