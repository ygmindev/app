import type { AppReducerModel } from '@lib/frontend/app/stores/appStore/appStore.models';

export const APP_REDUCER: AppReducerModel = {
  actions: {
    isLoadingSet: (store, value) => {
      store.set('isLoading', value);
    },
  },

  initialState: {},
};
