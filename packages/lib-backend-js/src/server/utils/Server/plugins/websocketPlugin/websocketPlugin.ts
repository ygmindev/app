import websocket from '@fastify/websocket';
import { type WebsocketPluginModel } from '@lib/backend/server/utils/Server/plugins/websocketPlugin/websocketPlugin.models';

export const websocketPlugin: WebsocketPluginModel = async (app, { maxPayload }) => {
  await app.register(websocket, {
    options: { maxPayload },
  });
};
