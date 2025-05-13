import { fastifyCompress } from '@fastify/compress';
import { type _CompressPluginModel } from '@lib/backend/server/utils/Server/plugins/compressPlugin/_compressPlugin.models';

export const _compressPlugin: _CompressPluginModel = async (server, { threshold }) => {
  await server._app.register(fastifyCompress, { threshold });
};
