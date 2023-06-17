import type { i18n } from 'i18next';
import type { PageContextBuiltIn } from 'vite-plugin-ssr/types';

import type { InternationalizeConfigModel } from '#lib-config/locale/internationalize/internationalize.models';
import type { ExportRenderServerRenderParamsModel } from '#lib-platform/web/exports/exportRendererServer/exportRendererServer.models';

export type _ExportPrerenderParamsModel = Pick<
  InternationalizeConfigModel,
  'languages' | 'languageDefault'
> & { i18n: i18n; pathnames: Array<string> };

export type _ExportPrerenderModel = {
  prerender(params: PageContextBuiltIn): Promise<{
    prerenderContext: { pageContexts: Array<_PageContextModel> };
  }>;
};

export type _PageContextModel = Pick<PageContextBuiltIn, 'urlOriginal'> &
  ExportRenderServerRenderParamsModel;
