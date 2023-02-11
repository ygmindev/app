import type { ReducerModel } from '@lib/frontend/state/state.models';
import type { StyleBrightnessModel } from '@lib/frontend/style/style.models';

export interface StyleStateModel {
  brightness?: StyleBrightnessModel;
}

export interface StyleActionsParamsModel {
  brightnessSet: StyleBrightnessModel;
}

export interface StyleReducerModel extends ReducerModel<StyleStateModel, StyleActionsParamsModel> {}
