import type { _ExportRendererServerModel } from '@lib/framework/web/exports/exportRendererServer/_exportRendererServer.models';
import type { LocaleParamsModel } from '@lib/frontend/locale/locale.models';
import type { InitialStateModel } from '@lib/shared/root/root.models';

export interface ExportRenderServerParamsModel {
  initialState?: InitialStateModel;
  locale?: LocaleParamsModel;
}

export type ExportRendererServerModel = _ExportRendererServerModel;
