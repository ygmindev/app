import cors from '@fastify/cors';
import { type CorsPluginModel } from '@lib/backend/server/utils/Server/plugins/corsPlugin/corsPlugin.models';

export const corsPlugin: CorsPluginModel = async (app, { headers, origins }) => {
  await app.register(cors, {
    allowedHeaders: headers,
    origin: origins,
  });
};
