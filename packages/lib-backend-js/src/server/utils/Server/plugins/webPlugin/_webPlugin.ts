import { type _WebPluginModel } from '@lib/backend/server/utils/Server/plugins/webPlugin/_webPlugin.models';
import { API_ENDPOINT_TYPE } from '@lib/config/api/api.constants';
import { _bundle } from '@lib/config/node/bundle/_bundle';
import { HTTP_METHOD } from '@lib/shared/http/http.constants';
import { render } from '@lib/shared/web/utils/render/render';
import { createDevMiddleware } from 'vike/server';

export const _webPlugin: _WebPluginModel = async (server, { config, root, subdomain }) => {
  if (
    (process.env.NODE_ENV === 'development' || process.env.NODE_ENV === 'test') &&
    !process.env.NODE_RUNTIME
  ) {
    const { devMiddleware } = await createDevMiddleware({
      root,
      viteConfig: { configFile: false, ..._bundle(config) },
    });
    server._app.use((req, res, next) => {
      const host = req.headers.host ?? '';
      const [v] = host.split('.');
      v === subdomain ? devMiddleware(req, res, next) : next();
    });
  }

  await server.register<ReadableStream, ReadableStream>({
    handler: async (request) => render(request),
    method: HTTP_METHOD.GET,
    pathname: '*',
    subdomain,
    type: API_ENDPOINT_TYPE.REST,
  });
};
