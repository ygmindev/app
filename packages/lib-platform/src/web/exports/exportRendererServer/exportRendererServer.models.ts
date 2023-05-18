import type { _ExportRendererServerModel } from 'packages/lib-platform/src/web/exports/exportRendererServer/_exportRendererServer.models';
import type { RootContextModel } from '@lib/frontend/root/root.models';

export interface ExportRenderServerParamsModel {
  context?: RootContextModel;
}

export type ExportRendererServerModel = _ExportRendererServerModel;
