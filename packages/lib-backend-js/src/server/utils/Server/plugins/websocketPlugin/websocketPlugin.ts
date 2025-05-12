import websocket from '@fastify/websocket';
import { type WebsocketPluginModel } from '@lib/backend/server/utils/Server/plugins/websocketPlugin/websocketPlugin.models';

export const websocketPlugin: WebsocketPluginModel = async (server, { maxPayload }) => {
  await server._app.register(websocket, {
    options: { maxPayload },
  });
};
