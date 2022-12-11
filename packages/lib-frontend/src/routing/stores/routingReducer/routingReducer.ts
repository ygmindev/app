import type { RouteModel } from '@lib/frontend/routing/routing.models';
import { ROUTING_STATE_INITIAL } from '@lib/frontend/routing/stores/routingReducer/routingReducer.constants';
import { reducer } from '@lib/frontend/state/utils/reducer/reducer';

export const { actions, useStore } = reducer({
  actions: {
    setCurrent: (store, value: RouteModel) => {
      store.set('current', value);
    },

    setPrevious: (store, value: RouteModel) => {
      store.set('previous', value);
    },
  },

  initialState: ROUTING_STATE_INITIAL,
});
