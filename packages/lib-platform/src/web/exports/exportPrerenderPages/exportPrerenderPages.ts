import { config } from '#lib-config/locale/internationalize/internationalize.base';
import { _config } from '#lib-config/locale/internationalize/internationalize.node';
import { _exportPrerenderPages } from '#lib-platform/web/exports/exportPrerenderPages/_exportPrerenderPages';
import type {
  ExportPrerenderPagesModel,
  ExportPrerenderPagesParamsModel,
} from '#lib-platform/web/exports/exportPrerenderPages/exportPrerenderPages.models';

export const exportPrerenderPages = ({
  ...params
}: ExportPrerenderPagesParamsModel): ExportPrerenderPagesModel =>
  _exportPrerenderPages({
    ...params,
    i18n: _config(),
    languageDefault: config.languageDefault,
    languages: config.languages,
    pathnames: ['test1', 'test2'],
  });
