import type { NotificationModel } from '@lib/frontend/notification/components/Notification/Notification.models';

export interface NotificationStateModel {
  alerts: Array<NotificationModel>;
}
