import { type RouteModel } from '#lib-frontend/route/route.models';
import { type _ExportPrerenderPagesModel } from '#lib-platform/web/exports/exportPrerenderPages/_exportPrerenderPages.models';

export type ExportPrerenderPagesParamsModel = {
  routes?: Array<RouteModel>;
};

export type ExportPrerenderPagesModel = _ExportPrerenderPagesModel;
