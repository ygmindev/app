import { type LocationModel } from '@lib/frontend/route/route.models';
import { type ReducerModel } from '@lib/frontend/state/state.models';
import { type EmptyObjectModel } from '@lib/shared/core/core.models';

export type RouteHeaderModel = {
  title?: string;
};

export type RouteStateModel = {
  isBack?: boolean;
  previous?: LocationModel;
};

export type RouteActionsParamsModel = EmptyObjectModel;

export type RouteReducerModel = ReducerModel<RouteStateModel, RouteActionsParamsModel>;
