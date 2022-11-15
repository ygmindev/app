import type { RouteModel } from '@lib/frontend/routing/routing.models';
import { ROUTING_STATE_INITIAL } from '@lib/frontend/routing/stores/reducer/reducer.constants';
import { ROUTING } from '@lib/shared/routing/routing.constants';
import type { PayloadAction, SliceCaseReducers } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

import type { RoutingStateModel } from './reducer.models';

export const { actions: routingActions, reducer: routingReducer } = createSlice<
  RoutingStateModel,
  SliceCaseReducers<RoutingStateModel>
>({
  initialState: ROUTING_STATE_INITIAL,
  name: ROUTING,
  reducers: {
    setCurrent: (state, { payload }: PayloadAction<RouteModel>) => {
      state.current = payload;
    },
    setPrevious: (state, { payload }: PayloadAction<RouteModel>) => {
      state.previous = payload;
    },
  },
});
