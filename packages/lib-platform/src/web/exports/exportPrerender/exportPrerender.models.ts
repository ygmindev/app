import type {
  _ExportPrerenderModel,
  _ExportPrerenderParamsModel,
} from '#lib-platform/web/exports/exportPrerender/_exportPrerender.models';

export type ExportPrerenderParamsModel = Omit<_ExportPrerenderParamsModel, 'i18n'>;

export type ExportPrerenderModel = _ExportPrerenderModel;
