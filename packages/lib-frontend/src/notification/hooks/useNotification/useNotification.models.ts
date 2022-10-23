import type { NotificationDataModel } from '@lib/frontend/notification/components/Notification/Notification.models';

export interface UseNotificationModel {
  add(alert: NotificationDataModel): void;
  error(alert: NotificationDataModel): void;
  remove(id: string): void;
  success(alert: NotificationDataModel): void;
  warn(alert: NotificationDataModel): void;
}
