import type { RootContextModel } from '#lib-frontend/root/root.models';
import type { _ExportRendererServerModel } from '#lib-platform/web/exports/exportRendererServer/_exportRendererServer.models';

export interface ExportRenderServerParamsModel {
  context?: RootContextModel;
}

export type ExportRendererServerModel = _ExportRendererServerModel;
