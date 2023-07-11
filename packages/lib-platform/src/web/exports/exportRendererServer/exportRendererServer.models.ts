import { type RootContextModel } from '#lib-frontend/root/root.models';
import {
  type _ExportRendererServerModel,
  type _ExportRendererServerParamsModel,
} from '#lib-platform/web/exports/exportRendererServer/_exportRendererServer.models';

export type ExportRenderServerParamsModel = Pick<_ExportRendererServerParamsModel, 'initialize'>;

export type ExportRenderServerRenderParamsModel = {
  context?: RootContextModel;
};

export type ExportRendererServerModel = _ExportRendererServerModel;
