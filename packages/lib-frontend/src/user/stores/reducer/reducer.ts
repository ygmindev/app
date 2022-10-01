import { USER_STATE_INITIAL } from '@lib/frontend/user/stores/reducer/reducer.constants';
import type { UserStateModel } from '@lib/frontend/user/stores/reducer/reducer.models';
import { merge } from '@lib/shared/core/utils/merge/merge';
import type { EntityResourceDataModel } from '@lib/shared/resource/resources/EntityResource/EntityResource.models';
import type { UserModel } from '@lib/shared/user/resources/User/User.models';
import { USER } from '@lib/shared/user/user.constants';
import type { PayloadAction, SliceCaseReducers } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

export const { actions: userActions, reducer: userReducer } = createSlice<
  UserStateModel,
  SliceCaseReducers<UserStateModel>
>({
  initialState: USER_STATE_INITIAL,
  name: USER,
  reducers: {
    currentUserSet: (state, { payload }: PayloadAction<UserModel | null>) => {
      state.currentUser = payload;
    },

    currentUserUpdate: (state, { payload }: PayloadAction<EntityResourceDataModel<UserModel>>) => {
      state.currentUser = state.currentUser
        ? merge({ values: [state.currentUser, payload] })
        : state.currentUser;
    },
  },
});
