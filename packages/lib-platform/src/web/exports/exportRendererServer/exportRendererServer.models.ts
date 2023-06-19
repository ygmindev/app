import type { RootContextModel } from '#lib-frontend/root/root.models';
import type { _ExportRendererServerModel } from '#lib-platform/web/exports/exportRendererServer/_exportRendererServer.models';
import type { EmptyObjectModel } from '#lib-shared/core/core.models';

export type ExportRenderServerParamsModel = EmptyObjectModel;

export type ExportRenderServerRenderParamsModel = {
  context?: RootContextModel;
};

export type ExportRendererServerModel = _ExportRendererServerModel;
