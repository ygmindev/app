import type { i18n } from 'i18next';
import type { PageContextBuiltIn } from 'vite-plugin-ssr/types';

import type { ExportRenderServerRenderParamsModel } from '#lib-platform/web/exports/exportRendererServer/exportRendererServer.models';

export interface _ExportPrerenderParamsModel {
  i18n: i18n;
}

export interface _ExportPrerenderModel {
  prerender(
    params: PageContextBuiltIn,
  ): Promise<Array<{ pageContext: ExportRenderServerRenderParamsModel; url: string }>>;
}
