import type { StyleReducerModel } from '@lib/frontend/style/stores/styleStore/styleStore.models';

export const STYLE_REDUCER: StyleReducerModel = {
  actions: {
    brightnessSet: (store, value) => {
      store.set('brightness', value);
    },
  },

  initialState: {
    brightness: undefined,
  },
};
