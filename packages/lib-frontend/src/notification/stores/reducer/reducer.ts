import type { AlertModel } from '@lib/frontend/notification/components/Alert/Alert.models';
import { NOTIFICATION_STATE_INITIAL } from '@lib/frontend/notification/stores/reducer/reducer.constants';
import { uid } from '@lib/shared/core/utils/uid/uid';
import { NOTIFICATION } from '@lib/shared/notification/notification.constants';
import type { PayloadAction, SliceCaseReducers } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

import type { NotificationStateModel } from './reducer.models';

export const { actions: notificationActions, reducer: notificationReducer } = createSlice<
  NotificationStateModel,
  SliceCaseReducers<NotificationStateModel>
>({
  initialState: NOTIFICATION_STATE_INITIAL,
  name: NOTIFICATION,
  reducers: {
    alertAdd: {
      prepare: (payload: Omit<AlertModel, 'id'>) => ({
        payload: { ...payload, id: uid('alert') },
      }),
      reducer: (state, { payload }: PayloadAction<AlertModel>) => {
        state.alerts.unshift(payload);
      },
    },
    alertRemove: (state, { payload }: PayloadAction<string>) => {
      state.alerts = state.alerts.filter(({ id }) => id !== payload);
    },
  },
});
