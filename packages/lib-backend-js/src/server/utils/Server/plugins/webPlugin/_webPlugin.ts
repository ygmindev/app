import { fastifyMiddie } from '@fastify/middie';
import { type _WebPluginModel } from '@lib/backend/server/utils/Server/plugins/webPlugin/_webPlugin.models';
import { _web } from '@lib/config/node/web/_web';
import { createDevMiddleware } from 'vike/server';

export const _webPlugin: _WebPluginModel = async (server, { config, root }) => {
  await server._app.register(fastifyMiddie);
  const { devMiddleware } = await createDevMiddleware({
    root,
    viteConfig: { configFile: false, ..._web(config) },
  });
  server._app.use(devMiddleware);
};
