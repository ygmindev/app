import { type LocationModel } from '@lib/frontend/route/route.models';
import { type ReducerModel } from '@lib/frontend/state/state.models';

export type RouteHeaderModel = {
  title?: string;
};

export type RouteStateModel = {
  current?: LocationModel;
  isBack?: boolean;
};

export type RouteReducerModel = ReducerModel<RouteStateModel>;
