import { STYLING_STATE_INITIAL } from '@lib/frontend/styling/stores/reducer/reducer.constants';
import type { StylingStateModel } from '@lib/frontend/styling/stores/reducer/reducer.models';
import { STYLING } from '@lib/shared/styling/styling.constants';
import type { PayloadAction, SliceCaseReducers } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

export const { actions: stylingActions, reducer: stylingReducer } = createSlice<
  StylingStateModel,
  SliceCaseReducers<StylingStateModel>
>({
  initialState: STYLING_STATE_INITIAL,
  name: STYLING,
  reducers: {
    themeSet: (state, { payload }: PayloadAction<string>) => {
      state.theme = payload;
    },
  },
});
