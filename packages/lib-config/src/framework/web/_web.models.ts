import type { RootContextModel } from '@lib/frontend/root/root.models';
import type { CallablePromiseModel, DeepKeyModel } from '@lib/shared/core/core.models';
import type { UserConfig } from 'vite';

export interface _WebConfigParamsModel {
  command: string;

  configFile: string;

  isSsr?: boolean;

  publicDir: string;

  rootId: string;

  ssrContextKeys?: Array<DeepKeyModel<RootContextModel>>;
}

export type _WebConfigModel = CallablePromiseModel<UserConfig>;
