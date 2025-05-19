import { fastifyMiddie } from '@fastify/middie';
import { type _WebPluginModel } from '@lib/backend/server/utils/Server/plugins/webPlugin/_webPlugin.models';
import { API_ENDPOINT_TYPE } from '@lib/config/api/api.constants';
import { _web } from '@lib/config/node/web/_web';
import { HTTP_METHOD } from '@lib/shared/http/http.constants';
import { render } from '@lib/shared/web/utils/render/render';
import { createDevMiddleware } from 'vike/server';

export const _webPlugin: _WebPluginModel = async (server, { config, root }) => {
  await server._app.register(fastifyMiddie);
  if (process.env.NODE_ENV === 'development') {
    const { devMiddleware } = await createDevMiddleware({
      root,
      viteConfig: { configFile: false, ..._web(config) },
    });
    server._app.use(devMiddleware);
  }

  await server.register<ReadableStream, ReadableStream>({
    handler: async (request) => render(request),
    method: HTTP_METHOD.GET,
    pathname: '*',
    prefix: '',
    type: API_ENDPOINT_TYPE.REST,
  });
};
