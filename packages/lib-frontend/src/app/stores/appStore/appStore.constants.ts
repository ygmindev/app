import type { AppReducerModel } from '@lib/frontend/app/stores/appStore/appStore.models';

export const APP_REDUCER: AppReducerModel = {
  actions: {
    dimensionSet: (store, value) => {
      store.set('dimension', value);
    },

    isLoadingSet: (store, value) => {
      store.set('isLoading', value);
    },
  },

  initialState: {
    dimension: { height: undefined, width: undefined },
  },
};
