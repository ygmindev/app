import type { LocationModel } from '@lib/frontend/routing/routing.models';

export interface RoutingStateModel {
  current?: LocationModel;
  previous?: LocationModel;
}
