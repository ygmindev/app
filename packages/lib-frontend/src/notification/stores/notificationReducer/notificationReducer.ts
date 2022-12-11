import type {
  NotificationDataModel,
  NotificationModel,
} from '@lib/frontend/notification/components/Notification/Notification.models';
import { NOTIFICATION_STATE_INITIAL } from '@lib/frontend/notification/stores/notificationReducer/notificationReducer.constants';
import { reducer } from '@lib/frontend/state/utils/reducer/reducer';
import type { PartialModel } from '@lib/shared/core/core.models';
import type { WithIdModel } from '@lib/shared/core/decorators/withId/withId.models';
import { uid } from '@lib/shared/core/utils/uid/uid';

export const { actions, useStore } = reducer({
  actions: {
    add: (store, value: NotificationDataModel) => {
      store.set('notifications', [{ ...value, id: uid('alert') }, ...store.get('notifications')]);
    },

    remove: (store, value: string) => {
      store.set(
        'notifications',
        store.get('notifications').filter(({ id }) => id !== value),
      );
    },

    update: (store, value: PartialModel<NotificationModel> & WithIdModel) => {
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

  initialState: NOTIFICATION_STATE_INITIAL,
});
