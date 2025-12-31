import { HttpResponse } from '@lib/backend/http/utils/HttpResponse/HttpResponse';
import { type CookiesModel } from '@lib/frontend/http/utils/cookies/cookies.models';
import { SAME_SITE } from '@lib/shared/http/http.constants';
import { type CookieOptionsModel } from '@lib/shared/http/http.models';
import { LOCALE } from '@lib/shared/locale/locale.constants';
import { ROUTE } from '@lib/shared/route/route.constants';
import { STATE } from '@lib/shared/state/state.constants';
import {
  type _RenderModel,
  type _RenderParamsModel,
} from '@lib/shared/web/utils/render/_render.models';
import { PassThrough } from 'stream';
import { renderPage } from 'vike/server';

export const _render = async (request: _RenderParamsModel): Promise<_RenderModel> => {
  const { url } = request;
  const response = new HttpResponse<ReadableStream>();
  const isClientSide = url.endsWith('.pageContext.json');
  const { errorWhileRendering, httpResponse, redirectTo } = await renderPage({
    context: isClientSide
      ? {
          [LOCALE]: { lang: request.lang },
          [ROUTE]: { location: { pathname: request.url } },
        }
      : {
          [LOCALE]: { i18n: request.i18n, lang: request.lang },
          [ROUTE]: { location: { pathname: request.url } },
          [STATE]: {
            cookies: {
              expire: (key) => void response.setCookie(key, undefined),
              get: <TType extends string = string>(key: string) =>
                (request.cookies?.[key] as TType) ?? null,
              set: <TType extends string = string>(
                key: string,
                value: TType,
                options?: CookieOptionsModel,
              ) =>
                void response.setCookie(key, value, {
                  domain: options?.domain,
                  sameSite: options?.sameSite ?? SAME_SITE.STRICT,
                }),
            } as CookiesModel,
          },
        },
    headersOriginal: request.headers,
    redirectTo: undefined,
    urlOriginal: request.url,
  });

  response.headers = {
    ...response.headers,
    ...httpResponse.headers.reduce((result, v) => ({ ...result, [v[0]]: v[1] }), {}),
    ['Accept-CH']: 'Sec-CH-Prefers-Color-Scheme',
    ['Critical-CH']: 'Sec-CH-Prefers-Color-Scheme',
    Vary: 'Sec-CH-Prefers-Color-Scheme',
  };

  response.redirectTo = redirectTo;
  errorWhileRendering && (response.error = errorWhileRendering as Error);
  const transform = new PassThrough();
  httpResponse.pipe(transform as unknown as WritableStream);
  response.body = transform as unknown as ReadableStream;
  return response;
};
