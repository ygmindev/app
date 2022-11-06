import { {{MODULE}}(constantCase)_STATE_INITIAL } from '@lib/frontend/{{MODULE}}(camelCase)/stores/reducer/reducer.constants';
import { {{MODULE}}(constantCase) } from '@lib/shared/{{MODULE}}(camelCase)/{{MODULE}}(camelCase).constants';
import type { PayloadAction, SliceCaseReducers } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

import type { {{MODULE}}(pascalCase)StateModel } from './reducer.models';

export const { actions: {{MODULE}}(camelCase)Actions, reducer: {{MODULE}}(camelCase)Reducer } = createSlice<
  {{MODULE}}(pascalCase)StateModel,
  SliceCaseReducers<{{MODULE}}(pascalCase)StateModel>
>({
  initialState: {{MODULE}}(constantCase)_STATE_INITIAL,
  name: {{MODULE}}(constantCase),
  reducers: {
    action: (state, { payload }: PayloadAction<string>) => {
      state;
    },
  },
});
