import { type WritableStream } from 'node:stream/web';

import { renderPage } from 'vite-plugin-ssr/server';

import {
  type _RenderModel,
  type _RenderParamsModel,
} from '#lib-platform/web/utils/render/_render.models';

export const _render = async ({ context }: _RenderParamsModel): Promise<_RenderModel> => {
  const { errorWhileRendering, httpResponse, redirectTo } = await renderPage({
    context,
    redirectTo: undefined,
    urlOriginal: context?.route?.location?.pathname,
  });
  return {
    error: errorWhileRendering as Error,
    redirect: redirectTo,
    response: httpResponse
      ? {
          contentType: httpResponse.contentType,
          pipeStream: (stream) => httpResponse.pipe(stream as unknown as WritableStream),
          statusCode: httpResponse.statusCode,
        }
      : undefined,
  };
};
