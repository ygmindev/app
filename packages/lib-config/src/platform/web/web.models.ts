import { ConfigDynamicModel } from '@lib/config/core/core.models';
import { _BundleConfigModel } from '@lib/config/node/bundle/bundle.models';
import type { RootContextModel } from '@lib/frontend/root/root.models';
import type { DeepKeyModel } from '@lib/shared/core/core.models';
import type { UserConfig } from 'vite';

export interface WebConfigModel {
  bundleConfig: _BundleConfigModel;

  isSsr?: boolean;

  publicDir: string;

  ssrContextKeys?: Array<DeepKeyModel<RootContextModel>>;
}

export type _WebConfigModel = ConfigDynamicModel<UserConfig>;
