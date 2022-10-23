import { ICON } from '@lib/frontend/core/decorators/withIconProps/withIconProps.constants';
import { useTranslation } from '@lib/frontend/locale/hooks/useTranslation/useTranslation';
import type { NotificationDataModel } from '@lib/frontend/notification/components/Notification/Notification.models';
import type { UseNotificationModel } from '@lib/frontend/notification/hooks/useNotification/useNotification.models';
import { notificationActions } from '@lib/frontend/notification/stores/reducer/reducer';
import { useSelector } from '@lib/frontend/root/hooks/useSelector/useSelector';
import { dispatch } from '@lib/frontend/root/stores/store/store';
import { THEME_COLOR } from '@lib/frontend/styling/utils/theme/theme.constants';

export const useNotification = (): UseNotificationModel => {
  const { t } = useTranslation();
  const alerts = useSelector((state) => state.notification.alerts);

  const _add = (alert: NotificationDataModel): void => {
    alerts
      .filter(({ message }) => message === alert.message)
      .forEach(({ id }) => dispatch(notificationActions.remove(id)));
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

    remove: (id) => dispatch(notificationActions.remove(id)),

    success: (alert) => _add({ ...alert, color: THEME_COLOR.SUCCESS, icon: ICON.checkCircle }),

    warn: (alert) =>
      _add({ ...alert, color: THEME_COLOR.WARNING, icon: ICON.exclamationCircle }),
  };
};
