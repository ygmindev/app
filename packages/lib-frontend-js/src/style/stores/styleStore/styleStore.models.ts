import { type ReducerModel } from '@lib/frontend/state/state.models';
import { type STYLE_BRIGHTNESS } from '@lib/frontend/style/style.constants';

export type StyleStateModel = {
  brightness: STYLE_BRIGHTNESS;
};

export type StyleReducerModel = ReducerModel<StyleStateModel>;
