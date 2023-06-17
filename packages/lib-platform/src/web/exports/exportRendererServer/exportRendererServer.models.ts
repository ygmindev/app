import type { RootContextModel } from '#lib-frontend/root/root.models';
import type { _ExportRendererServerModel } from '#lib-platform/web/exports/exportRendererServer/_exportRendererServer.models';

export type ExportRenderServerParamsModel = Record<string, never>;

export type ExportRenderServerRenderParamsModel = {
  context?: RootContextModel;
};

export type ExportRendererServerModel = _ExportRendererServerModel;
