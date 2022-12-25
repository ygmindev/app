import type { NotificationReducerModel } from '@lib/frontend/notification/stores/notificationStore/notificationStore.models';
import { uid } from '@lib/shared/core/utils/uid/uid';

export const NOTIFICATION_REDUCER: NotificationReducerModel = {
  actions: {
    add: (store, value) => {
      store.set('notifications', [
        { ...value, id: value.id || uid('alert') },
        ...store.get('notifications'),
      ]);
    },

    remove: (store, value: string) => {
      store.set(
        'notifications',
        store.get('notifications').filter(({ id }) => id !== value),
      );
    },

    update: (store, value) => {
      store.set(
        'notifications',
        store
          .get('notifications')
          .map((notification) =>
            notification.id === value.id ? { ...notification, ...value } : notification,
          ),
      );
    },
  },

  initialState: {
    notifications: [],
  },
};