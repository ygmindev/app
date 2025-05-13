import cors from '@fastify/cors';
import { type _CorsPluginModel } from '@lib/backend/server/utils/Server/plugins/corsPlugin/_corsPlugin.models';

export const _corsPlugin: _CorsPluginModel = async (server, { headers, origins }) => {
  await server._app.register(cors, {
    allowedHeaders: headers,
    origin: origins,
  });
};
