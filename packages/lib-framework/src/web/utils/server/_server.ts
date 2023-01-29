import compress from '@fastify/compress';
import middie from '@fastify/middie';
import { _internationalizeConfig } from '@lib/config/locale/internationalize/_internationalize.config.node';
import { internationalizeConfig } from '@lib/config/locale/internationalize/configs/internationalize.config';
import { renderPage } from '@lib/framework/web/utils/renderPage/renderPage';
import type {
  _ServerModel,
  _ServerParamsModel,
} from '@lib/framework/web/utils/server/_server.models';
import type { FastifyPluginCallback, FastifyRegisterOptions } from 'fastify';
import { fastify } from 'fastify';
import i18nextMiddleware from 'i18next-http-middleware';
import toNumber from 'lodash/toNumber';
import { createServer } from 'vite';

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
      locale: { i18n: req.i18n, language: req.language },
      url: req.url,
    });
    const { error, redirect, response } = pageContext;

    if (redirect) {
      res.redirect(302, redirect);
    } else if (response) {
      const { contentType, pipeStream, statusCode } = response;
      res.status(statusCode).type(contentType);
      pipeStream(res.raw);
    } else if (error) {
      // TODO: better error handling
      res.status(500).send(error);
    }
  });

  app.listen({ port: toNumber(port) });
};
