import { useTranslation } from '@lib/frontend/locale/hooks/useTranslation/useTranslation';
import type { UseNotificationModel } from '@lib/frontend/notification/hooks/useNotification/useNotification.models';
import type { NotificationDataModel } from '@lib/frontend/notification/notification.models';
import { useActions } from '@lib/frontend/state/hooks/useActions/useActions';
import { THEME_COLOR } from '@lib/frontend/style/style.constants';

export const useNotification = (): UseNotificationModel => {
  const actions = useActions();
  const { t } = useTranslation();

  const notify = (alert: NotificationDataModel): void =>
    actions?.notification.add({
      ...alert,
      message: t(alert.message),
      title: t(alert.title),
    });

  return {
    add: notify,

    error: (alert) =>
      notify({ ...alert, color: THEME_COLOR.ERROR, icon: alert.icon || 'exclamationCircle' }),

    remove: async (id: string): Promise<void> => actions?.notification.remove(id),

    success: (alert) =>
      notify({ ...alert, color: THEME_COLOR.SUCCESS, icon: alert.icon || 'checkCircle' }),

    warn: (alert) =>
      notify({ ...alert, color: THEME_COLOR.WARNING, icon: alert.icon || 'exclamationCircle' }),
  };
};
