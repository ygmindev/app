import { app, type Cookie } from '@azure/functions';
import { HttpRequest } from '@lib/backend/http/utils/HttpRequest/HttpRequest';
import {
  type _HandlerModel,
  type _HandlerParamsModel,
} from '@lib/backend/web/utils/handler/_handler.models';
import { type HttpMethodModel } from '@lib/shared/http/http.models';
import reduce from 'lodash/reduce';

export const _handler = ({ isStream, name, onRequest }: _HandlerParamsModel): _HandlerModel => {
  isStream && app.setup({ enableHttpStream: true });
  const handler: _HandlerModel = async (request) => {
    const response = await onRequest(
      new HttpRequest({
        body: request.body as ReadableStream,
        headers: Object.fromEntries(request.headers),
        method: request.method as HttpMethodModel,
        query: request.query,
        url: request.url,
      }),
    );
    return {
      body: response.error?.message ?? response.body,
      cookies: reduce(
        response.cookies,
        (result, v, k) => [
          ...result,
          {
            domain: v.options?.domain,
            expires: v.options?.expires,
            httpOnly: v.options?.isHttpOnly,
            maxAge: v.options?.maxAge,
            name: k,
            path: v.options?.path,
            sameSite: v.options?.sameSite,
            secure: v.options?.isSecure,
            value: v.value,
          },
        ],
        [] as Array<Cookie>,
      ),
      headers: response.headers && Object.entries(response.headers),
      status: response.statusCode,
    };
  };
  app.http(name, {
    // TODO: fix auth
    authLevel: 'anonymous',
    handler,
    methods: ['GET', 'POST'],
  });
  return handler;
};
