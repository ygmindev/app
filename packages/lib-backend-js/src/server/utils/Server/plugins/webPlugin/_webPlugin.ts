import { Environment } from '@lib/backend/environment/utils/Environment/Environment';
import { type _WebPluginModel } from '@lib/backend/server/utils/Server/plugins/webPlugin/_webPlugin.models';
import { API_ENDPOINT_TYPE } from '@lib/config/api/api.constants';
import { _bundle } from '@lib/config/node/bundle/_bundle';
import { Container } from '@lib/shared/core/utils/Container/Container';
import { HTTP_METHOD } from '@lib/shared/http/http.constants';
import { render } from '@lib/shared/web/utils/render/render';

export const _webPlugin: _WebPluginModel = async (server, { config, root }) => {
  server._app.use((req, res, next) => {
    if (req.url?.startsWith('/.well-known/')) return next('route');
    next();
  });
  const environment = Container.get(Environment);
  if (
    (process.env.NODE_ENV === 'development' || process.env.NODE_ENV === 'test') &&
    !environment.variables.NODE_RUNTIME
  ) {
    const { createDevMiddleware } = await import('vike/server');
    const { devMiddleware } = await createDevMiddleware({
      root,
      viteConfig: { configFile: false, ..._bundle(config), root },
    });
    server._app.use(devMiddleware);
  }

  await server.register<ReadableStream, ReadableStream>({
    handler: async (request) => render(request),
    method: HTTP_METHOD.GET,
    pathname: '*',
    type: API_ENDPOINT_TYPE.REST,
  });
};
