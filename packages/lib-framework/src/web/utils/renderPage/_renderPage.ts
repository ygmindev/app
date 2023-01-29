import type {
  _RenderPageModel,
  _RenderPageParamsModel,
} from '@lib/framework/web/utils/renderPage/_renderPage.models';
import { renderPage } from 'vite-plugin-ssr';

export const _renderPage = async ({
  locale,
  url,
}: _RenderPageParamsModel): Promise<_RenderPageModel> => {
  const { errorWhileRendering, httpResponse, redirectTo } = await renderPage({
    locale: { i18n: locale?.i18n, lang: locale?.language },
    redirectTo: undefined,
    urlOriginal: url,
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
