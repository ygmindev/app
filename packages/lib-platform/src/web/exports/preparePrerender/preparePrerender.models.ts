import { type RouteModel } from '@lib/frontend/route/route.models';
import { type _PreparePrerenderModel } from '@lib/platform/web/exports/preparePrerender/_preparePrerender.models';

export type PreparePrerenderParamsModel = {
  routes?: Array<RouteModel>;
};

export type PreparePrerenderModel = _PreparePrerenderModel;
