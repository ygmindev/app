import { type DimensionModel } from '#lib-frontend/core/core.models';
import { type ReducerModel } from '#lib-frontend/state/state.models';

export type AppStateModel = {
  dimension: DimensionModel;
  isLoading?: boolean;
};

export type AppActionsParamsModel = {
  dimensionSet: DimensionModel;
  isLoadingSet: boolean;
};

export type AppReducerModel = ReducerModel<AppStateModel, AppActionsParamsModel>;
