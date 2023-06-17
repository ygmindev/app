import type { RootContextModel } from '#lib-frontend/root/root.models';
import type { _ExportRendererClientModel } from '#lib-platform/web/exports/exportRendererClient/_exportRendererClient.models';

export type ExportRendererClientParamsModel = Record<string, never>;

export type ExportRendererClientModel = _ExportRendererClientModel;

export type ExportRenderClientRenderParamsModel = {
  context?: RootContextModel;
  pageProps?: object;
};
