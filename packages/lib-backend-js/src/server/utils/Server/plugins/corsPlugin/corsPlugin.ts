import cors from '@fastify/cors';
import { type CorsPluginModel } from '@lib/backend/server/utils/Server/plugins/corsPlugin/corsPlugin.models';

export const corsPlugin: CorsPluginModel = async (server, { headers, origins }) => {
  await server._app.register(cors, {
    allowedHeaders: headers,
    origin: origins,
  });
};
