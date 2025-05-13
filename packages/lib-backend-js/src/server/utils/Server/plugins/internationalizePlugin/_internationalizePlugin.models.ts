import { type ServerPluginModel } from '@lib/backend/server/utils/Server/plugins/plugins.models';
import { type InternationalizeConfigModel } from '@lib/config/locale/internationalize/internationalize.models';

export type _InternationalizePluginModel = ServerPluginModel<{
  config: InternationalizeConfigModel;
}>;
