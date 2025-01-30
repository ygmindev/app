import { type FileConfigModel } from '@lib/config/file/file.models';
import { type BundleConfigModel } from '@lib/config/node/bundle/bundle.models';
import { type ServerConfigModel } from '@lib/config/node/server/server.models';
import { type RootContextModel } from '@lib/frontend/root/root.models';
import { type DeepKeyModel } from '@lib/shared/core/core.models';
import { type UserConfig } from 'vite';

export type WebConfigModel = Pick<FileConfigModel, 'publicDir'> & {
  // TODO: separate into bundle.js?
  bundle: BundleConfigModel;

  isSsr?: boolean;

  rootId: string;

  server: ServerConfigModel;

  ssrContextKeys: Array<DeepKeyModel<RootContextModel>>;
};

export type _WebConfigModel = UserConfig;
