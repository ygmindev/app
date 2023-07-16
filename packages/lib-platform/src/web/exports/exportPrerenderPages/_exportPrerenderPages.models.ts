import { type ExportRenderServerRenderParamsModel } from '#lib-platform/web/exports/exportRendererServer/exportRendererServer.models';

export type _ExportPrerenderPagesParamsModel = {
  pages: Array<{ getContext?: () => Promise<_PageContextModel>; pathname: string }>;
};

export type _ExportPrerenderPagesModel = {
  prerenderPages(): Promise<Array<{ pageContext: _PageContextModel; url: string }>>;
};

type _PageContextModel = ExportRenderServerRenderParamsModel;
