import { type _ServerPluginModel } from '@lib/backend/server/utils/Server/plugins/plugins.models';

export type WebsocketPluginModel = _ServerPluginModel<{
  maxPayload?: number;
}>;
