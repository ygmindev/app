import type { LocationModel } from '#lib-frontend/route/route.models';
import type { ReducerModel } from '#lib-frontend/state/state.models';

export type RouteHeaderModel = {
  title?: string;
};

export type RouteStateModel = {
  isBack?: boolean;
  previous?: LocationModel;
};

export type RouteActionsParamsModel = {
  isBackSet: boolean;
  previousSet: LocationModel;
};

export type RouteReducerModel = ReducerModel<RouteStateModel, RouteActionsParamsModel>;
