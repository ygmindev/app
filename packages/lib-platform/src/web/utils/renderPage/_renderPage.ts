import { type WritableStream } from 'node:stream/web';

import { renderPage } from 'vite-plugin-ssr/server';

import {
  type _RenderPageModel,
  type _RenderPageParamsModel,
} from '#lib-platform/web/utils/renderPage/_renderPage.models';

export const _renderPage = async ({ context }: _RenderPageParamsModel): _RenderPageModel => {
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
