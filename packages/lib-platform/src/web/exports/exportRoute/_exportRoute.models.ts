import type { PageContextBuiltIn } from 'vite-plugin-ssr/types';

import type { ExportRenderServerRenderParamsModel } from '#lib-platform/web/exports/exportRendererServer/exportRendererServer.models';

export interface _ExportRouteParamsModel {}

export interface _ExportRouteModel {
  route(params: PageContextBuiltIn): {
    pageContext: Pick<PageContextBuiltIn, 'urlOriginal'> & ExportRenderServerRenderParamsModel;
  };
}
