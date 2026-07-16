import { type NotificationModel } from '@lib/frontend/notification/notification.models';
import { type SliceModel } from '@lib/frontend/state/state.models';

export type NotificationStateModel = {
  notifications: Array<NotificationModel>;
};

export type NotificationReducerModel = SliceModel<NotificationStateModel>;
