import compress from '@fastify/compress';
import middie from '@fastify/middie';
import { _internationalizeConfig } from '@lib/config/locale/internationalize/_internationalize.config.node';
import { internationalizeConfig } from '@lib/config/locale/internationalize/configs/internationalize.config';
import type {
  _ServerModel,
  _ServerParamsModel,
} from '@tool/task/framework/web/utils/server/_server.models';
import type { FastifyPluginCallback, FastifyRegisterOptions } from 'fastify';
import { fastify } from 'fastify';
import i18nextMiddleware from 'i18next-http-middleware';
import { toNumber } from 'lodash';
import { createServer } from 'vite';
import { renderPage } from 'vite-plugin-ssr';

const _i18n = _internationalizeConfig(internationalizeConfig);

export const _server = async ({
  configFile,
  port,
  root,
}: _ServerParamsModel): Promise<_ServerModel> => {
  const app = fastify();
  await app.register(middie);
  await app.register(compress);

  const { middlewares } = await createServer({
    configFile,
    root,
    server: { middlewareMode: true },
  });

  app.use(middlewares);

  app.register(
    i18nextMiddleware.plugin as unknown as FastifyPluginCallback,
    { i18next: _i18n } as FastifyRegisterOptions<Record<never, never>>,
  );

  app.get('*', async (req, res) => {
    const pageContext = await renderPage({
      locale: { i18n: req.i18n, lang: req.language },
      redirectTo: undefined,
      urlOriginal: req.url,
    });
    const { errorWhileRendering, httpResponse, redirectTo } = pageContext;

    if (redirectTo) {
      res.redirect(302, redirectTo);
    } else if (httpResponse) {
      const { contentType, pipe, statusCode } = httpResponse;
      res.status(statusCode).type(contentType);
      pipe(res.raw);
    } else if (errorWhileRendering) {
      // TODO: better error handling
      res.status(500).send(errorWhileRendering);
    }
  });

  app.listen({ port: toNumber(port) });
};
