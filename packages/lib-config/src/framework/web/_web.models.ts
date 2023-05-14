import type { RootContextModel } from '@lib/frontend/root/root.models';
import type { CallablePromiseModel, DeepKeyModel } from '@lib/shared/core/core.models';
import { TaskCliParamsModel } from '@tool/task/core/core.models';
import type { UserConfig } from 'vite';

export interface _WebConfigParamsModel extends TaskCliParamsModel {
  isSsr?: boolean;

  publicDir: string;

  rootId: string;

  ssrContextKeys?: Array<DeepKeyModel<RootContextModel>>;
}

export type _WebConfigModel = CallablePromiseModel<UserConfig>;
