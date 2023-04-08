import type { ReducerModel } from '@lib/frontend/state/state.models';
import type { StyleBrightnessModel } from '@lib/frontend/style/style.models';
import type { DEVICE } from '@lib/shared/user/user.constants';

export type StyleBrightnessStateModel = StyleBrightnessModel | typeof DEVICE;

export interface StyleStateModel {
  brightness: StyleBrightnessStateModel;
}

export interface StyleActionsParamsModel {
  brightnessSet: StyleBrightnessStateModel;
}

export interface StyleReducerModel extends ReducerModel<StyleStateModel, StyleActionsParamsModel> {}
