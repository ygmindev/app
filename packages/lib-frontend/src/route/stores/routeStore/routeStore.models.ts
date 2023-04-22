import type { ReducerModel } from '@lib/frontend/state/state.models';
import type { LocationModel } from '@lib/frontend/route/route.models';

export interface RouteHeaderModel {
  title?: string;
}

export interface RouteStateModel {
  isBack?: boolean;
  previous?: LocationModel;
}

export interface RouteActionsParamsModel {
  isBackSet: boolean;
  previousSet: LocationModel;
}

export interface RouteReducerModel extends ReducerModel<RouteStateModel, RouteActionsParamsModel> {}
