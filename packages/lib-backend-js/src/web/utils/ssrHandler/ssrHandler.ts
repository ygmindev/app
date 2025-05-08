import { Cookies } from '@lib/backend/http/utils/Cookies/Cookies';
import { type CookiesOptionModel } from '@lib/backend/http/utils/Cookies/Cookies.models';
import { handler } from '@lib/backend/web/utils/handler/handler';
import {
  type SsrHandlerModel,
  type SsrHandlerParamsModel,
} from '@lib/backend/web/utils/ssrHandler/ssrHandler.models';
import { _internationalize } from '@lib/config/locale/internationalize/_internationalize';
import { type HttpError } from '@lib/shared/http/errors/HttpError/HttpError';
import { HTTP_STATUS_CODE } from '@lib/shared/http/http.constants';
import { LOCALE } from '@lib/shared/locale/locale.constants';
import { ROUTE } from '@lib/shared/route/route.constants';
import { STATE } from '@lib/shared/state/state.constants';
import { render } from '@lib/shared/web/utils/render/render';

export const ssrHandler = ({ internationalize }: SsrHandlerParamsModel): SsrHandlerModel => {
  const i18n = _internationalize(internationalize);
  return handler({
    onRequest: async (req, res) => {
      const cookies = new Cookies({ req, res });
      const { headers, url } = req;
      const lang = headers.get('accept-language') ?? 'en';
      const { error, redirectTo, response } = await render({
        context: {
          [LOCALE]: { i18n, lang },
          [ROUTE]: { location: { pathname: url } },
          [STATE]: {
            cookies: {
              expire: (key) => cookies.expire(key),
              get: <TType extends string = string>(key: string) => cookies.get<TType>(key),
              set: <TType extends string = string>(
                key: string,
                value: TType,
                options?: CookiesOptionModel,
              ) => cookies.set(key, value, options),
            },
          },
        },
        headers: req.headers,
      });

      if (error) {
        return new Response(error.message, {
          status: (error as HttpError).statusCode ?? HTTP_STATUS_CODE.INTERNAL_SERVER_ERROR,
        });
      }

      const { readable, writable } = new TransformStream();
      response?.pipeStream(writable);
      return new Response(readable);
    },
  });
};
