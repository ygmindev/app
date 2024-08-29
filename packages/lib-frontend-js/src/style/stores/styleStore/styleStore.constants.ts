import { type StyleReducerModel } from '@lib/frontend/style/stores/styleStore/styleStore.models';
import { STYLE_BRIGHTNESS } from '@lib/frontend/style/style.constants';

export const STYLE_REDUCER: StyleReducerModel = {
  actions: {},

  defaultState: {
    brightness: STYLE_BRIGHTNESS.LIGHT,
  },

  persist: true,
};
