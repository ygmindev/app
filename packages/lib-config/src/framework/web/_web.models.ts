import type { RootContextModel } from '@lib/frontend/root/root.models';
import type { CallablePromiseModel, DeepKeyModel } from '@lib/shared/core/core.models';
import type { RunWithConfigParamsModel } from '@tool/task/core/utils/runWithConfig/runWithConfig.models';
import type { UserConfig } from 'vite';

export type _WebConfigParamsModel = {
  build: RunWithConfigParamsModel<_WebConfigModel>;

  dev: RunWithConfigParamsModel<_WebConfigModel>;

  isSsr?: boolean;

  publicDir: string;

  rootId: string;

  ssrContextKeys?: Array<DeepKeyModel<RootContextModel>>;
};

export type _WebConfigModel = CallablePromiseModel<UserConfig>;
