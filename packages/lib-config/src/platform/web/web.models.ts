import { type UserConfig } from 'vite-plugin-ssr/plugin';

import {
  type _BundleConfigModel,
  type BundleConfigModel,
} from '#lib-config/node/bundle/bundle.models';
import { type RootContextModel } from '#lib-frontend/root/root.models';
import {
  type DeepKeyModel,
  type OptionalCallableModel,
  type PartialDeepModel,
} from '#lib-shared/core/core.models';

export type WebConfigModel = {
  bundleConfig: OptionalCallableModel<_BundleConfigModel, PartialDeepModel<BundleConfigModel>>;

  configFile: string;

  isSsr?: boolean;

  publicDir: string;

  rootId: string;

  ssrContextKeys: Array<DeepKeyModel<RootContextModel>>;
};

export type _WebConfigModel = UserConfig;
