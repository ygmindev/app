import { useTranslation } from '@lib/frontend/locale/hooks/useTranslation/useTranslation';
import type { UseAlertModel } from '@lib/frontend/notification/hooks/useAlert/useAlert.models';
import { notificationActions } from '@lib/frontend/notification/stores/reducer/reducer';
import { useSelector } from '@lib/frontend/root/hooks/useSelector/useSelector';
import { dispatch } from '@lib/frontend/root/stores/store/store';

export const useAlert = (): UseAlertModel => {
  const { t } = useTranslation();
  const alerts = useSelector((state) => state.notification.alerts);

  return {
    alertAdd: async (alert) => {
      alerts
        .filter(({ message }) => message === alert.message)
        .forEach(({ id }) => dispatch(notificationActions.alertRemove(id)));
      dispatch(
        notificationActions.alertAdd({
          ...alert,
          message: t(alert.message),
          title: t(alert.title),
        }),
      );
    },

    alertRemove: (id) => dispatch(notificationActions.alertRemove(id)),
  };
};
