import { type ServerPluginModel } from '@lib/backend/server/utils/Server/plugins/plugins.models';

export type _CompressPluginModel = ServerPluginModel<{
  threshold?: number;
}>;
