import { type ProviderPropsModel } from '@lib/frontend/core/core.models';
import { type RouteContextModel, type RouteModel } from '@lib/frontend/route/route.models';

export type _RouterPropsModel = ProviderPropsModel<RouteContextModel> & {
  routes?: Array<RouteModel>;
};
