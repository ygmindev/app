import { STATE_LOADER } from '@lib/frontend/state/state.constants';
import type { StyleReducerModel } from '@lib/frontend/style/stores/styleStore/styleStore.models';
import { STYLE_BRIGHTNESS } from '@lib/frontend/style/style.constants';

export const STYLE_REDUCER: StyleReducerModel = {
  actions: {
    brightnessSet: (store, value) => {
      store.set('brightness', value);
    },
  },

  initialState: {
    brightness: STYLE_BRIGHTNESS.LIGHT,
  },

  loaders: {
    brightness: STATE_LOADER.STORAGE,
  },
};
