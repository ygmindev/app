import { fastifyCompress } from '@fastify/compress';
import { type FastifyCookieOptions } from '@fastify/cookie';
import { fastifyCookie } from '@fastify/cookie';
import { fastifyMiddie } from '@fastify/middie';
import { fastifyStatic } from '@fastify/static';
import { fromStatic } from '@lib/backend/file/utils/fromStatic/fromStatic';
import { joinPaths } from '@lib/backend/file/utils/joinPaths/joinPaths';
import { _internationalize } from '@lib/config/locale/internationalize/_internationalize';
import { _web } from '@lib/config/node/web/_web';
import { type CookieOptionModel } from '@lib/frontend/state/state.models';
import { LOCALE } from '@lib/shared/locale/locale.constants';
import { type I18nModel } from '@lib/shared/locale/locale.models';
import { logger } from '@lib/shared/logging/utils/Logger/Logger';
import { ROUTE } from '@lib/shared/route/route.constants';
import { STATE } from '@lib/shared/state/state.constants';
import { render } from '@lib/shared/web/utils/render/render';
import {
  type _RunServerModel,
  type _RunServerParamsModel,
} from '@lib/shared/web/utils/runServer/_runServer.models';
import { fastify, type FastifyPluginCallback, type FastifyRegisterOptions } from 'fastify';
import { readFileSync } from 'fs';
import { type SecureServerOptions } from 'http2';
import { plugin as i18nextMiddleware } from 'i18next-http-middleware';
import toNumber from 'lodash/toNumber';
import { createServer } from 'vite';

export const _runServer = async ({
  certificate,
  host,
  internationalize,
  onStart,
  port,
  publicDir,
  root,
  web,
}: _RunServerParamsModel): Promise<_RunServerModel> => {
  const i18n = _internationalize(internationalize);

  const { certificateDir, privateKeyFilename, publicKeyFilename } = certificate;
  const app = fastify({
    https: {
      cert: readFileSync(joinPaths([certificateDir, publicKeyFilename])),
      key: readFileSync(joinPaths([certificateDir, privateKeyFilename])),
    } as SecureServerOptions,
  });
  await app.register(fastifyMiddie);
  await app.register(fastifyCompress);
  await app.register(fastifyStatic, { prefix: `/${publicDir}/`, root: fromStatic(publicDir) });
  await app.register(fastifyCookie, {
    secret: process.env.SERVER_APP_SECRET,
  } as FastifyCookieOptions);

  const { middlewares } = await createServer({ ..._web(web), root });
  await app.use(middlewares);

  await app.register(
    i18nextMiddleware as unknown as FastifyPluginCallback,
    { i18next: i18n } as FastifyRegisterOptions<Record<never, never>>,
  );

  app.get('*', async (req, res) => {
    const { cookies, i18n, language } = req;
    const url = req.originalUrl ?? req.url;
    logger.info(req.method, url);

    const { error, redirectTo, response } = await render({
      context: {
        [LOCALE]: { i18n: i18n as I18nModel, lang: language },
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

    if (redirectTo) {
      await res.redirect(302, redirectTo);
    } else if (response) {
      const { headers, pipeStream, statusCode } = response;
      void res.status(statusCode);
      headers.forEach(([name, value]) => res.raw.setHeader(name, value));
      pipeStream(res.raw);
    } else if (error) {
      // TODO: better error handling
      await res.status(500).send(error);
    }
  });

  try {
    await app.listen({ port: toNumber(port) });
    onStart();
  } catch (e) {
    e && logger.error(e as Error);
  }
};
