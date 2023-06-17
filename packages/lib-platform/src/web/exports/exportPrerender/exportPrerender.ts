import { _exportPrerender } from '#lib-platform/web/exports/exportPrerender/_exportPrerender';
import type {
  ExportPrerenderModel,
  ExportPrerenderParamsModel,
} from '#lib-platform/web/exports/exportPrerender/exportPrerender.models';

export const exportPrerender = ({ ...params }: ExportPrerenderParamsModel): ExportPrerenderModel =>
  _exportPrerender({ ...params });
