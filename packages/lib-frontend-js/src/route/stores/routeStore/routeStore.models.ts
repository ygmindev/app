import { type SliceModel } from '@lib/frontend/state/state.models';

export type RouteHeaderModel = {
  title?: string;
};

export type RouteStateModel = {};

export type RouteReducerModel = SliceModel<RouteStateModel>;
