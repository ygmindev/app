import { type HttpConfigModel } from '@lib/config/http/http/http.models';
import { type BundleConfigModel } from '@lib/config/node/bundle/bundle.models';
import { type RootContextModel } from '@lib/frontend/root/root.models';
import { type DeepKeyModel } from '@lib/shared/core/core.models';
import { type UserConfig } from 'vite';

export type WebConfigModel = {
  // TODO: separate into bundle.js?
  bundleConfig(): BundleConfigModel;

  configFile: string;

  httpConfig(): HttpConfigModel;

  isSsr?: boolean;

  publicPath: string;

  rootId: string;

  ssrContextKeys: Array<DeepKeyModel<RootContextModel>>;
};

export type _WebConfigModel = UserConfig;
