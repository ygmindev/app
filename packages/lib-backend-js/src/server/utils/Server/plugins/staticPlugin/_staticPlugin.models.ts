import { type ServerPluginModel } from '@lib/backend/server/utils/Server/plugins/plugins.models';

export type _StaticPluginModel = ServerPluginModel<{
  prefix: string;
  root: string;
}>;
