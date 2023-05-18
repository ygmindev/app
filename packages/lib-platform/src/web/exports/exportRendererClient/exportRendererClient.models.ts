import type { _ExportRendererClientModel } from 'packages/lib-platform/src/web/exports/exportRendererClient/_exportRendererClient.models';
import type { RootContextModel } from '@lib/frontend/root/root.models';

export interface ExportRenderClientParamsModel {
  context?: RootContextModel;
  pageProps?: object;
}

export type ExportRendererClientModel = _ExportRendererClientModel;
