import { type ServerPluginModel } from '@lib/backend/server/utils/Server/plugins/plugins.models';
import { type BundleConfigModel } from '@lib/config/node/bundle/bundle.models';

export type _WebPluginModel = ServerPluginModel<{
  config: BundleConfigModel;
  root: string;
  threshold?: number;
}>;
