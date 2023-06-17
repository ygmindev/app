import type { PageContextBuiltIn } from 'vite-plugin-ssr/types';

import type { ExportRenderServerRenderParamsModel } from '#lib-platform/web/exports/exportRendererServer/exportRendererServer.models';

export type _ExportPrerenderPagesParamsModel = {
  pages: Array<ExportRenderServerRenderParamsModel & { pathname: string }>;
};

export type _ExportPrerenderPagesModel = {
  pages(
    params: PageContextBuiltIn,
  ): Promise<Array<{ pageContext: ExportRenderServerRenderParamsModel; url: string }>>;
};
