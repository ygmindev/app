import type { i18n } from 'i18next';

import type { InternationalizeConfigModel } from '#lib-config/locale/internationalize/internationalize.models';
import type { ExportRenderServerRenderParamsModel } from '#lib-platform/web/exports/exportRendererServer/exportRendererServer.models';

export type _ExportPrerenderPagesParamsModel = Pick<
  InternationalizeConfigModel,
  'languages' | 'languageDefault'
> & { i18n: i18n; pathnames: Array<string> };

export type _ExportPrerenderPagesModel = {
  pages: Array<{
    pageContext: ExportRenderServerRenderParamsModel;
    url: string;
  }>;
};
