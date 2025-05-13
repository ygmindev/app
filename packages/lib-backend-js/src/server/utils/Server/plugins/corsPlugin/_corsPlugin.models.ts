import { type ServerPluginModel } from '@lib/backend/server/utils/Server/plugins/plugins.models';

export type _CorsPluginModel = ServerPluginModel<{
  headers?: Array<string>;
  origins: Array<string | RegExp>;
}>;
