import { type _BundleConfigModel } from '@lib-config/node/bundle/bundle.models';
import { type RootContextModel } from '@lib-frontend/root/root.models';
import { type DeepKeyModel } from '@lib-shared/core/core.models';
import { type UserConfig } from 'vike/plugin';

export type WebConfigModel = {
  bundleConfig(): _BundleConfigModel;

  configFile: string;

  isSsr?: boolean;

  publicPath: string;

  rootId: string;

  ssrContextKeys: Array<DeepKeyModel<RootContextModel>>;
};

export type _WebConfigModel = UserConfig;
