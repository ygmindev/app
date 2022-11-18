import { ICON } from '@lib/frontend/core/decorators/withIconProps/withIconProps.constants';
import { useTranslation } from '@lib/frontend/locale/hooks/useTranslation/useTranslation';
import type { NotificationDataModel } from '@lib/frontend/notification/components/Notification/Notification.models';
import type { UseNotificationModel } from '@lib/frontend/notification/hooks/useNotification/useNotification.models';
import { notificationActions } from '@lib/frontend/notification/stores/reducer/reducer';
import { dispatch } from '@lib/frontend/root/stores/store/store';
import { useTheme } from '@lib/frontend/styling/hooks/useTheme/useTheme';
import { THEME_COLOR } from '@lib/frontend/styling/utils/theme/theme.constants';
import { sleep } from '@lib/shared/core/utils/sleep/sleep';

export const useNotification = (): UseNotificationModel => {
  const { t } = useTranslation();
  const theme = useTheme();

  const _add = (alert: NotificationDataModel): void => {
    dispatch(
      notificationActions.add({
        ...alert,
        message: t(alert.message),
        title: t(alert.title),
      }),
    );
  };

  return {
    add: _add,

    error: (alert) => _add({ ...alert, color: THEME_COLOR.ERROR, icon: ICON.exclamationCircle }),

    remove: async (id: string): Promise<void> => {
      dispatch(notificationActions.update({ id, isRemoving: true }));
      await sleep({ duration: theme.animation.duration });
      dispatch(notificationActions.remove(id));
    },

    success: (alert) => _add({ ...alert, color: THEME_COLOR.SUCCESS, icon: ICON.checkCircle }),

    warn: (alert) => _add({ ...alert, color: THEME_COLOR.WARNING, icon: ICON.exclamationCircle }),
  };
};
