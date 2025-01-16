import { type ResourcePageParamsModel } from '@lib/frontend/admin/pages/ResourcePage/ResourcePage.models';
import { resourceRoute as resourceRouteBase } from '@lib/frontend/admin/pages/ResourcePage/ResourcePage.route.base';
import { type RouteModel } from '@lib/frontend/route/route.models';

export const resourceRoute: RouteModel<undefined, ResourcePageParamsModel> = {
  ...resourceRouteBase,
  loaders: () => ({
    data: async () => 'data',
  }),
};
