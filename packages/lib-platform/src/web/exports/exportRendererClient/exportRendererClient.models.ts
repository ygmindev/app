import type { _ExportRendererClientModel } from '@lib/platform/web/exports/exportRendererClient/_exportRendererClient.models';
import type { RootContextModel } from '@lib/frontend/root/root.models';

export interface ExportRenderClientParamsModel {
  context?: RootContextModel;
  pageProps?: object;
}

export type ExportRendererClientModel = _ExportRendererClientModel;
