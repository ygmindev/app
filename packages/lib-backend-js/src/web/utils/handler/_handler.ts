import { app, type Cookie } from '@azure/functions';
import { HttpRequest } from '@lib/backend/http/utils/HttpRequest/HttpRequest';
import {
  type _HandlerModel,
  type _HandlerParamsModel,
} from '@lib/backend/web/utils/handler/_handler.models';
import { type HTTP_METHOD } from '@lib/shared/http/http.constants';
import reduce from 'lodash/reduce';

export const _handler = ({ isStream, name, onRequest }: _HandlerParamsModel): _HandlerModel => {
  isStream && app.setup({ enableHttpStream: true });
  const handler: _HandlerModel = async (request) => {
    const response = await onRequest(
      new HttpRequest({
        body: request.body as ReadableStream,
        headers: Object.fromEntries(request.headers),
        method: request.method as HTTP_METHOD,
        query: request.query,
        url: `/${request.params.path}`,
      }),
    );
    return {
      body: response.error?.message ?? response.body,
      cookies: reduce(
        response.cookies,
        (result, v, k) => [...result, { name: k, value: v }],
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
    route: '{*path}',
  });
  return handler;
};
