import type { RootContextModel } from '@lib/frontend/root/root.models';
import type { _ExportRendererClientModel } from '@lib/platform/web/exports/exportRendererClient/_exportRendererClient.models';

export interface ExportRenderClientParamsModel {
  context?: RootContextModel;
  pageProps?: object;
}

export type ExportRendererClientModel = _ExportRendererClientModel;
