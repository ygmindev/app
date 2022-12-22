import type { RouteReducerModel } from '@lib/frontend/route/stores/routeStore/routeStore.models';

export const ROUTE_REDUCER: RouteReducerModel = {
  actions: {
    currentSet: (store, value) => {
      store.set('current', value);
    },

    previousSet: (store, value) => {
      store.set('previous', value);
    },
  },

  initialState: {},
};
