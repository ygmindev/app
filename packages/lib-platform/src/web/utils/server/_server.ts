import { fastifyCompress } from '@fastify/compress';
import type { FastifyCookieOptions } from '@fastify/cookie';
import { fastifyCookie } from '@fastify/cookie';
import { fastifyMiddie } from '@fastify/middie';
import { fastifyStatic } from '@fastify/static';
import { fromStatic } from '@lib/backend/file/utils/fromStatic/fromStatic';
import webConfig from '@lib/config/platform/web/web';
import _internationalizeConfig from '@lib/config/locale/internationalize/_internationalize';
import { renderPage } from 'packages/lib-platform/src/web/utils/renderPage/renderPage';
import type {
  _ServerModel,
  _ServerParamsModel,
} from '@lib/platformlatform/src/web/utils/server/_server.models';
import type { CookieOptionModel } from '@lib/frontend/state/state.models';
import { LOCALE } from '@lib/shared/locale/locale.constants';
import { ROUTE } from '@lib/shared/route/route.constants';
import { STATE } from '@lib/shared/state/state.constants';
import type { FastifyPluginCallback, FastifyRegisterOptions } from 'fastify';
import { fastify } from 'fastify';
import i18nextMiddleware from 'i18next-http-middleware';
import toNumber from 'lodash/toNumber';
import { createServer } from 'vite';

export const _server = async ({
  config,
  port,
  root,
}: _ServerParamsModel): Promise<_ServerModel> => {
  const _i18n = await _internationalizeConfig();
  const app = fastify();
  await app.register(fastifyMiddie);
  await app.register(fastifyCompress);
  await app.register(fastifyStatic, {
    prefix: `/${webConfig.publicDir}/`,
    root: fromStatic(webConfig.publicDir),
  });
  await app.register(fastifyCookie, {
    secret: process.env.SERVER_APP_SECRET,
  } as FastifyCookieOptions);

  if (config) {
    const { middlewares } = await createServer({
      ...config,
      root,
      server: { middlewareMode: true },
    });

    app.use(middlewares);
  }

  app.register(
    i18nextMiddleware.plugin as unknown as FastifyPluginCallback,
    { i18next: _i18n } as FastifyRegisterOptions<Record<never, never>>,
  );

  app.get('*', async (req, res) => {
    const { error, redirect, response } = await renderPage({
      context: {
        [LOCALE]: { i18n: req.i18n, lang: req.language },
        [ROUTE]: { location: { pathname: req.url } },
        [STATE]: {
          cookies: {
            expire: (key) => res.clearCookie(key),
            get: <TType extends string = string>(key: string) =>
              (req.cookies[key] as TType) || null,
            set: <TType extends string = string>(
              key: string,
              value: TType,
              options?: CookieOptionModel,
            ) => res.setCookie(key, value, { domain: options?.domain, sameSite: 'strict' }),
          },
        },
      },
    });

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
