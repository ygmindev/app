import { useTranslation } from '@lib/frontend/locale/hooks/useTranslation/useTranslation';
import { type UseNotificationModel } from '@lib/frontend/notification/hooks/useNotification/useNotification.models';
import { type NotificationModel } from '@lib/frontend/notification/notification.models';
import { useActions } from '@lib/frontend/state/hooks/useActions/useActions';
import { useTheme } from '@lib/frontend/style/hooks/useTheme/useTheme';
import { THEME_COLOR } from '@lib/frontend/style/style.constants';
import { debounce } from '@lib/shared/core/utils/debounce/debounce';
import { sleep } from '@lib/shared/core/utils/sleep/sleep';
import { uid } from '@lib/shared/core/utils/uid/uid';

export const useNotification = (): UseNotificationModel => {
  const actions = useActions();
  const { t } = useTranslation();
  const theme = useTheme();

  const notify = debounce(async (alert: NotificationModel): Promise<void> => {
    const id = alert.id ?? uid();
    actions?.notification.notifications.add({
      ...alert,
      description: t(alert.description),
      id,
      title: t(alert.title),
    });

    if (!alert.isInfinite) {
      await sleep(alert.duration ?? theme.notification.duration);
      actions?.notification.notifications.remove({ id });
    }
  });

  return {
    add: notify,

    error: (alert) =>
      notify({ ...alert, color: THEME_COLOR.ERROR, icon: alert.icon ?? 'exclamationCircle' }),

    remove: async (id) => {
      actions?.notification.notifications.remove({ id });
    },

    success: (alert) =>
      notify({ ...alert, color: THEME_COLOR.SUCCESS, icon: alert.icon ?? 'checkCircle' }),

    warn: (alert) =>
      notify({ ...alert, color: THEME_COLOR.WARNING, icon: alert.icon ?? 'exclamationCircle' }),
  };
};
