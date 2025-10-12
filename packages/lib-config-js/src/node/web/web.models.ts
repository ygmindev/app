import { type BundleConfigModel } from '@lib/config/node/bundle/bundle.models';
import { type ServerConfigModel } from '@lib/config/node/server/server.models';
import { type RootContextModel } from '@lib/frontend/root/root.models';
import { type DeepKeyModel } from '@lib/shared/core/core.models';
import { type UserConfig } from 'vite';

export type WebConfigModel = {
  // TODO: separate into bundle.js?
  bundle: BundleConfigModel;

  isSsr?: boolean;

  prefix: string;

  rootId: string;

  server: ServerConfigModel;

  ssrContextKeys: Array<DeepKeyModel<RootContextModel>>;
};

export type _WebConfigModel = UserConfig;
