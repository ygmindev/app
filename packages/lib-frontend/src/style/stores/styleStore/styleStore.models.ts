import type { ReducerModel } from '#lib-frontend/state/state.models';
import type { BrightnessModel } from '#lib-frontend/style/style.models';

export type StyleBrightnessStateModel = BrightnessModel;

export interface StyleStateModel {
  brightness: StyleBrightnessStateModel;
}

export interface StyleActionsParamsModel {
  brightnessSet: StyleBrightnessStateModel;
}

export interface StyleReducerModel extends ReducerModel<StyleStateModel, StyleActionsParamsModel> {}
