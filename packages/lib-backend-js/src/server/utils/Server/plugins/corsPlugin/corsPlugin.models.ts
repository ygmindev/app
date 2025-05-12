import { type _ServerPluginModel } from '@lib/backend/server/utils/Server/plugins/plugins.models';

export type CorsPluginModel = _ServerPluginModel<{
  headers?: Array<string>;
  origins: Array<string | RegExp>;
}>;
