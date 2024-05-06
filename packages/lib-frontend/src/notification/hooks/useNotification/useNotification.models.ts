import { type NotificationModel } from '@lib/frontend/notification/notification.models';

export type UseNotificationModel = {
  add(alert: NotificationModel): Promise<void>;
  error(alert: NotificationModel): Promise<void>;
  remove(id: string): Promise<void>;
  success(alert: NotificationModel): Promise<void>;
  warn(alert: NotificationModel): Promise<void>;
};
