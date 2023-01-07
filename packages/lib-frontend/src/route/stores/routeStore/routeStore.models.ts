import type { RouteModel } from '@lib/frontend/route/route.models';
import type { ReducerModel } from '@lib/frontend/state/state.models';

export interface RouteStateModel {
  previous?: RouteModel;
}

export interface RouteActionsParamsModel {
  previousSet: RouteModel;
}

export interface RouteReducerModel extends ReducerModel<RouteStateModel, RouteActionsParamsModel> {}
