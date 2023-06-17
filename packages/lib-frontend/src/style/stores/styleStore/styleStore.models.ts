import type { ReducerModel } from '#lib-frontend/state/state.models';
import type { BrightnessModel } from '#lib-frontend/style/style.models';

export type StyleBrightnessStateModel = BrightnessModel;

export type StyleStateModel = {
  brightness: StyleBrightnessStateModel;
};

export type StyleActionsParamsModel = {
  brightnessSet: StyleBrightnessStateModel;
};

export type StyleReducerModel = ReducerModel<StyleStateModel, StyleActionsParamsModel>;
