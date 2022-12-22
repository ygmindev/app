import type { ReducerModel } from '@lib/frontend/state/state.models';

export interface StyleStateModel {
  theme: string;
}

export interface StyleActionsParamsModel {
  themeSet: string;
}

export interface StyleReducerModel extends ReducerModel<StyleStateModel, StyleActionsParamsModel> {}
