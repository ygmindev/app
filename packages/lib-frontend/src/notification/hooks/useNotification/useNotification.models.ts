import { type NotificationModel } from '#lib-frontend/notification/notification.models';

export type UseNotificationModel = {
  add(alert: NotificationModel): void;
  error(alert: NotificationModel): void;
  remove(id: string): void;
  success(alert: NotificationModel): void;
  warn(alert: NotificationModel): void;
};
