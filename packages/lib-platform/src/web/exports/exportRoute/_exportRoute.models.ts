import type { PageContextBuiltIn } from 'vite-plugin-ssr/types';

import type { ExportRenderServerRenderParamsModel } from '#lib-platform/web/exports/exportRendererServer/exportRendererServer.models';
import type { PartialDeepModel } from '#lib-shared/core/core.models';

export type _ExportRouteParamsModel = Record<string, never>;

export type _ExportRouteModel = {
  route(params: PageContextBuiltIn): {
    pageContext: Pick<PageContextBuiltIn, 'urlOriginal'> &
      PartialDeepModel<ExportRenderServerRenderParamsModel>;
  };
};
