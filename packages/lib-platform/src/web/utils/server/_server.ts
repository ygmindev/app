import { fastifyCompress } from '@fastify/compress';
import { type FastifyCookieOptions } from '@fastify/cookie';
import { fastifyCookie } from '@fastify/cookie';
import { fastifyMiddie } from '@fastify/middie';
import { fastifyStatic } from '@fastify/static';
import { type FastifyPluginCallback, type FastifyRegisterOptions } from 'fastify';
import { fastify } from 'fastify';
import { plugin as i18nextMiddleware } from 'i18next-http-middleware';
import toNumber from 'lodash/toNumber';
import { createServer } from 'vite';

import { fromStatic } from '#lib-backend/file/utils/fromStatic/fromStatic';
import { _config } from '#lib-config/locale/internationalize/internationalize.server';
import { config as webConfig } from '#lib-config/platform/web/web';
import { type CookieOptionModel } from '#lib-frontend/state/state.models';
import { renderPage } from '#lib-platform/web/utils/renderPage/renderPage';
import {
  type _ServerModel,
  type _ServerParamsModel,
} from '#lib-platform/web/utils/server/_server.models';
import { LOCALE } from '#lib-shared/locale/locale.constants';
import { info } from '#lib-shared/logging/utils/logger/logger';
import { ROUTE } from '#lib-shared/route/route.constants';
import { STATE } from '#lib-shared/state/state.constants';

export const _server = async ({
  config,
  port,
  root,
}: _ServerParamsModel): Promise<_ServerModel> => {
  const { publicPath: publicDir } = webConfig();
  const app = fastify();
  await app.register(fastifyMiddie);
  await app.register(fastifyCompress);
  await app.register(fastifyStatic, { prefix: `/${publicDir}/`, root: fromStatic(publicDir) });
  await app.register(fastifyCookie, {
    secret: process.env.SERVER_APP_SECRET,
  } as FastifyCookieOptions);

  const { middlewares } = await createServer({ ...config, root, server: { middlewareMode: true } });

  await app.use(middlewares);

  await app.register(
    i18nextMiddleware as unknown as FastifyPluginCallback,
    { i18next: _config() } as FastifyRegisterOptions<Record<never, never>>,
  );

  app.get('*', async (req, res) => {
    info(req.method, req.url);

    const { cookies, i18n, language, url } = req;

    const { error, redirect, response } = await renderPage({
      context: {
        [LOCALE]: { i18n, lang: language },
        [ROUTE]: { location: { pathname: url } },
        [STATE]: {
          cookies: {
            expire: (key) => void res.clearCookie(key),
            get: <TType extends string = string>(key: string) => (cookies[key] as TType) || null,
            set: <TType extends string = string>(
              key: string,
              value: TType,
              options?: CookieOptionModel,
            ) => void res.setCookie(key, value, { domain: options?.domain, sameSite: 'strict' }),
          },
        },
      },
    });

    if (redirect) {
      await res.redirect(302, redirect);
    } else if (response) {
      const { contentType, pipeStream, statusCode } = response;
      void res.status(statusCode).type(contentType);
      pipeStream(res.raw);
    } else if (error) {
      // TODO: better error handling
      await res.status(500).send(error);
    }
  });

  await app.listen({ port: toNumber(port) });
};
