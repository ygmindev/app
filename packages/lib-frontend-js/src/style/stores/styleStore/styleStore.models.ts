import { type ReducerModel } from '@lib/frontend/state/state.models';
import { type STYLE_BRIGHTNESS } from '@lib/frontend/style/style.constants';
import { type EmptyObjectModel } from '@lib/shared/core/core.models';

export type StyleStateModel = {
  brightness: STYLE_BRIGHTNESS;
};

export type StyleActionsParamsModel = EmptyObjectModel;

export type StyleReducerModel = ReducerModel<StyleStateModel, StyleActionsParamsModel>;
