import { fastifyCompress } from '@fastify/compress';
import { type CookieSerializeOptions, type FastifyCookieOptions } from '@fastify/cookie';
import { fastifyCookie } from '@fastify/cookie';
import { createError } from '@fastify/error';
import { fastifyMiddie } from '@fastify/middie';
import { fastifyStatic } from '@fastify/static';
import { joinPaths } from '@lib/backend/file/utils/joinPaths/joinPaths';
import { _internationalize } from '@lib/config/locale/internationalize/_internationalize';
import { _web } from '@lib/config/node/web/_web';
import { HTTP_STATUS_CODE, SAME_SITE } from '@lib/shared/http/http.constants';
import { type CookieOptionsModel } from '@lib/shared/http/http.models';
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
import { createDevMiddleware } from 'vike/server';

export const _runServer = async ({
  assetsPathname,
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

  publicDir &&
    assetsPathname &&
    (await app.register(fastifyStatic, { prefix: `/${publicDir}/`, root: assetsPathname }));

  await app.register(fastifyCookie, {
    secret: process.env.SERVER_APP_SECRET,
  } as FastifyCookieOptions);

  const { devMiddleware } = await createDevMiddleware({
    root,
    viteConfig: { configFile: false, ..._web(web) },
  });
  await app.use(devMiddleware);

  await app.register(
    i18nextMiddleware as unknown as FastifyPluginCallback,
    { i18next: i18n } as FastifyRegisterOptions<Record<never, never>>,
  );

  app.get('*', async (req, res) => {
    const { cookies, i18n, language } = req;
    const url = req.originalUrl ?? req.url;

    logger.info(req.method, url);

    const { error, headers, pipeStream, redirectTo, statusCode } = await render({
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
              options?: CookieOptionsModel,
            ) =>
              void res.setCookie(key, value, {
                domain: options?.domain,
                sameSite: (
                  options?.sameSite ?? SAME_SITE.STRICT
                ).toLowerCase() as CookieSerializeOptions['sameSite'],
              }),
          },
        },
      },
      headers: req.headers ? (Object.entries(req.headers) as Array<[string, string]>) : undefined,
    });

    if (error) {
      const ErrorResponse = createError(
        `${error.statusCode ?? HTTP_STATUS_CODE.INTERNAL_SERVER_ERROR}`,
        error.message,
        error.statusCode,
      );
      throw new ErrorResponse();
    } else if (redirectTo) {
      await res.redirect(redirectTo, HTTP_STATUS_CODE.REDIRECT);
    } else {
      void res.status(statusCode);
      headers.forEach(([name, value]) => res.raw.setHeader(name, value));
      pipeStream(res.raw as unknown as WritableStream);
    }
  });

  try {
    await app.listen({ port: toNumber(port) });
    onStart();
  } catch (e) {
    e && logger.error(e as Error);
  }
};
