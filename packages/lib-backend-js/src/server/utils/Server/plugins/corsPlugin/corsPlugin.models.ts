import { type ServerPluginModel } from '@lib/backend/server/utils/Server/plugins/plugins.models';

export type CorsPluginModel = ServerPluginModel<{
  headers?: Array<string>;
  origins: Array<string | RegExp>;
}>;
