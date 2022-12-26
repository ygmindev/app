import type { ReducerModel } from '@lib/frontend/state/state.models';

export interface StyleStateModel {
  isDark: boolean;
}

export interface StyleActionsParamsModel {
  isDarkSet: boolean;
}

export interface StyleReducerModel extends ReducerModel<StyleStateModel, StyleActionsParamsModel> {}
