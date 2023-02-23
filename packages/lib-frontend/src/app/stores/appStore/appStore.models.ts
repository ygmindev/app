import type { ReducerModel } from '@lib/frontend/state/state.models';

export interface AppStateModel {
  isLoading?: boolean;
}

export interface AppActionsParamsModel {
  isLoadingSet: boolean;
}

export interface AppReducerModel extends ReducerModel<AppStateModel, AppActionsParamsModel> {}
