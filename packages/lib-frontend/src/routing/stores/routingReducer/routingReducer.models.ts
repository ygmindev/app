import type { RouteModel } from '@lib/frontend/routing/routing.models';

export interface RoutingStateModel {
  current?: RouteModel;
  previous?: RouteModel;
}
