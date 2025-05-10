import { type HttpCookieModel } from '@lib/backend/http/utils/http.models';
import { handler } from '@lib/backend/web/utils/handler/handler';
import {
  type SsrHandlerModel,
  type SsrHandlerParamsModel,
} from '@lib/backend/web/utils/ssrHandler/ssrHandler.models';
import { _internationalize } from '@lib/config/locale/internationalize/_internationalize';
import { isEmpty } from '@lib/shared/core/utils/isEmpty/isEmpty';
import { type CookieOptionsModel } from '@lib/shared/http/http.models';
import { LOCALE } from '@lib/shared/locale/locale.constants';
import { ROUTE } from '@lib/shared/route/route.constants';
import { STATE } from '@lib/shared/state/state.constants';
import { render } from '@lib/shared/web/utils/render/render';
import reduce from 'lodash/reduce';

export const ssrHandler = ({ internationalize }: SsrHandlerParamsModel): SsrHandlerModel => {
  const i18n = _internationalize(internationalize);
  return handler({
    onRequest: async (request) => {
      const cookies: Record<string, Omit<HttpCookieModel, 'key'>> = {};
      const lang = request.headers?.get('accept-language') ?? 'en';
      const { error, headers, redirectTo, statusCode, stream } = await render({
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
        headers: request.headers?.entries(),
      });
      return {
        body: stream,
        cookies: isEmpty(cookies)
          ? undefined
          : reduce(
              cookies,
              (result, v: Omit<HttpCookieModel, 'key'>, k) => [...result, { key: k, ...v }],
              [] as Array<HttpCookieModel>,
            ),
        error,
        headers,
        redirectTo,
        statusCode,
      };
    },
  });
};
