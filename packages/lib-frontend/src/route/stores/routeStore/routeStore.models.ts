import type { RouteModel } from '@lib/frontend/route/route.models';
import type { ReducerModel } from '@lib/frontend/state/state.models';

export interface RouteStateModel {
  current?: RouteModel;
  previous?: RouteModel;
}

export interface RouteActionsParamsModel {
  currentSet: RouteModel;
  previousSet: RouteModel;
}

export interface RouteReducerModel extends ReducerModel<RouteStateModel, RouteActionsParamsModel> {}
