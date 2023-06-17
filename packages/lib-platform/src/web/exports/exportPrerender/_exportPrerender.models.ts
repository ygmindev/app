import type { PageContextBuiltIn } from 'vite-plugin-ssr/types';

import type { ExportRenderServerRenderParamsModel } from '#lib-platform/web/exports/exportRendererServer/exportRendererServer.models';

export type _ExportPrerenderParamsModel = Record<string, never>;

export type _ExportPrerenderModel = {
  prerender(params: { pageContexts: Array<PageContextBuiltIn> }): Promise<{
    prerenderContext: { pageContexts: Array<_PageContextModel> };
  }>;
};

export type _PageContextModel = Pick<PageContextBuiltIn, 'urlOriginal'> &
  ExportRenderServerRenderParamsModel;
