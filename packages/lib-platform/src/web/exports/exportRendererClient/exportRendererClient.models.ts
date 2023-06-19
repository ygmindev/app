import type { RootContextModel } from '#lib-frontend/root/root.models';
import type { _ExportRendererClientModel } from '#lib-platform/web/exports/exportRendererClient/_exportRendererClient.models';
import type { EmptyObjectModel } from '#lib-shared/core/core.models';

export type ExportRendererClientParamsModel = EmptyObjectModel;

export type ExportRendererClientModel = _ExportRendererClientModel;

export type ExportRenderClientRenderParamsModel = {
  context?: RootContextModel;
  pageProps?: object;
};
