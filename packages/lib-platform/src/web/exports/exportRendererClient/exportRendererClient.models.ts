import type { RootContextModel } from '#lib-frontend/root/root.models';
import type { _ExportRendererClientModel } from '#lib-platform/web/exports/exportRendererClient/_exportRendererClient.models';

export interface ExportRendererClientParamsModel {}

export interface ExportRendererClientModel extends _ExportRendererClientModel {}

export interface ExportRenderClientRenderParamsModel {
  context?: RootContextModel;
  pageProps?: object;
}
