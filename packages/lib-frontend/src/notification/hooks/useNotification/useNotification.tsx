import { useTranslation } from '@lib/frontend/locale/hooks/useTranslation/useTranslation';
import type { NotificationDataModel } from '@lib/frontend/notification/notification.models';
import type { UseNotificationModel } from '@lib/frontend/notification/hooks/useNotification/useNotification.models';
import { useActions } from '@lib/frontend/state/hooks/useActions/useActions';
import { THEME_COLOR } from '@lib/frontend/style/style.constants';

export const useNotification = (): UseNotificationModel => {
  const actions = useActions();
  const { t } = useTranslation();

  const _add = (alert: NotificationDataModel): void => {
    actions?.notification.add({
      ...alert,
      message: t(alert.message),
      title: t(alert.title),
    });
  };

  return {
    add: _add,

    error: (alert) => _add({ ...alert, color: THEME_COLOR.ERROR, icon: 'exclamationCircle' }),

    remove: async (id: string): Promise<void> => actions?.notification.remove(id),

    success: (alert) => _add({ ...alert, color: THEME_COLOR.SUCCESS, icon: 'checkCircle' }),

    warn: (alert) => _add({ ...alert, color: THEME_COLOR.WARNING, icon: 'exclamationCircle' }),
  };
};
