import { INTERNATIONALIZE_CONFIG } from '#lib-config/locale/internationalize/internationalize.constants';
import { _exportPrerender } from '#lib-platform/web/exports/exportPrerender/_exportPrerender';
import {
  type ExportPrerenderModel,
  type ExportPrerenderParamsModel,
} from '#lib-platform/web/exports/exportPrerender/exportPrerender.models';

const { languageDefault, languages } = INTERNATIONALIZE_CONFIG;

export const exportPrerender = ({}: ExportPrerenderParamsModel): ExportPrerenderModel =>
  _exportPrerender({ languageDefault, languages });
