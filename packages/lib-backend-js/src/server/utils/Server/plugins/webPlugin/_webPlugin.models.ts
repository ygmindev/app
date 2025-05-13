import { type ServerPluginModel } from '@lib/backend/server/utils/Server/plugins/plugins.models';
import { type WebConfigModel } from '@lib/config/node/web/web.models';

export type _WebPluginModel = ServerPluginModel<{
  config: WebConfigModel;
  root: string;
  threshold?: number;
}>;
