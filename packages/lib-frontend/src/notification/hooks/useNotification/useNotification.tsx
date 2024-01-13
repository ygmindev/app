import { useTranslation } from '@lib-frontend/locale/hooks/useTranslation/useTranslation';
import { type UseNotificationModel } from '@lib-frontend/notification/hooks/useNotification/useNotification.models';
import { type NotificationModel } from '@lib-frontend/notification/notification.models';
import { useActions } from '@lib-frontend/state/hooks/useActions/useActions';
import { THEME_COLOR } from '@lib-frontend/style/style.constants';
import { debounce } from '@lib-shared/core/utils/debounce/debounce';
import { uid } from '@lib-shared/core/utils/uid/uid';

export const useNotification = (): UseNotificationModel => {
  const actions = useActions();
  const { t } = useTranslation();

  const notify = debounce(
    (alert: NotificationModel): void =>
      actions?.notification.notificationsAdd({
        ...alert,
        description: t(alert.description),
        id: alert.id ?? uid(),
        title: t(alert.title),
      }),
  );

  return {
    add: notify,

    error: (alert) =>
      notify({ ...alert, color: THEME_COLOR.ERROR, icon: alert.icon ?? 'exclamationCircle' }),

    remove: (id) => actions?.notification.notificationsRemove({ id }),

    success: (alert) =>
      notify({ ...alert, color: THEME_COLOR.SUCCESS, icon: alert.icon ?? 'checkCircle' }),

    warn: (alert) =>
      notify({ ...alert, color: THEME_COLOR.WARNING, icon: alert.icon ?? 'exclamationCircle' }),
  };
};
