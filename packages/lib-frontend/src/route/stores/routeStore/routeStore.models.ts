import type { LocationModel } from '@lib/frontend/route/route.models';
import type { ReducerModel } from '@lib/frontend/state/state.models';

export interface RouteStateModel {
  previous?: LocationModel;
}

export interface RouteActionsParamsModel {
  previousSet: LocationModel;
}

export interface RouteReducerModel extends ReducerModel<RouteStateModel, RouteActionsParamsModel> {}
