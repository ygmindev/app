import { type ServerPluginModel } from '@lib/backend/server/utils/Server/plugins/plugins.models';

export type _CookiesPluginModel = ServerPluginModel<{
  secret: string;
}>;
