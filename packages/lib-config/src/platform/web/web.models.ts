import type { UserConfig } from 'vite';

import type { ConfigDynamicModel } from '#lib-config/core/core.models';
import type { _BundleConfigModel } from '#lib-config/node/bundle/bundle.models';
import type { RootContextModel } from '#lib-frontend/root/root.models';
import type { DeepKeyModel } from '#lib-shared/core/core.models';

export type WebConfigModel = ConfigDynamicModel<{
  bundleConfig: _BundleConfigModel;

  configFile: string;

  isSsr?: boolean;

  publicDir: string;

  rootId: string;

  ssrContextKeys: Array<DeepKeyModel<RootContextModel>>;
}>;

export type _WebConfigModel = ConfigDynamicModel<UserConfig>;
