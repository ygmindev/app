import { fastifyStatic } from '@fastify/static';
import { type _StaticPluginModel } from '@lib/backend/server/utils/Server/plugins/staticPlugin/_staticPlugin.models';

export const _staticPlugin: _StaticPluginModel = async (server, { assetsPathname, publicDir }) => {
  await server._app.register(fastifyStatic, { prefix: `/${publicDir}/`, root: assetsPathname });
};
