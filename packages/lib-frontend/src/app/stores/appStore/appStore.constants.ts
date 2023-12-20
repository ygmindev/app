import { type AppReducerModel } from '#lib-frontend/app/stores/appStore/appStore.models';

export const APP_REDUCER: AppReducerModel = {
  actions: {},

  initialState: {
    dimension: { height: undefined, width: undefined },

    isLoading: false,
  },
};
