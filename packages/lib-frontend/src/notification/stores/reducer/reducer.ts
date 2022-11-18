import type {
  NotificationDataModel,
  NotificationModel,
} from '@lib/frontend/notification/components/Notification/Notification.models';
import { NOTIFICATION_STATE_INITIAL } from '@lib/frontend/notification/stores/reducer/reducer.constants';
import type { PartialModel } from '@lib/shared/core/core.models';
import type { WithIdModel } from '@lib/shared/core/decorators/withId/withId.models';
import { uid } from '@lib/shared/core/utils/uid/uid';
import { NOTIFICATION } from '@lib/shared/notification/notification.constants';
import type { PayloadAction, SliceCaseReducers } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import { find } from 'lodash';

import type { NotificationStateModel } from './reducer.models';

export const { actions: notificationActions, reducer: notificationReducer } = createSlice<
  NotificationStateModel,
  SliceCaseReducers<NotificationStateModel>
>({
  initialState: NOTIFICATION_STATE_INITIAL,
  name: NOTIFICATION,
  reducers: {
    add: {
      prepare: ({ id, ...payload }: NotificationDataModel) => ({
        payload: { ...payload, id: id || uid('alert') },
      }),
      reducer: (state, { payload }: PayloadAction<NotificationModel>) => {
        !find(state.notifications, ({ id }) => id === payload.id) &&
          state.notifications.unshift(payload);
      },
    },
    remove: (state, { payload }: PayloadAction<string>) => {
      state.notifications = state.notifications.filter(({ id }) => id !== payload);
    },
    update: (state, { payload }: PayloadAction<PartialModel<NotificationModel> & WithIdModel>) => {
      state.notifications = state.notifications.map((notification) =>
        notification.id === payload.id ? { ...notification, ...payload } : notification,
      );
    },
  },
});
