import { type ExportRenderServerRenderParamsModel } from '#lib-platform/web/exports/exportRendererServer/exportRendererServer.models';
import { type CallablePromiseModel } from '#lib-shared/core/core.models';

export type _ExportPrerenderPagesParamsModel = {
  pages: Array<{ getContext?: CallablePromiseModel<_PageContextModel>; pathname: string }>;
};

export type _ExportPrerenderPagesModel = {
  prerenderPages(): Promise<Array<{ pageContext: _PageContextModel; url: string }>>;
};

type _PageContextModel = ExportRenderServerRenderParamsModel;
