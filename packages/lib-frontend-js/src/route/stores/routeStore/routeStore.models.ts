import { type ReducerModel } from '@lib/frontend/state/state.models';

export type RouteHeaderModel = {
  title?: string;
};

export type RouteStateModel = {
  isBack?: boolean;
};

export type RouteReducerModel = ReducerModel<RouteStateModel>;
