import { type AppReducerModel } from '@lib/frontend/app/stores/appStore/appStore.models';

export const APP_REDUCER: AppReducerModel = {
  defaultState: {
    dimension: { height: undefined, width: undefined },

    isLoading: false,

    isOffline: false,

    layout: {
      isMinimized: false,
    },
  },
};
