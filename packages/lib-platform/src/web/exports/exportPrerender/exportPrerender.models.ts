import type {
  _ExportPrerenderModel,
  _ExportPrerenderParamsModel,
} from '#lib-platform/web/exports/exportPrerender/_exportPrerender.models';

export interface ExportPrerenderParamsModel extends Omit<_ExportPrerenderParamsModel, 'i18n'> {}

export interface ExportPrerenderModel extends _ExportPrerenderModel {}
