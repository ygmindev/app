import { app, type HttpResponse, type HttpResponseInit } from '@azure/functions';
import {
  type _HandlerModel,
  type _HandlerParamsModel,
} from '@lib/backend/web/utils/handler/_handler.models';
import { type HttpError } from '@lib/shared/http/errors/HttpError/HttpError';
import { HTTP_STATUS_CODE } from '@lib/shared/http/http.constants';
import { type HttpMethodModel } from '@lib/shared/http/http.models';

export const _handler = ({ isStream, onRequest }: _HandlerParamsModel): _HandlerModel => {
  isStream && app.setup({ enableHttpStream: true });
  return {
    handle: async (request) => {
      const { body, cookies, error, headers, redirectTo, statusCode } = await onRequest({
        body: request.body as ReadableStream,
        headers: {
          entries: () => Array.from(request.headers.entries()),
          get: (key) => request.headers.get(key),
        },
        method: request.method as HttpMethodModel,
        query: request.query,
        url: request.url,
      });
      redirectTo && headers?.push(['location', redirectTo]);
      const response: HttpResponse | HttpResponseInit = {
        body: error ? error.message : body,
        headers,
        status: redirectTo
          ? HTTP_STATUS_CODE.REDIRECT
          : error
            ? ((error as HttpError).statusCode ?? HTTP_STATUS_CODE.INTERNAL_SERVER_ERROR)
            : statusCode,
      };
      cookies &&
        (response.cookies = cookies.map(({ key, options, value }) => ({
          domain: options?.domain,
          expires: options?.expires,
          httpOnly: options?.isHttpOnly,
          maxAge: options?.maxAge,
          name: key,
          path: options?.path,
          sameSite: options?.sameSite,
          secure: options?.isSecure,
          value,
        })));
      return response;
    },
  };
};
