import type { StyleReducerModel } from '@lib/frontend/style/stores/styleStore/styleStore.models';

export const STYLE_REDUCER: StyleReducerModel = {
  actions: {
    themeSet: (store, value) => {
      store.set('theme', value);
    },
  },

  initialState: {
    theme: 'light',
  },
};
