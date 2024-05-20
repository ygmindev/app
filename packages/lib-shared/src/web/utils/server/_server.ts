import { fastifyCompress } from '@fastify/compress';
import { type FastifyCookieOptions } from '@fastify/cookie';
import { fastifyCookie } from '@fastify/cookie';
import { fastifyMiddie } from '@fastify/middie';
import { fastifyStatic } from '@fastify/static';
import { fromStatic } from '@lib/backend/file/utils/fromStatic/fromStatic';
import { joinPaths } from '@lib/backend/file/utils/joinPaths/joinPaths';
import { _config as internationalizeConfig } from '@lib/config/locale/internationalize/internationalize.server';
import { _config as webConfig } from '@lib/config/web/web';
import { WEB_CONFIG } from '@lib/config/web/web.constants';
import { type CookieOptionModel } from '@lib/frontend/state/state.models';
import { LOCALE } from '@lib/shared/locale/locale.constants';
import { type I18nModel } from '@lib/shared/locale/locale.models';
import { info } from '@lib/shared/logging/utils/logger/logger';
import { ROUTE } from '@lib/shared/route/route.constants';
import { STATE } from '@lib/shared/state/state.constants';
import { render } from '@lib/shared/web/utils/render/render';
import {
  type _ServerModel,
  type _ServerParamsModel,
} from '@lib/shared/web/utils/server/_server.models';
import { fastify, type FastifyPluginCallback, type FastifyRegisterOptions } from 'fastify';
import { readFileSync } from 'fs';
import { type SecureServerOptions } from 'http2';
import { plugin as i18nextMiddleware } from 'i18next-http-middleware';
import toNumber from 'lodash/toNumber';
import { createServer } from 'vite';

export const _server = async ({
  certificate,
  host,
  onError,
  onStart,
  port,
  root,
}: _ServerParamsModel): Promise<_ServerModel> => {
  const { publicPath } = WEB_CONFIG;
  const webConfigF = webConfig();
  const internationalizeConfigF = internationalizeConfig();

  const { certificateDir, privateKeyFile, publicKeyFile } = certificate;
  const app = fastify({
    https: {
      cert: readFileSync(joinPaths([certificateDir, publicKeyFile])),
      key: readFileSync(joinPaths([certificateDir, privateKeyFile])),
    } as SecureServerOptions,
  });
  await app.register(fastifyMiddie);
  await app.register(fastifyCompress);
  await app.register(fastifyStatic, { prefix: `/${publicPath}/`, root: fromStatic(publicPath) });
  await app.register(fastifyCookie, {
    secret: process.env.SERVER_APP_SECRET,
  } as FastifyCookieOptions);

  const { middlewares } = await createServer({ ...webConfigF, root });
  await app.use(middlewares);

  await app.register(
    i18nextMiddleware as unknown as FastifyPluginCallback,
    { i18next: internationalizeConfigF } as FastifyRegisterOptions<Record<never, never>>,
  );

  app.get('*', async (req, res) => {
    info(req.method, req.url);

    const { cookies, i18n, language, url } = req;
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
    e && onError(e as Error);
  }
};
