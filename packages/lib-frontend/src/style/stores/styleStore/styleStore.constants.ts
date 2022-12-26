import type { StyleReducerModel } from '@lib/frontend/style/stores/styleStore/styleStore.models';

export const STYLE_REDUCER: StyleReducerModel = {
  actions: {
    isDarkSet: (store, value) => {
      store.set('isDark', value);
    },
  },

  initialState: {
    isDark: false,
  },
};
