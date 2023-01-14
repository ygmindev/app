import type { RouteReducerModel } from '@lib/frontend/route/stores/routeStore/routeStore.models';

export const ROUTE_REDUCER: RouteReducerModel = {
  actions: {
    previousSet: (store, value) => {
      store.set('previous', value);
    },
  },

  initialState: {},
};
