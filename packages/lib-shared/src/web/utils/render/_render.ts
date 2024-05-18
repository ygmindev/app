import { type WritableStream } from 'node:stream/web';

import {
  type _RenderModel,
  type _RenderParamsModel,
} from '@lib/shared/web/utils/render/_render.models';
import { renderPage } from 'vike/server';

export const _render = async ({ context }: _RenderParamsModel): Promise<_RenderModel> => {
  const { errorWhileRendering, httpResponse, redirectTo } = await renderPage({
    context,
    redirectTo: undefined,
    urlOriginal: context?.route?.location?.pathname ?? '',
  });
  return {
    error: errorWhileRendering as Error,
    redirectTo,
    response: httpResponse
      ? {
          headers: httpResponse.headers,
          pipeStream: (stream) => httpResponse.pipe(stream as unknown as WritableStream),
          statusCode: httpResponse.statusCode,
        }
      : undefined,
  };
};
