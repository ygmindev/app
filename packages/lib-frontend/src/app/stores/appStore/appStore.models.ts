import type { DimensionModel } from '@lib/frontend/platform/platform.models';
import type { ReducerModel } from '@lib/frontend/state/state.models';

export interface AppStateModel {
  dimension: DimensionModel;
  isLoading?: boolean;
}

export interface AppActionsParamsModel {
  dimensionSet: DimensionModel;
  isLoadingSet: boolean;
}

export interface AppReducerModel extends ReducerModel<AppStateModel, AppActionsParamsModel> {}
