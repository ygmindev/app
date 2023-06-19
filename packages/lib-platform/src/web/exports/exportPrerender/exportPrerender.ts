import { INTERNATIONALIZE_CONFIG_STATIC } from '#lib-config/locale/internationalize/internationalize.constants';
import { _exportPrerender } from '#lib-platform/web/exports/exportPrerender/_exportPrerender';
import type {
  ExportPrerenderModel,
  ExportPrerenderParamsModel,
} from '#lib-platform/web/exports/exportPrerender/exportPrerender.models';

const { languageDefault, languages } = INTERNATIONALIZE_CONFIG_STATIC;

export const exportPrerender = ({}: ExportPrerenderParamsModel): ExportPrerenderModel =>
  _exportPrerender({ languageDefault, languages });
