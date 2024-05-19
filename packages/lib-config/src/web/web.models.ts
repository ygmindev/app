import { type BundleConfigModel } from '@lib/config/node/bundle/bundle.models';
import { type ServerConfigModel } from '@lib/config/server/server.models';
import { type RootContextModel } from '@lib/frontend/root/root.models';
import { type DeepKeyModel } from '@lib/shared/core/core.models';
import { type UserConfig } from 'vite';

export type WebConfigModel = Pick<ServerConfigModel, 'certificate'> & {
  // TODO: separate into bundle.js?
  bundleConfig(): BundleConfigModel;

  configFile: string;

  isSsr?: boolean;

  publicPath: string;

  rootId: string;

  ssrContextKeys: Array<DeepKeyModel<RootContextModel>>;
};

export type _WebConfigModel = UserConfig;
