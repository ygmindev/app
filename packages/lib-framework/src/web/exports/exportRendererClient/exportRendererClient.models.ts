import type { _ExportRendererClientModel } from '@lib/framework/web/exports/exportRendererClient/_exportRendererClient.models';
import type { LocaleParamsModel } from '@lib/frontend/locale/locale.models';
import type { InitialStateModel } from '@lib/shared/root/root.models';

export interface ExportRenderClientParamsModel {
  initialState?: InitialStateModel;
  locale?: LocaleParamsModel;
  pageProps?: object;
}

export type ExportRendererClientModel = _ExportRendererClientModel;
