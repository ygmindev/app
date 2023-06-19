import type { PageContextBuiltIn } from 'vite-plugin-ssr/types';

import type { ExportRenderServerRenderParamsModel } from '#lib-platform/web/exports/exportRendererServer/exportRendererServer.models';
import type { EmptyObjectModel, PartialDeepModel } from '#lib-shared/core/core.models';

export type _ExportRouteParamsModel = EmptyObjectModel;

export type _ExportRouteModel = {
  route(params: _PageContextModel): { pageContext: _PageContextModel };
};

type _PageContextModel = Pick<PageContextBuiltIn, 'urlOriginal'> &
  PartialDeepModel<ExportRenderServerRenderParamsModel>;
