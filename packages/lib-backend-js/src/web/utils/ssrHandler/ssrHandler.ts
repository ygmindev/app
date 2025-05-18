import { type HttpCookiesModel } from '@lib/backend/http/http.models';
import { handler } from '@lib/backend/web/utils/handler/handler';
import {
  type SsrHandlerModel,
  type SsrHandlerParamsModel,
} from '@lib/backend/web/utils/ssrHandler/ssrHandler.models';
import { _internationalize } from '@lib/config/locale/internationalize/_internationalize';
import { config as internationalizeConfig } from '@lib/config/locale/internationalize/internationalize';
import { type CookieOptionsModel } from '@lib/shared/http/http.models';
import { LOCALE } from '@lib/shared/locale/locale.constants';
import { ROUTE } from '@lib/shared/route/route.constants';
import { STATE } from '@lib/shared/state/state.constants';
import { render } from '@lib/shared/web/utils/render/render';
import { PassThrough } from 'stream';

export const ssrHandler = (
  { internationalize }: SsrHandlerParamsModel = {
    internationalize: internationalizeConfig.params(),
  },
): SsrHandlerModel => {
  const i18n = _internationalize(internationalize);
  return handler({
    name: 'ssr',
    onRequest: async (request) => {
      const cookies: HttpCookiesModel = {};
      const lang = request.headers?.['accept-language'] ?? 'en';
      const { pipeStream, response } = await render({
        context: {
          [LOCALE]: { i18n, lang },
          [ROUTE]: { location: { pathname: request.url } },
          [STATE]: {
            cookies: {
              expire: (key) => delete cookies[key],
              get: <TType extends string = string>(key: string) =>
                (cookies[key]?.value as TType) || null,
              set: <TType extends string = string>(
                key: string,
                value: TType,
                options?: CookieOptionsModel,
              ) => (cookies[key] = { options, value }),
            },
          },
        },
        headers: request.headers,
      });
      const transform = new PassThrough();
      pipeStream(transform as unknown as WritableStream);
      response.body = transform as unknown as ReadableStream;
      response.cookies = cookies;
      return response;
    },
  });
};
