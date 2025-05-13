import websocket from '@fastify/websocket';
import { type _WebsocketPluginModel } from '@lib/backend/server/utils/Server/plugins/websocketPlugin/_websocketPlugin.models';

export const _websocketPlugin: _WebsocketPluginModel = async (server, { maxPayload }) => {
  await server._app.register(websocket, {
    options: { maxPayload },
  });
};
