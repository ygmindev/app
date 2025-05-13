import { type ServerPluginModel } from '@lib/backend/server/utils/Server/plugins/plugins.models';
import { type DatabaseConfigModel } from '@lib/config/database/database.models';

export type DatabasePluginModel = ServerPluginModel<{
  config: DatabaseConfigModel;
}>;
