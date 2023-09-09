import uniqBy from 'lodash/uniqBy';

import { type NotificationReducerModel } from '#lib-frontend/notification/stores/notificationStore/notificationStore.models';
import { uid } from '#lib-shared/core/utils/uid/uid';

export const NOTIFICATION_REDUCER: NotificationReducerModel = {
  actions: {
    add: (store, value) => {
      store.set(
        'notifications',
        uniqBy(
          [{ ...value, _id: value._id ?? uid('alert') }, ...store.get('notifications')],
          'message',
        ),
      );
    },

    remove: (store, value: string) => {
      store.set(
        'notifications',
        store.get('notifications').filter(({ _id }) => _id !== value),
      );
    },

    update: (store, value) => {
      store.set(
        'notifications',
        store
          .get('notifications')
          .map((notification) =>
            notification._id === value._id ? { ...notification, ...value } : notification,
          ),
      );
    },
  },

  initialState: {
    notifications: [],
  },
};
