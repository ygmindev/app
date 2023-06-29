import { type PageContextBuiltIn } from 'vite-plugin-ssr/types';

import { type InternationalizeConfigModel } from '#lib-config/locale/internationalize/internationalize.models';
import { type ExportRenderServerRenderParamsModel } from '#lib-platform/web/exports/exportRendererServer/exportRendererServer.models';

export type _ExportPrerenderParamsModel = Pick<
  InternationalizeConfigModel,
  'languages' | 'languageDefault'
>;

export type _ExportPrerenderModel = {
  prerender(params: { pageContexts: Array<_PageContextModel> }): Promise<{
    prerenderContext: { pageContexts: Array<_PageContextModel> };
  }>;
};

type _PageContextModel = Pick<PageContextBuiltIn, 'urlOriginal'> &
  ExportRenderServerRenderParamsModel;
