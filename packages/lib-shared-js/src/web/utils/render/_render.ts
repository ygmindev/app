import { HttpError } from '@lib/shared/http/errors/HttpError/HttpError';
import { HTTP_STATUS_CODE } from '@lib/shared/http/http.constants';
import { ROUTE } from '@lib/shared/route/route.constants';
import {
  type _RenderModel,
  type _RenderParamsModel,
} from '@lib/shared/web/utils/render/_render.models';
import { renderPage } from 'vike/server';

export const _render = async ({ context, headers }: _RenderParamsModel): Promise<_RenderModel> => {
  const { errorWhileRendering, httpResponse, redirectTo } = await renderPage({
    context,
    headersOriginal: headers,
    redirectTo: undefined,
    urlOriginal: context?.[ROUTE]?.location?.pathname ?? '',
  });

  const error = errorWhileRendering
    ? new HttpError(
        (errorWhileRendering as HttpError).statusCode ?? HTTP_STATUS_CODE.INTERNAL_SERVER_ERROR,
        (errorWhileRendering as Error).message,
        (errorWhileRendering as Error).stack,
      )
    : undefined;
  return {
    error,
    headers: httpResponse.headers,
    pipeStream: (stream) => httpResponse.pipe(stream),
    redirectTo,
    statusCode: redirectTo
      ? HTTP_STATUS_CODE.REDIRECT
      : (error?.statusCode ?? httpResponse.statusCode),
  };
};
