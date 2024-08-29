import { type ReducerModel } from '@lib/frontend/state/state.models';
import { type BrightnessModel } from '@lib/frontend/style/style.models';
import { type EmptyObjectModel } from '@lib/shared/core/core.models';

export type StyleBrightnessStateModel = BrightnessModel;

export type StyleStateModel = {
  brightness: StyleBrightnessStateModel;
};

export type StyleActionsParamsModel = EmptyObjectModel;

export type StyleReducerModel = ReducerModel<StyleStateModel, StyleActionsParamsModel>;
