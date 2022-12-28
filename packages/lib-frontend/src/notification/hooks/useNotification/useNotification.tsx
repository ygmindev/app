import { ICONS } from '@lib/frontend/core/components/Icon/Icon.constants';
import { useTranslation } from '@lib/frontend/locale/hooks/useTranslation/useTranslation';
import type { NotificationDataModel } from '@lib/frontend/notification/components/Notification/Notification.models';
import type { UseNotificationModel } from '@lib/frontend/notification/hooks/useNotification/useNotification.models';
import { useActions } from '@lib/frontend/state/hooks/useActions/useActions';
import { useTheme } from '@lib/frontend/style/hooks/useTheme/useTheme';
import { THEME_COLOR } from '@lib/frontend/style/style.constants';
import { sleep } from '@lib/shared/core/utils/sleep/sleep';

export const useNotification = (): UseNotificationModel => {
  const actions = useActions();
  const { t } = useTranslation();
  const theme = useTheme();

  const _add = (alert: NotificationDataModel): void => {
    actions?.notification.add({
      ...alert,
      message: t(alert.message),
      title: t(alert.title),
    });
  };

  return {
    add: _add,

    error: (alert) => _add({ ...alert, color: THEME_COLOR.ERROR, icon: ICONS.exclamationCircle }),

    remove: async (id: string): Promise<void> => {
      actions?.notification.update({ id, isRemoving: true });
      await sleep({ duration: theme.animation.duration });
      actions?.notification.remove(id);
    },

    success: (alert) => _add({ ...alert, color: THEME_COLOR.SUCCESS, icon: ICONS.checkCircle }),

    warn: (alert) => _add({ ...alert, color: THEME_COLOR.WARNING, icon: ICONS.exclamationCircle }),
  };
};
